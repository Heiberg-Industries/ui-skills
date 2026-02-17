# Organic / Biomorphic

> Nature's curves in digital form — fluid, living, and impossibly smooth.

## Non-Negotiables

**If you skip any of these three, it is not Organic/Biomorphic design.** These create the natural, flowing quality — without them, the result is "rounded design" rather than genuinely organic:

1. **Non-geometric, irregular curved shapes as primary structural elements.** Organic design rejects the rectangle. Containers, section dividers, backgrounds, and decorative elements use freeform curves — blob shapes, amoeba forms, wave dividers, leaf-like curves. These shapes should look like they came from NATURE (cells, rivers, petals, terrain), not from a geometry tool. A circle is geometric; a blob is organic. A straight line is geometric; a wave is organic. At minimum: section dividers should be curves/waves (not straight lines), and at least one major container or background shape should be a freeform blob.

2. **A nature-derived color palette with earth tones, greens, and warm neutrals.** Organic color comes from the natural world: sage green, terracotta, sand, sky blue, moss, stone gray, cream, ocean teal. Colors are NEVER harsh or synthetic (no neon, no pure primaries). Every color should have a plausible natural reference — "the color of dried sage," "the color of wet sand," "forest green at dusk." The palette feels grown, not manufactured.

3. **Soft, flowing transitions between elements — no hard edges or abrupt boundaries.** In organic design, elements FLOW into each other rather than sitting in distinct boxes. Sections blend through wave dividers or gradient transitions. Colors transition softly. Shapes overlap and merge. Borders are absent or very subtle. The entire page should feel like one continuous flowing composition, not a stack of separate blocks.

### Quick self-test

Are there visible non-geometric curved shapes (blobs, waves, organic forms)? Do the colors feel like they were sampled from nature? Do elements flow into each other rather than sitting in rigid boxes? Could this design exist as a pattern in nature (river, leaf, terrain)? If yes, it's Organic/Biomorphic.

## Identity

- **Origin**: Rooted in Art Nouveau (1890s), biomorphic art (Hans Arp, Henry Moore), and organic architecture (Frank Lloyd Wright, Zaha Hadid). In digital design, influenced by the blob/liquid shape trend of 2019-2022, Apple's fluid design language, and growing interest in nature-inspired UI as a counter to rigid grid systems.
- **Mood**: Natural, flowing, warm, human, calming, approachable, alive, gentle
- **Best for**: Wellness/health, food/beverage, sustainability brands, community platforms, yoga/meditation apps, organic product brands, environmental organizations, children's education, beauty/skincare
- **Avoid for**: Finance (needs precision), data-heavy dashboards, government/institutional (needs formality), developer tools, anything that needs to feel structured or authoritative

## Typography

### Philosophy
Typography in Organic design is **warm, rounded, and flowing**. Fonts echo the curves of the organic shapes — no sharp angles, no harsh geometric precision. Readability in a calm, natural context is key.

### Font Characteristics
- **Primary (headings)**: Rounded sans-serifs or soft serifs with organic curve quality. Medium to Semi-bold.
  - Rounded sans: Nunito, Quicksand, Comfortaa, Varela Round, Sora
  - Soft serif: Lora, Source Serif 4, Literata (at lighter weights)
  - Handwritten accent (sparingly): Caveat, Kalam, Patrick Hand
- **Secondary (body)**: Same family at regular weight, or a highly legible companion.
  - Families to consider: Nunito, DM Sans, Source Sans 3, Inter (despite being geometric, its neutrality works)
- **Avoid**: Angular, condensed, or sharp fonts (Futura, Bebas Neue, Roboto Condensed). Monospace feels too mechanical.

### Scale & Weight
- **Headings**: Semi-bold (600) at 36px-56px. Not too heavy — organic design is gentle.
- **Body**: Regular (400) at 16px-18px with generous line-height (1.7-1.8)
- Moderate hierarchy — no extreme scale jumps. The design should feel balanced and natural, not dramatic.
- Letter-spacing: Default or very slightly open. Nothing tight.

## Color

### Philosophy
Every color must have a plausible NATURAL ORIGIN. If you can't point to something in nature with that color — a plant, mineral, sky, water, earth — it doesn't belong.

### Palette Construction
- **Background**: Warm cream/off-white (#FAF8F3, #F5F0E8) or soft nature-inspired tints:
  - Sage mist: #F2F5F0
  - Sky wash: #F0F5FA
  - Sand: #F8F4ED
- **Primary accent (ONE nature color)**:
  - Sage/moss green: #7D9B76, #8FA389, #6B8F60
  - Terracotta/clay: #C67B5C, #B5704D, #D4956A
  - Ocean teal: #4A8C88, #3D7F7A, #5BA09C
  - Sky blue: #6BAACC, #78B4D0
  - Warm earth: #A67B5B, #8B6B4A
- **Secondary accent**: A lighter or complementary nature color:
  - Pale sage on terracotta primary
  - Sandy beige on ocean teal primary
- **Text**: Warm dark brown or charcoal (#3B3530, #2C2825) — NOT pure black
- **Secondary text**: Warm medium gray (#7D756D, #8E857D)
- **Surface/cards**: White (#FFFFFF) or very slightly warmer than the background

### Color Temperature
- WARM undertones in everything — even the blues should lean warm (teal, not electric)
- NO pure whites, NO cool grays, NO saturated primaries
- Colors should feel like they've been mixed with a tiny bit of brown/ochre

## Spacing & Layout

### Grid System
- **Fluid, non-rigid layout** — content doesn't need to snap to a strict grid
- Centered content areas with generous margins
- Max-width: 1000-1200px
- Sections can vary in width — some content is narrow (prose), some full-bleed (wave backgrounds)

### Spacing Philosophy
- **Generous and flowing** — matching the unhurried pace of nature
- Section padding: 100px-140px vertical
- Between elements: 32px-48px
- Inside cards/containers: 32px-40px
- Spacing feels ORGANIC — not mathematically rigid. Slight variations are welcome.

### Composition
- **Wave-divided sections**: Instead of straight horizontal lines between sections, use SVG wave or blob curves
- **Asymmetric but balanced**: Content weighted to one side with organic shapes on the other
- **Full-bleed organic backgrounds**: Large blob shapes behind content sections
- **Layered curves**: Multiple wave/blob shapes at different opacities creating depth
- **Flowing vertical rhythm**: The page feels like scrolling down a river — continuous, not segmented

## Borders & Shadows

### Philosophy
Organic design AVOIDS hard edges. Separation comes from whitespace, color differences, and subtle shadows — not borders. When visual separation is needed, it's achieved through organic shapes (waves, blobs) rather than lines.

### Implementation
- **Borders**: Almost never. If absolutely needed: very subtle, 1px warm gray (#E0D8CF)
- **Shadows**: Soft, warm, and diffused:
  - `0 4px 20px rgba(60, 50, 40, 0.08)` — warm-toned shadow
  - Shadows should feel like natural light filtering through leaves, not harsh spotlights
- **Border radius**: GENEROUS — 20px-40px for cards, or custom blob-shaped clip-paths. Nothing should have sharp corners.
- **Dividers**: Wave SVGs or curved gradients. NEVER straight horizontal rules.
- **Clip-paths**: Use `clip-path` for organic-shaped containers:
  ```css
  clip-path: ellipse(60% 55% at 50% 50%); /* simple organic container */
  ```

### Wave Dividers
```css
/* SVG wave as section divider — a signature organic element */
.wave-divider {
  position: relative;
}
.wave-divider::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 80px;
  background: url("data:image/svg+xml,..."); /* SVG wave path */
}
```

## Components

### Buttons
- Pill-shaped (fully rounded: `border-radius: 999px`)
- Soft fill in accent color, no border
- Generous padding (14px 32px)
- Hover: subtle lightening, optional slight scale (1.02)
- Shadow: soft, matching the accent color `box-shadow: 0 4px 16px rgba(accent, 0.25)`
- Text: Medium weight (500-600), warm color

### Cards
- Generous border-radius (20px-32px) or custom blob-shaped clip-path
- Subtle warm shadow
- White or very light fill
- No borders
- Generous padding (32px-40px)
- Content: one focused topic, gentle hierarchy

### Navigation
- Soft, transparent navbar or barely-there background
- Simple text links in warm dark color
- Active: accent underline (curved, not straight) or filled pill background
- Logo: can incorporate a leaf, wave, or organic shape
- The nav should DISAPPEAR into the page — not dominate it

### Section Dividers (ESSENTIAL)
Organic design's signature structural element:
- **Wave dividers**: SVG waves between sections, transitioning between background colors
- **Blob backgrounds**: Large organic shapes (absolutely positioned) behind content
- **Gradient fade**: Sections fade into each other through color gradient

### Images
- Always in rounded containers (20px+ radius) or custom organic clip-paths
- Nature photography is strongly on-brand
- Images can bleed into organic-shaped masks

### Icons
- Rounded, organic-style line icons (not sharp/geometric)
- Consistent 2px stroke, rounded caps and joins
- Nature-themed when possible (leaf, water, sun, plant)

## Motion

### Philosophy
Animation in Organic design is **smooth, gentle, and nature-inspired** — like water flowing, leaves drifting, or plants growing. Movement should feel alive and unhurried.

### Implementation
- **Transitions**: Slow and smooth — 300-500ms, ease-out
- **Hover**: Gentle color shift, subtle scale (1.02), shadow deepens. Slow (300ms).
- **Scroll**: Wave dividers can subtly shift/parallax. Blob backgrounds drift slowly.
- **Entrances**: Gentle fade + upward float (translateY 15px → 0, 400ms, ease-out)
- **Background blobs**: Slowly drift and morph (CSS animation over 10-20s)
- **Avoid**: Anything sharp, instant, mechanical, or bouncy. Movement should feel like breathing.

## Do's and Don'ts

### Do
- Use organic, non-geometric shapes (blobs, waves, leaf curves) as structural elements
- Sample all colors from nature — earth, plant, sky, water, stone
- Replace straight section dividers with wave/curve SVGs
- Use generous, flowing border-radius (20px+) or clip-paths
- Let sections flow into each other rather than sitting in rigid boxes
- Include nature imagery and organic-shaped icons
- Maintain warm color temperature throughout

### Don't
- Use straight lines for section dividers
- Use sharp corners (0px radius) on anything
- Use pure black, pure white, neon, or synthetic-feeling colors
- Create rigid, grid-locked layouts
- Use angular or condensed typography
- Add hard borders on elements — separation comes from space and shadow
- Use mechanical or instant animations — everything should flow

## Implementation Hints (Tailwind + CSS)

```css
/* Organic blob background shape */
.organic-blob {
  position: absolute;
  width: 600px;
  height: 500px;
  background: rgba(125, 155, 118, 0.12);
  border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
  filter: blur(40px);
}

/* Wave section divider */
.wave-top {
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}
.wave-top svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 80px;
}

/* Organic card */
.organic-card {
  background: #FFFFFF;
  border-radius: 24px;
  padding: 36px;
  box-shadow: 0 4px 20px rgba(60, 50, 40, 0.08);
  /* no border */
}

/* Nature-gradient section transition */
.section-fade {
  background: linear-gradient(to bottom, #F5F0E8, #F2F5F0);
  /* sand to sage — sections flow, not jump */
}
```

```
/* Tailwind classes */
/* Background */
bg-[#FAF8F3] text-[#3B3530]

/* Organic card */
bg-white rounded-3xl p-9 shadow-[0_4px_20px_rgba(60,50,40,0.08)]

/* Pill button */
bg-[#7D9B76] text-white rounded-full px-8 py-3.5 font-medium shadow-[0_4px_16px_rgba(125,155,118,0.3)] hover:bg-[#6B8F60] transition-all duration-300

/* Blob shape (position with absolute) */
absolute w-[600px] h-[500px] bg-[#7D9B76]/10 rounded-[60%_40%_55%_45%/50%_60%_40%_50%] blur-[40px]

/* Heading */
text-4xl font-semibold text-[#3B3530] leading-tight

/* Body text */
text-lg leading-relaxed text-[#7D756D]

/* Section padding */
py-28 lg:py-36

/* Font stack */
font-heading: 'Nunito', 'Quicksand', 'Sora', sans-serif
font-body: 'Nunito', 'DM Sans', 'Source Sans 3', sans-serif

/* Color tokens (sage + sand palette) */
--color-bg: #FAF8F3
--color-surface: #FFFFFF
--color-accent: #7D9B76              /* sage green */
--color-accent-deep: #6B8F60
--color-secondary: #C67B5C           /* terracotta */
--color-text-primary: #3B3530
--color-text-secondary: #7D756D
--color-border: #E0D8CF              /* if absolutely needed */
--color-shadow: rgba(60, 50, 40, 0.08)
```

## Reference Touchstones

When building in this style, channel the spirit of:
- Frank Lloyd Wright's Fallingwater (architecture merging with nature)
- Zaha Hadid's fluid architectural forms
- Apple's fluid design language (subtle organic curves in UI)
- Headspace's nature-inspired illustration style
- Calm app's peaceful, nature-rooted interface
- Art Nouveau posters (Mucha, Grasset) — for decorative organic curves
- Terrarium and botanical garden aesthetics
- Japanese zen garden design (organic placement, natural materials)
- Patagonia and Allbirds brand design (nature-forward)
