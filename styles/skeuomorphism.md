# Skeuomorphism

> Digital objects that look and feel like their real-world counterparts — tangible, familiar, crafted.

## Non-Negotiables

**If you skip any of these three, it is not Skeuomorphism.** These create the illusion of physical materials in a digital space — without them, the result is "textured design" rather than genuine skeuomorphism:

1. **Realistic material textures on surfaces — leather, wood, metal, felt, paper, linen.** Every major surface must LOOK like a real material. A card isn't just a white rectangle — it's textured paper with a subtle fiber pattern. A sidebar isn't gray — it's brushed aluminum. A background isn't plain — it's leather, wood grain, or linen. These textures are applied as background images, CSS gradients that mimic materials, or layered noise/pattern overlays. Without material textures, you just have a themed UI, not skeuomorphism.

2. **Realistic lighting — highlights, shadows, bevels, and depth that simulate 3D objects.** Elements must appear to have physical depth. Buttons look like they push in when pressed (inner shadow replaces outer shadow). Panels look raised with beveled edges (lighter top edge, darker bottom edge). Toggle switches look like physical hardware with highlights reflecting an imaginary light source from the upper-left. The lighting must be CONSISTENT — every element on the page is lit from the same direction.

3. **UI elements that mimic specific real-world objects.** A calendar looks like a desk calendar with torn page edges. A notes app looks like a yellow legal pad. A media player looks like a physical stereo. A toggle switch looks like a physical switch. The metaphor must be SPECIFIC and recognizable — not generic "3D-ish." Each component should make a user think of the physical object it represents.

### Quick self-test

Point to a surface on your page. Can you name the real-world material it represents (leather? brushed metal? wood?)? Do buttons appear to physically depress when clicked? Is there a consistent light source creating highlights and shadows on every element? Would your UI look at home in iOS 6 or macOS Snow Leopard? If yes, it's Skeuomorphism.

## Identity

- **Origin**: Dominated UI design from the 1980s through 2012. Apple under Steve Jobs and Scott Forstall was the most famous practitioner — iOS 1-6, macOS through Mountain Lion. The leather stitching in Calendar, the wood shelves in Newsstand, the reel-to-reel tape in Podcasts. Google and Microsoft also used it extensively before their respective flat pivots.
- **Mood**: Familiar, warm, detailed, tangible, crafted, nostalgic, rich, immersive
- **Best for**: Music production (DAWs, synthesizers), creative tools, nostalgic products, game UIs, media players, note-taking apps, educational tools, retro-themed projects
- **Avoid for**: Enterprise SaaS, modern tech products, anything targeting a contemporary/minimalist audience, data-dense dashboards, text-heavy content

## Typography

### Philosophy
Typography in Skeuomorphism follows the MATERIAL it's printed on. Text on a legal pad uses a handwriting-style font. Text on a metal surface uses engraved-looking type. Labels on physical buttons use embossed or debossed styles. The font choice supports the material metaphor.

### Font Characteristics
- **Primary (headings)**: Depends on the material metaphor:
  - Leather/luxury: Serif fonts — Georgia, Baskerville, Palatino
  - Metal/technical: Clean sans-serifs — Helvetica, Lucida Grande, SF Pro
  - Paper/notepad: Handwriting or typewriter — Marker Felt, American Typewriter, Noteworthy
- **Secondary (body)**: Readable system fonts at comfortable sizes
  - Families to consider: Lucida Grande (the classic Mac OS font), Helvetica Neue, Georgia, system-ui
- **Text effects**: Embossed text (light text-shadow above, dark below) or debossed (reversed) to simulate physical imprinting

### Scale & Weight
- Moderate sizes — not the extreme scale of modern design. Skeuomorphism is about detail, not drama.
- Headings: Bold (700) at 20px-32px
- Body: Regular (400) at 13px-16px (often smaller than modern standards)
- Text shadow for embossing: `text-shadow: 0 1px 0 rgba(255,255,255,0.5)` (on dark backgrounds, reverse)

## Color

### Philosophy
Color in Skeuomorphism comes from the MATERIALS. Leather is brown. Metal is silver/gray. Wood is warm amber/brown. Felt is green (billiard table). The colors aren't arbitrary — they reference specific real-world materials.

### Palette Construction
- **Materials dictate the palette**:
  - Leather: #8B6914, #6B4D2E, #4A3520 (various leather tones)
  - Brushed metal: #C0C0C0, #D4D4D4, #A8A8A8 (silver range)
  - Wood: #8B6C42, #A0855B, #DEB887 (light to dark wood)
  - Linen: #E8DFD0, #D4C9B8, #F5EDE0
  - Felt/baize: #2D5F2D, #3A7A3A (green felt)
  - Paper: #FFF8DC, #FFFFF0, #FAF0E6
- **UI Chrome**: Gradient fills from light to dark to simulate 3D curvature
  - Button gradient: `linear-gradient(to bottom, #F7F7F7 0%, #D4D4D4 100%)`
  - Toolbar: `linear-gradient(to bottom, #E8E8E8 0%, #CACACA 100%)`
- **Accent**: iOS-style blue (#007AFF) or material-appropriate accent
- **Text**: Near-black on light surfaces, white with shadow on dark surfaces

### Gradient Rules
- Gradients are ESSENTIAL — they simulate 3D curvature and lighting
- Always light-to-dark (top-to-bottom) for surfaces lit from above
- Reversed for pressed/active states (dark-to-light, simulating the button being pushed in)
- Subtle, not dramatic (15-25% range between stops)

## Spacing & Layout

### Grid System
- Standard layouts, but elements have more visual weight due to textures and shadows
- Less whitespace than modern design — skeuomorphic UIs tend to fill space
- Toolbars, panels, and chrome take up more room

### Spacing Philosophy
- **Tighter than modern standards** — physical objects are packed more densely
- Padding inside elements: 8px-16px (smaller than modern)
- Between elements: 8px-12px
- Sections defined by visual borders and material changes, not whitespace
- UI chrome (toolbars, sidebars) has visible boundaries and separators

### Composition
- **Panel-based**: Content in distinct panels with visible borders, like a physical instrument
- **Toolbar-heavy**: Top bars, bottom bars, sidebars — all with visible material textures
- **Segmented**: Controls grouped into physical-looking segments
- **Layered**: Windows/panels overlap with visible shadows between them

## Borders & Shadows

### Philosophy
Borders and shadows in Skeuomorphism create the illusion of PHYSICAL depth. Every element exists at a specific distance from the "surface." Shadows are realistic — cast by a consistent light source, soft for elevated objects, sharp for objects close to the surface.

### Implementation
- **Outer shadows** (raised elements):
  - Subtle: `0 1px 3px rgba(0,0,0,0.3)`
  - Medium: `0 2px 6px rgba(0,0,0,0.3)`
  - Dramatic (elevated panel): `0 4px 12px rgba(0,0,0,0.4)`
- **Inner shadows** (pressed elements, inset fields):
  - `inset 0 1px 3px rgba(0,0,0,0.3)`
  - Often combined with a bottom highlight: `inset 0 1px 3px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.5)`
- **Bevels** (the classic skeuomorphic edge):
  - Top/left edge highlight: `border-top: 1px solid rgba(255,255,255,0.5); border-left: 1px solid rgba(255,255,255,0.3);`
  - Bottom/right edge shadow: `border-bottom: 1px solid rgba(0,0,0,0.2); border-right: 1px solid rgba(0,0,0,0.1);`
- **Border radius**: 4px-8px for buttons and inputs. Larger (12px-16px) for panels. Fully round for toggle knobs.
- **Multiple shadow layers**: Real objects often cast multiple shadows at different distances

## Components

### Buttons
- THE signature component. A skeuomorphic button looks PUSHABLE:
  - Default: Gradient fill (light top → dark bottom), beveled edges, subtle outer shadow
  - Hover: Slightly lighter gradient
  - Active/Pressed: Gradient REVERSED (dark top → light bottom), inner shadow replaces outer shadow, element appears to physically depress
  - The press effect is critical: `box-shadow: inset 0 2px 4px rgba(0,0,0,0.3)` + reversed gradient
- Border-radius: 4px-8px
- Text: Embossed with subtle text-shadow

### Toggle Switches
- Look like physical hardware switches
- Round knob with gradient + highlight + shadow
- Track with inset shadow (recessed groove)
- ON state: colored track (green, blue), knob slides right
- OFF state: gray track, knob on left
- The knob has a visible light reflection (white gradient at top)

### Inputs & Forms
- Inset (recessed) appearance: inner shadow, slightly darker background
  - `box-shadow: inset 0 1px 3px rgba(0,0,0,0.2); background: #FAFAFA;`
- Beveled border: lighter top, darker bottom
- Focus: subtle blue glow (à la macOS)
- Labels: regular weight, above or beside

### Sliders
- Track: recessed groove with inner shadow
- Thumb: raised circular knob with gradient, highlight, and shadow
- Fill: colored portion of the track (often blue gradient)

### Toolbars
- Gradient background (light top → dark bottom or vice versa)
- Material texture overlay (brushed metal, linen, etc.)
- Buttons within toolbar: slightly recessed or raised
- Separator lines between button groups
- Bottom edge: 1px shadow line

### Panels & Cards
- Material-textured background
- Visible border with beveled edges
- Drop shadow indicating elevation
- Optional: stitching detail (for leather), torn edge (for paper), wood grain border

## Motion

### Philosophy
Animation in Skeuomorphism is **physical and realistic**. Objects move as if they have mass and are affected by gravity. Pages turn like real paper. Drawers slide open with inertia. Buttons spring back after being pressed.

### Implementation
- **Button press**: Instant depression (gradient reversal + inset shadow) on mousedown, spring-back on release. 100ms.
- **Transitions**: ease-in-out, 250-350ms. Slightly springy for physical feel.
- **Page turns**: Curl effect (complex, often canvas-based)
- **Drawers/panels**: Slide with slight bounce at the end
- **Switches**: Slide with momentum, slight overshoot
- **Avoid**: Flat fades, linear timing, anything that doesn't reference physical movement

## Do's and Don'ts

### Do
- Apply realistic material textures to every major surface
- Maintain consistent lighting (upper-left light source for all elements)
- Make buttons visibly depress when clicked (gradient reversal + inset shadow)
- Use beveled edges to simulate 3D form
- Choose materials that match your app's metaphor (notepad for notes, leather for luxury)
- Layer shadows realistically — closer objects have tighter, darker shadows
- Add embossed/debossed text effects

### Don't
- Use flat, solid-color surfaces without texture (that's flat design)
- Apply inconsistent lighting — if the light comes from the top-left on buttons, it must be top-left everywhere
- Over-texture to the point of visual noise — textures should be subtle
- Mix too many materials on one screen (leather + wood + metal + felt = chaos)
- Forget the pressed state on buttons — it's the defining interaction
- Use it for modern, minimal products — skeuomorphism communicates nostalgia and richness, not simplicity
- Apply skeuomorphism to data-heavy interfaces — the visual weight overwhelms content

## Implementation Hints (Tailwind + CSS)

```css
/* Raised button */
.skeu-button {
  background: linear-gradient(to bottom, #F7F7F7 0%, #D4D4D4 100%);
  border: 1px solid #AAAAAA;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.25),
              inset 0 1px 0 rgba(255,255,255,0.8);
  text-shadow: 0 1px 0 rgba(255,255,255,0.6);
  padding: 8px 20px;
  font-weight: 600;
  color: #333333;
}
.skeu-button:active {
  background: linear-gradient(to bottom, #C8C8C8 0%, #DFDFDF 100%);
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
  text-shadow: 0 -1px 0 rgba(255,255,255,0.3);
}

/* Inset input field */
.skeu-input {
  background: #FAFAFA;
  border: 1px solid #BBBBBB;
  border-top-color: #999999;
  border-radius: 4px;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.15),
              0 1px 0 rgba(255,255,255,0.5);
  padding: 8px 12px;
}

/* Linen texture background */
.skeu-linen {
  background-color: #E8DFD0;
  background-image: url("data:image/png;base64,..."); /* tiny linen pattern tile */
}

/* Toolbar with gradient */
.skeu-toolbar {
  background: linear-gradient(to bottom, #E8E8E8 0%, #CACACA 100%);
  border-bottom: 1px solid #A0A0A0;
  box-shadow: 0 1px 0 rgba(255,255,255,0.5) inset;
}

/* Embossed text on dark surface */
.skeu-embossed-dark {
  color: #222;
  text-shadow: 0 1px 0 rgba(255,255,255,0.3);
}
/* Embossed text on light surface */
.skeu-embossed-light {
  color: #EEE;
  text-shadow: 0 -1px 0 rgba(0,0,0,0.5);
}
```

```
/* Tailwind classes (approximations — skeuomorphism often needs custom CSS) */
/* Raised button */
bg-gradient-to-b from-[#F7F7F7] to-[#D4D4D4] border border-[#AAA] rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.8)] px-5 py-2 font-semibold text-[#333] [text-shadow:0_1px_0_rgba(255,255,255,0.6)]

/* Active/pressed */
active:bg-gradient-to-b active:from-[#C8C8C8] active:to-[#DFDFDF] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]

/* Inset input */
bg-[#FAFAFA] border border-[#BBB] border-t-[#999] rounded shadow-[inset_0_1px_3px_rgba(0,0,0,0.15),0_1px_0_rgba(255,255,255,0.5)] px-3 py-2

/* Font stack */
font-primary: 'Lucida Grande', 'Helvetica Neue', system-ui, sans-serif
font-accent: 'Georgia', 'Palatino', serif

/* Color tokens */
--color-chrome-light: #E8E8E8
--color-chrome-dark: #CACACA
--color-surface: #F5F5F5
--color-border: #AAAAAA
--color-text: #333333
--color-accent: #007AFF
--color-inset-shadow: rgba(0,0,0,0.15)
--color-highlight: rgba(255,255,255,0.8)
```

## Reference Touchstones

When building in this style, channel the spirit of:
- Apple iOS 1-6 (the leather, linen, and paper era)
- macOS Leopard through Mountain Lion
- GarageBand's virtual instruments
- Ableton Live and Logic Pro's hardware-inspired interfaces
- Early Instagram's camera and polaroid metaphors
- Braun product design (translated to screen)
- Dieter Rams' physical products (the objects, not the flat graphic philosophy)
- Vintage hi-fi equipment and analog synthesizer panels
