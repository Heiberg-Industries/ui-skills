# CLAUDE.md — designbrief

## Session Start

Read these files for context before doing any work:
1. @MEMORY.md — Permanent lessons (read once per session)
2. @docs/SESSION_CONTEXT.md — If exists, resume interrupted work
3. @docs/HANDOFF.md — Current focus, recent changes, next priorities
4. @docs/CURRENT_STATUS.md — What works, what's blocked

After completing significant work, update HANDOFF.md and CURRENT_STATUS.md.
Add new lessons to MEMORY.md immediately when discovered.

## Working Style

The project owner defines what should happen. Claude implements.

- **Before implementing**: Explain approach in plain language, get approval
- **After implementing**: Provide verification steps the owner can run
- **On failures**: Explain what went wrong in non-technical terms
- **If unsure**: ASK. Say "I'm not sure how X works. Should I investigate?"

## Task Fidelity Routing

Classify every task before starting:

| Level | When | Workflow |
|-------|------|---------|
| **F1 — Trivial** | Single file, clear change | Read → Change → Verify |
| **F2 — Standard** | Multi-file, follows patterns | State plan → Consult rules → Implement → Verify |
| **F3 — Discovery** | Unclear scope, new patterns | Research → Written plan → Get approval → Implement incrementally |

If during F1/F2 you discover larger scope, STOP and re-classify.

## Before ANY Code Edit

1. **READ** the file(s) you're about to modify
2. **SEARCH** for usages of functions/components you'll change
3. **CONSULT** relevant `.claude/rules/` (F2/F3 only)
4. **STATE** your plan before editing
5. **VERIFY** after editing — run `npm pack --dry-run`

Never hardcode values that exist in config/DB. Never assume a function signature.
Never add new files when editing existing ones works. Never guess at types.

## Proactive Questions (F2/F3)

Before implementing, raise the 2-3 most relevant:
- **Data**: What happens to existing data? Will old records still work?
- **Failure**: What if this fails? Is there a fallback?
- **Dependencies**: What depends on this? What does this depend on?
- **Validation**: What prevents invalid input?
- **Edge cases**: Loops, nulls, empty states, max limits?

## Project Overview

designbrief is a library of 21 UI design direction files that serve as style guardrails for AI-generated interfaces. The styles are **guiding, not prescriptive** — they define aesthetic DNA, not pixel-perfect specifications. Distributed as an npm package and follows the [Agent Skills open standard](https://agentskills.io).

## Key Commands

```bash
npm pack --dry-run     # Verify package contents
npx designbrief          # Test CLI installer
```

## Repository Structure

```
designbrief/
├── styles/                    # The core product — 21 style definition files
│   ├── _index.md              # Catalog with mood/industry tags and recommendation matrix
│   └── {style-name}.md        # Individual style guardrails
├── bin/cli.js                 # CLI installer (npx designbrief)
├── SKILL.md                   # Agent Skills standard — skill definition (root)
├── AGENTS.md                  # Codex fallback instructions
├── STYLE-TEMPLATE.md          # Blank template for new styles
├── PASTE-INSTRUCTIONS.md      # Copy-paste instructions for Lovable/Bolt/v0
├── .cursor/rules/             # Cursor adapter
├── .windsurf/rules/           # Windsurf adapter
├── .github/workflows/         # GitHub Action for npm publish
├── docs/                      # Living documentation (session continuity)
├── package.json               # npm package metadata
├── CLAUDE.md                  # This file
├── README.md                  # Public-facing documentation
└── LICENSE                    # MIT
```

## Key Files

- `SKILL.md` — The Agent Skills standard skill definition (root level)
- `styles/_index.md` — Full catalog of all 21 styles with mood/industry tags
- `styles/{name}.md` — Individual style guardrail files
- `STYLE-TEMPLATE.md` — Blank template for creating new styles

## When Working on UI

1. Read `SKILL.md` for the full workflow
2. If the user specifies a style, read `styles/{name}.md`
3. If no style is specified, read `styles/_index.md` and help the user choose
4. Apply the style's guardrails to all UI code generation

## When Editing Style Files

- Every style follows the anatomy in `STYLE-TEMPLATE.md`
- Required sections: Non-Negotiables, Identity, Typography, Color, Spacing & Layout, Borders & Shadows, Components, Motion, Dark Mode, Responsive, Content & Voice, Icons, Accessibility, Do's/Don'ts, Implementation Hints, Reference Touchstones
- The Non-Negotiables section is critical — it defines the 3 things that MUST be present
- Update `styles/_index.md` whenever a style is added or removed
- Keep descriptions as guardrails (families, characteristics, ranges) not specifications (exact hex codes only)

## Multi-Tool Distribution

Adapter files exist for: Cursor (`.cursor/rules/`), Windsurf (`.windsurf/rules/`)
Paste instructions exist for: Lovable, Bolt.new, v0

## Architecture

See `docs/architecture.md` for system design, tech stack, and deployment details.

## Coding Conventions

See `docs/conventions.md` for language style, naming, testing, and commit conventions.

## Common Gotchas

