import { FOOTER_BLURB, FOOTER_LINKS, FOOTER_META } from "@/data/site";

export function SiteFooter() {
  return (
    <>
      <div className="foot-grid">
        <div className="foot-brand">
          <a href="#" className="lockup" aria-label="Sentra">
            <span className="mark">
              <span />
              <span />
              <span />
            </span>
            <span className="wm">Sentra</span>
          </a>
          <p>{FOOTER_BLURB}</p>
        </div>
        {FOOTER_LINKS.map((col) => (
          <div key={col.heading}>
            <h5>{col.heading}</h5>
            {col.items.map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="foot-bot">
        {FOOTER_META.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
    </>
  );
}
