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
| Flow OS | `Flow-OS/Flow-OS.png` ✅ | `Flow OS Character Sheet.png` ✅ | `recTXRnxMRqSwlDQv` | ✅ |
| Deal OS | `Deal OS/Deal-OS.png` (+alt) ✅ | `Deal OS Character Sheet.png` ✅ | `recY8T3JzZICrPIoE` | ✅ |
| Exo Academy | `EXA/EXA.png` ✅ | `Exo Academy Character Sheet.png` ✅ | `recyPdTldXMyczgqX` | ✅ |
| AURA AI | `AURA/AURA-AI.png` ✅ | `AURA AI Character Sheet.png` ✅ | `recsEcnoFHfv8zDw7` | ✅ |
| Exo Launch | `Exo Launch/Exo Launch.png` ✅ | `Exo Launch Character Sheet.png` ✅ | `recOkHbeC5UOq7H5w` | ✅ |
| Exo Concierge | `Exo Concierge/Concierge.png` ✅ | `Exo Concierge Character Sheet.png` ✅ | `recUIApojFbP34Vmb` | ✅ Second pass  |

---

## STEP 3 — Write Better Video Scene Prompts ✅ DONE
Scenes polished in `VSL/VSL_Visual_Production.md`:
- **03.02 F1 Pit Stop** — full rewrite: Exo-branded crew (obsidian orb patch), two-shot strategy (extreme close + medium), final beat of car leaving + crew standing still. Night atmosphere, deep blacks.
- **02.03 Knowledge Walk** — camera now pushes TOWARD the whiteboard (not the person), emotional weight shifted to the board as the real subject. Person glances back once.
- **03.04 Stat Pulse** — data pulse now shows real business artifacts (pipeline stages, org charts, SOPs) not generic streams. Stillness after pulse is the point.

---

## STEP 4 — Insert 4 Copywriting Lines Into Script ✅ DONE
All 4 Hormozi-adapted lines confirmed present in `VSL/Scripts-VSL/VSL_VO_Clean_3.md` (v4).
- "What you have is a bottleneck problem..." → Section 02 opener ✅
- "Your business is a bridge..." → Section 02, line 82 ✅
- "Most founders don't have a business..." → End of Section 02 ✅
- "There are a hundred things that could grow your business..." → Section 04 opener ✅
- Finalize script copywriting [PENDING FINAL REVIEW - Jay]

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
| Flow OS | `recTXRnxMRqSwlDQv` | ✅ |
| Deal OS | `recY8T3JzZICrPIoE` | ✅ |
| Exo Academy | `recyPdTldXMyczgqX` | ✅ |
| AURA AI | `recsEcnoFHfv8zDw7` | ✅ |
| Exo Launch | `recOkHbeC5UOq7H5w` | ✅ |
| Exo Concierge | `recUIApojFbP34Vmb` | ✅ |

---

## POST-INTROS PRODUCT SUITE SHOT 🔲 CONCEPT PHASE
Draft: `Characters/Post-intros-product-suite.png` — mountain lake, missing Flow OS + Launch.
Updated draft: `C:\Users\viole\Desktop\Biz Folder\Exo Biz\EXO-HTML\DOCUMENTATION\Business\Brand\Characters\Post-VSL-intros-product-suite-third-draft` - Look over it and give suggestions or recommendations to improve it, even overhauls are welcomed.  How about the Use of the cinematic style from the original. - Your thoughts?
**Recommended final frame:** Full cluster in rich dark atmospheric void (charcoal, particle haze).
All orbs orbiting Exo AI, Concierge ring encircling all. Camera pulls back. This is already written
as Scene 09.01/09.02 in `VSL/VSL_Visual_Production.md`.

---

## YOU ARE HERE
Steps 1, 2 (images), 4 ✅ complete.
**Immediate next actions:**
1. Generate Concierge ring second pass (you — manual) ✅ complete
2. Upload character sheets to Airtable records (you — drag & drop in UI, ~5 min)✅ complete
3. Step 3 — F1 scene prompt polish / other critical cinematic scene prompt polish (Claude, unblocked, say the word)
4. Step 5 — Batch Shotlist build (Claude, biggest unlock, say the word)

## User Quick Notes:
* I like the sound of everything in this roadmap, though I'd like use to plan before we starts generations - ask me my additions before you enter plan mode though. Also in this VSL video , there is also a  product suite now added with the 6 characters , that should be included in the shot list.
* Coming up with shots for the actual VSL end to end - it may have been drafted out via @VSL.md or similar files - that should be the starting point we add to / polish / improve upon at some point.  Also ensure that the ending reflects the  Product Suite now added before the final call to action and logo / branding at the end.  Don't forget that  in the title as well.
* Make high-end imagergy for the VSL video (e.g. F1 scences with Exo pitcrew, Exo Concierge and Product Suite metaphor from VSL Script) - however we generate it, AI reference frames should be 4K resolution,  cinematic , high-end , premium and premium quality. 
* **Video Production Style**: High-End ~10-15-20 Minute Cinematic Brand Explainer - Your thoughts? 

-- Side note unrelated to VSL - We must fix the @X-scale.html page on mobile view. It lets you scroll right and left instead of being stricyly vertical and it's exposing the hidden Lead magnet redirect annoucement banner at the top in mobile view (if visitors slides left or right on the X-Scale page) - which we don't want yet. It should be one continuous vertical scroll. Do not mess with the desktop layout or the announcements banner logic - that is fine as is.