type Paper = {
  tag: string;
  title: string;
  subtitle: string;
  read: string;
  href: string;
};

type Act = {
  num: string;
  label: string;
  title: string;
  body: string[];
};

const acts: Act[] = [
  {
    num: "I",
    label: "The physics of memory failure",
    title: "Forgetting is geometric, not accidental.",
    body: [
      "Two papers from the team treat forgetting as a property of geometry. A simple embedding-based memory reproduces the quantitative signatures of human cognition — power-law decay, false recall — with no phenomenon-specific engineering. Bigger models move the problem; they do not solve it.",
      "Interference, not capacity, is the limiting factor. Any system that organizes by meaning will eventually lose facts or recall the wrong ones unless it adds external structure.",
    ],
  },
  {
    num: "II",
    label: "The deterministic substrate",
    title: "A filesystem is the right data model.",
    body: [
      "The Semantic Memory Filesystem (SMF) treats directories, files, and symbolic links as the primary substrate for organizational memory, with parallel retrieval and provenance tracking on every node.",
      "The headline result: replacing frontier models with a 50× smaller model drops F1 by only 0.07, while retrieval-architecture optimizations contribute +0.112. The intelligence is in the architecture, not the model.",
    ],
  },
  {
    num: "III",
    label: "Optimization & alignment",
    title: "Negative feedback is enough.",
    body: [
      "Monitor MDPs reframe failure as the canonical alignment signal — exact credit assignment by design, with a 300–900× memory advantage over reward machines. Avoidance learning shows substantive LLM behavior emerging from pure negative feedback.",
      "Counter-intuitively, adding positive rewards degrades performance. Structure and negation outperform scale and reward.",
    ],
  },
  {
    num: "IV",
    label: "World models",
    title: "Causality, not correlation, for agents.",
    body: [
      "Ongoing research builds causal models for agents acting inside persistent organizational reality. Who influences what. Which decisions led to which outcomes. Where patterns repeat. The substrate stops being a passive store and starts being a system that reasons about its own history.",
    ],
  },
];

const papers: Paper[] = [
  {
    tag: "Plain English",
    title: "The geometry of forgetting",
    subtitle: "Why AI memory forgets",
    read: "6 min read",
    href: "#",
  },
  {
    tag: "Research result",
    title: "The price of meaning",
    subtitle: "Why meaning alone is not enough",
    read: "8 min read",
    href: "#",
  },
  {
    tag: "Architecture",
    title: "Semantic memory filesystem",
    subtitle: "The engineering answer",
    read: "10 min read",
    href: "#",
  },
  {
    tag: "Control",
    title: "Operational reinforcement",
    subtitle: "How Sentra catches drift",
    read: "7 min read",
    href: "#",
  },
  {
    tag: "Alignment",
    title: "Avoidance learning",
    subtitle: "Alignment without reward hacking",
    read: "9 min read",
    href: "#",
  },
  {
    tag: "Efficiency",
    title: "3% is all you need",
    subtitle: "Structure beats brute force",
    read: "5 min read",
    href: "#",
  },
];

export function ResearchView() {
  return (
    <section
      className="section section--first"
      id="research"
      data-screen-label="Research"
      data-nav-theme="light"
    >
      <div className="container">
        <span className="rh-eyebrow">Research</span>
        <h1 className="rh-display">
          Building the mathematical and architectural foundations for enterprise
          memory, alignment, and intelligence.
        </h1>
        <p className="rh-lede">
          Most enterprise AI fails for a structural reason: it has no memory,
          and it cannot learn from its own failures. Our research program proves
          why memory systems break, derives what is possible, and converts
          impossibility results into engineering specifications.
        </p>
        <p className="rh-thesis">
          The intelligence is not in the model. It is in the architecture.
        </p>

        <div className="ra-stack bleed-top">
          {acts.map((a) => (
            <article
              className="ra-section"
              key={a.num}
              id={a.num.toLowerCase()}
            >
              <div className="ra-side">
                <span className="ra-num">{a.num}</span>
                <span className="ra-label">{a.label}</span>
              </div>
              <div className="ra-body">
                <h2 className="ra-title">{a.title}</h2>
                {a.body.map((p, i) => (
                  <p className="ra-p" key={i}>
                    {p}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="rp-head">
          <span className="rh-eyebrow">Publications</span>
          <h2 className="rp-h">Six papers. One thesis.</h2>
        </div>

        <div className="rp-grid bleed-top bleed-bottom">
          {papers.map((p) => (
            <a className="rp-card" href={p.href} key={p.title}>
              <span className="rp-tag">{p.tag}</span>
              <h3 className="rp-title">{p.title}</h3>
              <p className="rp-subtitle">{p.subtitle}</p>
              <span className="rp-link">
                {p.read} <span aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
