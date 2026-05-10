import type { Metadata } from "next";
import LandingShell from "@/components/landing/LandingShell";
import { BlogView } from "@/components/landing/BlogView";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ canonical: "/blog" });

export default function BlogPage() {
  return (
    <LandingShell>
      <BlogView />
    </LandingShell>
  );
}
