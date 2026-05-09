import Image from "next/image";

type Side = { who: string; body: string; img: { src: string; alt: string } };
type Row = { lab: string; q: string; left: Side; right: Side };

const rows: Row[] = [
  {
    lab: "Where structure is built",
    q: "Query time vs. write time",
    left: {
      who: "Context graphs",
      body: "Search Slack, then email, then meetings, then docs at query time. Each query rediscovers the structure.",
      img: {
        src: "/generated/diff-row1-fragments.png",
        alt: "Disconnected app icons floating across a dotted background, suggesting fragmented context",
      },
    },
    right: {
      who: "Sentra",
      body: "Resolution, extraction, and graph construction happen at ingest. By the time you query, the graph is already structured.",
      img: {
        src: "/generated/diff-row1-graph.png",
        alt: "A polished node-edge graph diagram with a central cobalt node and satellite nodes",
      },
    },
  },
  {
    lab: "What it captures",
    q: "Artifacts vs. interactions",
    left: {
      who: "Connectors",
      body: "Fetch the CRM entry, the Jira ticket, the Confluence page. The meeting that produced it disappears.",
      img: {
        src: "/generated/diff-row2-artifacts.png",
        alt: "Three overlapping document records — HubSpot, Google Doc, Linear — without surrounding rationale",
      },
    },
    right: {
      who: "Sentra",
      body: "Meetings, threads, and emails are captured as first-class evidence — rationale preserved alongside the artifact.",
      img: {
        src: "/generated/diff-row2-interactions.png",
        alt: "Zoom, Slack, and Gmail evidence cards with cobalt edges converging into a single decision node",
      },
    },
  },
  {
    lab: "How identity resolves",
    q: "Sarah, S. Chen, @schen",
    left: {
      who: "LLMs with context windows",
      body: "Each surface treated independently. The same person reads as three names, three avatars, three histories.",
      img: {
        src: "/generated/diff-row3-identity-split.png",
        alt: "Three identity cards for the same person across Slack, Gmail, HubSpot — fragmented histories",
      },
    },
    right: {
      who: "Sentra",
      body: "Continuous, confidence-scored identity resolution across every surface. One actor, one history, one thread.",
      img: {
        src: "/generated/diff-row3-identity-resolved.png",
        alt: "Four surface markers converging via cobalt edges into one resolved canonical identity",
      },
    },
  },
];

function Cell({ side, isYou }: { side: Side; isYou?: boolean }) {
  return (
    <div className={`diff-cell${isYou ? " you" : ""}`}>
      <span className="diff-chip" aria-label={side.who}>
        {isYou ? (
          <>
            <Image
              src="/sentra.png"
              alt=""
              aria-hidden="true"
              width={28}
              height={28}
              className="diff-chip-logo"
            />
            <span>Sentra</span>
          </>
        ) : (
          side.who
        )}
      </span>
      <div className="diff-cell-text">
        <p>{side.body}</p>
      </div>
      <div className="diff-vis">
        <Image
          src={side.img.src}
          alt={side.img.alt}
          width={640}
          height={320}
          className="diff-vis-img"
        />
      </div>
    </div>
  );
}

export default function Different() {
  return (
    <section
      className="section"
      id="different"
      data-screen-label="02 Different"
      data-nav-theme="light"
    >
      <div className="container">
        <h2 className="sec-h">What makes Sentra different?</h2>
        <p className="sec-sub">
          An API is a pipe. A memory framework is a bucket. A vector database is
          a haystack. The category is having a moment. The architecture is what
          produces comprehension.
        </p>

        <div className="diff-rows bleed-top bleed-bottom">
          {rows.map((r) => (
            <div className="diff-row" key={r.lab}>
              <div className="diff-q">
                <span className="lab">{r.lab}</span>
                <h4>{r.q}</h4>
              </div>
              <Cell side={r.left} />
              <Cell side={r.right} isYou />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
