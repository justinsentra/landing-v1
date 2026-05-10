"use client";

import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";

const INITIAL = 36;
const STEP = 36;

type Meta = {
  name: string;
  category: string;
  hint: string;
};

type Props = {
  heading: string;
  sub: string;
  categories: string[];
  totalCount: number;
  meta: Meta[];
  children: React.ReactNode;
};

/**
 * Thin client shell. The card grid is server-rendered once and passed in
 * as `children` (a single static subtree). The client never re-reconciles
 * the cards — it just toggles `hidden` on each cell via a ref + a small
 * `meta` array of {name, category, hint}. This keeps hydration cheap on a
 * page with ~210 cards of inline brand SVG.
 */
export function IntegrationsFilter({
  heading,
  sub,
  categories,
  totalCount,
  meta,
  children,
}: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [shown, setShown] = useState(INITIAL);
  const deferredQuery = useDeferredValue(query);
  const gridWrapRef = useRef<HTMLDivElement>(null);

  const matchedIndices = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    const out: number[] = [];
    for (let i = 0; i < meta.length; i++) {
      const m = meta[i];
      if (category !== "All" && m.category !== category) continue;
      if (q) {
        const hit =
          m.name.includes(q) ||
          m.category.toLowerCase().includes(q) ||
          m.hint.includes(q);
        if (!hit) continue;
      }
      out.push(i);
    }
    return out;
  }, [meta, deferredQuery, category]);

  const matchedCount = matchedIndices.length;
  const visibleCount = Math.min(matchedCount, shown);
  const hasMore = shown < matchedCount;
  // Marketing-true denominator. The catalog ships ~176 cards but we publish
  // a rounded "X of 224" total because the connector roadmap is wider than
  // the cards on this page.
  const cap = totalCount;

  // Toggle DOM visibility instead of re-rendering React children.
  useEffect(() => {
    const wrap = gridWrapRef.current;
    if (!wrap) return;
    const cells = wrap.querySelectorAll<HTMLElement>("[data-int-cell]");
    if (cells.length === 0) return;

    const visible = new Set<number>();
    for (let i = 0; i < visibleCount; i++) visible.add(matchedIndices[i]);

    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      const shouldShow = visible.has(i);
      if (cell.hidden !== !shouldShow) cell.hidden = !shouldShow;
    }
  }, [matchedIndices, visibleCount]);

  return (
    <>
      <div className="int-head">
        <div className="int-head-title">
          <h1 className="sec-h">{heading}</h1>
          <p className="sec-sub">{sub}</p>
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
              placeholder="Search integrations"
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

      <div ref={gridWrapRef} hidden={matchedCount === 0}>
        {children}
      </div>

      {matchedCount === 0 && (
        <div className="int-empty">
          No integrations match &ldquo;{query}&rdquo;.
        </div>
      )}

      {matchedCount > 0 && (
        <div className="int-foot">
          <p className="int-count">
            Showing {visibleCount} of {cap}
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
    </>
  );
}
