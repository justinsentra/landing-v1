export const TAGLINE = "Infrastructure for Organizational Memory";
export const FOOTER_BLURB =
  "Infrastructure for organizational memory. Filed in the moment it happens.";
export const DEMO_HREF = "/demo";
export const DEMO_LABEL = "Book a demo";

export type FooterItem = { label: string; href: string };
export type FooterColumn = { heading: string; items: readonly FooterItem[] };

export const FOOTER_LINKS: readonly FooterColumn[] = [
  {
    heading: "Legal",
    items: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
  {
    heading: "Compliance",
    items: [{ label: "How We Handle Data", href: "/data-privacy" }],
  },
  {
    heading: "Company",
    items: [
      { label: "Research", href: "/research" },
      { label: "Manifesto", href: "/manifesto" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Preferences",
    items: [
      { label: "Cookie Settings", href: "#" },
      { label: "Do Not Sell or Share My Personal Information", href: "#" },
    ],
  },
] as const;

export const FOOTER_SUBPROCESSORS =
  "Subprocessors include Amazon Web Services, GitHub, Slack, Google Cloud Platform, OpenAI, and Anthropic.";

export const FOOTER_COPYRIGHT = "© 2026 Dynamis Labs Inc. All rights reserved.";
