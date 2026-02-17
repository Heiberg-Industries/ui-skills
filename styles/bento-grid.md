# Bento Grid

> A mosaic of modular tiles — organized complexity that invites exploration.

## Non-Negotiables

**If you skip any of these three, it is not a Bento Grid.** These define the layout's DNA — without them, the result is "cards in a grid" rather than an intentional bento composition:

1. **Mixed-size tiles in a unified grid — NOT uniform cards.** The defining feature of a bento grid is tiles of DIFFERENT sizes sharing a common grid. A 2x2 hero tile next to a 1x1, next to a 1x2 tall tile. If all your cards are the same size in a uniform grid, it's a card grid, not bento. You need at minimum 3 different tile sizes. The grid should follow a clear module (e.g., 4-column or 6-column base) with tiles spanning different numbers of columns and rows.

2. **Consistent, tight gaps between all tiles.** The gap between tiles is uniform on ALL sides — top, bottom, left, right. Typically 8px-16px (prefer 12px). This tight, even spacing is what creates the "bento box" feel — like compartments in a container. The gap is small enough that the tiles feel like parts of a whole, not separate cards. If your gaps are inconsistent or too large (24px+), it breaks the bento illusion.

3. **Each tile is a self-contained content module.** Every tile is a focused, complete unit — one feature, one stat, one visual, one idea. A tile should communicate its content at a glance. Large tiles can have more content, but they still communicate ONE thing. Tiles should NOT be generic cards with the same layout repeated — each tile's internal layout should be adapted to its content and size.

### Quick self-test

Look at your grid. Are there at least 3 different tile sizes? Are the gaps between tiles uniform and tight (8-16px)? Does each tile feel like a focused "compartment" with its own identity? Does the overall composition remind you of Apple's feature pages or a literal bento box? If yes, you've nailed it.

## Identity

- **Origin**: Named after the Japanese bento box (compartmentalized meal container). Popularized by Apple's marketing pages (WWDC, product features), then adopted widely in SaaS marketing, feature showcases, and dashboard design. The layout concept borrows from magazine and newspaper grid layouts.
- **Mood**: Organized, modular, Apple-inspired, informational, polished, contemporary
- **Best for**: Feature showcases, marketing/landing pages, product launches, dashboards, portfolio showcases, comparison pages, "about" pages with diverse content types
- **Avoid for**: Text-heavy editorial, e-commerce product listings, forms-heavy flows, mobile-first apps (bento is inherently a large-screen layout)

## Typography

### Philosophy
Typography in a bento grid is **headline-driven**. Each tile leads with a short, punchy heading. Body text is minimal — a sentence or two at most. The grid communicates through headings, icons, and visuals more than through paragraphs.

### Font Characteristics
- **Primary (headings)**: Modern, clean sans-serifs with good weight variation. Semi-bold to Bold for tile headings.
  - Families to consider: SF Pro Display, Inter, Plus Jakarta Sans, Geist, Outfit, General Sans
- **Secondary (body)**: Same family at regular weight. Short descriptions only.
  - Families to consider: Inter, system-ui, SF Pro Text
- **Consider**: A monospace accent font for stats, metrics, or technical details inside tiles

### Scale & Weight
- **Hero tile heading**: 32px-48px, Semi-bold to Bold (600-700)
- **Standard tile heading**: 20px-28px, Semi-bold (600)
- **Small tile heading**: 16px-20px, Semi-bold (600)
- **Body text**: 14px-16px, Regular (400). Keep it SHORT — 1-2 lines max per tile.
- **Stats/numbers**: Can be very large (48px-72px) in a tile dedicated to a metric

## Color

### Philosophy
Bento grids use color to **differentiate tiles and create visual rhythm**. Not every tile needs to be a different color, but strategic color variation prevents the grid from feeling monotonous. The color approach is typically one of two modes: monochromatic-clean or polychromatic-playful.

### Palette Construction

**Mode A: Clean/Professional (Apple-style)**
- Background: Light gray (#F5F5F7, #F2F2F7) or near-white
- Tiles: White (#FFFFFF) with very subtle shadows
- Accent: One brand color for CTAs and highlighted tiles
- One or two tiles with a colored or dark fill for emphasis
- Most tiles are white — the featured tile is the exception

**Mode B: Colorful/Playful**
- Background: Light gray or white
- Tiles: Various soft/pastel fills — light blue, light green, light purple, light amber
- Each tile (or tile group) has its own tint, creating a mosaic of color
- Text: Dark/near-black on all colored tiles
- This approach works well for marketing pages targeting a younger audience

### Both Modes
- **Text**: Near-black on light tiles, white on dark tiles
- **Accent**: One primary action color for CTAs
- **Featured tile**: Dark fill (near-black or deep brand color) with light text — the "hero" of the grid

## Spacing & Layout

### Grid System
This is the most important section for bento design.

- **Base grid**: 4-column (simple) or 6-column (complex) with consistent gaps
- **Gap**: 8px-16px. This MUST be consistent across all directions. 12px is the sweet spot.
- **Tile sizes (4-column grid example)**:
  - 1x1: Single grid cell (the smallest tile)
  - 2x1: Two columns wide, one row tall
  - 2x2: Two columns wide, two rows tall (the hero/feature tile)
  - 1x2: One column wide, two rows tall (tall tile)
  - 4x1: Full width, one row (banner tile)
- **Row height**: Set a consistent row height (or use CSS grid with auto-fit) so tiles align predictably

### Spacing Philosophy
- **Inside tiles**: Generous padding (20px-32px). Content shouldn't feel cramped.
- **Between tiles**: Tight and uniform (8px-16px). The tight gap IS the bento aesthetic.
- **Outer padding**: Generous margin around the entire grid (32px-64px from viewport)
- **Within tiles**: Content is vertically centered or top-aligned consistently

### Composition
- **The hero tile** (2x2 or larger) anchors the grid — typically top-left or center
- **Visual rhythm**: Alternate between large and small tiles to create a natural scanning pattern
- **Content variety**: Mix tile types — text, icon+text, stat, image, illustration, gradient/decoration
- **Mobile**: Stack to a single column or 2-column grid. Tiles become uniform-width but can vary in height.

## Borders & Shadows

### Philosophy
Tiles should feel like physical compartments — separated from each other by the gap, but belonging to the same system. Borders and shadows are subtle or absent — the gap and fill color do the work.

### Implementation
- **Shadows**: Very subtle if present — `0 1px 3px rgba(0,0,0,0.05)` or `0 2px 8px rgba(0,0,0,0.04)`. Apple-style bento often has no visible shadow.
- **Borders**: Usually none. The gap + different fill colors are sufficient. If used, very subtle (1px at #E5E5E5 or black/5%).
- **Border radius**: Consistent across ALL tiles — 12px-20px (16px is standard). This uniform rounding is important for the cohesive grid feel.
- **Inner elements**: Icons, images, and illustrations inside tiles can have their own subtle rounding (8px-12px)

## Components

### Tile Types
The core component library for bento grids:

1. **Hero tile (2x2+)**: Large heading, short description, optional image or illustration. The anchor piece.
2. **Feature tile (2x1)**: Icon or small illustration + heading + one-line description. Horizontal layout.
3. **Stat tile (1x1)**: A single large number/metric + label. Centered.
4. **Visual tile (any size)**: Dominated by an image, screenshot, or illustration with minimal text.
5. **CTA tile (2x1 or 1x1)**: Dark/accent fill with a call-to-action. Stands out from other tiles.
6. **Icon tile (1x1)**: Icon + short label. The simplest tile type.
7. **Testimonial tile (2x1)**: Quote + attribution. Light fill.

### Tile Internals
- Content is padded consistently (24px-32px)
- Headings are concise (2-5 words)
- Body text is optional and minimal (1-2 sentences)
- One visual element per tile (icon, image, or illustration)
- One optional action per tile (link or button)

### Navigation & Page Context
The bento grid is typically a section of a larger page, not the entire page. It sits between:
- A hero/heading section above ("Features", "What's included", "Why us")
- A CTA or next section below

## Motion

### Philosophy
Animation in bento grids is **staggered and spatial** — tiles enter the viewport in sequence, creating a "building" or "revealing" effect. The grid assembles itself.

### Implementation
- **Scroll entrance**: Tiles fade in + slight upward translate (translateY 20px → 0, opacity 0 → 1)
- **Stagger**: 50-100ms delay between tiles, cascading left-to-right, top-to-bottom
- **Hover**: Subtle scale (1.01-1.02) or slight elevation increase (shadow deepens)
- **Transitions**: 300-400ms, ease-out
- **Avoid**: Tiles moving or rearranging. The grid should feel solid once assembled.

## Do's and Don'ts

### Do
- Use at least 3 different tile sizes in your grid
- Keep gaps uniform and tight (8-16px)
- Make each tile a self-contained, focused content module
- Include one "hero" tile that's significantly larger than the others
- Vary tile content types — mix text, stats, visuals, icons
- Use consistent border-radius across all tiles
- Adapt to mobile by stacking tiles in a single or two-column layout

### Don't
- Make all tiles the same size — that's a card grid, not bento
- Use large gaps (24px+) — the tight spacing is the bento signature
- Cram too much content into a single tile — each tile = one idea
- Forget the mobile layout — bento must gracefully degrade
- Use inconsistent border-radius across tiles
- Create tiles with no clear purpose — every tile should communicate something specific
- Ignore the scanning pattern — place important content in the hero tile position (top-left)

## Implementation Hints (Tailwind + CSS)

```css
/* Core bento grid — CSS Grid is the right tool */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px; /* consistent row height */
  gap: 12px;
}

/* Tile sizes */
.tile-hero { grid-column: span 2; grid-row: span 2; }
.tile-wide { grid-column: span 2; }
.tile-tall { grid-row: span 2; }
.tile-full { grid-column: span 4; }
/* 1x1 is default — no spanning needed */

.bento-tile {
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  overflow: hidden;
}
```

```
/* Tailwind classes */
/* Grid container */
grid grid-cols-4 gap-3 /* gap-3 = 12px */

/* Tile sizes */
col-span-2 row-span-2  /* hero */
col-span-2              /* wide */
row-span-2              /* tall */
col-span-4              /* full width */

/* Tile base */
bg-white rounded-2xl p-6 overflow-hidden

/* Featured/dark tile */
bg-[#1A1A1A] text-white rounded-2xl p-6

/* Stat tile */
bg-[#F5F5F7] rounded-2xl p-6 flex flex-col items-center justify-center

/* Mobile: collapse to stacked */
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3

/* Font stack */
font-heading: 'SF Pro Display', 'Inter', system-ui, sans-serif
font-body: 'SF Pro Text', 'Inter', system-ui, sans-serif

/* Color tokens (clean mode) */
--color-bg: #F5F5F7
--color-tile: #FFFFFF
--color-tile-dark: #1A1A1A
--color-text-primary: #1D1D1F
--color-text-secondary: #86868B
--color-accent: #0066CC
--color-gap: #F5F5F7            /* The gap reveals the background */
```

## Reference Touchstones

When building in this style, channel the spirit of:
- Apple's WWDC feature pages and product marketing
- Linear's feature showcase sections
- Vercel's "Ship" marketing pages
- Stripe's feature grids
- Notion's template gallery layout
- Japanese bento boxes (the literal inspiration — compartments of varied sizes, unified container)
