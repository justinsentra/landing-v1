import { DemoForm } from "./DemoForm";

export function DemoView() {
  return (
    <section
      className="section section--first"
      id="demo"
      data-screen-label="Demo"
      data-nav-theme="light"
    >
      <div className="container">
        <div className="demo-grid">
          <div className="demo-left">
            <h1 className="sec-h">Talk to our Sales team</h1>
            <p className="sec-sub">
              Connect with our Sales team to explore how we can support your use
              case.
            </p>

            <figure className="demo-quote">
              <blockquote>
                Of all the AI tools I&rsquo;ve tried, Sentra is the one that is
                actually useful. I make a million promises across Zoom, Slack,
                and email — faster than I can write them down — and Sentra is
                the only tool that catches them.
              </blockquote>
              <figcaption>
                <span className="demo-quote-attr">Paul Rothemund</span>
                <span className="demo-quote-role">
                  VP of Research, Biostate.ai
                </span>
              </figcaption>
            </figure>
          </div>

          <div className="demo-right">
            <DemoForm />
          </div>
        </div>
      </div>
    </section>
  );
}
