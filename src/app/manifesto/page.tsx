import type { Metadata } from "next";
import LandingShell from "@/components/landing/LandingShell";
import { ManifestoView } from "@/components/landing/ManifestoView";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ canonical: "/manifesto" });

export default function ManifestoPage() {
  return (
    <LandingShell>
      <ManifestoView />
    </LandingShell>
  );
}
