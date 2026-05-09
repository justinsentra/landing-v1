import type { Metadata } from "next";
import Nav from "@/components/landing/Nav";
import { DemoView } from "@/components/landing/DemoView";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ canonical: "/demo" });

export default function DemoPage() {
  return (
    <>
      <Nav />
      <DemoView />
    </>
  );
}
