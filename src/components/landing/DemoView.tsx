import { DarkBackdrop } from "./DarkBackdrop";
import { DemoForm } from "./DemoForm";

export function DemoView() {
  return (
    <section className="demo" data-screen-label="Demo" data-nav-theme="dark">
      <DarkBackdrop variant="final" />

      <div className="demo-inner">
        <div className="demo-grid">
          <div className="demo-left">
            <span className="demo-label">Demo · BK-2026-05-001</span>
            <h1 className="demo-h">
              <span className="demo-h-strong">Zero setup.</span>{" "}
              <span className="demo-h-strong">Real engineers.</span>
              <span className="demo-h-mute">Ready to deploy.</span>
            </h1>
            <p className="demo-sub">
              Connect with our team. We&rsquo;ll walk you through how Sentra
              captures the interactions your stack throws away — and what it
              would take to deploy in your environment.
            </p>

            <figure className="demo-quote">
              <blockquote>
                Of all the AI tools I&rsquo;ve tried, Sentra is the one
                that&rsquo;s actually useful. I make a million promises across
                Zoom, Slack, and email — faster than I can write them down — and
                Sentra is the only tool that actually catches them.
              </blockquote>
              <figcaption>
                <span className="demo-quote-attr">Paul Rothemund</span>
                <span className="demo-quote-role">
                  VP of Research · Biostate.ai
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
