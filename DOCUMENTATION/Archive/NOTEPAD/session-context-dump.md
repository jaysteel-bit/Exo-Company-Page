# SESSION CONTEXT DUMP — EXO ENTERPRISE VSL PRODUCTION
**Last updated:** 2026-04-21 (updated with VSL copywriting add-on intentions)  
**Purpose:** Full context preservation — resume from here if conversation is cleared

---

## PROJECT OVERVIEW

**What we're building:** A 15–20 minute cinematic VSL ("The Bottleneck") for the X-Scale Program, hosted at `exoent.co/x-scale`  
**Narrator:** "Exo" — the Exo AI character, a floating black obsidian orb. TTS voice, not human. The AI narrates the VSL it's selling — meta-proof of concept.  
**Meta-premise:** *"You're not watching an ad. You're talking to the intelligence behind every department we build. My name is Exo."*  
**Video tools targeting:** LTX-2 / Luma / Kling / Seeddance 2.0 (3–8s clip windows, ~120–155 total generations)

---

## FILES CREATED THIS SESSION

| File | Location | Purpose |
|------|----------|---------|
| `EXO-AI-Character-Spec.md` | `DOCUMENTATION/Business/` | Full visual identity lock for Exo AI — prompts, motion, guardrails |
| `VSL_Department_Intros.md` | `VSL/` | Department spotlight VO scripts, visual direction, bridge lines |
| `Department-Orb-Specs.md` | `DOCUMENTATION/Business/` | All 6 department orb character specs in one file |
| `session-context-dump.md` | `DOCUMENTATION/NOTEPAD/` | This file |

**Pre-existing files used:**
- `VSL/VSL_Visual_Production.md` — scene-by-scene generation prompts (v1)
- `VSL/VSL_VO_Clean_3.md` — final TTS-ready script (§07 FAQ has one line fix: 55% → 40–60%)
- `DOCUMENTATION/Business/claude-convos.md` — prior VSL feedback and script iteration history
- `DOCUMENTATION/Business/Exo-AI Charater.jpg` — approved Exo AI reference image (R1 base)
- `DOCUMENTATION/Business/exo-orb-2.png` — mid-separation morphing state reference
- `DOCUMENTATION/Business/exo-orb-3.png` — multi-satellite separation state reference

---

## EXO AI CHARACTER — KEY FACTS

**Visual identity:**
- Floating black obsidian orb, mirror-grade gloss lacquer
- **Signature highlight:** Grid-lattice segmented panes in upper hemisphere (4–6 curved segments, like cathedral window light on black pearl) — this is the non-negotiable fingerprint
- Background: Warm neutral gray `#EBEBEB–#F0F0F0` (NOT pure white)
- Drop shadow: Soft, diffused, max 30% opacity
- Full spec: `DOCUMENTATION/Business/EXO-AI-Character-Spec.md`

**Motion states:**
- Resting: slow breathing pulse (1.0 → 1.02 → 1.0, 3–4s cycle)
- Speaking: slightly more active pulse (1.0 → 1.04 → 1.0)
- Morphing/separation: main body deforms to blob — satellites form as independent spheres with own grid-lattice highlights — liquid necks connect them — all resolves back to sphere
- Morphing is for brand films only, NOT the VSL

**Tier system (new idea, not yet developed):**
- Free/Standard → Smooth sphere (standard Exo)
- Extraordinary → TBD
- Exterminator → Spiky orb version (same obsidian material, geometric spikes in all directions) — see spiky prompt in this file

---

## DEPARTMENT COLOR PALETTE (UPDATED — USE THESE)

| Department | Orb Color | Notes |
|------------|-----------|-------|
| Flow OS | Deep Blue | Updated from original indigo — user confirmed |
| Deal OS | Emerald Green | Unchanged |
| Exo Academy | Light Blue | Updated from original amber/gold — user confirmed |
| AURA AI | Violet / Electric Purple | Unchanged |
| Exo Launch | Coral / Bright Orange | Unchanged |
| Exo Concierge | Silver / Pearl White | Ring formation — not a sphere |

---

## VSL STRUCTURE (FULL OVERVIEW)

**Section flow:**
```
01 — Hook (Exo intro, "You're not watching an ad")
02 — Pain (broken stack, knowledge walk-out, founder overwhelm)
03 — Proof (Flow OS arrives, F1 analogy, 256k context stat)
04 — Plan (Exo Method: Stabilize → Operate → Transfer + all 6 orb introductions)
05 — Picture (Tuesday Morning payoff scene)
06 — First CTA
07 — FAQ (near-white void, intimate, Exo alone)
08 — Proof Stack (testimonial cards with orb watermarks)
09 — Final CTA / Close
```

**Department introduction sequence (Section 04 expanded):**
Each department follows: Orb arrives → Identity (1 line) → Pain (feeling) → Outcome (prospect's life) → Bridge to next department

Order: Flow OS → Deal OS → Exo Academy → AURA AI → Exo Launch → Exo Concierge  
Logic: Follows scaling bottleneck sequence — ops foundation → revenue → knowledge → talent → demand → oversight

**Exo Concierge special treatment:** Ring expands FROM Exo AI at center (not off-screen entrance). No bridge line — it completes the system.

---

## PRODUCTION ROADMAP (4 PHASES)

**Phase 1 — Reference Library (IN PROGRESS)**
Generate 6 approved Exo AI still images (R1–R6). All video generation anchors to these.

| Ref | Prompt Direction |
|-----|-----------------|
| R1 | Master prompt — front-facing, standard (this is the prompt already given) |
| R2 | Same + "slight 3/4 angle view from slightly below" |
| R3 | Same + "extreme close-up, upper hemisphere only, grid-lattice highlight fills frame" |
| R4 | Replace background with pure black `#0A0A0F` |
| R5 | Add "faint emerald rim light on orb edge, pure black background" |
| R6 | "Three views of same orb: front, 45° left, 45° right — product turntable style" |

**Master prompt for R1 (copy-paste ready):**
```
A single perfectly smooth black obsidian orb floating in a warm neutral gray 
infinite studio void. The orb surface is jet black lacquer — mirror-grade gloss, 
maximum reflectivity. The defining feature: a structured grid-lattice highlight in 
the upper hemisphere — reflected light from a large grid-panel diffuser creates 
4 to 6 curved segments meeting at a central point, like light through cathedral 
window panes on a black pearl. The highlight reads dark silver-gray in the lit 
segments, with deep black seams between them. Lower hemisphere is near-pure black 
with minimal ambient fill. A soft, diffused circular shadow below the orb implies 
it floats above the surface. Background is a clean, warm off-white gray — no 
visible horizon, perfectly flat, professional cyclorama. The orb fills 45% of 
frame width. Portrait orientation. Photorealistic render quality. Cinema-grade 
lighting. No text, no additional elements.
```

Midjourney append: `--style raw --stylize 750 --ar 9:16 --v 6`  
Negative: `no metallic sheen, no colored glow, no subsurface scatter, no simple specular dot highlight`

**Phase 2 — Department Orb Prompts**
After R1–R6 approved, build generation prompts for each of the 6 department orbs. Each orb must feel visually differentiated from Exo AI (color, personality). Specs in `Department-Orb-Specs.md`.

**Phase 3 — Video Clip Generation**
Batch priority: A (Hook) → D (Final Close) → C (Tuesday Morning) → B (Orb cluster) → E–H

**Phase 4 — VSL Assembly**
Edit clips + TTS audio, add text overlays in post, color grade, export, embed at exoent.co/x-scale

---

## KEY DECISIONS MADE THIS SESSION

- Exo AI is the anchor — all department orbs are visually subordinate to it
- Department orbs introduced sequentially in scaling bottleneck order (not simultaneously)
- Exo Concierge ring expands FROM Exo AI, doesn't arrive from off-screen
- F1 analogy stays at system level only — individual department analogies are separate
- VSL length target: 15–20 min (acceptable for $15K–$60K B2B high-ticket)
- Testimonial cards carry per-department orb watermarks
- Academy segment deliberately callbacks to pain Scene 02.04 (blank whiteboard) — do not remove that scene
- Department orb colors updated: Flow OS = Deep Blue, Exo Academy = Light Blue

---

## PENDING COPYWRITING INTEGRATION — VSL-Add-on-thoughts.md

**Source file:** `DOCUMENTATION/NOTEPAD/VSL-Add-on-thoughts.md`  
**Source material:** Hormozi (Acquisition.com) Scaling Workshop VSL + sales roleplay snippet  
**Intent:** Integrate key concepts into the existing Exo VSL — not copying verbatim, adapting the ideas in Exo's voice

**What to integrate (4 concepts, all confirmed as insertions — no restructuring needed):**

| Concept | Exo Version | Target Placement |
|---------|-------------|-----------------|
| Name the condition | *"What you have is a bottleneck problem. And you're usually the bottleneck."* | Section 02 opener — before tool chaos symptoms |
| Bridge analogy (adapted) | *"Your business is a bridge. Right now — you are the bridge. The moment you step away, everything stops."* | Scene 02.05 — replace/lead founder fire drill |
| "High-paying job" line | *"Most founders don't have a business. They have a job that pays well and never stops."* | Section 01 (hook) or end of Section 02 before "Until now" pivot |
| "100 things → find the one" | *"There are a hundred things that could grow your business. We're going to find the one that's strangling everything else right now."* | Section 04 opener (frames bottleneck sequence) OR Section 07 FAQ (overwhelm objection) |

**What NOT to take from the source:**
- "Key man risk" as a term — Hormozi owns it, Exo uses "the bottleneck"
- Personal proof story structure ($46.2M sale) — doesn't apply to early-stage Exo
- "Comfortable prison" phrase — overused in entrepreneur marketing
- Workshop overwhelm answer — Exo's answer is done-for-you (stronger), not "find what NOT to do"

**Status:** Concepts identified and mapped. VO lines not yet written/inserted into VSL_VO_Clean_3.md. Jay knows where they go — exact integration pass TBD.

Summary of Integration Points:

  ┌───────────────────────────────────────┬─────────────────────────────────────┬──────────────────────────────────────────┐
  │                Concept                │                Where                │                  Action                  │
  ├───────────────────────────────────────┼─────────────────────────────────────┼──────────────────────────────────────────┤
  │ Name the condition ("the bottleneck") │ Section 02 opener                   │ Add one line before symptoms             │
  ├───────────────────────────────────────┼─────────────────────────────────────┼──────────────────────────────────────────┤
  │ Bridge analogy (adapted)              │ Scene 02.05                         │ Replace or lead the founder fire drill   │
  ├───────────────────────────────────────┼─────────────────────────────────────┼──────────────────────────────────────────┤
  │ "High-paying job" line (adapted)      │ Section 01 or end of 02             │ One cold hard line from Exo              │
  ├───────────────────────────────────────┼─────────────────────────────────────┼──────────────────────────────────────────┤
  │ "100 things → find the one"           │ Section 04 opener OR Section 07 FAQ │ Frame the methodology + answer overwhelm │
  └───────────────────────────────────────┴─────────────────────────────────────┴──────────────────────────────────────────┘
---

## CURRENT STATUS + NEXT ACTIONS

**Exo AI R1–R6:** ✅ COMPLETE — saved in `DOCUMENTATION/Business/Charaters/Exo-AI/`  
**Confirm Colors for all department orbs and Exo Concierge + differentiations:** 🔲 NEXT (Quick review of Department-Orb-Specs.md [or other mentions of colors within files below])
**Department Orb References:** 🔲 NEXT — run prompts from `Department-Orb-Specs.md` per department  
**Copywriting integration:** 🔲 PENDING — 4 Hormozi-adapted lines mapped, not yet inserted into `VSL_VO_Clean_3.md`  
**F1/cinematic scenes prompt updates:** 🔲 PENDING — Scene 03.02 in `VSL_Visual_Production.md` needs refinement  
**Video clip generation:** 🔲 BLOCKED — waits on all character references approved  

---

## ALL PROJECT FILES — QUICK REFERENCE

### Character & Visual Identity
| File | Location (MOST HAVE BEEN MOVED AROUND FROM ORIGINAL LOCATION IN BELOW) | What It Is |
|------|----------|------------|
| `EXO-AI-Character-Spec.md` | `DOCUMENTATION/Business/` | Full visual spec for Exo AI — prompts, motion, guardrails, R1–R6 directions |
| `Department-Orb-Specs.md` | `DOCUMENTATION/Business/` | All 6 department orb specs — color, prompt, capabilities checklist, motion |
| `Exo-AI Charater.jpg` | `DOCUMENTATION/Business/` | Original approved Exo AI source image (the look we're matching) |
| `exo-orb-2.png` | `DOCUMENTATION/Business/` | Morphing state reference — mid-separation blob form |
| `exo-orb-3.png` | `DOCUMENTATION/Business/` | Multi-satellite separation reference — several orbs pulling apart |
| `Charaters/Exo-AI/` | `DOCUMENTATION/Business/` | Folder holding R1–R6 generated reference stills (done) |

### VSL Production
| File | Location | What It Is |
|------|----------|------------|
| `VSL_VO_Clean_3.md` | `VSL/` | Final TTS-ready script — 9 sections, all ready except one FAQ line fix |
| `VSL_Visual_Production.md` | `VSL/` | Scene-by-scene video generation prompts — all 9 sections, ~120–155 clips |
| `VSL_Department_Intros.md` | `VSL/` | Expanded department spotlight VO scripts + visual direction + bridge lines |

### Notes & Context
| File | Location | What It Is |
|------|----------|------------|
| `session-context-dump.md` | `DOCUMENTATION/NOTEPAD/` | This file — full project context for resuming after context clears |
| `VSL-Add-on-thoughts.md` | `DOCUMENTATION/NOTEPAD/` | Hormozi VSL copy inspiration + sales roleplay snippet (pending integration) |
| `pasted-quick-prompt.md` | `DOCUMENTATION/NOTEPAD/` | User's quick drop-in prompts to Claude mid-session |
| `claude-convos.md` | `DOCUMENTATION/Business/` | Prior VSL feedback history — script iteration notes from earlier sessions |
| N/A | 'marketing-skills' (plugin) | If you just say "use marketing-skills" + describe the task, Claude will pick the right sub-skill ~85% of the time. The 15% failure cases are the overlapping ones above — for those, a one-word hint (e.g., "rewrite existing copy" vs "write new copy") resolves it. |

Where Claude gets marketing-skills plugin right automatically:
  The skill triggers are specific enough that task context maps cleanly — "write a cold email" → cold-email, "audit SEO" → seo-audit, "set up referral program" →
  referral-program. No guidance needed.

  Where ambiguity exists (Claude might pick wrong):

  ┌─────────────────────────────────────┬───────────────────────────────────────┐
  │         Overlapping Skills          │               Ambiguity               │
  ├─────────────────────────────────────┼───────────────────────────────────────┤
  │ copywriting vs copy-editing         │ Writing new copy vs refining existing │
  ├─────────────────────────────────────┼───────────────────────────────────────┤
  │ page-cro vs form-cro vs popup-cro   │ All are "conversion" tasks            │
  ├─────────────────────────────────────┼───────────────────────────────────────┤
  │ content-strategy vs marketing-ideas │ Planning vs brainstorming             │
  ├─────────────────────────────────────┼───────────────────────────────────────┤
  │ ad-creative vs paid-ads             │ Creative assets vs campaign strategy  │
  ├─────────────────────────────────────┼───────────────────────────────────────┤
  │ copywriting vs sales-enablement     │ Depends on the asset type             │
  └─────────────────────────────────────┴───────────────────────────────────────┘
If you just say "use marketing-skills" + describe the task, Claude will pick the right sub-skill ~85% of the time. The 15% failure cases are the overlapping ones above — for those, a one-word hint (e.g., "rewrite existing copy" vs "write new copy") resolves it. -- **Claude Code Agent can even remind you which task within the marketing-skill and *when* using the skill could benefit you.**

---

## CHARACTER UPDATE — DISTINCTIVE VIBE / ENERGY (2026-04-23)

**File touched:** `DOCUMENTATION/Business/Brand/Department-Orb-Specs.md`

**What changed:** Each of the 6 department orbs now has a `### [ ] DISTINCTIVE VIBE / ENERGY (AI Generation Note)` block, AND the same vibe paragraph is appended directly inside each orb's `Generation Prompt (Still — Standard Reference)` code block (separated by `---` so it reads as one full prompt with breathing room). This means any AI image-gen pipeline that copy-pastes the prompt block automatically gets the distinctiveness cue.

**Why:** Each orb shares the same shell material (mirror-grade obsidian gloss + grid-lattice highlight). Color alone wasn't enough to give each department its own *soul*. The vibe notes describe what's happening *inside* the orb — the substance, motion, and mood — so generations differentiate beyond just hue.

**Per-orb essence (canonical — match this in any future regenerations):**

| Orb | Inner Essence (one-line) |
|-----|--------------------------|
| Flow OS | Deep navy water swishing smoothly inside — the only orb with overtly fluid interior (because Flow OS *is* flow) |
| Deal OS | Faceted emerald gemstone with internal "spark" flashes — a polished gemstone with a heartbeat |
| Exo Academy | "All-blue planet" — Earth-from-orbit feel with drifting cloud wisps; same shape/size as Exo AI (sibling), but luminous and atmospheric where Exo AI is opaque |
| AURA AI | Compressed violet nebula — gaseous, mysterious, with star-like sensor pinpricks; a sentient nebula evaluating you |
| Exo Launch | Contained miniature sun — yellow→orange→red plasma with flares licking the inner surface; a small star wearing a glass coat |
| Exo Concierge | Pearl-white halo with hints of gold along the inner edge; the only element whose energy lives in the *space it encloses*, not in itself |

**Rule for future Claude sessions:** When generating, refining, or describing any department orb, pull the vibe from this canonical list — do NOT invent new internal substances. If the user asks to revise, update BOTH the standalone vibe block AND the appended block inside the generation prompt so they stay in sync.
