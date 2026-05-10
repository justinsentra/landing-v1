import { Fragment, isValidElement } from "react";

export type LegalSection = {
  id: string;
  clause?: string;
  heading: string;
  body: React.ReactNode[];
};

type LegalViewProps = {
  screenLabel: string;
  title: string;
  lede: React.ReactNode;
  thesis?: React.ReactNode;
  lastUpdated: string;
  sections: LegalSection[];
};

export function LegalView({
  screenLabel,
  title,
  lede,
  thesis,
  lastUpdated,
  sections,
}: LegalViewProps) {
  return (
    <section
      className="section section--first"
      id={screenLabel.toLowerCase().replace(/\s+/g, "-")}
      data-screen-label={screenLabel}
      data-nav-theme="light"
    >
      <div className="container">
        <h1 className="sec-h">{title}</h1>

        <p className="rh-lede">{lede}</p>

        <p className="lg-updated">Last updated: {lastUpdated}</p>

        {thesis ? (
          <p className="mb-thesis bleed-top bleed-bottom">{thesis}</p>
        ) : null}

        <div className="mb-stack">
          {sections.map((s, idx) => {
            const isFirst = idx === 0;
            const isLast = idx === sections.length - 1;
            const cls = [
              "mb-cell",
              !thesis && isFirst ? "bleed-top" : "",
              isLast ? "bleed-bottom" : "",
            ]
              .filter(Boolean)
              .join(" ");
            return (
              <article className={cls} key={s.id} id={s.id}>
                {s.clause ? (
                  <span className="mb-clause">{s.clause}</span>
                ) : null}
                <h2 className="mb-h">{s.heading}</h2>
                {s.body.map((p, i) => {
                  if (isValidElement(p)) {
                    const t = (p as React.ReactElement).type;
                    if (t === "ul" || t === "blockquote" || t === "div") {
                      return <Fragment key={i}>{p}</Fragment>;
                    }
                  }
                  return (
                    <p className="mb-p" key={i}>
                      {p}
                    </p>
                  );
                })}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
