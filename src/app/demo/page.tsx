import type { Metadata } from "next";
import LandingShell from "@/components/landing/LandingShell";
import { DemoView } from "@/components/landing/DemoView";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ canonical: "/demo" });

export default function DemoPage() {
  return (
    <LandingShell>
      <DemoView />
    </LandingShell>
  );
}
