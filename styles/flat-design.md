# Flat Design

> The digital world stripped to its essence — clarity through simplicity.

## Non-Negotiables

**If you skip any of these three, it is not Flat Design.** These are the visual DNA of the style — without them, the result reads as "generic" or "unfinished" rather than intentionally flat:

1. **Zero visual depth — no shadows, no gradients, no bevels.** Surfaces are completely flat. No drop shadows on cards (not even subtle ones), no gradient fills, no inner shadows, no 3D effects of any kind. If you see `shadow-sm`, `shadow-md`, or any `box-shadow` on a content element, it's not Flat Design. The only depth cue is **layering through color**: a card is distinguished from its background by having a different solid fill, not by floating above it. Borders are optional and always thin (1px) if used.

2. **Solid, bold colors with no texture or noise.** Every surface is a single flat color — no gradients, no patterns, no grain, no frosted glass. Backgrounds are solid. Cards are solid. Buttons are solid. The palette is typically limited (3-5 colors max) but each color is confident and purposeful. Colors do all the work that shadows and depth do in other styles.

3. **Strong iconography and typography as primary visual elements.** Without depth effects, the hierarchy is carried entirely by type weight, size, color, and spacing. Typography must be crisp and clean. Icons are simple, geometric, and single-color (line or filled, never both on the same page). The visual interest comes from the composition of flat elements, not from decorative effects.

### Quick self-test

Look at your page. Turn off your monitor's contrast — do any elements appear to "float" above others through shadows or gradients? They shouldn't. Now look at the color fills: are they all solid with no gradation? Good. Is the visual hierarchy achieved purely through size, weight, and color contrast? If yes, it's Flat Design.

## Identity

- **Origin**: Emerged as a reaction to skeuomorphism around 2012-2013. Microsoft's Metro design language (Windows 8) and Apple's iOS 7 redesign were the watershed moments. Influenced by Swiss/International Typography and Bauhaus principles of reduction.
- **Mood**: Clean, efficient, approachable, modern, confident, democratic
- **Best for**: Mobile apps, utility tools, enterprise SaaS, documentation sites, dashboards, productivity apps, government/civic tech
- **Avoid for**: Luxury brands, immersive experiences, entertainment, portfolios that need to show craft/depth, anything that needs to feel "premium" or "high-end"

## Typography

### Philosophy
Typography in Flat Design carries the entire visual hierarchy. Without shadows or depth to distinguish elements, type must do the heavy lifting through weight, size, and color contrast.

### Font Characteristics
- **Primary (headings)**: Clean geometric or neo-grotesque sans-serifs. Medium to Bold weights (500-700). Nothing decorative.
  - Families to consider: Inter, Roboto, Open Sans, Source Sans 3, Nunito Sans, DM Sans, Lato
- **Secondary (body)**: Same family as headings at regular weight, or a highly legible companion. Optimize for screen readability.
  - Families to consider: Inter, System UI stack, Roboto, Source Sans 3
- **Avoid**: Display fonts, serif fonts (generally), ultra-thin weights, decorative or script fonts

### Scale & Weight
- Moderate, systematic hierarchy — heading sizes step down in a predictable ratio (1.25–1.33 scale)
- Headings: Semi-bold to Bold (600-700). Not Extra-bold or Black — that's too heavy for this style.
- Body: Regular (400) at 16px minimum
- Line-height: 1.5-1.6 for body, 1.2-1.3 for headings
- Letter-spacing: default or very slightly positive on small caps/labels

## Color

### Philosophy
Color is the PRIMARY design tool in Flat Design. It replaces shadows, gradients, and depth effects as the way to create visual hierarchy and distinguish elements. Colors must be bold enough to create clear contrast between surfaces.

### Palette Construction
- **Background**: Clean white (#FFFFFF) or very light neutral (#F5F5F5, #FAFAFA). Can also be a confident solid color for sections.
- **Primary surface**: White cards on light gray background, or colored cards on white background. The contrast between background and surface is achieved through color alone.
- **Primary accent**: One bold, saturated color for CTAs and primary actions. Often a blue (#2196F3, #3B82F6), but can be any confident, saturated hue.
- **Secondary accent**: A complementary or analogous color for secondary elements.
- **Text**: Near-black (#333333 or #212121) for primary, medium gray (#666666 or #757575) for secondary.
- **State colors**: Green for success, red for error, amber for warning — simple and direct.

### Color Combinations That Work
- White background + light gray cards + blue accent + dark gray text
- Light blue background + white cards + orange accent
- White background + colored section breaks + teal accent
- Neutral canvas + vibrant accent color that does all the talking

### Dark Mode
Flat Design in dark mode uses the same principles: solid fills, no shadows, color contrast.
- Near-black backgrounds (#121212, #1E1E1E)
- Dark gray card surfaces (#2C2C2C, #333333)
- Maintain the same accent colors but slightly brighten them for visibility

## Spacing & Layout

### Grid System
- Clean, predictable grid — 12-column or 8-column
- Elements align precisely to the grid. No intentional misalignment.
- Generous gutters between columns (16-24px)
- Content containers with clear max-widths

### Spacing Philosophy
- **Systematic and predictable** — use a 4px or 8px base unit
- Consistent padding inside all containers (16px, 24px, or 32px — pick one and stick with it)
- Clear visual rhythm — even spacing between repeating elements
- Generous whitespace between sections (64px-96px)
- The space between elements communicates grouping (Gestalt proximity)

### Composition
- **Grid-aligned layouts**: Everything snaps to the grid
- **Card-based content**: Cards are the primary content container, distinguished by fill color
- **Clear sections**: Alternating background colors to separate page sections
- **No overlapping elements** — everything in its own space

## Borders & Shadows

### Philosophy
Flat Design achieves visual separation through **color contrast** rather than borders or shadows. When borders are used, they are minimal and functional.

### Implementation
- **Shadows**: NONE. This is the defining characteristic. No box-shadow on cards, buttons, or any element. Not even subtle ones.
- **Borders**: Optional and always thin (1px). Used for inputs, tables, and dividers — not for cards or sections. Color: light gray (#E0E0E0, #D1D5DB).
- **Border radius**: Small to moderate (4px-8px). Nothing dramatic. Flat Design favors slightly rounded corners for friendliness, but never pill-shaped or fully rounded.
- **Depth**: Achieved through z-index layering and color contrast only. A card "stands out" because it's a different color than its background, not because it casts a shadow.
- **Dividers**: Thin 1px lines in light gray. Used sparingly between list items or sections.

## Components

### Buttons
- Solid fill in accent color, no shadow, small border-radius (4px-8px)
- Text: White on colored fill, medium weight (500-600)
- Comfortable padding (12px 24px)
- Secondary: Outlined (1px border in accent color, transparent fill)
- Ghost/tertiary: Text only in accent color
- Hover: Slightly darken or lighten the fill (10-15% shift). No shadow appears.
- Disabled: Reduced opacity (40-50%)

### Cards
- NO shadow — this is critical
- Distinguished from background by solid fill color (white on gray, or colored fill on white)
- Small border-radius (8px)
- Consistent internal padding (24px)
- Optional: 1px border in very light gray if needed for definition

### Navigation
- Clean horizontal bar with solid background
- Active state: colored underline or filled background tab
- Simple, readable link text at medium weight
- No blur effects, no glass, no transparency

### Inputs & Forms
- Thin 1px border in gray, solid white fill
- Small border-radius (4px-8px) matching buttons
- Focus: border changes to accent color (no shadow, no glow)
- Labels above inputs in medium weight
- Clear, simple validation states with colored borders

### Tags & Badges
- Small, solid-colored pills with small radius
- Text in white on colored fill, or accent-colored text on tinted fill
- No borders unless outlined variant

## Motion

### Philosophy
Animation in Flat Design is **functional and fast** — it communicates state changes, not decoration. Every animation should have a clear purpose.

### Implementation
- **Transitions**: Quick and linear — 150-250ms. ease-out for entries, ease-in for exits.
- **Hover**: Color change only. Background darkens/lightens. No scale, no shadow appears, no translation.
- **State changes**: Smooth color transitions on focus, active, disabled states
- **Page transitions**: Simple fade or slide. Nothing complex.
- **Loading**: Simple spinners or progress bars. Flat, solid-colored.
- **Avoid**: Bouncy springs, parallax, 3D transforms, shadow animations, blur animations

## Do's and Don'ts

### Do
- Use color contrast as your primary tool for visual hierarchy
- Keep the palette limited (3-5 colors) and purposeful
- Make typography do the heavy lifting — size, weight, and color create hierarchy
- Use consistent, systematic spacing throughout
- Keep icons simple, geometric, and single-style (all line OR all filled)
- Embrace whitespace — flat surfaces need breathing room

### Don't
- Add shadows to anything — not even "just a little" box-shadow
- Use gradients on surfaces (solid fills only)
- Mix icon styles (line + filled) on the same page
- Use thin/light font weights for important text
- Make everything the same visual weight — without shadows, color and size must create hierarchy
- Confuse "flat" with "boring" — bold color choices and strong typography make it vibrant

## Implementation Hints (Tailwind + CSS)

```css
/* Core Flat Design — note the absence of shadows */
.flat-card {
  background: #ffffff;
  border-radius: 8px;
  padding: 24px;
  /* NO box-shadow */
}

.flat-button {
  background: #3B82F6;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  font-weight: 500;
  transition: background 0.15s ease;
}
.flat-button:hover {
  background: #2563EB; /* Just darken — no shadow appears */
}
```

```
/* Tailwind classes */
/* Card (NO shadow classes) */
bg-white rounded-lg p-6

/* Button */
bg-blue-500 text-white rounded-md px-6 py-3 font-medium hover:bg-blue-600 transition-colors duration-150

/* Section alternating */
bg-white / bg-gray-50 — alternate between sections

/* Font stack */
font-heading: 'Inter', 'Roboto', system-ui, sans-serif
font-body: 'Inter', 'Roboto', system-ui, sans-serif

/* Color tokens */
--color-bg: #FFFFFF
--color-surface: #F5F5F5
--color-accent: #3B82F6
--color-accent-hover: #2563EB
--color-text-primary: #212121
--color-text-secondary: #757575
--color-border: #E0E0E0
```

## Reference Touchstones

When building in this style, channel the spirit of:
- Microsoft's Metro/Modern design language (Windows 8/10)
- Apple iOS 7's original flat redesign
- Google's early Material Design (before elevation)
- Stripe's documentation and dashboard UI
- Notion's interface (flat with minimal depth cues)
- Government/civic tech sites (clean, accessible, no-frills)
