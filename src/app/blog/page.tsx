import type { Metadata } from "next";
import Nav from "@/components/landing/Nav";
import { BlogView } from "@/components/landing/BlogView";
import FinalCTA from "@/components/landing/FinalCTA";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ canonical: "/blog" });

export default function BlogPage() {
  return (
    <>
      <Nav />
      <BlogView />
      <FinalCTA />
    </>
  );
}
