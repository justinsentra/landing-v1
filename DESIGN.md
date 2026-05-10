# Sentra · Design

> Visual system for the Sentra landing page. Every token, every component, every motion curve is documented here. Pair with `BRAND.md` (voice & content).

This document is the canonical visual reference. The build hews to it. When this file disagrees with `~/Downloads/landing page design/colors_and_type.css` or `README.md`, the source wins; update this file.

---

## 0. The four moves no one else owns

Sentra is identifiable by exactly four things. Lose any one, and it stops being Sentra.

1. **Dashed hairlines as the universal structural element** — never solid rules on layout boundaries. (Form inputs and search controls are conventionally solid; that's not a layout boundary.)
2. **A three-band monogram** — ink / cobalt / ink — the middle band is the brand's only color.
3. **ASCII as the diagrammatic register** — no icon set, no illustration, no isometric anything.
4. **Cobalt at 5% of surface** over cool paper — `#2F6BD1` is a margin highlight, not a banner.

---

## 1. Color tokens

The system has three groups: **light surfaces**, **dark surfaces**, and **glass**. Use tokens; never raw hex.

### Light surfaces (canvas, cards, type)

| Token                | Hex                     | Role                                  |
| -------------------- | ----------------------- | ------------------------------------- |
| `--bg`               | `#F4F5F7`               | Canvas. Cool steel paper, near-white. |
| `--surface`          | `#FAFBFC`               | Cards, ASCII blocks, hover ground.    |
| `--fg`               | `#0E0E12`               | Primary type, dark surfaces.          |
| `--primary`          | `#2F6BD1`               | Cobalt. The single accent.            |
| `--primary-deep`     | `#1A4AA3`               | Pressed states, captions.             |
| `--primary-wash`     | `rgba(47,107,209,0.04)` | Quote/callout ground.                 |
| `--primary-tint`     | `rgba(47,107,209,0.07)` | Open-state row ground.                |
| `--primary-edge`     | `rgba(47,107,209,0.22)` | Cobalt hairline accents.              |
| `--hairline-subtle`  | `rgba(14,14,18,0.12)`   | Secondary dividers.                   |
| `--hairline-default` | `rgba(14,14,18,0.22)`   | Structural dividers (workhorse).      |
| `--hairline-strong`  | `rgba(14,14,18,0.42)`   | Highest level of structure only.      |
| `--muted`            | `#71717A`               | Tertiary text.                        |
| `--mono-ink`         | `#525252`               | Metadata labels (raw, not tokenized). |

### Dark surfaces (hero, agents, final CTA, footer)

| Token            | Value                    | Role                        |
| ---------------- | ------------------------ | --------------------------- |
| `--hero-ink`     | `#06070A`                | Pure ink ground for hero.   |
| `--ink-d-strong` | `rgba(239,241,244,0.92)` | Headlines on dark.          |
| `--ink-d-body`   | `rgba(239,241,244,0.78)` | Body copy on dark.          |
| `--ink-d-muted`  | `rgba(239,241,244,0.55)` | Tertiary copy on dark.      |
| `--ink-d-faint`  | `rgba(239,241,244,0.45)` | Footer headers, meta.       |
| `--ink-d-edge`   | `rgba(239,241,244,0.22)` | Hairlines on dark surfaces. |
| `--ink-d-hush`   | `rgba(239,241,244,0.16)` | Faintest hairlines on dark. |

### Glass scale (page-meta strip, nav-cta on dark)

| Token        | Value                    | Use                   |
| ------------ | ------------------------ | --------------------- |
| `--glass-xs` | `rgba(255,255,255,0.08)` | Faint glass fill.     |
| `--glass-sm` | `rgba(255,255,255,0.16)` | Hover ground on dark. |
| `--glass-md` | `rgba(255,255,255,0.26)` | Glass CTA fill.       |
| `--glass-lg` | `rgba(255,255,255,0.34)` | Glass CTA hover.      |

### Three observations the system depends on

1. The background is **steel, not white, not paper**. `#F4F5F7` is a cool, near-white grey with no warmth. Never substitute `#FFFFFF`. Never warm it.
2. The foreground is **near-black with a blue cast** (`#0E0E12`). Pure black would feel printed; this reads as ink on a screen.
3. **Cobalt is the only accent.** `#2F6BD1` is a tuned, slightly desaturated cobalt — louder than navy, quieter than electric. The discipline is **5% of surface**.

**Surface ratio (memorize):** `BG 60% / FG 25% / hairlines 8% / primary 5% / muted 2%`.

**Forbidden:** gradients (except hero chrome and the cobalt-tinted `.pipe-item.is-open` ground), tints outside the cobalt-wash family, semantic colors for state (success/warning/error). Drift uses `⚠`, never red. The single sanctioned exception is the macOS-style traffic-light dots in code-bar mocks (`#ff5f56 #ffbd2e #27c93f`) — these are diegetic chrome inside a depicted code editor, not site state.

---

## 2. Typography · Geist + Geist Mono

Two families do all the work. Sans is what the brand says about itself; mono is what the brand **is** — the framing, the file paths, the section numbers.

```
display-2xl  80 / 500 / 1.00 / -0.034em  Geist Sans   final-CTA hero
display-xl   56 / 500 / 1.06 / -0.028em  Geist Sans   section heads, agents, research
display-l    40 / 500 / 1.10 / -0.026em  Geist Sans   sub-display, rt-h, rp-h
display-m    32 / 500 / 1.18 / -0.022em  Geist Sans   ra-act-title, mb-h
display-s    24 / 500 / 1.22 / -0.018em  Geist Sans   fn-question, mb-thesis, mb-coda, demo-quote
body-l       18 / 400 / 1.60 / -0.01em   Geist Sans   ledes, sec-sub, agents p
body-m       16 / 400 / 1.60 / -0.005em  Geist Sans   primary body, demo input
body-s       14 / 400 / 1.55 / -0.005em  Geist Sans   nav links, foot links, card excerpts
mono-label   12 / 500 / 1.50 /  0          Geist Mono   labels, meta, eyebrows, sec-head, code-bar
mono-meta    11 / 400 / 1.50 /  0          Geist Mono   smallest mono — counters, foot headers, fn-card-head
```

**That's the entire scale.** No 13px, no 15px, no 17px, no 22px, no 30px, no 60px. If a value isn't on this list, it's drift. Aggressive snap was applied 2026-05-09; the system is closed.

### Rules

- **Display weight is 500, not 700.** Bold would make it loud; medium makes it certain.
- **Negative tracking on display** (confidence). **Positive on mono** (technical, archival).
- **Body line-height 1.60.** Editorial. The brand wants readers, not skimmers.
- `text-wrap: balance` on every display heading. Headlines break by meaning, not by container width.
- `text-wrap: pretty` on lede paragraphs (graceful degradation in non-supporting browsers).
- `font-feature-settings: "tnum" 1` on mono — tabular numerals so the live clock and section counters do not jitter.
- `-webkit-font-smoothing: antialiased` on `body` for crisper macOS rendering.
- The wordmark **Sentra** is set at weight 600, tracking `-0.04em`, with a single short horizontal bar (cap-height-aligned, baseline-seated) to its left echoing the monogram.

### Loading

Geist via `next/font/google`. Subset `latin`. Variable: `--font-sans`. Preload weights **500** and **600** only (display weights). Body 400 lazy-paints.

---

## 3. Spacing & grid

**Scale (strict 8-based):** `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`

No 6, 10, 14, 18, 20, 22, 36 — those were snapped out 2026-05-09. If you need a value between 16 and 24, choose one or the other; don't invent 18 or 20. The discipline of the scale is what makes the rhythm legible.

**Grid:** 12 columns, **32px gutters**, **1200px max width** via `--container` and `--gutter`. Use `.container` on every section root; never set widths inline.

### Section rhythm — canonical tokens

Every vertical padding on a section root must use one of these. No raw px.

| Token                    | Value | Use                                                              |
| ------------------------ | ----- | ---------------------------------------------------------------- |
| `--section-major`        | 96px  | Major content sections (`.section`, `.fn-section`, agents grid). |
| `--section-sub`          | 64px  | Sub-sections, transitions, margin between block + heading.       |
| `--section-inline`       | 48px  | Inline boxes, ASCII blocks, axiom strips, mb-cell.               |
| `--section-top`          | 192px | Subpage first section under fixed nav.                           |
| `--section-top-sm`       | 128px | Subpage page top on narrow viewports (≤ 760px).                  |
| `--section-top-final`    | 128px | Final-CTA hero top padding.                                      |
| `--section-top-final-sm` | 96px  | Final-CTA hero top on narrow viewports.                          |

Box internal padding: `--box-pad: 32px`. Card-internal padding: `--box-pad` plus 4px–8px optical adjustment per side as needed.

### The compound-padding rule (load-bearing)

> **A section owns only its top padding. The bottom edge belongs to the next section's top — never compound.**

Concretely, every section-level CSS rule uses `padding: var(--section-X) 0 0` — top only, not `var(--section-X) 0` (which produces both top and bottom). This includes `.section`, `.fn-section`, `.agents-grid`, and any other element acting as a "section root."

**Why it matters:** Editorial layout requires a heading-block sandwiched between two content slabs to be optically centered. If section padding is symmetric (96 top, 96 bottom), the gap above a heading compounds to 192px (96 from prev section + 96 from this section) while the gap below the heading is only 96px (the grid's `margin-top`). That's geometrically off-center by 96 pixels — the bug Justin spotted on the Different section.

With top-only section padding, both gaps are 96. Headings sit in the optical middle of their breathing room, the way Swiss/editorial layout demands.

**Internal block paddings** (e.g., `.int-empty { padding: var(--section-sub) 0 }`, `.mb-thesis { padding: 64px 0 }`) keep symmetric padding because they're discrete blocks with their own framing — they're not section roots, so the compound-padding rule doesn't apply.

### Breakpoints

| Range       | Behavior                                                                                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `≥ 900px`   | Full 12-col grid as designed. Container 1200px max.                                                                                                           |
| `760–900px` | Agents grid stacks. ChiefOfStaff goes 2×2. Some sections drop to single-column.                                                                               |
| `≤ 760px`   | Single column. Triads stack with horizontal dashed dividers. Page-top padding `--section-top-sm` (96px). Nav-mid hidden; nav collapses to lockup + CTAs only. |
| `≤ 720px`   | `--gutter` reduces to 20px.                                                                                                                                   |
| `≤ 600px`   | Form rows go single-column. Security grid goes single-column.                                                                                                 |

---

## 4. Hairlines as grammar

Almost every layout boundary is a **1px dashed hairline**. Not solid. **Dashed.**

| Class          | Token                | Use                                                    |
| -------------- | -------------------- | ------------------------------------------------------ |
| `hair-subtle`  | `--hairline-subtle`  | Secondary dividers, inside cards.                      |
| `hair-default` | `--hairline-default` | The workhorse, almost everywhere.                      |
| `hair-strong`  | `--hairline-strong`  | Only at the highest level of structure (axiom strips). |

A solid rule reads as _finished_; a dashed rule reads as _under construction, technical, schematic_. The whole site feels like a working specification rather than a finished marketing site, and the dashed line is the single most responsible element for that feeling.

---

## 5. Corner radii

```css
* {
  border-radius: 0 !important;
}
```

That `!important` is intentional and zealous. **There are no rounded corners anywhere in Sentra.** If a third-party UI primitive has rounded corners, in Sentra it is square.

(This is the one place where `make-interfaces-feel-better`'s "concentric border radius" rule does not apply — Sentra has zero radius everywhere, parents and children alike. Concentricity is satisfied by being uniformly zero.)

---

## 6. Surfaces, shadows, transparency

- **No drop shadows.** Anywhere.
- **No glassmorphism, no glow, no inner shadows.**
- **No backdrop-blur** except on fixed page meta (which uses `mix-blend-mode: difference`, not blur).
- **Transparency** is used only on the page-meta strip.
- **Image outlines** (per `make-interfaces-feel-better`): every `<img>`, `<canvas>`, or `<video>` gets a `1px` outline at `rgba(0, 0, 0, 0.1)` — pure black at 10%, never tinted slate or zinc, since a tinted outline picks up the surface and reads as dirt.

The brand's elevation system **is the dashed hairline.** Nothing floats. Things are filed.

---

## 7. Backgrounds & imagery

- The canvas is `--bg`. Sections never tint, never gradient.
- **The hero — and only the hero — uses imagery.** A procedurally generated _liquid chrome_ canvas: 6px cell grid, flow field of four sine waves at different angles plus a slow domain warp. Eight monotonic stops `blackened ink → night slate → deep steel blue → brand-leaning steel → cool blue-silver → chrome silver → pale highlight`. Gamma-curved `v^1.30` so highlights are rare.
- The chrome is the brand's **one piece of poetry**.
- No stock photography. No 3D renders. No isometric illustrations. No characters. No stickers.
- The footer is the only **inverted** surface besides the hero: dark ink (`--fg`) ground, hairline-divided columns, slogan **STRUCTURE BEATS SCALE** in cobalt.

---

## 8. Iconography

**Sentra has no icon system.** This is a deliberate refusal, not an oversight.

### Allowed

- Unicode glyphs _(used surgically)_: `⚠ → ← ↑ ↓ · █ ─ │ ┌ ┐ └ ┘ ├ ┤ ┬ ┴ ┼`
- The monogram itself (the only "icon" the brand owns; a literal diagram of the product).
- The wordmark bar.

### Forbidden

- Lucide, Heroicons, Material, Phosphor, any icon font or SVG icon set.
- PNG icons. Emoji. Illustrations. Characters. 3D objects.

### If you need an icon

Stop. Ask whether you need a **mono label** instead. The answer is almost always yes. If a button is so small only a glyph fits, substitute a single ASCII character (`+`, `→`, `×`) at `mono-label` weight and tracking, and document the substitution in a code comment.

---

## 9. Logos & lockup

Files in `public/` (copied from `~/Downloads/landing page design/assets/`):

| File                  | Use                                                            |
| --------------------- | -------------------------------------------------------------- |
| `monogram.svg`        | Three bands, ink/cobalt/ink. Use at any size; never recolor.   |
| `wordmark.svg`        | "Sentra" with the leading bar, weight 600, tracking -0.04em.   |
| `lockup.svg`          | Horizontal lockup of monogram + wordmark with 1em clear space. |
| `lockup-inverted.svg` | Same lockup on dark grounds.                                   |

**Clear-space:** minimum 1× cap-height around the wordmark; 1× band-height around the monogram.

---

## 10. Buttons

Three variants. No others. Each is bound to a specific surface context.

### Primary — on light surfaces

```
class:       .demo-submit (and any .btn-primary on light bg)
background:  var(--primary)
color:       #fff
padding:     0 (height 52px)  •  full-width form CTA
weight:      500
size:        15px
hover:       background → var(--primary-deep)
focus:       2px solid var(--primary), 2px offset
```

Used on the demo form, contact form. The single cobalt-fill CTA on the site.

### Glass — on dark surfaces (hero, final CTA)

```
class:       .btn.btn-solid
background:  var(--glass-md)  →  var(--glass-lg) on hover
color:       var(--ink-d-strong)
border:      1px solid rgba(255,255,255,0.16)
backdrop:    blur(8px)
padding:     12px 22px (height 44px)
weight:      500
```

The visual of "ink suspended in glass." Only on the hero and final-CTA dark grounds. Never on light pages.

### Ghost / nav-pill — secondary, on any surface

```
class:       .nav-cta, secondary CTAs
background:  transparent
color:       inherits surface ink
border:      1px solid currentColor at 0.22 opacity (color-mixed for current surface)
padding:     8px 14px (height 38px)
hover:       border-style: solid; background → glass-sm or surface
```

Smaller hit target than primary because it lives in dense nav strips. Hit area extended via `::after` pseudo-element to ≥ 40×40px.

### Cross-cutting button rules

- **No scale-on-press.** Press = border thickening to 2px. Sentra refuses `scale(0.96)` from `make-interfaces-feel-better` — it would feel toy-like against the documentary register.
- **Hit area** ≥ 40×40px on every interactive element. Extend with `::after` if the visible target is smaller.
- **Focus:** 2px solid `var(--primary)` outline at 2px offset. Always visible. Never removed.
- **Tabular numerals** on any button label that includes numbers.
- **No `transition: all`.** Specify exact properties (`background`, `color`, `border-color`, `border-width`).

---

## 11. Components (`src/components/landing/`)

Single flat namespace under `landing/`. PascalCase filenames.

| Component                                               | "use client" | Responsibility                                                                                                                                                                                           |
| ------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Nav`                                                   | yes          | Wordmark left, Research/Manifesto/Blog mid, Demo CTA right. Drives `--nav-mix` from scroll for color transition (see §11.1).                                                                             |
| `Hero`                                                  | no           | Headline, lede, single Glass CTA, Backed-by row. Above-fold images use `priority`.                                                                                                                       |
| `DarkBackdrop`                                          | no           | Variant-driven dark ground (`hero` / `final` / `agents`). No canvas — solid `--hero-ink` plus optional halftone.                                                                                         |
| `ChiefOfStaff`                                          | no           | 4-card grid (unified memory / meeting intel / risk / action). Each card has an Image + caption.                                                                                                          |
| `Pipeline`                                              | yes          | Connect / Graph / Recall accordion. `useState` controls open layer; CSS handles visuals.                                                                                                                 |
| `Different`                                             | no           | "What makes Sentra different?" + 3 rows of side-by-side comparison cells with images.                                                                                                                    |
| `Agents`                                                | no           | Dark-section partner logos + code window. AI partner Marks (Claude/ChatGPT/etc) inline as components.                                                                                                    |
| `Apps`                                                  | no           | Tools grid + "View all integrations" Link.                                                                                                                                                               |
| `Functions`                                             | yes          | Horizontal-scroll card rail. `useEffect` for scroll-snap measurement and rail observation.                                                                                                               |
| `Security`                                              | no           | 4-column compliance grid with dashed verticals.                                                                                                                                                          |
| `FinalCTA`                                              | no           | Dark hero with CTA + composed `SiteFooter`. Used at the bottom of every route.                                                                                                                           |
| `SiteFooter`                                            | no           | 4-column dark footer. Internal links use `<Link>`; `#` placeholders use `<a>`.                                                                                                                           |
| `LegalView`                                             | no           | Shared shell for `/terms`, `/privacy`, `/data-privacy`. Renders title + lede + "Last updated" + cell-stack of clauses.                                                                                   |
| `IntegrationsView`                                      | no           | Server component. Pre-renders ~210 cards with `BrandIcon` SVGs inlined.                                                                                                                                  |
| `IntegrationsFilter`                                    | yes          | Client shell. Receives cards via `children`. Filters by name/category/hint reading data-\* props. Search + select + view-more.                                                                           |
| `BlogView`, `DemoView`, `ResearchView`, `ManifestoView` | mixed        | Per-route page bodies. `DemoView` mounts `DemoForm` (`use client`). Others are pure server.                                                                                                              |
| `DemoForm`                                              | yes          | Form state + submission. Standard React form pattern.                                                                                                                                                    |
| `BrandIcon`                                             | no           | Reads `brand-paths.ts` (server-only at the call site) and renders inline SVG via `dangerouslySetInnerHTML`. Three kinds: `logo` (full color), `mono` (`.brand-mono` ink), `tile` (letter tile fallback). |
| `brand-icons.tsx`                                       | no           | Hand-coded SVG components for non-brand marks (`SentraMark`, `ClaudeMark`, `ChatGPTMark`, `CursorMark`, `LangGraphMark`).                                                                                |

### 11.1 Nav text color transition (`--nav-mix`)

`Nav.tsx` writes `--nav-mix` and `--nav-lift` to its wrapper element. CSS rules on `.wordmark` and `.nav-link` resolve color via:

```css
color: color-mix(in oklab, #eff1f4, #0e0e12 calc(var(--nav-mix, 0) * 100%));
```

**Endpoints are fully opaque** (`#eff1f4` near-white, `#0e0e12` ink). Mixing through translucent colors makes the result semi-transparent and renders darker than expected on light surfaces — that was a bug we hit. Don't reintroduce alpha into either endpoint.

**Routing logic** in `Nav.tsx`:

- `LIGHT_ROUTES` = every route except `/`. On these, mix is pinned to `1` immediately (full ink at scroll-top).
- On `/` (home dark hero): mix derives from section-overlap with the band `[NAV_TOP - NAV_BAND, NAV_TOP + 2·NAV_BAND]` and rises smoothly through `smoothstep` as the user scrolls past the dark hero into light sections.

`--nav-lift` is currently unused in CSS but exposed for future scroll-driven decoration. `LIFT_SCROLL = 600` is the scroll budget if it's ever needed for a `MIX_FLOOR + (1 - MIX_FLOOR) * lift` style transition (we tried and rejected this; ink-on-light reads better than gray).

### 11.2 Server / Client split — IntegrationsView pattern

`IntegrationsView` is **server** and inlines all ~210 brand SVGs as static HTML by invoking `BrandIcon` at render time. Brand-paths.ts is a 110 kB module containing every SVG body — keeping it on the server prevents it shipping in the JS bundle.

`IntegrationsFilter` is **client**. Receives the card list as `children`, reads `data-name` / `data-category` / `data-hint` props for filter state, and renders the visible subset. Same pattern applies to any future page that combines a heavy data module with a thin filter UI.

The split dropped `/integrations` First Load JS from **216 kB → 108 kB**.

Each is ≤ 200 lines TSX. Marketing-only sections (`ChiefOfStaff`, `Architecture`, `Agents`, `Pipeline`, `Apps`, `FinalCTA`) live in `src/components/sections/`.

---

## 12. Motion

One easing curve does almost all the work:

```css
--ease: cubic-bezier(0.16, 1, 0.3, 1);
```

A fast attack, long settle. The curve of something **being placed**, not something being thrown.

### Durations

| Token        | Value  | Use                                      |
| ------------ | ------ | ---------------------------------------- |
| `--dur-fast` | 180ms  | Hover, focus.                            |
| `--dur-med`  | 320ms  | Component entrances.                     |
| `--dur-slow` | 640ms  | Hero stagger end-to-end.                 |
| `--pulse`    | 4000ms | The single primary edge in ContextGraph. |

### Choreographed sequences

**Hero entrance** (orchestrated, runs once on load):

```
Monogram band 1   →  0ms
Monogram band 2   →  80ms
Monogram band 3   →  160ms
Wordmark          →  240ms
Eyebrow           →  340ms
Headline          →  440ms
Lede              →  560ms
CTAs              →  680ms
Bottom meta       →  820ms
```

Stagger via Motion's `staggerChildren: 0.10`. Apply `initial={false}` to any `AnimatePresence` whose default state should already be visible (prevents flash on hydrate).

**ContextGraph** (triggered by IntersectionObserver, threshold 0.3):

```
Phase 0 → idle
Phase 1 → nodes fade + slide 8px (5 × 80ms stagger = 400ms)
Phase 2 → edges draw via stroke-dashoffset (6 × 120ms = 720ms)
Phase 3 → cobalt edge opacity pulse, 4s loop, infinite
```

**AsciiBlock** (typewriter): characters reveal at ~6 chars / RAF tick. Long enough to read as transmission, short enough not to be precious. **Honors `prefers-reduced-motion`: render full text instantly.**

**HeroChrome**: perpetual flow. Pauses when off-screen. Under reduced-motion, renders one static frame.

### Forbidden motion

- No bounces. No springs with `bounce > 0`. _(Per emil-design-eng: when a spring is needed elsewhere, bounce must always be 0. We don't use springs.)_
- No parallax.
- No scroll-linked transforms beyond the AsciiBlock typewriter.
- No `transition: all`. Always specify exact properties (`transition-property: background, color, border-color`).
- `will-change` only on `transform`, `opacity`, `filter`. Never `all`. Only added when first-frame stutter is observed.

### Hover & press

| State                  | Treatment                                                              |
| ---------------------- | ---------------------------------------------------------------------- |
| Link hover             | 1px cobalt underline appears. No color change.                         |
| Button hover (primary) | Background `--primary` → `--primary-deep`. No scale, no shadow.        |
| Button hover (ghost)   | Dashed border becomes solid. fg unchanged.                             |
| Press                  | Border thickens to 2px. No translate, no scale.                        |
| Focus                  | 2px solid cobalt outline at 2px offset. Always visible. Never removed. |

---

## 13. Polish · the 1% details

These come from `make-interfaces-feel-better` and `emil-design-eng`, applied **inside** Sentra's refusal system.

| Detail                        | Application in Sentra                                                                                                                                                                                                         |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tabular numerals**          | `font-feature-settings: "tnum" 1` on `.mono-label`, `.mono-meta`, `PageMeta` clock, section counters. Prevents jitter.                                                                                                        |
| **`text-wrap: balance`**      | Every display heading.                                                                                                                                                                                                        |
| **`text-wrap: pretty`**       | Lede paragraphs. Avoids orphans where browsers support it.                                                                                                                                                                    |
| **Font smoothing**            | `-webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility` on `<body>`.                                                                                                                                        |
| **Optical alignment**         | The cap-height bar in the wordmark must visually align to the cap-height of the "S" in _Sentra_ — not the bounding box. Adjust ~0.5px if needed.                                                                              |
| **Image outlines**            | 1px `rgba(0,0,0,0.1)` outline on canvas, video, and images. Never tinted.                                                                                                                                                     |
| **Halftone overlay**          | `image-rendering: -webkit-optimize-contrast` so the 6px dots stay crisp on retina.                                                                                                                                            |
| **Skip animation on hydrate** | `initial={false}` on `AnimatePresence` for any element whose first state is "already visible."                                                                                                                                |
| **Hit areas**                 | ≥ 40×40px on all interactive elements. Use `::before` (transparent, absolute, `inset: -8px -4px`) on `.nav-cta`, `.nav-link`, `.int-pill`, `.int-category`, `.int-more`. `::after` reserved for the hover underline on links. |
| **Dark-surface tokens**       | Never write raw `rgba(239, 241, 244, …)` on dark grounds. Use `--ink-d-strong / body / muted / faint / edge / hush`. Same rule for hairline strengths.                                                                        |
| **No raw hex on dark**        | `#fff` is allowed on dark surfaces only when paired with explicit hover/state tokens. Prefer `var(--ink-d-strong)` for static text.                                                                                           |
| **Stagger entrance**          | Hero is one orchestrated reveal, not scattered fades. Motion `staggerChildren`.                                                                                                                                               |
| **Reduced motion**            | `useReducedMotion()` plumbed through HeroChrome (freeze frame), AsciiBlock (instant), ContextGraph (final state), and all entrance animations.                                                                                |
| **Interruptible transitions** | All hover/focus state changes use CSS `transition`, not keyframes — they can be interrupted mid-animation.                                                                                                                    |
| **No `transition: all`**      | Specify exact properties (`background`, `color`, `border-color`, `border-width`).                                                                                                                                             |

### Where Emil's polish principles **don't** apply (intentional)

- **Concentric border radius**: zero everywhere — concentric by being uniformly zero.
- **Shadows over borders**: borders win in Sentra. The system has zero shadows by spec.
- **Scale on press (`scale(0.96)`)**: replaced by border thickening to 2px. Tactile without playful.
- **Custom cursors**: forbidden. Default cursor.

---

## 14. Layout primitives

| Primitive       | CSS class                                                | Use                                            |
| --------------- | -------------------------------------------------------- | ---------------------------------------------- |
| Container       | `.container` (`max-width: 1200px; padding-inline: 32px`) | Every section root.                            |
| Grid            | `.grid-12`                                               | When the explicit grid needs to be visible.    |
| Page meta       | `.page-meta`                                             | Fixed top strip with mix-blend-difference.     |
| Section number  | `.section-number`                                        | Bottom-right `NN / 09` badge on every section. |
| Axiom strip     | `.axiom`                                                 | Border-block strong, padding-block 48px.       |
| Footer inverted | `.footer-inverted`                                       | Ink ground, dashed white-on-ink hairlines.     |

Every section carries `data-section="NN/09"` for analytics and visual debugging.

---

## 15. Accessibility floor

Non-negotiable.

- All interactive elements reachable by keyboard with the spec'd cobalt focus outline.
- All `<img>`, `<canvas>` decorative elements carry `aria-hidden="true"`.
- The monogram is `role="img"` with `aria-label="Sentra monogram"`.
- The live PageMeta clock is `aria-hidden` (decorative; actual time is not load-bearing).
- The HeroChrome canvas is `aria-hidden`. The hero text content carries the H1.
- Color contrast: `--fg` on `--bg` = 18.7:1 (AAA). `--primary` on `--bg` = 4.6:1 (AA-large). Never use cobalt for body text — it is for accents only.
- Reduced motion respected per §12.

---

## 16. Performance budget

- **Geist** loaded via `next/font/google`. Two weights preloaded (500, 600). Font-display: swap.
- **HeroChrome** canvas paused via IntersectionObserver when off-screen. dpr capped at 2.
- **No external scripts** beyond GA4. No client-side routing libraries; Next.js App Router only.
- **Lighthouse targets:** Perf ≥ 95, A11y 100, SEO 100, Best Practices 100.

---

## 17. Pre-flight audit (before claiming done)

Run all of these.

### Brand-rules grep

```bash
# Forbidden visual patterns
grep -rE "border-radius:\s*[1-9]" src/ public/             # any non-zero radius
grep -rE "box-shadow|drop-shadow" src/                     # zero hits expected
grep -rE "linear-gradient|radial-gradient" src/            # only in HeroChrome.tsx
grep -rE "lucide|react-icons|@heroicons|phosphor" src/     # zero hits

# Forbidden copy (case-insensitive)
grep -irE "supercharge|unlock|empower|simply|easy|just\b|level up|game.?changer|AI-powered|introducing|meet " src/
```

All return zero (or only the intentional HeroChrome match).

### Visual diff

Open `~/Downloads/Landing page/Sentra Landing.html` and the local `/` side-by-side. Walk every section. Differences must be intentional polish, not divergence.

### Reduced motion

Toggle macOS "Reduce motion" → reload → confirm:

- HeroChrome static, single frame.
- AsciiBlock fully rendered immediately.
- ContextGraph in final state.
- No hero stagger.

### Keyboard

Tab from top to bottom. Every focus state visible and on-brand. No traps.

### Mobile

375px viewport. No horizontal page scroll. ASCII blocks scroll horizontally inside their container.

### Build

`pnpm build` — clean. Zero warnings. Treat warnings as errors.

### Lighthouse

Production build. Targets per §16.

---

## 18. What the brand is not, and shouldn't become

These are as load-bearing as the positives.

- **Not playful.** No color-tinted illustrations, no characters, no rounded shapes, no wave dividers, no badges with emoji.
- **Not gradient-driven.** The hero chrome is the only continuous-color surface in the entire system, and it lives in one place.
- **Not iconographic.** Where most brands reach for an icon, Sentra reaches for a mono caption.
- **Not soft.** No drop shadows, no glassmorphism, no glow, no rounded cards.
- **Not loud.** Type weights cap at 600. Display caps at 80px. Confidence comes from precision, not scale.

The moment the system adds a second accent color, a stock illustration, a rounded card, or an icon — it stops being Sentra and becomes generic enterprise software. The whole point is that it refuses to.

---

## 19. Implementation conventions

These are the rules the shipping codebase follows. Don't deviate without updating this section.

### 19.1 Routing — every page

```
src/app/
  layout.tsx              minimal: <html><body>{children}</body></html> + fonts + metadata baseline
  page.tsx                home — Nav + Hero + 8 sections + FinalCTA
  blog/page.tsx
  demo/page.tsx
  manifesto/page.tsx
  research/page.tsx
  integrations/page.tsx
  terms/page.tsx
  privacy/page.tsx
  data-privacy/page.tsx
  not-found.tsx           branded 404 with Nav + FinalCTA
  sitemap.ts              auto-renders /sitemap.xml from a route list
  robots.ts               auto-renders /robots.txt
```

**Every `page.tsx` must export `metadata`** built via `createMetadata({ canonical: "/path" })` from `@/utils/metadata`. The home page is no exception.

**Every page composes the same shell:** `<Nav />` then route-specific body then `<FinalCTA />`. `FinalCTA` itself includes `SiteFooter`, so no separate footer needs adding.

### 19.2 Navigation

Internal links use `next/link`. Direct `<a href="/path">` is forbidden for any internal route — it skips client-side prefetching and breaks scroll restoration. The single exception is `<a href="#">` placeholders in `SiteFooter` cookie/preferences items.

External links (`mailto:`, `https://…`) use plain `<a>`.

### 19.3 Utility classes added beyond the original spec

| Class         | Where used                                                | What it does                                                                   |
| ------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `.brand-mono` | `BrandIcon` mono variants                                 | Renders SVG in `#1a1a1a` so it sits cleanly next to full-color brand logos.    |
| `.lg-mailto`  | Legal pages (terms, privacy, data-privacy)                | `color: var(--primary); text-decoration: none; underline on hover.`            |
| `.lg-code`    | Legal pages — inline command examples (`@sentra private`) | Mono font, primary-wash background, 1px 8px padding.                           |
| `.lg-updated` | `LegalView` header                                        | "Last updated: …" in muted body type. Replaces the old multi-field meta strip. |
| `.nf-eyebrow` | `not-found.tsx`                                           | Mono "404" label above the H1.                                                 |
| `.nf-ctas`    | `not-found.tsx`                                           | Buttons row (Return home / Book demo). 32px top, 16px gap, flex-wrap.          |

### 19.4 SEO — owned by the framework

- **Sitemap** — `src/app/sitemap.ts` exports a function returning every public route. Next.js renders `/sitemap.xml` at build time. Update the route list when adding pages.
- **Robots** — `src/app/robots.ts` exports a function returning `{ rules, sitemap, host }`. Renders `/robots.txt`.
- **404** — `src/app/not-found.tsx` carries `metadata.robots = { index: false, follow: false }` so the 404 doesn't appear in search.
- **Per-page metadata** — every page calls `createMetadata({ canonical })`. The shared title/description/og live in `src/utils/metadata.ts`.

### 19.5 Drift guard — `pnpm lint:design`

`scripts/lint-design.sh` runs as part of `pnpm lint`. It fails the build on:

- `font-size: <px>;` outside `11/12/14/16/18/24/32/40/56/80`
- `font-size: clamp(<a>, <vw>, <b>);` where either bound is off-token
- `gap: <px>` outside `0/4/8/12/16/24/32/48/64/96/128`
- `margin-top: <px>` outside the same scale
- Raw `rgba(239, 241, 244, 0.<92|78|55|45|22|16|32>)` on dark surfaces (must use `--ink-d-*`)

**Escape hatch:** append `/* optical */` to a line for a 1–2px optical fine-tune. Use sparingly and explain why in the comment.

### 19.6 Server / client component policy

Default to server. Add `"use client"` only when one of these is true:

- The component uses `useState` / `useEffect` / `useRef` / event handlers
- The component reads `usePathname` / `useRouter` / other client-only Next.js hooks
- The component renders a Web API directly (canvas, IntersectionObserver, scroll handlers)

Currently `"use client"`: `Nav`, `Pipeline`, `Functions`, `DemoForm`, `IntegrationsFilter`. Everything else is server-rendered.

### 19.7 Spacing tokens (canonical reference)

Every CSS rule that touches a vertical section padding must use one of these. Raw px will fail `lint:design` for sections defined within the codebase (Justin policy, not Next.js).

| Token                    | Value | Use                                                              |
| ------------------------ | ----- | ---------------------------------------------------------------- |
| `--section-major`        | 96px  | Major content sections (`.section`, `.fn-section`, agents grid). |
| `--section-sub`          | 64px  | Sub-sections, transitions, between block + heading.              |
| `--section-inline`       | 48px  | Inline boxes, ASCII blocks, axiom strips, mb-cell.               |
| `--section-top`          | 192px | Subpage first section under fixed nav (drops well below nav).    |
| `--section-top-sm`       | 128px | Subpage page top on narrow viewports (≤ 760px).                  |
| `--section-top-final`    | 128px | Final-CTA hero top padding (used on home + subpages).            |
| `--section-top-final-sm` | 96px  | Final-CTA hero top on narrow viewports.                          |

Box internal padding: `--box-pad: 32px`.

### 19.8 Pre-flight audit additions

Add to §17 grep list:

```bash
# Internal links must use next/link
grep -rnE "<a [^>]*href=\"/[a-z#]" src/components/ src/app/ \
  | grep -v "href=\"#\""                                     # zero hits

# Pages must export metadata
for p in $(find src/app -name "page.tsx"); do
  grep -q "export const metadata" "$p" || echo "MISSING: $p"
done                                                          # zero hits

# No inline styles
grep -rn 'style=\{\{' src/                                    # zero hits

# Lint:design clean
pnpm lint:design                                              # exit 0
```
