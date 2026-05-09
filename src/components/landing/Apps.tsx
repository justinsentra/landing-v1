import { appsGrid, tools, toolStyle } from "@/data/tools";

export default function Apps() {
  return (
    <section
      className="section"
      id="apps"
      data-screen-label="05 Apps"
      data-nav-theme="light"
    >
      <div className="container">
        <h2 className="sec-h">Connects to the apps you already use</h2>
        <p className="sec-sub">
          Sentra pulls context from everywhere: meetings, messages, docs, code,
          CRM, tickets, calendars, video, and the long tail of tools teams adopt
          next.
        </p>
      </div>

      <div className="container">
        <div className="apps-grid bleed-top bleed-bottom">
          {appsGrid.map((key) => {
            const tool = tools[key];
            return (
              <div className="row" key={key} style={toolStyle(tool)}>
                <span className="ic" aria-hidden="true" />
                <span className="nm">{tool.name}</span>
                <span className="cat">{tool.category}</span>
              </div>
            );
          })}
        </div>

        <div className="apps-foot">
          <p className="apps-foot-note">200+ tools and counting.</p>
          <a className="apps-foot-link" href="#integrations">
            View all integrations
            <span className="apps-foot-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
