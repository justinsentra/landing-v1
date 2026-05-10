import { brandPaths } from "@/data/brand-paths";

type Props = {
  brandKey: string | null;
  name: string;
  className?: string;
  size?: number;
};

/**
 * Renders a brand glyph next to an integration name.
 *
 * Logo + mono variants are served from /brand-svg (route handler) so the
 * page doesn't ship hundreds of inline SVG bodies in HTML. Tile + monogram
 * fallbacks remain inline because they're trivially small (one rect + a
 * letter) and depend on per-name data.
 */
export function BrandIcon({ brandKey, name, className, size = 24 }: Props) {
  const brand = brandKey ? brandPaths[brandKey] : null;

  if (brand?.kind === "logo" || brand?.kind === "mono") {
    return (
      <img
        className={`brand-img${brand.kind === "mono" ? " brand-mono" : ""}${
          className ? ` ${className}` : ""
        }`}
        src={`/brand-svg?k=${encodeURIComponent(brandKey as string)}`}
        alt={name}
        width={size}
        height={size}
        loading="lazy"
        decoding="async"
      />
    );
  }

  // Branded letter-tile: brand-correct colour, white initial.
  if (brand?.kind === "tile") {
    const initial = name
      .replace(/[^A-Za-z0-9]/, "")
      .charAt(0)
      .toUpperCase();
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        role="img"
        aria-label={name}
      >
        <rect x="0" y="0" width="24" height="24" rx="5" fill={brand.color} />
        <text
          x="12"
          y="16.5"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="13"
          fontWeight="700"
          fill="#ffffff"
        >
          {initial}
        </text>
      </svg>
    );
  }

  // Last-resort neutral monogram (should not be hit with current data).
  const initial = name
    .replace(/[^A-Za-z0-9]/, "")
    .charAt(0)
    .toUpperCase();
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={name}
    >
      <rect x="0" y="0" width="24" height="24" rx="5" fill="#e4e6ea" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="13"
        fontWeight="700"
        fill="#525252"
      >
        {initial}
      </text>
    </svg>
  );
}
