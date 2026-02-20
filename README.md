# designbrief

**Design direction for AI-generated UI.** 21 style guardrail files that give LLMs the context to build tasteful, consistent interfaces.

[Live Showcase](https://tools.heiberg.co/designbrief) | [MIT License](LICENSE)

## What This Is

Each style is a markdown file defining the **design DNA** of a visual direction — typography, color theory, spacing philosophy, component behavior, dark mode, responsive design, content voice, icons, accessibility, and implementation guidance. These are **guardrails, not templates**. They define *what kind of* font, color, and spacing — not the exact values.

Think of it as giving your AI coding assistant design taste. Each style also teaches *why* design choices matter — building the user's intuition over time.

## Available Styles

| Style | Mood | Best For |
|---|---|---|
| **Anti-Design** | Chaotic, punk, confrontational | Art galleries, fashion, music, creative agencies |
| **Art Deco** | Luxurious, geometric, ornamental | Luxury brands, hotels, jewelry, events |
| **Aurora** | Vibrant, ethereal, dynamic | Creative tools, AI products, music, gaming |
| **Bauhaus** | Rational, structured, geometric | Agencies, portfolios, product companies |
| **Bento Grid** | Modular, information-dense, organized | Dashboards, portfolios, SaaS feature pages |
| **Claymorphism** | Friendly, 3D, soft, playful | Children's apps, education, onboarding, wellness |
| **Corporate Modern** | Professional, trustworthy, clean | Enterprise SaaS, B2B, consulting, finance |
| **Dark Mode Premium** | Sophisticated, cinematic, exclusive | Media apps, creative tools, fintech, gaming |
| **Flat Design** | Clean, bold, iconic | Mobile apps, Microsoft ecosystem, content platforms |
| **Freeform** | Personal, eclectic, expressive, unbound | Personal sites, creative portfolios, passion projects |
| **Glassmorphism** | Futuristic, elegant, premium | SaaS dashboards, fintech, landing pages |
| **Japandi** | Calm, minimal, warm, natural | Wellness, hospitality, premium retail, architecture |
| **Material Design** | Systematic, accessible, reliable | Android apps, Google ecosystem, enterprise tools |
| **Minimalism** | Reduced, silent, essential | Typography-driven sites, luxury, editorial, portfolios |
| **Neubrutalism** | Bold, playful, rebellious | Startups, dev tools, creative products |
| **Neumorphism** | Subtle, embedded, soft | Focused apps, music players, smart home, calculators |
| **Organic** | Natural, flowing, warm | Wellness, food, sustainability, community platforms |
| **Retro-Futurism** | Nostalgic, neon, sci-fi | Entertainment, gaming, events, creative agencies |
| **Skeuomorphism** | Familiar, tangible, crafted | Music production, creative tools, nostalgic products |
| **Swiss** | Precise, mathematical, objective | Corporate, editorial, data visualization |
| **Y2K Revival** | Metallic, bubbly, glossy, pop | Fashion, beauty, social media, youth brands |

## Installation

### Quick Install (recommended)

```bash
npx designbrief
```

Auto-detects your tool and copies the skill files into the right place. Supports Claude Code, Cursor, Windsurf, GitHub Copilot, and OpenAI Codex.

```bash
# Or specify your tool directly:
npx designbrief --tool claude
npx designbrief --tool cursor
```

### Via skills.sh

```bash
npx skills add Heiberg-Industries/designbrief
```

### Via skild.sh

```bash
skild install Heiberg-Industries/designbrief
```

Then just ask for UI:

```
"Build a landing page for my SaaS product — use the Glassmorphism style"
"I need a dashboard. What style would work for a fintech startup?"
```

### Manual Install

<details>
<summary>Claude Code / OpenAI Codex / GitHub Copilot</summary>

```bash
# Claude Code
git clone --depth 1 https://github.com/Heiberg-Industries/designbrief.git .claude/skills/designbrief

# OpenAI Codex CLI
git clone --depth 1 https://github.com/Heiberg-Industries/designbrief.git .agents/skills/designbrief

# GitHub Copilot (VS Code)
git clone --depth 1 https://github.com/Heiberg-Industries/designbrief.git .github/skills/designbrief
```

</details>

<details>
<summary>Cursor</summary>

```bash
git clone --depth 1 https://github.com/Heiberg-Industries/designbrief.git /tmp/designbrief
cp -r /tmp/designbrief/.cursor/rules/ .cursor/rules/
cp -r /tmp/designbrief/styles/ styles/
rm -rf /tmp/designbrief
```

</details>

<details>
<summary>Windsurf</summary>

```bash
git clone --depth 1 https://github.com/Heiberg-Industries/designbrief.git /tmp/designbrief
cp -r /tmp/designbrief/.windsurf/rules/ .windsurf/rules/
cp -r /tmp/designbrief/styles/ styles/
rm -rf /tmp/designbrief
```

</details>

<details>
<summary>Lovable / Bolt.new / v0</summary>

See [PASTE-INSTRUCTIONS.md](PASTE-INSTRUCTIONS.md) for copy-paste instructions specific to each tool.

</details>

<details>
<summary>Manual / Any LLM</summary>

Copy a style file into your prompt or context:

```
Here are the design guardrails for this project:
[paste contents of styles/neubrutalism.md]

Now build a pricing page following these guidelines.
```

</details>

## How It Works

designbrief follows the [Agent Skills open standard](https://agentskills.io). When activated, the skill:

1. **Determines the style** — from the user's request, or by recommending styles based on project context
2. **Loads the style file** — reads the full guardrails from `styles/{name}.md`
3. **Applies the guardrails** — uses the style's rules for all UI decisions (typography, color, spacing, components, motion)

## Contributing

Want to add a style? Use [STYLE-TEMPLATE.md](STYLE-TEMPLATE.md) as your starting point. Every style must include:

1. **Non-Negotiables** — The 3 things that MUST be present
2. **Identity** — Origin, mood, best-for, avoid-for
3. **Typography** — Families, scale, weight
4. **Color** — Palette theory, construction rules
5. **Spacing & Layout** — Grid, whitespace, composition
6. **Borders & Shadows** — Radius, depth, effects
7. **Components** — Buttons, cards, inputs, navigation
8. **Motion** — Animation philosophy
9. **Dark Mode & Light Mode** — Mode-specific palette, CSS custom properties
10. **Responsive & Mobile** — Typography scaling, spacing adaptation, performance notes
11. **Content & Voice** — Headline tone, CTA language, microcopy personality
12. **Icons & Illustrations** — Icon style, recommended sets, photography direction
13. **Accessibility** — Contrast ratios, focus states, reduced motion, known risks
14. **Do's and Don'ts** — Critical guardrails with "why" explanations
15. **Implementation Hints** — Tailwind + CSS examples
16. **Reference Touchstones** — Real-world inspiration

## License

MIT — free for any use. See [LICENSE](LICENSE) for details.
