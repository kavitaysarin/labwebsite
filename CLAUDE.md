@AGENTS.md

# Sarin Lab Website — project rules

Standalone site for the **Sarin Lab** (Stanford University School of Medicine, Dermatology), themed **"Skin as a Sensor for Disease."** These are the permanent rules. Live status lives in `PROJECT_STATUS.md` (read it first when resuming).

## Stack & run
- Next.js 16 (App Router) · TypeScript · Tailwind v4 · **static export** (`output: "export"`) → GitHub Pages.
- Repo: `C:\Users\ksarin\Projects\labwebsite` — deliberately **outside** Google Drive. Remote: `github.com/kavitaysarin/labwebsite`.
- Node is a portable install at `C:\Users\ksarin\nodejs` (on the user PATH). If `node` isn't found, prepend that dir to PATH.
- Dev: `npm run dev` → http://localhost:3000. Build: `npm run build` → `out/`. (Preview the export by serving `out/` — see `PROJECT_STATUS.md`.)
- Local-first: **do not push or deploy without explicit approval.**

## Source-of-truth order (resolve conflicts top-down)
1. Standalone build spec (`Sarin Lab Website Redesign.docx`)
2. Content Rewrite Addendum (`Content Rewrite and Correction Requirements.docx`)
3. Approved mockups
4. Live `sarinlab.stanford.edu` — **facts & links only, not final copy**
5. Archived markdown (package README)

**Ignore all Squarespace guidance.**

## Content rules
- Center everything on **Skin as a Sensor**; organize research by **genetic / molecular / imaging / digital signals**; treat diseases as **applications**, not silos.
- Do **not** describe the lab primarily as a skin-cancer / sequencing lab.
- Use **only verified** people, publications, technologies, collaborators. Never invent. Don't copy live-site text wholesale — rewrite.
- Distinguish **established vs. active research vs. future**; never overstate clinical readiness.
- Flag every uncertain fact/title/number in **`CONTENT_REVIEW_NEEDED.md`**; don't publish unverified claims.
- Copyedit: "non-invasive"; spell out *artificial intelligence* / *neurofibromatosis type 1* then AI / NF1; "systemic sclerosis"; "cutaneous neurofibromas"; "chemoprevention"; Title-Case section headings; no all-caps headings; no stray colons.

## Design system — FROZEN
Tokens + Header, Footer, Button/ArrowLink, Card (`.card-surface*`), SectionHeading, TechCard, PublicationCard, Icon, FeatureGrid are **frozen** — reuse as-is; do not restyle/rename without re-approval (`docs/DESIGN_SYSTEM_FROZEN.md`). New pages **compose** these; new page-specific components are fine.

## Data safety (critical)
The parent folder holds **sensitive NF1 clinical/genomic data**. This repo is isolated and `.gitignore` blocks data file types. **Never commit** `*.csv/.xlsx/.bed/.bim/.fam/.vcf/.pptx/.docx` etc. (use `git add -f` only with intent).

## Images
Real lab/approved assets only — **no generic stock**; mark provisional assets. Use `next/image` with `loading="eager"` for above-the-fold homepage card images (static export has no optimizer; `images.unoptimized: true`).

## Layout
- Pages: `src/app/**` · Components: `src/components/{layout,ui,sections,cards}` · Content data: `src/content/*.ts` · Types: `src/lib/types.ts` · Tokens: `src/app/globals.css` · Images: `public/images/**`.
- Resume info: `PROJECT_STATUS.md` · Review queue: `CONTENT_REVIEW_NEEDED.md` · Content map: `content-audit.md`.
