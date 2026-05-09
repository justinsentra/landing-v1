# Sentra · Brand

> **Structure beats scale.**
> Sentra is the brand for organizational memory — the substrate beneath your stack.

This document is the canonical voice, tone, and content reference for the Sentra landing page. It governs **what** the page says. For visual rules — tokens, components, motion — see `DESIGN.md`.

Source of truth: `~/Downloads/landing page design/README.md` and `~/Downloads/Landing page/Sentra Landing.html`. When this document and a source disagree, the source wins; update this file.

---

## 0. The thesis

Sentra records what teams know — interactions, facts, actions — and structures that knowledge **at write-time** into a single queryable graph.

The product is **not** an API (a pipe), **not** a memory framework (a bucket), **not** a vector database (a haystack). It is a **substrate** — a structured graph of three memories:

- **Interaction memory** — meetings, messages, threads
- **Factual memory** — canonical decisions, dates, owners
- **Action memory** — commitments, drift, follow-through

Every word on the page exists to make this idea feel inevitable.

---

## 1. The five voice traits

### 1.1 Declarative, not persuasive

Sentences end. They do not trail off into qualifiers.

> ✓ The substrate beneath your stack.
> ✗ A substrate that sits beneath your stack and helps you with…

### 1.2 Triadic

Almost everything comes in threes — three memories, three axioms, three feature columns, three monogram bands. Three is structured without being decorative.

### 1.3 Anti-metaphor

When metaphors appear (pipe, bucket, haystack) they are named in order to be **rejected**. Sentra refuses to be a metaphor.

### 1.4 Precise nouns

Load-bearing nouns: _substrate, graph, commitment, drift, canonical._
Quiet verbs: _fetch, remember, hold, capture, structure._
The product **remembers**. It does not "empower" or "unlock."

### 1.5 Documentary register

Section labels read like archival metadata: `BK-2026-05-001`, `08 ARTIFACTS`, `WRITE-TIME GRAPH CONSTRUCTION`. The page reads like a document being filed, not a website being marketed.

---

## 2. The rhetorical signature: anaphora in threes

Short, declarative, repeating openings.

> An API is a pipe.
> A memory framework is a bucket.
> A vector database is a haystack.
> Sentra is none of these.

> Connectors fetch. Sentra remembers.

> The intelligence is not in the model. It is in the architecture.

When in doubt, write three sentences with the same opening cadence and stop.

---

## 3. Casing & punctuation

| Element        | Rule                                                                                   |
| -------------- | -------------------------------------------------------------------------------------- |
| Body copy      | Sentence case. Terminal periods.                                                       |
| Section labels | UPPERCASE in `mono-label` (12px, +0.08em)                                              |
| Numerals       | Mono. Section markers `01 / 09`. Versions `v1.0`.                                      |
| Dates          | Em-dashes, not hyphens: `2026—05—08T00:00Z`                                            |
| File IDs       | `BK-YYYY-MM-NNN`                                                                       |
| First person   | Avoid. Prefer impersonal: _Sentra remembers. The graph holds. The substrate persists._ |
| Second person  | Rare. Never as hype.                                                                   |
| Questions      | Never in headlines.                                                                    |

---

## 4. Forbidden register

These never appear on the page. Pre-commit grep enforces this.

**Forbidden words** _(case-insensitive)_: `supercharge`, `unlock`, `empower`, `level up`, `game-changer`, `game changer`, `AI-powered`, `simply`, `easy`, `just`, `meet`, `introducing`.

**Forbidden punctuation**: `!` (exclamation points). `?` in headlines.

**Forbidden tense**: present continuous marketing tense ("we're building…").

**Forbidden concept**: the literal word **AI** never appears, anywhere. The word **model** appears once, only to be repositioned: _"The intelligence is not in the model. It is in the architecture."_

**Forbidden tropes**: emoji, exclamation rhythm clichés ("and that's it"), em-dash sentence-rhythm patter.

---

## 5. The wordmark headline

The brand has one tagline. It does not describe a feature; it describes a condition.

> **A company that remembers itself.**

Used **twice and only twice**: the hero (cover) and the footer (closing). It is never a section title. It is never decorated.

---

## 6. The page sequence (canonical order)

The landing page follows the eight-artifact order of the brand-system document, expanded with marketing-rich sections from `Sentra Landing.html`. Three axiom strips break the rhythm.

```
00  HERO              "A company that remembers itself."
                      Cover — chrome canvas, wireframe overlay.
─────────────────────────────────────────────────────
        AXIOM · 01    "An API is a pipe. A memory framework is a bucket.
                       A vector database is a haystack. Sentra is none of these."
─────────────────────────────────────────────────────
01  THREE MEMORIES    Three memories. One graph.
                      INTERACTION / FACTUAL / ACTION.
02  CHIEF OF STAFF    A chief of staff for every person.
                      A program manager for every team.
    ASCII PRIMITIVE   Three-memories ASCII table (typewriter on scroll).
─────────────────────────────────────────────────────
        AXIOM · 02    "The intelligence is not in the model.
                       It is in the architecture."
─────────────────────────────────────────────────────
03  ARCHITECTURE      Most memory tools give you fragments.
                      Sentra gives you the graph.
04  CONTEXT GRAPH     Motion · nodes before edges.
05  AGENTS            Agents that read the graph, not the chat log.
06  PIPELINE          Connectors fetch. Sentra remembers.
                      Write-time graph construction.
    ASCII PRIMITIVE   Drift detection ASCII table.
─────────────────────────────────────────────────────
        AXIOM · 03    "Connectors fetch. Sentra remembers."
─────────────────────────────────────────────────────
07  APPS              The graph, on every surface.
                      Chrome / Slack / Email / Web.
08  FINAL CTA         "A company that remembers itself."
                      Request access · Read the spec.
─────────────────────────────────────────────────────
    FOOTER            Inverted ink. STRUCTURE BEATS SCALE in cobalt.
```

Section numbers display as `NN / 09` in the bottom-right of every section.

---

## 7. The three axioms (verbatim)

These are not editable. They are the only place the brand's voice fully condenses.

| #   | Axiom                                                                                                       |
| --- | ----------------------------------------------------------------------------------------------------------- |
| 01  | An API is a pipe. A memory framework is a bucket. A vector database is a haystack. Sentra is none of these. |
| 02  | The intelligence is not in the model. It is in the architecture.                                            |
| 03  | Connectors fetch. Sentra remembers.                                                                         |

Each strip is bordered by `hairline-strong` dashed lines, labeled `AXIOM · 0N` in cobalt mono, and counted `A0N / 03` on the right.

---

## 8. Section copy (final, voice-checked)

### Hero

- **Headline:** A company that remembers itself.
- **Lede:** Sentra records what teams know — interactions, facts, actions — and structures that knowledge at write-time into a single queryable graph. The substrate beneath your stack.
- **CTAs:** Request access → · Read the spec
- **Eyebrow:** `READ OUR RESEARCH`

### Three memories (FeatureTriad)

- **Heading:** Three memories. One graph.
- **Cells:**
  - INTERACTION — _Meetings, messages, threads._ Every conversation is captured and bound to actors, decisions, and dates at the moment it happens. Not after.
  - FACTUAL — _Canonical decisions hold._ A single source of truth per decision. Owners, dates, scope. Drift is detected against the canonical, not against guesses.
  - ACTION — _Commitments, drift, follow-through._ Promises become first-class objects. The graph knows what was decided, who owns it, and where it stalled.

### Chief of staff

- **Eyebrow:** `01 / 09 · BUILT FOR NORMAL WORK`
- **Heading:** A chief of staff for every person. A program manager for every team.
- **Sub:** Sentra does not ask your team to manage another system. It listens to the systems you already use, remembers all of it, and tells the right people what matters next.
- **Triad recap:** Factual memory · Action memory · Interaction memory
- **Four cells:** Unified memory · Meeting intelligence · Risk awareness · Action log

### Architecture (Different)

- **Eyebrow:** `02 / 09 · ARCHITECTURE`
- **Heading:** Most memory tools give you fragments. Sentra gives you the graph.
- **Sub:** An API is a pipe. A memory framework is a bucket. A vector database is a haystack. The category is having a moment. The architecture is what produces comprehension.
- **Comparison rows:** Where structure is built · What it captures · How drift is signaled

### Agents

- **Eyebrow:** `03 / 09 · AGENTS`
- **Heading:** Agents that read the graph, not the chat log.
- **Three agents:**
  - **Chief of Staff agent** — reads canonical decisions; writes briefings, action lists, status.
  - **Program Manager agent** — reads commitments; writes drift reports, owner pings, deadline shifts.
  - **Risk agent** — reads action memory; writes flagged threads, broken promises, escalations.

### Pipeline

- **Eyebrow:** `04 / 09 · PIPELINE · WRITE-TIME GRAPH CONSTRUCTION`
- **Heading:** Connectors fetch. Sentra remembers.
- **Three paragraphs:**
  - _Most systems structure at query-time._ The user asks; the system guesses; the answer is reconstructed each time. Cost compounds. Drift compounds.
  - _Sentra structures at write-time._ Every interaction is classified, bound to canonical entities, and emitted as typed edges the moment it lands. The graph is built once.
  - _The intelligence is not in the model._ It is in the schema, the binding rules, and the index that lets the graph answer in a single hop.

### Apps

- **Eyebrow:** `05 / 09 · APPLIED`
- **Heading:** The graph, on every surface.
- **Four cards:** Chrome extension · Slack · Email · Web app

### Final CTA

- **Headline:** A company that remembers itself.
- **CTAs:** Request access → · Read the spec
- **Caption:** `BK-2026-05-001 · v1.0 · STRUCTURE BEATS SCALE`

### Footer

- **Slogan:** STRUCTURE BEATS SCALE _(cobalt, two-line stack)_
- **System column:** Identity · Color · Typography · Structure · Diagrams · Motion · Applied
- **Contact:** hello@sentra.systems
- **Caption:** `BK-2026-05-001 · v1.0`

---

## 9. ASCII registers

Sentra has no icons. Where another brand reaches for an icon, Sentra reaches for a **mono caption** or for **ASCII**. The two ASCII primitives on the page:

### Three memories

```
┌──────────────┬─────────────────────────────────────────────┐
│ INTERACTION  │ meetings · messages · threads               │
├──────────────┼─────────────────────────────────────────────┤
│ FACTUAL      │ canonical decisions · dates · owners        │
├──────────────┼─────────────────────────────────────────────┤
│ ACTION       │ commitments · drift · follow-through        │
└──────────────┴─────────────────────────────────────────────┘
```

The FACTUAL row is rendered in cobalt — the only colored line in the diagram.

### Drift detection

```
┌──────────────────────┬──────────┬──────────────────────┐
│ DECISION             │ STATUS   │ DOWNSTREAM SURFACE   │
├──────────────────────┼──────────┼──────────────────────┤
│ Ship Q2 by APR 15    │ CANON    │ jira-882 · doc-441   │
│ Pricing tier rename  │ ⚠ DRIFT  │ site-hero · faq-12   │
│ Vendor consolidation │ ACK      │ slack-thread #9281   │
└──────────────────────┴──────────┴──────────────────────┘
```

Drift is signaled with `⚠`, never with red.

### Allowed Unicode glyphs (only these)

`⚠` drift · `→ ← ↑ ↓` directional edges · `·` metadata separator · `█` solid bands · `─ │ ┌ ┐ └ ┘ ├ ┤ ┬ ┴ ┼` box drawing.

Everything else — emoji, icon fonts, illustration — is forbidden.

---

## 10. Voice audit checklist

Before any copy lands on the page, run it against this list.

- [ ] Sentences end. No qualifying trail-offs.
- [ ] If three things are listed, they are three (not two, not four).
- [ ] Metaphors appear only to be rejected.
- [ ] Forbidden words (§4) absent. `grep -iE 'supercharge|unlock|empower|simply|easy|just\b|level up|game.?changer|AI-powered|introducing|meet '` returns nothing.
- [ ] No exclamation points. No question marks in headings.
- [ ] No first-person plural ("we're building").
- [ ] Em-dashes in dates, hyphens in IDs.
- [ ] If an icon was tempting, a mono-label was used instead.

---

## 11. The brand's load-bearing one-liners

Memorize these. They are the spine.

| Position          | Line                                                             |
| ----------------- | ---------------------------------------------------------------- |
| Hero & footer     | A company that remembers itself.                                 |
| Hero meta         | Structure beats scale.                                           |
| Architecture lede | Connectors fetch. Sentra remembers.                              |
| Pipeline thesis   | The intelligence is not in the model. It is in the architecture. |
| Identity          | The substrate beneath your stack.                                |
