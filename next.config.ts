import type { NextConfig } from "next";

/**
 * Static-export configuration for GitHub Pages.
 *
 * - `output: "export"` emits a fully static site into ./out
 * - `images.unoptimized` is required because there is no image-optimization
 *   server on GitHub Pages (we still use next/image for layout + lazy loading)
 * - `trailingSlash` makes each route export as <route>/index.html, which
 *   GitHub Pages serves cleanly
 * - `basePath` / `assetPrefix` are needed when the site is served from a
 *   project subpath (e.g. https://kavitaysarin.github.io/labwebsite). Set
 *   NEXT_PUBLIC_BASE_PATH=/labwebsite at build time for that case, or leave it
 *   empty for a custom domain / local dev.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Hide the dev-mode indicator (the small floating circle in the corner).
  devIndicators: false,
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
