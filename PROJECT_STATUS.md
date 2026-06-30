# Project status — Sarin Lab website

_Checkpoint: 2026-06-29. Homepage built & frozen; Research page planned (approved), not yet coded._

## Snapshot
- **Branch:** `main` · **Remote:** github.com/kavitaysarin/labwebsite — **nothing pushed yet** (local-first per user).
- **Latest feature commit before this checkpoint:** `127aab6` (a checkpoint commit is added on top of it — run `git log -1` for the current hash).
- **Stack:** Next.js 16 + TypeScript + Tailwind v4, static export → GitHub Pages. Repo at `C:\Users\ksarin\Projects\labwebsite` (outside Google Drive).
- **Node:** portable at `C:\Users\ksarin\nodejs` (on user PATH).

## Completed pages
- **`/` Home — DONE, refined over 4 passes, responsive (320–1440), axe WCAG A/AA = 0 violations, FROZEN.** Treated as the approved foundation.
- `/_not-found` — Next default (not yet customized).

## Completed pages (continued)
- **`/research` Research — DONE & FROZEN.** Compact `PageHero` + four signal pillars (genetic / molecular / imaging / digital); simplified and polished; axe WCAG A/AA = 0 violations; no overflow 320–1440. Digital pillar uses the real cNF-Vision image. New frozen components: `PageHero`, `ResearchPillar`.

## Current page
- **Technologies (`/technologies`) — content outline stage** (awaiting approval before coding). Will reuse the frozen `PageHero` + design system. Anchors referenced from Research: `#optical-imaging`, `#3d-molecular-pathology`, `#ai-and-data-science`, `#spatial-biology`.

## Approved design decisions
- Next.js static export → GitHub Pages; project kept outside Drive.
- Header nav = Addendum order, 9 items incl. Research; full nav at `xl`, accessible drawer below.
- Dr. Sarin title = **"Professor of Dermatology"** (per Addendum; live site says Associate — flagged).
- Palette/type/cards/icons per spec §6; Title-Case section headings; 16px body.
- Hero: mirrored package montage + 4-stop navy overlay; one-line title ≥1200px.
- Homepage structure: 3-zone intro band (intro / 3 stats / faded Stanford building); **desktop left editorial columns** (`lg: grid 0.9fr 3.1fr`) for Why Skin / Research Approach / Tools / Recent Work; tablet 2×2 (Why Skin, Research) and 2-cards-+-full-width-3rd (Tools, Recent Work); mobile stacked.
- Cards fully clickable (Tech + Publication) with hover lift + focus ring.
- Images scraped from the live site (lab's own). Optical Imaging = clean OCT scan; AI image = **provisional iStock placeholder**.
- Contact form → Formspree (placeholder ID).
- Publications: research-area cards + PubMed; homepage "Recent Work" uses real recent PubMed pubs.

## Remaining tasks (priority order)
1. **Build Technologies `/technologies`** (next; outline pending approval) — wires up the `#…` anchors that Research links to.
2. Build Publications (+ research-area drill-downs and the `?area=` filter the Research page links to), Recognition, Team (+ profiles), Collaborators, Lab Photos, Contact, custom 404.
3. Content data files still needed: `people.ts`, `collaborators.ts`, `recognition.ts`, `gallery.ts`, `research.ts` pillars.
4. Full image scrape/integration: headshots, lab photos, microscopy, logo.
5. Deliverables: `copy-before-after.md`, `redirect-map.md`, `CONTENT_EDITING_GUIDE.md`, README, image manifest. (`content-audit.md` + `CONTENT_REVIEW_NEEDED.md` now exist.)
6. QA: full a11y, responsive, link-check, Lighthouse; redirects; sitemap/robots/structured data.
7. Deploy to GitHub Pages (basePath + Actions or gh-pages) — **only on approval**.

## Unresolved visual issues
- AI technology card image is a generic iStock neural network — provisional; replace with a real lab AI/skin-analysis visual.
- Logo is a text lockup — needs the official Stanford/Sarin Lab logo.
- Research "Genetic Sensor" pillar image not yet sourced (need a genomics/DNA visual).
- `recent-work/hedgehog.jpg` is low-res (375²).
- Image optimization (WebP/AVIF + responsive sizes) not yet done — minor perf win (homepage ≈ 1.5 MB).

## Unresolved factual / scientific content
Full list in **`CONTENT_REVIEW_NEEDED.md`**. Headlines: "140+" pubs (PubMed = 138); image reuse rights (journal/vendor/iStock); collaborator titles/institutions (Jonathan Liu, Guosong Hong, David Fiorentino); "Jon Jiu Lab" → "Jonathan Liu Lab" typo; social links (only Instagram verified); Formspree ID; production domain; clinical-readiness wording for trials/virtual biopsy.

## Key paths
- Pages/layout: `src/app/page.tsx`, `src/app/layout.tsx`, `src/app/globals.css`, `next.config.ts`
- Layout components: `src/components/layout/{Header,Footer,Brand}.tsx`
- UI: `src/components/ui/{Button,Icon,SectionHeading,Placeholder}.tsx`
- Sections: `src/components/sections/{HomeHero,FeatureGrid,CTABand}.tsx`
- Cards: `src/components/cards/{TechCard,PublicationCard}.tsx`
- Content: `src/content/{site,navigation,research,technologies,publications}.ts` · Types: `src/lib/types.ts`
- Images: `public/images/{hero,technologies,recent-work,intro}`
- Docs: `docs/DESIGN_SYSTEM_FROZEN.md`, `docs/recent-work-image-map.md`; root: `PROJECT_STATUS.md`, `CONTENT_REVIEW_NEEDED.md`, `content-audit.md`, `CLAUDE.md`

## Run / preview
- **Dev:** `$env:Path = "C:\Users\ksarin\nodejs;$env:Path"; npm run dev` (in repo) → http://localhost:3000
- **Static export preview:** `npm run build` (→ `out/`), then serve `out/` with a static server on a port (e.g. the node server in `…/scratchpad/shots/server.js` on :4000).
- **Screenshots:** Playwright project in the session scratchpad (`scratchpad/shots/`) captures 320/390/768/1024/1440.
