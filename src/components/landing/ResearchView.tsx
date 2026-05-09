type Paper = {
  title: string;
  read: string;
  href: string;
};

type Subsection = { title?: string; body: string[] };

type Act = {
  num: string;
  title: string;
  sections: Subsection[];
};

const acts: Act[] = [
  {
    num: "I",
    title: "The Physics of Memory Failure",
    sections: [
      {
        title: "The Geometry of Forgetting",
        body: [
          "Why do AI systems forget? The standard answer — insufficient context window, stale embeddings, poor retrieval — treats forgetting as a software bug to be patched. Our first paper shows it is something deeper: a geometric inevitability.",
          "When memories are stored as vectors in high-dimensional space, forgetting and false recall emerge from the geometry itself. We demonstrate that a simple embedding-based memory, with no phenomenon-specific engineering, reproduces the quantitative signatures of human memory with striking fidelity. The system exhibits power-law forgetting with an exponent of b = 0.460, closely matching the human value of b ≈ 0.5 established in decades of cognitive research. Remove competing memories and the exponent drops to 0.009 — fifty times smaller. Time alone does not produce forgetting. Competition does.",
          "The system also generates false memories. Tested on the classic DRM paradigm, our unmodified pre-trained embeddings produce a false alarm rate of 0.583, compared to ~0.55 in human subjects, with zero parameter tuning. Perhaps most consequentially, we show that production embedding models operating in 384 to 1,024 nominal dimensions concentrate their variance in only ~16 effective dimensions. This “dimensionality illusion” means the geometric pathologies that cause forgetting and false recall are far more severe than the raw dimension count suggests.",
        ],
      },
      {
        title: "The Price of Meaning",
        body: [
          "If forgetting is geometric, can better geometry fix it? Our second paper proves the answer is no — at least not within the paradigm most AI systems use today. The No-Escape Theorem establishes that within any semantically continuous, kernel-threshold memory system, interference-driven forgetting and false recall cannot be eliminated without either abandoning semantic organization entirely or adding an external symbolic structure.",
          "We test this across five architecturally distinct memory systems, organized into three categories. Pure geometric systems express the vulnerability directly as smooth, predictable forgetting. Systems that add reasoning overlays partially compensate, but convert graceful degradation into brittle, cliff-edge failure. Only systems that sacrifice semantic generalization escape interference — but at the cost of the very capability that makes semantic memory useful.",
          "Scale alone moves a system along a tradeoff surface where forgetting and usefulness are fundamentally coupled. To break free, you need a different kind of architecture.",
        ],
      },
    ],
  },
  {
    num: "II",
    title: "The Deterministic Substrate",
    sections: [
      {
        title: "Semantic Memory Filesystem",
        body: [
          "The No-Escape Theorem doesn’t just identify the problem — it prescribes the solution. If you cannot eliminate interference within a purely semantic system, you must add external symbolic structure. The Semantic Memory Filesystem (SMF) is our engineering answer: a system that treats the POSIX filesystem — directories, files, and symbolic links — as the primary substrate for organizational memory.",
          "SMF maps a six-class organizational ontology onto filesystem primitives, using bidirectional symbolic links as explicit relational edges. A recursive six-stage LLM pipeline extracts and structures information with provenance tracking and multiplicative confidence decay. Retrieval operates through four parallel channels — BM25, semantic embeddings, graph traversal, and temporal filtering — each compensating for the others’ blind spots.",
          "Replacing a frontier model with one 50× smaller drops F1 by only 0.07, while retrieval optimizations alone contribute +0.112 F1. The intelligence is in the architecture, not the model.",
          "SMF reduces the language model’s job to reading comprehension — a task that small, fast, cost-effective models handle well. This is how you build enterprise systems that are accurate, auditable, and economically viable.",
          "This architectural completeness has a direct product consequence: because the ontology captures the primitives from which downstream systems of record are derived, the artifacts those systems produce are in principle reconstructable from the SMF substrate.",
        ],
      },
    ],
  },
  {
    num: "III",
    title: "The Optimization and Alignment Engine",
    sections: [
      {
        title: "Operational Reinforcement",
        body: [
          "A memory that never forgets is necessary but not sufficient. Systems must also learn from what goes wrong. Operational Reinforcement introduces Monitor MDPs, a formalism where failure conditions are specified as structured monitors rather than as scalar reward signals. This yields exact credit assignment by design, not by learning: when a failure occurs, the system knows precisely which decision caused it.",
          "The architectural payoff is dramatic. Monitor MDPs collapse the state space from O(|S|^k) to O(k), delivering a 300–900× memory advantage over conventional reward machines. More remarkably, pure failure avoidance — with no goal reward whatsoever — produces goal-directed behavior. The agent doesn’t need to be told what to do; it only needs to know what to avoid. The goals emerge.",
        ],
      },
      {
        title: "Avoidance Learning",
        body: [
          "If Operational Reinforcement shows that avoidance works in MDPs, Avoidance Learning asks whether the same principle applies to language models. Can you align an LLM using only negative feedback — no positive examples, no reward shaping, no RLHF-style preference pairs?",
          "The answer is yes, but with a critical caveat. We first prove the Silence Loophole theorem: any purely content-based negative feedback system admits trivial fixed points — the model can satisfy all constraints by saying nothing. This result generalizes beyond our method to unlearning, guardrails, and Constitutional AI. Our solution closes the loophole, achieving an 80% reduction in evasive responses while preserving safety and truthfulness.",
          "Adding positive rewards degrades performance. Negative feedback alone suffices for substance, safety, and factual accuracy. For enterprise AI, where getting things right matters more than sounding right, this distinction is fundamental.",
        ],
      },
    ],
  },
  {
    num: "IV",
    title: "World Models",
    sections: [
      {
        body: [
          "Memory and alignment are the foundation. The next frontier is understanding: agents that don’t just recall and respond, but build causal models of how organizations actually work. Using the SMF architecture as substrate, our ongoing research develops world models for AI agents that interact with structured, persistent reality — predicting the downstream consequences of decisions, identifying when commitments are drifting, and understanding the causal chains that connect individual actions to organizational outcomes. This is the path from memory to intelligence.",
        ],
      },
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

        <div className="rt-block bleed-top bleed-bottom">
          <span className="rt-eyebrow">Our thesis</span>
          <h2 className="rt-h">The intelligence is in the architecture.</h2>
          <p className="rt-p">
            The AI industry is hypnotized by scale — the assumption that bigger
            models, trained on more data, will eventually solve every problem.
            Sentra’s thesis is different. We believe that structured negative
            feedback and careful architectural design matter more than model
            size. Defining what a system should avoid is often more tractable,
            and more robust, than defining what it should prefer. A 50× smaller
            model in the right architecture can match a frontier model in the
            wrong one. Pure negative feedback can produce better behavior than
            carefully balanced reward.
          </p>
          <p className="rt-p">
            These are not intuitions; they are results — proven mathematically
            and demonstrated empirically across our five foundational papers.
          </p>
        </div>

        <div className="ra-stack">
          {acts.map((a) => (
            <article
              className="ra-act"
              key={a.num}
              id={`act-${a.num.toLowerCase()}`}
            >
              <header className="ra-act-head">
                <span className="ra-act-num">Act {a.num}</span>
                <h2 className="ra-act-title">{a.title}</h2>
              </header>
              <div className="ra-act-body">
                {a.sections.map((s, i) => (
                  <section className="ra-sub" key={i}>
                    {s.title && <h3 className="ra-sub-title">{s.title}</h3>}
                    {s.body.map((p, j) => (
                      <p className="ra-p" key={j}>
                        {p}
                      </p>
                    ))}
                  </section>
                ))}
              </div>
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
