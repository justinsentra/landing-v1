import type { Metadata } from "next";
import Nav from "@/components/landing/Nav";
import { ResearchView } from "@/components/landing/ResearchView";
import FinalCTA from "@/components/landing/FinalCTA";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ canonical: "/research" });

export default function ResearchPage() {
  return (
    <>
      <Nav />
      <ResearchView />
      <FinalCTA />
    </>
  );
}
