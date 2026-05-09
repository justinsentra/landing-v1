import {
  FOOTER_COPYRIGHT,
  FOOTER_LINKS,
  FOOTER_SUBPROCESSORS,
} from "@/data/site";

export function SiteFooter() {
  return (
    <>
      <div className="foot-grid">
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
      <p className="foot-subprocessors">{FOOTER_SUBPROCESSORS}</p>
      <div className="foot-bot">
        <span>{FOOTER_COPYRIGHT}</span>
      </div>
    </>
  );
}
