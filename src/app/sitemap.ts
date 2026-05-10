import type { MetadataRoute } from "next";
import { siteUrl } from "@/utils/site-url";

const ROUTES = [
  "",
  "/demo",
  "/research",
  "/manifesto",
  "/blog",
  "/integrations",
  "/terms",
  "/privacy",
  "/data-privacy",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : 0.7,
  }));
}
