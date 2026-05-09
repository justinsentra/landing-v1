import { brandPaths } from "@/data/brand-paths";

type Props = {
  brandKey: string | null;
  name: string;
  className?: string;
  size?: number;
};

// Stable colour from the integration name — used for the letter-monogram fallback
// so each brand has its own consistent tile colour without bundling extra logos.
function monogramHue(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return h % 360;
}

export function BrandIcon({ brandKey, name, className, size = 24 }: Props) {
  const brand = brandKey ? brandPaths[brandKey] : null;

  if (brand?.kind === "logo") {
    return (
      <svg
        className={className}
        viewBox={brand.viewBox}
        width={size}
        height={size}
        role="img"
        aria-label={name}
        // gilbarbara/logos bodies are pre-rendered SVG markup with their own
        // fills/gradients — inline as-is.
        dangerouslySetInnerHTML={{ __html: brand.body }}
      />
    );
  }

  if (brand?.kind === "si") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        role="img"
        aria-label={name}
      >
        <path d={brand.path} fill="currentColor" />
      </svg>
    );
  }

  // Fallback: letter monogram tile
  const hue = monogramHue(name);
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
      <rect
        x="1"
        y="1"
        width="22"
        height="22"
        rx="4"
        fill={`hsl(${hue} 45% 92%)`}
        stroke={`hsl(${hue} 35% 70%)`}
        strokeWidth="0.75"
      />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="12"
        fontWeight="600"
        fill={`hsl(${hue} 50% 28%)`}
      >
        {initial}
      </text>
    </svg>
  );
}
