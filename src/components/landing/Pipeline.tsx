"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";

type LayerId = "connect" | "graph" | "recall";

const items: {
  id: LayerId;
  num: string;
  title: string;
  body: string;
}[] = [
  {
    id: "connect",
    num: "01",
    title: "Connect",
    body: "Plug into 200+ tools in minutes. Sentra continuously syncs meetings, messages, docs, tickets, code, and CRM data — and automatically extracts entities, relationships, and decisions. No tagging. No filing. No prompts.",
  },
  {
    id: "graph",
    num: "02",
    title: "Graph",
    body: "Sentra builds a bi-temporal context graph. Every fact carries when it was true and when it stopped being true. Old facts are invalidated, not deleted. New ones are linked to evidence. The graph evolves with your company in real time.",
  },
  {
    id: "recall",
    num: "03",
    title: "Recall",
    body: "Your team queries the graph in plain English. Your agents read it through the API or via MCP. Every answer is grounded in source material with full provenance — the meeting, the message, the document, the moment.",
  },
];

export default function Pipeline() {
  const [open, setOpen] = useState<LayerId | null>("connect");
  const active: LayerId = open ?? "connect";

  return (
    <section
      className="section"
      id="pipeline"
      data-screen-label="04 Pipeline"
      data-nav-theme="light"
    >
      <div className="container">
        <div className="pipe-head">
          <h2>Three layers. Complete memory.</h2>
          <p>
            Factual, action, interaction. Three coordinated layers capture what
            is true, what is owed, and what was meant — so every answer is
            grounded in the full context of the company.
          </p>
        </div>

        <div className="triad-recap bleed-top">
          <div>
            <span className="lab">Factual memory</span>
            <h4>What is true, where it came from, and when it changed.</h4>
          </div>
          <div>
            <span className="lab">Action memory</span>
            <h4>
              What someone promised, what is blocked, and what needs follow-up.
            </h4>
          </div>
          <div>
            <span className="lab">Interaction memory</span>
            <h4>
              Who said what, what they meant, and which perspective shaped the
              decision.
            </h4>
          </div>
        </div>

        <div className="pipe-grid bleed-bottom">
          <div className="pipe-diagram" data-active={active} aria-hidden="true">
            <svg viewBox="0 0 480 510" className="pipe-stack">
              <defs>
                <linearGradient id="topIdle" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c7d6f3" />
                  <stop offset="100%" stopColor="#8ea6dc" />
                </linearGradient>
                <linearGradient id="leftIdle" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#5e7cc2" />
                  <stop offset="100%" stopColor="#3b5aa3" />
                </linearGradient>
                <linearGradient id="rightIdle" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#2c4685" />
                  <stop offset="100%" stopColor="#1a2d5e" />
                </linearGradient>
                <linearGradient id="topActive" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7bb0ff" />
                  <stop offset="100%" stopColor="#2f6bd1" />
                </linearGradient>
                <linearGradient id="leftActive" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#1f4aa3" />
                  <stop offset="100%" stopColor="#0e2c70" />
                </linearGradient>
                <linearGradient id="rightActive" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0e2c70" />
                  <stop offset="100%" stopColor="#04173f" />
                </linearGradient>
              </defs>

              {/* ── 01 · CONNECT — small prism (top) ── */}
              <g className="layer layer-connect">
                <polygon
                  className="face-right"
                  points="240,110 240,128 320,88 320,70"
                />
                <polygon
                  className="face-left"
                  points="160,70 160,88 240,128 240,110"
                />
                <polygon
                  className="face-top"
                  points="240,30 320,70 240,110 160,70"
                />
                <polyline
                  className="edge-highlight"
                  points="160,70 240,30 320,70"
                />
                <text
                  className="layer-label"
                  x="332"
                  y="74"
                  fontFamily="var(--mono)"
                  fontSize="10"
                  textAnchor="start"
                >
                  CONNECT
                </text>
              </g>

              {/* ── 02 · GRAPH — medium prism (14u below) ── */}
              <g className="layer layer-graph">
                <polygon
                  className="face-right"
                  points="240,262 240,280 370,220 370,202"
                />
                <polygon
                  className="face-left"
                  points="110,202 110,220 240,280 240,262"
                />
                <polygon
                  className="face-top"
                  points="240,142 370,202 240,262 110,202"
                />
                <polyline
                  className="edge-highlight"
                  points="110,202 240,142 370,202"
                />
                <text
                  className="layer-label"
                  x="382"
                  y="206"
                  fontFamily="var(--mono)"
                  fontSize="10"
                  textAnchor="start"
                >
                  GRAPH
                </text>
              </g>

              {/* ── 03 · RECALL — large prism (14u below) ── */}
              <g className="layer layer-recall">
                <polygon
                  className="face-right"
                  points="240,458 240,478 420,396 420,376"
                />
                <polygon
                  className="face-left"
                  points="60,376 60,396 240,478 240,458"
                />
                <polygon
                  className="face-top"
                  points="240,294 420,376 240,458 60,376"
                />
                <polyline
                  className="edge-highlight"
                  points="60,376 240,294 420,376"
                />
                <text
                  className="layer-label"
                  x="432"
                  y="380"
                  fontFamily="var(--mono)"
                  fontSize="10"
                  textAnchor="start"
                >
                  RECALL
                </text>
              </g>
            </svg>
          </div>

          <div className="pipe-list">
            {items.map((it) => {
              const isOpen = open === it.id;
              return (
                <button
                  type="button"
                  key={it.id}
                  className={cn("pipe-item", isOpen && "is-open")}
                  data-item={it.id}
                  onClick={() => setOpen(isOpen ? null : it.id)}
                  aria-expanded={isOpen}
                >
                  <div className="pipe-item-head">
                    <span className="num">{it.num}</span>
                    <span className="dot" />
                    <h4>{it.title}</h4>
                    <span className="chev" aria-hidden="true">
                      ↓
                    </span>
                  </div>
                  <div className="pipe-body">
                    <div>
                      <p>{it.body}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
