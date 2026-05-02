# VSL Production Roadmap — Current Status

> **AGENT: READ THIS FIRST, THEN DELETE THIS BOX**
> You are picking up mid-production on a 15–20 min cinematic VSL for Exo Enterprise.
> Airtable MCP is live — base ID: appqYUJYeZdSOhoZp. Use it directly.
> Steps 1, 2, 4 are DONE. Do not redo them.
> **Your first move:** Confirm with Jay whether to start Step 5 (batch Shotlist build, ~150 Airtable records)
> or Step 3 (F1 scene polish in VSL_Visual_Production.md). Step 5 is the main unlock.
> Full context in: session-context-dump.md + next-agent-prompt.txt on the Desktop.
> Delete this block once read.

---

## STEP 1 — Exo AI Reference Photos ✅ DONE
R1–R6 approved. Saved in `DOCUMENTATION/Business/Brand/Characters/Exo-AI/`
Airtable Asset: `recbPGuJ9WIM3qOcr` — character sheet uploaded.

---

## STEP 2 — Department Orb Reference Photos ✅ DONE (images + Airtable records)

All 6 orbs generated via ChatGPT Image-2. Character sheets built. Airtable Asset records created.
**One action remaining:** Manually drag character sheet images into each Airtable Asset record
(File + Character Reference Sheet fields) — too large to upload via script. Do in Airtable UI.

| Department | Image | Character Sheet | Airtable Record | Status |
|---|---|---|---|---|
| Flow OS | `Flow-OS/Flow-OS.png` ✅ | `Flow OS Character Sheet.png` ✅ | `recTXRnxMRqSwlDQv` | ⚠️ Images need upload |
| Deal OS | `Deal OS/Deal-OS.png` (+alt) ✅ | `Deal OS Character Sheet.png` ✅ | `recY8T3JzZICrPIoE` | ⚠️ Images need upload |
| Exo Academy | `EXA/EXA.png` ✅ | `Exo Academy Character Sheet.png` ✅ | `recyPdTldXMyczgqX` | ⚠️ Images need upload |
| AURA AI | `AURA/AURA-AI.png` ✅ | `AURA AI Character Sheet.png` ✅ | `recsEcnoFHfv8zDw7` | ⚠️ Images need upload |
| Exo Launch | `Exo Launch/Exo Launch.png` ✅ | `Exo Launch Character Sheet.png` ✅ | `recOkHbeC5UOq7H5w` | ⚠️ Images need upload |
| Exo Concierge | `Exo Concierge/Concierge.png` ✅ | `Exo Concierge Character Sheet.png` ✅ | `recUIApojFbP34Vmb` | 🔄 Second pass pending |

**Concierge second pass prompt** — in conversation. Generate manually, replace file, then upload.

---

## STEP 3 — Write Better Video Scene Prompts 🔲 PENDING
Update F1 scene + early cinematic scenes in `VSL/VSL_Visual_Production.md`.
Writing task only — unblocked.

---

## STEP 4 — Insert 4 Copywriting Lines Into Script ✅ DONE
All 4 Hormozi-adapted lines confirmed present in `VSL/Scripts-VSL/VSL_VO_Clean_3.md` (v4).
- "What you have is a bottleneck problem..." → Section 02 opener ✅
- "Your business is a bridge..." → Section 02, line 82 ✅
- "Most founders don't have a business..." → End of Section 02 ✅
- "There are a hundred things that could grow your business..." → Section 04 opener ✅

---

## STEP 5 — Batch Build Full Shotlist in Airtable 🔲 NEXT MAJOR TASK
Convert every scene in `VSL/VSL_Visual_Production.md` into a Shotlist record.
~120–155 records, each with cinematic options linked + Talent linked + prompt auto-assembled.
Claude can batch-create programmatically once given the green light.
**This is the real unlock** — nothing gets generated until the queue exists.

Current Shotlist records:
| Shot ID | Scene | Status |
|---|---|---|
| SHT-00088 | 01.01 — Hook, Exo AI white void | ✅ Created, Talent linked |
| All others | Sections 01–09 | 🔲 Not yet created |

---

## STEP 6 — Video Clip Generation 🔲 BLOCKED (waits on Step 5)
~120–155 clips via LTX-2 / Luma / Kling / Seeddance 2.0.
Batch priority: Hook → Final Close → Tuesday Morning → Orb Cluster → everything else.

---

## STEP 7 — Assemble the VSL 🔲 BLOCKED (waits on Step 6)
Edit + TTS audio + overlays + color grade → export → embed at `exoent.co/x-scale`.

---

## STEP 8 — Mirror System to Google Sheets/Drive 🔲 FUTURE
Platform independence from Airtable. Port 3-table structure + formula logic.

---

## AIRTABLE ASSET REGISTRY

| Asset | Record ID | Images Uploaded |
|---|---|---|
| Exo AI | `recbPGuJ9WIM3qOcr` | ✅ |
| Flow OS | `recTXRnxMRqSwlDQv` | ⚠️ Manual upload needed |
| Deal OS | `recY8T3JzZICrPIoE` | ⚠️ Manual upload needed |
| Exo Academy | `recyPdTldXMyczgqX` | ⚠️ Manual upload needed |
| AURA AI | `recsEcnoFHfv8zDw7` | ⚠️ Manual upload needed |
| Exo Launch | `recOkHbeC5UOq7H5w` | ⚠️ Manual upload needed |
| Exo Concierge | `recUIApojFbP34Vmb` | ⚠️ Second pass + upload |

---

## POST-INTROS PRODUCT SUITE SHOT 🔲 CONCEPT PHASE
Draft: `Characters/Post-intros-product-suite.png` — mountain lake, missing Flow OS + Launch.
**Recommended final frame:** Full cluster in rich dark atmospheric void (charcoal, particle haze).
All orbs orbiting Exo AI, Concierge ring encircling all. Camera pulls back. This is already written
as Scene 09.01/09.02 in `VSL/VSL_Visual_Production.md`.

---

## YOU ARE HERE
Steps 1, 2 (images), 4 ✅ complete.
**Immediate next actions:**
1. Generate Concierge ring second pass (you — manual) ✅ complete
2. Upload character sheets to Airtable records (you — drag & drop in UI, ~5 min)✅ complete
3. Step 3 — F1 scene prompt polish (Claude, unblocked, say the word)
4. Step 5 — Batch Shotlist build (Claude, biggest unlock, say the word)
