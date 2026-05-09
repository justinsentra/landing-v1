import { Fragment, isValidElement } from "react";

type Section = { id: string; heading: string; body: React.ReactNode[] };

const sections: Section[] = [
  {
    id: "core-insight",
    heading: "The Core Insight",
    body: [
      "Intelligence lives in interactions, not documents. Every system of record — your CRM, your project tracker, your OKR tool — is derivative. They are downstream artifacts of conversations between people. The meeting where strategy shifted. The Slack thread where architecture was debated. The email where the commitment was made.",
      "These interactions carry intent, rationale, context, and causality. The artifacts carry none of it. The cost is staggering and invisible: decisions revisited because no one remembers why they were made, commitments slipping because they were never extracted, context evaporating when people leave.",
    ],
  },
  {
    id: "solvable",
    heading: "Why Organizational Memory Is Solvable",
    body: [
      "Personal memory is intractable — individuals have shifting, unpredictable utility functions. Organizations are different. They have a stable utility function: build products, generate revenue, serve customers. This makes defining what matters mathematically tractable.",
      "The core ontology reduces to six classes: Actors, Interactions, Decisions, Rationale, Commitments, and Value-Creating Objects, all indexed across time. Actors and Interactions are primary. Everything else is derived.",
    ],
  },
  {
    id: "intelligence-not-record",
    heading: "System of Intelligence, Not System of Record",
    body: [
      "We are not adding a layer on top. We are replacing the underlying substrate. Today's enterprise stack is a patchwork of disconnected systems of record, each storing a partial, stale copy of organizational knowledge. Sentra captures interactions at their source — meetings, emails, messages, agent traces — and derives everything that currently lives in separate silos. CRMs, OKR platforms, performance reviews, knowledge management — all collapse into a single intelligence layer that is always current, always contextual, always complete.",
      "The interface is proactive and prompt-free. Sentra understands each person's role, the org structure, and what matters to them. It surfaces what deserves attention rather than waiting to be asked. A chief of staff for every person. A program manager for every team. No prompting required.",
    ],
  },
  {
    id: "research",
    heading: "The Research Foundation",
    body: [
      "This is not a product claim. It is a mathematically proven thesis, grounded in five research papers from the Sentra team.",
      <>
        <em>The Geometry of Forgetting</em> shows that high-dimensional
        embedding spaces reproduce quantitative signatures of human memory —
        power-law forgetting, false recall — with no phenomenon-specific
        engineering. Forgetting arises from interference, not decay.
      </>,
      <>
        <em>The Price of Meaning</em> proves the No-Escape Theorem:
        interference-driven forgetting cannot be eliminated without abandoning
        semantic organization or adding external structure. Scale alone does not
        solve this.
      </>,
      <>
        <em>The Semantic Memory Filesystem</em> is the engineering answer,
        treating a POSIX filesystem as the deterministic substrate for
        organizational memory, with 4-channel parallel retrieval and provenance
        tracking. The key result: replacing frontier models with a 50× smaller
        model drops F1 by only 0.07, while retrieval-architecture optimizations
        contribute +0.112 F1. Intelligence is in the architecture, not the
        model.
      </>,
      <>
        <em>Operational Reinforcement</em> introduces Monitor MDPs for
        structured failure feedback — exact credit assignment by design,
        300–900× memory advantage over reward machines.
      </>,
      <>
        <em>Avoidance Learning</em> shows that substantive LLM behavior emerges
        from pure negative feedback, with 80% fewer evasive responses — and
        counter-intuitively, adding positive rewards degrades performance.
      </>,
      "Five papers. One thesis: structure and negation matter more than scale and reward.",
    ],
  },
  {
    id: "commodity",
    heading: "When Raw Intelligence Becomes a Commodity",
    body: [
      <>
        The AI industry is converging on abundant, cheap intelligence.
        Foundation models are commoditizing. Inference costs are collapsing.
        When every company has access to frontier-level reasoning, the
        differentiator is no longer the model — it is how teams operate.{" "}
        <span className="mb-egi">Enterprise General Intelligence</span> is the
        layer that turns commodity AI into organizational advantage: the memory,
        the context, the accumulated understanding of how your company works,
        what it has decided, and what it should do next.
      </>,
    ],
  },
  {
    id: "roadmap",
    heading: "The Roadmap of Sentra within Organizations",
    body: [
      <>
        <strong>Phase 1, Org Memory (Now → 6 months):</strong> Sentra knows the
        organization. Every interaction captured, every decision extracted,
        every commitment tracked. Day 1: meeting intelligence, enterprise search
        with full context, custom workflows. By Day 90: the primary hub for work
        initiation and monitoring.
      </>,
      <>
        <strong>Phase 2, World Model (6 → 12 months):</strong> Sentra
        understands the organization. Causal models of how the company behaves,
        who influences what, which decisions led to which outcomes, where
        patterns repeat. Agents that causally interact with, learn from, and
        predict within a structured reality.
      </>,
      <>
        <strong>Phase 3, Org-wide RL (12 → 18 months):</strong> Sentra becomes
        irreplaceable infrastructure. Reinforcement learning on what worked and
        what didn't. The system doesn't just remember — it improves, turning
        accumulated intelligence into a compounding advantage that deepens every
        day.
      </>,
    ],
  },
  {
    id: "workflow-collapse",
    heading: "Workflow Collapse",
    body: [
      "We do not engineer workflow automation. We make it inevitable. When an intelligence layer captures every commitment, tracks every dependency, and understands every person's context, workflows collapse on their own. The action layer is a natural consequence of the intelligence layer, not a separate product that needs to be bolted on.",
    ],
  },
  {
    id: "early-evidence",
    heading: "Early Evidence",
    body: [
      "11 active design partners including teams at SoftBank, Runway, and Softmax. Over 10,000 meetings and 200,000 Slack messages processed. 20,000 decisions tracked. 35,000 commitments extracted. 35 enterprises in active pipeline.",
      <blockquote className="mb-quote" key="emmett">
        <p>
          “The one thing Sentra does well that others don't is that Sentra can
          contextualize what's important for me to know.”
        </p>
        <cite>— Emmett Shear, CEO Softmax · Former CEO Twitch</cite>
      </blockquote>,
      <blockquote className="mb-quote" key="siqi">
        <p>
          “I consistently find the weekly reports good, useful. I enjoy reading
          them. Even when it doesn't tell me anything new, just having a story
          of what happened is actually quite useful.”
        </p>
        <cite>— Siqi Chen, CEO Runway · Former CEO Sandbox VR</cite>
      </blockquote>,
    ],
  },
  {
    id: "closing",
    heading: "Systems of Intelligence",
    body: [
      "The enterprise software industry spent two decades building systems of record — static databases organized around artifacts that were already out of date the moment they were created. The next era belongs to systems of intelligence: living infrastructure that captures how organizations actually think, decide, and operate.",
      <>
        We have the research. We have the architecture. We have the traction. We
        are not waiting for AGI to arrive and hoping it solves enterprise — we
        are building the intelligence layer that makes AGI useful for
        organizations. Sentra is{" "}
        <span className="mb-egi">Enterprise General Intelligence</span>.
      </>,
    ],
  },
];

export function ManifestoView() {
  return (
    <section
      className="section section--first"
      id="manifesto"
      data-screen-label="Manifesto"
      data-nav-theme="light"
    >
      <div className="container">
        <h1 className="sec-h">The Sentra Manifesto</h1>
        <p className="mb-subtitle">
          <span className="mb-egi">Enterprise General Intelligence</span>
        </p>

        <p className="rh-lede">
          Every organization runs on intelligence — the decisions made in
          meetings, the context buried in threads, the commitments forged in
          conversation. Yet every enterprise tool stores only the shadows: the
          document after the decision, the ticket after the discussion, the CRM
          entry after the handshake. The originals — the interactions themselves
          — are thrown away.
        </p>

        <p className="mb-thesis bleed-top bleed-bottom">
          Sentra exists to change this. We are building{" "}
          <span className="mb-egi">Enterprise General Intelligence</span>:
          infrastructure that captures organizational interactions at their
          source, extracts the intelligence within them, and turns every company
          into a system that learns, remembers, and acts on what it knows.
        </p>

        <div className="mb-grid bleed-top bleed-bottom">
          {sections.map((s) => (
            <article className="mb-cell" key={s.id} id={s.id}>
              <h2 className="mb-h">{s.heading}</h2>
              {s.body.map((p, i) => {
                if (isValidElement(p) && p.type === "blockquote") {
                  return <Fragment key={i}>{p}</Fragment>;
                }
                return (
                  <p className="mb-p" key={i}>
                    {p}
                  </p>
                );
              })}
            </article>
          ))}
        </div>

        <p className="mb-coda">Sentra is Enterprise General Intelligence.</p>
      </div>
    </section>
  );
}
