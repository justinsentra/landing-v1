"use client";

import { useEffect, useRef } from "react";
import { DEMO_HREF, DEMO_LABEL } from "@/data/site";
import { SentraMark } from "./brand-icons";

const NAV_TOP = 16;
const NAV_BAND = 60;
const BAND_TOP = NAV_TOP - NAV_BAND;
const BAND_BOTTOM = NAV_TOP + NAV_BAND + NAV_BAND;
const BAND_HEIGHT = BAND_BOTTOM - BAND_TOP;
const LIFT_SCROLL = 80;

const smoothstep = (t: number) => t * t * (3 - 2 * t);

const navLinks = [
  { href: "#research", label: "Research" },
  { href: "#blog", label: "Blog" },
  { href: "#manifesto", label: "Manifesto" },
];

export default function Nav() {
  const wrapRef = useRef<HTMLDivElement | null>(null);

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

      let lightCoverage = 0;
      sections.forEach((s) => {
        if (s.getAttribute("data-nav-theme") !== "light") return;
        const r = s.getBoundingClientRect();
        const overlap = Math.max(
          0,
          Math.min(r.bottom, BAND_BOTTOM) - Math.max(r.top, BAND_TOP),
        );
        lightCoverage += overlap / BAND_HEIGHT;
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
  }, []);

  return (
    <div
      className="nav-wrap"
      ref={wrapRef}
      data-nav-theme="dark"
      style={
        {
          ["--nav-mix" as string]: "0",
          ["--nav-lift" as string]: "0",
        } as React.CSSProperties
      }
    >
      <div className="nav-blur" aria-hidden="true" />
      <nav className="nav" data-screen-label="Nav">
        <div className="nav-left">
          <a href="#" aria-label="Sentra home" className="nav-brand">
            <SentraMark className="brand-mark" />
          </a>
        </div>
        <div className="nav-mid">
          {navLinks.map((l) => (
            <a key={l.href} className="nav-link" href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="nav-right">
          <a className="nav-cta" href={DEMO_HREF}>
            {DEMO_LABEL}
          </a>
        </div>
      </nav>
    </div>
  );
}
