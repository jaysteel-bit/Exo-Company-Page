AGENT HANDOFF PROMPT — EXO ENTERPRISE VSL PRODUCTION
=====================================================
Working directory: C:\Users\viole\Desktop\Biz Folder\Exo Biz\EXO-HTML
Read this fully before doing anything. Then act.

---

WHO YOU ARE WORKING WITH
------------------------
Jay Steel — founder of Exo Enterprise, AI-first company, bootstrapping.
Copywriting-focused. Outcome-first messaging. No jargon.
Project: 15–20 min cinematic VSL called "The Bottleneck" for X-Scale Program (exoent.co/x-scale).
Narrator: "Exo" — a floating black obsidian orb AI character. TTS voice. Meta-proof of concept.

---

FIRST THING TO DO
-----------------
Read these 3 files in order. They will make everything make sense:

1. DOCUMENTATION/NOTEPAD/VSL-Roadmap.md         ← master status doc, read this first
2. DOCUMENTATION/NOTEPAD/session-context-dump.md ← full project context + character specs
3. DOCUMENTATION/VSL/Scripts-VSL/VSL_VO_Clean_3.md ← final TTS script (v4, all 9 sections)

Then read if needed:
- DOCUMENTATION/Business/Brand/Department-Orb-Specs.md  ← all 6 department orb visual specs
- DOCUMENTATION/VSL/VSL_Visual_Production.md            ← scene-by-scene video gen prompts (~150 scenes)

---

WHAT IS DONE — DO NOT REDO
---------------------------
✅ Exo AI character: R1–R6 reference images approved, in DOCUMENTATION/Business/Brand/Characters/Exo-AI/
✅ All 6 department orb images generated (ChatGPT Image-2), in Characters/<Department>/ folders:
   - Flow-OS/Flow-OS.png
   - Deal OS/Deal-OS.png (+ Deal-OS-2.png alternate)
   - EXA/EXA.png  (this is Exo Academy)
   - AURA/AURA-AI.png
   - Exo Launch/Exo Launch.png
   - Exo Concierge/exo-concierge-final.png  ← APPROVED FINAL (ring form, not a sphere)
✅ Character reference sheets built for all 6, saved in same folders as "<Name> Character Sheet.png"
✅ All 6 Airtable Asset records created (descriptions + Talent tag + Approved status)
✅ 4 Hormozi-adapted copywriting lines already integrated in VSL_VO_Clean_3.md v4 (confirmed)
✅ Airtable pipeline tested and confirmed working — SHT-00088 exists (Scene 01.01 Hook)
✅ Image generation pipeline tested — Freepik API key: FPSXe7e68a71e4fbbcc2e138849c64b3a294
   Script: generate_shot.py in project root

---

AIRTABLE — ALREADY CONNECTED VIA MCP
--------------------------------------
The Airtable MCP server is already configured and working. Use it directly.
Base: "Image Prompt Base"
Base ID: appqYUJYeZdSOhoZp

Tables:
- Cinematic Options  → tblF801knqusxotxX  (prompt fragment library)
- Shotlist           → tblijnHoehBu9oDfz  (one record per video clip, auto-assembles prompt)
- Assets             → tblkziaChed1bRHNR  (talent/character references)

Asset Record IDs (all department orbs):
- Exo AI:         recbPGuJ9WIM3qOcr  ✅ has character sheet uploaded
- Flow OS:        recTXRnxMRqSwlDQv  ⚠️ images not yet uploaded (Jay does this manually in UI)
- Deal OS:        recY8T3JzZICrPIoE  ⚠️ images not yet uploaded
- Exo Academy:    recyPdTldXMyczgqX  ⚠️ images not yet uploaded
- AURA AI:        recsEcnoFHfv8zDw7  ⚠️ images not yet uploaded
- Exo Launch:     recOkHbeC5UOq7H5w  ⚠️ images not yet uploaded
- Exo Concierge:  recUIApojFbP34Vmb  ⚠️ images not yet uploaded (status: In Review → update to Approved)

How the Shotlist works:
- Each record = one video clip
- Link cinematic options (Camera Body, Lens, Lighting, etc.) to pull prompt fragments
- Link Talent field to an Asset record → character sheet auto-populates via lookup
- "Cinematography Prompt" field assembles itself via formula — no manual writing
- Only existing record: SHT-00088 (Scene 01.01, Exo AI white void, Talent = Exo AI)

Cinematic Options — key record IDs you'll need for batch Shotlist build:
- ARRI ALEXA 65:        rec3qtbCoUZuWTDey  (Camera Body)
- 35mm Standard Lens:   rec7UAWh4xoguSdMd  (Focal Length)
- ARRI Signature Prime: rec5z90hiF5E24ZPZ  (Lens Type)
- Overcast Diffused:    rec72vnryR1NnxWlO  (Lighting Source)
- Volumetric:           rec9RRM9gfIMnArql  (Lighting Style)
- Lonely:               recAFAx7m8fjyTOLB  (Atmosphere)
- Ex Machina:           rec7E8BnHCbis4slW  (Look & Feel)
- Full list is in the Airtable Cinematic Options table — list_records to get all IDs if needed

---

WHAT JAY NEEDS TO DO MANUALLY (NOT YOUR JOB)
----------------------------------------------
- Upload character sheet images into each Airtable Asset record (drag & drop in Airtable UI)
- He may or may not have done this already — check by calling get_record on the Asset IDs above

---

NEXT ACTIONS IN ORDER OF IMPORTANCE
-------------------------------------

#1 — STEP 5: BATCH BUILD THE FULL SHOTLIST IN AIRTABLE  ← THE MAIN UNLOCK
   Read VSL_Visual_Production.md fully.
   Convert every scene (all ~120–155) into a Shotlist record.
   For each record: Subject & Action, Environment Description, link Cinematic Options, link Talent.
   The Cinematography Prompt assembles itself automatically once linked.
   This is what turns the production doc into a live generation queue.
   Confirm with Jay before starting — this is the big batch operation.

#2 — STEP 3: POLISH F1 SCENE + CINEMATIC PROMPTS
   A few early scenes in VSL_Visual_Production.md need a rewrite pass.
   Specifically Scene 03.02 (F1 pit stop) — make it more brand-aligned and cinematic.
   This is a writing task only, no images needed.

#3 — UPDATE CONCIERGE AIRTABLE STATUS
   Update record recUIApojFbP34Vmb: Status field → "Approved"
   (Exo Concierge final ring image was approved by Jay)

#4 — STEP 8 (FUTURE): Mirror Airtable to Google Sheets/Drive
   Full platform independence. Not urgent — do after VSL is in production.

---

PRODUCTION CONTEXT YOU NEED TO KNOW
--------------------------------------
VSL structure (9 sections):
01 Hook → 02 Pain → 03 Proof → 04 Plan (dept intros) → 05 Tuesday Morning
→ 06 First CTA → 07 FAQ → 08 Proof Stack → 09 Final CTA

Department intro order in Section 04:
Flow OS → Deal OS → Exo Academy → AURA AI → Exo Launch → Exo Concierge
(Concierge enters differently — ring expands FROM Exo AI, not off-screen)

Video clip generation tool targets: LTX-2, Luma, Kling, Seeddance 2.0 (3–8s clips)
Batch priority: Hook → Final Close → Tuesday Morning → Orb Cluster → everything else

Exo AI character anchor (paste into any video gen prompt):
"A perfectly smooth floating black obsidian orb. Mirror-grade gloss surface — jet black lacquer
with maximum reflectivity. Structured grid-lattice highlight in upper hemisphere — 4 to 6 curved
segments like cathedral window panes on a black pearl, reading dark silver-gray with deep black seams.
Lower hemisphere near-pure black. Hovers with slow breathing pulse (scale 1.0 → 1.03 → 1.0).
Photorealistic render quality."

---

FILES MAP (quick reference)
-----------------------------
VSL script (TTS-ready):          DOCUMENTATION/VSL/Scripts-VSL/VSL_VO_Clean_3.md
Video gen prompts (all scenes):  DOCUMENTATION/VSL/VSL_Visual_Production.md
Dept intro VO scripts:           DOCUMENTATION/VSL/VSL_Department_Intros.md
Exo AI visual spec:              DOCUMENTATION/Business/Brand/EXO-AI-Character-Spec.md
Department orb specs:            DOCUMENTATION/Business/Brand/Department-Orb-Specs.md
Roadmap:                         DOCUMENTATION/NOTEPAD/VSL-Roadmap.md
Session context:                 DOCUMENTATION/NOTEPAD/session-context-dump.md
Character images:                DOCUMENTATION/Business/Brand/Characters/<Department>/
Image gen script:                generate_shot.py (project root)
Character sheet script:          make_character_sheets.py (project root)

---

START HERE WHEN READY:
"Read VSL-Roadmap.md, then confirm you understand the current status and ask Jay
what he wants to tackle first — Step 5 batch Shotlist build or Step 3 scene polish."
