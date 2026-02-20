# Current Status

> Last Updated: 2026-02-20
> Health: YELLOW

## What Works

- 21 style files with full 16-section anatomy (Non-Negotiables through Reference Touchstones)
- Freeform style — meta-guardrails for personal expression (21st style)
- Style catalog (_index.md) with mood/industry tags, dark mode, accessibility, responsive, density metadata
- CLI installer (bin/cli.js) — auto-detects tool, supports Claude Code, Cursor, Windsurf, Copilot, Codex
- GitHub Action for automated npm publishing (.github/workflows/publish.yml)
- Agent Skills standard compliance (SKILL.md)
- Cursor adapter (.cursor/rules/designbrief.mdc)
- Windsurf adapter (.windsurf/rules/designbrief.md)
- Paste instructions for Lovable, Bolt.new, v0
- Live showcase at https://tools.heiberg.co/designbrief

## What's Blocked

| Blocker | Depends On | Impact |
|---------|-----------|--------|
| npm publishing | Package name decision (TBD in package.json) | Can't distribute via npm |
| Package naming | Resolution of ibelick/designbrief conflict | Blocks npm, skills.sh, skild.sh |

## Technical Debt

None tracked.

## Known Issues

- package.json `name` field is "TBD" — must be resolved before npm publish
