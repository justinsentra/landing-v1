import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import ChiefOfStaff from "@/components/landing/ChiefOfStaff";
import Different from "@/components/landing/Different";
import Agents from "@/components/landing/Agents";
import Pipeline from "@/components/landing/Pipeline";
import Apps from "@/components/landing/Apps";
import Functions from "@/components/landing/Functions";
import Security from "@/components/landing/Security";
import FinalCTA from "@/components/landing/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <ChiefOfStaff />
      <Pipeline />
      <Different />
      <Agents />
      <Apps />
      <Functions />
      <Security />
      <FinalCTA />
    </>
  );
}
