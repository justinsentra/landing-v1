type Section = { id: string; label: string; title: string; body: string[] };

const sections: Section[] = [
  {
    id: "core-insight",
    label: "01 · Core insight",
    title: "Intelligence lives in interactions, not documents.",
    body: [
      "Every system of record — your CRM, your project tracker, your OKR tool — is derivative. They are downstream artifacts of conversations between people. The meeting where strategy shifted. The Slack thread where architecture was debated. The email where a commitment was made.",
      "These interactions carry intent, rationale, context, and causality. The artifacts carry none of it. The cost is staggering and invisible: decisions revisited because no one remembers why they were made, commitments slipping because they were never extracted, context evaporating when people leave.",
    ],
  },
  {
    id: "tractable",
    label: "02 · Why memory is solvable here",
    title: "Personal memory is intractable. Organizations are not.",
    body: [
      "Individuals have shifting, unpredictable utility functions. Organizations have a stable one: build products, generate revenue, serve customers. This makes defining what matters mathematically tractable.",
      "The core ontology reduces to six classes: Actors, Interactions, Decisions, Rationale, Commitments, and Value-Creating Objects — all indexed across time. Actors and Interactions are primary. Everything else is derived.",
    ],
  },
  {
    id: "intelligence",
    label: "03 · System of intelligence, not record",
    title: "We are replacing the substrate, not adding a layer.",
    body: [
      "Today&rsquo;s enterprise stack is a patchwork of disconnected systems of record, each storing a partial, stale copy of organizational knowledge. Sentra captures interactions at their source — meetings, emails, messages, agent traces — and derives everything that currently lives in separate silos.",
      "CRMs, OKR platforms, performance reviews, knowledge management — they collapse into a single intelligence layer that is always current, always contextual, always complete. The interface is proactive and prompt-free. A chief of staff for every person. A program manager for every team.",
    ],
  },
  {
    id: "research",
    label: "04 · Research foundation",
    title: "Five papers. One thesis.",
    body: [
      "This is not a product claim. It is a mathematically proven thesis grounded in the team&rsquo;s research program: forgetting is geometric inevitability; structure and negation outperform scale and reward; a deterministic filesystem is the right substrate for organizational memory; failure feedback alone is enough to align behavior.",
      "The headline result: replacing frontier models with a 50× smaller model drops F1 by only 0.07, while retrieval-architecture optimizations contribute +0.112. Intelligence is in the architecture, not the model.",
    ],
  },
  {
    id: "commodity",
    label: "05 · When intelligence is a commodity",
    title: "The differentiator is no longer the model.",
    body: [
      "Foundation models are commoditizing. Inference costs are collapsing. When every company has access to frontier-level reasoning, the differentiator is how teams operate.",
      "Enterprise General Intelligence is the layer that turns commodity AI into organizational advantage: the memory, the context, and the accumulated understanding of how your company works, what it has decided, and what it should do next.",
    ],
  },
  {
    id: "roadmap",
    label: "06 · Roadmap",
    title: "Org memory · World model · Org-wide RL.",
    body: [
      "Phase 1 — Org memory (now → six months). Sentra knows the organization. Every interaction captured, every decision extracted, every commitment tracked. By day 90, the primary hub for work initiation and monitoring.",
      "Phase 2 — World model (six → twelve months). Sentra understands the organization. Causal models of how the company behaves, who influences what, which decisions led to which outcomes.",
      "Phase 3 — Org-wide RL (twelve → eighteen months). Sentra becomes irreplaceable infrastructure. Reinforcement learning on what worked and what didn&rsquo;t. The system doesn&rsquo;t just remember — it improves.",
    ],
  },
  {
    id: "collapse",
    label: "07 · Workflow collapse",
    title: "We do not engineer automation. We make it inevitable.",
    body: [
      "When an intelligence layer captures every commitment, tracks every dependency, and understands every person&rsquo;s context, workflows collapse on their own. The action layer is a natural consequence of the intelligence layer — not a separate product that needs to be bolted on.",
    ],
  },
];

const evidence = [
  {
    k: "11",
    v: "Active design partners — including SoftBank, Runway, Softmax.",
  },
  { k: "10,000+", v: "Meetings and 200,000 Slack messages processed." },
  { k: "20,000", v: "Decisions tracked. 35,000 commitments extracted." },
  { k: "35", v: "Enterprises in active pipeline." },
];

const quotes = [
  {
    body: "The one thing Sentra does well that others don&rsquo;t is that Sentra can contextualize what&rsquo;s important for me to know.",
    who: "Emmett Shear",
    role: "CEO, Softmax · former CEO, Twitch",
  },
  {
    body: "I consistently find the weekly reports good and useful. Even when it doesn&rsquo;t tell me anything new, just having a story of what happened is valuable.",
    who: "Siqi Chen",
    role: "CEO, Runway · former CEO, Sandbox VR",
  },
];

export function ManifestoView() {
  return (
    <>
      <section
        className="mh"
        data-screen-label="Manifesto"
        data-nav-theme="light"
      >
        <div className="container">
          <span className="mh-eyebrow">
            Manifesto · 2026—05—09 · BK-2026-05-009
          </span>
          <h1 className="mh-title">
            <span>Enterprise</span>
            <span>General</span>
            <span>Intelligence.</span>
          </h1>
          <p className="mh-lede">
            Every organization runs on intelligence — the decisions made in
            meetings, the context buried in threads, the commitments forged in
            conversation. Yet every enterprise tool stores only the shadows: the
            document after the decision, the ticket after the discussion, the
            CRM entry after the handshake. The originals — the interactions
            themselves — are thrown away.
          </p>
          <p className="mh-lede">
            Sentra exists to change this. We are building infrastructure that
            captures interactions at their source, extracts the intelligence
            within them, and turns every company into a system that learns,
            remembers, and acts on what it knows.
          </p>
        </div>
      </section>

      <section
        className="section section--first"
        data-screen-label="Manifesto · Body"
        data-nav-theme="light"
      >
        <div className="container">
          <div className="mb-stack bleed-top">
            {sections.map((s) => (
              <article className="mb-section" key={s.id} id={s.id}>
                <div className="mb-side">
                  <span className="mb-num">{s.label}</span>
                </div>
                <div className="mb-body">
                  <h2 className="mb-h">{s.title}</h2>
                  {s.body.map((p, i) => (
                    <p
                      className="mb-p"
                      key={i}
                      dangerouslySetInnerHTML={{ __html: p }}
                    />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section"
        data-screen-label="Manifesto · Evidence"
        data-nav-theme="light"
      >
        <div className="container">
          <span className="ra-meta">Early evidence</span>
          <h2 className="sec-h">Already in the field.</h2>

          <div className="me-grid bleed-top bleed-bottom">
            {evidence.map((e) => (
              <div className="me-cell" key={e.k}>
                <span className="me-k">{e.k}</span>
                <p className="me-v">{e.v}</p>
              </div>
            ))}
          </div>

          <div className="mq-grid">
            {quotes.map((q) => (
              <figure className="mq" key={q.who}>
                <blockquote
                  dangerouslySetInnerHTML={{
                    __html: `&ldquo;${q.body}&rdquo;`,
                  }}
                />
                <figcaption>
                  <span className="mq-who">{q.who}</span>
                  <span className="mq-role">{q.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mb-coda">
            We are not waiting for AGI to arrive and hoping it solves
            enterprise. We are building the intelligence layer that makes AGI
            useful for organizations.
          </p>
          <p className="mb-coda mb-coda--strong">
            Sentra is Enterprise General Intelligence.
          </p>
        </div>
      </section>
    </>
  );
}
