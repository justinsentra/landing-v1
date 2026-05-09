import type { Metadata } from "next";
import Nav from "@/components/landing/Nav";
import { ManifestoView } from "@/components/landing/ManifestoView";
import FinalCTA from "@/components/landing/FinalCTA";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ canonical: "/manifesto" });

export default function ManifestoPage() {
  return (
    <>
      <Nav />
      <ManifestoView />
      <FinalCTA />
    </>
  );
}
