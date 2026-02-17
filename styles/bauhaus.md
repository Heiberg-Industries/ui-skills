# Bauhaus

> "Form follows function." — The Bauhaus school, 1919–1933

## Identity

- **Origin**: Bauhaus school of design, Weimar Germany, founded by Walter Gropius in 1919
- **Mood**: Rational, structured, confident, modern, intellectual, geometric
- **Best for**: Architecture firms, product companies, design agencies, portfolios, editorial, SaaS with a design-forward audience
- **Avoid for**: Children's apps, playful consumer products, anything that needs to feel soft or organic

## Non-Negotiables

These elements MUST be present or it does not read as Bauhaus. Check every one before considering the UI complete:

1. **Border-radius: 0px on all rectangular elements.** No rounded corners on cards, buttons, inputs, containers. The only curves allowed are perfect circles (a Bauhaus primitive). If you see `rounded-md`, `rounded-lg`, or any border-radius > 0 on a rectangle, it's wrong.
2. **Zero shadows.** No `box-shadow`, no `drop-shadow`, no elevation effects. Depth comes from color blocking, overlapping shapes, and compositional contrast — never from shadows.
3. **Geometric decorative elements.** Every page should include at least 2-3 pure geometric shapes (circles, squares, triangles) used as compositional accents — oversized background shapes, colored blocks, or structural dividers. These are not optional decoration; they are the visual signature.
4. **Flat, solid color only.** No gradients, no blur, no transparency effects on surfaces. Every surface is a solid, flat color. The palette is restrained: black, white/off-white, and 1-2 colors from the primary triad (red, blue, yellow).

## Typography

### Philosophy
Typography in Bauhaus is **functional and geometric**. Letterforms are constructed, not decorated. The typeface itself is a design element — often oversized, always purposeful.

### Font Characteristics
- **Primary (headings)**: Geometric sans-serifs with uniform stroke width. Look for fonts with perfect circles in their 'o', sharp terminals, and minimal optical corrections.
  - Families to consider: Futura, DM Sans, Space Grotesk, Archivo, Bebas Neue (display only), Josefin Sans
- **Secondary (body)**: Clean grotesques with excellent readability at small sizes. Slightly more humanist than headings is fine.
  - Families to consider: Inter, Work Sans, Source Sans 3, IBM Plex Sans
- **Monospace (optional, for code/data)**: Geometric monospaced fonts.
  - Families to consider: Space Mono, IBM Plex Mono, JetBrains Mono

### Scale & Weight
- Use a **clear typographic hierarchy** with large jumps between levels (e.g., 14px body → 32px h2 → 64px h1)
- Headings can be very large — Bauhaus embraces bold typographic statements
- Stick to 2-3 weights maximum: Regular for body, Bold or Black for headings, Medium for UI elements
- ALL CAPS is appropriate for short headings and navigation — Bauhaus pioneered the "universal alphabet" that favored simplicity
- Letter-spacing: slightly increased for uppercase text, default for body

## Color

### Philosophy
Bauhaus color theory is rooted in the **primary triad**: red, blue, and yellow, often on a neutral base. Color is used deliberately and sparingly — it communicates, it doesn't decorate.

### Palette Construction
- **Base**: White, off-white (#FAFAFA–#F5F5F0), or light warm gray as the canvas
- **Neutrals**: True blacks (#1A1A1A–#0D0D0D) and warm grays for text and structure
- **Primary accent**: Choose ONE strong color — a Bauhaus red (#E63B2E), blue (#1B4D8E), or yellow (#F2C41D). This is your hero color.
- **Secondary accent**: Optionally add one more from the triad, used very sparingly (e.g., yellow highlight if red is primary)
- **Do NOT use**: Gradients, pastels, or more than 3 chromatic colors. Bauhaus color is flat, solid, and confident.

### Dark Mode
- Invert to a near-black canvas (#0D0D0D–#1A1A1A) with off-white text
- Primary accent retains its hue but may increase in brightness/saturation slightly
- Maintain the same restraint — dark mode is not an excuse for neon

## Spacing & Layout

### Grid System
- **Strong grid-based composition** is essential. Use a clear column grid (8-col or 12-col) and align everything to it.
- Bauhaus embraces **asymmetric balance** — not centered, but balanced through visual weight. Place heavy elements offset from center.
- Whitespace is structural, not decorative. It defines zones and creates breathing room.

### Spacing Philosophy
- Use a **consistent spacing scale** based on a base unit (e.g., 4px or 8px). Common values: 8, 16, 24, 32, 48, 64, 96.
- Generous margins around major sections (64px–128px vertical padding on desktop)
- Tighter internal padding within components (16px–24px)
- Align text blocks, images, and components to the grid — misalignment is antithetical to Bauhaus

### Composition
- **Geometric shapes as layout elements**: Circles, rectangles, and triangles can be used as backgrounds, dividers, or accent elements
- Horizontal and vertical lines as structural dividers (not just `<hr>` — visible, intentional lines)
- Overlapping elements are acceptable if they follow the grid
- Consider diagonal or rotated text for emphasis (a Bauhaus signature), but use sparingly in web

## Borders & Shadows

### Philosophy
Depth is created through **composition and contrast**, not through shadows or blur. Bauhaus design is fundamentally flat but uses layering and color to create visual hierarchy.

### Implementation
- **Borders**: Solid, 1–3px, black or primary accent color. Borders are visible and structural.
- **Border radius**: 0px (square corners) by default. Bauhaus is geometric — round corners soften the rational edge. Exception: perfect circles are fine (circles are a Bauhaus primitive shape).
- **Shadows**: None or very minimal (0–2px subtle shadows only for functional elevation like dropdowns). If you need depth, use color blocking or overlapping shapes instead.
- **No blur effects**, no glassmorphism, no gradients on surfaces.

## Components

### Buttons
- Rectangular, no border-radius (or 0px)
- Solid fill with primary accent color, white text (primary action)
- Black border with transparent fill (secondary action)
- Uppercase text with slight letter-spacing
- Generous horizontal padding, medium vertical padding
- Hover: invert colors (fill ↔ border) or shift to black fill

### Cards
- Sharp corners (border-radius: 0)
- Thin black border (1–2px) or no border with color-blocked background
- No shadow — differentiate through border or background color
- Content aligned to internal grid
- Image fills edge-to-edge within card (no internal margin on images)
- **Featured/highlighted card**: Use color inversion (dark background with light text) OR a bold primary-color background OR a thicker/accent-color border. The Bauhaus approach to emphasis is through **visual weight contrast** — the promoted card should feel heavier (darker fill, bolder border, or primary-color blocking) while siblings stay light. Do NOT use shadows, scale changes, or rounded corners to denote importance.

### Navigation
- Horizontal nav with uppercase, spaced-out links
- Active state: underline (solid, 2–3px, accent color) or color change
- No rounded pills, no background highlights — keep it typographic
- Consider a bold vertical sidebar nav for dashboards (Bauhaus loved vertical text)

### Inputs & Forms
- Square corners, solid borders (1–2px black)
- No inner shadows, no rounded edges
- Label above input, in uppercase or bold
- Focus state: border color changes to primary accent
- Error state: border changes to red with small text below

### Modals & Dialogs
- Sharp rectangle, centered or offset
- Thin black border or solid accent-color header bar
- No rounded corners, no backdrop blur — use a solid semi-transparent black overlay

## Motion

### Philosophy
Movement in Bauhaus is **mechanical and precise** — like a well-made machine. No bouncy, elastic, or organic animations.

### Implementation
- **Transitions**: Linear or ease-in-out, 150–250ms. Quick and deliberate.
- **Entrances**: Translate or fade, never bounce or spring
- **Hover effects**: Color shift, underline slide-in, or subtle scale (1.02 max)
- **Avoid**: Elastic easing, wobbly animations, parallax scroll effects, decorative particle effects

## Do's and Don'ts

### Do
- Use geometric shapes (circles, squares, triangles) as design elements
- Create strong visual hierarchy through size contrast
- Let whitespace do heavy lifting
- Use primary colors boldly but sparingly
- Align everything to a grid
- Use rules (horizontal/vertical lines) as compositional tools
- Keep the overall page count of colors under 4 (including black and white)

### Don't
- Round corners on rectangular elements
- Use drop shadows for depth
- Apply gradients or blurred backgrounds
- Use more than 2-3 typefaces
- Center everything — asymmetry is key
- Add decorative illustrations or icons that aren't geometric
- Use script or handwritten fonts

## Implementation Hints (Tailwind)

```
/* Base tokens for a Bauhaus-inspired project */

/* Spacing: 8px base grid */
spacing: default Tailwind scale works well, favor multiples of 2

/* Border radius */
rounded-none on everything (or define a custom 'rounded-bauhaus: 0px')

/* Font stack example */
font-heading: 'Space Grotesk', 'DM Sans', sans-serif
font-body: 'Inter', 'Work Sans', sans-serif

/* Color example (red-primary Bauhaus) */
--color-primary: #E63B2E     /* Bauhaus red */
--color-secondary: #1B4D8E   /* Bauhaus blue (use sparingly) */
--color-accent: #F2C41D      /* Bauhaus yellow (highlights only) */
--color-surface: #FAFAF8     /* Warm white canvas */
--color-text: #1A1A1A        /* Near-black */
--color-muted: #6B6B6B       /* Gray for secondary text */

/* Useful Tailwind classes */
border border-black
uppercase tracking-wider
text-7xl font-black (for hero headings)
shadow-none
divide-y divide-black (for lists)
```

## Reference Touchstones

When building in this style, channel the spirit of:
- The original Bauhaus posters and publications
- Braun product design (Dieter Rams era)
- The Barbican Centre's visual identity
- Stripe's marketing pages (the grid discipline, not the gradients)
- Layout principles from Josef Müller-Brockmann's grid systems
