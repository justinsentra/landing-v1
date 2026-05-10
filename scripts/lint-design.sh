#!/usr/bin/env bash
# Sentra design-system drift guard.
# Fails when raw px values are introduced outside the closed scales.
#
# Closed font-size scale (DESIGN.md §2):
#   11 · 12 · 14 · 16 · 18 · 24 · 32 · 40 · 56 · 80
#
# Closed spacing scale for gap & margin (DESIGN.md §3):
#   4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128
#
# clamp() bounds must use the font scale at both ends.
#
# Escape hatch: append `/* optical */` to any line that needs a 1-2px
# fine-tune for visual alignment. Use sparingly — every escape hatch
# should explain why the system isn't enough.

set -u

CSS="src/app/globals.css"
fail=0

bad_fontsize=$(grep -nE "font-size:\s*[0-9]+(\.[0-9]+)?px;" "$CSS" \
  | grep -vE "font-size:\s*(11|12|14|16|18|24|32|40|56|80)px;" || true)

if [ -n "$bad_fontsize" ]; then
  echo "✗ Off-token font-size found (allowed: 11/12/14/16/18/24/32/40/56/80):"
  echo "$bad_fontsize"
  fail=1
fi

bad_clamp=$(grep -nE "font-size:\s*clamp\(" "$CSS" \
  | grep -vE "clamp\((18|24|32|40|56|80)px,[^,]+,\s*(18|24|32|40|56|80)px\)" || true)

if [ -n "$bad_clamp" ]; then
  echo "✗ clamp() bound off-token (both bounds must be on the font scale):"
  echo "$bad_clamp"
  fail=1
fi

bad_gap=$(grep -nE "^\s*gap:\s*([0-9]+)(\.[0-9]+)?px" "$CSS" \
  | grep -vE "gap:\s*(0|4|8|12|16|24|32|48|64|96|128)px" \
  | grep -v "optical" || true)

if [ -n "$bad_gap" ]; then
  echo "✗ Off-scale gap (allowed: 4/8/12/16/24/32/48/64/96/128):"
  echo "$bad_gap"
  fail=1
fi

bad_margin=$(grep -nE "^\s*margin-top:\s*([0-9]+)(\.[0-9]+)?px" "$CSS" \
  | grep -vE "margin-top:\s*(0|4|8|12|16|24|32|48|64|96|128)px" \
  | grep -v "optical" || true)

if [ -n "$bad_margin" ]; then
  echo "✗ Off-scale margin-top (allowed: 4/8/12/16/24/32/48/64/96/128):"
  echo "$bad_margin"
  fail=1
fi

bad_dark=$(grep -nE "rgba\(239,\s*241,\s*244,\s*0\.(92|78|55|45|22|16|32)\)" "$CSS" \
  | grep -v "^[0-9]*:[[:space:]]*--ink-d-" || true)

if [ -n "$bad_dark" ]; then
  echo "✗ Raw rgba(239,241,244,…) on dark surface — use --ink-d-* token:"
  echo "$bad_dark"
  fail=1
fi

# Compound-padding rule (DESIGN.md §3): section roots own only their top
# padding. Symmetric `padding: var(--section-X) 0` on a section root compounds
# with the next section's top, breaking heading centering.
bad_compound=$(grep -nE "^\s*padding:\s*var\(--section-(major|sub|top|top-sm)\)\s+0\s*;" "$CSS" \
  | grep -vE "optical|internal-block" || true)

if [ -n "$bad_compound" ]; then
  echo "✗ Section root with symmetric padding (use \`var(--section-X) 0 0\` for top-only):"
  echo "$bad_compound"
  fail=1
fi

if [ $fail -eq 0 ]; then
  echo "✓ Design tokens clean — font scale, spacing scale, dark tokens all on-system."
fi

exit $fail
