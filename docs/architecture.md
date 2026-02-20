# Architecture

> Referenced from CLAUDE.md. Read on-demand when making architecture decisions.
> Keep it focused on what Claude needs to know to make correct implementation decisions.

## System Overview

designbrief is a content library distributed as an npm package. It provides 21 markdown style files that serve as design guardrails for AI coding assistants. There is no runtime, no build step, and no server — the "product" is the markdown files themselves, delivered to users via CLI installer or manual copy.

## Key Components

| Component | Location | Purpose |
|-----------|----------|---------|
| Style files | `styles/*.md` | Core product — 21 design direction guardrails |
| Style catalog | `styles/_index.md` | Index with mood/industry tags for style selection |
| Style template | `STYLE-TEMPLATE.md` | Blueprint for creating new styles (16 sections) |
| CLI installer | `bin/cli.js` | `npx designbrief` — auto-detects tool, copies files |
| Skill definition | `SKILL.md` | Agent Skills standard entry point (root) |
| Codex fallback | `AGENTS.md` | Simplified instructions for tools without skill support |
| Cursor adapter | `.cursor/rules/designbrief.mdc` | Cursor-specific rule format |
| Windsurf adapter | `.windsurf/rules/designbrief.md` | Windsurf-specific rule format |
| Paste instructions | `PASTE-INSTRUCTIONS.md` | Copy-paste format for Lovable, Bolt.new, v0 |
| npm publish workflow | `.github/workflows/publish.yml` | GitHub Action for npm releases |

## Data Flow

There is no runtime data flow. The distribution flow is:

1. User runs `npx designbrief` (or manual install)
2. CLI detects which AI tool is present (Claude, Cursor, Windsurf, Copilot, Codex)
3. CLI copies SKILL.md + styles/ into the tool's expected directory
4. AI tool reads SKILL.md on activation → reads style files as needed
5. Style guardrails inform all UI code generation decisions

## Database

N/A — no database. All content is static markdown files.

## Authentication & Authorization

N/A — no auth. Public npm package, MIT licensed.

## External Services

| Service | Purpose | Config Location |
|---------|---------|----------------|
| npm registry | Package distribution | `package.json` |
| GitHub Actions | Automated npm publishing | `.github/workflows/publish.yml` |
| GitHub | Source repository | `package.json` → `repository` |
| Live showcase | Demo site | https://tools.heiberg.co/designbrief |

## Key Patterns

- **Guardrails over specs**: Style files define aesthetic DNA (font families, color theory, spacing philosophy), not exact values (hex codes, pixel sizes). Two projects using the same style should look related but not identical.
- **16-section anatomy**: Every style follows `STYLE-TEMPLATE.md` exactly. Sections 0-15 in fixed order.
- **Adapter pattern**: Core content lives in `SKILL.md` + `styles/`. Tool-specific adapters (Cursor, Windsurf) wrap the same workflow for different formats.
- **Progressive teaching**: Style files include "why" explanations to build design taste over time.
