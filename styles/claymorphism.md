# Claymorphism

> Soft, squishy, and delightfully tactile — UI sculpted from digital clay.

## Non-Negotiables

**If you skip any of these three, it is not Claymorphism.** These create the distinctive "3D clay" illusion — without all three working together, the result looks like "rounded cards with shadows" rather than clay:

1. **Inner highlight + outer shadow creating a puffy, inflated appearance.** Every claymorphic element needs BOTH: a light inner shadow on the top edge (simulating light hitting the rounded surface) AND a soft outer shadow below (simulating the object sitting on a surface). The combination creates the "puffy pillow" effect. Without the inner highlight, it's just a card with a shadow. Without the outer shadow, it's just a highlighted panel.
   - Inner highlight: `box-shadow: inset 0 -4px 6px rgba(0,0,0,0.05), inset 0 4px 6px rgba(255,255,255,0.6);`
   - Outer shadow: `box-shadow: 0 8px 20px rgba(0,0,0,0.12);`
   - Combined (the full clay effect): both together in one `box-shadow` declaration.

2. **Generous, uniform border-radius — everything looks rounded and soft.** Clay has no sharp edges. Border-radius is 16px-32px on all elements — cards, buttons, badges, containers. The rounding should feel ORGANIC, like the element was molded by hand. If anything has sharp corners or small radius (4px-8px), it breaks the clay illusion. Even images and icons should sit within rounded containers.

3. **Soft, pastel color palette with a 3D color-shading effect on surfaces.** Claymorphic elements have a subtle color gradient that simulates 3D curvature — slightly lighter on top (where light hits) and slightly deeper at the bottom. The base colors are PASTEL: soft pinks, lavenders, sky blues, mint greens, warm yellows. The palette should feel like a box of children's modeling clay. Saturated or dark colors break the soft, friendly mood.

### Quick self-test

Do your cards look puffy and inflated, like clay or marshmallows? Can you see both a light inner glow at the top AND a soft shadow at the bottom? Are all corners generously rounded (16px+)? Are the colors soft and pastel? Could you imagine squishing these elements? If yes, it's Claymorphism.

## Identity

- **Origin**: Emerged around 2021-2022 as a friendly alternative to neumorphism. Combines 3D illustration trends (the "blob" and "clay" aesthetic from Blender/Cinema 4D) with UI design. Inspired by the soft 3D characters and objects that became ubiquitous in tech marketing (Apple Memoji, Figma's 3D illustrations, many startup hero sections).
- **Mood**: Friendly, 3D, soft, approachable, playful, warm, inviting, childlike
- **Best for**: Children's apps, onboarding flows, illustration-heavy products, education platforms, health/wellness apps, banking for teens, productivity apps targeting non-technical users, gamified interfaces
- **Avoid for**: Enterprise B2B, data-heavy dashboards, professional tools, fintech for adults, news/editorial, anything that needs to feel serious or authoritative

## Typography

### Philosophy
Typography in Claymorphism is **rounded, friendly, and approachable**. The font choice should match the soft, puffy aesthetic — nothing angular, condensed, or sharp.

### Font Characteristics
- **Primary (headings)**: Rounded, friendly sans-serifs with generous curves. Medium to Bold weights (500-700).
  - Families to consider: Nunito, Quicksand, Comfortaa, Fredoka, Baloo 2, Varela Round, DM Sans (Rounded)
- **Secondary (body)**: Same family at regular weight, or a highly legible rounded companion.
  - Families to consider: Nunito, DM Sans, Poppins, Quicksand
- **Avoid**: Sharp geometric fonts (Futura, Roboto), serif fonts, condensed fonts, angular display fonts

### Scale & Weight
- **Headings**: Semi-bold to Bold (600-700) at 28px-48px. Not Extra-bold — keep it soft.
- **Body**: Regular to Medium (400-500) at 15px-17px
- **Generous line-height**: 1.6-1.8 for body (the softness extends to text spacing)
- **Letter-spacing**: Default or very slightly positive. Don't tighten.
- **No ALL CAPS**: Too aggressive for this style. Sentence case or title case only.

## Color

### Philosophy
Color in Claymorphism comes from a PASTEL TOY BOX. Every color is softened, warm, and inviting. The palette should feel like it was mixed with white paint — no fully saturated or dark colors.

### Palette Construction
- **Background**: Very light, warm pastels:
  - Soft lavender: #F0EBFF, #EDE7FF
  - Warm blush: #FFF0F0, #FFE8EC
  - Mint cream: #EDFFF5, #E8FFF0
  - Soft yellow: #FFF9E6, #FFFAEB
  - Light blue: #E8F4FF, #EBF5FF
- **Element surfaces**: Slightly deeper pastels than the background:
  - Lavender card on lavender bg: #DDD5FF on #F0EBFF
  - Pink card on blush bg: #FFCCD5 on #FFF0F0
  - Mint card on mint bg: #B5F0D0 on #EDFFF5
- **Text**: Warm dark gray (#2D2D3F, #3B3B4F) — not pure black
- **Secondary text**: Medium warm gray (#7A7A8E, #8888A0)
- **Accent**: One slightly more saturated pastel for CTAs:
  - Soft purple: #8B6FFF, #9D85FF
  - Soft coral: #FF7B8E, #FF8FA0
  - Soft blue: #6FB8FF, #7BC3FF

### Color-Shading Effect (Critical)
Each element has a subtle gradient that simulates 3D curvature:
```css
/* Clay surface — lighter on top, deeper on bottom */
background: linear-gradient(145deg, #E8DEFF 0%, #D0C0FF 100%);
```
The gradient range should be SUBTLE — just 10-20% difference between stops.

## Spacing & Layout

### Grid System
- Simple, generous grid — 2-3 columns for content, single column for mobile
- Max-width: 1000-1200px
- The large border-radius and puffy elements need room

### Spacing Philosophy
- **Very generous** — everything needs space to breathe and "puff out"
- Card padding: 28px-40px (more than typical)
- Between elements: 24px-40px
- Section padding: 80px-120px
- The shadows and rounded corners extend beyond the element bounds, so extra margin is needed

### Composition
- **Card-centric**: Content lives in puffy, distinct card containers
- **Simple layouts**: 1-3 column grids, nothing complex
- **Generous gaps**: Cards float independently with generous space between
- **Illustration-friendly**: Large areas for 3D illustrations or icons
- **Centered compositions**: Symmetry and centered layouts feel natural with the soft aesthetic

## Borders & Shadows

### Philosophy
The combined inner highlight + outer shadow is the ENTIRE claymorphic effect. This dual-shadow system creates the illusion of a soft, inflated 3D object sitting on a surface.

### Implementation
- **The Full Clay Shadow** (apply to every card, button, and container):
  ```css
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.08),           /* outer shadow — object sitting on surface */
    0 2px 6px rgba(0, 0, 0, 0.04),             /* tight shadow for grounding */
    inset 0 -2px 6px rgba(0, 0, 0, 0.04),      /* inner bottom — slight depth */
    inset 0 4px 8px rgba(255, 255, 255, 0.6);   /* inner top — light hitting the surface */
  ```
- **Simplified version**:
  ```css
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.1),
    inset 0 4px 6px rgba(255, 255, 255, 0.5);
  ```
- **Borders**: Usually NONE. The shadow defines the edge. If used, very subtle (1px in white/30 or matching pastel).
- **Border radius**: 16px-32px on all elements. Larger elements (hero cards) can go to 32px-40px. Buttons: 12px-16px or fully round (pill). This is non-negotiable — sharp corners break the clay illusion.

## Components

### Buttons
- Puffy, rounded, with the clay shadow effect
- Pastel or accent fill with subtle gradient (lighter top → slightly deeper bottom)
- Border-radius: 12px-16px or fully round (pill: 999px)
- Padding: 14px 28px (generous)
- Hover: shadow deepens slightly, element lifts (subtle translateY -2px)
- Active: shadow reduces, translateY +1px (presses in slightly)
- Text: Semi-bold (600), warm dark gray or white on accent

### Cards
- The star component — puffy, rounded, inflated
- Full clay shadow (outer + inner highlight)
- Pastel background with subtle gradient
- 24px-40px radius
- Generous padding (28px-40px)
- Content: centered or left-aligned, simple hierarchy

### Inputs
- Slightly inset appearance with inner shadow (but softer than neumorphism)
  ```css
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.06);
  ```
- Very light fill (white or lighter-than-card pastel)
- Generous border-radius (12px-16px)
- Focus: accent-colored ring/shadow
- No hard borders — the shadow defines the edge

### Badges & Pills
- Small, puffy elements with the clay treatment
- Fully rounded (pill shape)
- Pastel fill with text in a slightly darker shade of the same hue
- Micro version of the clay shadow

### Icons & Illustrations
- 3D-rendered or 3D-styled icons are ideal
- If using flat icons, place them in puffy, rounded containers with the clay shadow
- Icon containers: circles or rounded squares with clay treatment
- Colors: matching the pastel palette

## Motion

### Philosophy
Animation in Claymorphism is **bouncy, soft, and playful** — like poking a blob of clay or squishing a stress ball. Movement reinforces the tactile, squishy quality.

### Implementation
- **Hover**: Subtle lift (translateY -3px) + shadow deepens. 200ms ease-out.
- **Active/Press**: Element squishes down (translateY +2px, slight scaleY 0.97) + shadow tightens. 100ms.
- **Springs**: Use spring-like easing for entrances: `cubic-bezier(0.34, 1.56, 0.64, 1)` — slight overshoot/bounce.
- **Entrances**: Bounce in with slight scale (0.9 → 1.02 → 1) and fade. Stagger for groups.
- **Micro-interactions**: Toggle switches bounce to position. Buttons squish on press. Cards wobble subtly on hover.
- **Transitions**: 200-350ms with spring easing.
- **Avoid**: Linear timing, sharp movements, anything mechanical or stiff.

## Do's and Don'ts

### Do
- Apply the dual-shadow system (inner highlight + outer shadow) on every element
- Use generous, uniform border-radius (16px-32px) everywhere
- Keep the palette in pastel territory — soft, warm, inviting
- Add subtle gradient shading to simulate 3D curvature on surfaces
- Make interactions bouncy and playful (spring easing, slight overshoot)
- Pair with 3D illustrations or icons for maximum impact
- Keep layouts simple — the visual complexity is in the surface treatment, not the layout

### Don't
- Use sharp corners on anything — the rounding IS the style
- Use dark or fully saturated colors — pastels only
- Skip the inner highlight shadow — without it, elements look flat with just a drop shadow
- Overcomplicate layouts — claymorphism works best with simple, spacious compositions
- Use it for dense data or serious professional tools
- Apply to text or very small elements — clay treatment works on surfaces/containers
- Mix with other shadow styles (flat, neumorphic, material) — the clay effect must be consistent

## Implementation Hints (Tailwind + CSS)

```css
/* Core claymorphic card */
.clay-card {
  background: linear-gradient(145deg, #E8DEFF 0%, #D0C0FF 100%);
  border-radius: 24px;
  padding: 32px;
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.08),
    0 2px 6px rgba(0, 0, 0, 0.04),
    inset 0 -2px 6px rgba(0, 0, 0, 0.04),
    inset 0 4px 8px rgba(255, 255, 255, 0.6);
}

/* Clay button */
.clay-button {
  background: linear-gradient(145deg, #9D85FF 0%, #8B6FFF 100%);
  border-radius: 14px;
  padding: 14px 28px;
  color: white;
  font-weight: 600;
  border: none;
  box-shadow:
    0 6px 16px rgba(139, 111, 255, 0.3),
    inset 0 3px 6px rgba(255, 255, 255, 0.35);
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.clay-button:hover {
  transform: translateY(-2px);
  box-shadow:
    0 10px 24px rgba(139, 111, 255, 0.35),
    inset 0 3px 6px rgba(255, 255, 255, 0.4);
}
.clay-button:active {
  transform: translateY(1px) scaleY(0.97);
  box-shadow:
    0 4px 10px rgba(139, 111, 255, 0.25),
    inset 0 2px 4px rgba(255, 255, 255, 0.3);
}

/* Clay input */
.clay-input {
  background: rgba(255, 255, 255, 0.6);
  border-radius: 14px;
  padding: 14px 20px;
  border: none;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
}
```

```
/* Tailwind classes (shadow values in arbitrary) */
/* Background */
bg-[#F0EBFF] text-[#2D2D3F]

/* Clay card */
bg-gradient-to-br from-[#E8DEFF] to-[#D0C0FF] rounded-3xl p-8 shadow-[0_8px_20px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04),inset_0_-2px_6px_rgba(0,0,0,0.04),inset_0_4px_8px_rgba(255,255,255,0.6)]

/* Clay button */
bg-gradient-to-br from-[#9D85FF] to-[#8B6FFF] text-white rounded-2xl px-7 py-3.5 font-semibold shadow-[0_6px_16px_rgba(139,111,255,0.3),inset_0_3px_6px_rgba(255,255,255,0.35)] hover:-translate-y-0.5 active:translate-y-px transition-all duration-200

/* Font stack */
font-heading: 'Nunito', 'Quicksand', 'Comfortaa', sans-serif
font-body: 'Nunito', 'DM Sans', 'Poppins', sans-serif

/* Color tokens (lavender variant) */
--color-bg: #F0EBFF
--color-surface-light: #E8DEFF
--color-surface-deep: #D0C0FF
--color-accent: #8B6FFF
--color-accent-light: #9D85FF
--color-text-primary: #2D2D3F
--color-text-secondary: #7A7A8E
--color-highlight: rgba(255, 255, 255, 0.6)
--color-shadow: rgba(0, 0, 0, 0.08)
```

## Reference Touchstones

When building in this style, channel the spirit of:
- Apple Memoji and 3D emoji designs
- Figma's 3D branded illustrations
- Duolingo's soft, playful UI
- Headspace's calming interface
- Modern fintech apps for young users (Monzo Kids, GoHenry)
- 3D illustration packs (Handz, Open Peeps 3D, Kukla)
- Play-Doh and modeling clay aesthetics
- Blender/Cinema 4D soft-body render style
