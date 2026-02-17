# Glassmorphism

> Frosted layers floating over vivid depth — the UI of transparent surfaces.

## Non-Negotiables

**If these four elements are not visually present, it is NOT glassmorphism.** This is the most commonly botched UI style — LLMs often produce a "dark theme with cards" instead. Every single one of these must be implemented and visually verifiable:

1. **Vivid, colorful background that shows through the glass.** This is the HERO element of the entire design. The page background must be a rich gradient (e.g., deep purple → teal), a mesh gradient, or large colorful blurred blobs/orbs. It must be vibrant enough to be clearly visible through the semi-transparent glass panels. A plain dark or plain white background is NOT glassmorphism — it's just transparency. Without a vivid background, the glass has nothing to reveal.

2. **`backdrop-filter: blur()` on every glass surface.** Cards, navbar, modals — every glass panel MUST have `backdrop-filter: blur(12px)` minimum (16px–24px preferred). This creates the frosted-glass distortion effect. Without it, you just have semi-transparent boxes. In Tailwind: `backdrop-blur-xl` or `backdrop-blur-2xl`. Include the `-webkit-backdrop-filter` prefix for Safari.

3. **Semi-transparent surface fill (rgba).** Glass panels use `background: rgba(255, 255, 255, 0.05–0.15)` in dark mode or `rgba(255, 255, 255, 0.4–0.7)` in light mode. The surface MUST be partially transparent so the blurred background shows through. In Tailwind: `bg-white/10` (dark mode) or `bg-white/50` (light mode). If your cards have a solid/opaque background, it's not glass.

4. **1px white/light border on glass edges.** Every glass surface needs `border: 1px solid rgba(255, 255, 255, 0.15–0.3)`. This simulates light catching the edge of glass and is essential for the illusion. Without it, the glass panels look flat and unfinished. In Tailwind: `border border-white/20`.

### Minimum Viable Glassmorphism (copy-paste checklist)

```
✅ Page background: vivid gradient or colorful blurred shapes — NOT plain dark
✅ Glass surfaces: backdrop-filter: blur(16px) — the frosted effect
✅ Glass surfaces: background rgba with LOW opacity (0.05–0.15 dark, 0.4–0.7 light)
✅ Glass surfaces: 1px border with white at 15–30% opacity
✅ Glass surfaces: border-radius 12px–24px (generous soft rounding)
✅ Glass surfaces: soft diffused box-shadow (0 8px 32px rgba(0,0,0,0.15))
✅ Gaps between glass panels so the background peeks through
```

### Quick self-test

After building, squint at the page. Can you see colorful shapes/gradients glowing through the card surfaces? Does the content area look like frosted glass panels floating over a vivid backdrop? If the answer to either is "no", revisit the background and blur implementation.

## Identity

- **Origin**: Popularized by Apple's macOS Big Sur and iOS redesigns (2020), drawing from earlier translucent UI experiments in Windows Vista/Aero and early CSS3 capabilities
- **Mood**: Futuristic, elegant, premium, sleek, layered, sophisticated
- **Best for**: SaaS dashboards, fintech apps, music/media players, OS-style interfaces, landing pages, portfolio sites, weather apps
- **Avoid for**: Text-heavy editorial, accessibility-critical apps for low-vision users, e-commerce with lots of product imagery, data-dense tables

## Typography

### Philosophy
Typography in Glassmorphism is **clean and modern** — it must read clearly against translucent backgrounds. Contrast and weight management are critical since the background is variable.

### Font Characteristics
- **Primary (headings)**: Modern sans-serifs with a slightly rounded, friendly feel. Medium to bold weights. Geometric or neo-grotesque.
  - Families to consider: SF Pro Display, Inter, Outfit, Plus Jakarta Sans, Satoshi, General Sans
- **Secondary (body)**: Same family as headings or a highly legible companion. Regular to Medium weight. Prioritize x-height and open counters for readability on blurred surfaces.
  - Families to consider: Inter, Source Sans 3, Nunito Sans, DM Sans
- **Avoid**: Thin/light weights on glassmorphic surfaces (the translucency eats contrast), condensed fonts, serif fonts (they clash with the futuristic tone)

### Scale & Weight
- Moderate typographic hierarchy — no extreme jumps. Glassmorphism is subtle, not shouty.
- Headings: Semi-bold to Bold (600–700). Never use light/thin weights for headings on glass surfaces.
- Body: Regular to Medium (400–500). Ensure minimum 16px on glass panels.
- Consider a slightly larger base font size (16–18px) to compensate for the noisy backgrounds.

## Color

### Philosophy
Color in Glassmorphism lives primarily in the **background layer** — behind the glass. The glass surfaces themselves are neutral and translucent. Vibrancy comes from what's beneath, not from the UI chrome.

### Palette Construction
- **Background layer (THE MOST IMPORTANT ELEMENT)**: A rich, vivid gradient or blurred image. This is what makes glassmorphism work — without it you just have a dark theme. The background must be colorful and vibrant enough to be visible through the glass panels. Common approaches:
  - Two-tone gradient (e.g., deep purple → teal, navy → magenta)
  - Mesh gradient with 3-4 color stops
  - Large blurred colorful orbs/blobs (absolute-positioned circles with blur(80px–120px) in vivid purple, pink, cyan, etc.)
  - Blurred abstract photography
  - **NEVER** use a plain solid dark or white background — the glass effect is meaningless without color behind it
- **Glass surfaces**: White with 10–25% opacity (light mode) or dark gray/black with 10–30% opacity (dark mode). The surface should be tinted, not fully transparent.
- **Borders**: 1px solid white at 15–30% opacity to define the glass edge (critical — without this the glass feels unfinished)
- **Text on glass**: Near-white (#FFFFFF or #F8F8F8) for dark mode glass, near-black (#1A1A1A) for light mode glass. Never use mid-tones — they disappear.
- **Accent color**: One bright, saturated accent (from the background gradient family) for CTAs, active states, and links. Keep it vivid.

### Dark Mode (Primary Mode)
Glassmorphism naturally favors dark mode — the glass effect is more visible and dramatic against dark, vibrant backgrounds. In dark mode:
- Glass panels: rgba(255, 255, 255, 0.05–0.15) or rgba(0, 0, 0, 0.3–0.5)
- Background: Deep, rich colors or near-black with colored blobs
- Text: White (#FFFFFF) with reduced opacity for secondary text (rgba(255,255,255,0.7))

### Light Mode
Doable but trickier. The glass appears more subtle:
- Glass panels: rgba(255, 255, 255, 0.4–0.7) — more opaque than dark mode
- Background: Soft, pastel gradients or light abstract imagery
- Text: Dark gray to black
- The frosted effect is less dramatic — consider whether Glassmorphism is the right choice for a light-first product

## Spacing & Layout

### Grid System
- Standard 12-column grid works well, but Glassmorphism shines with **card-based floating layouts**
- Glass panels should feel like they're floating over the background — they don't need to fill the grid edge-to-edge
- Allow the background to peek through between panels (the gaps are part of the aesthetic)

### Spacing Philosophy
- **Generous internal padding** on glass panels (24px–32px). The translucent surface needs room to breathe.
- **Comfortable gaps between panels** (16px–24px) to let the background show through
- Don't crowd content — the glass effect loses its magic when panels are crammed together
- Vertical rhythm should feel airy, not compressed

### Composition
- **Layered depth**: Glass panels over background, with occasional overlap for z-depth
- **Centered or floating layouts** work well — panels don't need to touch the viewport edges
- Consider a **subtle parallax** between background elements and glass panels (but keep it minimal)
- Leave negative space — the background gradient/image is part of the composition

## Borders & Shadows

### Philosophy
Glassmorphism creates depth through **transparency, blur, and subtle light borders**. Shadows are secondary to the glass effect itself but help sell the floating illusion.

### Implementation
- **Background blur**: `backdrop-filter: blur(12px–24px)` — this is the core technique. 12px for light frosting, 20px+ for heavy frost.
- **Surface border**: 1px solid rgba(255, 255, 255, 0.15–0.3) — this subtle white edge simulates light catching the glass. Essential for the style.
- **Border radius**: 12px–24px. Glassmorphism uses generous, soft rounding. Not perfectly round (that's a different aesthetic), but clearly softened.
- **Box shadow**: Soft, diffused shadow — `0 8px 32px rgba(0, 0, 0, 0.1–0.25)`. The shadow is distant and blurred, not tight. This sells the "floating" feel.
- **Inner glow (optional)**: A very subtle inset shadow with white at low opacity can add realism: `inset 0 1px 0 rgba(255,255,255,0.1)`

## Components

### Buttons
- Primary: Solid fill with accent color, generous border-radius (8px–12px), soft shadow
- Secondary: Glass-style button — translucent fill, white border, backdrop-blur
- Ghost: Just text + accent color, no fill
- Hover: Increase opacity/brightness slightly, subtle glow or shadow increase
- All buttons should have comfortable padding (12px 24px minimum)

### Cards
- The signature component. Glass panels with:
  - `backdrop-filter: blur(16px)`
  - Semi-transparent background (rgba)
  - 1px white/light border
  - Generous border-radius (16px–24px)
  - Soft distant shadow
- Content: Well-padded, clean typography, clear hierarchy
- Images within cards: Use rounded corners, consider a slight overlay to maintain glass consistency

### Navigation
- Top navbar as a glass panel stretching full width with backdrop-blur
- Links in regular weight, active state with accent color or underline
- Consider a glass-style sidebar for dashboards
- Mobile nav: glass-panel slide-out or bottom sheet
- Sticky nav benefits greatly from the blur effect — content scrolling beneath it sells the glass

### Inputs & Forms
- Glass-style inputs: translucent fill, subtle border, comfortable padding
- Border-radius consistent with cards (8px–12px)
- Focus state: border brightens to accent color, optional subtle glow
- Placeholder text at reduced opacity
- Labels above inputs in medium weight

### Modals & Dialogs
- Glass panel centered with heavy backdrop-blur
- Background overlay: dark semi-transparent (rgba(0,0,0,0.4–0.6)) — NOT blurred (that conflicts with the modal's own blur)
- Generous corner radius, prominent but soft shadow
- Close button as a small glass circle or subtle icon

## Motion

### Philosophy
Animation in Glassmorphism is **smooth, fluid, and elegant** — like objects moving through water or air. Everything feels weightless.

### Implementation
- **Transitions**: ease-out or cubic-bezier(0.4, 0, 0.2, 1), 200–400ms. Slightly longer than average to feel luxurious.
- **Entrances**: Fade in + subtle upward translate (translateY 10px → 0). Panels emerge gently.
- **Hover effects**: Subtle brightness/opacity change, slight scale (1.01–1.03), shadow deepens
- **Scroll**: Consider subtle parallax between background and glass layers
- **Avoid**: Harsh/instant transitions, bouncy springs (too playful for this aesthetic), large-scale movements

## Do's and Don'ts

### Do
- Ensure text has sufficient contrast against the glass surface (WCAG AA minimum)
- Test readability with different background colors/images beneath the glass
- Use the glass effect on a limited number of surface types (cards, navbars, modals) — not everything
- Keep backgrounds vibrant — the glass effect is only as good as what's behind it
- Use consistent blur intensity and opacity across all glass surfaces
- Add the subtle white border — it makes or breaks the glass illusion

### Don't
- Stack multiple glass layers on top of each other (blur compounds and kills readability)
- Use thin font weights on glass surfaces
- Apply glass effect to tiny elements (buttons, badges) — it's for surfaces, not widgets
- Forget the background — glass over a plain white/black background looks like a broken opacity, not like glass
- Use heavy saturated colors for the glass surface itself (it should be neutral/white/dark)
- Mix glassmorphism with drop-shadow-heavy designs — pick one depth model

## Implementation Hints (Tailwind + CSS)

```css
/* Core glass panel utility */
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

/* Light mode variant */
.glass-light {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.6);
}

/* Background setup */
.glass-bg {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* or: mesh gradient, blurred shapes, vivid imagery */
  min-height: 100vh;
}
```

```
/* Tailwind classes — glass panel (apply ALL of these together) */
bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.15)]

/* Tailwind classes — vivid background with colored blobs */
/* On the page root: */
bg-gradient-to-br from-[#1a0533] via-[#0f172a] to-[#0c0a1a] min-h-screen
/* Add 3-4 absolutely positioned colored blobs behind the glass: */
/* <div class="absolute w-[500px] h-[500px] rounded-full bg-purple-600/30 blur-[120px]" /> */
/* <div class="absolute w-[400px] h-[400px] rounded-full bg-fuchsia-500/20 blur-[100px]" /> */
/* These create the vivid depth that the glass reveals — do NOT skip them */

/* Font stack */
font-heading: 'Plus Jakarta Sans', 'Outfit', sans-serif
font-body: 'Inter', 'DM Sans', sans-serif

/* Color tokens example */
--color-accent: #8B5CF6       /* Vivid purple */
--color-bg-start: #1a0533     /* Deep purple-black gradient start */
--color-bg-end: #0f172a       /* Dark navy gradient end */
--color-glass: rgba(255, 255, 255, 0.08)
--color-glass-border: rgba(255, 255, 255, 0.15)
--color-text-primary: #FFFFFF
--color-text-secondary: rgba(255, 255, 255, 0.65)
```

## Reference Touchstones

When building in this style, channel the spirit of:
- Apple macOS Big Sur / Ventura control center and widgets
- Linear app's dark mode UI
- Stripe's glass-panel marketing components
- Vercel's dashboard (subtle glass elements)
- Windows 11 Mica/Acrylic material system
- Rauno Freiberg's personal site experiments
