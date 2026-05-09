import { DarkBackdrop } from "./DarkBackdrop";
import { SiteFooter } from "./SiteFooter";

export function PageFooter() {
  return (
    <section className="final pf" data-nav-theme="dark" aria-label="Footer">
      <DarkBackdrop variant="final" />
      <div className="final-inner pf-inner">
        <div className="final-foot">
          <SiteFooter />
        </div>
      </div>
    </section>
  );
}
