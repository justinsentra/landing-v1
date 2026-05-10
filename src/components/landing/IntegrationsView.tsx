import { integrations } from "@/data/integrations";
import { BrandIcon } from "./BrandIcon";
import { IntegrationsFilter } from "./IntegrationsFilter";

const CATEGORIES = [
  "All",
  ...Array.from(new Set(integrations.map((i) => i.category))).sort(),
];

/**
 * Server component. Pre-renders all ~210 integration cards as static HTML
 * with brand SVGs inlined once. The full grid is handed to the client filter
 * as `children` (a single static <div>) — NOT as 210 individual ReactElements
 * — so the RSC payload stays compact and the client never reconciles cards
 * after hydration. Filtering is DOM-driven (visibility toggles) and operates
 * on the small `meta` array, which is the only thing the client component
 * needs to know about each card.
 */
export function IntegrationsView() {
  const meta = integrations.map((i) => ({
    name: i.name.toLowerCase(),
    category: i.category,
    hint: i.hint.toLowerCase(),
  }));

  return (
    <section
      className="section section--first"
      id="integrations"
      data-screen-label="Integrations"
      data-nav-theme="light"
    >
      <div className="container">
        <IntegrationsFilter
          heading="Browse the apps Sentra connects to."
          sub="200+ integrations and counting. Pull context from all your tools."
          categories={CATEGORIES}
          totalCount={224}
          meta={meta}
        >
          <div className="int-grid bleed-top bleed-bottom" data-int-grid>
            {integrations.map((i, idx) => (
              <article
                className="int-cell"
                data-int-cell
                key={i.name}
                /* SSR: pre-hide cells beyond the initial page so the first
                   paint matches the client's default filter state (All,
                   no query, 36 shown). The client effect takes over once
                   filters change. */
                hidden={idx >= 36}
              >
                <span className="int-ic" aria-hidden="true">
                  <BrandIcon brandKey={i.key} name={i.name} size={28} />
                </span>
                <div className="int-cell-row">
                  <span className="int-name">{i.name}</span>
                  <span className="int-cat">{i.category}</span>
                </div>
                <p className="int-hint">{i.hint}</p>
              </article>
            ))}
          </div>
        </IntegrationsFilter>
      </div>
    </section>
  );
}
