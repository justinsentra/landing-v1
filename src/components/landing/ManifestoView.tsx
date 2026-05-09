type Section = { id: string; label: string; title: string; body: string[] };

const sections: Section[] = [
  {
    id: "core-insight",
    label: "01",
    title: "Intelligence lives in interactions, not documents.",
    body: [
      "Every system of record — your CRM, your project tracker, your OKR tool — is derivative. They are downstream artifacts of conversations between people. The meeting where strategy shifted. The Slack thread where architecture was debated. The email where a commitment was made.",
      "These interactions carry intent, rationale, context, and causality. The artifacts carry none of it.",
    ],
  },
  {
    id: "tractable",
    label: "02",
    title: "Personal memory is intractable. Organizations are not.",
    body: [
      "Individuals have shifting, unpredictable utility functions. Organizations have a stable one: build products, generate revenue, serve customers. This makes defining what matters mathematically tractable.",
      "Six classes — Actors, Interactions, Decisions, Rationale, Commitments, and Value-Creating Objects — indexed across time. Actors and Interactions are primary. Everything else is derived.",
    ],
  },
  {
    id: "intelligence",
    label: "03",
    title: "We are replacing the substrate, not adding a layer.",
    body: [
      "Sentra captures interactions at their source — meetings, emails, messages, agent traces — and derives everything that currently lives in separate silos. CRMs, OKR platforms, performance reviews, knowledge management — they collapse into a single intelligence layer that is always current, always contextual, always complete.",
    ],
  },
  {
    id: "research",
    label: "04",
    title: "Five papers. One thesis.",
    body: [
      "Forgetting is geometric inevitability. Structure and negation outperform scale and reward. A deterministic filesystem is the right substrate for organizational memory. Failure feedback alone is enough to align behavior.",
      "Replacing frontier models with a 50× smaller model drops F1 by only 0.07. Retrieval-architecture optimizations contribute +0.112. The intelligence is in the architecture, not the model.",
    ],
  },
  {
    id: "commodity",
    label: "05",
    title: "The differentiator is no longer the model.",
    body: [
      "Foundation models are commoditizing. Inference costs are collapsing. When every company has access to frontier-level reasoning, the differentiator is how teams operate.",
    ],
  },
  {
    id: "roadmap",
    label: "06",
    title: "Org memory · World model · Org-wide RL.",
    body: [
      "Phase 1 — Org memory. Sentra knows the organization. Every interaction captured, every decision extracted, every commitment tracked.",
      "Phase 2 — World model. Sentra understands the organization. Causal models of how the company behaves.",
      "Phase 3 — Org-wide RL. Sentra becomes irreplaceable infrastructure. The system doesn’t just remember — it improves.",
    ],
  },
  {
    id: "collapse",
    label: "07",
    title: "We do not engineer automation. We make it inevitable.",
    body: [
      "When an intelligence layer captures every commitment, tracks every dependency, and understands every person’s context, workflows collapse on their own. The action layer is a natural consequence of the intelligence layer.",
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
        <h1 className="sec-h">Manifesto.</h1>
        <p className="sec-sub">
          Every organization runs on intelligence — the decisions made in
          meetings, the context buried in threads, the commitments forged in
          conversation. Sentra captures these at their source and turns every
          company into a system that learns, remembers, and acts on what it
          knows.
        </p>

        <div className="mb-stack bleed-top">
          {sections.map((s) => (
            <article className="mb-section" key={s.id} id={s.id}>
              <span className="mb-num">{s.label}</span>
              <div className="mb-body">
                <h2 className="mb-h">{s.title}</h2>
                {s.body.map((p, i) => (
                  <p className="mb-p" key={i}>
                    {p}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mb-coda">Sentra is enterprise general intelligence.</p>
      </div>
    </section>
  );
}
