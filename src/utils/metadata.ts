import type { Metadata } from "next";
import { siteUrl } from "./site-url";

const TITLE = "Sentra · Infrastructure for organizational memory";
const DESCRIPTION =
  "Sentra records what teams know — interactions, facts, actions — and structures that knowledge at write-time into a single queryable graph. The substrate beneath your stack.";

export const createMetadata = ({
  canonical = "/",
}: { canonical?: string } = {}): Metadata => ({
  metadataBase: new URL(siteUrl),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Sentra",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
});
