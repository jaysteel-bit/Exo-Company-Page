---
created: 2026-05-11
purpose: Reference for what belongs in EXO-HTML vs. agent-workspace. Use this when cleaning up the repo or deciding where new files should live.
---

# EXO-HTML — What Belongs Here vs. What Doesn't

## Rule of Thumb

**EXO-HTML is a website project.** It should contain things an agent or developer needs to work on the website — HTML, styles, scripts, brand assets used in the site, and context docs that inform website decisions.

**agent-workspace is the business ops layer.** Anything that is purely about running the company, producing content, or orchestrating agents — and has no direct website use — belongs there, not here.

---

## Shouldn't Be Here (No Website Use)

| Path | Why It Doesn't Belong |
|------|----------------------|
| `DOCUMENTATION/NOTEPAD/` | Session dumps, agent prompts, VSL roadmap — pure ops/agent context, zero website relevance |
| `DOCUMENTATION/VSL/` | Video production scripts and scene prompts — not website files |
| `DOCUMENTATION/Business/Strategy/` | Superseded strategy docs (LTT v2.2.0, old PRD) — replaced by company-ssot |
| `DOCUMENTATION/Business/Archive/` | Old archived business docs — no current use anywhere |
| `DOCUMENTATION/Business/Marketing/SEO.md` | SEO strategy doc — belongs in agent-workspace marketing dept |
| `generate_shot.py` | Airtable image gen script — not a website tool |
| `make_character_sheets.py` | Character sheet gen script — not a website tool |
| `DOCUMENTATION/NOTEPAD/extra-notes.md` | Personal notes — Obsidian vault is the right home |
| `Design.md` (root) | Design spec written for agents — more useful in agent-workspace; keep a copy here only if website agents actively reference it |

---

## Stays Here — Website Use (Keep in Both If Needed)

| Path | Why It Belongs |
|------|---------------|
| All `.html`, `.css`, `.js`, `tailwind.config.js` etc. | The actual website |
| `DOCUMENTATION/Technical/` | Technical specs for the website build |
| `DOCUMENTATION/Design/` | Visual design specs — directly informs website styling |
| `DOCUMENTATION/CLAUDE.md` | Instructions for agents working on THIS codebase |
| `DOCUMENTATION/Business/Brand/` | Brand specs, orb character images — referenced in website visuals and copy |
| `logos/` | Used directly in website HTML |
| `company-ssot/` | Agents working on the site need company context to write accurate copy |
| `HTML-HANDOFF.md` | Website-specific session handoff — stays here, not in agent-workspace |
| `TESTIMONIALS_AUDIT.md` | Testimonials are on the website — relevant context |
| `package.json`, `package-lock.json` | Website build tooling |

---

## Dual-Use Files (Legitimate in Both Places)

These exist in both EXO-HTML and agent-workspace intentionally — each copy serves a different context.

| File | EXO-HTML Use | agent-workspace Use |
|------|-------------|-------------------|
| `company-ssot/` | Context for website agents writing copy | Canonical business knowledge base |
| `DOCUMENTATION/Business/Brand/` | Visual reference for website design | Brand specs for content + delivery agents |
| `logos/` | Rendered in website HTML | Brand assets for decks, docs, content |
| `Design.md` | Website design reference | Agent design context |

---

## Clean-Up To-Do (When There's Time)

- [ ] Move `DOCUMENTATION/NOTEPAD/` contents to agent-workspace only (already synced — can delete from here)
- [ ] Move `DOCUMENTATION/VSL/` to agent-workspace only (already synced — can delete from here)
- [ ] Delete `DOCUMENTATION/Business/Strategy/` (superseded — archived in company-ssot)
- [ ] Delete `DOCUMENTATION/Business/Archive/` (old, no current use)
- [ ] Move `generate_shot.py` and `make_character_sheets.py` to agent-workspace/scripts only (already done)
- [ ] Decide if `Design.md` at root stays or moves — currently useful in both
