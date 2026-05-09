"use client";

import { useEffect, useRef } from "react";
import { SentraMark } from "./brand-icons";
import { tools, toolStyle, type ToolKey } from "@/data/tools";

type Source = { tool: ToolKey; text: string };
type FunctionCard = {
  fn: string;
  question: string;
  reply: string;
  sources: Source[];
};

const cards: FunctionCard[] = [
  {
    fn: "Engineering",
    question: "Why did we ship without the burst window?",
    reply:
      "The burst window was cut on Apr 8 after a Redis race surfaced. The decision moved to PR #4128 with a TODO to revisit in v1.1.",
    sources: [
      {
        tool: "slack",
        text: "#eng-platform — Andrey flagged a Redis race on Apr 7",
      },
      { tool: "linear", text: "ENG-318 — burst window descoped from spec" },
      { tool: "github", text: "PR #4128 — TODO: revisit in v1.1" },
    ],
  },
  {
    fn: "Sales",
    question: "Why did we lose the Northwind deal?",
    reply:
      "Churned on procurement timing, not product. Legal verbally agreed to a 60-day MSA exception on Feb 27 — never written down.",
    sources: [
      {
        tool: "hubspot",
        text: "Deal #884 — stage stalled at Procurement for 41 days",
      },
      {
        tool: "granola",
        text: "Northwind exec sync — “60-day exception, we’ll send paper”",
      },
      {
        tool: "gmail",
        text: "rfp@northwind.com — last reply Mar 12, never followed up",
      },
    ],
  },
  {
    fn: "Finance",
    question: "Why is Q1 burn 14% over plan?",
    reply:
      "The AWS reserved-instance cutover slipped three weeks past Mar 1. Drift was logged Mar 18; finance was looped in on Mar 22.",
    sources: [
      { tool: "gsheets", text: "Q1 forecast v3 — AWS line +$184k vs plan" },
      { tool: "gmail", text: "AWS billing — RI conversion delayed to Mar 22" },
      { tool: "notion", text: "Ops review · Mar 18 — drift acknowledged" },
    ],
  },
  {
    fn: "Ops",
    question: "What did we promise design partners?",
    reply:
      "Six commitments across four partners. Four shipped, one slipped (SAML SSO for Acme), one quietly dropped.",
    sources: [
      { tool: "notion", text: "QBR prep doc v4 — 6 promises tracked" },
      {
        tool: "slack",
        text: "#partners-acme — SAML SSO blocked on identity vendor",
      },
      { tool: "asana", text: "Q1 promises board — 4 shipped, 1 dropped" },
    ],
  },
  {
    fn: "People",
    question: "What did we promise Maya for promo?",
    reply:
      "Two specifics: a written calibration target by end of Q2, and a stretch project tied to the platform rewrite.",
    sources: [
      {
        tool: "granola",
        text: "Maya 1:1 · Feb 19 — calibration target promised",
      },
      { tool: "notion", text: "Career frameworks v2 — staff IC criteria" },
      { tool: "gcal", text: "Promo committee · Q2 — Maya on the slate" },
    ],
  },
  {
    fn: "Legal",
    question: "Have we ever granted uncapped indemnity?",
    reply:
      "Twice. Both pre-Series A, both signed by Ashwin, both flagged in the Feb 2025 audit. Policy now requires a written exception.",
    sources: [
      {
        tool: "dropbox",
        text: "MSA archive — 2 contracts with uncapped indemnity",
      },
      { tool: "gdocs", text: "Audit memo · Feb 2025 — flagged risk" },
      { tool: "notion", text: "Exceptions register — policy live since Mar" },
    ],
  },
  {
    fn: "Executive",
    question: "What's changed since the last board?",
    reply:
      "Nine material decisions, three reversals, two unfulfilled commitments. Reversals concentrated in pricing.",
    sources: [
      {
        tool: "granola",
        text: "Pricing review · Apr 8 — Mar 11 framework abandoned",
      },
      { tool: "slack", text: "#exec — 9 decisions logged since Feb 26" },
      { tool: "notion", text: "Board prep v2 — 2 commitments slipped" },
    ],
  },
];

function useHorizontalWheel(railRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    let target = rail.scrollLeft;
    let current = rail.scrollLeft;
    let raf = 0;
    let running = false;

    const tick = () => {
      const max = rail.scrollWidth - rail.clientWidth;
      target = Math.max(0, Math.min(max, target));
      current += (target - current) * 0.18;
      if (Math.abs(target - current) < 0.4) {
        current = target;
        rail.scrollLeft = current;
        running = false;
        return;
      }
      rail.scrollLeft = current;
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };

    const onWheel = (e: WheelEvent) => {
      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (delta === 0) return;

      const max = rail.scrollWidth - rail.clientWidth;
      if ((target <= 0 && delta < 0) || (target >= max && delta > 0)) return;

      e.preventDefault();
      target = Math.max(0, Math.min(max, target + delta));
      start();
    };

    const onScroll = () => {
      if (!running) {
        current = rail.scrollLeft;
        target = rail.scrollLeft;
      }
    };

    rail.addEventListener("wheel", onWheel, { passive: false });
    rail.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      rail.removeEventListener("wheel", onWheel);
      rail.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [railRef]);
}

export default function Functions() {
  const railRef = useRef<HTMLDivElement | null>(null);
  useHorizontalWheel(railRef);

  return (
    <section
      className="section fn-section"
      id="functions"
      data-screen-label="06 Functions"
      data-nav-theme="light"
    >
      <div className="container">
        <h2 className="sec-h">Used by every team.</h2>
        <p className="sec-sub">
          Every team has its own view of the truth. Engineering reads code.
          Sales reads deals. Finance reads numbers. Sentra captures each
          perspective, then connects them into one company brain.
        </p>

        <div className="fn-rail-frame bleed-top bleed-bottom">
          <div className="fn-rail" ref={railRef} role="list">
            {cards.map((c) => (
              <article className="fn-card" key={c.fn} role="listitem">
                <header className="fn-card-head">
                  <span className="fn-card-fn">{c.fn}</span>
                </header>

                <div className="fn-card-body">
                  <p className="fn-question">&ldquo;{c.question}&rdquo;</p>

                  <div className="fn-mark" aria-hidden="true">
                    <span className="fn-mark-line" />
                    <SentraMark className="fn-mark-glyph" />
                    <span className="fn-mark-line" />
                  </div>

                  <p className="fn-reply">{c.reply}</p>

                  <ul className="fn-sources">
                    {c.sources.map((s, i) => {
                      const tool = tools[s.tool];
                      return (
                        <li
                          className="fn-source"
                          key={`${c.fn}-${i}`}
                          style={toolStyle(tool)}
                        >
                          <span
                            className="fn-source-ic"
                            aria-label={tool.name}
                            title={tool.name}
                          />
                          <span className="fn-source-text">{s.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
