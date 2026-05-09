import Image from "next/image";

type Side = { who: string; body: string; img: { src: string; alt: string } };
type Row = { lab: string; q: string; left: Side; right: Side };

const rows: Row[] = [
  {
    lab: "Where structure is built",
    q: "Query time vs. write time",
    left: {
      who: "Context graphs",
      body: "A context graph is supposed to map relationships between people, decisions, and documents — but most do the work at query time. Every time you ask a question, the system has to crawl Slack, then email, then meetings, then docs, then guess how the pieces relate. The structure is rediscovered on every request, with stale results, missed connections, and slow latency.",
      img: {
        src: "/generated/diff-row1-fragments.png",
        alt: "Disconnected app icons floating across a dotted background, suggesting fragmented context",
      },
    },
    right: {
      who: "Sentra",
      body: "Sentra builds the graph at ingest. As each interaction lands, we resolve identities, extract entities, link evidence, and write typed nodes and edges into a bi-temporal graph — once, ahead of time. By the time anyone (or any agent) asks a question, the structure already exists. Queries become reads, not reconstructions.",
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
      body: "Connectors are pipelines that pull artifacts out of SaaS tools — the CRM record, the Jira ticket, the Confluence page. They give you the output of decisions, but never the decisions themselves. The meeting where the deal was renegotiated, the thread where engineering pushed back, the call where the customer escalated — all of that disappears the moment someone writes the ticket.",
      img: {
        src: "/generated/diff-row2-artifacts.png",
        alt: "Three overlapping document records — HubSpot, Google Doc, Linear — without surrounding rationale",
      },
    },
    right: {
      who: "Sentra",
      body: "Sentra captures interactions as first-class evidence — meetings, Slack threads, emails, calls, agent traces — and links them to the artifacts they produced. The CRM entry doesn't just say what changed; it carries the conversation that caused the change, the people who shaped it, and the rationale behind it. The why travels with the what.",
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
      body: 'Most systems treat each tool independently. "Sarah Chen" in HubSpot, "S. Chen" in Gmail, and "@schen" in Slack read as three different people with three histories. The model never realizes the same person is escalating in support, negotiating in the deal room, and quiet-quitting in the channel — so it never connects the dots that matter.',
      img: {
        src: "/generated/diff-row3-identity-split.png",
        alt: "Three identity cards for the same person across Slack, Gmail, HubSpot — fragmented histories",
      },
    },
    right: {
      who: "Sentra",
      body: "Sentra runs continuous, confidence-scored identity resolution across every surface — names, emails, handles, phone numbers, internal IDs — and merges them into a single canonical actor with one timeline. When the deal lead pings support, the sales context comes with them. One person, one history, one thread of accountability across the whole company.",
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
      body: "A vector database is a haystack of embeddings. Old facts sit next to new ones with no concept of when they were true. A renewal date from last quarter, a product spec that was reversed, a customer commitment that was withdrawn — all retrievable, all equally weighted, all able to mislead the model into confidently restating yesterday's reality as today's truth.",
      img: {
        src: "/generated/diff-row4-snapshot.png",
        alt: "A flat haystack of undifferentiated vector points with no temporal axis",
      },
    },
    right: {
      who: "Sentra",
      body: "Every fact in the Sentra graph carries two timestamps: when it became true and when it stopped being true. Old facts are invalidated, not deleted — every claim has a lifespan and a source. The model can reason about what was true on a given date, why it changed, and which decision overrode it. Provenance and time are first-class, not metadata.",
      img: {
        src: "/generated/diff-row4-bitemporal.png",
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
