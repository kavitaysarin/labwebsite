# Project status — Sarin Lab website

_Checkpoint: 2026-06-29 (evening). Homepage, Research, and Technologies built, QA-passed & FROZEN. Starting an authorized overnight DRAFT build of the remaining core pages on a feature branch (not approved, not production)._

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

## Completed pages (continued)
- **`/technologies` Technologies — DONE, QA-passed & FROZEN.** Compact `PageHero` + 2-paragraph intro + 5 anchor cards + 5 program blocks (Optical Imaging / Optical Clearing with KLEAR / 3D Molecular Pathology / Spatial Biology / AI & Computational Analysis). Real lab images; collaborator names link to Stanford Profiles (Winetraub, Hong, Liu — Liu lab moved to Stanford Pathology Summer 2025). Section images eager-loaded (fixes tablet/mobile blank-image bug). axe WCAG A/AA = 0 violations; no overflow 320–1440. New frozen component: `TechnologyDetail`. Anchors used by Research: `#optical-imaging`, `#3d-molecular-pathology`, `#ai-and-data-science`, `#spatial-biology`.

## Current work — OVERNIGHT DRAFT BUILD (authorized 2026-06-29) — COMPLETE, awaiting review
- Branch **`feature/remaining-pages-draft`** (NOT `main`, NOT merged, NOT deployed). DRAFT (not approved) versions built, one commit each:
  - **Publications** — **APPROVED & FINALIZED** (curated **Selected Publications** model): hero, intro + "View All Publications on PubMed", 3 featured cards, and 4 research-area sections (Optical Imaging / Skin Cancer and Genetics / Neurofibromatosis / Autoimmune, Inflammatory, and Systemic Disease) with section anchors. **20 papers**, all curated from the live site and verified against PubMed (PMID/DOI resolve; authors = first author + "et al."). Full database / search / filters / pagination intentionally excluded (post-launch). Research & Technologies "related publications" links point to `/publications#<section>` (verified in-view). Maintained by hand — see `PUBLICATIONS_MAINTENANCE.md`.
  - **Team** — **APPROVED & FINALIZED** (unified egalitarian grid): one grid of all current members (PI first, equal cards), optional filter chips (All / Faculty / Staff / Trainees / Students / Volunteers / Alumni), real headshots migrated from the live site (4:5, per-person `objectPosition`; 2 volunteers use initials), concise "Studying …" bios, Alumni filter "coming soon" note. Member list content-managed in `people.ts`; headshot sources in `docs/team-image-sources.md`.
  - **Collaborators** — **APPROVED & FINALIZED**: 10 collaborators in two groups (Clinical & Translational; Imaging, Engineering & Data Science); official Stanford portraits (Winetraub lab-supplied); one-sentence cards (navy name / cardinal title / gray institution); left-aligned 3/2/1 grid; full-card-clickable "View Stanford Profile". Titles verified against official Stanford pages. List content-managed in `collaborators.ts`; sources in `docs/collaborator-image-sources.md`.
  - **Lab Photos** — **APPROVED & FINALIZED** (2026-06-30): responsive people-focused masonry gallery of the full public carousel + lab-supplied photos. **36 photos** (31 carousel + 5 lab-supplied); exact/near-duplicates, a stray non-photo, and 4 photos removed at the lab's request. Four category filters (default All), "Load More", and an accessible lightbox (arrow keys / Escape / focus-trap / touch swipe). No scientific figures/OCT/histology/publication graphics. Photo list content-managed in `gallery.ts`; inventory in `LAB_PHOTO_INVENTORY.md`.
  - **Contact** — **APPROVED & FINALIZED** (2026-07-01; end-to-end delivery **confirmed** by the lab): contact form wired to **Web3Forms** (delivery → `ksarin@stanford.edu`), public key in `NEXT_PUBLIC_WEB3FORMS_KEY` (kept out of git). Fields (name/email/affiliation/reason/message), inline accessible validation, honeypots + too-fast trap, Sending/Success/Error states (success only on provider confirmation — never faked), "Ways to Connect" cards (Join / Research Collaborations / **Support Our Lab**) that preselect the reason + scroll to the form, and a concise clinical disclaimer linking Stanford Health Care. Hero subtitle and the "Get in Touch" details block were removed per request (address/phone/email remain in the footer). Guide: `CONTACT_FORM_MAINTENANCE.md`. **For deployment:** set the `NEXT_PUBLIC_WEB3FORMS_KEY` build secret so the production build carries the key (else the form falls back to its safe draft notice).
- Each page: `next build` clean, axe WCAG A/AA = 0 violations (desktop+mobile), no overflow 320–1440. **Recognition deferred; custom 404 not built.**
- Full run log, open questions, missing assets, and recommended review order: **`OVERNIGHT_BUILD_REPORT.md`**. New review items appended to `CONTENT_REVIEW_NEEDED.md`.

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

## Post-launch enhancements (deferred — do NOT build before launch)
Decided 2026-06-29 when the Publications page moved to a curated **Selected Publications** model:
- Complete publication database / archive page (all ~138 records).
- **Automated PubMed synchronization system** (a GitHub Actions updater that ingests new records from the lab's PubMed profile and refreshes the publication data automatically). **Post-launch enhancement only — NOT required for initial launch.** Until then the curated list is updated by hand (`PUBLICATIONS_MAINTENANCE.md`).
- Publications **search field**, **year filter**, **topic/area filter UI**, **pagination**, and **"load more"**.
- Until then, selected publications are maintained by hand in `src/content/publications.ts` (see `PUBLICATIONS_MAINTENANCE.md`).

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
