"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DEMO_HREF, DEMO_LABEL } from "@/data/site";
import { SentraMark } from "./brand-icons";

const NAV_TOP = 16;
const NAV_BAND = 60;
const BAND_TOP = NAV_TOP - NAV_BAND;
const BAND_BOTTOM = NAV_TOP + NAV_BAND + NAV_BAND;
const BAND_HEIGHT = BAND_BOTTOM - BAND_TOP;
// Scroll distance over which `--nav-lift` (0 → 1) ramps. Reserved for
// any glassmorphic intensification keyed on scroll depth; not currently
// consumed by CSS, but kept so the variable stays writable for future use.
const LIFT_SCROLL = 80;

const smoothstep = (t: number) => t * t * (3 - 2 * t);

const navLinks = [
  { href: "/research", label: "Research" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/blog", label: "Blog" },
];

// Routes whose first section is light. Used only to set initialMix so the
// nav renders at full ink on first paint (no flash of light-on-light text)
// before the scroll observer hydrates. After hydration, the live mix is
// driven entirely by section-overlap, which works for all routes.
const LIGHT_ROUTES = [
  "/research",
  "/blog",
  "/manifesto",
  "/demo",
  "/integrations",
  "/terms",
  "/privacy",
  "/data-privacy",
];

export default function Nav() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const initialMix = LIGHT_ROUTES.some((r) => pathname?.startsWith(r))
    ? "1"
    : "0";

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    let ticking = false;
    let lastMix = -1;
    let lastLift = -1;

    const update = () => {
      ticking = false;
      const sections = document.querySelectorAll<HTMLElement>(
        "section[data-nav-theme]",
      );

      // Clamp the band to the visible portion of the document. The band
      // intentionally extends above the viewport (BAND_TOP = -44) for
      // hysteresis on dark→light transitions, but on pages whose first
      // section is light, that upper region is just empty space above the
      // document and would otherwise cap coverage at ~75% — leaving the nav
      // perpetually muted. Treating the area above the document as "absent"
      // keeps the mix at 1 when the visible band is fully light, while
      // preserving the natural transition when the user scrolls into a
      // dark section (FinalCTA, Hero, Agents).
      const effectiveBandTop = Math.max(BAND_TOP, -window.scrollY);
      const effectiveBandHeight = Math.max(1, BAND_BOTTOM - effectiveBandTop);

      let lightCoverage = 0;
      sections.forEach((s) => {
        if (s.getAttribute("data-nav-theme") !== "light") return;
        const r = s.getBoundingClientRect();
        const overlap = Math.max(
          0,
          Math.min(r.bottom, BAND_BOTTOM) - Math.max(r.top, effectiveBandTop),
        );
        lightCoverage += overlap / effectiveBandHeight;
      });

      const mix = smoothstep(Math.min(1, Math.max(0, lightCoverage)));
      const lift = Math.min(1, window.scrollY / LIFT_SCROLL);

      if (mix === lastMix && lift === lastLift) return;
      lastMix = mix;
      lastLift = lift;

      el.style.setProperty("--nav-mix", String(mix));
      el.style.setProperty("--nav-lift", String(lift));
      el.dataset.navTheme = mix > 0.5 ? "light" : "dark";
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  return (
    <div
      className="nav-wrap"
      ref={wrapRef}
      data-nav-theme={initialMix === "0" ? "dark" : "light"}
      style={
        {
          ["--nav-mix" as string]: initialMix,
          ["--nav-lift" as string]: "0",
        } as React.CSSProperties
      }
    >
      <div className="nav-blur" aria-hidden="true" />
      <nav className="nav" data-screen-label="Nav">
        <div className="nav-left">
          <Link href="/" aria-label="Sentra home" className="nav-brand">
            <SentraMark className="brand-mark" />
            <span className="wordmark">Sentra</span>
          </Link>
        </div>
        <div className="nav-mid">
          {navLinks.map((l) => (
            <Link key={l.href} className="nav-link" href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="nav-right">
          <Link className="nav-cta" href={DEMO_HREF}>
            {DEMO_LABEL}
          </Link>
        </div>
      </nav>
    </div>
  );
}
