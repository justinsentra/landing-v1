import type { ReactNode } from "react";
import Nav from "@/components/landing/Nav";
import FinalCTA from "@/components/landing/FinalCTA";

type LandingShellProps = {
  children: ReactNode;
  /** Hide the trailing FinalCTA section (e.g. on the home page where
   *  it's already part of the page composition). */
  hideFinalCTA?: boolean;
};

/**
 * Wraps a page with this site's Nav (top) and FinalCTA (bottom).
 *
 * When migrating into the central landing repo, drop this wrapper
 * and let the central app's Layout provide chrome. Page bodies
 * remain reusable as-is.
 */
export default function LandingShell({
  children,
  hideFinalCTA = false,
}: LandingShellProps) {
  return (
    <>
      <Nav />
      {children}
      {!hideFinalCTA && <FinalCTA />}
    </>
  );
}
