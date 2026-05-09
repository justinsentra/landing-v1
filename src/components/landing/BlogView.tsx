type Post = {
  title: string;
  date: string;
  href: string;
  thumb: ThumbKind;
};

type ThumbKind =
  | "memory"
  | "factual"
  | "interaction"
  | "action"
  | "state"
  | "signs"
  | "egi"
  | "forget";

const featured: Post = {
  title: "Company Brain: Why Most Companies Have Data But No Memory",
  date: "Apr 2026",
  href: "https://nanothoughts.substack.com/p/company-brain-why-most-companies",
  thumb: "memory",
};

const posts: Post[] = [
  {
    title: "Company Brain, Part 2: Factual Memory",
    date: "Apr 2026",
    href: "https://nanothoughts.substack.com/p/company-brain-part-2-factual-memory",
    thumb: "factual",
  },
  {
    title: "Company Brain, Part 3: Interaction Memory",
    date: "May 2026",
    href: "https://nanothoughts.substack.com/p/company-brain-part-3-interaction",
    thumb: "interaction",
  },
  {
    title: "Company Brain, Part 4: Action Memory",
    date: "Apr 2026",
    href: "https://nanothoughts.substack.com/p/company-brain-part-4-action-memory",
    thumb: "action",
  },
  {
    title: "Memory Is State, Not a Service",
    date: "Mar 2026",
    href: "https://nanothoughts.substack.com/p/memory-is-state-not-a-service",
    thumb: "state",
  },
  {
    title: "Who Signs? The Anthropic Paradox and the $40 Trillion Choice",
    date: "Apr 2026",
    href: "https://nanothoughts.substack.com/p/who-signs-the-anthropic-paradox-and",
    thumb: "signs",
  },
  {
    title:
      "Enterprise General Intelligence: The Emergent Mind of Organizations",
    date: "Feb 2026",
    href: "https://nanothoughts.substack.com/p/enterprise-general-intelligence-the",
    thumb: "egi",
  },
  {
    title: "Why AI Needs to Forget",
    date: "Jan 2026",
    href: "https://nanothoughts.substack.com/p/why-ai-needs-to-forget",
    thumb: "forget",
  },
];

function Thumb({ kind }: { kind: ThumbKind }) {
  return (
    <div className={`bp-thumb bp-thumb--${kind}`} aria-hidden="true">
      <svg viewBox="0 0 600 360" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`bg-${kind}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0e2c70" />
            <stop offset="100%" stopColor="#06070a" />
          </linearGradient>
        </defs>
        <rect width="600" height="360" fill={`url(#bg-${kind})`} />
        {kind === "memory" && (
          <g
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="1"
            strokeDasharray="3 4"
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
        {kind === "interaction" && (
          <g
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1.4"
            fill="none"
            strokeLinecap="round"
          >
            <circle cx="160" cy="120" r="6" fill="#7ba9ff" stroke="none" />
            <circle cx="440" cy="240" r="6" fill="#7ba9ff" stroke="none" />
            <circle cx="300" cy="180" r="32" />
            <line x1="160" y1="120" x2="270" y2="170" strokeDasharray="3 4" />
            <line x1="330" y1="190" x2="440" y2="240" strokeDasharray="3 4" />
            <line x1="200" y1="240" x2="280" y2="200" strokeDasharray="3 4" />
            <line x1="320" y1="160" x2="400" y2="120" strokeDasharray="3 4" />
            <circle cx="200" cy="240" r="4" fill="#fff" stroke="none" />
            <circle cx="400" cy="120" r="4" fill="#fff" stroke="none" />
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
        {kind === "signs" && (
          <g
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          >
            <path d="M150 250 L300 100 L450 250" strokeDasharray="4 5" />
            <line x1="220" y1="180" x2="380" y2="180" strokeDasharray="4 5" />
            <circle cx="300" cy="100" r="6" fill="#7ba9ff" stroke="none" />
            <text
              x="300"
              y="295"
              fontFamily="var(--mono)"
              fontSize="14"
              fill="rgba(255,255,255,0.55)"
              textAnchor="middle"
              letterSpacing="0.18em"
            >
              ?
            </text>
          </g>
        )}
        {kind === "egi" && (
          <g
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          >
            {Array.from({ length: 6 }).map((_, i) => {
              const a = (i / 6) * Math.PI * 2;
              const x = 300 + Math.cos(a) * 110;
              const y = 180 + Math.sin(a) * 110;
              return (
                <g key={i}>
                  <line x1="300" y1="180" x2={x} y2={y} strokeDasharray="3 4" />
                  <circle cx={x} cy={y} r="5" fill="#7ba9ff" stroke="none" />
                </g>
              );
            })}
            <circle cx="300" cy="180" r="14" fill="#7ba9ff" stroke="none" />
          </g>
        )}
        {kind === "forget" && (
          <g stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none">
            {Array.from({ length: 14 }).map((_, i) => {
              const op = (14 - i) / 14;
              return (
                <circle
                  key={i}
                  cx={120 + i * 36}
                  cy={180 + (i % 2 === 0 ? -10 : 10)}
                  r={4 + i * 0.3}
                  fill={`rgba(123,169,255,${op * 0.85})`}
                  stroke="none"
                />
              );
            })}
            <line x1="80" y1="240" x2="520" y2="240" strokeDasharray="2 4" />
          </g>
        )}
      </svg>
    </div>
  );
}

export function BlogView() {
  return (
    <section
      className="section section--first"
      id="blog"
      data-screen-label="Blog"
      data-nav-theme="light"
    >
      <div className="container">
        <h1 className="sec-h">Blog</h1>

        <a
          className="bp-feature"
          href={featured.href}
          target="_blank"
          rel="noreferrer"
        >
          <Thumb kind={featured.thumb} />
          <div className="bp-meta">
            <h2 className="bp-feature-title">{featured.title}</h2>
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
                <div className="bp-meta">
                  <h3 className="bp-card-title">{p.title}</h3>
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
