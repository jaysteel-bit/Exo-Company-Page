# SSOT Skill Build — Session Handoff Doc

> **Purpose of this file:** Jay started a brainstorm on building a "Company Single Source of Truth" skill using the `/skill-creator` skill in Claude Code. We were in the **discovery/brainstorm phase** (before any skill code was written) when the session was paused for a computer restart. This file preserves the full conversation verbatim so the next Claude session can pick up exactly where we left off.

---

## Context for the next agent (read this first)

**Who:** Jay Steel — founder of Exo Enterprise. Copywriting-focused, values outcome-first messaging over jargon. (See user_jay.md in auto-memory.)

**What we're building:** A Claude Code skill that collects and structures all of a company's "soul" — mission, business model, sales processes, brand guidelines, lead acquisition system, etc. — into a single source of truth (folder or doc). The skill must handle both **first-time creation** and **intelligent updates/expansion** when called again.

**Where we are in the `/skill-creator` workflow:**
- ✅ Captured initial intent (Jay's brief)
- 🔄 **CURRENTLY HERE** — Brainstorming success criteria + open questions before writing the skill
- ⬜ Interview & research (deeper Q&A on edge cases)
- ⬜ Write SKILL.md draft
- ⬜ Test cases (evals/evals.json)
- ⬜ Run with-skill + baseline subagents in parallel
- ⬜ Review in eval viewer, iterate
- ⬜ Description optimization
- ⬜ Package as `.skill` file

**What I asked Jay (5 questions at the end of my last message) — STILL UNANSWERED:**
1. Who uses this most? (Just Jay, or team members too?)
2. What triggers an update? (Manual call vs. periodic prompt to review?)
3. Single file or folder? (I'm leaning folder — one file per domain.)
4. Where does it live? (Project dir vs. global Claude memory.)
5. What's the first test case? (Likely Exo Enterprise.)

**Next move when reviving:** Get Jay's answers to those 5 questions, then move into deeper interview (sourcing strategy, update/conflict resolution behavior, completeness signal). Once those are nailed down, draft SKILL.md.

**Reference paths:**
- Skill creator base: `C:\Users\viole\.claude\skills\skill-creator`
- Working dir for Jay's projects: `C:\Users\viole\Desktop\Biz Folder\Exo Biz\EXO-HTML`
- Auto-memory: `C:\Users\viole\.claude\projects\C--Users-viole-Desktop-Biz-Folder-Exo-Biz-EXO-HTML\memory\`

---

## Full conversation transcript (verbatim)

### Jay (initial brief):

> before we create the skills let's brainstorm all the things that are necessary to call the following skill concept a success:
>
> A skill that collects and structures all of a company's soul in one folder/document. Including [but not limited too] the following:  company mission/business model/sales processes/brand-guidelines/lead acquisition system/etc. - creating a company single source of turth. That can expand/update it effectively when the skill is called upon.

### Claude (response):

Good framing for a brainstorm. Let me think through the dimensions of success before we write a single line of the skill.

---

## What "success" means for this skill

### 1. The Output Is Genuinely Useful to Other Claude Sessions
The SSOT isn't just storage — it's a **reference layer**. Success means another session (copywriting, sales emails, onboarding) can read it and immediately know how to represent the company accurately. If an AI can write on-brand copy or handle an objection correctly just by reading the doc, the skill worked.

### 2. It Captures Implicit Knowledge, Not Just What's Written Down
Most founders have things in their head that aren't in any doc. Success here means the skill is good at **asking the right questions** to surface the stuff that would otherwise stay locked in the founder's head — the real positioning, the actual sales philosophy, the "we never say it this way" rules.

### 3. The Update Behavior Is Smart
This is where most "SSOT" attempts fail. When the skill is called again, it needs to:
- Recognize what's already there
- Identify what's changed or expanded
- Decide: overwrite, append, or flag a conflict
- Not destroy good existing content while adding new context

### 4. Structure Serves the AI Reader, Not Just the Human
The document architecture matters. A giant wall of text fails. Success means the output is **modular and queryable** — each section has a clear header, is self-contained, and a future Claude session can find what it needs fast.

### 5. Coverage Without Overwhelm
The skill needs to know when to go deep and when to stop. A 50-page document is useless. Success means it captures **the 20% of information that explains 80% of the company** — and knows the difference.

---

## The hard problems to solve

Here's what I think will actually determine if this skill is good or mediocre:

**Interview design** — What questions does it ask, and in what order? Does it adapt based on answers? Does it know when to probe deeper?

**Conflict resolution** — Old info says pricing is $X, new info says $Y. What does it do?

**Staleness signals** — Some info (team, pricing, offers) changes fast. Does the doc somehow flag what's time-sensitive vs. evergreen?

**Sourcing** — Does it pull from existing files (website copy, old docs, existing brand guides), or start from scratch with questions? Ideally both.

**Completeness signal** — How does it know when it's "done enough"?

---

## Questions before we write anything

1. **Who uses this most?** Just you (Jay, as the founder) or would other people on the team also update it?

2. **What triggers an update?** Do you call it when something changes, or does it periodically prompt you to review?

3. **Single file or folder?** I'm leaning toward a structured folder (one file per domain — brand, sales, model, etc.) so it's easier to update sections without touching everything. Thoughts?

4. **Where does it live?** In the project directory, or in a global Claude memory that any project can reference?

5. **What's the first thing you'd want to test this on?** Exo Enterprise?

---

## Resume instructions for the next session

Paste this into the new Claude window to revive instantly:

> I'm continuing a `/skill-creator` session from a previous chat. Read `C:\Users\viole\Desktop\ssot-skill-build.md` — it has the full transcript and a header explaining exactly where we left off. We were brainstorming success criteria for a "Company SSOT" skill and you asked me 5 questions I still need to answer. Pick up from there.

---

*File created: 2026-05-02. Project: Exo Enterprise SSOT skill build.*
