---
last_updated: 2026-05-11
staleness: low
status: living document — update as delivery evolves
incomplete_sections: ["exo-ai.co technical build spec", "per-namespace delivery variations"]
---

# Exo Delivery OS

## What This Document Is

This is the operating manual for how Exo Enterprise delivers the X-Scale Department Program end-to-end. It covers every stage of delivery, who owns each stage, what AI does vs. what humans do, every deliverable and what it contains, the Exo Concierge and Exo Care distinction, the post-transfer monetization model, and the Exo Delivery Portal (exo-ai.co) that serves as the client-facing home for all of it.

If you are handed this document, you have everything needed to understand and run Exo's delivery operation.

---

## The Core Delivery Model: BOM-T

Exo uses a structured three-phase methodology on every engagement:

| Phase | Name | Who Owns It | Duration | What Happens |
|-------|------|-------------|----------|--------------|
| B | Build | Architects | Weeks 1–4 | Diagnose operations, map workflows, blueprint the department |
| O | Operate | Engineers | Weeks 4–8 | Install Flow OS, deploy AI agents, automate the department |
| T | Transfer | Conductors | Weeks 8–12 | Train the client's team, write SOPs, deliver Sovereignty Packet |

The end result: the client owns a fully operational AI department with zero vendor lock-in.

---

## Internal Roles

Every person on an Exo engagement operates across one or more of three function types. All carry the designation *Extraordinaire*.

| Role | Primary Phase | Function |
|------|---------------|----------|
| **Architect** | Build | Diagnoses operational chaos, maps current-state workflows, designs the department blueprint |
| **Engineer** | Operate | Installs Flow OS, deploys and tunes AI agents, builds automations, connects integrations |
| **Conductor** | Transfer | Co-runs the department with the client's team, certifies through Exo Academy, writes SOPs, delivers the Sovereignty Packet |

On smaller engagements, one person may carry two roles. On full X-Scale programs, these are distinct team members.

---

## Stage-by-Stage Delivery: Full Breakdown

---

### Stage 0 — Qualification & Intake
**Owner:** Sales / Concierge Lead

**Trigger:** Application submitted via x-scale.html

| Layer | What Happens | Output |
|-------|-------------|--------|
| AI | Scores lead against ICP criteria (revenue, team size, pain signals), flags hard disqualifiers, summarizes application into a pre-call brief | Scored lead + pre-call brief |
| Human | Reviews score, approves or declines, books discovery call | Qualified prospect |
| AI | Transcribes discovery call, extracts pain themes and qualifying signals, drafts preliminary proposal structure | Call summary + proposal draft skeleton |
| Human | Adds pricing, scopes departments, sends proposal | Signed contract |

**What triggers Stage 1:** Contract signed + onboarding sequence fires (automated). Client receives welcome package with portal access link (exo-ai.co/[their-slug]) and onboarding questionnaire.

---

### Stage 1 — BUILD (Weeks 1–4)
**Owner:** Architects

**Goal:** Understand the client's current operational state completely. Design the department blueprint before anything is built.

| Activity | AI Does | Human Does | Deliverable |
|----------|---------|-----------|-------------|
| Operational Audit sessions (3–5 structured interviews across departments) | Transcribes sessions in real time, extracts recurring pain themes, flags contradictions across sessions | Conducts interviews, probes for root causes, reads room | Raw transcripts + AI-extracted findings |
| Audit Report compilation | Synthesizes transcripts into structured 20–30 page report using Exo report template | Reviews, adds judgment and context, signs off | **Operational Audit Report** |
| Current State Process Mapping | Drafts workflow diagrams from structured audit data | Validates with client team, corrects edge cases and undocumented exceptions | **Current State Process Maps** |
| Department Blueprint | Auto-populates blueprint template from audit findings — defines what gets built, which agents handle what, which integrations connect | Makes architectural decisions, signs off on blueprint before engineering starts | **Department Blueprint** |
| Integration Inventory | Catalogues all tools via API and access review | Identifies what connects to what, flags legacy systems | **Integration Map (current state)** |
| Tool Access & Data Audit | Inventories data sources, access levels, and security posture | Confirms access is appropriate and compliant | **Data & Access Inventory** |

**Formal milestone:** Client signs off on the Blueprint. This is a hard gate — engineering does not start until Blueprint is approved. Blueprint approval is also when OTO Window 1 for Exo Care fires (see Exo Care section).

**Client portal update (exo-ai.co):** Build phase progress visible. Audit report live on their portal page. Process maps viewable.

---

### Stage 2 — OPERATE (Weeks 4–8)
**Owner:** Engineers

**Goal:** Install Flow OS, deploy AI agents, automate the department as designed in the Blueprint.

| Activity | AI Does | Human Does | Deliverable |
|----------|---------|-----------|-------------|
| Flow OS configuration | Auto-populates settings from Blueprint specs | Configures custom logic, namespace selection, access controls | **Live Flow OS instance** (client environment) |
| AI agent deployment | Deploys agents from library using Blueprint-defined triggers and logic | Tests agents in context, handles edge cases, tunes behavior | **Deployed agent roster** (name, function, trigger, owner) |
| Workflow automation build | Drafts automation logic from Blueprint specs | Builds, tests, handles exceptions and failure states | **Automation library** (what each does, trigger conditions, failure handling) |
| Integration connections | Connects tool stack via pre-built connectors (Slack, HubSpot, Notion, Salesforce, Google Workspace) | Handles custom or legacy integrations manually | **Live Integration Map** (updated from current state) |
| Performance baseline | Auto-generates first 2–4 weeks of operational performance data | Interprets early signals, adjusts agent behavior | **Agent Performance Baseline** |
| Weekly status reports | Auto-generates client-facing progress report from run logs | Reviews, adds commentary, publishes to client portal | **Weekly Operations Report** |

**Formal milestone:** Client ops team is briefed on what is live. They observe for 1–2 weeks in "watch mode" before Conductors begin transfer training.

**Client portal update:** Live operations dashboard viewable. Weekly reports published automatically. Agent run logs accessible.

---

### Stage 3 — TRANSFER (Weeks 8–12)
**Owner:** Conductors

**Goal:** Train the client's team to own and operate the department. Deliver complete ownership.

| Activity | AI Does | Human Does | Deliverable |
|----------|---------|-----------|-------------|
| Exo Academy certification | Generates training modules from operation logs and deployed SOPs. Auto-creates role-specific learning paths. | Facilitates training sessions, evaluates competency, certifies each person | **Certification records** (per team member, per role) |
| SOP writing | Drafts all SOPs from operation logs and workflow data. Tags each SOP to relevant agent and integration. | Reviews drafts, adds edge cases and context, signs off | **Full SOP library** (every deployed process documented) |
| Parallel operation period | Monitors live performance, auto-flags anomalies and deviations from baseline | Co-runs department alongside client team, coaches in real time | **Parallel Operation Log** |
| Sovereignty Packet compilation | Assembles all files, configs, data exports, SOPs, and certificates into structured package | Final QA review, prepares handover briefing | **The Sovereignty Packet** *(see below)* |
| Final performance audit | Runs automated audit against Phase 2 baseline — generates comparison report | Reviews, confirms benchmarks are met, signs off | **Transfer Signoff Report** |
| 90-Day Projection | Models post-transfer performance trajectory from observed data | Reviews projection with client, sets their expectations | **90-Day Post-Transfer Projection** |

**Formal milestone:** Transfer Signoff meeting. Client receives Sovereignty Packet. Department officially transferred. This is when OTO Window 2 for Exo Care fires.

**Client portal update:** Sovereignty Packet available for download. Certification records live. Department status switches from "In Progress" to "Operational."

---

## Deliverables Reference

### Full Deliverables List by Stage

| Stage | Deliverable | Format | Owner |
|-------|-------------|--------|-------|
| Intake | Pre-call Brief | Auto-generated summary | AI |
| Build | Operational Audit Report | 20–30 page PDF / portal page | Architect |
| Build | Current State Process Maps | Visual diagrams | Architect |
| Build | Department Blueprint | Structured spec doc | Architect |
| Build | Integration Map (current state) | Diagram + inventory table | Architect + Engineer |
| Operate | Live Flow OS Instance | Configured software environment | Engineer |
| Operate | Deployed Agent Roster | Structured table with specs | Engineer |
| Operate | Automation Library | Documented workflow specs | Engineer |
| Operate | Live Integration Map (updated) | Diagram | Engineer |
| Operate | Agent Performance Baseline | Data report | AI |
| Operate | Weekly Operations Reports | Auto-generated, Conductor-reviewed | AI + Conductor |
| Transfer | Certification Records | Per-person certificates | Conductor |
| Transfer | Full SOP Library | Tagged markdown docs | AI + Conductor |
| Transfer | Parallel Operation Log | Activity and anomaly log | AI |
| Transfer | Transfer Signoff Report | Audit comparison report | Conductor |
| Transfer | 90-Day Post-Transfer Projection | Data-modeled forecast | AI + Conductor |
| Transfer | **The Sovereignty Packet** | Complete bundled package | Conductor |

---

### The Sovereignty Packet — Contents

The crown deliverable. This is everything the client owns at transfer.

```
Sovereignty Packet/
├── SOP Library
│     └── All deployed process SOPs (AI-drafted, human-reviewed)
│     └── Edge case addendums per SOP
│     └── Agent-SOP cross-reference index
│
├── Agent Configuration Files
│     └── All AI agent definitions (exportable, client-owned IP)
│     └── Trigger conditions and logic documentation
│     └── Failure handling and escalation paths
│
├── Flow OS Admin Access
│     └── Full admin credentials
│     └── Access control documentation
│     └── No vendor lock-in — client owns their instance
│
├── Integration Documentation
│     └── Live Integration Map
│     └── API credentials and documentation
│     └── Re-connection guides for each integration
│
├── Performance Data Package
│     └── 12-week baseline performance data
│     └── KPI definitions and measurement methodology
│     └── 90-Day Post-Transfer Projection
│
├── Escalation Playbooks
│     └── What to do when each agent fails
│     └── What to do when an integration disconnects
│     └── Emergency contact protocol for critical failures
│
└── Certification Package
      └── Certified team member records
      └── Role-specific competency documentation
      └── Exo Academy access for refresher training
```

---

## Exo Concierge vs. Exo Care — The Distinction

These are sequential, not competing. The same team, different modes.

| | Exo Concierge | Exo Care |
|---|---|---|
| **When** | During the 90-day program | After transfer, ongoing |
| **What it is** | The human oversight layer ensuring Exo's platinum standard during delivery | The maintenance and protection subscription for what the client now owns |
| **Who runs it** | Concierge Lead + Client Success team | Same team, in maintenance mode |
| **Included in** | X-Scale base program cost | Optional OTO — not included by default |
| **Function** | Quality control ring around all departments during the build | Protection, updates, training, and support post-handover |
| **Analogy** | The surgical team during the operation | The follow-up care and prescription after surgery |

Exo Concierge is what makes the delivery excellent. Exo Care is what keeps it excellent after Exo steps back.

---

## Exo Care — Full Model

### Why It Exists

After transfer, the client owns an AI department. That department will need maintenance:
- AI model versions update → agents that relied on a specific model behavior may drift or break
- New hires join → need to be certified on the system
- Business processes evolve → SOPs and automations need updating
- Unexpected failures → require diagnosis and repair

Without Exo Care, the client either handles this themselves (risky without deep knowledge) or pays full per-incident rates. Exo Care is the subscription that protects their investment at a fraction of the per-incident cost.

---

### Two OTO Windows

**Window 1 — At Program Acceptance** *(48-hour window)*

Client has just signed the X-Scale contract. They are in a high-commitment, high-excitement state.

Offer framing: *"Protect your department before it's even built. Lock in the founding rate — available only to the first 20 Care subscribers."*

| Plan | Annual (upfront) | Monthly |
|------|-----------------|---------|
| Exo Care Standard | $4,800/year | $450/month |
| Exo Care+ | $9,600/year | $900/month |

Window closes in 48 hours. After that, only the Window 2 rate is available.

---

**Window 2 — At Transfer** *(7-day window)*

Client has just received their Sovereignty Packet. The department is live. They now fully understand what they are protecting.

Offer framing: *"Your department is operational. Here's how you keep it that way."*

| Plan | Annual (upfront) | Monthly |
|------|-----------------|---------|
| Exo Care Standard | $6,000/year | $550/month |
| Exo Care+ | $12,000/year | $1,100/month |

Window closes 7 days post-transfer. After that: standard off-boarding rate applies (higher, no locked pricing).

---

### Plan Tiers

**Exo Care Standard — $6,000/year**

| Coverage | Detail |
|----------|--------|
| Quarterly system audits | Exo reviews Flow OS instance, flags performance drift and degradation |
| Priority support | 48-hour response SLA on all issues |
| AI model version updates | When model providers release updates that break agents, Exo repairs them |
| Team training sessions | 2 per year (for new hires or role changes) |
| Minor agent tweaks | Up to 2 hours of work per quarter included |

**Exo Care+ — $12,000/year**

| Coverage | Detail |
|----------|--------|
| Everything in Standard | — |
| Monthly check-in calls | Conductor-led, 45 minutes |
| Unlimited minor support | No cap on requests under 2 hours each |
| Annual SOP refresh | Full SOP library reviewed and updated as business evolves |
| Proactive monitoring | Exo flags anomalies before client notices them |
| Department expansion consultation | 1 free scoping session per year for adding a new namespace |
| Per-incident discount | 50% off all out-of-scope incident pricing |

---

### Per-Incident Pricing

For clients without Care, or for work outside the scope of Standard coverage.

*This is the Apple Care model: the plan looks expensive until you need it once.*

| Incident Type | No Care | Care Standard | Care+ |
|--------------|---------|---------------|-------|
| Emergency agent repair (critical failure) | $1,500 | $1,000 | $500 |
| Major rebuild after AI model change | $4,000 | $2,500 | Included |
| New hire certification | $1,200/person | $750/person | 2 included/year |
| Additional training session (beyond 2) | $800/session | $600/session | Unlimited |
| Department expansion scoping | $2,500 | Free | Free |
| Department expansion build | $8,000–$20,000 | $7,000–$18,000 | 15% off |
| Annual SOP refresh | $3,000 | $2,000 | Included |
| Custom agent build (new workflow) | $2,500–$5,000 | $2,000–$4,000 | $1,500–$3,000 |

---

### Care Revenue Projection

| Year | Active Care Clients | Avg Plan Value | Care ARR |
|------|--------------------|--------------:|--------:|
| 1 | 8 | $7,200 | $57,600 |
| 2 | 22 | $7,500 | $165,000 |
| 3 | 45 | $8,000 | $360,000 |
| 4 | 80 | $8,500 | $680,000 |
| 5 | 130 | $9,000 | $1,170,000 |

This is purely residual ARR. It compounds every time a new X-Scale program completes. By Year 5, Exo Care is $1.17M ARR that arrives regardless of new client acquisition in any given month.

---

### Post-Transfer Decision Flow

```
Day 90 — Transfer Complete
         │
         ▼
   Window 2 OTO fires
   (7-day window)
         │
    ┌────┴────┐
    │         │
 Accepts    Declines
 Care       Care
    │         │
Enrolled    Per-incident only
on plan     (no SLA, no proactive,
    │        higher pricing)
    │
┌───┴────┐
│        │
Standard  Care+
$6K/yr   $12K/yr
```

---

## The Exo Delivery Portal — exo-ai.co

### What It Is

exo-ai.co is the client-facing home for Exo's entire delivery operation. It is not a generic client portal — it is a personalized, AI-generated experience for each client at their own subdirectory.

Every client gets: `exo-ai.co/[their-company-slug]`

What they see at that URL:
- Their branded, premium Exo-aesthetic page
- Their company's name, data, and deliverables — personalized to them
- Live status of their engagement (current stage, upcoming milestones)
- Access to all deliverables as they are completed
- Their Exo Care status (if enrolled)
- Their Sovereignty Packet (available at transfer)

This is not a PDF in an email. Every deliverable becomes a live, premium web experience that reflects the quality standard Exo claims.

---

### How It Works

**The architecture:**

```
Client Obsidian Vault (structured markdown knowledge store per client)
         │
         ▼
Claude API (reads vault → renders as branded HTML on demand)
         │
         ▼
exo-ai.co/[client-slug] (served via Next.js + Vercel)
```

Each client has an Obsidian vault containing their entire engagement record: audit findings, process maps, deployed SOPs, agent configurations, performance data, certification records. The vault is markdown-based — LLM-native. Claude reads it and renders the appropriate view for whatever page the client is visiting, styled in Exo's visual identity.

**Why markdown and Obsidian:**
- Markdown is the native language of LLMs — Claude reads, writes, and reasons over it perfectly
- Obsidian's bidirectional linking creates a connected knowledge graph per client: this SOP links to this agent, which links to this integration, which links to this performance metric
- The vault compounds over time — every new SOP, every new data point, every new agent adds to a growing structured record of that client's business
- AI can traverse the vault at any time to generate: status reports, audit summaries, improvement recommendations, onboarding docs for new client team members

---

### Use Cases — How The Portal Compounds

**1. Sales / Lead Generation (Pre-Client)**

Prospect fills out a form with company name, URL, and top pain point. An AI agent:
- Scrapes their public website, LinkedIn, and job postings for operational signals
- Claude synthesizes into a personalized "AI Operations Audit" for their company
- Renders as a premium Exo-branded page at `exo-ai.co/[company]/free-audit`
- Email sent: *"Here's your personalized AI audit. Review it here."*

Prospect lands on a premium page that already has their company name, their identified pain points, their recommended department modules. Conversion rate on this vs. a generic PDF: dramatically higher. They've already experienced what working with Exo feels like before they've paid anything.

**2. Proposal Delivery (Pre-Sign)**

Custom proposal delivered not as a PDF attachment but as a live page at `exo-ai.co/[company]/proposal`. Includes: their pain points mapped to Exo solutions, recommended namespace selection, projected outcomes based on similar clients, investment and timeline. Dynamically updatable — if scope changes after a call, update the vault, the page updates instantly.

**3. Active Delivery (During 90 Days)**

Client visits their portal and sees:
- Current phase (Build / Operate / Transfer) with progress indicators
- Completed deliverables (audit report, process maps, blueprint) — viewable in-browser, not downloaded
- Live agent performance data
- Upcoming milestones and what to expect
- Weekly operations reports auto-published

The portal replaces the need for most status update emails. The client always knows exactly where things stand.

**4. Sovereignty Packet Delivery (At Transfer)**

Instead of a ZIP file in an email, the Sovereignty Packet is a structured portal section: SOPs are searchable and linked, agent configurations are viewable, performance data is charted, certification records are official-looking and printable. The handover feels like receiving an institution, not downloading a folder.

**5. Post-Transfer / Exo Care (Ongoing)**

Exo Care clients see their portal as a live operations health dashboard:
- Last audit date and findings
- Next scheduled audit
- Open support tickets
- Agent health status
- SOP version history (when was each last updated)

Non-Care clients see the same page but with a persistent "Protect Your Department" CTA that links to the Exo Care signup. This is the evergreen upsell moment.

**6. Other Offers and Lead Magnets**

The same architecture serves any personalized deliverable:
- Free AI Operations Audit → personalized portal page
- Exo Scaling Roadmap → personalized to their company's stage and ICP profile
- Department Health Check (renewal offer for Care clients) → rendered from current vault data

Every offer gains trust and conversion rate by being personalized and premium instead of generic.

---

### Technical Architecture Sketch

```
Infrastructure:
  Content Store: Obsidian vaults (per client) — markdown files + attachments
  AI Layer: Claude API — reads vault, generates page content on demand
  Web Layer: Next.js — serves pages, handles routing to client slugs
  Hosting: Vercel — low-friction deployment, automatic scaling
  Domain: exo-ai.co (primary delivery domain)

Client Routing:
  exo-ai.co/[slug]              — Main client dashboard
  exo-ai.co/[slug]/audit        — Operational Audit Report
  exo-ai.co/[slug]/blueprint    — Department Blueprint
  exo-ai.co/[slug]/operations   — Live operations dashboard
  exo-ai.co/[slug]/sops         — SOP library (searchable)
  exo-ai.co/[slug]/sovereignty  — Sovereignty Packet (post-transfer)
  exo-ai.co/[slug]/care         — Exo Care status / upsell

Lead Gen Routing:
  exo-ai.co/[slug]/free-audit   — AI-generated free audit (pre-client)
  exo-ai.co/[slug]/proposal     — Custom proposal (pre-sign)
```

---

### Leverage Points — Why This Compounds

| Leverage Type | How It Works |
|--------------|-------------|
| **Sales velocity** | Personalized free audit converts better than any generic PDF. Prospects experience the product quality before they buy. |
| **Delivery perception** | Every deliverable in-browser at a premium URL signals institutional quality, reinforcing the $40-60K price point |
| **Upsell surface** | The portal is a persistent upsell moment for Exo Care, department expansions, and new namespaces — clients who visit regularly see these opportunities naturally |
| **Knowledge compounding** | Each client vault gets richer over time. AI has more context to generate better recommendations, better reports, better audits. The 50th client gets a better experience than the 5th. |
| **Internal efficiency** | Every deliverable Exo produces is auto-generated from vault data, reducing manual report-writing and formatting time dramatically |
| **Partner network** | When Exo certifies partner agencies, they get access to the portal architecture to run their own client delivery — Exo's infrastructure becomes the platform they build on |
| **Demo power** | Showing a prospect their future portal (with sample data from a similar company) is more powerful than any slide deck |

---

## AI Infrastructure Across All Delivery Stages

Exo's claim as an AI-native firm requires AI to be genuinely running its own operations — not just the clients'. This is the internal AI stack per delivery phase:

| Stage | AI Tools | What They Do |
|-------|---------|-------------|
| Intake | Lead scoring model + Claude | Score applications, summarize discovery calls, draft proposals |
| Build | Transcription (Whisper) + Claude | Transcribe audit sessions, extract themes, draft Audit Report and Blueprint |
| Operate | Flow OS agent framework + Claude | Deploy and monitor agents, auto-generate weekly reports |
| Transfer | Claude | Draft all SOPs from operation logs, generate Exo Academy training modules, compile Sovereignty Packet |
| Portal | Claude API + Next.js | Render all client portal pages dynamically from vault data |
| Care | Flow OS monitoring + Claude | Proactive anomaly detection, auto-generate quarterly audit reports |

The consistent principle: AI handles research, synthesis, drafting, monitoring, and reporting. Humans handle judgment, relationships, quality review, and client-facing communication.

---

## Namespace-Specific Delivery Notes

Each namespace (department) follows the BOM-T framework but has specific variations:

| Namespace | Key Build Focus | Key Operate Agents | Key Transfer Deliverables |
|-----------|----------------|-------------------|--------------------------|
| **Flow OS** | Centralize data sources, map all workflows | Reflex Arc agents for operational decisions | Full SOP library, admin access, reflex arc documentation |
| **Deal OS** | Map sales process end-to-end, audit CRM health | Pipeline intelligence agent, follow-up automation, deal scoring | Sales playbook, CRM configuration, deal scoring model |
| **Exo Academy** | Inventory existing knowledge, identify onboarding gaps | Knowledge synthesis agent, SOP auto-generation | Certified training modules, onboarding paths, knowledge base |
| **AURA AI** | Audit hiring process, define role profiles | Sourcing agent, resume scoring model | Hiring playbook, role profile library, sourcing workflow |
| **Exo Launch** | Audit content/creative process, brand guidelines capture | Campaign generation agent, repurposing automation | Creative SOP, brand enforcement rules, campaign templates |
| **Exo Concierge** | Map escalation paths, define oversight scope | Cross-department monitoring agent, anomaly alerts | Oversight playbook, escalation tree, reporting cadence |
