// Prefix a root-absolute /public asset URL with the deploy base path.
//
// Why this exists: on a GitHub Pages *project* site the app is served from a
// subpath (e.g. https://user.github.io/labwebsite/). Next prefixes its own
// bundle (_next/…) via `assetPrefix`, and it prefixes <Link> hrefs via
// `basePath` — but `next/image` with `images.unoptimized: true` returns the
// `src` UNCHANGED (see next `generateImgAttrs`: the unoptimized branch never
// applies basePath). Raw <video>/<source>/poster URLs are never prefixed
// either. So every /public asset referenced by URL must be prefixed manually,
// or it 404s at the domain root on a project site.
//
// `NEXT_PUBLIC_BASE_PATH` is inlined at build time (client + server), so this is
// a pure, isomorphic function. Local dev and custom-domain builds have an empty
// base path, making this a no-op there. Only root-absolute "/…" paths are
// rewritten; external URLs, protocol-relative "//…", and relative paths pass
// through untouched. Apply exactly once, at the point the URL reaches the DOM.
const raw = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const BASE_PATH = raw === "/" ? "" : raw;

export function asset(path: string): string {
  if (!path || !path.startsWith("/") || path.startsWith("//")) return path;
  return `${BASE_PATH}${path}`;
}
