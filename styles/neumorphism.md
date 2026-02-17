# Neumorphism

> Soft surfaces pushing out of the screen — UI that you want to touch.

## Non-Negotiables

**If you skip any of these three, it is not Neumorphism.** These create the illusion of soft, extruded surfaces — without all three working together, the result looks like "weird shadows" rather than the intended tactile effect:

1. **Dual shadows — one light, one dark — on EVERY raised element.** This is the defining technique. Each element has TWO box-shadows: a dark shadow on the bottom-right (creating depth) and a light/white shadow on the top-left (simulating light reflection). Together, they create the illusion that the element is pushed out of or pressed into the background surface. Example: `box-shadow: 8px 8px 16px rgba(0,0,0,0.1), -8px -8px 16px rgba(255,255,255,0.7)`. If your elements only have ONE shadow (the standard drop-shadow), it's not neumorphism — it's just a regular card with a shadow.

2. **Background and element surfaces are the SAME base color.** The element appears to extrude FROM the background, so they must share the same hue. If your card is white on a gray background, that's a regular card. In neumorphism, the card and background are both #E0E5EC (or whatever your base is). The only visual distinction is created by the dual shadows. The background color should be a soft, muted neutral — not white, not dark.

3. **Soft, diffused shadows with generous blur.** The shadows must be soft and blurred — not hard, not tight. Shadow offset: 6-12px. Shadow blur: 12-24px (roughly 2x the offset). The effect should feel like soft clay or molded plastic, not paper cutouts. If the shadows feel hard or tight, increase the blur radius. The softness IS the aesthetic.

### Quick self-test

Look at your cards. Do they appear to be EXTRUDING from the background surface, like raised buttons on a remote control? Is the background color and the card color the same? Can you see a light shadow on one side and a dark shadow on the other? If yes, it's Neumorphism. If the cards just look like "floating" panels, you have regular shadows instead.

## Identity

- **Origin**: Emerged in late 2019 / early 2020 as a design experiment blending skeuomorphism's tactile quality with flat design's simplicity. Popularized by Alexander Plyuto's Dribbble shot. Named as a portmanteau of "new" + "skeuomorphism." Often considered more of a surface treatment than a full design system.
- **Mood**: Soft, tactile, subtle, modern, minimal, futuristic, calm
- **Best for**: Smart home apps, music/media players, calculator apps, single-purpose tools, settings interfaces, clocks/timers, personal dashboards, weather apps
- **Avoid for**: Text-heavy content, data-dense dashboards, e-commerce, anything with many cards (neumorphism doesn't scale well to many elements), mobile-first (accessibility concerns)

## Typography

### Philosophy
Typography in neumorphism is **quiet and supportive**. The surfaces are the star — type should be clean and readable without competing for attention. Weight is medium; personality is low.

### Font Characteristics
- **Primary (headings)**: Clean, neutral sans-serifs. Medium to Semi-bold weights. Nothing too heavy or too light.
  - Families to consider: Rubik, Inter, Nunito Sans, Poppins, DM Sans, Outfit
- **Secondary (body)**: Same family at regular weight, or a highly legible companion.
  - Families to consider: Inter, system-ui, DM Sans
- **Avoid**: Bold/Black weights, serif fonts, thin/light weights (they get lost in the soft aesthetic)

### Scale & Weight
- Moderate hierarchy — no extreme size contrasts
- Headings: Semi-bold (600) at 24px-40px
- Body: Regular to Medium (400-500) at 14px-16px
- Everything feels even, calm, and balanced
- Line-height: 1.5-1.6 for body

## Color

### Philosophy
Color in neumorphism revolves around ONE base tone. Everything — background, cards, buttons — lives in that same tonal family. The shadows create the visual interest, not the colors. Additional color is used sparingly for accents only.

### Palette Construction
- **Base surface**: A soft, muted neutral that is NEITHER white NOR dark gray. This is critical — pure white makes the light shadow invisible, and dark gray makes the dark shadow invisible. Good base colors:
  - Cool gray: #E0E5EC, #DDE1E7, #D1D9E6
  - Warm gray: #E8E0D8, #E2DDD5
  - Soft blue-gray: #E0E5F1
  - The base should have a subtle temperature (warm or cool), not be perfectly neutral
- **Element surfaces**: THE SAME as the base. Cards, buttons, containers — all the same color as the background.
- **Accent color**: One muted-to-medium saturation color for active states and CTAs.
  - Soft blue: #6C63FF, #5B7FFF
  - Soft teal: #4ECDC4
  - Soft coral: #FF6B6B
  - Apply the accent as a subtle gradient or solid fill on pressed/active elements
- **Text**: Dark gray (#333333, #2D3436) for primary, medium gray (#666666, #768A96) for secondary. NOT pure black — it's too harsh for this soft aesthetic.
- **Shadow colors**: Derived from the base:
  - Dark shadow: the base color darkened 15-25% (or `rgba(0,0,0,0.1-0.15)`)
  - Light shadow: white at 50-80% opacity (or the base lightened 15-25%)

### Dark Neumorphism
Possible but tricky:
- Dark base: #2D3436, #2C3E50, #353535
- Dark shadow: slightly darker than base
- Light shadow: slightly lighter than base (not white — gray at 10-20%)
- Less contrast between shadows — the effect is more subtle in dark mode

## Spacing & Layout

### Grid System
- Simple, uncluttered grid. 2-4 columns maximum.
- Neumorphism works best with FEW elements, each given generous space
- Centered layouts work well — elements floating in the center of the base surface

### Spacing Philosophy
- **Generous spacing between elements** — 32px-48px minimum. Neumorphic elements need room for their shadows to breathe.
- Card padding: 24px-40px
- The shadows extend beyond the element, so elements need MORE margin than their visual bounds suggest
- Sparse layouts — neumorphism does NOT handle density well. Fewer elements = better.

### Composition
- **Dashboard-style**: A few key widgets/cards on a uniform background
- **Centered compositions**: Elements arranged symmetrically around a center point
- **Minimal layouts**: Each element gets its own space — no cramming
- **Avoid**: Dense grids, lists with many items, content-heavy layouts

## Borders & Shadows

### Philosophy
The dual-shadow system IS the entire aesthetic. Every raised element has both a dark and a light shadow. Pressed (inset) elements reverse the shadows. Borders are almost never used.

### Implementation
- **Raised (extruded) surface**:
  ```css
  box-shadow: 8px 8px 16px rgba(0,0,0,0.1),
              -8px -8px 16px rgba(255,255,255,0.7);
  ```
- **Pressed (inset) surface**:
  ```css
  box-shadow: inset 8px 8px 16px rgba(0,0,0,0.1),
              inset -8px -8px 16px rgba(255,255,255,0.7);
  ```
- **Flat (same level as background)**:
  ```css
  box-shadow: none;
  ```
- **Shadow sizing**: Offset 6-12px, blur 12-24px (2x offset). Larger elements can use larger shadows.
- **Borders**: Almost never. The shadows define edges. If a border is absolutely needed, it should be very subtle (1px at white/20 or similar).
- **Border radius**: 12px-24px. Generous, soft rounding. The roundness reinforces the "soft molded" feel. Can go up to 50% for circular elements (round buttons, avatars).

## Components

### Buttons
- **Default state**: Raised (dual shadow), same color as background
- **Hover**: Shadows reduce slightly (element appears to be pressing down)
- **Active/Pressed**: Inset shadows (element presses INTO the surface)
- **CTA/Primary**: Can have a subtle accent color gradient overlaid
- Border-radius: 12px-16px or fully round (pill shape)
- Text: Medium weight (500), centered

### Cards
- Same fill color as the background
- Raised dual shadow
- Generous padding (24px-32px)
- Generous border-radius (16px-24px)
- Content: minimal, focused on one piece of information

### Inputs
- **Default**: Inset (pressed) shadow — the input field looks "carved into" the surface
  ```css
  box-shadow: inset 4px 4px 8px rgba(0,0,0,0.08),
              inset -4px -4px 8px rgba(255,255,255,0.6);
  ```
- Focus: Inset shadow with accent-colored tint, or a subtle accent border appears
- Border-radius: 12px-16px
- No visible border

### Toggle Switches
- A signature neumorphic component — round knob (raised) on a track (inset)
- Active state: knob slides, track changes to accent color
- Very tactile and satisfying

### Sliders & Knobs
- Another signature component — round, raised elements that look like physical dials
- The track is inset (pressed into the surface)
- The handle/thumb is raised (extruded from the surface)

## Motion

### Philosophy
Animation in neumorphism is **gentle and physical** — elements press in and push out like soft rubber. Movement should reinforce the tactile illusion.

### Implementation
- **Button press**: Transition from raised → inset shadows over 150-200ms. The most important neumorphic animation.
- **Transitions**: ease-in-out, 200-300ms. Smooth and physical.
- **Hover**: Subtle shadow reduction (element slightly "settles")
- **Toggle**: Smooth slide with shadow inversion
- **Avoid**: Bouncy, springy, or exaggerated animations. The movement should feel like pressing a real button — physical but not cartoonish.

## Do's and Don'ts

### Do
- Use dual shadows (dark + light) on every raised element
- Keep element and background THE SAME color
- Use generous border-radius (12px-24px)
- Keep layouts sparse — few elements, lots of breathing room
- Create clear raised/pressed states using shadow inversion
- Use inset shadows for inputs and pressed states
- Test your shadow values carefully — the balance between dark and light shadow is critical

### Don't
- Use standard single-direction drop-shadows (that's not neumorphism)
- Use pure white or very dark backgrounds (the light shadow becomes invisible)
- Add borders — shadows define edges in neumorphism
- Overcrowd the layout — neumorphism needs space to work
- Use strong, saturated colors on surfaces — keep them soft and neutral
- Apply neumorphism to text or very small elements — it works on surfaces, not details
- Scale to many elements — 5-8 neumorphic elements per viewport is the sweet spot

## Implementation Hints (Tailwind + CSS)

```css
/* Core neumorphism */
:root {
  --nm-bg: #E0E5EC;
  --nm-shadow-dark: rgba(163, 177, 198, 0.6);
  --nm-shadow-light: rgba(255, 255, 255, 0.8);
}

.nm-raised {
  background: var(--nm-bg);
  box-shadow: 8px 8px 16px var(--nm-shadow-dark),
              -8px -8px 16px var(--nm-shadow-light);
  border-radius: 16px;
}

.nm-pressed {
  background: var(--nm-bg);
  box-shadow: inset 6px 6px 12px var(--nm-shadow-dark),
              inset -6px -6px 12px var(--nm-shadow-light);
  border-radius: 16px;
}
```

```
/* Tailwind classes */
/* Background */
bg-[#E0E5EC]

/* Raised element */
bg-[#E0E5EC] rounded-2xl shadow-[8px_8px_16px_rgba(163,177,198,0.6),-8px_-8px_16px_rgba(255,255,255,0.8)]

/* Pressed element (input) */
bg-[#E0E5EC] rounded-2xl shadow-[inset_6px_6px_12px_rgba(163,177,198,0.6),inset_-6px_-6px_12px_rgba(255,255,255,0.8)]

/* Button with press effect */
shadow-[8px_8px_16px_rgba(163,177,198,0.6),-8px_-8px_16px_rgba(255,255,255,0.8)]
active:shadow-[inset_6px_6px_12px_rgba(163,177,198,0.6),inset_-6px_-6px_12px_rgba(255,255,255,0.8)]
transition-shadow duration-200

/* Font stack */
font-heading: 'Rubik', 'Inter', 'DM Sans', sans-serif
font-body: 'Inter', 'DM Sans', system-ui, sans-serif

/* Color tokens */
--color-bg: #E0E5EC
--color-text-primary: #2D3436
--color-text-secondary: #768A96
--color-accent: #6C63FF
--color-shadow-dark: rgba(163, 177, 198, 0.6)
--color-shadow-light: rgba(255, 255, 255, 0.8)
```

## Reference Touchstones

When building in this style, channel the spirit of:
- Alexander Plyuto's original Neumorphism concept shots
- Apple's Big Sur calculator and control center (subtle neumorphic touches)
- Physical remote controls and hardware buttons
- Dieter Rams' Braun products (the physicality, not the flat graphics)
- Smart home device interfaces
- Analog synthesizer UIs
