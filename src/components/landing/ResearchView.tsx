type Paper = {
  tag: string;
  title: string;
  subtitle: string;
  href: string;
};

const papers: Paper[] = [
  {
    tag: "Plain English",
    title: "The geometry of forgetting",
    subtitle: "Why AI memory forgets",
    href: "#",
  },
  {
    tag: "Research result",
    title: "The price of meaning",
    subtitle: "Why meaning alone is not enough",
    href: "#",
  },
  {
    tag: "Architecture",
    title: "Semantic memory filesystem",
    subtitle: "The engineering answer",
    href: "#",
  },
  {
    tag: "Control",
    title: "Operational reinforcement",
    subtitle: "How Sentra catches drift",
    href: "#",
  },
  {
    tag: "Alignment",
    title: "Avoidance learning",
    subtitle: "Alignment without reward hacking",
    href: "#",
  },
  {
    tag: "Efficiency",
    title: "3% is all you need",
    subtitle: "Structure beats brute force",
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
        <p className="rh-lede">
          The intelligence is not in the model. It is in the architecture. The
          papers below outline how Sentra builds memory that is deterministic,
          provable, and aligned by design.
        </p>

        <div className="rp-grid bleed-top bleed-bottom">
          {papers.map((p) => (
            <a className="rp-card" href={p.href} key={p.title}>
              <span className="rp-tag">{p.tag}</span>
              <h2 className="rp-title">{p.title}</h2>
              <p className="rp-subtitle">{p.subtitle}</p>
              <span className="rp-link">Read the plain-English research →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
