# Overnight build report — remaining core pages (DRAFT)

**Date:** 2026-06-29 (evening) · **Branch:** `feature/remaining-pages-draft` (NOT merged, NOT pushed, NOT deployed)
**Status:** All five requested pages built as drafts. **Nothing is approved or production-ready.** Awaiting review.

Design-system source of truth = the approved/frozen Home, Research, and Technologies pages. All shared components (Header, Footer, Button/ArrowLink, `.card-surface`, `SectionHeading`, `PageHero`, `PublicationCard`, `Icon`, `FeatureGrid`) were reused **as-is** — none were restyled or renamed. New work is page-specific components that **compose** the frozen system. Three new icons (`search`, `users`, `link`) were added to `Icon.tsx` in the existing outline style, and an optional `pmid` field was added to the `Publication` type — both are additive and allowed without re-approval.

---

## 1. Pages completed (in build order)

| Page | Route | What it includes |
|---|---|---|
| Publications | `/publications` | Hero, intro, 3 featured figure-cards, client browser: text search + research-area filter + year filter + empty/no-results state; reads `?area=` deep links from Research/Technologies |
| Team | `/team` | Hero, intro, PI spotlight, category-filterable current-team grid (Staff/Trainees/Students/Volunteers), honest Alumni empty-state |
| Collaborators | `/collaborators` | Hero, intro, two domain groups (Clinical & Translational; Imaging & Engineering); each card = expertise · shared work · why it matters · profile link |
| Lab Photos | `/lab-photos` | Hero, intro, category-filtered responsive gallery, fully accessible lightbox (Esc / arrows / focus trap / scroll-lock / focus-return) |
| Contact | `/contact` | Hero, contact details, 3 reasons-to-reach-out cards, "not for medical emergencies" disclaimer, validated contact form (honestly disabled) |

**Verification (every page):** `next build` static export clean; **axe-core WCAG 2.0/2.1 A & AA = 0 violations** at 1440 and 390; **no horizontal overflow** at 320 / 390 / 768 / 1024 / 1440; all images load without scrolling (eager). Interaction tests passed: Publications filter/search/clear/deep-link; Lab Photos lightbox open/navigate/close/focus-return; Contact validation + honest "not sent" behavior.

**Screenshots** (Drive → `website/screenshots/`): `draft-<page>-{desktop,tablet,mobile}.png` for all five pages (15 files).

### Files created / changed
- **Publications:** `src/app/publications/page.tsx`, `src/components/sections/PublicationsBrowser.tsx`, `src/components/cards/PublicationListItem.tsx`, `src/content/publications-all.ts` (auto-generated, 120 records), `src/content/publications.ts` (filter helpers), `src/lib/types.ts` (`pmid`), `src/components/ui/Icon.tsx` (+`search`), `src/lib/types.ts` (icon names).
- **Team:** `src/app/team/page.tsx`, `src/components/sections/TeamBrowser.tsx`, `src/components/cards/PersonCard.tsx`, `src/content/people.ts`, `Icon.tsx` (+`users`).
- **Collaborators:** `src/app/collaborators/page.tsx`, `src/components/cards/CollaboratorCard.tsx`, `src/content/collaborators.ts`, `Icon.tsx` (+`link`).
- **Lab Photos:** `src/app/lab-photos/page.tsx`, `src/components/sections/PhotoGallery.tsx`, `src/content/gallery.ts`.
- **Contact:** `src/app/contact/page.tsx`, `src/components/sections/ContactForm.tsx`.
- **Docs:** `PROJECT_STATUS.md`, `CONTENT_REVIEW_NEEDED.md`, `content-audit.md`, `docs/DESIGN_SYSTEM_FROZEN.md` (Technologies freeze), this file.

---

## 2. Commits created (newest first, on `feature/remaining-pages-draft`)
- `d4e8219` feat: add contact page draft
- `fb8bc8d` feat: add lab photos page draft
- `41af400` feat: add collaborators page draft
- `1708382` feat: add team page draft
- `350477c` feat: add publications page draft
- `80e2dee` Freeze Technologies page; update status docs *(made on `main` before branching)*

(A final docs commit on this branch adds this report + the review-doc updates.)

---

## 3. Pages / features NOT completed (by design)
- **Recognition** — deferred per instruction. Not started.
- **Custom 404** — not built (still Next's default `/_not-found`).
- **Real headshots, curated team/event photos, alumni roster** — not bundled (content/consent pending; see below).
- **Working contact-form delivery** — intentionally disabled (no backend configured).
- **Pagination on Publications** — not added; the full list is long on mobile (consider "load more").
- No QA beyond per-page checks; no Lighthouse/perf pass; no deploy/merge (all out of scope).

---

## 4. Factual questions (need the lab's confirmation)
1. **Dr. Sarin's title** — using "Professor of Dermatology" (Addendum); live site says "Associate Professor." Which is current?
2. **Publication research-area tags** are auto-assigned by keyword heuristic — please review (Skin Cancer likely over-broad at 51; imaging under-counted at 4; 33 in "Other"). Also: show all 138 or the recent 120?
3. **Team name/role discrepancies:** Marlayna Harris (title?), Haniya vs "Haniyah," Chenming Zhang vs `czheng8@`, Audris Chang vs "Chiang," Nethra Srinivasan active status, volunteers' roles.
4. **Alumni** names (none retrievable from the live site).
5. **Collaborator shared projects** for Aasi, Fiorentino, Rieger (not stated on the live site — currently described at research-area level and flagged).
6. **Collaborator titles:** Rieger ("Clinical Professor" vs live "Clinical Assistant Professor"); Winetraub preferred title.
7. **Metrics** still unverified: "140+ Publications" (PubMed = 138), "18+ years," "40+ mentored."

Full detail in `CONTENT_REVIEW_NEEDED.md`.

---

## 5. Missing or provisional assets
- **Team headshots** — none; initials-avatar placeholders used for real people. (Live headshots include screenshots/low-res; supply clean images.)
- **Lab/team & event photos** — the live gallery (~34–37) was withheld (uncaptioned, low-res/screenshots, identifiable people, no consent). A curated, captioned, consent-cleared set is needed.
- **`klear-oct.jpg`** (used in Lab Photos) appears to be a journal figure — confirm reuse rights.
- **Spatial Biology / AI placeholder images** and the **official logo** — carried over from earlier review items (still open).

---

## 6. Placeholder / provisional content
- **Publication research-area tags** (heuristic) — `TODO: VERIFY` in `src/content/publications-all.ts`.
- **Collaborator "shared work"** for Aasi/Fiorentino/Rieger — `TODO: VERIFY` inline in `src/content/collaborators.ts`.
- **Team roles** flagged inline (`TODO: VERIFY`) in `src/content/people.ts`; **Alumni** section shows an honest "being compiled" message.
- **Lab Photos** gallery is a rights-cleared science starter set, not the real lab-photo collection.
- **Contact form** shows a visible "not connected yet" notice.

---

## 7. Broken or provisional links
- **No broken links among built pages.** Internal links to built routes return 200.
- **Forward links that 404 only because the page isn't built yet:** `/recognition` (deferred). These will resolve when Recognition is built. (All other nav targets — Home, Research, Technologies, Publications, Team, Collaborators, Lab Photos, Contact — return 200.)
- **Publications `?area=` deep links** from Research/Technologies now resolve and pre-select the filter.
- **External links** (PubMed, DOI, Stanford Profiles, Stanford Dermatology, Instagram) open in new tabs with `rel="noopener noreferrer"`. Stanford Profiles URLs were verified to exist; DOIs/PMIDs come straight from PubMed.

---

## 8. Form configuration still needed
- The contact form posts to **Formspree only when `SITE.formspreeId` is a real ID** (currently `YOUR_FORMSPREE_ID`). Until then it validates input and shows a "not connected — email us at ahoj@stanford.edu" message; **it never claims a message was sent.**
- To enable: create a Formspree form, set `SITE.formspreeId` in `src/content/site.ts`. Confirm the destination inbox (note `ahoj@stanford.edu` is admin assistant Juniper Aho's address).

---

## 9. Recommended review order
1. **Publications** — confirm coverage (120 vs 138) and **fix research-area tags** (biggest content-accuracy item; also drives the area filters and deep links).
2. **Team** — confirm Dr. Sarin's title, resolve name/role flags, decide on headshots, supply alumni.
3. **Collaborators** — approve/replace the Aasi/Fiorentino/Rieger shared-project wording and the Stanford Profiles links.
4. **Contact** — approve disclaimer wording; provide Formspree ID; confirm clinical-contact link.
5. **Lab Photos** — decide on a curated, consent-cleared photo set (lowest content-readiness; structurally complete).

---

## 10. Current Git status & branch
- **Branch:** `feature/remaining-pages-draft` (checked out). **`main` is untouched** by the draft pages (only the Technologies freeze + status-doc commit `80e2dee` landed on `main` before branching).
- **Not merged, not pushed, not deployed.** No force-pushes.
- Working tree: clean after the final docs commit (5 page commits + 1 docs commit on the branch).
- To preview: `npm run build` → serve `out/` (see `PROJECT_STATUS.md`).

---

## Notes on rules followed
- **No invented content** — all people, publications, collaborators, and contact facts trace to the live site or PubMed; uncertainties are flagged, not guessed.
- **No clinical overstatement** — research framing throughout; the Contact page adds a medical disclaimer; KLEAR/imaging described as research tools.
- **Consent/identity stop condition respected** — live team photos withheld.
- **Form honesty stop condition respected** — no fake "message sent."
- **Frozen design system preserved** — shared components reused unmodified.
