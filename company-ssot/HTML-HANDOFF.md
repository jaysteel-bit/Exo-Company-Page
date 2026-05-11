---
type: handoff-checkpoint
purpose: Running session state doc for AI agents and collaborators. Update at the end of each significant work session.
last_updated: 2026-05-11
updated_by: Jay Steel + Claude (Sonnet 4.6)
---

# Exo Enterprise — (HTML Website [NOT OPERATIONS]) Handoff Doc

> Read this first when picking up any AI session on this project. It tells you what's been done, what's live, what's pending, and where to start.

---

## What This Is

A checkpoint document. Updated at the end of major work sessions so the next agent or person can pick up cold without losing context. Not a planning doc — a state snapshot.

---

## Last Session Summary (2026-05-11) — Strategic Analysis + Delivery OS

**What we built / completed:**

**Strategic Analysis (full company + sub-brands):**
- Full company analysis: Exo Enterprise core business, all three sub-brands (Steel by Exo, Steel Global, SteelSpeaks), revenue projections by entity, enterprise value by milestone, holdco EV scenarios, personal cash flow projections, partial sale / supervoting structure, effort scores per entity.
- Identified highest-leverage angles not in the SSOT: steel.id profile as Linktree killer (fastest build, daily-use product), Flow OS white-label partner network (removes the 8-client/month capacity ceiling), Exo Partner certification model, Steel for Enterprise B2B (NFC for employee identity), regulatory/compliance tailwind for Flow OS (AI audit trail angle), Exo Venture Studio (equity-as-compensation model), NFC anti-counterfeit licensing play.

**Leveraged Roadmap:** Sequenced highest-leverage order of operations across Phase 0 (AI content engine + flow OS dogfooding + steel.id skeleton) → Phase 1 (AI Audit Sprint + first 5 X-Scale clients) → Phase 2 (Exo Partner certifications + steel.id full launch) → Phase 3 (Steel Card + 2 Steel Global worlds) → Phase 4 (Flow OS SaaS standalone + Steel Ventures).

**New Business Models Identified:**
- Exo Care: post-transfer warranty/maintenance subscription. Two OTO windows (at acceptance + at transfer). Standard ($6K/yr) and Care+ ($12K/yr) tiers. Per-incident pricing. Compounding to $1.17M ARR by Year 5.
- Department-as-a-Service (DaaS): ongoing managed operation retainer, parallel to BOM-T transfer model.
- Platform + Partner Network: certify agencies to deploy Flow OS under Exo brand. Removes capacity ceiling entirely.
- Exo Intelligence Reports: aggregate anonymous data from deployments → industry benchmark reports sold as $1.5-2K products.
- Exo Playbook: $200-500 digital product for operators below X-Scale ICP → natural upsell path.
- Exo Venture Studio: 5-10% equity stakes in X-Scale clients in exchange for discounted engagements.
- NFC anti-counterfeit B2B licensing: license Steel NFC authentication to luxury goods brands at $3-5/unit.
- Steel for Enterprise: corporate NFC identity infrastructure, B2B SaaS at $50-200/employee/year.

**Exo Delivery OS (07-exo-delivery-os.md) — NEW FILE CREATED:**
- Full BOM-T delivery OS documented stage-by-stage: Stage 0 (Intake) → Stage 1 (Build) → Stage 2 (Operate) → Stage 3 (Transfer) → Stage 4 (Post-Transfer/Care).
- Every deliverable mapped: who owns it, what AI does vs. human does, what triggers the next stage.
- The Sovereignty Packet contents fully enumerated.
- Exo Concierge vs. Exo Care clearly distinguished (Concierge = during delivery, Care = post-transfer protection).
- Exo Care full model: both OTO pricing structures, plan tiers, per-incident table, compounding revenue projection.
- exo-ai.co Delivery Portal concept: Obsidian vault per client + Claude API + Next.js → personalized premium client portal. Full use cases, technical architecture, leverage points documented.
- Namespace-specific delivery variations per department.

**SSOT Renumbering:**
- New file `07-exo-delivery-os.md` inserted.
- All prior 07–13 files shifted up by one: `07-team` → `08-team`, `08-mission-extended` → `09`, etc. through `13-social-proof` → `14-social-proof`.
- `00-master.md` updated to reflect new numbering and new file.

**Obsidian brain dump updated:**
- `jay-obsidian-main/Exo Delivery OS (External Face) - First Draft.md` expanded with Key Insights, Mental Models (4), Leverage Use Cases table, Technical Architecture, Open Questions, and Action Items.

**Key decisions / conclusions from this session:**
- steel.id (Steel Profile) should launch BEFORE the Steel Card — zero manufacturing complexity, proves the digital identity concept, makes card launch more powerful.
- Flow OS should run Exo's own internal operations immediately (dogfooding = best demo + simultaneous product development).
- agent-workspace is the canonical workspace going forward. openclaw-workspace is an identical copy — can be archived.
- Both workspace copies of company-ssot are stale (old numbering). Synced to agent-workspace at end of session.

---

## Previous Session Summary (2026-05-11) — VSL + Website Work

**What we built / completed:**
- `x-scale.html` mobile horizontal scroll bug fixed. Three-layer fix: `html { overflow-x: hidden }` (iOS Safari root fix), `body` overflow-x reinforced, Spline background container `overflow-hidden`, avatar tooltip row wrapped with `overflow-x-hidden` + `max-w-full`. Desktop layout and banner logic untouched.
- VSL Step 3 (scene polish) completed in `DOCUMENTATION/VSL/VSL_Visual_Production.md`:
  - Scene 03.02 (F1 Pit Stop) — full rewrite: daytime sunlight, Exo-branded crew in black uniforms with obsidian orb patch, three-shot strategy (close/medium/wide), car screams off at 2.8s. Post-VFX note: department orbs as ghost overlay at 15–20% opacity behind pit lane.
  - Scene 02.03 (Knowledge Walk) — camera now pushes TOWARD the whiteboard (not the person), person glances back once. Emotional beat is the board, not the exit.
  - Scene 03.04 (Stat Pulse) — data pulse now shows recognizable business artifacts (pipeline stages, org charts, SOPs) not generic streams.
- VSL script (v4) fully read and briefed section-by-section. Flags identified (see VSL Save Point below).
- Product suite shot strategy resolved: landscape approach confirmed (keep it), equal orb hierarchy confirmed valid. One fix needed: Concierge ring must be significantly larger and encircle the full orb cluster as a compositional frame — not float as one element among equals.

**Key decisions made this session:**
- Product suite shot: landscape stays. Equal hierarchy acceptable for "team portrait" post-intro moment.
- Concierge ring fix is the only structural change needed in the next image generation pass.
- VSL guarantee language "40–60% efficiency gains written into the engagement agreement" — needs to be verified as contractually accurate before VSL goes live.
- Security claims in FAQ (SOC 2, GDPR, ISO 27001, HIPAA "actively pursued") — need accuracy check before live.
- Three engagement tiers named in §07 FAQ (Jumpstart / Co-Pilot / Fully Managed) — need confirmation these are current names/definitions.
- Fictional testimonials remain as placeholders. Real ones swap in at the same positions when available.

---

## Previous Session Summary (2026-05-10)

**What we built:**
- `company-ssot/` folder — the Company Single Source of Truth for Exo Enterprise. Built via a custom Claude Code skill (`/company-ssot`) using a scan-first approach on the EXO-HTML project files.
- `00-master.md` — hub file replacing the old `00-index.md`. Clean command center format: briefing paragraph, company vitals, file directory, sub-brands, known gaps, update instructions.
- `sub-brands/steel.md`, `sub-brands/steel-global.md`, `sub-brands/steelspeaks.md` — all three sub-brand files built from scratch with confirmed facts + pointers to working-notes.
- `working-notes/steel-strategy.md` — Veblen goods strategy, product tier brainstorm, revenue model thinking, open tasks. Everything from the messy steel.md brainstorm, organized.
- `long-term-thinking.md` — revised LTT replacing the archived v2.2.0 doc. Parkinson's Law framing, parallel-track model (Exo + Steel simultaneously).
- Archive folder — `00-index.md` (superseded) and LTT pointer (`ltt-v2.2.0-archived.md`) archived.
- Numerical organization fixed — supplementary files renumbered 08–13 to remove duplicates.

**Key decisions made (2026-05-10):**
- Guarantee: 55% efficiency gain or we don't stop working. "Work for free" and "20% speed lift or money back" scrapped.
- The Foundry: committed to Steel Global (steelglobal.us/foundry). Not fully decided yet but lives there.
- APM (Actionable Playbook Market): shelved indefinitely.
- Steel runs in parallel with Exo — not deferred until $1–2M ARR. Parkinson's Law applied.
- Founding Member Program: still valid concept, structure and discount amount TBD.
- steelaccess.co: not yet live.
- Steel card ship target updated to Q4 2026.

---

## Current SSOT State

### Root Files (company-ssot/)
| File | Status |
|------|--------|
| `00-master.md` | Complete — authoritative hub |
| `01-mission.md` | Complete |
| `02-business-model.md` | Complete — pricing not finalized |
| `03-brand.md` | Complete |
| `04-sales.md` | Complete — missing live call scripts |
| `05-lead-acquisition.md` | Complete — most magnets not live yet |
| `06-product.md` | Complete — some namespaces early-stage |
| `07-exo-delivery-os.md` | **NEW 2026-05-11** — Full delivery OS: BOM-T, deliverables, Exo Care, exo-ai.co portal |
| `08-team.md` | Incomplete — verify concierge names |
| `09–14-*.md` | Supplementary depth files (see master table) |
| `99-long-term-thinking.md` | Complete — living strategy doc |
| `HANDOFF.md` | This file |

### Sub-brands (company-ssot/sub-brands/)
| File | Status |
|------|--------|
| `steel.md` | Confirmed core facts. Product line, site map, open decisions. |
| `steel-global.md` | Confirmed concept. Worlds, Foundry, flywheel, visual language. |
| `steelspeaks.md` | Confirmed concept. Two-handle strategy, content direction. |

### Working Notes (company-ssot/working-notes/)
| File | Contents |
|------|----------|
| `steel-strategy.md` | Veblen goods research, product tiers, revenue model brainstorm, open tasks |

### Archive (company-ssot/archive/)
| File | What It Is |
|------|-----------|
| `00-index-superseded.md` | Old index, replaced by 00-master.md |
| `ltt-v2.2.0-archived.md` | Pointer to archived Long Term Thinking v2.2.0 doc |

---

## Open Decisions (Known Gaps)

Full list lives in `00-master.md` → Known Gaps section. Quick summary of highest-priority:

1. **Pricing** — not finalized. Range $25k–$75k+ but not confirmed. Don't publish.
2. **Revenue model structure** — setup fee + retainer + SaaS tiers. Not decided. Exo Care model now documented in `07-exo-delivery-os.md` as the post-transfer recurring layer.
3. **X-Scale bundling vs. modular** — affects offer page copy and pitch. Department namespaces can be à la carte post-X-Scale, full bundle on first engagement.
4. **Founding Member Program** — valid concept, structure and discount TBD.
5. **Guarantee contract language** — concept confirmed (55% or we don't stop), exact terms for client contracts TBD.
6. **Steel: steelbyexo.co** — not yet built.
7. **The Foundry** — part of Steel Global, still evolving.
8. **Lead magnets** — most "coming soon," don't treat as live.
9. **exo-ai.co Delivery Portal** — concept fully documented in `07-exo-delivery-os.md`. Build not started. Vault model (Obsidian vs. plain markdown git repo) not decided.
10. **steel.id profile platform** — confirmed as highest-priority Steel product to build first (before card). Build not started.
11. **Exo Partner certification program** — concept confirmed in this session. Structure, fees, and onboarding process not yet designed.

---

## Next Session Priorities

*(Update this section at the start/end of each session)*

### VSL Track (highest priority — production bottleneck)
- [ ] **Orb intro tweaks** — Jay wants brief introduction line tweaks for each department orb in VSL §04, plus directional tweaks to script overall. Do this BEFORE Step 5. Read VSL Save Point → "Pending: Orb Intro Tweaks" section.
- [ ] **Step 5 — Batch Shotlist build in Airtable** ← THE MAIN UNLOCK. ~120–155 records. Read `DOCUMENTATION/VSL/VSL_Visual_Production.md` fully, then batch-create in Airtable. Confirm with Jay before starting (large batch op).
- [ ] **Product suite image regen** — Concierge ring must encircle the full orb cluster (~60-70% frame width). Landscape stays. Brief in VSL Save Point section.
- [ ] **Verify before VSL goes live:** (1) Guarantee language in contracts. (2) Security claims accurate. (3) Engagement tier names confirmed.

### Delivery OS Track (new — from this session)
- [ ] Register / confirm control of exo-ai.co domain
- [ ] Decide vault model: Obsidian vaults vs. plain markdown git repos per client
- [ ] Build single static client portal page proof-of-concept (first X-Scale client)
- [ ] Build free AI audit flow: form → AI scrape → personalized exo-ai.co/[company]/free-audit page
- [ ] Set up master Exo vault — begin running Exo's own operations through it (dogfooding)

### Company/Brand Track
- [ ] Decide pricing and revenue model structure (resolves biggest Known Gap)
- [ ] Begin steel.id (Steel Profile) platform build — confirmed as first Steel product
- [ ] Build steelbyexo.co skeleton (brand landing + Steel Card waitlist)
- [ ] Finalize Founding Member Program structure and discount
- [ ] Design Exo Partner certification program structure and fees
- [ ] Skill iteration 2: update `company-ssot` skill schema to add delivery-os domain

---

---

## VSL Production Save Point (2026-05-11)

> **For the next agent picking up VSL work:** Read this section in full before touching any VSL file. It is the canonical state of the production as of 2026-05-11. The roadmap file (`DOCUMENTATION/NOTEPAD/VSL-Roadmap.md`) is also kept up to date — read both.

---

### What The VSL Is

A 15–20 min cinematic brand VSL called **"The Bottleneck"** for the X-Scale Program at `exoent.co/x-scale`.
Narrator: **Exo** — the Exo AI character, a floating black obsidian orb. TTS voice. The AI narrates the VSL it's selling — meta proof-of-concept.
Target runtime: 12–16 minutes. ~120–155 AI-generated video clips.

---

### VSL File Map

| What | Path |
|------|------|
| TTS-ready script (v4, final) | `DOCUMENTATION/VSL/Scripts-VSL/VSL_VO_Clean_3.md` |
| Scene-by-scene video gen prompts | `DOCUMENTATION/VSL/VSL_Visual_Production.md` |
| Dept intro VO scripts (expanded) | `DOCUMENTATION/VSL/VSL_Department_Intros.md` |
| Master status/roadmap | `DOCUMENTATION/NOTEPAD/VSL-Roadmap.md` |
| Session context | `DOCUMENTATION/NOTEPAD/session-context-dump.md` |
| Next agent prompt | `DOCUMENTATION/NOTEPAD/next-agent-prompt.md` |
| Exo AI visual spec | `DOCUMENTATION/Business/Brand/EXO-AI-Character-Spec.md` |
| Dept orb specs | `DOCUMENTATION/Business/Brand/Department-Orb-Specs.md` |
| Character images | `DOCUMENTATION/Business/Brand/Characters/<Department>/` |
| Airtable image gen script | `generate_shot.py` (project root) |

---

### Step Status

| Step | Status | Notes |
|------|--------|-------|
| Step 1 — Exo AI R1–R6 reference images | ✅ Done | In `Characters/Exo-AI/` |
| Step 2 — All 6 dept orb images + character sheets + Airtable records | ✅ Done | All images + character sheets uploaded |
| Step 3 — Scene polish in VSL_Visual_Production.md | ✅ Done | 03.02 F1, 02.03 Knowledge Walk, 03.04 Stat Pulse rewritten |
| Step 4 — 4 Hormozi lines + 55%→40-60% fix in script | ✅ Done | Confirmed in VSL_VO_Clean_3.md lines 119 + 287 |
| **Step 5 — Batch Shotlist build in Airtable** | 🔲 **NEXT MAJOR TASK** | ~120–155 records, awaiting Jay's go-ahead |
| Step 6 — Video clip generation | 🔲 Blocked on Step 5 | |
| Step 7 — VSL assembly | 🔲 Blocked on Step 6 | |

---

### Airtable Connection

Base: **"Image Prompt Base"** | Base ID: `appqYUJYeZdSOhoZp`
MCP server: already configured and working. Use directly.

| Table | ID |
|-------|----|
| Cinematic Options (prompt fragment library) | `tblF801knqusxotxX` |
| Shotlist (one record per video clip) | `tblijnHoehBu9oDfz` |
| Assets (character references) | `tblkziaChed1bRHNR` |

**Asset Record IDs:**
- Exo AI: `recbPGuJ9WIM3qOcr`
- Flow OS: `recTXRnxMRqSwlDQv`
- Deal OS: `recY8T3JzZICrPIoE`
- Exo Academy: `recyPdTldXMyczgqX`
- AURA AI: `recsEcnoFHfv8zDw7`
- Exo Launch: `recOkHbeC5UOq7H5w`
- Exo Concierge: `recUIApojFbP34Vmb`

**Key Cinematic Option IDs for Shotlist records:**
- ARRI ALEXA 65: `rec3qtbCoUZuWTDey`
- 35mm Standard Lens: `rec7UAWh4xoguSdMd`
- ARRI Signature Prime: `rec5z90hiF5E24ZPZ`
- Overcast Diffused: `rec72vnryR1NnxWlO`
- Volumetric: `rec9RRM9gfIMnArql`
- Lonely: `recAFAx7m8fjyTOLB`
- Ex Machina: `recAFAx7m8fjyTOLB`
- Only existing Shotlist record: `SHT-00088` (Scene 01.01)

---

### Step 5 — How To Build The Shotlist

1. Read `DOCUMENTATION/VSL/VSL_Visual_Production.md` in full (all 9 sections, ~120–155 scenes)
2. For each scene, create one Airtable record in table `tblijnHoehBu9oDfz` with:
   - **Subject & Action** field: who/what is in the scene and what they're doing
   - **Environment Description** field: the location/void/setting
   - **Cinematic Options** linked records: Camera Body, Lens Type, Lighting Source, Lighting Style, Atmosphere, Look & Feel
   - **Talent** linked field: link to the relevant Asset record (Exo AI, department orb, or null for non-orb scenes)
3. The "Cinematography Prompt" field auto-assembles via Airtable formula once options are linked — do NOT write prompts manually
4. Confirm with Jay before starting — this is ~120–155 individual Airtable mutations
5. After build: spot-check 3–5 records to verify Cinematography Prompt assembled correctly

**Batch priority order:** Hook (01) → Final Close (09) → Tuesday Morning (05) → Orb Cluster (04.05–04.11) → everything else

---

### Pending: Orb Intro Tweaks (DO BEFORE STEP 5)

Jay wants to revise the brief department introduction lines in **VSL §04 (The Plan)** before the Shotlist is built. The current 1–2 line descriptions per department are:

| Department | Current Line in Script |
|------------|----------------------|
| Deal OS | "End-to-end revenue operations. Pipeline visibility, deal intelligence, automated follow-ups. So nothing stalls between first call and closed-won." |
| Exo Academy | "Your team's permanent knowledge base. Structured training, live certifications, documented SOPs. Onboarding takes days instead of months..." |
| AURA AI | "AI-powered talent intelligence. Scouts, screens, and ranks candidates before you post a single job listing." |
| Exo Launch | "Marketing operations, installed. Ad variations, brand assets, campaign strategies — generated from your existing brand guidelines. Not generic templates." |
| Exo AI | "Ask anything about your business and get an answer in seconds. It scans every workflow, document, and decision log across your operation. Institutional memory that never forgets." |
| Exo Concierge | "Your dedicated operations team on standby. We don't wait for tickets. We monitor, optimize, and upgrade your system continuously." |

**What Jay asked for:** "Brief introduction tweaks for each orb and some directional tweaks overall." This has NOT been done yet. Before the next agent touches the script or builds the Shotlist:
1. Present Jay with the current lines (table above)
2. Ask which departments he wants to rework and what angle/energy he wants for each
3. Also ask about "directional tweaks overall" — there may be section-level edits he wants beyond just the orb intros
4. Update `DOCUMENTATION/VSL/Scripts-VSL/VSL_VO_Clean_3.md` with approved changes

---

### VSL Script — Known Flags (Verify Before Go-Live)

These items were flagged during the 2026-05-11 script review. They are NOT blockers for production — they are accuracy checks needed before the VSL is published live.

| Flag | Location | What To Verify |
|------|----------|---------------|
| Guarantee language | §03 + §07 | "40–60% efficiency gains written into the engagement agreement before work begins" — confirm this is actually in client contracts |
| Security claims | §07 FAQ | "Actively pursuing SOC 2 Type II, GDPR, ISO 27001, and HIPAA" — confirm accuracy |
| Engagement tier names | §07 FAQ | Jumpstart / Co-Pilot / Fully Managed — confirm these are the current names and definitions |
| Fictional testimonials | §04, §08 | All 8 testimonials are placeholder names. Flag for replacement with real ones when available |
| "Empty Middle" term | §07 FAQ | Internal positioning term — verify Jay is comfortable with it being public-facing |

---

### Product Suite Shot — Current State

**File:** `DOCUMENTATION/Business/Brand/Characters/Post-VSL-intros-product-suite.png`
**Decision:** Landscape approach confirmed. Equal orb hierarchy confirmed (all 7 orbs same size — valid for "team portrait" post-intro moment).
**One remaining fix for next generation pass:** The Concierge ring needs to be significantly larger — should span ~60–70% of frame width and act as a compositional halo ENCIRCLING the orb cluster. Currently it reads as just another floating element at the same scale as the orbs. Everything else in the image is accepted.

**Regeneration brief (paste into image gen):**
> Same aerial mountain landscape background at sunset/golden hour. All 7 orbs floating at equal size: black (Exo AI), deep blue (Flow OS), emerald (Deal OS), light blue (Exo Academy), violet (AURA AI), coral/orange (Exo Launch). The Exo Concierge element is a large luminous silver-pearl halo ring spanning approximately 60–70% of the frame width — large enough that the other orbs float inside or within its orbit, like a frame or orbital enclosure around the full cluster. Subtle faint light traces connecting orbs suggest unified system. The ring should be visually dominant, not equal-weight to the orbs. Cinematic. Photorealistic. Dramatic sky.

---

### Exo AI Character Anchor (paste into any video gen prompt)

```
A perfectly smooth floating black obsidian orb. Mirror-grade gloss surface — 
jet black lacquer with maximum reflectivity. Defining feature: a structured 
grid-lattice highlight in the upper hemisphere — 4 to 6 curved segments, like 
cathedral window panes on a black pearl, reading dark silver-gray with deep 
black seams between them. Lower hemisphere near-pure black. Hovers with a slow 
breathing pulse (scale 1.0 → 1.03 → 1.0). Photorealistic render quality.
```

---

## Key Context That's Easy to Lose

- **Canonical SSOT location:** `C:\Users\viole\Desktop\agent-workspace\Exo Enterprise\company-ssot\`. The copy here (in EXO-HTML) is the authoring location — edits made during website sessions live here. Propagate significant updates to the agent-workspace copy after each session.
- **agent-workspace is the canonical workspace going forward.** `openclaw-workspace` on the Desktop is an identical copy — it was duplicated rather than renamed. Both are currently in sync (as of 2026-05-11 session end). Safe to archive openclaw-workspace once confirmed.
- The `company-ssot` skill is installed at `C:\Users\viole\.claude\skills\company-ssot\`. Say "update the company SSOT" to invoke it.
- Eval results live at `C:\Users\viole\.claude\skills\company-ssot-workspace\iteration-1\`. Benchmark: 100% pass rate with skill vs 68% baseline.
- The Exo SSOT was built by scanning real project files (firm.html, x-scale.html, flow.html, DOCUMENTATION/). The scan-first approach means it reflects the actual website, not just strategy docs.
- The LTT v2.2.0 is NOT deleted. It lives at `DOCUMENTATION/Business/Strategy/Exo Enterprise - Long Term Thinking v2.2.0.md`. The archive pointer in `company-ssot/archive/` explains what was kept and what was scrapped.
- Steel Global tagline: "Curating The Unimagineable." (with that spelling — intentional or not, it's on the live site.)
- Exo guarantee (confirmed): 55% efficiency gain or we don't stop working. Not "work for free."
- **SSOT numbering as of 2026-05-11:** 07-exo-delivery-os.md inserted. Files 07-team through 13-social-proof shifted up to 08-team through 14-social-proof. 99-long-term-thinking stays at 99.
- **exo-ai.co Delivery Portal concept** is fully documented in `07-exo-delivery-os.md` — Obsidian vault per client + Claude API + Next.js. Brain dump also expanded at `jay-obsidian-main/Exo Delivery OS (External Face) - First Draft.md`.
- **steel.id is the highest-priority Steel product** — build before the physical card. Confirmed this session.
- **Exo Care OTO structure** — two windows: at program acceptance (48hr, founding rate) and at transfer (7-day window, standard rate). Full model in `07-exo-delivery-os.md`.
- **Content workflow files** live at `agent-workspace/Exo Enterprise/departments/marketing/AI ASSETS/`. Exo AI YouTube 3-pillar system fully documented there.
