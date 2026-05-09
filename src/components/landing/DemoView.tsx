import { DarkBackdrop } from "./DarkBackdrop";
import { DemoForm } from "./DemoForm";

export function DemoView() {
  return (
    <section className="demo" data-screen-label="Demo" data-nav-theme="dark">
      <DarkBackdrop variant="final" />

      <div className="demo-inner">
        <div className="demo-grid">
          <div className="demo-left">
            <h1 className="demo-h">Talk to our sales team.</h1>
            <p className="demo-sub">
              Connect with our sales team to explore how we can support your use
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
