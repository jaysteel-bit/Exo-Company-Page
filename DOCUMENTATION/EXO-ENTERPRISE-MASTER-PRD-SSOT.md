# Exo Enterprise - Master Product Requirements Document (SSOT)

**Version**: 2.3.0 SSOT
**Last Updated**: January 17, 2026
**Document Type**: Single Source of Truth - Comprehensive PRD
**Status**: Living Document - Very Early Stage Validation | Company stage will be updated progressively. Status=Very_Early

---

## Document Purpose & How to Use This SSOT

This document is the **Single Source of Truth** for all Exo Enterprise product development, business strategy, and technical implementation. It consolidates information previously fragmented across 40+ files into one comprehensive, logically structured reference designed for both human teams and AI systems (LLMs) to understand the complete Exo Enterprise product ecosystem.

**What This Document Contains:**
- Complete product vision, strategy, and business model
- All 7 products with detailed specifications (Flow OS, Deal OS, EXA, Launch, Steel, Exo AI, Academy, APM/Foundry)
Keep in mind that Exo houses all the products and is the parent company of all the products. Nevertheless, the main focus is on Flow OS and it's underlying namespaces: (Flow OS, EXA [Exo Academy], Deal OS, Launch, AURA, Exo AI). While Steel and Foundry are sister brand products but Steel.
- Technical architecture, database schemas, and API patterns
- Design system (Liquid Glass UI) and brand guidelines
- User personas, use cases, and acceptance criteria
- Go-to-market strategy, pricing model, and acquisition channels
- Success metrics, KPIs, and validation scenarios

**How to Navigate:**
- **Product Managers**: Start with Product Overview → Target Audience → Functional Requirements
- **Engineers**: Jump to Technical Constraints & Integrations → Database Architecture → API Patterns (work closely with designers to implement)
- **Designers**: Focus on UI/UX Requirements → Design System → Component Library (work closely with engineers to implement)
- **Sales/Investors**: Read Product Overview → Business Model → Roadmap & Phasing
- **LLMs**: Parse entire document sequentially for complete context

**Version Control:**
Changes to this SSOT are tracked in [PRD - CHANGELOG.md](../PRD%20-%20CHANGELOG.md). All product decisions reference this document as the authoritative source.

---

## Table of Contents

1. [Product Overview](#product-overview)
2. [Target Audience & User Personas](#target-audience--user-personas)
3. [Functional Requirements by Product](#functional-requirements-by-product)
4. [Technical Constraints & Integrations](#technical-constraints--integrations)
5. [UI/UX Requirements](#uiux-requirements)
6. [Business Model & Revenue Architecture](#business-model--revenue-architecture)
7. [Go-to-Market Strategy](#go-to-market-strategy)
8. [Competitive Differentiation](#competitive-differentiation)
9. [Success Metrics & KPIs](#success-metrics--kpis)
10. [Risk Management & Mitigation](#risk-management--mitigation)
11. [Roadmap & Phasing](#roadmap--phasing)
12. [Future Ecosystem](#future-ecosystem)

---

# 1. Product Overview

## 1.1 Mission Statement

**"We build internal AI capability departments for ambitious businesses—transferring our expertise into your organization so you own the results forever."**

Exo Enterprise is a **Capability-Building AI Transformation Firm** that builds complete internal AI departments within client organizations. We don't just provide consulting services or SaaS tools—we transfer capability, making clients permanently self-sufficient in AI-driven operations.

## 1.2 The "Why" - Core Problem We Solve

**The AI Transformation Dilemma:**

Most businesses face two terrible options when adopting AI:
- **Door #1**: Hire expensive AI consultants who might underdeliver, with no guarantee of results
- **Door #2**: Get amazing results from expert consultants but become strategically dependent on them forever

**Our Solution - Door #3:**

We build your internal AI capability department with:
- **Our expertise** embedded directly into your team through training and knowledge transfer
- **Our systems** running your operations autonomously (Flow OS, Deal OS, Launch, Academy)
- **Complete ownership** of the outcome—you become self-sufficient in 90 days

**Value Promise:** Get capability back. Stay in flow. Own the transformation.

## 1.3 High-Level Value Proposition

Exo Enterprise delivers **Department Operating Systems**—not point solutions or generic tools. Each product is a complete "Department in a Box" that we install, customize, train your team on, and transfer to your ownership.

## **What Makes Us Different: The Exo Operating System**
Our core offer is a **hybrid delivery model** called **BOM/T (Build → Operate → Manage/Transfer)** that ends in SaaS. We combine production-ready software (Flow OS and its namespaces), deep consulting expertise, and structured knowledge transfer (via Exo Academy) to install a complete AI-powered department that you eventually own outright.

Clients choose one of three engagement paths, depending on their current team and readiness:

1. **Rebuild Path**  
   We rapidly implement Flow OS to stabilize operations, then upskill your existing team through hands-on guidance and Exo Academy. You take full ownership when ready.

2. **Recruit Path**  
   We stabilize operations with Flow OS, then use AURA (AI Recruiter) + Exo Academy to source and onboard a new high-performing team. Full transfer occurs once the department runs independently.

3. **Managed Path**  
   We stabilize operations with Flow OS and continue running the department for you with ongoing advisory support. Transfer happens on your timeline when you're ready to own it outright.

All paths follow the same **BOM/T phasing** for predictable outcomes and compounding value:
- **Build (Weeks 1–12)**: Rapid implementation of the department using Flow OS, Deal OS, Launch, Exo Academy, etc. Goal: immediate stabilization + 20–40% efficiency gains.
- **Operate (Months 3–12)**: High-touch advisory, co-management, and optimization via human experts, Exo AI, and Academy training.
- **Manage/Transfer (Month 12+)**: Light-touch maintenance + structured handover. You gain full ownership and independence; optional ongoing advisory retainers available.
This architecture creates compounding client success while generating layered revenue (*implementation → advisory → **recurring SaaS** → namespace unlocks*).

3. **Internal Dogfooding (Exo Delivery OS)**: We move first by dogfooding our own internal delivery operations on the same infrastructure we install for clients. If it doesn't make us faster, we don't build it for you.
4. **Human Judgment Capture (Non-Optional)**: Our systems are designed to capture human intent and context. This data is the ultimate competitive advantage. AI can help capture human intent and context, but humans must approve the "why."

---

**Building Blocks:**
1. **First Principles Engine**: Everything is a state change (before → after → why), enabling perfect auditability, AI learning, and institutional knowledge preservation, providing a single source of truth for all decision-making, predictions intelligence, and recommendations. Capture of human judgment is a non-optional requirement for all system diffs.
2. **Data Gravity Moat**: [diffs/whys as moat](Clients accumulate 2-20M proprietary diff+annotation pairs documenting every decision, creating 70-90% switching costs)
3. **Internal Abstraction Layer Philosophy**: Vendor-independent architecture allows provider swapping (Google NotebookLM → OpenNotebook → Custom models → Client Facing); AI Recruiter API → Aura AI Recruiter → Flow OS interface, client facing - without architecture changes
4. **Academy: The Central Bridge**: Exo Academy acts as the central bridge namespace, connecting all other namespaces to defeat fragmentation. Alongside proactive knowledge transfer.

## 1.4 Product Ecosystem Architecture
*Needs an update*

```mermaid
graph TB
    subgraph "Exo Enterprise Core Ecosystem"
        FO[Flow OS - Operations Department]
        DO[Deal OS - Revenue Department]
        EL[Exo Launch - Creative Department]
        EA[Exo Academy - Knowledge Synthesis]
        AU[AURA - AI Recruiter & Hiring Assistant]
        AI[Exo AI - Command Center]
    end
    AI -->|Orchestrates| FO
    AI -->|Orchestrates| DO
    AI -->|Orchestrates| EL
    AI -->|Powers| EA
    AI -->|Powers| AU

    FO -->|Handoff| DO
    DO -->|Campaign Data| EL
    EA -->|Knowledge Base| FO
    AI -->|API| AU

```

**Light visualization focus on core capability nodes.**

## 1.5 Product Portfolio Summary

### 7 Core Products

**Note: All products are modular namespaces**
**Core focus: Flow OS + Namespaces (EXA flagship, Deal OS, Launch, AURA). Sister/parking-lot products (Steel, APM, Foundry) gated post-validation.**
*All "early idea phase" except Flow OS MVP in prototype.*

| Product | Status | Description | Primary Value | Current Phase |
|---------|--------|-------------|---------------|---------------|
| **Flow OS** | ✅ Prototype UI | (*Central*) Operations Department in a Box | 20+ hrs/week saved, 50% faster onboarding | Status=Very_Early (v1.0 at access.exoflowos.com) |
| **Exo Academy** | 🔄 NON-NEGOTIABLE | (*Knowledge Synthesis*) Central bridge namespace connecting all other namespaces. Knowledge synthesis & proactive transfer. | Upload docs → podcasts/briefs in 10 min | Status=Very_Early | NotebookLM styled.
| **Deal OS** | 📋 Planned | (*Revenue*) Revenue Department in a Box | 40% shorter sales cycles, 90%+ forecast accuracy | Status=Very_Early |
| **Exo Launch** | 📋 Planned | (*Creative*) Creative Department in a Box | 10x content output at 70% lower cost | Status=Very_Early |
| **Exo AI** | 🧠 Integrated | (*Command Center*) AI Command Center | Predictive intelligence across all departments | Status=Very_Early |
| **AURA** | 🧠 Within HR namespace/department | (*HR Assistant*) AI Recruiter | Predictive intelligence for hiring | Status=Very_Early |
| **Exo Delivery OS**| 🧠 Internal | (*Dogfooding*) Internal Delivery Department in a Box | Internal efficiency validation for all products | Status=Very_Early |

## 1.7 Future Ecosystem (Gated post-validation)

| Product | Status | Description | Primary Value | Current Phase |
|---------|--------|-------------|---------------|---------------|
| **Steel Card/Steel Protocol** | 🎨 Beta Parked | (*Identity*) Identity & Access Platform | Unified SSO, reputation system, community access | Status=Very_Early |
| **APM + Foundry** | Beta Parked | Playbook Marketplace + Community | Monetized expertise, network effects | Status=Very_Early |

### Integration Philosophy

All products operate on a **unified diffs architecture** with namespace-based separation:
- **Flow OS**: `namespace='flow_os'` - Projects, tasks, workflows
- **Deal OS**: `namespace='deal_os'` - Deals, proposals, revenue
- **Academy**: `namespace='academy'` - Documents, syntheses, annotations
- **Launch**: `namespace='exo_launch'` - Creative assets, campaigns, approvals
- **AI**: `namespace='exo_ai'` - AI Command Center
- **AURA**: `namespace='aura'` - AI Recruiter
- **Steel Card**: `namespace='steel_card'` - Identity & Access Platform

**Key Architectural Benefit:** Adding new products NEVER requires schema changes—just new namespace values in the same diffs table. This "build once, branch forever" approach enables infinite scalability.

## 1.6 Current Development Status (Jan 15, 2026)

> **⚠️ TRANSPARENCY NOTICE**
>
> Exo Enterprise is in **very early-stage validation** with Flow OS MVP v1.0 deployed as a proof-of-concept. While our technical architecture and business strategy are comprehensive and production-ready, several aspects remain in active testing:
> Flow OS is in "very early stage," "product has not been fully built yet," "no data in Supabase."
> **Company stage will be updated progressively. Status=Very_Early**
>
> **What's Validated/Current:**
> - Flow OS MVP UI prototype at (https://access.exoflowos.com) via Github --> Vercel [Version 0.0.3] https://github.com/jaysteel-bit/flow-os.git - (*Reflex Arc pattern not proven*)
> - Technical stack (Next.js + Supabase) but Clerk is not yet implemented fully. More to come, may be optional.
> - Liquid Glass UI design system implemented partially. Updated to latest version instead of what was in the original spec.
> - First Principles Engine (diffs architecture) validated
> - **Internal Dogfooding**: Exo Delivery OS is currently being used to manage this project's own delivery.
> **What's In Validation:**
> - Ideal Customer Profile (ICP): Targeting agencies/SaaS companies ($2-50M ARR) - active pilot validation
> - Pricing Model: Capability Stack Licensing (BOM/T) tiers subject to market feedback. On-ramp service to subscription-based model with AI usage-based pricing.
> - Product Roadmap: Only Flow OS deployed; other products specifications-ready but not built
> - Business Model: Hybrid consulting/services + SaaS + advisory may evolve based on client engagement data
> - Reflex Arc Implementation and Human Judgment Capture loop validation.

> **Development Philosophy:**
> We maintain comprehensive documentation to guide consistent execution while remaining flexible to pivot based on real-world validation. This SSOT represents both current reality (deployed MVP) and strategic vision (full ecosystem).

---

# 2. Target Audience & User Personas

## 2.1 Ideal Customer Profile (ICP)

**Primary Market**: Mid-Market Agencies & Professional Services Firms
**Revenue Range**: $2M-$50M annual revenue
**Employee Count**: 10-500 employees
**Industries**: Marketing agencies, creative agencies, consulting firms, SaaS companies, professional services

**Psychographic Profile:**
- Value operational leverage over tactical firefighting
- Data-driven growth mindset
- Frustrated by dependency on generic tools or expensive consultants
- Seeking AI transformation without becoming strategically dependent
- Budget authority for $15K-$60K/year capability investments

## 2.2 Detailed User Personas

### Persona 1: Agency Owner / CEO (Primary Decision Maker)

**Demographics:**
- Age: 35-55 years old
- Role: Founder, CEO, or Managing Partner
- Company Size: 10-100 employees, $2M-$25M revenue
- Industry: Marketing, creative, digital agencies

**Pain Points:**
- **Operational Bottlenecks**: Team capacity maxed out, can't scale without proportional hiring
- **High Labor Costs**: 60-70% of revenue goes to salaries, margins thin
- **Inconsistent Client Outcomes**: Quality varies by team member, no standardized processes
- **Knowledge Loss**: Best practices live in people's heads; turnover = capability loss
- **Tool Chaos**: Using 10-15 different tools (Monday, Asana, Slack, Notion, etc.) with no integration

**Goals:**
- Reduce operational overhead by 50% within 6 months
- Standardize processes across all projects and clients
- Scale business 2-3x without proportional team growth
- Build proprietary competitive advantage through AI-powered operations
- Achieve self-sufficiency in AI adoption (no permanent consultant dependency)

**Buying Criteria:**
- Will invest $15K-$60K/year for proven ROI (20+ hours/week saved, 30%+ efficiency gains)
- Requires 30-90 day payback period on investments
- Values transparency, capability transfer, and long-term ownership over short-term tactical wins

**Objections to Overcome:**
- "We tried project management tools before—this sounds like more complexity"
- "What happens if we cancel? Do we lose everything?"
- "How is this different from hiring another consultant who creates dependency?"

---

### Persona 2: Operations Director / COO (Implementation Champion)

**Demographics:**
- Age: 30-45 years old
- Role: Head of Operations, COO, Director of Client Services
- Reports To: CEO/Founder
- Manages: 5-50 team members

**Pain Points:**
- **Manual Process Management**: Constantly firefighting, no time for strategic improvements
- **Inconsistent Execution**: Each team member has their own system, hard to enforce standards
- **Reporting Overhead**: Spending 10+ hours/week compiling reports manually
- **Scalability Challenges**: Can't onboard new clients fast enough to support growth targets
- **Knowledge Silos**: Critical knowledge trapped in Slack threads, email, and individual memories

**Goals:**
- Automate 60%+ of manual operational tasks
- Create documented, repeatable processes that survive team turnover
- Reduce onboarding time for new clients from 2-3 weeks to 3-5 days
- Build real-time dashboards showing project health without manual data entry
- Free up 15-20 hours/week for strategic initiatives vs. tactical execution

**Buying Criteria:**
- Needs hands-on implementation support (not just software license)
- Requires training and certification for team members
- Values integrations with existing tools (CRM, PM software, Slack, Google Workspace)
- Needs proof of ROI within 60 days to justify continued investment

**Objections to Overcome:**
- "My team is already overwhelmed—they won't adopt another tool"
- "We've tried automation before, and it created more work than it saved"
- "How long will implementation take? We can't afford downtime"

---

### Persona 3: Sales Director / VP Revenue (Deal OS User)

**Demographics:**
- Age: 35-50 years old
- Role: VP Sales, Sales Director, Revenue Operations Lead
- Manages: 5-20 sales reps
- Quota: $5M-$50M annual revenue target

**Pain Points:**
- **Inaccurate Forecasting**: Sales pipeline predictions off by 30-50%, causing cash flow issues
- **Manual CRM Hygiene**: Reps spend 40%+ time on data entry vs. selling
- **Inconsistent Performance**: Top rep closes 40% of deals, average rep closes 15%—no scalable playbook
- **Deal Leakage**: Opportunities fall through cracks due to poor follow-up and lack of visibility
- **No Deal Intelligence**: Can't predict which deals will close or why deals are lost

**Goals:**
- Increase forecast accuracy to 90%+ within 6 months
- Reduce sales cycle length by 30-40%
- Improve team-wide close rates by 25%+
- Automate 80%+ of CRM data entry and administrative tasks
- Build AI-powered deal scoring and next-action recommendations

**Buying Criteria:**
- Integration with existing CRM (Salesforce, HubSpot, Pipedrive) non-negotiable
- Needs call intelligence (AI-powered summaries, sentiment analysis)
- Requires predictive analytics (deal close probability, revenue forecasting)
- Will pay premium for proven sales velocity improvements

**Objections to Overcome:**
- "Our CRM already has AI features—why do we need this?"
- "Sales reps won't use another tool—they barely use the CRM"
- "How does this integrate with our existing sales process?"

---

### Persona 4: Creative Director / Brand Manager (Launch User)

**Demographics:**
- Age: 32-48 years old
- Role: Creative Director, Brand Manager, Head of Content
- Manages: 3-15 creative team members (designers, writers, video editors)

**Pain Points:**
- **Inconsistent Creative Quality**: Output quality varies wildly by team member and project
- **High Agency Costs**: Spending $50K-$200K/year on external agencies for premium work
- **Slow Turnaround**: Campaign creation takes 3-6 weeks when market moves in days
- **Brand Drift**: Hard to enforce brand guidelines across all touchpoints and channels
- **Limited Testing**: Can only afford to produce 1-2 creative variations vs. 10+ needed for optimization

**Goals:**
- Increase creative output by 10x with same team size
- Reduce dependency on external agencies by 80%
- Launch campaigns 3x faster (2 weeks → 3-5 days)
- Maintain 100% brand consistency across all materials
- Enable A/B testing with 5-10 creative variations per campaign

**Buying Criteria:**
- Needs AI-powered content generation (copy, images, video, audio)
- Requires brand guideline enforcement and compliance checking
- Values multi-format repurposing (1 asset → 10+ platform-specific variations)
- Needs approval workflow automation and version control

**Objections to Overcome:**
- "AI-generated creative lacks the quality and originality we need"
- "Our brand is too unique for templated solutions"
- "We tried Canva/generic tools and they didn't fit our needs"

**Activation Triggers:**
- ≥5 creative assets generated using Exo Launch in first 30 days
- ≥1 complete campaign (multi-format) delivered using AI tools

---

### Persona 5: Knowledge Worker / Consultant (Academy User)

**Demographics:**
- Age: 30-60 years old
- Role: Consultant, Fractional Executive, Agency Owner, Operations Manager
- Clients: Manages 3-10 simultaneous client engagements or internal projects

**Pain Points:**
- **Knowledge Overload**: Drowning in client briefs, SOPs, research docs, industry reports
- **Context Switching**: Forgetting key details when moving between client projects
- **No Time to Read**: 50-page briefs sit unread; critical insights missed
- **Knowledge Loss**: Past project learnings not systematically captured or reused
- **Onboarding Overhead**: Training new team members takes weeks of manual knowledge transfer

**Goals:**
- Synthesize 50-page briefs into 10-minute audio summaries (consume during commute)
- Create searchable knowledge base from all past client work
- Onboard new hires with auto-generated playbooks from historical documents
- Extract cross-project insights automatically (recurring patterns, best practices)
- Build personal IP library from past work for thought leadership content

**Buying Criteria:**
- Needs multi-format output (podcast, executive brief, Q&A notes, citations)
- Requires support for messy real-world documents (scanned PDFs, complex Excel, mixed formats)
- Values speed (upload → synthesis in <10 minutes)
- Needs knowledge graph showing document relationships over time

**Objections to Overcome:**
- "I can just read the documents myself"
- "AI summaries will miss important nuances"
- "What if synthesis is inaccurate or hallucinated?"

**Activation Triggers:**
- ≥5 notebooks created in first 30 days
- ≥3 podcast syntheses listened to completion (60%+ completion rate)
- Knowledge graph showing ≥100 document cross-references by Month 3

---

### Persona 6: Team Member / Individual Contributor (End User)

**Demographics:**
- Age: 24-40 years old
- Role: Project Manager, Account Manager, Designer, Developer, Sales Rep
- Experience: 2-10 years in role

**Pain Points:**
- **Tool Overload**: Switching between 10+ tools daily, losing productivity
- **Unclear Priorities**: Not sure which tasks to focus on when everything feels urgent
- **Manual Data Entry**: Spending hours updating spreadsheets, status reports, CRM
- **Lack of Context**: Don't understand why tasks are assigned or what success looks like
- **Feedback Loops Slow**: Waiting days for approvals or answers to blockers

**Goals:**
- Spend 80%+ time on high-value work (strategy, creativity, client relationships) vs. admin
- Have clear daily priorities automatically ranked by AI
- Understand "why" behind decisions and processes (learning, not just executing)
- Get instant answers to questions from knowledge base
- Feel empowered vs. micromanaged

**Buying Criteria:**
- Needs intuitive UI (no training required, feels like consumer apps)
- Values automation that "just works" without configuration
- Requires mobile access for on-the-go updates
- Needs transparency into how AI makes decisions (no black box)

**Objections to Overcome:**
- "I'm already using too many tools—I don't want another one"
- "This looks complicated—I don't have time to learn new software"
- "Will this replace me or make my job obsolete?"

**Activation Triggers:**
- Daily active usage (≥5 days/week login rate)
- ≥10 tasks completed using Flow OS automation
- Positive sentiment in "why" annotations (demonstrating understanding and buy-in)

---

# 3. Functional Requirements by Product

## 3.1 Flow OS - Operations Department in a Box

### Must-Have Features (MVP v1.0)

#### FR-FO-001: Core Data Model (Diffs Table)
**Priority**: CRITICAL - Foundation for entire system
**Status**: ✅ Implemented

**Requirements:**
- Universal state change representation for all workflows, tasks, and operations
- Support for JSONB columns allowing flexible schema-less data storage
- Multi-tenant architecture with `client_id` isolation
- Namespace field enabling product separation (`flow_os`, `academy`, `deal_os`)
- Mandatory `actor_id` to track who/what triggered each change
- Immutable append-only log (no updates or deletes to diffs table)

**Acceptance Criteria:**
- ✅ Diffs table can store 10M+ rows per client without performance degradation
- ✅ Query performance: 95th percentile query time <100ms for 50M row dataset
- ✅ Real-time subscription capability via Supabase Realtime
- ✅ Every state change in Flow OS generates corresponding diff entry
- ✅ Diffs are queryable by client_id, namespace, entity_id, time range

---

#### FR-FO-002: Reflex Arc Engine (SENSE→REACT→REMEMBER)
**Priority**: CRITICAL - Core automation pattern
**Status**: ✅ Implemented

**Requirements:**
- **SENSE Layer**: Real-time monitoring of diffs table via Supabase Realtime listeners
- **REACT Layer**: FastAPI Python core (200 lines max) evaluating rules against incoming diffs
- **REMEMBER Layer**: Automatic storage of rule executions, outcomes, and human annotations

**Acceptance Criteria:**
- ✅ System detects state changes within <500ms of diff insertion
- ✅ Rules engine evaluates ≤100ms per diff for deterministic rules
- ✅ All automated actions logged as diffs (full auditability)
- ✅ Human-in-loop capability: Rules can require human approval before execution
- ✅ Replay capability: Can reconstruct any past state from diffs history

---

#### FR-FO-003: Human-in-the-Loop "Why" Annotations
**Priority**: CRITICAL - Data gravity foundation
**Status**: ✅ Implemented (Enhanced Jan 15, 2026)

**Requirements:**
- **Human Judgment is Non-Optional**: Capture of the "why" (context/intent) is a fundamental, non-optional requirement for all critical state changes.
- Mandatory "why" field for critical state changes (escalations, deal losses, project delays)
- Optional annotations for routine operations (encouraged but not required)
- Sentiment scoring (-1 for regret, 0 for neutral, 1 for positive surprise)
- Annotations linked to specific diffs (not generic comments)
- Multi-author support (team members can add context to same diff)

**Acceptance Criteria:**
- ✅ UI prompts for "why" explanation when marking tasks as blocked/failed
- ✅ Annotations searchable across entire organization history
- ✅ Annotation count tracked as activation metric (target: ≥200 per client in 60 days)
- ✅ Sentiment analysis available for identifying patterns (recurring regrets)
- ✅ Annotations feed into rules engine training data (future ML features)

---

#### FR-FO-004: Basic Dashboard UI (Heartbeat Visualization)
**Priority**: Must-Have
**Status**: ✅ Implemented

**Requirements:**
- Real-time workflow health status (green/yellow/red indicators)
- Workflow list view with sortable columns (status, last updated, owner)
- Task completion metrics per workflow
- Team member workload overview
- One-click drill-down into workflow details

**Acceptance Criteria:**
- ✅ Dashboard loads in <2 seconds for clients with 100+ active workflows
- ✅ Real-time updates without page refresh (via Supabase Realtime)
- ✅ Color-coded health indicators:
  - **Green**: All tasks on track, no blockers
  - **Yellow**: ≥1 task overdue by <3 days OR ≥1 task blocked
  - **Red**: ≥1 task overdue by >3 days OR critical blocker unresolved >24hrs
- ✅ Mobile-responsive design (works on tablet/phone)
- ✅ Export capability (download workflow data as CSV)

---

### Should-Have Features (Month 2-3)

#### FR-FO-005: Workflow Manager UI
**Priority**: High
**Status**: 📋 Planned

**Requirements:**
- CRUD operations for workflows (create, read, update, archive)
- Drag-and-drop task ordering within workflows
- Workflow template library (pre-built templates for common use cases)
- Workflow duplication (clone existing workflow as template)
- Workflow versioning (track changes over time)

**Acceptance Criteria:**
- Users can create new workflow in <2 minutes
- Template library includes ≥10 pre-built workflows (client onboarding, project kickoff, etc.)
- Workflow cloning preserves all tasks, rules, and configurations
- Version history shows who changed what and when

---

#### FR-FO-006: Basic Connectors (External System Integration)
**Priority**: High
**Status**: 📋 Planned

**Some connectors:**
- **Google Sheets**: Read/write workflow data, two-way sync
- **Airtable**: Import existing project data, sync task updates
- **Google Workspace**: Calendar integration for deadlines, Drive integration for attachments
- **CRM APIs**: Salesforce, HubSpot, Pipedrive integration (bidirectional)
- **Communication**: Communication notifications for task assignments, communication commands for updates
- **Notion**: Import existing project data, sync task updates, etc.
- **Asana**: Import existing project data, sync task updates, etc.
- **Trello**: Import existing project data, sync task updates, etc.
- **Jira**: Import existing project data, sync task updates, etc.
- **Monday.com**: Import existing project data, sync task updates, etc.
- **Slack**: Import existing project data, communication commands for updates, sync comms updates, etc.
- **Gantt**: Import existing project data, sync task updates, etc.
- **etc**: Import any existing project data, communication for updates, sync task updates, etc.

**Some Acceptance Criteria:**
- OAuth 2.0 authentication for all third-party integrations
- Sync frequency configurable (real-time, hourly, daily)
- Error handling with retry logic and user notifications
- Data mapping UI (match external fields to Flow OS schema)
- Sync logs accessible for debugging failed syncs

---

### Could-Have Features (Month 4-6)

#### FR-FO-007: Replay and Synthesis Comparison
**Priority**: Mid
**Status**: 📋 Planned

**Requirements:**
- Time-travel debugging: Reconstruct workflow state at any point in time
- Diff comparison: Show before/after states for any state change
- "What-if" analysis: Simulate rule changes on historical data
- Audit trail export: Generate compliance reports showing all changes

**Acceptance Criteria:**
- Can replay any workflow from any date in <5 seconds
- Visual diff viewer highlights changes between states
- Simulation mode doesn't affect production data
- Compliance reports include all required fields (who, what, when, why)

---

## 3.2 Exo Academy - Knowledge Synthesis Department

**Core Value**: **Central Bridge Namespace**. Acts as the connector for all other namespaces, defeating organizational fragmentation, alongside knowledge synthesis and proactive transfer. Provides "context layer" for the entire Exo ecosystem.

**Primary Objective**: Convert raw institutional data into actionable, synthesized knowledge (podcasts, briefs, Q&A) to facilitate pro-active knowledge transfer. With additional features not mentioned here. Exo Academy can also serve as a "knowledge synthesis department".

### Must-Have Features (NON-NEGOTIABLE for MVP)

#### FR-EA-001: Multi-Source Document Ingestion with Docling
**Priority**: CRITICAL - Flagship feature
**Status**: 🔄 In Development

**Requirements:**
- **Supported Formats**: PDF (with OCR), DOCX, XLSX, PPT, images, website URLs
- **Docling Parser**: MIT-licensed enterprise document parser converts to structured JSON
- **Table Extraction**: Preserve table structure and visual hierarchies
- **Multi-Document Upload**: Support 2-50 files per notebook
- **Storage**:[**Stil TBD**] Cloudflare R2 or S3 for original documents, Supabase for parsed JSON

**Acceptance Criteria:**
- ✅ Parse success rate >95% for real-world documents (including scanned PDFs)
- ✅ Table extraction maintains row/column relationships
- ✅ OCR accuracy >90% for scanned documents (English text)
- ✅ Upload→parsed result in <30 seconds per document (average)
- ✅ Each upload creates diff: `before: {}` → `after: {doc_metadata}` → `why: "user annotation"`

---

#### FR-EA-002: NotebookLM-Style Knowledge Synthesis
**Priority**: CRITICAL - Core value proposition
**Status**: 🔄 In Development

**Requirements:**
- **Cross-Document Synthesis**: AI identifies themes, connections, and insights across all notebook sources
- **Multi-Format Output**:
  1. **Audio Podcast** (MP3, 10-30 min): Conversational explanation with multiple AI voices
  2. **Executive Brief** (PDF/Markdown, 2 pages): Key themes, insights, recommendations with citations
  3. **Q&A Notes** (Interactive): 20-40 question-answer pairs grounded in source material
  4. **Source Map** (Visual): Document relationships and cross-references
- **Grounding**: All claims include source citations (document name, page number)

**Acceptance Criteria:**
- ✅ Synthesis completes in <10 minutes for 10-document notebook
- ✅ Podcast audio quality suitable for commute listening (clear, engaging, <30 min)
- ✅ Executive brief includes ≥5 key insights with specific source citations
- ✅ Q&A notes answer questions accurately based on source material (no hallucinations)
- ✅ Source map shows document connections visually (graph or network diagram)

---

#### FR-EA-003: Abstraction Layer for Provider Flexibility
**Priority**: CRITICAL - Future-proofing
**Status**: 🔄 In Development

**Requirements:**
- **NotebookService Interface**: Abstracts provider-specific implementations
- **Supported Providers**:
  1. **Google NotebookLM API** (Primary): Hosted, fastest, pay-per-synthesis
  2. **OpenNotebook** (Secondary): MIT-licensed, self-hosted, compute-only cost
  3. **Custom Provider** (Future): Fine-tuned models for specific domains
- **Unified Output**: Same JSON schema regardless of provider
- **Hot-Swappable**: Change provider via environment variable without code changes
- **Micro1's API**: Implement API calls to (Aura) AI Recruiter
- **Micro1's API**: Implement API calls to (Aura) AI Candidate [may share API with Recruiter]
- **Micro1's API**: Implement API calls to (Aura) AI Interviewer [may share API with Recruiter]
- **TTS Services**: Implement API calls to (chatterbox [resemble-ai.github.io/chatterbox]) TTS Services
- **STT Services**: Implement API calls to (resemble-ai.github.io/) STS Services
**Acceptance Criteria:**
- ✅ Provider swap requires zero code changes (only config update)
- ✅ Output format identical across all providers
- ✅ Automatic fallback: If primary provider fails, try secondary
- ✅ Cost tracking per provider (for ROI analysis)
- ✅ Performance monitoring: Track synthesis time and quality by provider

---

#### FR-EA-004: Diffs-Based Architecture (Namespace: 'academy')
**Priority**: CRITICAL - Integration with Flow OS
**Status**: 🔄 In Development

**Requirements:**
- All Academy actions stored as diffs with `namespace='academy'`
- **Diff Types**:
  - `entity_type='notebook'`, `event='created'`: New notebook initiated
  - `entity_type='source'`, `event='uploaded'`: Document added to notebook
  - `entity_type='output'`, `event='generated'`: Synthesis completed (podcast/brief)
  - `entity_type='annotation'`, `event='added'`: User explains synthesis purpose
- **No Separate Tables**: Academy uses same diffs/annotations/rules tables as Flow OS
- **Cross-Product Intelligence**: Academy diffs queryable alongside Flow OS diffs

**Acceptance Criteria:**
- ✅ Every Academy action logged as diff within <1 second
- ✅ Academy diffs filterable by `namespace='academy'`
- ✅ Users can annotate why synthesis matters (mandatory for activation)
- ✅ Rules engine can trigger on Academy events (e.g., auto-tag uploaded documents)
- ✅ Cross-namespace queries work (e.g., "synthesize all Flow OS project retrospectives")

---

### Should-Have Features (Month 2-3)

#### FR-EA-005: OpenNotebook Self-Hosted Option
**Priority**: High
**Status**: 📋 Planned

**Requirements:**
- Docker container deployment on Railway/Fly.io
- Full synthesis capability without external API calls
- Cost optimization for high-volume clients (compute-only vs. per-synthesis fees)
- Data sovereignty compliance (self-hosted = no data leaves client infrastructure)

**Acceptance Criteria:**
- Deployment guide enables setup in <1 hour
- Synthesis quality comparable to Google NotebookLM (blind A/B test)
- Cost <$0.10 per synthesis for high-volume usage (vs. $0.30 with Google)
- Suitable for enterprise clients requiring on-premise deployment

---

#### FR-EA-006: Knowledge Graph Visualization
**Priority**: Medium
**Status**: 📋 Planned

**Requirements:**
- Visual timeline of all notebooks (by team, topic, time)
- Graph showing document relationships (shared concepts, citations)
- Clickable nodes drill into specific documents or notebooks
- Insight extraction: AI identifies recurring themes across notebooks

**Acceptance Criteria:**
- Graph renders for 100+ notebooks in <3 seconds
- Users can filter by team member, date range, topic tags
- Recurring themes highlighted automatically (≥3 mentions = pattern)
- Export graph as image (PNG) for presentations

---

## 3.3 Deal OS - Revenue Department (Specifications Summary)

### Must-Have Features (Post-Flow OS PMF)

**FR-DO-001: AI Lead Intelligence & Scoring**
- Automatic lead enrichment from external data sources
- Predictive scoring (0-100) based on firmographics, behavior, historical conversions
- Lead routing: High-scoring leads auto-assigned to top performers

**FR-DO-002: Contextual Sales Assistant**
- Call recording integration (Zoom, Teams, Google Meet)
- AI-generated call summaries with action items
- Personalized follow-up scripts based on conversation content
- Deal risk alerts (sentiment analysis, commitment language detection)

**FR-DO-003: Predictive Revenue Forecasting**
- Multi-variable forecasting (deal stage, history, market factors)
- Scenario planning ("what-if" pricing changes)
- Early warning system (deals at risk of slipping/losing)
- Revenue recognition automation

---

## 3.4 Exo Launch - Creative Department (Specifications Summary)

### Must-Have Features (Post-Deal OS Launch)

**FR-EL-001: AI Hero Scene Production Studio**
- AI video generation with cinematic quality
- Character creation and animation
- Multiple format output (16:9, 9:16, 1:1)

**FR-EL-002: Multi-Format Content Repurposing**
- Single input → 10+ platform-specific variations
- Automated caption and hashtag generation
- Performance-based optimization recommendations

**FR-EL-003: Brand Guideline Enforcement**
- Automatic compliance checking against brand guidelines
- Color palette, typography, logo usage validation
- Approval workflow with version control

---

## 3.5 Exo AI - Command Center (Integrated Across All Products)

**FR-AI-001: Predictive Task Prioritization**
- AI ranks daily tasks by importance (deadline, dependencies, impact)
- Adaptive learning based on user behavior and outcomes
- Notification system for urgent items

**FR-AI-002: Deal Scoring & Forecasting**
- Real-time deal close probability
- Revenue forecast accuracy >90%
- Churn risk prediction for existing clients

**FR-AI-003: Natural Language Interface**
- Voice commands for common actions ("Show me this week's blocked tasks")
- Conversational queries across all data ("Why did Deal X close?")
- Smart suggestions based on context

---

# 4. Technical Constraints & Integrations

## 4.1 Core Technology Stack

### Overview

Needed to be done: Update Tech Details: Align with skeleton: Add FastAPI reflex core, exact schemas (diffs/annotations/rules/workflows), "build once, branch forever." (Clerk for auth, but optional supabase fallback). Add "rules/retrieval first, LLM optional" and prediction evolution table.

### 1. Supabase Postgres Schema (the eternal source of truth)

-- 1. Every single atomic change in the universe
create table diffs (
  id           bigint primary key generated by default as identity,
  client_id    uuid        not null references auth.users,     -- your customer
  namespace    text        not null,                           -- sales | ops | brand | hr | finance
  entity_id    text        not null,                           -- lead_abc123 | campaign_q4 | employee_alice
  event        text        not null,                           -- status=qualified | budget=spent | post=published
  value_before jsonb,
  value_after  jsonb,
  metadata     jsonb       default '{}'::jsonb,               -- optional context (user_agent, ip, etc.)
  actor_id     uuid,                                           -- who or what triggered it (human or agent)
  created_at   timestamptz not null default now()
);

-- 2. Human "why" annotations – this is your gold label table
create table annotations (
  id           bigint primary key generated by default as identity,
  diff_id      bigint      not null references diffs(id) on delete cascade,
  client_id    uuid        not null,
  author_id    uuid        not null,
  why          text        not null,                           -- "wrong champion", "budget freeze", "creative sucked"
  sentiment    int         check (sentiment between -1 and 1),     -- -1 regret, 0 neutral, 1 good surprise
  created_at   timestamptz not null default now()
);

-- 3. Tiny rule engine – lives entirely in Postgres + Python
create table rules (
  id           bigint primary key generated by default as identity,
  client_id    uuid        not null,
  namespace    text        not null,
  name         text        not null,
  trigger_json jsonb       not null,    -- JSONPath / simple query that matches diffs
  action       text        not null,    -- "notify", "block", "auto_tag", "predict"
  payload      jsonb       default '{}'::jsonb,
  active       boolean     default true,
  created_at   timestamptz default now()
);

-- Indexes you will thank yourself for at 50 M+ rows
create index ix_diffs_client_time    on diffs(client_id, created_at desc);
create index ix_diffs_namespace      on diffs(client_id, namespace, created_at desc);
create index ix_diffs_entity         on diffs(client_id, namespace, entity_id);
create index ix_diffs_gin            on diffs using gin(namespace, entity_id, event);  -- for fast rule matching
create index ix_annotations_diff     on annotations(diff_id);
```

### 2. FastAPI Reflex Core (“the arc”) – 200 lines max, runs forever

```python
# app/main.py
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from supabase import create_client
import asyncio
import json
import os

supabase = create_client(os.getenv("SUPABASE_URL"), os.getenv("SUPABASE_KEY"))
app = FastAPI()

# In-memory rule cache per client (refreshed every 30s)
rule_cache = {}

async def refresh_rules(client_id: str):
    rules = supabase.table("rules").select("*").eq("client_id", client_id).eq("active", True).execute()
    rule_cache[client_id] = rules.data

# One realtime listener per client (spawned on first connection)
async def listen_client(client_id: str):
    channel = supabase.realtime.channel(f"client-{client_id}")
    channel.on_postgres_changes(
        event="*",
        schema="public",
        table="diffs",
        filter=f"client_id=eq.{client_id}"
    )(lambda payload: asyncio.create_task(handle_diff(payload)))
    await channel.subscribe()

async def handle_diff(payload):
    diff = payload["data"]
    client_id = diff["client_id"]
    rules = rule_cache.get(client_id, [])

    for rule in rules:
        if matches(diff, rule["trigger_json"]):
            await execute_action(diff, rule)

def matches(diff: dict, trigger: dict) -> bool:
    # Tiny JSONPath-like matcher – good enough for 99 % of cases
    # e.g. trigger = {"namespace": "sales", "event": "status=qualified"}
    for k, v in trigger.items():
        if diff.get(k) != v:
            return False
    return True

async def execute_action(diff: dict, rule: dict):
    # For now: just post prediction / alert back into diffs table
    # Later: call LLM, send Slack, etc.
    if rule["action"] == "predict":
        prediction = simple_deterministic_predict(diff, rule["payload"])
        supabase.table("diffs").insert({
            "client_id": diff["client_id"],
            "namespace": diff["namespace"],
            "entity_id": diff["entity_id"],
            "event": "prediction=deal_close_in_days",
            "value_after": {"days": prediction},
            "actor_id": None  # system
        }).execute()

def simple_deterministic_predict(diff: dict, config: dict) -> int:
    # Example: "if lead went to proposal → average close in 14 days"
    client_id = diff["client_id"]
    namespace = diff["namespace"]
    entity_id = diff["entity_id"]
    
    history = supabase.table("diffs")\
        .select("created_at")\
        .eq("client_id", client_id)\
        .eq("namespace", namespace)\
        .eq("entity_id", entity_id)\
        .like("event", "status=closed%")\
        .order("created_at", desc=True)\
        .limit(20)\
        .execute()
        
    if history.data:
        avg_days = 14  # replace with real avg later
        return avg_days
    return 30
```

You never touch the schema again. Ever.

### One-command deploy (what I actually run in prod)

```bash
# .env
SUPABASE_URL=https://xyz.supabase.co
SUPABASE_KEY=...
POSTGRES_URL=postgresql://postgres:...@db.supabase.co:5432/postgres

# docker-compose.yml
version: "3.9"
services:
  arc:
    build: .
    environment:
      
***
That’s it. 
Later add BRMS/DP (Business Rule Management System/Decision Platform), LLM, etc.
***
Last update: 2026-01-17

### Frontend Architecture

**Framework**: Next.js 14+ (App Router)
- **Why**: React-based, server-side rendering, API routes, TypeScript support, Vercel deployment
- **Build Tool**: Turbopack (faster than Webpack)
- **Styling**: Tailwind CSS + shadcn/ui component library
- **State Management**: React Context + TanStack Query (React Query) for server state
- **Forms**: React Hook Form + Zod validation
- **Real-time**: Supabase Realtime subscriptions via WebSockets

**Deployment**: TBD (Most likely hybrid cloud, BYOC strategy or guidied BYOC strategy) | current: Vercel
- **Cost**: TBD
- **Features**: Automatic deployments, preview environments, edge functions, analytics
- **DNS**: Managed via Vercel or Cloudflare
- **Domains**: exoent.co = company website, exoflowos.com = landing page/marketing, access.exoflowos.com = product, [ (following subdomains are not yet implemented) api.exoflowos.com = API, docs.exoflowos.com = documentation, blog.exoflowos.com = blog, support.exoflowos.com = support]

---

### Backend Architecture

**Database**: Supabase (PostgreSQL 15)
- **Why**: Managed Postgres, real-time subscriptions, built-in auth, generous free tier
- **Cost**: $0/month (Free tier: 500MB DB, 1GB transfer) → $25/month (Pro: 8GB DB, 50GB transfer)
- **Features**: Row-level security (RLS), real-time subscriptions, RESTful API auto-generation
- **Backup**: Daily automated backups (retained 7 days on Pro tier)
- **Scaling**: Vertical scaling (increase instance size), read replicas, connection pooling

**Authentication**: Clerk (Optional)
- **Why**: Best-in-class auth UX, OAuth providers, MFA support, user management dashboard
- **Cost**: $0/month (Free: 5,000 MAUs) → $25/month (Pro: 10K MAUs + advanced features)
- **Features**: Social login (Google, GitHub, LinkedIn), MFA, session management, webhooks

**File Storage**: Cloudflare R2 or AWS S3
- **R2 Advantages**: 10x cheaper egress ($0 vs. $0.09/GB), S3-compatible API
- **Use Cases**: Document uploads (Academy), creative assets (Launch), attachments (Flow OS)
- **Cost**: $0.015/GB/month storage, $4.50/million Class A operations

---

### API & Integration Layer - [**STILL TBD**]

**Backend API**: FastAPI (Python 3.11+)
- **Why**: Async/await support, automatic OpenAPI docs, type hints, performance
- **Use Cases**: Reflex Arc engine, rules evaluation, AI model integrations
- **Deployment**: Railway or Fly.io (containerized)
- **Cost**: $5-20/month depending on compute needs

**API Gateway**: Optional (Kong or AWS API Gateway) - Phase 2+
- **Why**: Rate limiting, authentication, request routing, analytics
- **Features**: Per-client rate limits, API key management, usage analytics

**Webhooks**: Supabase Edge Functions or Vercel API routes
- **Incoming**: Handle events from external systems (CRM, Slack, Google Calendar)
- **Outgoing**: Send events to client webhooks (deal created, task completed)

---

class AIService(ABC):
    @abstractmethod
    async def complete(self, prompt: str, model: str) -> str:
        pass

class ClaudeProvider(AIService):
    async def complete(self, prompt: str, model: str ="claude-sonnet-4.5") -> str:
        # Anthropic API integration
        pass

class OpenAIProvider(AIService):
    async def complete(self, prompt: str, model: str="gpt-4-turbo") -> str:
        # OpenAI API integration
        pass
```

**Cost Management**:
- TBD

---

### Infrastructure & DevOps

**Hosting**: [**STILL TBD**]
- **Frontend**: Vercel (serverless edge functions)
- **Backend API**: Railway or Fly.io (containers)
- **Database**: Supabase (managed Postgres)
- **File Storage**: Cloudflare R2

**Monitoring & Observability**:
- **Application Monitoring**: Sentry (error tracking, performance monitoring)
- **Logs**: Better Stack (formerly Logtail) or DataDog
- **Uptime**: UptimeRobot or Pingdom (page load time, API availability)
- **Metrics**: Prometheus + Grafana (custom dashboards) - Phase 2+

**CI/CD Pipeline**:
- **Version Control**: GitHub
- **Automated Testing**: GitHub Actions (run tests on every PR)
- **Deployments**: Vercel (frontend automatic), Railway/Fly.io (backend via Docker)
- **Database Migrations**: Supabase CLI + version-controlled SQL files

---

## 4.2 Database Architecture

### Schema Design Principles

1. **Eternal Foundation**: Core schema (diffs, annotations, rules) never changes
2. **Namespacing**: New products = new namespace values, not new tables
3. **Multi-Tenancy**: `client_id` on all tables for data isolation
4. **Append-Only Diffs**: No updates/deletes to diffs table (immutable audit log)
5. **JSONB Flexibility**: Use JSONB for schema-less data (value_before, value_after, metadata)

### Core Tables (5 Tables - Eternal Foundation)

**See:** [Flow OS - Database Schema.sql](../01-FLOW-OS/Flow%20OS%20-%20Database%20Schema.sql) for complete SQL DDL

```sql
-- 1. Diffs: Universal State Change Log
CREATE TABLE diffs (
  id BIGINT PRIMARY KEY,
  client_id UUID NOT NULL,
  namespace TEXT NOT NULL,  -- 'flow_os', 'academy', 'deal_os', 'exo_launch'
  entity_id TEXT NOT NULL,
  event TEXT NOT NULL,
  value_before JSONB,
  value_after JSONB,
  metadata JSONB DEFAULT '{}'::jsonb,
  actor_id UUID,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Annotations: Human "Why" Explanations
CREATE TABLE annotations (
  id BIGINT PRIMARY KEY,
  diff_id BIGINT NOT NULL REFERENCES diffs(id),
  client_id UUID NOT NULL,
  author_id UUID NOT NULL,
  why TEXT NOT NULL,
  sentiment INT CHECK (sentiment BETWEEN -1 AND 1),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Rules: Reflex Arc Triggers
CREATE TABLE rules (
  id BIGINT PRIMARY KEY,
  client_id UUID NOT NULL,
  namespace TEXT NOT NULL,
  name TEXT NOT NULL,
  trigger_json JSONB NOT NULL,
  action TEXT NOT NULL,
  payload JSONB DEFAULT '{}'::jsonb,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Workflows: Process Checklists
CREATE TABLE workflows (
  id BIGINT PRIMARY KEY,
  client_id UUID NOT NULL,
  namespace TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Tasks: Workflow Steps
CREATE TABLE tasks (
  id BIGINT PRIMARY KEY,
  workflow_id BIGINT NOT NULL REFERENCES workflows(id),
  name TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'pending',
  assigned_to UUID,
  due_date TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Performance Optimization

**Critical Indexes**:
```sql
-- Diffs table (most queried)
CREATE INDEX ix_diffs_client_time ON diffs(client_id, created_at DESC);
CREATE INDEX ix_diffs_namespace ON diffs(client_id, namespace, created_at DESC);
CREATE INDEX ix_diffs_entity ON diffs(client_id, namespace, entity_id);
CREATE INDEX ix_diffs_gin ON diffs USING GIN(namespace, entity_id, event);

-- Annotations (for knowledge search)
CREATE INDEX ix_annotations_diff ON annotations(diff_id);
CREATE INDEX ix_annotations_client ON annotations(client_id, created_at DESC);
```

**Query Optimization**:
- Partition diffs table by `created_at` (monthly partitions) for 100M+ row datasets
- Use materialized views for expensive aggregations (dashboard metrics)
- Connection pooling via PgBouncer for high-concurrency scenarios

---

## 4.3 API Design Patterns [**STILL TBD**]

### RESTful Conventions

**Base URL**: `https://api.exoent.co/v1`

**Authentication**: Bearer token (JWT from Clerk)
```
Authorization: Bearer <jwt_token>
```

**Versioning**: URL-based (`/v1/`, `/v2/`)

**Response Format**: JSON with consistent structure
```json
{
  "data": { /* payload */ },
  "meta": {
    "timestamp": "2026-01-15T10:30:00Z",
    "request_id": "uuid"
  },
  "error": null  // or { "code": "ERR_CODE", "message": "Description" }
}
```

### Key API Endpoints

**Flow OS - Workflows**:
- `GET /v1/workflows` - List all workflows (with pagination)
- `POST /v1/workflows` - Create new workflow
- `GET /v1/workflows/:id` - Get workflow details
- `PATCH /v1/workflows/:id` - Update workflow
- `DELETE /v1/workflows/:id` - Archive workflow (soft delete)

**Flow OS - Tasks**:
- `GET /v1/workflows/:id/tasks` - List tasks in workflow
- `POST /v1/workflows/:id/tasks` - Create task
- `PATCH /v1/tasks/:id` - Update task status
- `POST /v1/tasks/:id/annotations` - Add "why" annotation

**Exo Academy - Notebooks**:
- `POST /v1/academy/notebooks` - Create notebook
- `POST /v1/academy/notebooks/:id/sources` - Upload document
- `POST /v1/academy/notebooks/:id/synthesize` - Generate podcast/brief
- `GET /v1/academy/notebooks/:id/outputs` - Get synthesis results

**Diffs (Universal)**:
- `GET /v1/diffs` - Query diffs (filter by namespace, entity_id, time range)
- `POST /v1/diffs` - Create diff (rarely used directly—created by other operations)

### Rate Limiting

**Tier-Based Limits**:
- **Free Tier**: 100 requests/minute, 1,000/hour, 10,000/day
- **Pro Tier**: 500 requests/minute, 5,000/hour, 50,000/day
- **Enterprise**: 2,000 requests/minute, 20,000/hour, 200,000/day

**Response Headers**:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 87
X-RateLimit-Reset: 1642248000
```

---

# 5. UI/UX Requirements

## 5.1 Design System: Liquid Glass UI

### Design Philosophy

**Apple-Inspired Glassmorphism**: Premium, tactile digital experiences that feel natural, alive, and responsive. Glass elements create depth, translucency, and dynamic color adaptation.

### Core Visual Properties

1. **Translucency & Blur**
   - Frosted glass effect with 20px blur
   - Background content visible but not distracting
   - Dynamic opacity (10-30% depending on background)

2. **Light & Color Adaptation**
   - Glass refacts underlying colors
   - Automatic text/icon color flip (black↔white) for readability
   - Toolbar over red becomes reddish, over white becomes whiter

3. **Rounded Corners**
   - All glass components: 8-16px border-radius
   - Mirrors hardware curves for cohesive feel

4. **Responsive Depth & Feedback**
   - Hover: Subtle glow or illumination shift
   - Focus: Increase opacity ("thicken")
   - Idle: More translucent ("thin")
   - Animations: 0.3s cubic-bezier(0.4, 0, 0.2, 1)

### CSS Implementation

```css
/* Base Liquid Glass Component */
.liquid-glass {
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

/* Dark Mode Variant */
.liquid-glass-dark {
  background: linear-gradient(135deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.2) 100%);
  backdrop-filter: blur(20px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Interactive State */
.liquid-glass:hover {
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.08) 100%);
  border-color: rgba(255, 255, 255, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 5.2 Color Palette

### Exo Enterprise (Brand Primary)

**Obsidian Black**: `#0A0A0A` - Primary brand, high-contrast text
**Graphite Gray**: `#2F2F2F` - Secondary backgrounds
**Apple Steel Blue**: `#007AFF` - Primary CTAs, links, highlights
**Titanium Silver**: `#B4B4B4` - Borders, subtle accents

### Flow OS (Product Specific)

**Gradient (from→via→to)**:
- Blue-400: `#60A5FA`
- Blue-300: `#93C5FD`
- Emerald-400: `#34D399`

### Deal OS

**Gradient (from→to)**:
- Emerald-300: `#6EE7B7`
- Emerald-600: `#059669`

### Steel

**Metal Palette**:
- Forged Steel: `#7C7C7C`
- Iron Black: `#1E1E1E`
- Silver Gleam: `#C8C8C8`
- Apple Steel Blue: `#007AFF`
- Glassmorphism
**Gold Accent**: Aurum Gold `#D4AF37`

**Laurel Accents**:
- Verdant Laurel: `#4A6A38`
- Olive Deep: `#2F4026`
- Spring Vein: `#89A868`

### Functional Colors (All Products)

- **Success Green**: `#059669` - Success states, positive metrics
- **Warning Orange**: `#D97706` - Attention needed
- **Error Red**: `#DC2626` - Critical alerts
- **Info Blue**: `#4F8FFF` - Information, AI features

---

## 5.3 Typography

**Primary Font**: Inter (400, 500, 600, 700)
- All body text, UI elements, buttons

**Headings**: Sora or Manrope (600, 700, 800)
- Page titles, section headers

**Code/Technical**: JetBrains Mono (400, 500)
- Code blocks, technical content only

**Font Sizes**:
- Display: 32-48px (hero text)
- Heading 1: 24-32px (page titles)
- Heading 2: 20-24px (section headers)
- Heading 3: 16-20px (subsections)
- Body Large: 16px (primary content)
- Body: 14px (secondary content)
- Caption: 12px (metadata, labels)

---

## 5.4 Component Library (shadcn/ui + Custom)

**Core Components**:
- Buttons (primary, secondary, ghost, destructive)
- Input fields (text, textarea, select, multi-select)
- Cards (with Liquid Glass effect)
- Modals/Dialogs (overlay with glass backdrop)
- Navigation (sidebar, top bar, breadcrumbs)
- Tables (sortable, filterable, paginated)
- Charts (real-time metrics using Recharts or Chart.js)
- Toast notifications (success, error, info, warning)

**Custom Components**:
- **Heartbeat Indicator**: Color-coded workflow health (green/yellow/red)
- **Diff Viewer**: Before/after state comparison
- **Annotation Panel**: Inline commenting on diffs
- **Knowledge Graph**: Interactive network visualization (Academy)
- **AI Chat Interface**: Conversational queries (Exo AI)

---

## 5.5 User Flows

### Flow OS - Client Onboarding

1. **New client signs contract** → Deal OS creates client record
2. **Automatic workflow creation** → Flow OS generates "Client Onboarding" workflow from template
3. **Team assignment** → AI suggests team members based on availability/skills
4. **Kickoff meeting scheduled** → Google Calendar integration creates event
5. **Onboarding tasks tracked** → Real-time dashboard shows progress
6. **Completion notification** → Client and team notified when onboarding complete

### Exo Academy - Document Synthesis

1. **User uploads documents** → Drag-and-drop or file picker (2-50 files)
2. **Docling parsing** → Documents converted to structured JSON (30 seconds per doc)
3. **Notebook created** → User adds title, purpose annotation ("why this synthesis matters")
4. **Synthesis initiated** → User selects output format (podcast, brief, Q&A, or all)
5. **AI processing** → NotebookLM or OpenNotebook generates outputs (5-10 minutes)
6. **Results available** → User notified, can listen to podcast or download brief
7. **Knowledge graph updated** → Notebook added to organization's knowledge graph

---

# 6. Business Model & Revenue Architecture

## 6.1 Three-Phase Capability Stack Licensing (BOM/T) Build-Operate-Manage/Transfer

### PHASE 1: BUILD (Project-Based Implementation)

**Purpose**: Embed expertise, implement capabilities, transfer ownership
**Timeline**: 30-90 days
**Payment**: Milestone-based (50% upfront / 40% midpoint / 10% completion)

| Project Tier | Investment | Timeline | What's Included |
|--------------|------------|----------|-----------------|
| **Department Foundation** | $TBD | 30 days | Flow OS + 1 core process + training + 90-day support |
| **Dual Capability Bundle** | $TBD | 45 days | Flow OS + Deal OS integrated + 2 departments + training |
| **Complete Stack** | $TBD | 90 days | Flow OS + Deal OS + Launch + 3 departments + white-label |

**30-Day Guarantee**: 20-40% efficiency lift or client pays only 50% of fee

---

### PHASE 2: OPERATE (Maintenance Retainers)

**Purpose**: Embed expertise, implement capabilities, we run the show alongside you
**Timeline**: Ongoing post-engagement
**Payment**: Quarterly

#### Founding Member Program (First 100 Clients - Lock 3-Year Rates)

| Tier | Monthly | Annual (Save 17%) | What's Included |
|------|---------|-------------------|-----------------|
| **Exo Essentials** | $TBD | $TBD | Platform updates + monthly playbooks + community + self-service support |
| **Exo Accelerator** | $TBD | $TBD | Everything in Essentials + quarterly strategy check-ins + email support (24hr SLA) + 20% off modules |
| **Exo Enterprise** | $TBD | $TBD | Everything in Accelerator + dedicated CSM + on-site visits + white-label + custom playbooks |

**Standard Rates** (Post-100 Clients): $TBD/$TBD/$TBD per month

---

### PHASE 3: MANAGE (Strategic Advisory - Optional) | TRANSFER (SaaS Capabilities/Licensing/Subscription)

**Purpose**: Continuous capability evolution, strategic partnership, SaaS capabilities transfer, Platform updates, new playbooks, community access
**Timeline**: 3-12+ month commitments
**Payment**: Quarterly or yearly retainer | Monthly/Yearly - SaaS Payment

| Advisory Tier | Monthly | Quarterly | What's Included |
|---------------|---------|-----------|-----------------|
| **Capability Evolution** | TBD | TBD | Monthly check-ins + continuous optimization + custom playbooks + **Includes Essentials** |
| **Strategic Partnership** | TBD | TBD | Weekly guidance + transformation office + executive reporting + **Includes Accelerator** |
| **Enterprise Enablement** | TBD | TBD | Embedded fractional AI officer (20hr/week) + multi-department transformation + **Includes Enterprise** |

## 6.2 The "Trojan Horse" Ownership Model (Frozen Core vs. Live Intelligence)

To ensure long-term alignment and recurring value, Exo Enterprise utilizes a hybrid ownership structure:

- **The Frozen Core (Client Owned)**: Upon completion of the Transfer phase, the client receives a license to the specific instance of Flow OS/Deal OS as it exists at that moment. This ensures no vendor lock-in for basic operations.
- **The Live Intelligence (SaaS Paywalled)**: Advanced **Predict/Fix/Replay** capabilities—the AI-driven engine that anticipates bottlenecks, auto-recovers failed workflows, memory features and simulates future scenarios—remain active only via a SaaS subscription.
- **The Twist**: The client owns the "body" (the infrastructure), but Exo provides the "nervous system" (the intelligence). If the subscription lapses, the system remains functional as a static tool but loses its predictive edge and automated self-healing.

---

## 6.3 Financial Principles & Metrics

### Unit Economics

**LTV:CAC Targets**: (TBD)
- Maintenance-Only Client: 6-8:1 (conservative)
- Advisory Upgrade Client: 8-12:1 (target)
- Strategic Partnership: 15-20+:1 (ideal)

**30-Day Cash ≥ CAC** (All Tiers):
- Department Foundation: $TBD upfront > $TBD CAC ✅
- Advisory (quarterly): $TBD upfront > $TBD CAC ✅

**Gross Margin Targets**: (TBD)
- Consulting Projects: 50-70%
- SaaS Maintenance: 80-85%
- Advisory Retainers: 65-75%

**Client Retention**: (TBD)
- Year 1: 85%+ (critical mass)
- Year 2: 90%+ (data gravity kicking in)
- Year 3+: 95%+ (network effects + sunk cost)

**Client Acquisition Cost (CAC)**: (TBD)
- Department: $TBD
- Advisory (quarterly): $TBD

**Customer Lifetime Value (LTV)**: (TBD)
- Department: $TBD
- Advisory (quarterly): $TBD

**Payback Period**: (TBD)
- Department: <1 month
- Advisory (quarterly): <1 month

---

## 6.4 Conditional Guarantees (Risk Reversal)

### Guarantee 1: Operational Readiness (60 Days)
**Promise**: AI department running live workflows in 60 days or we work with you until live and operational. No dead ends.

**Eligibility**:
- Client provides API access to ≥3 systems within Week 1
- Assigns ≥1 dedicated point of contact (<24hr response)
- Team attends ≥80% of training sessions

**Success Criteria**:
- ≥3 workflows automated, generating ≥100 diffs/day
- ≥10 deterministic rules live
- ≥1 client team member certified

---

### Guarantee 2: Measurable Results (90 Days)
**Promise**: ≥20% efficiency gains documented or we work with you until achieved.

**Eligibility**:
- Baseline metrics established Week 1
- Daily system usage (≥5 active users, ≥50 diffs/day)
- ≥50 "why" annotations by Day 60

**Success Criteria**:
- ≥20% improvement in time saved, error reduction, or capacity increase

---

### Guarantee 3: Knowledge Transfer (6 Months)
**Promise**: Team independently operates system or we work with you until achieved.

**Eligibility**:
- Completes certification training
- Assigns ≥1 internal champion (≥5 hrs/week)
- Attempts ≥3 independent modifications

**Success Criteria**:
- ≥1 certified team member can create workflows, modify rules, train others
- Passes independence test (5 tasks without Exo support)

---

# 7. Go-to-Market Strategy

## 7.1 Lead Magnet Ecosystem (Brand New Lead Magnets should be rotated or repurposed to keep the market interested)

### Lead Magnet 1: AI Readiness Scorecard (ToFu)
**Format**: 5-minute interactive assessment
**Questions**: 5 dimensions (operational complexity, process documentation, team capacity, AI adoption, growth stage)
**Output**: Personalized 0-100 scorecard with capability breakdown
**CTA**: "Get Your Free Custom AI Roadmap"
**Distribution**: LinkedIn ads, organic posts, partner co-marketing
**Target**: 500 completions/month at $2/lead

---

### Lead Magnet 2: Custom AI Roadmap (MoFu)
**Format**: 30-minute 1:1 consultation
**Deliverable**: 3-page PDF (current state, top 3 opportunities, 90-day timeline, ROI projection)
**Qualification**: Completed scorecard, >$2M revenue, >$100K ops budget
**CTA**: "Book Your Blueprint Session"
**Capacity**: 20 roadmaps/month
**Conversion**: 40% roadmap → project proposal

---

### Lead Magnet 3: Department Foundation Workshop (BoFu)
**Format**: 60-minute live group (max 10 participants)
**Content**: Live automation build (client onboarding workflow)
**Positioning**: "Experience Department Building Firsthand"
**CTA**: "Apply for Limited Seats" (creates scarcity)
**Frequency**: 2x/month
**Conversion**: 60% workshop → Blueprint Session

---

## 7.4 Strategic Partnerships

**Target Partners**:
1. **Steel Security Protocol** (Co-Marketing): Leverage Steel Security Protocol's expertise in security and compliance to provide clients with a secure and compliant AI environment.
2. **Steel Card** (Co-Marketing): Leverage Steel Card's perks for employees to provide clients with a secure and profitable affiliate program.
3. **Steel by Exo** (Co-Marketing): Leverage Steel by Exo's luxury experience and brand to provide clients with a preferable partnership discount. As well as a secure and profitable affiliate program they can use to generate revenue while using Exo's platform furthering Steel by Exo's brand reach.
**Goal**: Cross-sell 15-20% of leads. Cross-branding opportunities for internal ecosystem. Cross-branding opportunities for external ecosystem.

---

# 8. Competitive Differentiation

## 8.1 vs. Traditional Consultancies

| Consultancies | Exo Enterprise |
|---------------|----------------|
| Deliver recommendations | Build & install departments |
| Create dependency | Transfer capability |
| No tools provided | Complete tech stack included |
| One-time engagement | Ongoing evolution |
| $150K-$500K/year retainers | $TBD build + optional advisory |

---

## 8.2 vs. SaaS Project Management Tools

| Generic PM Tools | Exo Flow OS |
|------------------|-------------|
| Generic task management | Industry-specific workflows & fragmentation killer |
| Manual setup required | AI-powered automation out-of-box |
| Just software | Consulting + software + training |
| One-size-fits-all | Customized department build |
| No knowledge transfer | Embedded expertise + playbooks |

---

## 8.3 vs. AI Point Solutions

| Point Solutions | Exo Ecosystem |
|-----------------|---------------|
| Narrow use case (email AI, meeting notes) | Complete department operating systems |
| 15+ disconnected tools | Unified platform (Flow OS, Deal OS, Launch, Academy) |
| No institutional knowledge capture | Diffs + annotations = data gravity |
| Vendor lock-in | Abstraction layers + frozen instance ownership |

| Static documentation | *Academy: Central bridge namespace & proactive transfer* |

---

## 8.4 vs. AI Staffing & Talent Platforms

| AI Staffing (Micro1, Zara) | Exo Talent Integration |
|----------------------------|------------------------|
| Talent without context | Talent embedded in Flow OS |
| Pure placement model | Workflow-integrated staffing |
| Manual skill vetting | System-first hiring & Academy-driven onboarding |

---

## 8.5 The Competitive Moat: Diffs & The "Why"

- **Central Bridge Namespace**: Exo Academy acts as the organizational "namespace," facilitating proactive knowledge transfer between human intent and AI execution across all other namespaces, defeating fragmentation and enabling institutional growth.
- **Diffs as Data Gravity**: Exo captures the *diffs* (changes) and the *whys* (human judgment) of every decision, creating a data gravity moat. **Human judgment capture is non-optional**, making it the ultimate differentiator for long-term business growth.
- **Dogfooding Proof**: Our own growth is powered by the same systems we provide, proving the efficiency lift through internal dogfooding with **Exo Fulfillment/Delivery OS**. 

---

# 9. Success Metrics & KPIs (Aspirational Targets - TBD post-validation)

## 9.1 Business Health Metrics (Projections)

**Financial (Targets):**
- Monthly Recurring Revenue (MRR)
- Annual Recurring Revenue (ARR)
- Customer Acquisition Cost (CAC)
- Lifetime Value (LTV)
- LTV:CAC Ratio (target: >8:1)
- Gross Margin (target: 70%+)
- Burn Rate (target: $0 - self-funded from consulting)

**Customer Success (Targets):**
- Net Promoter Score (target: >8/10)
- Customer Retention Rate (target: 85% Year 1, 90% Year 2, 95% Year 3+)
- Time to Value (target: <30 days to first workflow automated)

---

## 9.2 Product Metrics

**Flow OS**:
- Workflows automated per client (target: ≥3 by Week 3)
- Time saved per week (target: ≥20 hours)
- Error reduction (target: ≥30%)
- "Why" annotations per client (target: ≥200 in 60 days)

**Exo Academy**:
- Notebooks created per client (target: ≥20 in 90 days)
- Podcast completion rate (target: ≥60%)
- Knowledge graph depth (target: ≥100 document cross-references by Month 3)

**Deal OS** (Post-Launch):
- Forecast accuracy (target: >90%)
- Sales cycle reduction (target: 30-40% shorter)
- Close rate improvement (target: 25%+ increase)

---

# 10. Risk Management & Mitigation

## 10.1 The Transfer Trap Risk

**Definition**: Capability transfer works TOO WELL—clients become self-sufficient and cancel subscriptions, perceiving they "own everything." As well as the risk of clients not understanding the value of the system and cancelling their subscriptions post-build and post-transfer.

**Mitigation Strategies**:
1. **30-Day Superiority Benchmark**: Establish operational dominance and clear ROI within the first 30 days to make the system indispensable before the "Build" is perceived as complete.
2. **Academy as Strategic Catalyst**: Leverage Exo Academy to turn the "Transfer Trap" into a continuous loop of value, where the Academy feeds the OS with ongoing institutional intelligence. Most importantly, the Academy is the key - to the long-term retention strategy and churn post-transfer. As well as a way to generate revenue through the Academy's courses and content, in a way that benefits the client and Exo in a fast paced AI environment.
3. **Living Intelligence Narrative**: "You own the car, but the GPS needs updates for new roads"
4. **Data Gravity Reinforcement**: By Month 10-12, clients have 500K-2M proprietary diffs; rules remain cloud-hosted
5. **Continuous Value Delivery**: Monthly new rule packs, quarterly integrations, updates to namespaces and on-going capability evolution.
6. **Advisory Upsell**: 30% conversion target to MANAGE phase within 12 months
7. **Network Effects**: Rule-pack marketplace (passive income), community benefits tied to subscription

**Target Retention**: >
---

## 10.2 Technical Risks

**Risk: Database Performance Degradation**
- **Mitigation**: Partitioning strategy (monthly partitions), materialized views, connection pooling
- **Threshold**: 95th percentile query time >500ms triggers optimization

**Risk: AI Provider Outage**
- **Mitigation**: Multi-provider abstraction layer, automatic fallback, cached responses
- **SLA**: 99.5% uptime (max 3.65 hours downtime/month)

**Risk: Data Loss**
- **Mitigation Thoughts**: Daily automated backups (7-day retention), point-in-time recovery, multi-region replication (Enterprise tier)

---

## 10.3 Market Risks

**Risk: ICP Not Validated**
- **Mitigation**: Pilot phase with SMBs for survival with "credit card and pulse" for cash flow, 5-10 agencies before scaling GTM spend
- **Pivot Threshold**: If <20% close rate after 50 qualified leads, revisit ICP

**Risk: Competitive Response**
- **Mitigation**: Data gravity moat (2-20M diffs per client = 70-90% switching cost)
- **Monitoring**: Track competitor launches via Crunchbase, adjust positioning quarterly

---

# 11. Roadmap & Phasing (Gated by Validation Milestones)

## 11.1 Phase 1: Core OS + EXA Prototype (Validation Milestone)
**Company stage will be updated progressively. Status=Very_Early**
**Phasing gated by validation, not fixed dates.**

**Core Software Main Focus As of Now**: Build the core OS
**MVP Focus**: The "Tiny Loop" (Automated Ticket Closure) using **Exo Academy (EXA)** as the initial namespace.

**Build Order**:
1. **Python Arc Prototype**: CLI-based Reflex Arc (SENSE→REACT→REMEMBER) for ticket resolution logic.
2. **Next.js/Supabase**: Web dashboard and persistent storage for the 5-table foundation.
3. **Agentic Integration**: Connecting the Python engine to Supabase Edge Functions.
4. **Exo Academy**: Document upload, Docling parsing, NotebookLM synthesis.
5. Then move forward to the namespace strategy.

**Flow OS Dashboard UI**: 
**Status**: ✅ 70% Prototyped at access.exoflowos.com

**Deliverables**:
- 5-table eternal foundation schema (diffs, annotations, rules, workflows, tasks) [Not built yet]
- Reflex Arc engine (SENSE→REACT→REMEMBER) - **The Brain** [Not built yet]
- Basic dashboard UI (heartbeat visualization) [Not built yet]
- **Exo Academy** (NON-NEGOTIABLE): Document upload, Docling parsing, NotebookLM synthesis [Not built yet]

**Success Criteria**:
- 10-20 pilot clients onboarded
- TBD% retention after 6 months
- LTV:CAC ≥5:1

---
## 11.2 Phase 2: Flow OS Expansion (MVP Validation)

**Focus**: Product-market fit validation, operational excellence

**Deliverables**:
- Flow OS workflow manager UI | React Node Style Canvas [Not built yet]
- React Flow-style/or Xyflow (modern fork) **drag canvas**. Nodes = depts (Flow OS, Deal OS, etc.), edges = handoffs (e.g., "sales:deal=won → ops:onboard=true"). Click node → zoom to dept-specific dashboard. *Key feature* for department handoffs/differentiation from competitors. 
- Implementation Notes:
* Use React Flow or Xyflow (modern fork)
* Start simple: 4 nodes (Flow OS, Deal OS, AX, Academy), 2-3 edges showing common handoffs
* Progressive disclosure: Collapsed nodes show health (green/yellow/red), expanded nodes show live metrics

Make it the default landing for HQ page (underneath the main dashboard content [metrics cards and quick view workflows])  
**Success Criteria**: 
- Working department canvas
- Working handoffs between departments
- Working health metrics
- Working live metrics
- Working node expansion
- Working node collapse
- Working node health (green/yellow/red)
- Working node metrics


## 11.2.1 Phase 2.1: Scale & Academy Full Polished Integration

**Focus**: Product-market fit validation, operational excellence

**Deliverables**:
- Flow OS workflow manager UI (CRUD operations) [Not built yet]
- External system connectors (Google Sheets, Slack, Airtable, CRM APIs, etc.) [Not built yet]
- OpenNotebook self-hosted option for Academy [Not built yet]
- Knowledge graph visualization [Not built yet]
- Rule-pack marketplace (APM beta) [Not built yet]

**Success Criteria**:
- 50-100 paying clients
- $500K-$1M ARR
- Churn rate <15%
- NPS >8/10

---

## 11.3 Phase 3: Deal OS Expansion (Validated Namespace Strategy)

**Focus**: Expand namespace strategy, prove multi-product value

**Deliverables**:
- Deal OS MVP (AI lead scoring, call intelligence, revenue forecasting) [Not built yet]
- CRM integrations (Salesforce, HubSpot, Pipedrive) [Not built yet]
- Cross-product intelligence (Deal OS ↔ Flow OS data sharing) [Not built yet]

**Success Criteria**:
- 100-200 clients across Flow OS + Deal OS
- ≥30% of clients using both products
- $2-5M ARR
- Churn rate <10%

---

## 11.4 Phase 4: Launch Integration

**Focus**: Creative department launch, network effects, software growth curve

**Deliverables**:
- Exo Launch MVP (AI hero scene production, multi-format repurposing) [Not built yet]
- Steel Card identity platform [Not built yet]

**Success Criteria**:
- 500+ clients across ecosystem
- $10-30M ARR
- Recurring revenue >70% of total
- Churn rate <5%

## 11.5 Phase 4.1: Recruitment Module Expansion

**Focus**: Prove multi-product value, expand namespace strategy

**Deliverables**:
- Aura AI Recruiter MVP (AI-powered candidate sourcing, interview scheduling, onboarding) [Not built yet]



# 12. Future Ecosystem (Gated post-validation)

## 12.1 Steel Card - Identity & Access Platform

**Status**: 🎨 Beta Parked (Digital MVP Only)

**Core Value**: Unified SSO, reputation system, community access across all Exo products

**Key Features**:
- Single sign-on (SSO) across Flow OS, Deal OS, Launch, Academy
- NFC-enabled physical card (future)
- Tiered membership (Community, Pro, Enterprise)
- Reputation scoring (peer endorsements, contribution tracking)
- Partner network benefits (exclusive offers tied to membership)

**Phasing**: Post-$1M ARR, digital-only initially, physical cards deferred until scale

---

## 12.2 APM (Actionable Playbook Marketplace aka. Rule Packs)

**Status**: 📋 Planned (Post-$1M ARR)

**Core Value**: Monetized playbook sharing, network effects, passive income for contributors

**Key Features**:
- Playbook creation tools with AI assistance
- One-click deployment into Flow OS
- Revenue sharing (30% cut to Exo, 70% to creator)
- Performance analytics and optimization
- Community validation and peer review

**Business Impact**: Creates flywheel—more users → more playbooks → more value → more users

---

## 12.3 The Foundry - Community within the Steel Ecosystem

**Status**: 📋 Planned (Post-$1M ARR)

**Core Value**: Innovation sandbox for steel products/members, beta testing, expert network, collaborative.

**Key Features**:
- Beta testing platform for new features
- Exclusive content and early access

**Strategic Role**: Drives retention, shapes product roadmap, generates word-of-mouth

---

# Appendix: Reference Documents

**This SSOT consolidates information from:**
- [Exo -Comprehensive Product - Part 1.md](./Exo%20-Comprehensive%20Product%20-%20Part%201.md)
- [Exo -Comprehensive Product - Part 2-6.md](./Exo%20-Comprehensive%20Product%20-%20Part%202-6.md)
- [Exo Enterprise - Business Strategy PRD.md](./Exo%20Enterprise%20-%20Business%20Strategy%20PRD.md)
- [Exo Enterprise - Business Shapes Strategy.md](./Exo%20Enterprise%20-%20Business%20Shapes%20Strategy.md)
- [Flow OS - MVP v1.0 Specification.md](../01-FLOW-OS/Flow%20OS%20-%20MVP%20v1.0%20Specification.md)
- [Flow OS - 60 Day Build Roadmap.md](../01-FLOW-OS/Flow%20OS%20-%2060%20Day%20Build%20Roadmap.md)
- [Flow OS - Technical Architecture Deep Dive.md](../01-FLOW-OS/Flow%20OS%20-%20Technical%20Architecture%20Deep%20Dive.md)
- [Flow OS - Database Schema.sql](../01-FLOW-OS/Flow%20OS%20-%20Database%20Schema.sql)
- [AI AURA Recruiter Module.md](../05-EXO-AI/AI%20AURA%20Recruiter%20Module.md)
- [System Architecture Patterns.md](../90-TEMPLATES/System%20Architecture%20Patterns.md)
- [UPDATED-INFO-IMPORTANT.md](../UPDATES-JAN-15/UPDATED-INFO-IMPORTANT.md)

**For specific technical implementation details, refer to individual product folders.** - (USE LIGHTLY, SOME INFO IS INCOMPLETE/OUTDATED)

## Ignore product feature dates/phase numbers - they are not final.
---

**Document Maintenance**:
- Last Updated: January 17, 2026
- Version: 2.2.0 SSOT
- Status: **Company stage will be updated progressively. Status=Very_Early**
- Next Review: March 15, 2026 (quarterly updates)
- Owner: Exo Enterprise Product Team

**Change Log**: See [PRD - CHANGELOG.md](../PRD%20-%20CHANGELOG.md) for version history.

---

**End of Single Source of Truth PRD**

---
## LLM Analysis

**Answer for Exo Flow OS build (as of 2026-01-18)**  
Jay, your proposed changes are **strong and forward-looking**—they intelligently modernize the stack while preserving the PRD's eternal foundation (diffs/regret graph, rules-first Reflex Arc, namespace modularity). I'd adopt ~85% as-is: **Xyflow** (excellent upgrade), **LangGraph** (best-in-class for orchestration), **Composio** (smart for integrations), and Grok-assisted annotations/orchestration. I'd keep Supabase/FastAPI core (no full hybrid needed yet) and Liquid Glass UI (brand continuity). Minor refinements: Start LangGraph/Composio lightweight (optional stubs) to avoid early dependencies; prioritize deterministic rules over agentic layers for MVP speed. This gets a shippable prototype in 4-6 weeks solo, dogfooding the tiny loop + EXA namespace first. LLM analysis (Grok in reasoning nodes) is a great wedge—keeps human judgment non-optional while accelerating "why" capture and predictions.

**Confidence Level**  
0.92 (High: Tool-verified 2026 trends strongly support Composio/LangGraph/FastAPI dominance for agentic AI; Xyflow as React Flow evolution; Supabase realtime fits perfectly. Slight deduction for integration risks in very early stage.)

**Key Caveats**  
- Composio adds a dependency (managed auth/connectors great, but 2026 reviews show it's young/marketing-heavy—potential lock-in or pricing shifts post-free tier).  
- LangGraph shines for complex graphs but can overcomplicate simple Reflex Arc—risk of scope creep if not stubbed early.  
- LLM analysis (Grok prompts) boosts UX but must remain optional/non-core to avoid hallucinations undermining trust/moat.  
- Assumes solo dev with moderate experience; integrations could add 1-2 weeks if auth flows snag.  
- No major architecture breaks—changes enhance, not replace, the skeleton.

**Sub-tasks or Steps Needed**  
Decomposed below for building the prototype.

#### 1. Evaluate Proposed Stack Changes
   - Solution: Greenlight Xyflow (direct React Flow successor—better perf/progressive disclosure for canvas handoffs). Adopt Composio selectively (for 5-10 key connectors like Slack/Gmail/Notion—saves custom code). Add LangGraph for orchestration graphs (nodes: tools/rules/human loops; edges: conditionals). Keep FastAPI primary (2026 trends confirm it's AI backend king—async/Pydantic ideal). Retain Supabase (realtime subscriptions perfect for SENSE layer). Confidence: 0.95 (Tool results: FastAPI/Supabase dominant; Xyflow=React Flow evolved; Composio/LangGraph top-rated).

#### 2. Assess LLM Analysis Integration
   - Solution: Positive—use Grok API in LangGraph nodes for "why" suggestions/predictions (e.g., prompt: "Suggest regret reason from these diffs"). Keeps rules deterministic core; LLM as enhancer for speed/accuracy. Mandatory human approval preserves moat. Confidence: 0.90 (Aligns with PRD optional LLM layer; 2026 comparisons favor LangGraph for LLM orchestration).

#### 3. Decide Non-Changes vs. Expansions
   - Solution: No change to diffs schema/append-only (eternal moat). No full backend hybrid (FastAPI sufficient; Composio as wrapper). Keep Liquid Glass (partial implementation—don't redesign). Expand Reflex Arc via LangGraph (SENSE: Supabase subs; REACT: graph execution; REMEMBER: diff inserts). Confidence: 0.88 (Preserves "build once, branch forever").

#### 4. Personal Plan – What I'd Do Differently/Additionally
   - Solution: Phase 1 deterministic-only (rules + manual annotations) before agentic layers—validates tiny loop faster. Stub Composio/LangGraph (import but disable until Phase 2). Add basic observability Day 1 (logs for rule firings). Dogfood aggressively (use for our delivery tickets). If scaling multi-agent early, benchmark LangGraph vs lighter alternatives (e.g., pure FastAPI loops). Confidence: 0.89 (Prioritizes PRD's rules-first philosophy).

#### Verification
- Logic: Changes accelerate without breaking moat; LLM optional preserves trust.
- Facts: 2026 tools confirm trends (Composio leading integrations; LangGraph tops orchestration; FastAPI/Supabase enduring).
- Completeness: Covers all proposals + risks/timeline.
- Bias: Balanced—enthusiastic on agents but cautious on dependencies (early-stage reality).

#### Synthesized Recommendation (Weighted 0.92 Overall)
Adopt your plan with light gating: Build core skeleton first (Weeks 1-3: Schema + FastAPI arc + Next.js/Xyflow UI). Layer Composio/LangGraph (Weeks 4-6: Integrations + graphs). Use Grok for reasoning nodes from Day 1 (low-risk enhancer). Result: MVP prototype proving Reflex Arc + EXA value, ready for pilot validation.

#### Reflection
Confidence 0.92 >0.8—no retry. Minor weakness: Composio maturity (marketing-heavy results)—mitigate by prototyping one integration first.

This positions Flow OS as cutting-edge 2026 agentic.
---

Thoughts
Summary of Stack [ Exo Flow OS Software + Exo Websites ]

    •    Main B2B App: Supabase (SQL, Stability, Relational Data). [FLow OS]

    •    Sub-Brands/Landing Pages: Convex (Speed, No-Ops, Free Tier).

    •    Steel Mobile/Web App: Convex (Rapid iteration, Real-time UX).

    •    Marketing Tracking: **Post-hog ID** — or shared Google Analytics (across all sites) to track all users. 

    •    Abstract Auth: Clerk (moving to Supabase later is much easier).

    •    Next.js + Supabase: Flow OS B2B SaaS build 

    • **Don't Over-Nest Data: In Convex, it’s tempting to save deeply nested JSON objects. If you plan to move to SQL later, try to keep your data structures flat (like tables). It will make the 2026 migration much simpler.**

The Strategy Breakdown


1. Why Convex over Supabase for Marketing & Speed-to-Market?

    •    Zero Configuration: For marketing sites (lead captures, waitlists, interactive calculators), you don’t want to spend time on SQL migrations. In Convex, you just save an object and the database adapts.

    •    The "Hype" Factor: If your new web/mobile app needs social features (real-time chat, live feeds, presence indicators like "Who's online"), Convex will let you build those in hours, whereas Supabase would take days of configuring listeners.

    •    Free Tier Efficiency: Since you can have up to 20 projects on Convex's free tier, you can host all your sub-brand landing pages for $0 without hitting the "2-project limit" that Supabase enforces.

2. Why Keep the B2B Software on Supabase?

    •    Relational Integrity: B2B software usually involves complex relationships (Companies > Teams > Users > Permissions > Invoices). PostgreSQL (Supabase) is the undisputed king for this. You want the strictness of SQL to ensure a billing error never happens.
---
### PostHog Integration

Integrate PostHog with HTML snippet
Read the docs
1. Add the snippet to your website
required
Add this snippet to your website within the <head> tag. This can also be used in services like Google Tag Manager:

<script>
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group identify setPersonProperties setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags resetGroups onFeatureFlags addFeatureFlagsHandler onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('phc_N1Clw6iwKeyIqhNrxd1cejjCuvKXPtW17bn9h6ZUw9b', {
        api_host: 'https://us.i.posthog.com',
        defaults: '2025-11-30'
    })
</script>
2. Send events
Click around and view a couple pages to generate some events. PostHog automatically captures pageviews, clicks, and other interactions for you.

If you'd like, you can also manually capture custom events:

posthog.capture('my_custom_event', { property: 'value' })

**Note: PostHog API Key = phc_N1Clw6iwKeyIqhNrxd1cejjCuvKXPtW17bn9h6ZUw9b**
---

