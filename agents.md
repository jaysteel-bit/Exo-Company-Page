# AGENTS.md — Exo Enterprise Website

Read this before touching any file in this repo. It tells you what exists, where things live, and how to work here without breaking anything.

---

## What This Repo Is

The marketing website for **Exo Enterprise** (`exoent.co`). Static HTML + Tailwind CDN + vanilla JS. No framework, no build step for HTML — just files served directly.

GitHub: `https://github.com/jaysteel-bit/Exo-Company-Page`

---

## Page Map

| File | URL | What It Is |
|------|-----|------------|
| `index.html` | `/` | Main homepage — brand narrative, hero, product overview |
| `x-scale.html` | `/x-scale` | X-Scale Program offer page (primary conversion page) |
| `flow.html` | `/flow` | Flow OS product deep-dive |
| `firm.html` | `/firm` | Exo as a firm — services overview |
| `steel.html` | `/steel` | Steel by Exo brand page |
| `value.html` | `/value` | Lead magnets / value vault |
| `careers.html` | `/careers` | Careers page |
| `thank-you.html` | `/thank-you` | Post-form confirmation |
| `not-ready.html` | — | Coming soon / waitlist placeholder |
| `privacy.html` | `/privacy` | Privacy policy |
| `terms.html` | `/terms` | Terms of service |
| `404.html` | — | 404 error page |

---

## Dev Setup

```bash
npm install
npm run dev
# Starts browser-sync on http://localhost:3000
# Live reloads on .html and js/*.js changes
```

No build step for HTML/CSS. Tailwind is loaded via CDN — no compilation needed.

---

## Tech Stack

| Layer | What |
|-------|------|
| Markup | Static HTML5 |
| Styling | Tailwind CSS (CDN) + inline `<style>` blocks per page |
| JS | Vanilla JS in `js/` folder + inline `<script>` blocks |
| Animations | GSAP (CDN) + CSS keyframes |
| Icons | Iconify (CDN) |
| Fonts | Google Fonts — Geist, Playfair Display, Inter |
| 3D | Spline (iframes) |
| Backend hooks | Convex (`convex/`) — form submissions, email capture |
| Email | Mailchimp (`@mailchimp/mailchimp_marketing`) |

**All CDN assets must remain absolute URLs. Never localize them.**

---

## Design System

**Language:** Liquid Glass UI — dark theme, glass-morphism surfaces, subtle gradients.

**Colors:** Dark neutrals (`neutral-950`, `neutral-900`, `neutral-800`), white text, muted accents.

**Glass panel pattern:**
```css
background: rgba(20, 20, 20, 0.4);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.08);
border-radius: 12px;
```

**Fade-up animation pattern:**
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-up { animation: fadeUp 0.8s ease-out forwards; }
```

**Rule:** Inline `<style>` blocks take precedence over Tailwind utilities. When editing a page, modify the inline styles — don't layer new Tailwind classes on top.

**Component specs live in:** `DOCUMENTATION/Design/`
- `ribbon-component.md` — ribbon/badge UI
- `shiny-cta.md` — CTA button with shine effect
- `Exo-shadow-text.md` — shadow text treatment
- `FOOTER-LOGO-TEMPLATE.md` — footer logo layout
- `struggle-text-box.md` — pain-point callout box
- `asset-image-protection.md` — image overlay/protection pattern

---

## Brand & Visual Identity

**Brand specs:** `DOCUMENTATION/Business/Brand/`
- `EXO-AI-Character-Spec.md` — the floating black obsidian orb (Exo AI mascot/narrator)
- `Department-Orb-Specs.md` — per-department orb visual identity
- `Characters/` — reference images for each orb character

**Exo AI orb anchor (use this whenever generating or describing the orb):**
> A perfectly smooth floating black obsidian orb. Mirror-grade gloss surface — jet black lacquer with maximum reflectivity. Grid-lattice highlight in the upper hemisphere — 4 to 6 curved segments, like cathedral window panes on a black pearl, reading dark silver-gray with deep black seams. Lower hemisphere near-pure black. Photorealistic.

---

## Company & Copy Context

**For any copy, messaging, or content work — read these first:**

| Source | What's In It |
|--------|-------------|
| `company-ssot/00-master.md` | One-paragraph company briefing, offer stack, known gaps |
| `company-ssot/01-mission.md` | Mission, origin, core belief |
| `company-ssot/03-brand.md` | Voice rules, language dos/don'ts |
| `company-ssot/06-product.md` | All 6 departments, product details |
| `company-ssot/12-brand-voice-detail.md` | 8 writing rules, approved/banned phrases |
| `company-ssot/13-sales-process-detail.md` | X-Scale offer detail, guarantee language |

**Copy rule — outcomes over mechanics:**
- Bad: "BOM-T enables AI-driven operational transfer via reflex agents."
- Good: "We build your AI department, run it until it's flawless, then hand you full ownership — 90 days, done."

Give the client the vacation, not the flight itinerary.

---

## Logos & Assets

`logos/` — All brand logos used in HTML. Use relative paths: `src="/logos/filename.png"`.

`assets/` — Other site assets (images, etc.).

Do not move or rename logo files without updating every HTML reference.

---

## Technical Notes

`DOCUMENTATION/Technical/` contains:
- `current-convex-info.md` — Convex backend setup, table structure, auth config
- `SOCIAL-MEDIA-ARCHIVE.md` — social handles and platform status

Check `current-convex-info.md` before touching any form submission or email capture logic.

---

## What's in Archive (Do Not Touch)

`DOCUMENTATION/Archive/` contains files moved out of active use:
- `NOTEPAD/` — old session dumps and agent prompts
- `VSL/` — video script production files
- `Strategy/` — superseded strategy docs (replaced by `company-ssot/`)
- `Marketing/` — SEO strategy doc (moved to agent-workspace)
- `generate_shot.py`, `make_character_sheets.py` — scripts (live in agent-workspace/scripts/)

If you need something from Archive, read it — but don't edit it and don't reference it as a source of truth.

---

## Git Workflow

Branch: `master`

Commit convention:
- `feat:` — new page section or feature
- `fix:` — bug fix
- `chore:` — cleanup, doc updates, non-functional changes

Always test locally before committing. Check that:
1. Page renders correctly in browser
2. Mobile layout isn't broken (resize to 375px)
3. All relative links resolve
4. No CDN assets were accidentally removed

---

## What NOT to Do

- Don't add a build step or bundler — this is intentionally static
- Don't create separate CSS files — styles belong inline per page
- Don't use absolute URLs for internal links — use relative paths (`/x-scale`, not `https://exoent.co/x-scale`)
- Don't reference files in `DOCUMENTATION/Archive/` as current sources of truth
- Don't publish pricing numbers — pricing is not finalized, use "custom" language only
- Don't change the Exo AI orb visual description without checking `EXO-AI-Character-Spec.md`
- Don't add new pages without updating the nav and this page map

## Conflict Resolution

- If you can't do something, say so.
- If you don't know something, say so.
- If conflicts arise between chat instructions and file contents, ask for clarification/direction.
- Ask for clarification when instructions are ambiguous.
- Never overwrite or delete files without explicit user approval.