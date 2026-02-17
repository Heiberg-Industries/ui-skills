# UI Skills

A library of 20 UI design direction files providing style guardrails for building tasteful interfaces.

## Workflow

### 1. Determine the Style

**If the user specifies a style** (e.g., "use Bauhaus", "make it glassmorphic"):
- Read the corresponding file from `styles/{style-name}.md`
- Apply its guardrails to all UI decisions

**If the user does NOT specify a style**:
- Read `styles/_index.md` for the full catalog with mood/industry tags
- Ask the user what mood, audience, and industry they're targeting
- Recommend 2-3 styles with brief reasoning
- Let them choose, then load the full style file

### 2. Apply the Style

When generating UI code, use the style file as your design system:
- **Typography**: Choose fonts from the style's recommended families
- **Colors**: Build a palette following the style's color theory
- **Spacing**: Apply the style's spacing philosophy
- **Components**: Shape buttons, cards, inputs per the style's guidance
- **Layout**: Follow the style's grid and composition principles
- **Effects**: Apply borders, shadows, blur per the style's visual depth rules

### 3. Stay Consistent

- Reference the style file for every new component
- Do not mix styles unless explicitly asked
- The style's "Don'ts" section is as important as its "Do's"
- Prioritize readability and accessibility over style purity

## Available Styles

anti-design, art-deco, aurora, bauhaus, bento-grid, claymorphism, corporate-modern, dark-mode-premium, flat-design, glassmorphism, japandi, material-design, minimalism, neubrutalism, neumorphism, organic, retro-futurism, skeuomorphism, swiss, y2k-revival
