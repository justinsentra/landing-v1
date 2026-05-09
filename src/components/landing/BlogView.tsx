type Post = {
  title: string;
  excerpt: string;
  date: string;
  href: string;
  thumb: "memory" | "factual" | "action" | "state";
};

const featured: Post = {
  title: "Company brain: why most companies have data but no memory",
  excerpt:
    "Organizations have data, but they lose institutional context. Meetings lose follow-ups. People leave with different versions of decisions. The group stops sharing reality.",
  date: "2026—04",
  href: "https://nanothoughts.substack.com/p/company-brain-why-most-companies",
  thumb: "memory",
};

const posts: Post[] = [
  {
    title: "Company brain, part two: factual memory",
    excerpt:
      "Factual memory is the foundational first layer. Without it, a company cannot know what it knows.",
    date: "2026—04",
    href: "https://nanothoughts.substack.com/p/company-brain-part-2-factual-memory",
    thumb: "factual",
  },
  {
    title: "Company brain, part four: action memory",
    excerpt:
      "Action memory provides operational continuity and an agentic surface for execution, layered on factual and interaction memory.",
    date: "2026—04",
    href: "https://nanothoughts.substack.com/p/company-brain-part-4-action-memory",
    thumb: "action",
  },
  {
    title: "Memory is state, not a service",
    excerpt:
      "Memory should be treated as shared organizational state — not a bolt-on service for individual tools.",
    date: "2026—03",
    href: "https://nanothoughts.substack.com/p/memory-is-state-not-a-service",
    thumb: "state",
  },
];

function Thumb({ kind }: { kind: Post["thumb"] }) {
  return (
    <div className={`bp-thumb bp-thumb--${kind}`} aria-hidden="true">
      <svg viewBox="0 0 600 360" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`g-${kind}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1f4aa3" />
            <stop offset="100%" stopColor="#0a1430" />
          </linearGradient>
        </defs>
        <rect width="600" height="360" fill={`url(#g-${kind})`} />
        {kind === "memory" && (
          <g
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="1"
            strokeDasharray="3 3"
            fill="none"
          >
            {Array.from({ length: 7 }).map((_, i) => (
              <circle key={i} cx="300" cy="180" r={40 + i * 28} />
            ))}
            <circle cx="300" cy="180" r="6" fill="#7ba9ff" stroke="none" />
          </g>
        )}
        {kind === "factual" && (
          <g stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none">
            {Array.from({ length: 8 }).map((_, i) => (
              <line
                key={i}
                x1="80"
                x2="520"
                y1={60 + i * 32}
                y2={60 + i * 32}
                strokeDasharray="4 6"
              />
            ))}
            <rect
              x="200"
              y="120"
              width="200"
              height="120"
              stroke="#7ba9ff"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />
          </g>
        )}
        {kind === "action" && (
          <g
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1.4"
            fill="none"
            strokeLinecap="round"
          >
            <path
              d="M80 180 L240 180 L260 160 L260 200 L240 180"
              stroke="#7ba9ff"
              strokeWidth="2"
            />
            <path d="M260 180 L420 180 L440 160 L440 200 L420 180" />
            <path d="M440 180 L520 180" />
            <circle cx="80" cy="180" r="4" fill="#7ba9ff" stroke="none" />
            <circle cx="260" cy="180" r="4" fill="#fff" stroke="none" />
            <circle cx="440" cy="180" r="4" fill="#fff" stroke="none" />
            <circle cx="520" cy="180" r="4" fill="#fff" stroke="none" />
          </g>
        )}
        {kind === "state" && (
          <g
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="2 4"
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <line
                key={i}
                x1={50 + i * 42}
                x2={50 + i * 42}
                y1="40"
                y2="320"
              />
            ))}
            <rect
              x="180"
              y="120"
              width="240"
              height="120"
              fill="rgba(123,169,255,0.18)"
              stroke="#7ba9ff"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />
          </g>
        )}
      </svg>
    </div>
  );
}

export function BlogView() {
  return (
    <section className="bp" data-screen-label="Blog" data-nav-theme="light">
      <div className="container">
        <h1 className="bp-title">Blog</h1>
      </div>

      <div className="container">
        <a
          className="bp-feature"
          href={featured.href}
          target="_blank"
          rel="noreferrer"
        >
          <Thumb kind={featured.thumb} />
          <div className="bp-feature-body">
            <h2 className="bp-feature-title">{featured.title}</h2>
            <p className="bp-feature-excerpt">{featured.excerpt}</p>
            <span className="bp-date">{featured.date}</span>
          </div>
        </a>

        <ul className="bp-grid">
          {posts.map((p) => (
            <li key={p.title}>
              <a
                className="bp-card"
                href={p.href}
                target="_blank"
                rel="noreferrer"
              >
                <Thumb kind={p.thumb} />
                <div className="bp-card-body">
                  <h3 className="bp-card-title">{p.title}</h3>
                  <p className="bp-card-excerpt">{p.excerpt}</p>
                  <span className="bp-date">{p.date}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
