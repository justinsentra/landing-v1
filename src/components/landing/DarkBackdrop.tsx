type Variant = "hero" | "agents" | "final";

const layers: Record<Variant, string[]> = {
  hero: [
    "hero-base",
    "hero-curtain",
    "hero-curtain b",
    "hero-shimmer",
    "hero-dots",
    "hero-vignette",
    "hero-grain",
  ],
  agents: [
    "hero-base",
    "hero-curtain",
    "hero-curtain b",
    "hero-shimmer",
    "hero-dots",
    "hero-vignette",
    "hero-grain",
  ],
  final: [
    "final-base",
    "final-curtain",
    "final-curtain b",
    "final-shimmer",
    "final-dots",
    "final-grain",
  ],
};

export function DarkBackdrop({ variant }: { variant: Variant }) {
  return (
    <>
      {layers[variant].map((cls) => (
        <div key={cls} className={cls} aria-hidden="true" />
      ))}
    </>
  );
}
