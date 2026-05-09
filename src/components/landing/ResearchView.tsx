type Act = {
  num: string;
  label: string;
  title: string;
  body: string;
  pull: string;
};

const acts: Act[] = [
  {
    num: "I",
    label: "The physics of memory failure",
    title: "Forgetting is geometric, not accidental.",
    body: "Two papers examine forgetting as geometric inevitability and semantic memory constraint. A simple embedding-based memory reproduces the quantitative signatures of human cognition — power-law forgetting, false recall — with no phenomenon-specific engineering. Forgetting arises from interference, not decay.",
    pull: "Power-law forgetting falls out of high-dimensional geometry — not from any cognitive trick.",
  },
  {
    num: "II",
    label: "The deterministic substrate",
    title: "A filesystem is the right data model.",
    body: "We introduce the Semantic Memory Filesystem (SMF). Directories, files, and symbolic links become the primary substrate for organizational memory, with 4-channel parallel retrieval and provenance tracking on every node. Replacing frontier models with a 50× smaller model drops F1 by only 0.07; retrieval architecture optimizations contribute +0.112. The intelligence is in the architecture, not the model.",
    pull: "50× smaller model, F1 drop 0.07. Architecture optimizations alone: +0.112.",
  },
  {
    num: "III",
    label: "Optimization & alignment",
    title: "Negative feedback is enough.",
    body: "Monitor MDPs reframe failure as the canonical alignment signal: exact credit assignment by design, with a 300–900× memory advantage over reward machines. Avoidance learning shows that substantive LLM behavior emerges from pure negative feedback — 80% fewer evasive responses. Counter-intuitively, adding positive rewards degrades performance.",
    pull: "Pure failure avoidance produces goal-directed behavior. No positive rewards required.",
  },
  {
    num: "IV",
    label: "World models",
    title: "Causality, not correlation, for agents.",
    body: "Ongoing research builds causal models for agents acting inside persistent organizational reality. Who influences what. Which decisions led to which outcomes. Where patterns repeat. The substrate stops being a passive store and starts being a system that reasons about its own history.",
    pull: "Phase three: the memory begins improving on what it remembers.",
  },
];

type Paper = {
  id: string;
  title: string;
  authors: string;
  date: string;
};

const papers: Paper[] = [
  {
    id: "SR-2026-04-005",
    title: "The geometry of forgetting",
    authors: "Sambartha Ray Barman · Andrey Starenky · Ashwin Gopinath",
    date: "2026—04",
  },
  {
    id: "SR-2026-04-004",
    title: "The price of meaning: a no-escape theorem for semantic memory",
    authors: "Sambartha Ray Barman · Sophia Bodnar · Ashwin Gopinath",
    date: "2026—04",
  },
  {
    id: "SR-2026-03-003",
    title: "The semantic memory filesystem",
    authors: "Andrey Starenky · Nikhil Narasimhan · Ashwin Gopinath",
    date: "2026—03",
  },
  {
    id: "SR-2026-03-002",
    title: "Operational reinforcement: monitor MDPs",
    authors: "Sophia Bodnar · Sambartha Ray Barman · Ashwin Gopinath",
    date: "2026—03",
  },
  {
    id: "SR-2026-03-001",
    title: "Avoidance learning in LLMs",
    authors: "Nikhil Narasimhan · Andrey Starenky · Ashwin Gopinath",
    date: "2026—03",
  },
];

export function ResearchView() {
  return (
    <>
      <section
        className="rh"
        data-screen-label="Research"
        data-nav-theme="light"
      >
        <div className="container">
          <span className="rh-eyebrow">Research · 2026—Q2</span>
          <h1 className="rh-title">
            The mathematical and architectural foundations of organizational
            memory.
          </h1>
          <p className="rh-lede">
            Enterprise AI fails for a structural reason: it has no memory, and
            it cannot learn from its own failures. Sentra&rsquo;s research
            program proves why memory systems break, derives what is possible,
            and converts impossibility results into engineering specifications.
          </p>
          <p className="rh-thesis">
            <span className="rh-thesis-q">&ldquo;</span>
            The intelligence is not in the model. It is in the architecture.
            <span className="rh-thesis-q">&rdquo;</span>
          </p>
        </div>
      </section>

      <section
        className="section section--first"
        data-screen-label="Research · Acts"
        data-nav-theme="light"
      >
        <div className="container">
          <span className="ra-meta">Four acts · One thesis</span>
          <h2 className="sec-h">
            Structure and negation matter more than scale and reward.
          </h2>

          <div className="ra-grid bleed-top bleed-bottom">
            {acts.map((act) => (
              <article className="ra-cell" key={act.num}>
                <div className="ra-head">
                  <span className="ra-num">{act.num}</span>
                  <span className="ra-label">{act.label}</span>
                </div>
                <h3 className="ra-title">{act.title}</h3>
                <p className="ra-body">{act.body}</p>
                <p className="ra-pull">{act.pull}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section"
        data-screen-label="Research · Papers"
        data-nav-theme="light"
      >
        <div className="container">
          <span className="ra-meta">Publications</span>
          <h2 className="sec-h">Five papers. One thesis.</h2>

          <ul className="rp-list bleed-top bleed-bottom">
            {papers.map((p) => (
              <li className="rp-row" key={p.id}>
                <span className="rp-id">{p.id}</span>
                <div className="rp-body">
                  <h4 className="rp-title">{p.title}</h4>
                  <p className="rp-authors">{p.authors}</p>
                </div>
                <span className="rp-date">{p.date}</span>
              </li>
            ))}
          </ul>

          <p className="rp-foot">
            Pre-prints available on request. Drafts circulate inside the design
            partner cohort before publication.
          </p>
        </div>
      </section>
    </>
  );
}
