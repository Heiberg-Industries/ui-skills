# Swiss / International Typographic Style

> The grid is God — precision, clarity, and the power of systematic design.

## Non-Negotiables

**If you skip any of these three, it is not Swiss Style.** These are the structural DNA — without all three, the result is "clean design" rather than recognizably Swiss:

1. **A visible, mathematical grid governs EVERYTHING.** Every element — headings, body text, images, captions, whitespace — aligns to a strict underlying grid. The grid is not a suggestion; it's law. Columns are clearly defined. Baselines align. Margins are systematic. If you turn on grid lines, every major element should snap to an intersection. The grid should be so strict that the design feels engineered, not decorated. Use an explicit column system (6, 9, or 12 columns) with consistent gutters.

2. **Typography IS the design — large, bold, and structurally composed.** Swiss style is typography-first. Headings are oversized and positioned as structural elements, not just labels. Type is arranged in strong left-aligned (ragged right) or justified columns. Sans-serif fonts only (Helvetica is the origin, but any clean grotesque works). The interplay of large and small type creates the visual interest — not color, not images, not effects.

3. **Objective, restrained color — one or two functional colors maximum.** The Swiss palette is overwhelmingly black text on white background, with ONE accent color used as a structural tool (a colored block behind a heading, a colored rule, a tinted section). Color is informational, not decorative. Typical: black, white, and red. Or black, white, and blue. Never a rainbow. The accent color is bold and confident — always fully saturated.

### Quick self-test

Can you overlay a grid on your page and see every element align? Is the typography the dominant visual element — would the design work with JUST text and no other decoration? Is the color palette reducible to black, white, and ONE accent? If yes, it's Swiss.

## Identity

- **Origin**: Developed in Switzerland in the 1950s-60s by designers like Josef Müller-Brockmann, Armin Hofmann, and Max Bill. Known as the International Typographic Style. The philosophy: design should be objective, systematic, and free of personal artistic expression. Helvetica was born from this movement.
- **Mood**: Precise, gridded, typographic, authoritative, rational, clean, timeless
- **Best for**: News/media, government/institutional, museums, academic sites, data journalism, annual reports, editorial, documentation, magazines
- **Avoid for**: Children's products, playful consumer apps, anything that needs warmth or personality, entertainment, social platforms

## Typography

### Philosophy
Typography IS Swiss design. It's not an element of the design — it IS the design. Type is treated as a structural material: sized, weighted, and positioned with the same precision an architect uses for walls and columns.

### Font Characteristics
- **Primary**: Clean grotesque or neo-grotesque sans-serif. Helvetica Neue is the canonical choice, but other clean sans-serifs work.
  - Families to consider: Helvetica Neue, Neue Haas Grotesk, Univers, Aktiv Grotesk, Inter, Suisse Int'l, Akkurat
- **ONE font family** for the entire design. Not two. One family, used at multiple sizes and weights.
- **Avoid**: Serifs (generally), display fonts, geometric sans-serifs (Futura/Poppins are too friendly), humanist sans-serifs (too warm)

### Scale & Weight
- **Extreme size contrast**: Hero headings at 72px-120px+, body text at 16px-18px. The size jump is dramatic and structural.
- **Weights used**: Light (300), Regular (400), Bold (700). Use Bold sparingly for emphasis — the size does most of the hierarchy work.
- **Line-height**: Tight on large headings (0.9-1.1), comfortable on body (1.5-1.6)
- **Letter-spacing**: Slightly tight on large headings (-0.01em to -0.03em), default on body
- **Alignment**: Strong left-alignment (flush left, ragged right). Justified text is acceptable for body columns. NEVER center-aligned headings — that violates the grid.
- **ALL CAPS**: Common for labels, categories, and navigation. Applied with increased letter-spacing (+0.05em to +0.1em).

## Color

### Philosophy
Color in Swiss design is **functional, not decorative**. It's used to create emphasis, define sections, or carry meaning — never to beautify. The palette is austere: mostly black and white, with one bold accent.

### Palette Construction
- **Background**: White (#FFFFFF) or off-white (#F5F5F5)
- **Text**: Pure black (#000000) or near-black (#1A1A1A). Swiss design isn't afraid of pure black — it's direct.
- **Accent**: ONE strong, fully saturated color. Classic choices:
  - Red (#E63B2E, #FF0000) — the original Swiss poster color
  - Blue (#0046FF, #1B4D8E)
  - Yellow (#F2C41D)
- **Accent usage**: As a background block behind headings, as a thick rule/line, as a section fill. NOT as text color (except links).
- **Secondary text**: Dark gray (#444444 or #555555) for captions and metadata

### Color Application Rules
- Large colored blocks (full-width sections or header bars): YES
- Colored text (other than links): NO
- Gradients: NEVER
- More than one accent color: Only if strictly systematic (e.g., red for section A, blue for section B in a data visualization context)

## Spacing & Layout

### Grid System
The grid is the most important element of Swiss design.

- **Modular grid**: 6, 9, or 12 columns with strict, consistent gutters (16px-24px)
- **Every element aligns to the grid** — no exceptions. Text columns, images, headings, captions — everything.
- **Asymmetric layouts are common**: A wide content column (8 columns) next to a narrow sidebar (4 columns). Or a 2:1 ratio. Symmetry is acceptable but asymmetry is more characteristically Swiss.
- **Horizontal rules and lines** can reinforce the grid visually

### Spacing Philosophy
- **Systematic and mathematical** — spacing is derived from the grid module
- Use the column width or gutter as the base unit for vertical spacing
- Generous top/bottom margins on sections (80px-120px)
- Tight spacing within content blocks (following the baseline grid)
- White space is deliberate — it's another grid element, not leftover space

### Composition
- **Strong horizontal lines** divide sections (2px-4px rules in black or accent color)
- **Full-bleed images** or images sized to exact grid columns
- **Captions aligned to a different column** than the image (classic Swiss layout technique)
- **Numbers and labels**: Often large and positioned in the grid as structural elements
- **Asymmetry**: Content weighted to one side, with the other side deliberately empty

## Borders & Shadows

### Philosophy
Swiss design uses **rules (lines) as structural elements**, not decorative borders. Shadows are nonexistent. Depth is created through typographic scale, color blocking, and spatial relationships.

### Implementation
- **Shadows**: NONE. Zero. Swiss design is completely flat.
- **Borders/Rules**: Thick horizontal or vertical lines in black or accent color (2px-4px). Used to divide sections, underline headings, or create grid structure.
- **Border radius**: 0px. Always. Everything is sharp and geometric.
- **Dividers**: Strong, visible lines — not subtle hairlines. These are design elements, not afterthoughts.
- **Boxes**: Elements can be contained in bordered rectangles, but the border is thick (2px+) and structural.

## Components

### Buttons
- Rectangular, sharp corners (0px radius). NEVER rounded.
- Solid fill in black or accent color
- ALL CAPS text, bold weight, generous letter-spacing
- Generous padding (16px 32px)
- Secondary: Outlined with 2px border, no fill
- Hover: Invert (black → white with black border, white → black)

### Cards
- If used, they're grid-aligned rectangular blocks with 0px radius
- No shadow. Optional 2px border.
- Content strictly aligned to the internal grid
- Featured card: accent color background with white text

### Navigation
- Horizontal bar with clear grid-aligned sections
- ALL CAPS links with generous spacing
- Active state: bold weight or underlined with a thick (2px-3px) line
- No decorative elements — text only, possibly with grid-aligned separators

### Tables & Lists
- Clean tabular layouts with strong header row (bold, maybe accent background)
- Thin row dividers (1px) but thick header dividers (2px-3px)
- Numbers right-aligned, text left-aligned — always
- Tables are a natural strength of Swiss design

### Page Numbers & Meta
- Large, bold page numbers or section numbers are a classic Swiss element
- Position them prominently in the grid (e.g., large "01" anchoring a section)

## Motion

### Philosophy
Swiss design is **static**. Movement, if present, is purely functional: a page loads, elements appear, states change. Animation should be imperceptible.

### Implementation
- **Transitions**: Fast, linear — 100-200ms. Functional state changes only.
- **Entrances**: None, or instant. Content is present when the page loads.
- **Hover**: Color inversion or underline appearance. No scale, no translate.
- **Scroll**: No parallax, no reveal animations. Content is simply there.
- **Avoid**: ALL decorative animation. Swiss design has no time for frivolity.

## Do's and Don'ts

### Do
- Build a strict mathematical grid and align everything to it
- Use one sans-serif font family for the entire design
- Make typography the dominant visual element — big, bold, structural
- Use sharp corners (0px radius) everywhere
- Create hierarchy through size contrast, not decorative effects
- Use thick rules/lines as design elements
- Embrace asymmetric layouts within the grid

### Don't
- Use rounded corners on anything
- Add shadows or depth effects
- Use more than one accent color
- Center-align headings (left-align is canonical)
- Use decorative fonts, serifs, or display faces
- Add gradients, textures, or patterns
- Animate for decoration — only for function
- Break the grid — if an element doesn't align, move it until it does

## Implementation Hints (Tailwind + CSS)

```css
/* Core Swiss utilities */
.swiss-rule {
  border-top: 3px solid #000000;
  width: 100%;
}

.swiss-heading {
  font-family: 'Helvetica Neue', 'Inter', sans-serif;
  font-size: 80px;
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #000000;
}

/* No shadows. No radius. */
.swiss-card {
  border: 2px solid #000000;
  padding: 32px;
}
```

```
/* Tailwind classes */
/* Grid — strict columns */
grid grid-cols-12 gap-x-6

/* Heading */
text-7xl font-bold uppercase leading-none tracking-tight text-black

/* Thick rule */
border-t-[3px] border-black

/* Card — sharp, no shadow */
border-2 border-black p-8

/* Button — rectangular, sharp */
bg-black text-white uppercase tracking-widest font-bold px-8 py-4 hover:bg-white hover:text-black hover:border-2 hover:border-black transition-colors duration-100

/* Accent block */
bg-[#E63B2E] text-white p-8

/* Section number */
text-8xl font-light text-black/20

/* Font stack */
font-primary: 'Helvetica Neue', 'Inter', 'Aktiv Grotesk', sans-serif

/* Color tokens */
--color-bg: #FFFFFF
--color-text: #000000
--color-accent: #E63B2E
--color-secondary-text: #555555
--color-rule: #000000
```

## Reference Touchstones

When building in this style, channel the spirit of:
- Josef Müller-Brockmann's poster designs
- The original Helvetica typeface and its marketing
- Swiss National Library and government publications
- Neue Zürcher Zeitung (NZZ) newspaper design
- Documenta exhibition catalogs
- The International Poster Gallery collection
- Modern editorial sites: Bloomberg Businessweek, The Outline (RIP)
