# Dark Mode Premium

> Cinema-grade darkness meets precision lighting — UI that commands a room.

## Non-Negotiables

**If you skip any of these three, it is not Dark Mode Premium.** These separate "dark theme" from a genuinely premium dark experience — without all three, the result looks like an inverted light theme:

1. **Layered dark surfaces with distinct elevation levels.** The background is NOT a single flat black. It's a system of 3-5 dark grays that create depth: a deep base (#09090B, #0A0A0B), elevated cards (#141417, #18181B), higher surfaces (#1F1F23, #27272A), and optional overlays. Each layer is subtly but distinctly lighter. This is what makes it feel "premium" instead of "just dark." If all your dark surfaces are the same shade, you've missed the point.

2. **Restrained accent color with intentional glow/light effects.** The accent color is used SPARINGLY — only for primary CTAs, active states, and key interactive elements. NOT slathered across headers, backgrounds, or large surfaces. The accent should feel like light in darkness: small, precise, and luminous. Consider subtle glow effects (`box-shadow: 0 0 20px rgba(accent, 0.3)`) on the accent to make it feel like it's emitting light. The ratio of accent to neutral should be roughly 5:95.

3. **Carefully tuned text hierarchy on dark backgrounds.** Text uses a 3-4 level opacity system on white: primary (#FAFAFA or white at 95%), secondary (white at 65-70%), tertiary/disabled (white at 40-45%). This hierarchy is MORE important on dark backgrounds because the wrong gray tone disappears completely. Never use pure white (#FFFFFF) at full opacity for body text — it's too harsh. Never use mid-grays (#666, #777) — they vanish on dark surfaces.

### Quick self-test

Squint at your page. Can you distinguish at least 3 different background darkness levels? Does the accent color appear on fewer than 10% of the elements? Is the text readable at every level — not too bright, not too dim? Does the overall feel evoke "theater" or "luxury car dashboard"? If yes, it's Dark Mode Premium.

## Identity

- **Origin**: Evolved from dark mode accessibility preferences into a full design direction, catalyzed by macOS Mojave's system dark mode (2018), OLED displays making true black valuable, and premium SaaS products like Linear and Vercel choosing dark-first design.
- **Mood**: Sophisticated, immersive, high-contrast, cinematic, technical, premium, focused
- **Best for**: Developer tools, fintech dashboards, media/entertainment, audio/music apps, analytics platforms, trading interfaces, creative tools, portfolio sites
- **Avoid for**: Children's apps, healthcare/medical, most e-commerce (hard to browse products), content-heavy blogs, government/civic tech, anything that needs to feel "sunny" or "approachable"

## Typography

### Philosophy
Typography on dark backgrounds requires MORE care than on light. Font rendering is different (lighter fonts appear thinner on dark backgrounds), contrast ratios behave differently, and the wrong weight/color combination creates either eye strain or invisibility.

### Font Characteristics
- **Primary (headings)**: Modern sans-serifs with excellent screen rendering. Semi-bold to Bold weights (600-700) — slightly heavier than you'd use on light mode because dark backgrounds thin the perceived weight.
  - Families to consider: Inter, Geist, SF Pro Display, Satoshi, General Sans, Outfit, Plus Jakarta Sans
- **Secondary (body)**: Same family at regular to medium weight (400-500). Prioritize fonts with good hinting at small sizes on dark backgrounds.
  - Families to consider: Inter, Geist, system-ui, SF Pro Text
- **Monospace** (common in dev/fintech): JetBrains Mono, Geist Mono, SF Mono, Fira Code
- **Avoid**: Thin/Light weights (they disappear on dark), serif fonts (generally), decorative fonts

### Scale & Weight
- Headings: Semi-bold (600) to Bold (700). Go one weight heavier than you would on white.
- Body: Regular (400) to Medium (500). Bump up to Medium if Regular looks thin.
- Minimum body size: 14px, preferably 15-16px. Small text is harder to read on dark.
- Line-height: 1.5-1.7 for body (slightly more than on light to aid readability)

## Color

### Philosophy
Color in Dark Mode Premium is about **lighting a dark room**. The darkness is the canvas; color is the light source. Every colored element should feel like it's emitting light, not just sitting on the surface. Restraint is critical — too much color and it stops feeling premium.

### Palette Construction
- **Base background**: Deep, near-black neutrals. NOT pure black (#000) — use dark grays with a very slight cool or warm undertone.
  - Cool: #09090B, #0A0A0F, #0C0C10
  - Warm: #0D0B08, #0F0D0A
  - Pure neutral: #0A0A0A, #0C0C0C
- **Elevation layers** (critical):
  - Level 0 (base): #09090B
  - Level 1 (cards): #141417 or #18181B
  - Level 2 (elevated): #1F1F23 or #27272A
  - Level 3 (popovers/modals): #27272A or #2E2E32
- **Borders**: Subtle white at 8-15% opacity. Essential for distinguishing surfaces. `border-white/10` is the workhorse.
- **Text**:
  - Primary: #FAFAFA or #F4F4F5 (not pure #FFF)
  - Secondary: rgba(255,255,255,0.65) or #A1A1AA
  - Tertiary: rgba(255,255,255,0.4) or #71717A
- **Accent**: One luminous color, used sparingly.
  - Violet/purple: #8B5CF6, #A78BFA
  - Blue: #3B82F6, #60A5FA
  - Cyan: #06B6D4, #22D3EE
  - Green: #10B981, #34D399
  - Apply a subtle glow to accent elements: `box-shadow: 0 0 20px rgba(accent, 0.25)`

### Accent Usage Rules
- Primary CTA buttons: YES
- Active nav items: YES (small indicator, not full background)
- Links: YES
- Large section backgrounds: NO
- Card borders: Sparingly (featured/highlighted only)
- Charts/data visualization: YES (this is where more color is acceptable)

## Spacing & Layout

### Grid System
- Standard 12-column grid, max-width 1200-1400px
- Dark mode benefits from slightly more generous gutters than light mode — content needs room to breathe in darkness
- Sidebar layouts work exceptionally well in dark premium (Linear, Vercel Dashboard)

### Spacing Philosophy
- **Generous but not excessive** — more than flat design, less than minimalism
- Card padding: 24px-32px
- Section padding: 80px-120px vertical
- Between cards: 16px-24px (the gaps reveal the darker base, creating depth)
- Content density can be higher than in minimalism — dark backgrounds handle density well
- The darkness unifies — you can fit more without it feeling cluttered

### Composition
- **Dashboard-style layouts**: Sidebar + main content area
- **Layered panels**: Cards at different elevation levels create natural hierarchy
- **Full-bleed sections**: Dark mode looks great edge-to-edge
- **Data visualization**: Charts, metrics, and graphs shine on dark backgrounds

## Borders & Shadows

### Philosophy
In dark mode, borders and shadows work differently. Shadows are barely visible (dark on dark). Instead, **borders and elevation (lighter surfaces)** create depth. Subtle light effects (glows, highlights) replace traditional shadows.

### Implementation
- **Borders**: The primary depth tool. 1px solid white at 8-15% opacity (`border-white/10`). Use on every card, panel, and input. On dark surfaces, borders are MORE important than in light mode.
- **Shadows**: De-emphasized. Standard box-shadows barely show on dark backgrounds. Instead:
  - Use elevation (lighter fill) for primary depth
  - Use subtle glow for accent elements: `box-shadow: 0 0 30px rgba(accent, 0.15)`
  - Inset highlight on top edge: `box-shadow: inset 0 1px 0 rgba(255,255,255,0.05)`
- **Border radius**: 8px-16px. Modern and rounded, consistent across all elements.
- **Gradients**: Subtle dark gradients can enhance surfaces. A card might have a very subtle gradient from slightly lighter at top to slightly darker at bottom, creating a "lit from above" effect.

## Components

### Buttons
- Primary: Solid accent color fill, no border, 8px-12px radius. Subtle glow on hover.
  - `bg-accent text-white shadow-[0_0_20px_rgba(accent,0.3)]`
- Secondary: Ghost — transparent fill, `border-white/15`, white text. Hover: fill to white/10.
- Tertiary: Text-only in secondary text color. Hover: text brightens.
- All buttons: comfortable padding (12px 24px), medium weight (500-600)

### Cards
- Fill at elevation Level 1 (#141417 or #18181B)
- 1px border at white/10
- 8px-16px border-radius
- Hover: border brightens slightly (white/15 → white/25) or subtle glow
- Featured card: accent border or subtle accent gradient on top/left edge

### Navigation
- Sidebar (primary pattern): dark background at base level, items at Level 1 on hover/active
- Top nav: transparent or base level, with bottom border at white/10
- Active item: accent color indicator (dot, left border, or tinted background)
- Text: secondary color for inactive, primary for active

### Inputs & Forms
- Dark fill (Level 1 or Level 2), 1px border white/15
- Focus: border changes to accent color with subtle glow
- Placeholder: tertiary text color
- Text: primary text color

### Tables & Data
- Row borders: white/5 to white/10
- Hover row: fill at white/5
- Header: slightly elevated surface or bolder text
- Alternating rows: optional, very subtle (white/3 vs transparent)

## Motion

### Philosophy
Animation in Dark Mode Premium is **precise and cinematic** — smooth, slightly dramatic, with light effects playing a starring role. Movement should feel like a high-end car dashboard or a cinema UI.

### Implementation
- **Transitions**: Smooth — 200-350ms, ease-out or cubic-bezier(0.4, 0, 0.2, 1)
- **Hover**: Border/glow brightens, slight scale (1.01-1.02). Accent glow pulses subtly.
- **Entrances**: Fade in with subtle upward translate. Optional: a brief glow flash on important elements.
- **Scroll**: Subtle parallax is acceptable. Content can fade/slide in on scroll.
- **Light effects**: Hover states can trigger subtle illumination — a border that brightens, a glow that appears, a gradient that shifts. This is the signature motion of the style.
- **Avoid**: Playful bouncing, extreme scale changes, anything that breaks the "premium" feel

## Do's and Don'ts

### Do
- Create clear surface elevation hierarchy (3+ distinct dark levels)
- Use borders (white/10-15) as the primary tool for visual separation
- Apply accent color sparingly — less is more in darkness
- Add subtle glow effects to accent elements to simulate light emission
- Test readability at every text opacity level on every surface level
- Use slightly heavier font weights than you would on light mode

### Don't
- Use pure black (#000000) as the base — it's too harsh and looks like a void
- Use pure white (#FFFFFF) at 100% for body text — it creates eye strain
- Spread the accent color across large surfaces — it kills the premium feel
- Forget borders on dark cards — without them, surfaces merge into the void
- Use traditional box-shadows (they're invisible on dark) — use glows instead
- Create insufficient contrast between surface levels — each should be distinctly different

## Implementation Hints (Tailwind + CSS)

```css
/* Elevation system */
.dm-base { background: #09090B; }
.dm-card { background: #18181B; border: 1px solid rgba(255,255,255,0.1); }
.dm-elevated { background: #27272A; border: 1px solid rgba(255,255,255,0.12); }

/* Accent glow */
.dm-accent-glow {
  background: #8B5CF6;
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
}
.dm-accent-glow:hover {
  box-shadow: 0 0 30px rgba(139, 92, 246, 0.45);
}

/* Text hierarchy */
.dm-text-primary { color: #FAFAFA; }
.dm-text-secondary { color: rgba(255,255,255,0.65); }
.dm-text-tertiary { color: rgba(255,255,255,0.4); }
```

```
/* Tailwind classes */
/* Base */
bg-[#09090B] text-[#FAFAFA]

/* Card */
bg-[#18181B] border border-white/10 rounded-xl p-6

/* Elevated surface */
bg-[#27272A] border border-white/[0.12] rounded-xl

/* Accent button with glow */
bg-[#8B5CF6] text-white rounded-lg px-6 py-3 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.45)] transition-all duration-300

/* Ghost button */
bg-transparent border border-white/15 text-[#FAFAFA] rounded-lg px-6 py-3 hover:bg-white/10 transition-all duration-200

/* Text levels */
text-[#FAFAFA]           /* primary */
text-white/65            /* secondary */
text-white/40            /* tertiary */

/* Font stack */
font-heading: 'Inter', 'Geist', system-ui, sans-serif
font-body: 'Inter', 'Geist', system-ui, sans-serif
font-mono: 'JetBrains Mono', 'Geist Mono', 'SF Mono', monospace

/* Color tokens */
--color-base: #09090B
--color-card: #18181B
--color-elevated: #27272A
--color-border: rgba(255,255,255,0.1)
--color-accent: #8B5CF6
--color-accent-glow: rgba(139,92,246,0.3)
--color-text-primary: #FAFAFA
--color-text-secondary: rgba(255,255,255,0.65)
--color-text-tertiary: rgba(255,255,255,0.4)
```

## Reference Touchstones

When building in this style, channel the spirit of:
- Linear.app (the gold standard of dark premium UI)
- Vercel's dashboard and marketing site
- Raycast's interface
- Arc Browser's dark mode
- Tesla's car UI
- Bloomberg Terminal's modern redesign
- Figma's dark mode (subtle elevation, precise borders)
