import Image from "next/image";

type Side = {
  who: string;
  body: string[];
  img: { src: string; alt: string };
};
type Row = { lab: string; q: string; left: Side; right: Side };

const rows: Row[] = [
  {
    lab: "Where structure is built",
    q: "Query time vs. write time",
    left: {
      who: "Context graphs",
      body: [
        "Most context graphs do the work at query time. When you ask a question, the system has to crawl Slack, then email, then meetings, then docs, and guess how the pieces relate.",
        "The structure is rediscovered on every request — stale results, missed connections, slow latency.",
      ],
      img: {
        src: "/generated/diff-row1-fragments.png",
        alt: "Disconnected app icons floating across a dotted background, suggesting fragmented context",
      },
    },
    right: {
      who: "Sentra",
      body: [
        "Sentra builds the graph at ingest. As each interaction lands, we resolve identities, extract entities, and write typed nodes and edges — once, ahead of time.",
        "By the time you (or any agent) ask a question, the structure already exists. Queries become reads, not reconstructions.",
      ],
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
      body: [
        "Connectors pull artifacts out of SaaS tools — the CRM record, the Jira ticket, the Confluence page. They give you the output of a decision, but never the decision itself.",
        "The meeting where the deal was renegotiated, the thread where engineering pushed back, the call where the customer escalated — all of it disappears the moment someone writes the ticket.",
      ],
      img: {
        src: "/generated/diff-row2-artifacts.png",
        alt: "Three overlapping document records — HubSpot, Google Doc, Linear — without surrounding rationale",
      },
    },
    right: {
      who: "Sentra",
      body: [
        "Sentra captures interactions as first-class evidence — meetings, Slack threads, emails, calls, agent traces — and links each one to the artifact it produced.",
        "The CRM entry doesn't just say what changed. It carries the conversation that caused the change. The why travels with the what.",
      ],
      img: {
        src: "/generated/diff-row2-interactions.png",
        alt: "Zoom, Slack, and Gmail evidence cards with cobalt edges converging into a single decision node",
      },
    },
  },
  {
    lab: "How people are matched",
    q: "Fragmented identity vs. resolved actor",
    left: {
      who: "Keyword search & LLMs",
      body: [
        'Most systems treat each tool independently. "Sarah Chen" in HubSpot, "S. Chen" in Gmail, and "@schen" in Slack read as three different people with three different histories.',
        "The model never realizes the same person is escalating in support, negotiating in the deal room, and going quiet in the channel — so it never connects the dots that matter.",
      ],
      img: {
        src: "/generated/diff-row3-identity-split.png",
        alt: "Three identity cards for the same person across Slack, Gmail, HubSpot — fragmented histories",
      },
    },
    right: {
      who: "Sentra",
      body: [
        "Sentra runs continuous, confidence-scored identity resolution across every surface — names, emails, handles, phone numbers, internal IDs — and merges them into one canonical actor.",
        "When the deal lead pings support, their sales context comes with them. One person, one history, one thread of accountability across the whole company.",
      ],
      img: {
        src: "/generated/diff-row3-identity-resolved.png",
        alt: "Four surface markers converging via cobalt edges into one resolved canonical identity",
      },
    },
  },
  {
    lab: "How time is handled",
    q: "Snapshot vs. bi-temporal",
    left: {
      who: "Vector stores & RAG",
      body: [
        "A vector database is a haystack of embeddings. Old facts sit next to new ones with no concept of when each was true.",
        "Last quarter's renewal date, a reversed product spec, a withdrawn commitment — all retrievable, all equally weighted, all able to confidently restate yesterday's reality as today's truth.",
      ],
      img: {
        src: "/generated/diff-row1-fragments.png",
        alt: "A flat haystack of undifferentiated vector points with no temporal axis",
      },
    },
    right: {
      who: "Sentra",
      body: [
        "Every fact in Sentra carries two timestamps: when it became true, and when it stopped being true. Old facts are invalidated, not deleted.",
        "The graph can reason about what was true on a given date, why it changed, and which decision overrode it. Provenance and time are first-class, not metadata.",
      ],
      img: {
        src: "/generated/diff-row1-graph.png",
        alt: "Layered timeline with valid and stop-valid bands per fact, anchored to evidence nodes",
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
        {side.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
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
