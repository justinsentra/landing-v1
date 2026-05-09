type Paper = {
  tag: string;
  title: string;
  subtitle: string;
  quote: string;
  href: string;
};

const papers: Paper[] = [
  {
    tag: "Plain English",
    title: "The geometry of forgetting",
    subtitle: "Why AI memory forgets",
    quote:
      "AI memory systems forget and confuse similar things for a geometric reason. Bigger models move the problem; structure changes it.",
    href: "#",
  },
  {
    tag: "Research result",
    title: "The price of meaning",
    subtitle: "Why meaning alone is not enough",
    quote:
      "Any system that organizes by meaning will eventually lose facts or recall the wrong ones unless it adds external structure.",
    href: "#",
  },
  {
    tag: "Architecture",
    title: "Semantic memory filesystem",
    subtitle: "The engineering answer",
    quote:
      "Give every fact a place, a source, and a time. A smaller model in the right structure can match a frontier model without it.",
    href: "#",
  },
  {
    tag: "Control",
    title: "Operational reinforcement",
    subtitle: "How Sentra catches drift",
    quote:
      "Teams mostly care about what should not happen: missed deadlines, repeated work, policy breaks. Sentra turns those constraints into monitors.",
    href: "#",
  },
  {
    tag: "Alignment",
    title: "Avoidance learning",
    subtitle: "Alignment without reward hacking",
    quote:
      "You can steer systems with clear negative examples instead of fuzzy rewards. That means fewer evasive answers and more useful behavior.",
    href: "#",
  },
  {
    tag: "Efficiency",
    title: "3% is all you need",
    subtitle: "Structure beats brute force",
    quote:
      "Only a tiny slice of model memory carries most of the signal. Sentra is built on the same lesson: find the structure, then use it.",
    href: "#",
  },
];

export function ResearchView() {
  return (
    <section className="rh" data-screen-label="Research" data-nav-theme="dark">
      <div className="rh-bg" aria-hidden="true">
        <div className="hero-base" />
        <div className="hero-curtain" />
        <div className="hero-curtain b" />
        <div className="hero-shimmer" />
        <div className="hero-dots" />
        <div className="hero-grain" />
      </div>

      <div className="rh-inner">
        <header className="rh-head">
          <h1 className="rh-title">Research</h1>
          <p className="rh-lede">
            Building the mathematical and architectural foundations for
            enterprise memory, alignment, and intelligence.
          </p>
        </header>

        <div className="rp-grid">
          {papers.map((p) => (
            <article className="rp-card" key={p.title}>
              <a className="rp-card-arrow" href={p.href} aria-label={p.title}>
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <path
                    d="M5 11L11 5M11 5H6M11 5V10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <span className="rp-tag">{p.tag}</span>
              <h2 className="rp-title">{p.title}</h2>
              <p className="rp-subtitle">{p.subtitle}</p>

              <blockquote className="rp-quote">{p.quote}</blockquote>

              <a className="rp-link" href={p.href}>
                Read the plain-English research
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
