---
last_updated: 2026-05-08
staleness: high
incomplete_sections: ["exact ad spend / ROAS data", "email sequence content", "organic content channels and cadence"]
---

# Lead Acquisition

## Primary Channels (Active)

### 1. Meta / Facebook Paid Ads
- Meta Pixel installed on all pages (ID: 1715251733215249)
- Conversion events tracked (PageView confirmed; likely lead and purchase events also set up)
- Presumed target audience: founders/operators, business owners, consistent with ICP ($2M–$50M ARR)
- Ad creative direction: not documented yet; presumed to drive traffic to value.html or x-scale.html

### 2. Lead Magnet — Exo Vault (value.html)
The primary top-of-funnel asset. Visitors trade email for free resources:
- **The EXO Scaling Roadmap** (flagship, "Founder's Favorite," featured first in the rotating deck)
- Department Workflow Maps — visual workflows for every department
- AI-Era Role Templates — job descriptions built for the AI era
- Ops Bottleneck Audit (Self-Serve) — self-assessment tool
- New resources added weekly (videos, eBooks, guides, templates)

65+ teams have accessed the Vault (social proof number displayed on form).

**Form capture:** Full name, work email, company name, team size, annual revenue. Session data is then carried forward to x-scale.html if the user clicks through.

**Email notification:** After opt-in, a success banner appears: "ACCESS GRANTED. CHECK YOUR EMAIL FOR THE GIFT IN A MOMENT." Suggests email automation delivers the resource.

### 3. Announcement Bar (Persistent Across All Pages)
Every page carries a sticky announcement bar driving to x-scale.html:
- "Slots Open This Month: Transform Your Business" (links to x-scale.html)
- "8 Spots Open This Month | Apply Now" (nav CTA button)

This creates a persistent micro-CTA throughout the site for any visitor who is already in-funnel.

## Analytics & Tracking

- **PostHog** (phc_N1Clw6iwKeyIqhNrxd1cejjCuvKXPtW17bn9h6ZUw9b) — behavioral analytics, session recording, feature flags
- **Meta Pixel** — ad conversion tracking
- Likely ConvertKit, Mailchimp, or similar for email delivery (not confirmed from codebase)
- Convex backend (convex/ directory exists) — likely handles form submissions and lead data storage

## The Funnel Flow (exoent.co website)

```
Paid Ad / Organic Content
        ↓
Exo Vault (value.html) — Lead Magnet Opt-In
        ↓
Email delivery of free resource
        ↓
Redirect / CTA to X-Scale Application (x-scale.html) + VSL
        ↓
Application Form with Qualifying Questions
        ↓
Calendar Booking Page (15-min Discovery Call) + 2nd VSL
        ↓
Admission Decision (Lead Quality Score) 
        ↓
Onboarding / Welcome Kit Delivery / Engagement Start
```

## Lead Magnet Nurture Path

After opt-in, the presumed nurture sequence:
1. Immediate email with promised resource
2. Educational content about operational sovereignty and AI departments
3. Case study / proof content (testimonials)
4. Soft CTA to book a call or apply
5. Hard CTA with scarcity (limited spots)

The newsletter checkbox on value.html ("Send me free value updates on AI + Scaling. Low frequency, HIGH value") suggests an ongoing educational list — likely Jay Steel's voice, outcome-focused.

## Secondary / Emerging Channels

- **Steel waitlist** (steel.html) — captures B2C email list for future Steel launch; Q3 2026 timeline stated on the page. First 10K members target.
- **Organic / social** — not confirmed from codebase; likely supplemented by LinkedIn and/or Twitter given the founder/operator audience
- **Word of mouth / referral** — testimonials mention being referred ("Was referred to the Vault by a friend of mine") suggesting referral is an organic channel
- **AI Search / AEO** — explicitly strategized in SEO.md; optimizing for Google AI Overviews, ChatGPT, Perplexity; schema markup planned but not yet fully implemented

## Planned / Future Channels (from SEO.md)

- JSON-LD schema (Organization, SoftwareApplication, FAQPage) — not yet implemented, high priority
- llms.txt file (AI sitemap for LLM search crawlers) — planned
- Blog / resource hub for thought leadership
- Email marketing automation integration

## Key Acquisition Metrics (from site copy)
- 65+ teams in the Vault (as of copy date)
- 8 partner slots per month (stated capacity)
- < 10% application acceptance rate
