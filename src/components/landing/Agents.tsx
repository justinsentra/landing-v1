import {
  ChatGPTMark,
  ClaudeMark,
  CursorMark,
  LangGraphMark,
} from "./brand-icons";
import { DarkBackdrop } from "./DarkBackdrop";

const partners = [
  { name: "Claude", Icon: ClaudeMark },
  { name: "Cursor", Icon: CursorMark },
  { name: "ChatGPT", Icon: ChatGPTMark },
  { name: "LangGraph", Icon: LangGraphMark },
];

export default function Agents() {
  return (
    <section
      className="agents"
      id="agents"
      data-screen-label="03 Agents"
      data-nav-theme="dark"
    >
      <div className="agents-bg" aria-hidden="true">
        <DarkBackdrop variant="agents" />
      </div>

      <div className="agents-divider bottom" aria-hidden="true" />

      <div className="container">
        <div className="agents-grid">
          <div>
            <h2>Your agents deserve the same memory.</h2>
            <p>
              The Sentra context graph is exposed as a REST API and MCP server —
              so your agents read from the same memory as your team.
            </p>
            <div className="runs-on">
              <span className="lab2">Works with</span>
              <div className="runs-list">
                {partners.map(({ name, Icon }) => (
                  <span key={name}>
                    <Icon className="brand-mark" />
                    {name}
                  </span>
                ))}
              </div>
              <button type="button" className="btn btn-solid runs-cta">
                All integrations →
              </button>
            </div>
          </div>

          <div className="code-window" aria-hidden="true">
            <div className="code-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="file">~/agent/recall.py</span>
              <span>python</span>
            </div>
            <pre className="code">
              <span className="tk-kw">from</span> sentra{" "}
              <span className="tk-kw">import</span>{" "}
              <span className="tk-cls">Brain</span>
              {"\n\n"}
              brain = <span className="tk-cls">Brain</span>
              (api_key=SENTRA_API_KEY){"\n\n"}
              answer = brain.<span className="tk-fn">recall</span>({"\n"}
              {"    "}
              <span className="tk-str">
                &quot;Why did we postpone the Acme renewal call?&quot;
              </span>
              ,{"\n"}
              {"    "}cite=<span className="tk-bool">True</span>,{"\n"}){"\n\n"}
              <span className="tk-com">
                # → grounded answer with provenance
              </span>
              {"\n"}
              <span className="tk-fn">print</span>(answer.text){"\n"}
              <span className="tk-com">
                # &quot;Because the deal desk flagged a 20% exception...&quot;
              </span>
              {"\n\n"}
              <span className="tk-fn">print</span>(answer.citations){"\n"}
              <span className="tk-com">
                # [Meeting(2026-04-12), SlackThread(...), Decision(...)]
              </span>
            </pre>
            <div className="code-foot">
              <span>POST /v1/recall</span>
              <span>
                <span className="ok">200 · 184ms · 6 citations</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
