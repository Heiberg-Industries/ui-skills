import { readFile } from 'node:fs/promises';
import { access } from 'node:fs/promises';
import { resolveStylePath, listStyles } from './styles.mjs';

// ─── Cache ──────────────────────────────────────────────────
const cache = new Map();

// ─── Public API ─────────────────────────────────────────────

export async function parseStyle(styleName) {
  if (cache.has(styleName)) return cache.get(styleName);

  const filePath = resolveStylePath(styleName);
  try {
    await access(filePath);
  } catch {
    const available = await listStyles();
    throw new StyleNotFoundError(styleName, available);
  }

  const md = await readFile(filePath, 'utf-8');
  const result = parse(md, styleName);
  cache.set(styleName, result);
  return result;
}

export class StyleNotFoundError extends Error {
  constructor(name, available) {
    super(`Style "${name}" not found. Available: ${available.join(', ')}`);
    this.name = 'StyleNotFoundError';
    this.available = available;
  }
}

// ─── Markdown Parsing ───────────────────────────────────────

function parse(md, styleName) {
  const title = extractTitle(md);
  const tagline = extractTagline(md);
  const sections = splitSections(md);
  const hintsBody = sections['implementation-hints'] || '';

  const cssVars = extractCssVars(hintsBody);
  const fonts = extractFonts(hintsBody);
  const colors = buildColorMap(cssVars);
  const darkColors = extractDarkModeColors(sections['dark-mode'] || sections['dark-mode-light-mode'] || '');
  const shadows = extractShadows(hintsBody);
  const radii = extractRadii(hintsBody, sections['borders-shadows'] || '');
  const transitions = extractTransitions(hintsBody, sections['motion'] || '');
  const isFreeform = styleName === 'freeform';

  return {
    name: styleName,
    title,
    tagline,
    isFreeform,
    colors,
    darkColors,
    fonts,
    shadows,
    radii,
    transitions,
    rawVars: Object.fromEntries(cssVars),
  };
}

// ─── Extractors ─────────────────────────────────────────────

function extractTitle(md) {
  const m = md.match(/^# (.+)$/m);
  return m ? m[1].trim() : '';
}

function extractTagline(md) {
  const m = md.match(/^# .+\n+> (.+)$/m);
  return m ? m[1].trim() : '';
}

function splitSections(md) {
  const sections = {};
  const parts = md.split(/^## /m);
  for (const part of parts) {
    if (!part.trim()) continue;
    const nl = part.indexOf('\n');
    if (nl === -1) continue;
    const heading = part.slice(0, nl).trim();
    const body = part.slice(nl + 1);
    const key = heading
      .replace(/\s*\(.*\)/, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    sections[key] = body;
  }
  return sections;
}

function extractCssVars(text) {
  const vars = new Map();
  const re = /--([a-zA-Z0-9-]+):\s*(.+?)(?:\s*\/\*.*\*\/)?$/gm;
  let m;
  while ((m = re.exec(text))) {
    vars.set(m[1], m[2].trim().replace(/;$/, ''));
  }
  return vars;
}

function extractFonts(text) {
  const fonts = {};
  const re = /^font-(heading|body|mono|primary|display|accent|serif|body-sans):\s*(.+)$/gm;
  let m;
  while ((m = re.exec(text))) {
    const role = normalizeFontRole(m[1]);
    fonts[role] = m[2]
      .split(',')
      .map(f => f.trim().replace(/^['"]|['"]$/g, ''));
  }
  return fonts;
}

function normalizeFontRole(role) {
  const map = {
    'primary': 'heading',
    'display': 'heading',
    'serif': 'heading',
    'body-sans': 'body',
    'accent': 'accent',
  };
  return map[role] || role;
}

function buildColorMap(cssVars) {
  const colors = {};
  for (const [key, value] of cssVars) {
    if (key.startsWith('color-') || isColorValue(value)) {
      const role = normalizeColorKey(key);
      colors[role] = value;
    }
  }
  return colors;
}

function normalizeColorKey(key) {
  // Strip common prefixes
  let k = key
    .replace(/^color-/, '')
    .replace(/^(deco|y2k|dm|neu|glass)-/, '');

  // Map known aliases
  const aliases = {
    'bg': 'background',
    'bg-alt': 'backgroundAlt',
    'bg-start': 'backgroundStart',
    'bg-end': 'backgroundEnd',
    'bg-dark': 'backgroundDark',
    'bg-light': 'backgroundLight',
    'bg-card': 'surface',
    'surface': 'surface',
    'card': 'surface',
    'elevated': 'surfaceElevated',
    'text': 'textPrimary',
    'text-primary': 'textPrimary',
    'text-secondary': 'textSecondary',
    'text-tertiary': 'textTertiary',
    'text-on-gradient': 'textOnGradient',
    'border': 'border',
    'shadow': 'shadow',
    'primary': 'primary',
    'primary-hover': 'primaryHover',
    'accent': 'accent',
    'accent-hover': 'accentHover',
    'secondary': 'secondary',
    'success': 'success',
    'error': 'error',
    'warning': 'warning',
    'muted': 'textMuted',
    'gold': 'accent',
    'gold-light': 'accentLight',
    'jewel': 'secondary',
    'gradient-1': 'gradient1',
    'gradient-2': 'gradient2',
    'gradient-3': 'gradient3',
    'gradient-4': 'gradient4',
  };

  if (aliases[k]) return aliases[k];

  // Fallback: camelCase
  return k.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function isColorValue(value) {
  return /^#[0-9a-fA-F]{3,8}$/.test(value) || value.startsWith('rgba(');
}

function extractDarkModeColors(text) {
  // Look for CSS custom properties in the dark mode section
  const vars = extractCssVars(text);
  if (vars.size > 0) return buildColorMap(vars);

  // Fallback: extract hex values from prose
  const colors = {};
  const hexRe = /#([0-9A-Fa-f]{6})\b/g;
  let m;
  const hexValues = [];
  while ((m = hexRe.exec(text))) {
    hexValues.push('#' + m[1]);
  }
  // Only return if we found some
  if (hexValues.length > 0) {
    colors._extracted = hexValues;
  }
  return colors;
}

function extractShadows(text) {
  const shadows = [];
  // From CSS blocks
  const re = /box-shadow:\s*([^;}\n]+)/g;
  let m;
  while ((m = re.exec(text))) {
    const val = m[1].trim();
    if (!shadows.includes(val)) shadows.push(val);
  }
  return shadows;
}

function extractRadii(hintsBody, bordersBody) {
  const radii = new Set();
  const combined = hintsBody + '\n' + bordersBody;
  const re = /border-radius:\s*(\d+px)/g;
  let m;
  while ((m = re.exec(combined))) {
    radii.add(m[1]);
  }
  // Also look for rounded-* Tailwind classes to infer
  const twRe = /rounded-(\w+)/g;
  while ((m = twRe.exec(hintsBody))) {
    const tw = m[1];
    const map = { none: '0px', sm: '2px', md: '6px', lg: '8px', xl: '12px', '2xl': '16px', '3xl': '24px', full: '9999px' };
    if (map[tw]) radii.add(map[tw]);
  }
  return [...radii].sort((a, b) => parseInt(a) - parseInt(b));
}

function extractTransitions(hintsBody, motionBody) {
  const combined = hintsBody + '\n' + motionBody;
  const durations = new Set();
  const easings = new Set();

  // transition: all 0.1s ease
  const transRe = /transition[^:]*:\s*\w+\s+([\d.]+s)\s+([a-z-]+)/g;
  let m;
  while ((m = transRe.exec(combined))) {
    durations.add(m[1]);
    easings.add(m[2]);
  }

  // duration-150, duration-200
  const durationRe = /duration-(\d+)/g;
  while ((m = durationRe.exec(combined))) {
    durations.add(m[1] + 'ms');
  }

  return {
    durations: [...durations],
    easings: [...easings],
  };
}
