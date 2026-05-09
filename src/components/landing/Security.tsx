type IconKind = "fingerprint" | "clock" | "shield" | "cloud";

type Card = {
  icon: IconKind;
  title: string;
  body: string;
  highlighted?: boolean;
};

const cards: Card[] = [
  {
    icon: "fingerprint",
    title: "Provenance on every fact.",
    body: "Every node and edge carries its source and timestamp. Every answer cites the meeting, doc, or message it came from. No hallucinated history.",
  },
  {
    icon: "clock",
    title: "Temporal correctness.",
    body: "Old facts are invalidated, not deleted. Ask “what did we believe in Q3?” and Sentra returns the right answer for that point in time.",
  },
  {
    icon: "shield",
    title: "Compliance.",
    body: "SOC 2 Type II. ISO 27001. HIPAA on request. Subprocessor list public.",
    highlighted: true,
  },
  {
    icon: "cloud",
    title: "Deployment.",
    body: "Cloud, isolated VPC, or fully air-gapped on-prem. Your data stays where you say it stays.",
  },
];

const badges = [
  "SOC 2 Type II",
  "ISO 27001",
  "HIPAA-ready",
  "GDPR",
  "VPC",
  "Air-gap",
];

function Glyph({ kind }: { kind: IconKind }) {
  const stroke = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (kind === "fingerprint") {
    return (
      <svg {...stroke}>
        <path d="M12 11v2a4 4 0 0 0 1.17 2.83" />
        <path d="M8 12a4 4 0 0 1 8 0v1a10 10 0 0 0 .49 3.1" />
        <path d="M5.5 11a6.5 6.5 0 0 1 13 0v2a14 14 0 0 0 .35 3" />
        <path d="M9 17.65a8 8 0 0 1-1-3.65v-2a4 4 0 0 1 .47-1.88" />
        <path d="M16 19a14.5 14.5 0 0 1-1.5-5.5V12" />
      </svg>
    );
  }
  if (kind === "clock") {
    return (
      <svg {...stroke}>
        <path d="M3.05 11A9 9 0 1 1 12 21" />
        <polyline points="3 4 3 11 10 11" />
        <polyline points="12 7 12 12 15.5 14" />
      </svg>
    );
  }
  if (kind === "shield") {
    return (
      <svg {...stroke}>
        <path d="M12 3 4.5 6v6.2c0 4.4 3.1 7.6 7.5 8.8 4.4-1.2 7.5-4.4 7.5-8.8V6L12 3Z" />
        <polyline points="9 12 11.2 14.2 15.5 10" />
      </svg>
    );
  }
  return (
    <svg {...stroke}>
      <path d="M17 18a4 4 0 0 0 .9-7.9 5.5 5.5 0 0 0-10.7-1A4 4 0 0 0 7.5 18Z" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="9" r="3" fill="currentColor" />
      <path
        d="M4.5 9V5.5a2.5 2.5 0 1 1 5 0V9"
        stroke="currentColor"
        strokeWidth="1.1"
        fill="none"
      />
    </svg>
  );
}

export default function Security() {
  return (
    <section
      className="section"
      id="security"
      data-screen-label="06 Security"
      data-nav-theme="light"
    >
      <div className="container">
        <h2 className="sec-h sec-h--left">
          The brain that never leaves your perimeter.
        </h2>
        <p className="sec-sub sec-sub--left">
          Sentra is the system of record for how your company thinks. That kind
          of memory belongs inside your walls. Self-host it, audit it, own it.
        </p>

        <div className="sec-grid bleed-top">
          {cards.map((c) => (
            <article
              className={`sec-cell${c.highlighted ? " is-on" : ""}`}
              key={c.title}
            >
              <div className="sec-ic" aria-hidden="true">
                <Glyph kind={c.icon} />
              </div>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
            </article>
          ))}
        </div>

        <div className="sec-badges-row">
          {badges.map((b) => (
            <span className="sec-badge" key={b}>
              <LockIcon />
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
