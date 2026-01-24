# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Exo Enterprise** is an AI-native firm building autonomous departments via **Flow OS**. This repository contains the marketing website for the Exo Enterprise brand ecosystem, built with static HTML, Tailwind CSS, and CDN-hosted assets (Spline for 3D backgrounds, Iconify for icons, GSAP for animations).

**Current Architecture:**
- **exoent.co**: Main brand home and holding company site
- **Flow OS**: Flagship product living as a subdirectory (exoent.co/flow-os) — NOT a separate domain yet
- **Products**: Flow OS, Deal OS, Exo Academy, Launch, AURA, Steel (future standalone brand), APM/Foundry
- **Steel**: Consumer/membership B2C spinout (steelbyexo.com for later; currently under exoent.co/steel)

**Design System:**
- **Liquid Glass UI**: Primary design language with glass-morphism effects
- **Fonts**: Geist (sans-serif), Playfair Display (serif accents), Inter, Roboto, Montserrat
- **Colors**: Dark theme (neutrals, blacks) with subtle gradients
- **UI Components**: Glass panels (backdrop-filter blur), fade animations, responsive Tailwind classes

## File Structure

**Root HTML Files:**
- `index.html`: Main Exo Enterprise homepage and brand narrative
- `flow.html`: Flow OS deep-dive page (product/services overview)
- `firm.html`: Exo AI Engine / Advanced Customer Intelligence page
- `Exo Flow OS Website/`: (Currently a git directory; may contain legacy or in-progress content)
- `logos/`: Brand assets and visual identity files

**Documentation:**
- `EXO-ENTERPRISE-MASTER-PRD-SSOT.md`: Single source of truth for all product specs, architecture, personas, and business model (88KB, very comprehensive)
- `SEO.md`: Domain strategy, site structure, and AI search optimization (AEO) guidance
- `.gitignore`: Git exclusion rules

## Development Setup & Commands

**No build process**: This is a static HTML site with CDN dependencies. To develop locally:

```bash
# Open any HTML file in a browser (or use a local server)
python3 -m http.server 8000
# Then visit http://localhost:8000
```

**Deployment**:
- Push changes to the `main` branch (git status shows it's active)
- No build step required; HTML is served directly
- CDN assets (Tailwind, Iconify, GSAP, Google Fonts) are loaded from external sources

## Architecture & Key Patterns

### Tailwind + Inline Styles

All pages use **Tailwind CDN** (`<script src="https://cdn.tailwindcss.com"></script>`) for utility-first styling. Custom CSS is written inline in `<style>` tags within each HTML file. Key custom patterns:

```html
<style>
  :root {
    --font-sans: 'Geist', 'Inter', sans-serif;
    --font-serif: 'Playfair Display', serif;
  }

  /* Glass effect core pattern */
  .glass-panel {
    background: rgba(20, 20, 20, 0.4);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  /* Animation pattern */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-up { animation: fadeUp 0.8s ease-out forwards; }
</style>
```

**Inline animations and styles override Tailwind defaults**. Prefer modifying inline `<style>` blocks over adding new Tailwind classes.

### External Assets & CDN Dependencies

| Asset | CDN | Purpose |
|-------|-----|---------|
| Tailwind CSS | `cdn.tailwindcss.com` | Utility styling framework |
| Iconify | `code.iconify.design` | Icon library (iconify-icon web component) |
| GSAP | `cdnjs.cloudflare.com/ajax/libs/gsap` | Animation library (for scroll/timeline effects) |
| Google Fonts | `fonts.googleapis.com` | Geist, Playfair, Inter, Roboto, Montserrat |
| Spline 3D | `my.spline.design` | Embedded 3D background scenes (via iframe) |

**Important**: No local bundling or npm; all assets loaded via CDN. Links must be absolute and remain public.

### Persistent Elements & Reusable Patterns

**Announcement Bar**: Persistent across pages (integration mentioned in recent commit "persistent announcement bar integration"). Check for `<div class="announcement">` or similar patterns in the `<body>` or `<nav>` sections.

**Navigation Structure**: Fixed header with logo, nav links, and CTA. Pattern:
```html
<nav class="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-xl">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Logo, nav items, CTA -->
  </div>
</nav>
```

**Hero Sections**: Large, full-width banner with background (Spline 3D), headline, subheadline, and CTA button. Uses `.animate-fade-up` for entrance animations.

### URL & Link Strategy

**Domain structure** (per SEO.md):
- **Relative links** are mandatory: Use `href="/flow-os"`, `href="/departments"`, `href="/services"` (NOT `exoent.co/flow-os`)
- **Subdomains avoid** for now (separate SEO authority; only use post-PMF if needed)
- **No exoflowos.com or Steel separate sites yet**; redirect those to main exoent.co sections when ready
- **llms.txt** file support (AI sitemap) should be added to root for ChatGPT/Perplexity/AI search visibility

**Link naming conventions** (from SEO.md):
- `/flow-os`: Flow OS product page
- `/departments`: Namespace/department listing (Deal OS, Launch, Academy, AURA)
- `/services` or `/bom-t`: BOM-T (Build → Operate → Manage/Transfer) services page
- `/steel`: Steel consumer brand (future standalone)

### Schema & SEO Optimizations

Per SEO.md, high-priority JSON-LD schema includes:
- **Organization** (company info, logo, social links)
- **SoftwareApplication** (Flow OS as a product)
- **FAQPage** (Q&A markup for AI search visibility)
- **Service** (BOM-T services breakdown)
- **AboutPage** (team/mission)

Example insertion point:
```html
<head>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Exo Enterprise",
    "url": "https://exoent.co",
    "logo": "https://exoent.co/logo.png"
  }
  </script>
</head>
```

**Not yet implemented**: Rich Results testing via Google Search Console. When modifying schema, test with [Google's Rich Results Tool](https://search.google.com/test/rich-results).

## Content & Messaging Guidelines

**From EXO-ENTERPRISE-MASTER-PRD-SSOT.md & SEO.md:**

### Core Narrative Hierarchy

1. **Exo Enterprise**: AI-native firm / holding company; parent brand
2. **Flow OS**: Operating system for autonomous departments (core product)
3. **Namespaces**: Modular departments (Deal OS, Launch, Academy, AURA, Steel)
4. **BOM-T**: Service delivery model (Build → Operate → Manage/Transfer)

### Copy Philosophy

**Avoid jargon; focus on value/outcomes.** Per SEO.md:
> "The customer wants to feel the value of the process, not the jargon. We give them the vacation, not the plane flight process."

- **Bad**: "BOM-T enables diffs via reflex agents and regret graph optimization."
- **Good**: "We build your AI department in 30 days, run it for 90 days, then hand it to you fully trained. 20 hours/week saved or your money back."

**Key differentiators for copy:**
- Clone best processes (diffs, whys)
- Reflex agents (autonomous decision-making)
- Regret graph (error recovery)
- BOM-T guarantees (30-day efficiency lift, 90-day handoff)
- Early-stage, high-touch service model

### Target Personas (ICP)

- **Agency CEOs** (2-50M ARR): ops bottlenecks, scaling pain
- **Operations Directors**: manual task overload, tool proliferation
- **Lean teams**: need force multiplier, not another software purchase

**Early-stage message**: High-touch service + eventual SaaS/platform evolution (post-PMF).

## Common Development Tasks

### Editing Page Content

1. **Find the page**: `index.html` (home), `flow.html` (Flow OS), `firm.html` (Firm/EXA)
2. **Locate section**: Search for heading or landmark (e.g., `<h1>`, `<!-- Hero -->`, `<!-- Services -->`)
3. **Edit HTML + inline styles** in one file; no separate CSS files
4. **Test locally**: Open in browser or use `python3 -m http.server 8000`

### Adding New Sections

**Pattern** (glass panel with animation):
```html
<section class="py-16 px-4">
  <div class="max-w-6xl mx-auto">
    <div class="glass-panel p-8 rounded-lg animate-fade-up">
      <h2 class="text-3xl font-bold font-serif mb-4">Section Title</h2>
      <p class="text-neutral-400">Content here...</p>
    </div>
  </div>
</section>
```

### Updating Brand Assets or Logos

- Place in `logos/` directory
- Update references in HTML files to use relative paths (e.g., `src="/logos/exo-logo.png"`)
- Ensure image is optimized for web (compress PNGs/JPGs)

### Adding Animations (GSAP)

GSAP is loaded globally. Example pattern from existing code:
```html
<script>
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".element-selector", {
    scrollTrigger: {
      trigger: ".element-selector",
      start: "top center",
      markers: false
    },
    duration: 1,
    opacity: 1,
    y: 0
  });
</script>
```

## Testing & QA

**Manual testing** (no automated tests for static HTML):
1. Open each page in browser (or local server)
2. Test responsive design: resize window, check mobile/tablet/desktop
3. Verify all links work (relative paths)
4. Check animations load smoothly (no lag)
5. Validate schema in [Google Rich Results Tool](https://search.google.com/test/rich-results)

**Browser compatibility**: Target modern browsers (Chrome, Firefox, Safari, Edge). Tailwind + CSS Grid/Flexbox cover 95%+ of users.

## Git Workflow

**Current status**:
- Active branch: `main`
- Main branch for PRs: `master`
- Recent commits focus on hero restructuring, announcement bar, and site cleanup

**Commit convention** (inferred from history):
- `feat: ...` for new features/sections
- `Refactor: ...` for cleanup, restructuring
- Descriptive messages indicating what changed

**Before committing**:
1. Test locally (open HTML in browser)
2. Ensure all external links/CDN assets still load
3. Check that relative links are correct
4. Stage and commit specific files (not entire repo)

## Future Considerations (Post-PMF)

- **Separate Flow OS site** (exoflowos.com) — only after product reaches proof-of-market fit
- **Steel standalone brand** (steelbyexo.com with full design system)
- **API documentation site** — if/when offering API
- **Blog/Resource Hub** — for thought leadership, AI search visibility
- **Email/marketing automation integration** — beyond static HTML
- **CMS option** — if content velocity increases beyond manual HTML edits

**Do not implement** until explicitly requested; current static approach is appropriate for early-stage brand positioning.

## Key Files for Reference

| File | Purpose |
|------|---------|
| `EXO-ENTERPRISE-MASTER-PRD-SSOT.md` | Complete product specs, personas, business model, technical architecture |
| `SEO.md` | Domain strategy, AI search optimization, schema markup guidance, brand narrative |
| `index.html` | Main homepage and Exo brand narrative |
| `flow.html` | Flow OS product page (deep dive) |
| `firm.html` | Firm/EXA page (Advanced Customer Intelligence) |
| `.gitignore` | Git exclusion rules |
| `logos/` | Brand assets |

## AI Search Optimization (AEO) Reminders

Per SEO.md, prioritize AI visibility (Google AI Overviews, ChatGPT, Perplexity):

1. **Schema markup first**: JSON-LD Organization, SoftwareApplication, FAQPage, Service
2. **Scannable content**: H1-H3 hierarchy, short paragraphs (<3 sentences), bullet lists
3. **Entity-rich text**: Use key terms naturally (Flow OS, reflex agents, BOM-T, Exo Enterprise)
4. **llms.txt**: Add AI sitemap to root (not yet done)
5. **Fast Core Web Vitals**: No JS bloat, mobile-first design

**Test frequently** in Rich Results Tool as you update schema.

*User's note: Copywriting is key. Also, Ensure not to simply say BOM/T is a thing we use to get the job done. Yet, instead we can make sure to highlight the BOM/T aspect as a key differentiator. While focusing on what the client will get as a result of going through the process rather than the jargon of BOM/T. The customer wants to feel the value of the process. Not the jargon. For example, we give the the vaction not the plane flight process and the checked bags and the security checkpoint at the airport. But we give them the beach/rome experience type of copy.*