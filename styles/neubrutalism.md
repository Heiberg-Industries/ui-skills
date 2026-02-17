# Neubrutalism

> Brutalism's rebellious kid — bold, loud, and unapologetically fun.

## Non-Negotiables

**If you skip any of these three, it is not Neubrutalism.** These are the visual DNA of the style — without all three present on every major element, the result reads as "colorful and playful" rather than recognizably Neubrutalist:

1. **Thick black borders (2–3px minimum) on EVERYTHING.** Cards, buttons, inputs, images, nav bars, badges — every container and interactive element gets a solid black border. Not 1px. Not gray. `border: 2px solid #000000` at minimum, `3px` preferred. In Tailwind: `border-[3px] border-black` or `border-2 border-black`. This is the single most defining visual feature of the style.

2. **Hard offset shadows with ZERO blur on every card and interactive element.** This is the second pillar. Every card, button, and input needs a solid-color shadow offset with no blur:
   - Standard: `box-shadow: 4px 4px 0px #000000`
   - Dramatic: `box-shadow: 6px 6px 0px #000000`
   - Maximum: `box-shadow: 8px 8px 0px #000000`
   - In Tailwind: `shadow-[4px_4px_0px_#000]`
   - The shadow is a hard, geometric block — NOT a soft, blurred elevation. If you see `shadow-md`, `shadow-lg`, or any shadow with blur, it's wrong.
   - **Hover interaction**: Shadow disappears and element translates to fill the gap (pressed effect): `hover:shadow-none hover:translate-x-1 hover:translate-y-1`

3. **High-contrast saturated colors with pure black text.** The background is a bold, unexpected color (vivid pink, lime, lavender — not white). Cards use contrasting solid fills (yellow on pink, white on green). Text is pure black `#000000`. The palette is fearless and punchy.

### Quick self-test

Look at your cards. Do they have thick visible black borders? Do they cast hard rectangular shadows with no blur? Does it look like physical paper cutouts stacked with offset shadows? If yes, it's Neubrutalism. If the borders are thin or the shadows are soft/absent, fix those first — everything else is secondary.

## Identity

- **Origin**: Evolved from web Brutalism (~2015) into a friendlier, more colorful variant around 2020. Gumroad's redesign by Sahil Lavingia is often cited as the catalyst. Rooted in architectural Brutalism's "honest materials" philosophy, but adapted for digital with warmth and playfulness.
- **Mood**: Bold, playful, rebellious, authentic, energetic, confident, irreverent
- **Best for**: Startups, creative tools, dev tools, indie products, portfolios, marketplaces, education platforms, community apps
- **Avoid for**: Enterprise B2B, healthcare, finance (unless intentionally disrupting), luxury brands, anything that needs to feel quiet

## Typography

### Philosophy
Typography in Neubrutalism is **LOUD and structural**. It's the primary visual element — often more important than imagery. Type is big, bold, and unapologetic. It fills space and makes statements.

### Font Characteristics
- **Primary (headings)**: Heavy, bold sans-serifs or display fonts. Grotesque or geometric with high impact. Black (900) or Extra-Bold (800) weights.
  - Families to consider: Space Grotesk, Syne, Archivo Black, Cabinet Grotesk, Clash Display, Plus Jakarta Sans (Bold/ExtraBold), General Sans
- **Secondary (body)**: Readable sans-serifs at regular weight. Can be the same family as headings at a lighter weight. Monospace is also a valid choice for body text — it reinforces the "raw" feel.
  - Families to consider: Inter, Space Mono, JetBrains Mono, IBM Plex Sans, DM Sans
- **Optional accent**: A monospace font for labels, tags, metadata, or code-like elements. This is very common in Neubrutalism.
  - Families to consider: Space Mono, IBM Plex Mono, Fira Code

### Scale & Weight
- **Extreme hierarchy**: Headings can be very large (48px–96px+). Body text stays readable (16px–18px). The jump is dramatic and intentional.
- Headings in Black (900) or Extra-Bold (800) weight
- Body in Regular (400) or Medium (500)
- ALL CAPS headings are common and appropriate
- Tight line-height on large headings (0.9–1.1), comfortable on body (1.5–1.7)
- Letter-spacing: slightly tight on big bold headings, default on body

## Color

### Philosophy
Color in Neubrutalism is **high-contrast, saturated, and fearless**. It's not afraid of combinations that "shouldn't" work. The palette punches you in the face — and that's the point.

### Palette Construction
- **Background**: Choose a bold, unexpected base. NOT white — Neubrutalism backgrounds are often:
  - Vivid pastels: warm pink (#FFD6E0), lime green (#CCFF00), light lavender (#E0C3FC), peach (#FFE5B4)
  - Or stark: pure white (#FFFFFF) or pure black (#000000) if other elements carry the color
- **Primary surface**: A contrasting color to the background for cards and sections. Yellow cards on a pink background, for example.
- **Text**: Almost always pure black (#000000) or very near-black. Neubrutalism loves pure black — it's part of the "honest" aesthetic.
- **Accent**: A saturated, high-energy color for buttons and interactive elements. Electric blue (#3B82F6), hot pink (#EC4899), acid green (#84CC16), orange (#F97316).
- **Border**: Pure black (#000000). Always. This is non-negotiable.

### Color Combinations That Work
- Pink background + yellow cards + black text + blue accent
- White background + black borders + pastel card fills + red accent
- Lime/acid green background + white cards + black everything
- Lavender background + peach cards + dark navy text

### Dark Mode
Less common for Neubrutalism, but doable:
- Near-black background with bright, saturated card fills
- White or vivid text
- Maintain thick black borders (or switch to white borders)
- The contrast should still feel aggressive

## Spacing & Layout

### Grid System
- Neubrutalism often uses a **loose, blocky grid** — elements are organized but the alignment feels slightly raw
- Cards and sections are clearly delineated blocks, often with visible borders
- **Asymmetry is welcome** but not as calculated as Bauhaus — it's more chaotic/organic
- Elements can overlap slightly for a collage-like feel

### Spacing Philosophy
- **Generous padding** inside cards and sections (24px–40px)
- **Visible gaps** between blocks — the space between cards is part of the rhythm
- Not everything needs to align perfectly — slight misalignment adds character (but don't overdo it)
- Sections can have very generous vertical padding (80px–120px) to let the color backgrounds breathe

### Composition
- **Block-based layouts**: Content lives in distinct, bordered blocks stacked or arranged in grids
- **Overlap and offset**: Elements can be slightly offset from their expected position (a card shifted 8px down and right, for example)
- **Stickers and badges**: Floating labels, rotated badges, pill-shaped tags are very on-brand
- **Big, chunky sections**: Each section feels like its own colored block

## Borders & Shadows

### Philosophy
The **thick black border and hard offset shadow** are the signature of Neubrutalism. These two elements alone can make almost anything feel Neubrutalist. There is no subtlety here — borders are visible, shadows are geometric, edges are hard.

### Implementation
- **Borders**: 2px–4px solid black (#000000) on cards, buttons, inputs, images — everything. This is the single most defining feature.
- **Border radius**: 0px (hard brutalist) OR 8px–16px (the "neu" softening). Both work, but pick one and be consistent. The rounded variant is more common in modern Neubrutalism.
- **Shadows**: Hard offset shadow — NO blur. The shadow is a solid color block offset from the element:
  - `box-shadow: 4px 4px 0px #000000` (standard)
  - `box-shadow: 6px 6px 0px #000000` (more dramatic)
  - `box-shadow: 8px 8px 0px #000000` (maximum impact)
  - The shadow can also be a bright color instead of black: `4px 4px 0px #3B82F6`
- **No soft/blurred shadows** — that's a different aesthetic entirely. Neubrutalism shadows are sharp and geometric.

## Components

### Buttons
- **The star component.** Thick black border (2–3px), bold text, generous padding
- Solid fill in accent color + black border + hard offset shadow
- Border-radius: 0px or 8px–12px (consistent with overall choice)
- Text: Bold or Black weight, can be uppercase
- Hover: Shadow disappears and button translates to fill the gap (pressed effect). This is the classic Neubrutalism interaction:
  ```css
  .btn { box-shadow: 4px 4px 0px #000; transform: translate(0, 0); }
  .btn:hover { box-shadow: 0px 0px 0px #000; transform: translate(4px, 4px); }
  ```
- Secondary buttons: black border, no fill (or white fill), same shadow treatment

### Cards
- Thick black border (2–3px)
- Solid background fill (often a pastel or vivid color)
- Hard offset shadow (4px–8px, black)
- Content well-padded inside
- Images inside cards: also bordered, can break out of the card slightly for a collage effect
- Consider slight rotation (transform: rotate(-1deg to 2deg)) on cards for playfulness

### Navigation
- Can be a thick-bordered bar with clearly separated nav items
- Active state: filled background color or underline
- Hamburger menus can be extra chunky (thick lines)
- Consider a "sticker-style" nav where items look like physical labels

### Inputs & Forms
- Thick black border (matching buttons)
- Solid white or pastel fill
- Hard offset shadow (optional, looks great on inputs)
- Focus state: shadow changes color or border thickens
- Labels: bold, potentially uppercase
- Checkboxes and radio buttons: oversized, thick borders, filled with accent color when checked

### Tags & Badges
- Pill-shaped or rectangular with thick border
- Small, bold text
- Background in a contrasting color
- Optional: slight rotation (-2deg to 2deg)
- These are signature Neubrutalism elements — use them liberally

### Modals & Dialogs
- Thick black border, hard shadow
- Bold background color (not neutral gray — use a palette color)
- Overlay: semi-transparent black or a dark version of a palette color
- Large, clear heading. Chunky close button (bordered X)

## Motion

### Philosophy
Animation in Neubrutalism is **snappy and mechanical** — things click into place rather than floating or easing in. Movement feels tactile, like physical objects being pushed and stacked.

### Implementation
- **Transitions**: Short and snappy — 100–200ms. ease or linear. Nothing slow or luxurious.
- **Hover**: The shadow-to-press transform is the core interaction (see Buttons above). Apply it to cards, buttons, links — anything clickable.
- **Entrances**: Pop in with a slight scale (0.95 → 1) or slide from offset position. Fast.
- **Scroll**: No parallax — that's too smooth for this aesthetic. Simple fade-in-on-scroll is fine.
- **Playful touches**: Slight rotation on hover, subtle bounce on click, sticker-wobble effect on badges
- **Avoid**: Slow, fluid, glassmorphic-style animations. Nothing should feel luxurious.

## Do's and Don'ts

### Do
- Use thick black borders on everything — this is the defining feature
- Use hard offset shadows with zero blur
- Be fearless with color — saturated, high-contrast, unexpected combinations
- Make typography BIG and BOLD for headings
- Add personality through slight rotations, offset elements, and sticker-style badges
- Keep the overall feel fun and approachable despite the "raw" aesthetic
- Use the shadow-press hover interaction on interactive elements

### Don't
- Use soft/blurred shadows — instant style mismatch
- Go too subtle with borders (1px light gray borders kill the Neubrutalism feel)
- Use gradients on surfaces (flat, solid colors only)
- Make it actually ugly — Neubrutalism is bold, not broken. Maintain clear hierarchy and readability.
- Overdo the chaos — if everything is rotated and overlapping, nothing stands out
- Use it where trust and professionalism are paramount (banking, healthcare portals)
- Forget accessibility — high contrast is actually a strength of this style, lean into it

## Implementation Hints (Tailwind + CSS)

```css
/* Core Neubrutalism utilities */
.neu-border { border: 3px solid #000; }
.neu-shadow { box-shadow: 4px 4px 0px #000; }
.neu-shadow-lg { box-shadow: 8px 8px 0px #000; }

/* Press interaction */
.neu-press {
  box-shadow: 4px 4px 0px #000;
  transform: translate(0, 0);
  transition: all 0.1s ease;
}
.neu-press:hover {
  box-shadow: 0px 0px 0px #000;
  transform: translate(4px, 4px);
}
```

```
/* Tailwind classes */
border-[3px] border-black shadow-[4px_4px_0px_#000] rounded-xl
hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-100

/* Font stack */
font-heading: 'Space Grotesk', 'Syne', sans-serif
font-body: 'Inter', 'DM Sans', sans-serif
font-mono: 'Space Mono', 'JetBrains Mono', monospace

/* Color tokens example (pink + yellow palette) */
--color-bg: #FFD6E0          /* Soft pink background */
--color-surface: #FEF9C3     /* Warm yellow cards */
--color-accent: #3B82F6      /* Electric blue CTAs */
--color-text: #000000        /* Pure black text */
--color-border: #000000      /* Pure black borders */
--color-shadow: #000000      /* Black hard shadow */
--color-secondary: #CCFF00   /* Acid green for highlights */
```

## Reference Touchstones

When building in this style, channel the spirit of:
- Gumroad's redesign (the original "modern Neubrutalism" reference)
- Figma's marketing site (selective Neubrutalist elements)
- Notion's playful brand illustrations and UI elements
- Poolsuite / Vacation Inc (retro-neubrutalist hybrid)
- Indie hackers and dev tool marketing pages
- Physical collage art, zine culture, sticker aesthetics
