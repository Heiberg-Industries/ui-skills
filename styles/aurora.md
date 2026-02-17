# Aurora / Gradient

> Rivers of color flowing through the interface — vivid, dynamic, and alive.

## Non-Negotiables

**If you skip any of these three, it is not Aurora/Gradient style.** These create the distinctive flowing-color identity — without them, the result is "a page with a gradient" rather than the intended aurora experience:

1. **Multi-color gradients with at least 3 color stops that flow organically.** Single two-color gradients are not Aurora — they're just gradients. Aurora uses MESH gradients, multi-stop linear/radial gradients, or overlapping gradient shapes that create complex, flowing color transitions. The colors should transition through 3-5 hues minimum. The gradient should feel like it's MOVING even when static — organic, flowing, and alive. Not a simple "blue to purple" stripe, but a rich pool of color that shifts and blends.

2. **Gradients as PRIMARY visual elements, not accents.** The gradient is the HERO of the page — not a subtle background tint. Gradients appear on large surfaces: the page background, hero sections, card fills, or large decorative shapes. They take up significant visual real estate. If the gradient is only on a small button or a thin header bar, that's an accent gradient, not Aurora style. At minimum: the hero/header section should be dominated by a vivid multi-color gradient.

3. **Clean, modern UI that CONTRASTS with the vivid gradients.** The UI elements (cards, text, buttons) should be clean, simple, and modern — often white or dark with high contrast against the gradient backgrounds. The contrast between the organic, vivid gradients and the crisp, minimal UI is what creates the Aurora aesthetic. If the UI is also colorful and decorated, the gradients lose their impact. Think: spectacular gradient background + clean glass or white cards floating on top.

### Quick self-test

Are there multi-color gradients (3+ colors) covering large surfaces? Do the gradients feel organic and flowing (not a simple two-color stripe)? Does the UI layer cleanly over the gradients with clear contrast? Does the page feel vivid, contemporary, and dynamic? If yes, it's Aurora.

## Identity

- **Origin**: Evolved from the gradient renaissance of 2018-2022, driven by tools like mesh gradient generators, Apple's product marketing (iPhone 14 Pro, macOS Sonoma wallpapers), Instagram's brand refresh, and CSS gradient capabilities. Named after the aurora borealis — natural light displays with flowing multi-color gradients.
- **Mood**: Dreamy, vibrant, dynamic, contemporary, creative, fresh, youthful
- **Best for**: Creative tools, music/audio apps, social platforms, Gen-Z/millennial products, portfolio sites, agency sites, event marketing, product launches, mobile apps
- **Avoid for**: Enterprise B2B, healthcare, government, data-heavy dashboards, anything that needs to feel conservative or austere

## Typography

### Philosophy
Typography in Aurora style is **clean and modern** — it needs to read clearly against colorful, sometimes noisy gradient backgrounds. Weight and contrast management are critical.

### Font Characteristics
- **Primary (headings)**: Modern, geometric or rounded sans-serifs. Semi-bold to Bold (600-700). Clean letterforms that read well against gradients.
  - Families to consider: Outfit, Sora, DM Sans, Plus Jakarta Sans, General Sans, Satoshi, Clash Display (for display use)
- **Secondary (body)**: Same family at regular weight, or highly legible companion.
  - Families to consider: Inter, DM Sans, system-ui
- **Avoid**: Thin weights (lost against gradient backgrounds), serif fonts (clash with the contemporary mood), decorative fonts

### Scale & Weight
- Headings: Semi-bold to Bold (600-700) at 40px-72px
- Body: Regular to Medium (400-500) at 16px
- **Gradient text**: Headings can USE the gradient as their fill color (via background-clip: text). This is a signature Aurora technique.
- Ensure text has sufficient contrast against gradient backgrounds — add a semi-transparent overlay if needed

## Color

### Philosophy
Color IS the design in Aurora style. Gradients create the visual identity, mood, and energy. The palette is VIVID and MULTI-HUE — not muted, not monochromatic.

### Gradient Types

**Mesh Gradient** (the most Aurora):
Complex, multi-point gradients that blend 3-5 colors in an organic, non-linear way. Achieved with overlapping radial gradients or dedicated mesh gradient tools.

**Multi-stop Linear Gradient**:
Linear gradients with 3+ color stops. `linear-gradient(135deg, #FF6B6B, #9B59B6, #3498DB, #1ABC9C)`

**Gradient Blobs/Orbs**:
Absolutely positioned circular elements with blur, each a different vivid color, composited together.

### Palette Families

**Sunset/Warm**:
- Colors: Hot coral (#FF6B6B), magenta (#E91E8C), warm purple (#9B59B6), golden orange (#F39C12)
- Mood: Energetic, warm, passionate

**Ocean/Cool**:
- Colors: Electric blue (#3498DB), teal (#1ABC9C), deep purple (#8E44AD), cyan (#00D2FF)
- Mood: Calm-vibrant, deep, contemplative

**Northern Lights**:
- Colors: Electric green (#00FF87), cyan (#00D2FF), violet (#7B2FFF), magenta (#FF2D95)
- Mood: Magical, dynamic, alive

**Candy/Playful**:
- Colors: Pink (#FF6FD8), peach (#FFC371), lavender (#C471ED), sky blue (#87CEEB)
- Mood: Fun, sweet, youthful

### UI Colors (contrasting with gradients)
- **Text on gradients**: White (#FFFFFF) with strong weight (600+) for readability
- **Cards over gradients**: White (#FFFFFF) or near-black (#111111) with high opacity
- **Text on cards**: Standard dark (#1A1A1A) or light (#FAFAFA) depending on card color
- **Borders on gradient backgrounds**: White at 20-30% opacity

## Spacing & Layout

### Grid System
- Standard 12-column grid, max-width 1200-1400px
- The grid is clean and modern — the gradients provide the visual complexity
- Full-bleed gradient sections that extend to viewport edges

### Spacing Philosophy
- **Generous — let the gradients breathe**
- Hero sections: 100vh or close, letting the gradient dominate
- Section padding: 80px-120px vertical
- Card padding: 24px-32px
- Between cards: 16px-24px
- The gradient backgrounds need SPACE to be appreciated — don't cover them entirely with content

### Composition
- **Gradient hero + clean content sections below**: The gradient dominates the top, and content sections below can alternate between gradient and clean/white
- **Floating cards on gradient**: White or glass cards float over a gradient background
- **Gradient as decoration**: Large gradient shapes (circles, blobs) placed behind clean content
- **Full-bleed gradient sections**: Breaking between clean sections with a full-width gradient band

## Borders & Shadows

### Philosophy
The gradient IS the visual interest. Borders and shadows are subtle — they support the clean UI layer, not compete with the gradients.

### Implementation
- **Shadows**: Soft, modern shadows on cards floating over gradients:
  - `0 8px 32px rgba(0,0,0,0.1)` for cards on light gradient
  - `0 8px 32px rgba(0,0,0,0.25)` for cards on dark gradient
- **Borders**: White at 15-25% opacity on cards over gradients (similar to glassmorphism). On clean sections: standard light gray.
- **Border radius**: 12px-20px (modern, rounded). Consistent across elements.
- **Gradient borders**: A signature Aurora technique — borders that are themselves gradients:
  ```css
  border: 2px solid transparent;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(135deg, #FF6B6B, #9B59B6, #3498DB) border-box;
  ```

## Components

### Buttons
- **Gradient fill**: The signature Aurora button — filled with a multi-color gradient
  - `bg-gradient-to-r from-[#FF6B6B] via-[#9B59B6] to-[#3498DB]`
  - White text, 10px-12px radius
  - Hover: brightness increase or slight gradient shift
- **On gradient backgrounds**: White fill with dark text, or ghost (white border + white text)
- **Gradient border button**: Transparent fill with a gradient border (the advanced version)
- Padding: 12px 28px, medium to semi-bold text (500-600)

### Cards
- **On gradient sections**: White fill, 16px radius, soft shadow. Clean contrast against the color.
- **On clean sections**: Can have a subtle gradient accent (top border gradient, gradient shadow, or small gradient element)
- Generous padding (24px-32px)
- Clean content layout inside — the card interior should be simple

### Navigation
- **On gradient hero**: Transparent nav with white text, white logo. No background.
- **On scroll/clean sections**: White background with subtle shadow
- Clean text links, gradient accent on active item (optional)

### Gradient Text
A signature technique:
```css
.gradient-text {
  background: linear-gradient(135deg, #FF6B6B, #9B59B6, #3498DB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```
Use on hero headings for maximum impact. Don't use on body text (readability).

### Gradient Decorative Elements
- **Blobs/orbs**: Large blurred circles of color placed behind content
- **Gradient lines**: Horizontal rules with gradient fill
- **Gradient icons**: Icon fills using gradients instead of solid colors
- **Background shapes**: Abstract gradient shapes (circles, waves) as section decorations

## Motion

### Philosophy
Animation in Aurora style is **fluid and flowing** — gradients themselves can animate, colors can shift, and the overall feel should be dynamic and alive.

### Implementation
- **Gradient animation**: Slowly shifting gradient angles or positions (over 8-15s cycles). The gradient subtly breathes.
  ```css
  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  /* On element: background-size: 200% 200%; animation: gradient-shift 10s ease infinite; */
  ```
- **Blob movement**: Gradient blobs slowly drift and pulse
- **Hover**: Gradient brightens or shifts hue. Cards lift slightly.
- **Entrances**: Fade in + upward translate (20px → 0). Staggered for card groups.
- **Transitions**: 300-400ms, ease-out. Smooth and modern.
- **Avoid**: Jerky movements, fast animations. Everything should flow.

## Do's and Don'ts

### Do
- Use multi-color gradients (3+ color stops) on large surfaces
- Make the gradient the HERO of the design — give it space
- Keep UI elements (cards, buttons, text) clean and contrasting against gradients
- Use gradient text on hero headings for impact
- Animate gradients subtly for a living, breathing feel
- Ensure text readability on gradient backgrounds (add overlays if needed)
- Explore mesh gradients for the most organic, aurora-like effect

### Don't
- Use simple two-color gradients only — Aurora needs complexity
- Apply gradients to everything — the contrast with clean UI is essential
- Use muted or desaturated colors — Aurora gradients should be VIVID
- Let gradients compromise text readability
- Use harsh, abrupt color transitions — gradients should flow smoothly
- Mix aurora/gradient style with heavy borders, shadows, or textures — keep the UI clean
- Forget mobile — gradients should be simplified on smaller screens for performance

## Implementation Hints (Tailwind + CSS)

```css
/* Mesh gradient background */
.aurora-bg {
  background:
    radial-gradient(circle at 20% 30%, #FF6B6B 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, #9B59B6 0%, transparent 50%),
    radial-gradient(circle at 50% 80%, #3498DB 0%, transparent 50%),
    radial-gradient(circle at 70% 60%, #1ABC9C 0%, transparent 40%);
  background-color: #0F0F1A; /* fallback base */
}

/* Gradient text */
.aurora-text {
  background: linear-gradient(135deg, #FF6B6B, #9B59B6, #3498DB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Animated gradient */
.aurora-animated {
  background: linear-gradient(135deg, #FF6B6B, #9B59B6, #3498DB, #1ABC9C);
  background-size: 300% 300%;
  animation: aurora-shift 10s ease infinite;
}
@keyframes aurora-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Gradient border */
.aurora-border {
  border: 2px solid transparent;
  background: linear-gradient(#fff, #fff) padding-box,
              linear-gradient(135deg, #FF6B6B, #9B59B6, #3498DB) border-box;
  border-radius: 16px;
}
```

```
/* Tailwind classes */
/* Gradient hero background (dark base with blobs) */
bg-[#0F0F1A] relative overflow-hidden
/* Add blobs as absolutely positioned children */

/* Gradient text heading */
bg-gradient-to-r from-[#FF6B6B] via-[#9B59B6] to-[#3498DB] bg-clip-text text-transparent

/* Card on gradient */
bg-white rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.15)]

/* Card on dark gradient */
bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6

/* Gradient button */
bg-gradient-to-r from-[#FF6B6B] via-[#9B59B6] to-[#3498DB] text-white rounded-xl px-7 py-3.5 font-semibold hover:brightness-110 transition-all duration-300

/* Gradient blob (position with absolute + specific coordinates) */
absolute w-[500px] h-[500px] rounded-full bg-[#FF6B6B] opacity-30 blur-[120px]

/* Font stack */
font-heading: 'Outfit', 'Sora', 'DM Sans', sans-serif
font-body: 'Inter', 'DM Sans', system-ui, sans-serif

/* Color tokens (sunset variant) */
--color-gradient-1: #FF6B6B
--color-gradient-2: #9B59B6
--color-gradient-3: #3498DB
--color-gradient-4: #1ABC9C
--color-bg-dark: #0F0F1A
--color-bg-light: #FFFFFF
--color-text-on-gradient: #FFFFFF
--color-text-primary: #1A1A1A
--color-text-secondary: #6B7280
```

## Reference Touchstones

When building in this style, channel the spirit of:
- Apple's macOS Sonoma and iOS 17 wallpapers
- Instagram's gradient brand identity
- Figma's marketing site gradients
- Stripe's gradient orbs on marketing pages
- Notion's AI feature marketing
- Spotify Wrapped's vivid gradient visuals
- The actual aurora borealis — natural flowing light
- Mesh gradient generators (meshgradient.com, css.glass)
