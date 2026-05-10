import type { Metadata } from "next";
import LandingShell from "@/components/landing/LandingShell";
import Hero from "@/components/landing/Hero";
import ChiefOfStaff from "@/components/landing/ChiefOfStaff";
import Different from "@/components/landing/Different";
import Agents from "@/components/landing/Agents";
import Pipeline from "@/components/landing/Pipeline";
import Apps from "@/components/landing/Apps";
import Functions from "@/components/landing/Functions";
import Security from "@/components/landing/Security";
import FinalCTA from "@/components/landing/FinalCTA";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ canonical: "/" });

export default function HomePage() {
  return (
    <LandingShell hideFinalCTA>
      <Hero />
      <ChiefOfStaff />
      <Pipeline />
      <Different />
      <Agents />
      <Apps />
      <Functions />
      <Security />
      <FinalCTA />
    </LandingShell>
  );
}
