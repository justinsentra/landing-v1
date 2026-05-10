import type { Metadata } from "next";
import LandingShell from "@/components/landing/LandingShell";
import { ResearchView } from "@/components/landing/ResearchView";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ canonical: "/research" });

export default function ResearchPage() {
  return (
    <LandingShell>
      <ResearchView />
    </LandingShell>
  );
}
