# Sentra · Design

> Visual system for the Sentra landing page. Every token, every component, every motion curve is documented here. Pair with `BRAND.md` (voice & content).

This document is the canonical visual reference. The build hews to it. When this file disagrees with `~/Downloads/landing page design/colors_and_type.css` or `README.md`, the source wins; update this file.

---

## 0. The four moves no one else owns

Sentra is identifiable by exactly four things. Lose any one, and it stops being Sentra.

1. **Dashed hairlines as the universal structural element** — never solid rules.
2. **A three-band monogram** — ink / cobalt / ink — the middle band is the brand's only color.
3. **ASCII as the diagrammatic register** — no icon set, no illustration, no isometric anything.
4. **Cobalt at 5% of surface** over cool paper — `#1E5EFF` is a margin highlight, not a banner.

---

## 1. Color · eight values, no exceptions

| Token                | Hex       | Role                                  |
| -------------------- | --------- | ------------------------------------- |
| `--bg`               | `#F4F5F7` | Canvas. Cool steel paper, near-white. |
| `--surface`          | `#FAFBFC` | Cards, ASCII blocks.                  |
| `--fg`               | `#0E0E12` | Primary type, dark surfaces.          |
| `--primary`          | `#1E5EFF` | Cobalt. The single accent.            |
| `--primary-deep`     | `#0B3FBF` | Pressed states, captions.             |
| `--hairline-subtle`  | `#E4E6EA` | Secondary dividers.                   |
| `--hairline-default` | `#D4D4D8` | Structural dividers (workhorse).      |
| `--hairline-strong`  | `#A1A1AA` | Highest level of structure only.      |
| `--muted`            | `#71717A` | Tertiary text.                        |
| `--mono-ink`         | `#525252` | Metadata labels.                      |

**Three observations the system depends on:**

1. The background is **steel, not white, not paper**. `#F4F5F7` is a cool, near-white grey with no warmth. Never substitute `#FFFFFF`. Never warm it.
2. The foreground is **near-black with a blue cast** (`#0E0E12`). Pure black would feel printed; this reads as ink on a screen.
3. **Cobalt is the only accent.** Used surgically. The discipline is **5% of surface**.

**Surface ratio (memorize):** `BG 60% / FG 25% / hairlines 8% / primary 5% / muted 2%`.

**Forbidden:** gradients (except hero chrome), tints, semantic colors (success/warning/error). Drift uses `⚠`, never red.

---

## 2. Typography · Geist + Geist Mono

Two families do all the work. Sans is what the brand says about itself; mono is what the brand **is** — the framing, the file paths, the section numbers.

```
display-xl   80 / 500 / 1.04 / -0.02em   Geist Sans
display-l    56 / 500 / 1.06 / -0.02em   Geist Sans
display-m    40 / 500 / 1.10 / -0.02em   Geist Sans
body-l       18 / 400 / 1.60 / -0.01em   Geist Sans
body-m       16 / 400 / 1.60 / -0.01em   Geist Sans
mono-label   12 / 500 / 1.50 /  0.08em   Geist Mono UPPER
mono-meta    11 / 400 / 1.50 /  0.06em   Geist Mono UPPER
```

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

**Scale (8-based):** `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`

**Grid:** 12 columns, **24px gutters**, **1280px max width**.

**Section padding:** 96px vertical between major sections; 64px between sub-sections; 48px for ASCII blocks.

The grid is **drawn explicitly** in the structure section — the brand wants you to know the grid exists.

### Breakpoints

| Range        | Behavior                                                                                                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `≥ 1280px`   | Full 12-col grid as designed.                                                                                                                                                                    |
| `768–1279px` | Gutters 16px. `display-xl → clamp(48px, 7vw, 72px)`. ChiefOfStaff goes 2×2.                                                                                                                      |
| `< 768px`    | Single column. Triads stack with horizontal dashed dividers. Hero wireframe inset shrinks to 16px. Nav collapses to lockup + mono-label "MENU" toggle (no hamburger icon — brand refuses icons). |

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

Two variants. No others.

### Primary

```
background:  var(--primary)
color:       var(--bg)
padding:     12px 20px
weight:      500
hover:       background → var(--primary-deep)
press:       border: 2px solid var(--primary-deep); padding: 10px 18px
focus:       2px solid var(--primary), 2px offset
disabled:    color → muted, transparent bg
```

### Ghost

```
background:  transparent
color:       var(--fg)
border:      1px dashed var(--hairline-strong)
padding:     11px 19px
hover:       border-style: solid
press:       border-width: 2px
```

**No scale-on-press.** The brand expresses press by compressing into ink (border thickening), not by scaling. This is one place where `make-interfaces-feel-better`'s `scale(0.96)` rule is intentionally **not** applied — it would feel toy-like against the documentary register.

**Hit area** ≥ 40×40px on every interactive element. Extend with `::after` pseudo-element if visible target is smaller.

---

## 11. Components (in `src/components/sentra/`)

Ported from `~/Downloads/landing page design/ui_kits/sentra-site/`.

| Component      | Responsibility                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------- |
| `Monogram`     | Three-band stagger entry, 80ms each. Props: `size`, `animate`, `color`.                           |
| `Wordmark`     | Cap-height bar + "Sentra" weight 600. Props: `size`, `color`.                                     |
| `PageMeta`     | Fixed top strip. Live UTC clock with em-dashes. `mix-blend-mode: difference`.                     |
| `Nav`          | Lockup left, links mid, ghost + primary CTA right. Active link = 1px solid cobalt underline.      |
| `HeroChrome`   | Procedural liquid-chrome canvas. dpr capped at 2, paused off-screen, frozen under reduced-motion. |
| `Hero`         | Composes HeroChrome + halftone overlay + dashed wireframe inset frame.                            |
| `AxiomStrip`   | 3-col: label / axiom display / count. Bordered top+bottom by `hair-strong`.                       |
| `AsciiBlock`   | IntersectionObserver typewriter. Renders as `<pre>`. Honors reduced-motion.                       |
| `ContextGraph` | Phased SVG: idle → nodes (80ms stagger) → edges (120ms stagger) → cobalt-edge pulse 4s.           |
| `FeatureTriad` | 3-col, dashed verticals. Mono labels in cobalt.                                                   |
| `Footer`       | Inverted ink, three columns, dashed verticals, cobalt slogan.                                     |
| `Button`       | `primary` / `ghost`, ref-forwarded.                                                               |

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

| Detail                        | Application in Sentra                                                                                                                            |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Tabular numerals**          | `font-feature-settings: "tnum" 1` on `.mono-label`, `.mono-meta`, `PageMeta` clock, section counters. Prevents jitter.                           |
| **`text-wrap: balance`**      | Every display heading.                                                                                                                           |
| **`text-wrap: pretty`**       | Lede paragraphs. Avoids orphans where browsers support it.                                                                                       |
| **Font smoothing**            | `-webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility` on `<body>`.                                                           |
| **Optical alignment**         | The cap-height bar in the wordmark must visually align to the cap-height of the "S" in _Sentra_ — not the bounding box. Adjust ~0.5px if needed. |
| **Image outlines**            | 1px `rgba(0,0,0,0.1)` outline on canvas, video, and images. Never tinted.                                                                        |
| **Halftone overlay**          | `image-rendering: -webkit-optimize-contrast` so the 6px dots stay crisp on retina.                                                               |
| **Skip animation on hydrate** | `initial={false}` on `AnimatePresence` for any element whose first state is "already visible."                                                   |
| **Hit areas**                 | ≥ 40×40px on all interactive elements. `::after` pseudo-element where the visible target is smaller.                                             |
| **Stagger entrance**          | Hero is one orchestrated reveal, not scattered fades. Motion `staggerChildren`.                                                                  |
| **Reduced motion**            | `useReducedMotion()` plumbed through HeroChrome (freeze frame), AsciiBlock (instant), ContextGraph (final state), and all entrance animations.   |
| **Interruptible transitions** | All hover/focus state changes use CSS `transition`, not keyframes — they can be interrupted mid-animation.                                       |
| **No `transition: all`**      | Specify exact properties (`background`, `color`, `border-color`, `border-width`).                                                                |

### Where Emil's polish principles **don't** apply (intentional)

- **Concentric border radius**: zero everywhere — concentric by being uniformly zero.
- **Shadows over borders**: borders win in Sentra. The system has zero shadows by spec.
- **Scale on press (`scale(0.96)`)**: replaced by border thickening to 2px. Tactile without playful.
- **Custom cursors**: forbidden. Default cursor.

---

## 14. Layout primitives

| Primitive       | CSS class                                                | Use                                            |
| --------------- | -------------------------------------------------------- | ---------------------------------------------- |
| Container       | `.container` (`max-width: 1280px; padding-inline: 24px`) | Every section root.                            |
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
