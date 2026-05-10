import type { Metadata } from "next";
import Link from "next/link";
import LandingShell from "@/components/landing/LandingShell";

export const metadata: Metadata = {
  title: "404 · Page not found · Sentra",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <LandingShell>
      <section
        className="section section--first"
        data-screen-label="Not Found"
        data-nav-theme="light"
      >
        <div className="container">
          <p className="nf-eyebrow">404</p>
          <h1 className="sec-h">This page hasn&rsquo;t been filed.</h1>
          <p className="rh-lede">
            The URL you followed doesn&rsquo;t exist in this archive. Head back
            to the index, or jump straight to the demo if you came here looking
            for one.
          </p>
          <div className="nf-ctas">
            <Link className="btn btn-solid" href="/">
              Return home
            </Link>
            <Link className="btn btn-solid" href="/demo">
              Book a demo
            </Link>
          </div>
        </div>
      </section>
    </LandingShell>
  );
}
