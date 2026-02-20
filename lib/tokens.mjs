import { parseStyle, StyleNotFoundError } from './parser.mjs';

export async function handleGetTokens({ style, format }) {
  try {
    const parsed = await parseStyle(style);

    if (parsed.isFreeform) {
      return {
        content: [{
          type: 'text',
          text: JSON.stringify({
            style,
            note: 'Freeform is intentionally unopinionated — define your own tokens based on the project context.',
          }, null, 2),
        }],
      };
    }

    if (format === 'flat') {
      const flat = {};
      for (const [key, value] of Object.entries(parsed.rawVars)) {
        flat['--' + key] = value;
      }
      // Add font stacks
      for (const [role, stack] of Object.entries(parsed.fonts)) {
        flat['--font-' + role] = stack.join(', ');
      }
      return {
        content: [{ type: 'text', text: JSON.stringify({ style, tokens: flat }, null, 2) }],
      };
    }

    // Nested format
    const tokens = {
      color: parsed.colors,
      font: {},
      radius: {},
      shadow: {},
      transition: {},
    };

    // Fonts
    for (const [role, stack] of Object.entries(parsed.fonts)) {
      tokens.font[role] = stack.join(', ');
    }

    // Radii
    if (parsed.radii.length === 1) {
      tokens.radius.DEFAULT = parsed.radii[0];
    } else if (parsed.radii.length > 1) {
      tokens.radius.sm = parsed.radii[0];
      tokens.radius.DEFAULT = parsed.radii[Math.floor(parsed.radii.length / 2)];
      tokens.radius.lg = parsed.radii[parsed.radii.length - 1];
    }

    // Shadows
    parsed.shadows.forEach((s, i) => {
      tokens.shadow[i === 0 ? 'DEFAULT' : 'lg'] = s;
    });

    // Transitions
    if (parsed.transitions.durations.length > 0) {
      tokens.transition.duration = parsed.transitions.durations[0];
    }
    if (parsed.transitions.easings.length > 0) {
      tokens.transition.easing = parsed.transitions.easings[0];
    }

    // Dark mode colors
    if (Object.keys(parsed.darkColors).length > 0 && !parsed.darkColors._extracted) {
      tokens.colorDark = parsed.darkColors;
    }

    // Clean empty objects
    for (const key of Object.keys(tokens)) {
      if (typeof tokens[key] === 'object' && Object.keys(tokens[key]).length === 0) {
        delete tokens[key];
      }
    }

    return {
      content: [{ type: 'text', text: JSON.stringify({ style, tokens }, null, 2) }],
    };
  } catch (err) {
    if (err instanceof StyleNotFoundError) {
      return {
        isError: true,
        content: [{ type: 'text', text: err.message }],
      };
    }
    throw err;
  }
}
