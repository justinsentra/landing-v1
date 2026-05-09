type Paper = {
  title: string;
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
      "A simple embedding-based memory reproduces the quantitative signatures of human cognition — power-law decay, false recall — with no phenomenon-specific engineering. Bigger models move the problem; they do not solve it.",
      "Interference, not capacity, is the limiting factor. Any system that organizes by meaning will eventually lose facts or recall the wrong ones unless it adds external structure.",
    ],
  },
  {
    num: "II",
    label: "The deterministic substrate",
    title: "A filesystem is the right data model.",
    body: [
      "The Semantic Memory Filesystem treats directories, files, and symbolic links as the primary substrate for organizational memory, with parallel retrieval and provenance on every node.",
      "Replacing frontier models with a 50× smaller model drops F1 by only 0.07; retrieval-architecture optimizations contribute +0.112. The intelligence is in the architecture, not the model.",
    ],
  },
  {
    num: "III",
    label: "Optimization & alignment",
    title: "Negative feedback is enough.",
    body: [
      "Monitor MDPs reframe failure as the canonical alignment signal — exact credit assignment by design, with a 300–900× memory advantage over reward machines. Avoidance learning shows substantive LLM behavior emerging from pure negative feedback.",
      "Adding positive rewards degrades performance. Structure and negation outperform scale and reward.",
    ],
  },
  {
    num: "IV",
    label: "World models",
    title: "Causality, not correlation, for agents.",
    body: [
      "Ongoing research builds causal models for agents acting inside persistent organizational reality. Who influences what. Which decisions led to which outcomes. The substrate stops being a passive store and starts reasoning about its own history.",
    ],
  },
];

const papers: Paper[] = [
  { title: "The geometry of forgetting", read: "6 min read", href: "#" },
  { title: "The price of meaning", read: "8 min read", href: "#" },
  { title: "Semantic memory filesystem", read: "10 min read", href: "#" },
  { title: "Operational reinforcement", read: "7 min read", href: "#" },
  { title: "Avoidance learning", read: "9 min read", href: "#" },
  { title: "3% is all you need", read: "5 min read", href: "#" },
];

function Arrow() {
  return (
    <svg
      className="rp-arrow"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="13 5 20 12 13 19" />
    </svg>
  );
}

export function ResearchView() {
  return (
    <section
      className="section section--first"
      id="research"
      data-screen-label="Research"
      data-nav-theme="light"
    >
      <div className="container">
        <h1 className="sec-h">Research</h1>
        <p className="rh-lede">
          Most enterprise AI fails for a structural reason: it has no memory,
          and it cannot learn from its own failures. Our research program proves
          why memory systems break, derives what is possible, and converts
          impossibility results into engineering specifications.
        </p>

        <p className="rh-thesis bleed-top bleed-bottom">
          The intelligence is not in the model. It is in the architecture.
        </p>

        <div className="ra-grid">
          {acts.map((a) => (
            <article className="ra-cell" key={a.num} id={a.num.toLowerCase()}>
              <div className="ra-cell-head">
                <span className="ra-num">{a.num}</span>
                <span className="ra-label">{a.label}</span>
              </div>
              <h2 className="ra-title">{a.title}</h2>
              {a.body.map((p, i) => (
                <p className="ra-p" key={i}>
                  {p}
                </p>
              ))}
            </article>
          ))}
        </div>

        <h2 className="rp-h">Publications</h2>

        <div className="rp-grid">
          {papers.map((p) => (
            <a className="rp-card" href={p.href} key={p.title}>
              <h3 className="rp-title">{p.title}</h3>
              <div className="rp-foot">
                <span className="rp-time">{p.read}</span>
                <Arrow />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
