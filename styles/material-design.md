# Material Design

> Paper, ink, and intentional motion — the design system that taught an industry.

## Non-Negotiables

**If you skip any of these three, it is not Material Design.** These are the physical metaphors and structural rules that define the system — without them, the result is "generic UI" rather than Material:

1. **Elevation through layered shadows that follow a consistent system.** Material Design's core metaphor is layers of paper at different heights. Each layer has a shadow that communicates its elevation: higher = larger, softer shadow. Elevation levels are specific: 0dp (flat), 1dp (card), 2dp (raised button), 4dp (app bar), 8dp (modal/drawer), 16dp (dialog), 24dp (navigation drawer). Each elevation has an exact shadow definition. Elements NEVER occupy the same elevation with different shadow appearances. The shadow system IS the z-axis.

2. **Intentional, meaningful color system with a primary/secondary accent pairing.** Material uses a structured color system: a PRIMARY color (used on the app bar, primary buttons, and key surfaces) and a SECONDARY/accent color (used for FABs, selection controls, links, and highlights). These two colors are chosen to contrast well. Large surfaces (backgrounds, cards) are neutral (white/light gray). Color is applied to SURFACES, not text (except links). The primary color dominates the header/app bar area.

3. **Components follow documented Material specifications exactly.** Material Design is a SYSTEM with documented component specs. Buttons have specific padding (36dp height, 16dp horizontal padding minimum), cards have specific elevation (1dp resting, 8dp raised), app bars are 56dp or 64dp tall, FABs are 56dp diameter, and so on. The system's strength is consistency — if you "kinda" follow it, you get a "kinda" Material look that feels off. Follow the specs or choose a different style.

### Quick self-test

Does your app bar use the primary color? Do your cards cast subtle layered shadows? Do your buttons have the exact ripple effect on click? Is there a clear primary/secondary color pairing? Do all component sizes match Material's documented specs? If yes, it's Material Design.

## Identity

- **Origin**: Created by Google and launched in 2014 with Android Lollipop. Designed by Matías Duarte. Based on the metaphor of "material" — sheets of paper that can be layered, split, and reformed. Major updates: Material Design 2 (2018, more flexibility) and Material Design 3/Material You (2021, more personalization and rounded shapes).
- **Mood**: Systematic, reliable, structured, accessible, approachable, functional
- **Best for**: Enterprise apps, productivity tools, Android-first products, admin panels, internal tools, cross-platform apps, education platforms, healthcare portals
- **Avoid for**: Luxury brands, highly creative portfolios, editorial/magazine, anything that needs to feel unique or opinionated (Material is by nature generic/systematic)

## Typography

### Philosophy
Material Design has a specific type system built on type scales. Each text element maps to a named role (Display Large, Headline Medium, Body Small, etc.) with specific size, weight, and line-height values.

### Font Characteristics
- **M2 (Material 2)**: Roboto is the canonical choice.
- **M3 (Material 3)**: More flexibility. Roboto Flex, Google Sans, or other variable fonts.
  - Families to consider: Roboto, Roboto Flex, Google Sans, Inter, Noto Sans
- **Secondary**: Same family. Material doesn't use display fonts or contrasting type pairs.
- **ONE font family** for the entire application (matching the system's consistency philosophy)

### Type Scale (Material 3)
- Display Large: 57px / Regular (400) / -0.25px tracking
- Display Medium: 45px / Regular (400)
- Display Small: 36px / Regular (400)
- Headline Large: 32px / Regular (400)
- Headline Medium: 28px / Regular (400)
- Headline Small: 24px / Regular (400)
- Title Large: 22px / Medium (500)
- Title Medium: 16px / Medium (500) / +0.15px tracking
- Title Small: 14px / Medium (500) / +0.1px tracking
- Body Large: 16px / Regular (400) / +0.5px tracking
- Body Medium: 14px / Regular (400) / +0.25px tracking
- Body Small: 12px / Regular (400) / +0.4px tracking
- Label Large: 14px / Medium (500) / +0.1px tracking
- Label Medium: 12px / Medium (500) / +0.5px tracking
- Label Small: 11px / Medium (500) / +0.5px tracking

## Color

### Philosophy
Material uses a **structured color system** with named roles. Every surface and element has a specific color role (primary, secondary, surface, error, etc.). The system is designed for accessibility — primary/on-primary, surface/on-surface pairs always meet WCAG contrast requirements.

### Palette Construction (Material 3)
- **Primary**: The dominant brand color. Used on app bars, primary buttons, active states.
- **On-Primary**: Text/icons on primary color surfaces (usually white or near-black).
- **Secondary**: A complementary accent. Used for FABs, selection controls, links.
- **Tertiary**: An additional accent for nuanced color expression (M3 addition).
- **Surface**: The background of cards and sheets. Usually white (#FFFFFF) or near-white.
- **On-Surface**: Text on surface. Near-black (#1C1B1F).
- **Surface Container** (M3): Slightly tinted surfaces for elevated containers. Multiple levels: Low, Medium, High.
- **Error**: #B3261E (standard Material error red).
- **Outline**: #79747E — used for borders, dividers.

### Color Application
- **App bar**: Primary color (M2) or Surface (M3)
- **Cards**: Surface color with elevation shadow
- **Primary buttons**: Primary color fill, on-primary text
- **Secondary buttons**: Outlined (primary border, no fill) or tonal (primary-tinted surface)
- **FAB**: Secondary color (M2) or primary (M3)
- **Text**: On-surface for body, primary for links

### Dark Theme
Material has a specific dark theme system:
- Surface: #121212 base with white overlays at different opacities per elevation
- Primary and secondary colors are LIGHTENED (not the same as light mode)
- Elevation uses surface tinting instead of shadows (lighter overlay per level)

## Spacing & Layout

### Grid System
- **Responsive grid**: 4 columns (mobile), 8 columns (tablet), 12 columns (desktop)
- Column widths are fluid; margins and gutters are fixed at each breakpoint
- Margins: 16dp (mobile), 24dp (tablet), 24dp (desktop)
- Gutters: 16dp (mobile), 24dp (tablet), 24dp (desktop)

### Spacing Philosophy
- **8dp grid**: All spacing is a multiple of 8dp (8, 16, 24, 32, 40, 48, 56, 64)
- Some fine-grained elements use 4dp increments
- Component-internal padding follows spec (e.g., cards have 16dp padding)
- Consistent, predictable spacing throughout

### Composition
- **App-bar-first**: The top bar anchors the layout
- **Cards as primary containers**: Content lives in elevated card surfaces
- **Navigation drawer**: Side navigation is a core Material pattern
- **Bottom navigation**: For mobile, 3-5 destinations
- **Content is contained** — elements respect their containers' bounds

## Borders & Shadows

### Philosophy
Elevation (shadow) is the primary depth tool. Borders are used sparingly. Material Design's shadow system communicates hierarchy — higher elements are more important or more interactive.

### Elevation System (Material 2)
```
0dp:  none (flat)
1dp:  0 1px 1px rgba(0,0,0,0.14), 0 2px 1px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.20)
2dp:  0 2px 2px rgba(0,0,0,0.14), 0 3px 1px rgba(0,0,0,0.12), 0 1px 5px rgba(0,0,0,0.20)
4dp:  0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.20)
8dp:  0 8px 10px rgba(0,0,0,0.14), 0 3px 14px rgba(0,0,0,0.12), 0 5px 5px rgba(0,0,0,0.20)
16dp: 0 16px 24px rgba(0,0,0,0.14), 0 6px 30px rgba(0,0,0,0.12), 0 8px 10px rgba(0,0,0,0.20)
```

### Material 3 Changes
- M3 reduces shadow usage in favor of **tonal surfaces** (colored container fills)
- Cards may use surface tinting instead of shadows
- Elevation is still present but more subtle

### Implementation
- **Borders**: 1px in outline color (#79747E or equivalent) for outlined components. Not used for depth — that's what shadows do.
- **Border radius**: M2: 4px default. M3: more varied — 8px-16px for cards, 20px for buttons, fully round for FABs.
- **Dividers**: 1px in outline-variant color, used to separate list items or sections

## Components

### Buttons (Material 3)
- **Filled**: Primary color fill, rounded (20px radius), 40dp height, 24dp horizontal padding
- **Outlined**: 1px primary border, transparent fill, same dimensions
- **Text**: No border, no fill, primary color text
- **Tonal**: Primary-tinted surface fill (lighter than primary)
- **FAB**: 56dp circle, primary or secondary fill, 24dp icon inside
- **All**: Medium weight (500) text, sentence case (NOT all caps in M3)
- **Ripple effect on press**: A circular ink-spread animation from the touch point

### Cards
- Surface color fill, elevation shadow (1dp resting, 8dp raised)
- Border-radius: 12px (M3)
- Internal padding: 16dp
- Can be filled (surface color), elevated (shadow), or outlined (1px border, no shadow)

### App Bar
- Top app bar: 64dp height, primary color (M2) or surface with scroll behavior (M3)
- Contains: navigation icon, title, action icons
- M3: can collapse/expand on scroll with blur/fade

### Navigation
- Drawer: 360dp wide, surface color, elevation 16dp
- Bottom nav: 80dp height, 3-5 icon+label items, active uses primary/secondary color
- Rail (tablet): 80dp wide vertical strip with icons

### Inputs
- **Filled**: Gray fill (#F5F5F5), no border, underline on bottom edge, border-radius top corners only
- **Outlined**: 1px border all around, border-radius 4px, floating label
- Focus: border changes to primary color, 2px width

## Motion

### Philosophy
Material Design has a well-defined motion system. Movement is **responsive, natural, and intentional**. Every animation conveys meaning — an element enters from where it was triggered, exits toward where it's going.

### Implementation
- **Standard easing**: cubic-bezier(0.4, 0, 0.2, 1) — 300ms for most transitions
- **Deceleration** (entering): cubic-bezier(0, 0, 0.2, 1) — 250ms
- **Acceleration** (leaving): cubic-bezier(0.4, 0, 1, 1) — 200ms
- **Sharp** (on-screen changes): cubic-bezier(0.4, 0, 0.6, 1) — 300ms
- **Ripple effect**: Circular ink-spread from touch point, 300-450ms, 10-15% opacity
- **Container transform**: Shared element transition between views (a card expands into a detail page)
- **Fade through**: One element fades out while another fades in

## Do's and Don'ts

### Do
- Follow the elevation system consistently — every element at its correct dp level
- Use the primary/secondary color pairing intentionally
- Apply the 8dp spacing grid for all measurements
- Implement the ripple effect on all interactive elements
- Follow documented component specs for sizing
- Use meaningful motion that communicates spatial relationships
- Ensure color contrast meets WCAG AA at minimum

### Don't
- Invent your own shadow values — use the elevation system
- Use more than 2-3 accent colors — Material is restrained in color
- Ignore component specs — Material's value is in its consistency
- Use center-aligned body text (left-aligned is standard)
- Apply shadows inconsistently — if a card is 1dp, ALL cards at that level are 1dp
- Mix Material with other design systems — it's comprehensive enough on its own
- Forget the ripple — it's a signature Material interaction

## Implementation Hints (Tailwind + CSS)

```css
/* Material elevation system */
.elevation-1 { box-shadow: 0 1px 1px rgba(0,0,0,0.14), 0 2px 1px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.20); }
.elevation-2 { box-shadow: 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px rgba(0,0,0,0.12), 0 1px 5px rgba(0,0,0,0.20); }
.elevation-4 { box-shadow: 0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.20); }

/* Material ripple (simplified) */
.ripple {
  position: relative;
  overflow: hidden;
}
.ripple::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  background: rgba(0,0,0,0.12);
  transform: scale(0);
  animation: ripple-effect 0.4s ease-out;
}
@keyframes ripple-effect {
  to { transform: scale(4); opacity: 0; }
}
```

```
/* Tailwind classes */
/* Card — elevation 1 */
bg-white rounded-xl p-4 shadow-[0_1px_1px_rgba(0,0,0,0.14),0_2px_1px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.20)]

/* Elevated card on hover */
hover:shadow-[0_8px_10px_rgba(0,0,0,0.14),0_3px_14px_rgba(0,0,0,0.12),0_5px_5px_rgba(0,0,0,0.20)]

/* Filled button (M3) */
bg-[#6750A4] text-white rounded-[20px] px-6 h-10 font-medium text-sm

/* Outlined button */
border border-[#79747E] rounded-[20px] px-6 h-10 font-medium text-sm text-[#6750A4]

/* App bar */
bg-[#6750A4] h-16 px-4 shadow-[0_4px_5px_rgba(0,0,0,0.14),0_1px_10px_rgba(0,0,0,0.12),0_2px_4px_rgba(0,0,0,0.20)]

/* Font stack */
font-primary: 'Roboto', 'Roboto Flex', system-ui, sans-serif

/* Color tokens (Material 3 baseline) */
--md-primary: #6750A4
--md-on-primary: #FFFFFF
--md-secondary: #625B71
--md-surface: #FFFBFE
--md-on-surface: #1C1B1F
--md-surface-container: #F3EDF7
--md-outline: #79747E
--md-error: #B3261E
```

## Reference Touchstones

When building in this style, channel the spirit of:
- Google's Material Design 3 guidelines (material.io)
- Google Workspace apps (Gmail, Calendar, Drive)
- Android's system UI and settings
- Flutter's Material widget library
- Google's marketing and product pages
- The physical metaphor: stacked sheets of paper with real shadow
