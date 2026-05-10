import Image from "next/image";
import Link from "next/link";
import { TAGLINE, DEMO_HREF, DEMO_LABEL } from "@/data/site";
import { DarkBackdrop } from "./DarkBackdrop";

const investors = [
  {
    src: "/investors/a16z-speedrun.svg",
    alt: "a16z Speedrun",
    width: 260,
    height: 36,
  },
  {
    src: "/investors/together-fund.svg",
    alt: "Together Fund",
    width: 220,
    height: 32,
  },
];

export default function Hero() {
  return (
    <section className="hero" data-screen-label="Hero" data-nav-theme="dark">
      <DarkBackdrop variant="hero" />

      <div className="hero-inner">
        <div className="hero-frame">
          <h1 className="headline">{TAGLINE}</h1>
          <p className="lede">
            The substrate beneath your stack. Sentra captures what teams know
            and structures it into a single queryable graph.
          </p>
          <div className="ctas">
            <Link className="btn btn-solid" href={DEMO_HREF}>
              {DEMO_LABEL}
            </Link>
          </div>
        </div>

        <div className="hero-backed">
          <span className="hero-backed-label">Backed by</span>
          <div className="hero-backed-logos">
            {investors.map((i) => (
              <Image
                key={i.src}
                src={i.src}
                alt={i.alt}
                width={i.width}
                height={i.height}
                className="hero-backed-logo"
                loading="lazy"
                fetchPriority="low"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
