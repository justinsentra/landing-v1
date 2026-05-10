import type { Metadata } from "next";
import LandingShell from "@/components/landing/LandingShell";
import { IntegrationsView } from "@/components/landing/IntegrationsView";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({
  canonical: "/integrations",
});

export default function IntegrationsPage() {
  return (
    <LandingShell>
      <IntegrationsView />
    </LandingShell>
  );
}
