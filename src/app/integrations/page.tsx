import type { Metadata } from "next";
import Nav from "@/components/landing/Nav";
import { IntegrationsView } from "@/components/landing/IntegrationsView";
import FinalCTA from "@/components/landing/FinalCTA";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({
  canonical: "/integrations",
});

export default function IntegrationsPage() {
  return (
    <>
      <Nav />
      <IntegrationsView />
      <FinalCTA />
    </>
  );
}
