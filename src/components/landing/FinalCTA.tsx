import { DEMO_HREF, DEMO_LABEL } from "@/data/site";
import { DarkBackdrop } from "./DarkBackdrop";
import { SiteFooter } from "./SiteFooter";

export default function FinalCTA() {
  return (
    <section
      className="final"
      id="start"
      data-screen-label="Final CTA"
      data-nav-theme="dark"
    >
      <DarkBackdrop variant="final" />

      <div className="final-inner">
        <div className="final-hero">
          <h2>Sentralize your company.</h2>
          <p>
            Discover what it&rsquo;s like to have a company brain through a live
            product demo.
          </p>
          <div className="ctas">
            <a className="btn btn-solid" href={DEMO_HREF}>
              {DEMO_LABEL}
            </a>
          </div>
        </div>

        <div className="final-foot">
          <SiteFooter />
        </div>
      </div>
    </section>
  );
}
