import { brandPaths } from "@/data/brand-paths";

/**
 * Serves a single brand glyph as a cacheable SVG file. Used by BrandIcon
 * (logo / mono variants) instead of inlining the SVG bodies into HTML so
 * the /integrations page (~200 cards) ships compact markup and the
 * browser dedupes/caches each glyph once across the session.
 *
 * Usage: <img src={`/brand-svg?k=${encodeURIComponent(brandKey)}`} />
 */
export function GET(req: Request) {
  const url = new URL(req.url);
  const key = url.searchParams.get("k");
  if (!key) return new Response(null, { status: 400 });

  const brand = brandPaths[key];
  if (!brand || brand.kind === "tile") {
    return new Response(null, { status: 404 });
  }

  // Mono glyphs paint in the document's currentColor. When loaded via <img>
  // there's no inheriting color, so we bake a neutral ink directly into the
  // SVG. Logo glyphs are full-colour and untouched.
  const fill = brand.kind === "mono" ? ' fill="#0e0e12"' : "";
  const body =
    brand.kind === "mono"
      ? brand.body.replace(/currentColor/g, "#0e0e12")
      : brand.body;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${brand.viewBox}"${fill}>${body}</svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
