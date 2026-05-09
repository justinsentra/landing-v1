import Image from "next/image";

type Card = {
  src: string;
  alt: string;
  label: string;
  title: string;
  body: string;
};

const cards: Card[] = [
  {
    src: "/generated/cos-card1-unified-memory.png",
    alt: "Source context flowing into a CRM record",
    label: "Unified memory",
    title: "Reasons remembered, not just results.",
    body: "Your CRM knows the deal changed. Sentra knows the customer escalated, who approved the exception, and which tradeoff made the decision make sense.",
  },
  {
    src: "/generated/cos-card2-meeting-intel.png",
    alt: "Conversations from Slack, Gmail, and Zoom converging into structured commitments",
    label: "Meeting intelligence",
    title: "Follow-throughs from a conversation.",
    body: "Commitments do not wait for someone to write them down. Sentra tracks them from the moment they are spoken and keeps the evidence attached.",
  },
  {
    src: "/generated/cos-card3-risk-awareness.png",
    alt: "Tracked decisions list with one item flagged as drifting",
    label: "Risk awareness",
    title: "Catch what is quietly drifting.",
    body: "Most tools tell you what is loud. Sentra surfaces what has gone stale, what is at risk, and what has not been mentioned in two weeks.",
  },
  {
    src: "/generated/cos-card4-action-log.png",
    alt: "Auto-generated weekly digest of commitments",
    label: "Action log",
    title: "Updates written from the work itself.",
    body: "Weekly reviews, prep briefs, customer histories, and project status come from the same graph. No chasing people. No reconstructing context.",
  },
];

export default function ChiefOfStaff() {
  return (
    <section
      className="section section--first"
      id="overview"
      data-screen-label="01 Chief of staff"
      data-nav-theme="light"
    >
      <div className="container">
        <h2 className="sec-h">
          A chief of staff for every person. A program manager for every team.
        </h2>
        <p className="sec-sub">
          Sentra does not ask your team to manage another system. It listens to
          the systems you already use, remembers all of it, and tells the right
          people what matters next.
        </p>

        <div className="cos-grid bleed-top bleed-bottom">
          {cards.map((c) => (
            <div className="cos-cell" key={c.label}>
              <div className="cos-vis">
                <Image src={c.src} alt={c.alt} width={640} height={400} />
              </div>
              <span className="label">{c.label}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
