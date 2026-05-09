"use client";

import { useState } from "react";

type Category = "Brain" | "Memory" | "Industry" | "Vision";

type Post = {
  title: string;
  date: string;
  category: Category;
  excerpt: string;
  href: string;
};

const allPosts: Post[] = [
  {
    title: "Company Brain: Why Most Companies Have Data But No Memory",
    date: "Apr 2026",
    category: "Brain",
    excerpt:
      "Why organizations have data but lose institutional context — and what a real company brain would replace.",
    href: "https://nanothoughts.substack.com/p/company-brain-why-most-companies",
  },
  {
    title: "Company Brain, Part 2: Factual Memory",
    date: "Apr 2026",
    category: "Brain",
    excerpt:
      "The foundational layer. Without factual memory, a company cannot know what it knows.",
    href: "https://nanothoughts.substack.com/p/company-brain-part-2-factual-memory",
  },
  {
    title: "Company Brain, Part 3: Interaction Memory",
    date: "May 2026",
    category: "Brain",
    excerpt:
      "Meetings, threads, and emails as first-class evidence — the rationale layer beneath every decision.",
    href: "https://nanothoughts.substack.com/p/company-brain-part-3-interaction",
  },
  {
    title: "Company Brain, Part 4: Action Memory",
    date: "Apr 2026",
    category: "Brain",
    excerpt:
      "Operational continuity and an agentic surface for execution, layered on factual and interaction memory.",
    href: "https://nanothoughts.substack.com/p/company-brain-part-4-action-memory",
  },
  {
    title: "Memory Is State, Not a Service",
    date: "Mar 2026",
    category: "Memory",
    excerpt:
      "Memory belongs in the substrate of an organization — shared state, not a bolt-on service for individual tools.",
    href: "https://nanothoughts.substack.com/p/memory-is-state-not-a-service",
  },
  {
    title: "Why AI Needs to Forget",
    date: "Jan 2026",
    category: "Memory",
    excerpt:
      "Forgetting is geometric inevitability. The architectures that work with it outperform those that try to defeat it.",
    href: "https://nanothoughts.substack.com/p/why-ai-needs-to-forget",
  },
  {
    title:
      "Enterprise General Intelligence: The Emergent Mind of Organizations",
    date: "Feb 2026",
    category: "Vision",
    excerpt:
      "When commodity models meet structured organizational memory, the boundary between tools and intelligence shifts.",
    href: "https://nanothoughts.substack.com/p/enterprise-general-intelligence-the",
  },
  {
    title: "Who Signs? The Anthropic Paradox and the $40 Trillion Choice",
    date: "Apr 2026",
    category: "Industry",
    excerpt:
      "On accountability, alignment, and the structural choice every enterprise will eventually have to sign.",
    href: "https://nanothoughts.substack.com/p/who-signs-the-anthropic-paradox-and",
  },
];

const filters = ["All", "Brain", "Memory", "Industry", "Vision"] as const;
type FilterKey = (typeof filters)[number];

const AUTHOR = "Ashwin Gopinath";

export function BlogView() {
  const [filter, setFilter] = useState<FilterKey>("All");
  const visible = allPosts.filter(
    (p) => filter === "All" || p.category === filter,
  );

  return (
    <section
      className="section section--first"
      id="blog"
      data-screen-label="Blog"
      data-nav-theme="light"
    >
      <div className="container">
        <span className="rh-eyebrow">Blog</span>
        <h1 className="rh-display">News and updates from Sentra.</h1>

        <div className="bp-filters" role="tablist" aria-label="Filter posts">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              className={`bp-chip${filter === f ? " is-on" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="bp-grid bleed-top bleed-bottom">
          {visible.map((p) => (
            <a
              className="bp-card"
              href={p.href}
              key={p.title}
              target="_blank"
              rel="noreferrer"
            >
              <header className="bp-card-head">
                <span className="bp-card-author">{AUTHOR}</span>
                <span className="bp-card-meta">
                  {p.date} <span aria-hidden="true">/</span>{" "}
                  <span className="bp-card-cat">{p.category}</span>
                </span>
              </header>
              <div className="bp-card-body">
                <h2 className="bp-card-title">{p.title}</h2>
                <p className="bp-card-excerpt">{p.excerpt}</p>
              </div>
            </a>
          ))}
          {visible.length === 0 && (
            <p className="bp-empty">No posts in this category yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}
