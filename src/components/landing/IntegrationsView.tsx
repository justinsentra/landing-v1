"use client";

import { useMemo, useState } from "react";
import { integrations } from "@/data/integrations";

const INITIAL = 36;
const STEP = 36;

export function IntegrationsView() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [shown, setShown] = useState(INITIAL);

  const categories = useMemo(() => {
    const set = new Set<string>();
    integrations.forEach((i) => set.add(i.category));
    return ["All", ...Array.from(set).sort()];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return integrations.filter((i) => {
      if (category !== "All" && i.category !== category) return false;
      if (!q) return true;
      return (
        i.name.toLowerCase().includes(q) ||
        i.category.toLowerCase().includes(q) ||
        i.hint.toLowerCase().includes(q)
      );
    });
  }, [query, category]);

  const visible = filtered.slice(0, shown);
  const hasMore = shown < filtered.length;

  return (
    <section
      className="section section--first"
      id="integrations"
      data-screen-label="Integrations"
      data-nav-theme="light"
    >
      <div className="container">
        <div className="int-head">
          <div className="int-head-title">
            <h1 className="sec-h">Browse the apps Sentra connects to.</h1>
            <p className="sec-sub">
              {integrations.length}+ integrations and counting. Pull context
              from every tool your team already uses.
            </p>
          </div>
          <div className="int-head-controls">
            <label className="int-search">
              <span className="int-search-ic" aria-hidden="true">
                <svg viewBox="0 0 16 16" fill="none">
                  <circle
                    cx="7"
                    cy="7"
                    r="4.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path
                    d="m13.5 13.5-3-3"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <input
                type="search"
                placeholder={`Search ${integrations.length}+ connected apps`}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShown(INITIAL);
                }}
              />
            </label>
            <select
              className="int-category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setShown(INITIAL);
              }}
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c === "All" ? "All categories" : c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="int-empty">
            No integrations match &ldquo;{query}&rdquo;.
          </div>
        ) : (
          <div className="int-grid bleed-top bleed-bottom">
            {visible.map((i) => (
              <article className="int-cell" key={i.name}>
                <div className="int-cell-head">
                  <span className="int-ic" aria-hidden="true" />
                  <span className="int-name">{i.name}</span>
                  <span className="int-cat">{i.category}</span>
                </div>
                <p className="int-hint">{i.hint}</p>
              </article>
            ))}
          </div>
        )}

        {filtered.length > 0 && (
          <div className="int-foot">
            <p className="int-count">
              Showing {visible.length} of {filtered.length}
            </p>
            {hasMore ? (
              <button
                type="button"
                className="int-more"
                onClick={() => setShown((n) => n + STEP)}
              >
                View more
                <span aria-hidden="true">↓</span>
              </button>
            ) : shown > INITIAL ? (
              <button
                type="button"
                className="int-more"
                onClick={() => setShown(INITIAL)}
              >
                Collapse
                <span aria-hidden="true">↑</span>
              </button>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
