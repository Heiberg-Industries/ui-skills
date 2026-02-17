# Minimalism

> Less, but better — every element earns its place.

## Non-Negotiables

**If you skip any of these three, it is not Minimalism.** These define the essence of the style — without them, the result reads as "empty" or "unfinished" rather than intentionally restrained:

1. **Extreme reduction — every element must justify its existence.** If an element can be removed without losing meaning, remove it. No decorative borders, no ornamental icons, no background patterns, no "nice to have" UI chrome. Navigation has only essential links. Cards have only essential content. Footers have only essential links. Visible UI elements should be countable. If your page has more than 2-3 colors, more than 2 font weights, or more than one decorative element, you've over-designed.

2. **Typography and whitespace as the primary design tools.** With so few elements, the ones that remain must be masterfully composed. Typography is large, carefully weighted, and precisely spaced. Whitespace is generous — not "we ran out of content" generous, but "every pixel of space is intentional" generous. The ratio of whitespace to content should feel closer to 70:30 than 50:50. Margins and padding are noticeably more generous than in other styles.

3. **A near-monochromatic palette with ONE accent at most.** The color scheme is built on shades of one hue (usually neutrals — white, off-white, gray, black) with at most one accent color used sparingly for interactive elements. If you find yourself reaching for a third color, stop. The restraint IS the design.

### Quick self-test

Count the distinct visual elements on your page. Can you reduce it by 30%? Does the whitespace feel generous to the point of being luxurious? Is there only ONE accent color? Could a person describe your page's visual identity in two words (e.g., "black and white", "lots of space")? If yes, it's Minimalism.

## Identity

- **Origin**: Rooted in the "less is more" philosophy of Ludwig Mies van der Rohe, Japanese aesthetics (ma — negative space), and Dieter Rams' 10 principles of good design. In digital, influenced by early Apple design under Jony Ive and typographic web design.
- **Mood**: Calm, focused, refined, spacious, sophisticated, intentional, quiet confidence
- **Best for**: Luxury brands, editorial/publishing, portfolios, wellness/health, fashion, architecture, photography, premium SaaS, personal sites
- **Avoid for**: Data-dense dashboards, marketplaces with lots of products, children's apps, anything that needs to feel energetic or playful, e-commerce with many CTAs

## Typography

### Philosophy
Typography is the HERO of minimalist design. With decoration stripped away, every typographic choice is magnified. The font selection, weight, size, and spacing carry the entire visual identity.

### Font Characteristics
- **Primary (headings)**: Refined sans-serifs or elegant serifs. Minimal weight variation — often just one weight for headings (Medium or Light, not Bold). The font itself should be beautiful, not made beautiful by bolding it.
  - Sans-serif families: Helvetica Neue, SF Pro, Inter (Light/Regular), Instrument Sans, Geist, Söhne
  - Serif families: Playfair Display, Cormorant, EB Garamond, Freight Text, GT Sectra
- **Secondary (body)**: Same family at regular weight, or a highly legible companion. System fonts work beautifully in minimalism.
  - Families to consider: Inter, system-ui, Helvetica Neue, SF Pro Text
- **ONE font family is often enough** — heading and body from the same family at different weights

### Scale & Weight
- **Large, confident headings** — 48px-80px for hero text, but in Light or Regular weight (300-400), not Bold. The size does the work, not the weight.
- Body: Regular (400) at 16-18px, generous line-height (1.6-1.8)
- Very few text sizes — 3-4 across the entire page
- Letter-spacing: slightly open on headings (+0.01em to +0.03em), default on body
- Extreme contrast between heading size and body size, but NOT through weight — through scale

## Color

### Philosophy
Color in Minimalism is an exercise in restraint. The palette is barely there — neutrals dominate, and any color is an event. When color appears, it demands attention precisely because everything else is quiet.

### Palette Construction
- **Background**: White (#FFFFFF), off-white (#FAFAFA, #F8F7F4), or very light warm gray. Can also be near-black for dark minimalism.
- **Text**: Near-black (#111111, #1A1A1A) for primary, medium gray (#888888, #999999) for secondary. The text color is slightly warmer or cooler than pure black — it has personality.
- **Accent**: ONE color, used sparingly — only for links, CTAs, and active states. No more than 5-10% of the page's visual area should be the accent color. It could be muted (a dusty rose, sage green) or vivid (a single bright blue) — but only ONE.
- **Surfaces**: White or off-white. Cards barely differ from the background — perhaps a shade lighter/darker, or a very subtle border.
- **Zero decorative color** — no colored backgrounds for sections, no colored badges, no tinted surfaces

### Dark Minimalism
A powerful variant:
- Near-black background (#0A0A0A, #111111)
- Off-white text (#E8E8E8, #D4D4D4)
- Same single accent color, slightly brightened
- The restraint is even more dramatic in dark mode

## Spacing & Layout

### Grid System
- Simple grid, often just a single centered column for editorial content
- Max-width is narrower than typical — 640-800px for text content, up to 1200px for multi-column layouts
- Generous margins from viewport edges

### Spacing Philosophy
- **Aggressively generous whitespace** — this is the defining spatial characteristic
- Section padding: 120px-200px vertical. This is NOT a typo — sections breathe.
- Between elements: 32px-64px. More than feels "necessary."
- Inside cards/containers: 32px-48px padding
- The whitespace IS the design — it creates calm, focus, and sophistication
- Use consistent spacing values from a tight scale (8, 16, 24, 32, 48, 64, 96, 128)

### Composition
- **Single-column layouts** for text-heavy content (the most minimal option)
- **Asymmetric two-column** for visual interest without complexity
- Elements are placed with care — every position is deliberate
- No visual clutter — if two elements are close together, they better be closely related
- Let elements breathe — never crowd

## Borders & Shadows

### Philosophy
Minimalism uses the LEAST amount of visual separation possible. If whitespace alone can distinguish elements, don't add a border. If a subtle border works, don't add a shadow.

### Implementation
- **Shadows**: Extremely rare or absent. If used, barely perceptible — `0 1px 2px rgba(0,0,0,0.04)`. Most minimalist designs use zero shadows.
- **Borders**: Hairline (1px) in very light gray (#E5E5E5, #EBEBEB). Used only where essential — table rows, input fields, section dividers.
- **Border radius**: 0px (sharp) or very small (2px-4px). Large rounded corners add visual noise. Pick sharp or slightly rounded and be consistent.
- **Dividers**: A single thin line, or just whitespace. Prefer whitespace.
- **Visual separation**: Achieved through space, not lines. Elements are grouped by proximity and separated by generous gaps.

## Components

### Buttons
- Primary: Solid fill in accent color OR near-black. Small radius (0-4px). Medium weight text (500).
- Secondary: Outlined with thin 1px border, or text-only underlined
- Very minimal padding variation — all buttons roughly the same size
- Hover: Subtle opacity change or slight color shift. Nothing dramatic.
- Keep button text short — one or two words maximum

### Cards
- Barely visible — white on off-white, or defined by a single hairline border
- NO shadow (or the absolute minimum if forced)
- Generous internal padding (32px+)
- Minimal content: heading, short description, one action
- No decorative elements inside cards

### Navigation
- Extremely simple — logo + a few text links + one CTA (optional)
- No background color on the navbar (transparent over the page background)
- Text links in regular weight, active state indicated by color or underline
- Consider hiding navigation behind a menu icon even on desktop for ultimate minimalism
- Sticky nav is fine but should be nearly invisible — just text floating at the top

### Inputs & Forms
- Hairline bottom border only (no full border box) — the most minimal input style
- Or: thin full border, very small radius
- Focus: accent color on the border, nothing else changes
- Labels: small, above the input, in secondary text color
- No icons inside inputs unless absolutely necessary

## Motion

### Philosophy
Animation in Minimalism is **nearly imperceptible** — so subtle that users feel it more than see it. Movement should never draw attention to itself.

### Implementation
- **Transitions**: Slow and smooth — 300-500ms, ease-out. The slowness feels intentional and luxurious.
- **Hover**: Subtle opacity change (1 → 0.7) or color shift. No scale, no translate.
- **Entrances**: Gentle fade-in, optional subtle upward drift (translateY 8px → 0). Staggered delays (100-200ms) for lists.
- **Scroll**: No parallax. Content simply appears as you scroll. Optional fade-in-on-scroll.
- **Avoid**: Anything bouncy, springy, fast, or attention-grabbing. The goal is calm.

## Do's and Don'ts

### Do
- Remove every element that doesn't serve a clear purpose
- Use whitespace as an active design element, not passive emptiness
- Choose ONE beautiful typeface and let it carry the design
- Limit your palette to neutrals + ONE accent color
- Make every remaining element perfect — with so few, each one is scrutinized
- Let content be the star — photography, writing, product should shine

### Don't
- Confuse minimalism with "not designed yet" — minimalism is hyper-intentional
- Use more than one accent color
- Add shadows, gradients, or decorative borders
- Use bold font weights for headings (prefer Light to Medium)
- Crowd elements together — generous spacing is non-negotiable
- Add "just one more" thing — the discipline is the point
- Use small font sizes — with so few elements, make the typography luxurious

## Implementation Hints (Tailwind + CSS)

```css
/* Core Minimalism */
.min-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 24px;
}

.min-heading {
  font-size: 64px;
  font-weight: 300; /* Light weight — size carries the hierarchy */
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: #1A1A1A;
}

.min-card {
  padding: 32px;
  border: 1px solid #EBEBEB;
  /* NO shadow, NO radius (or 2px max) */
}
```

```
/* Tailwind classes */
/* Hero section — generous spacing */
py-32 lg:py-48

/* Heading */
text-6xl font-light tracking-tight text-[#1A1A1A]

/* Body text */
text-lg font-normal leading-relaxed text-[#888888]

/* Card — barely there */
border border-[#EBEBEB] p-8

/* Button — understated */
bg-[#1A1A1A] text-white px-6 py-3 text-sm font-medium hover:opacity-80 transition-opacity duration-300

/* Font stack */
font-heading: 'Inter', 'Helvetica Neue', system-ui, sans-serif
font-body: 'Inter', 'Helvetica Neue', system-ui, sans-serif

/* Color tokens */
--color-bg: #FFFFFF
--color-text-primary: #1A1A1A
--color-text-secondary: #888888
--color-accent: #1A1A1A         /* Often the accent IS black */
--color-border: #EBEBEB
```

## Reference Touchstones

When building in this style, channel the spirit of:
- Apple.com product pages (the whitespace, the single hero image)
- Dieter Rams' product design for Braun
- Aesop's website and retail stores
- Muji's design philosophy
- Everlane and COS fashion e-commerce
- Medium's reading experience (the original, clean version)
- Swiss watchmaker websites (IWC, Nomos Glashütte)
