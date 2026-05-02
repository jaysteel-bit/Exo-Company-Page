Quick Notes:

- Links should be relative to the current page
---

You should treat **Exo Enterprise as the master brand on exoent.co, and Flow OS as the flagship product living as a subdirectory on that same domain, while parking exoflowos.com for later use.** Steel should be treated as a future, separate-but-related brand once it is closer to launch.

## Domain & architecture strategy

- Make **exoent.co** your primary domain and brand home: it matches the “holding company + AI department-in-a-box” thesis and can eventually house Flow OS, Deal OS, Academy, Launch, and Steel in one ecosystem.
- Put **Flow OS** at exoent.co/flow-os (and related pages like /flow-os/bom-t, /flow-os/academy, etc.) instead of a subdomain or standalone site for now, so all authority, backlinks, and content build the same root domain.
- Keep **exoflowos.com** registered but redirect it (301) to exoent.co/flow-os once the page is live; later, if Flow OS becomes large enough to justify its own marketing site, you can reverse this and make exoflowos.com the primary, with exoent.co linking as the parent company.

## Why not subdomain or separate Flow OS site yet

- Flow OS is still in **very early stage** with unproven ICP and no fully built product, so splitting domains now would slow down SEO and brand clarity without giving you a real benefit.
- Subdomains behave like separate sites from an SEO standpoint (separate crawling, separate authority), which means you would be diluting the compounding effect of case studies, content, and backlinks while you are still fighting for first proof points.

### Subdirectory vs subdomain vs own site

| Option | What it looks like | Pros | Cons | Best fit now? |
| --- | --- | --- | --- | --- |
| Subdirectory | exoent.co/flow-os | Shares authority with main site; simplest storytelling of “Exo → Flow OS → namespaces” | Less “standalone product” feel early on | **Yes** |
| Subdomain | flowos.exoent.co | Slight separation, can theme differently | Separate SEO property, more overhead while pre-PMF | No |
| Separate | exoflowos.com | Strong product identity, easy later if Flow OS is huge | Splits all early energy, content, and links across domains | Later, post-PMF |

## How to structure the exoent.co site

For the current **exoent.co home page** (the tab you are editing), assume this as the core narrative:

- **Home / Overview** (exoent.co): Exo Enterprise as “AI-native firm that builds and runs autonomous departments via Flow OS (department-in-a-box).”
- **Solutions / Flow OS** (exoent.co/flow-os): Can be a deep dive on Flow OS concept: diffs, reflex agents, regret graph, BOM/T delivery, and the “AI department store” framing. Without getting technical; infact remove the technical jargon and focus on the value proposition/end results. -- *I know you want to use better copy, so we must keep that in mind. Ensure not to simply say BOM/T is a thing.Yet, instead we can make sure to highlight the BOM/T aspect as a key differentiator. While focusing on what the client will get as a result of going through the process rather than the jargon of BOM/T. The customer wants to feel the value of the process. Not the jargon. For example, we give the the vaction not the plane flight process and the checked bags and the security checkpoint at the airport. But we give them the beach/rome experience type of copy.*
- **Namespaces / Departments** (exoent.co/departments): Lightweight subpages for Deal OS, Exo Launch, Exo Academy, HR/AURA, etc., even if some are “coming soon,” so you can show the modular ecosystem.
- **Services / BOM-T** (exoent.co/services or /bom-t): Explain Build → Operate → Manage/Transfer with timelines, guarantees, and example workflows. -- *Remeber vaction type of copy not the plane flight process.* 
- **Steel (future)** (exoent.co/steel): Simple “under development” landing that anchors Steel as a B2C subsidiary that will later expand into its own brand/domains.

Keep the **visual look** coherent between home and Flow OS (same design system, same brand language) so it feels like one organism, not separate companies.

## Handling Steel (steelglobal.us / steelbyexo.com)

- In your thesis, **Steel by Exo** is explicitly framed as a membership / B2C ecosystem and “separate company feel,” but still powered by Flow OS under the hood. 
- Until you are closer to a Steel MVP, keep Steel as a **section under Exo** (exoent.co/steel or a short “coming soon” page) and **do not** spend energy building full separate sites on steelglobal.us or steelbyexo.com yet. 
- When Steel is ready to stand alone (community, app, physical cards), then:  
  - Make **steelbyexo.com** the hero consumer-facing brand.  
  - Keep a tight “Powered by Exo / Flow OS” line and cross-link between exoent.co and Steel so you benefit from shared authority and story. 

## Navigation & branding choices

- In the **exoent.co nav**, treat Flow OS as the central product: e.g., “Flow OS,” “Departments,” “Services,” “Resources,” “About.” 
- Use the **Flow OS page** as the “hero sales page” that the nav button points to; exoflowos.com simply routes there in the background while you’re early. 
- Make sure the narrative hierarchy is clear across pages:  
  - Exo Enterprise = company / partner  
  - Flow OS = operating system / platform  
  - Namespaces (Deal OS, Launch, Academy) = departments inside the OS  
  - Steel = consumer spin-out built on the same primitives

If you want, next step can be a very concrete sitemap plus example hero copy blocks tailored to the exoent.co home and /flow-os page so you can align the design you are editing to this structure.
---

Yes, prioritize **AI search visibility** (Google AI Overviews, ChatGPT, Perplexity) over traditional SEO—it's the future for quick wins. [bluecompass](https://www.bluecompass.com/blog/best-practices-to-optimize-your-website-for-googles-sge)

## Core optimizations

- **Structured data (schema markup):** Add JSON-LD for Organization, SoftwareApplication (for Flow OS), FAQPage, Services, AboutPage. This boosts AI extraction 3-5x and gets you cited in overviews. [blog.applabx](https://blog.applabx.com/how-to-optimize-your-content-for-google-ai-overviews-sge-with-geo-principles/)
- **Semantic, scannable content:** Short paragraphs (under 3 sentences), H1-H3 hierarchy, bullet lists, tables for comparisons (e.g., BOM/T phases). Answer queries directly upfront. [vercel](https://vercel.com/blog/how-were-adapting-seo-for-llms-and-ai-search)
- **Entity-rich text:** Name-drop key concepts (Flow OS, reflex agents, regret graph, Exo Enterprise) naturally; use LSI like "AI department automation." [reddit](https://www.reddit.com/r/TechSEO/comments/1mvcbc4/is_anyone_here_optimizing_for_aifirst_search_like/)

## Page-specific tweaks

- **Header:** <script type="application/ld+json"> with schema for your company/product. [searchengineland](https://searchengineland.com/schema-ai-overviews-structured-data-visibility-462353)
- **Hero/services:** Start with 1-2 sentence query answers: "Flow OS is Exo Enterprise's AI operating system for building autonomous departments via BOM/T." [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/collection_de5a16db-7408-4754-8dc1-b616d79f92fe/49c0e389-7ed6-4b5c-abf9-9b706058aa50/Exo_Enterprise_Flow_OS_Overview_SUMMARY.MD)
- **Footer:** Add llms.txt file (AI sitemap) and submit to Google Search Console/Bing Webmaster Tools. [roya](https://www.roya.com/blog/this-is-exactly-how-to-rank-your-website-on-chatgpt-and-other-llms.html)

## Quick checklist

| Priority | Action | Why it works |
| --- | --- | --- |
| High | Schema JSON-LD | AI prefers extractable data; tests show 1+ schema = AI Overview edge  [searchengineland](https://searchengineland.com/schema-ai-overviews-structured-data-visibility-462353) |
| High | Clear headings/lists | LLMs summarize scannable pages  [blog.applabx](https://blog.applabx.com/how-to-optimize-your-content-for-google-ai-overviews-sge-with-geo-principles/) |
| Med | Fast Core Web Vitals | Mobile-first, no JS bloat  [bluecompass](https://www.bluecompass.com/blog/best-practices-to-optimize-your-website-for-googles-sge) |
| Med | Brand mentions elsewhere | Reddit/Quora/UGC feeds LLMs  [reddit](https://www.reddit.com/r/TechSEO/comments/1mvcbc4/is_anyone_here_optimizing_for_aifirst_search_like/) |

Implement schema first—test with Google's Rich Results Tool. You'll appear in AI drops fast. [searchengineland](https://searchengineland.com/schema-ai-overviews-structured-data-visibility-462353)

---


The HubSpot Loop Marketing Prompt Library (100+ engineered prompts across Express, Tailor, Amplify, Evolve stages) is perfect for your Exo/Flow OS site—use it to generate **AI-optimized copy, messaging, and sections** that rank in AI overviews while aligning with your BOM/T services. [offers.hubspot](https://offers.hubspot.com/view/loop-marketing-prompts)

## Tailored prompt usage for your site

Adapt 4 key stages to your **early-stage AI department-building** narrative (Flow OS as core product, Exo as hold-co/services). Paste these into Grok/Claude/ChatGPT: [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/collection_de5a16db-7408-4754-8dc1-b616d79f92fe/49c0e389-7ed6-4b5c-abf9-9b706058aa50/Exo_Enterprise_Flow_OS_Overview_SUMMARY.MD)

### Express stage (Brand positioning)
Use for **hero copy, homepage, about**—clarify Exo as "AI-native firm building autonomous departments." [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/collection_de5a16db-7408-4754-8dc1-b616d79f92fe/49c0e389-7ed6-4b5c-abf9-9b706058aa50/Exo_Enterprise_Flow_OS_Overview_SUMMARY.MD)

**Adapted prompt:**  
```
# ROLE You are a brand strategist specializing in AI transformation firms.  
# CONTEXT Exo Enterprise builds AI departments-in-a-box via Flow OS (diffs, reflex agents, BOM/T delivery). Target: Agencies/SaaS (2-50M ARR). Differentiator: Clone best processes, run department, transfer ownership. Early-stage, high-touch.  
Generate: Hero headline/subheadline, messaging hierarchy, value prop optimizer, thought leadership positioner for exoent.co homepage.
```
**Expected output:** "Clone your best people into AI departments. We build, run, transfer—own the transformation forever." [offers.hubspot](https://offers.hubspot.com/view/loop-marketing-prompts)

### Tailor stage (Personalization)
Use for **services/BOM/T pages, personas**—personalize for ICP pains (tool chaos, scaling). [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/collection_de5a16db-7408-4754-8dc1-b616d79f92fe/49c0e389-7ed6-4b5c-abf9-9b706058aa50/Exo_Enterprise_Flow_OS_Overview_SUMMARY.MD)

**Adapted prompt:**  
```
# ROLE You are a customer journey strategist for AI ops platforms.  
# CONTEXT Personas: Agency CEO (ops bottlenecks), Ops Director (manual tasks). Objections: "Another tool?" Solution: BOM/T guarantees 30% efficiency in 30 days.  
Generate: Objection handler, persona journey customizer, hyper-personalization for /services page.
```
**Output example:** Bullet for CEOs: "We stop the bleeding in 30 days—or refund 50%." [offers.hubspot](https://offers.hubspot.com/view/loop-marketing-prompts)

### Amplify stage (Distribution)
Use for **AI SEO, blog, CTAs**—optimize for "AI department automation" queries. [blog.applabx](https://blog.applabx.com/how-to-optimize-your-content-for-google-ai-overviews-sge-with-geo-principles/)

**Adapted prompt:**  
```
# ROLE You are an AI search optimization strategist (AEO).  
# CONTEXT Keywords: Flow OS, AI department-in-a-box, BOM/T AI ops. Site: exoent.co/flow-os.  
Generate: AI search visibility optimizer, thought leadership amplification, content theme generator for /flow-os page.
```
**Output:** Schema-ready FAQ: "What is Flow OS? Unified AI OS cloning your ops via diffs/whys." [searchengineland](https://searchengineland.com/schema-ai-overviews-structured-data-visibility-462353)

### Evolve stage (Optimization)
Use for **pricing, testimonials, roadmap**—forecast ROI, iterate messaging. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/collection_de5a16db-7408-4754-8dc1-b616d79f92fe/49c0e389-7ed6-4b5c-abf9-9b706058aa50/Exo_Enterprise_Flow_OS_Overview_SUMMARY.MD)

**Adapted prompt:**  
```
# ROLE You are a predictive marketing analyst for SaaS/services hybrids.  
# CONTEXT Metrics: 20-40% efficiency lift, 90-day transfer. Model: BOM/T → SaaS.  
Generate: ROI calculator copy, predictive performance modeler, continuous optimization report for /pricing.
```
**Output:** "30-day guarantee: 20 hrs/week saved, or pay nothing." [offers.hubspot](https://offers.hubspot.com/view/loop-marketing-prompts)

## Implementation plan

| Stage | Site sections | # Prompts to run | Time |
| --- | --- | --- | --- |
| Express | Hero, about, value prop | 5-7 | 30 min |
| Tailor | Services, personas, objections | 8-10 | 45 min |
| Amplify | Blog/FAQ, CTAs, schema | 6-8 | 30 min |
| Evolve | Pricing, metrics, roadmap | 4-6 | 20 min |

Run prompts → Paste outputs → Add schema → Test in Google Rich Results Tool. This generates 80% of your copy, AI-search ready. [searchengineland](https://searchengineland.com/schema-ai-overviews-structured-data-visibility-462353)


---
**Loop Marketing Prompt Library** - [Link](https://offers.hubspot.com/view/loop-marketing-prompts?utm_campaign=21092760-Global%20%7C%20Loop%20Marketing%20Prompt%20Library&utm_medium=email&utm_content=378092508&utm_source=hs_email)  

100 prompts for AEO