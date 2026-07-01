# Frozen design system

As of the approved homepage, the following shared tokens and components are
**frozen**. When building the remaining pages, **reuse them as-is** — do not
restyle, rename, or change their props/markup without explicit re-approval.
This keeps every page on one consistent system.

## Frozen surface

| Concern | Location | Notes |
|---|---|---|
| Design tokens | `src/app/globals.css` (`@theme`, `:root`) | Colors, fonts, shadows, container width, section-padding helpers, `.eyebrow`, `.card-surface(-strong)` |
| Header | `src/components/layout/Header.tsx`, `Brand.tsx` | Sticky cardinal header, 9-item nav, accessible drawer (Esc + scroll-lock) |
| Footer | `src/components/layout/Footer.tsx` | Short footer; mobile 2-col link grid |
| Button | `src/components/ui/Button.tsx` | `Button` (primary / secondary / secondary-light) + `ArrowLink` |
| Card system | `globals.css` `.card-surface` / `.card-surface-strong` | radius 10px, 1px border `rgba(6,26,51,.14)`, shared shadow tokens |
| Section container | `src/components/ui/SectionHeading.tsx` + `.container-wide` / `.section-pad*` | `width: min(100%-48px, 1280px)`; editorial sidebar = `lg:grid-cols-[0.9fr_3.1fr]` |
| TechnologyCard | `src/components/cards/TechCard.tsx` | Fully clickable, eager image, `wide` span variant |
| PublicationCard | `src/components/cards/PublicationCard.tsx` | Fully clickable, contain-on-white figure, `wide` span variant |
| Icon set | `src/components/ui/Icon.tsx` | One outline family; do not introduce a second icon style |
| FeatureGrid | `src/components/sections/FeatureGrid.tsx` | `plain` (Why Skin) / `card` (Research) variants |

## Verified at freeze
- **Accessibility:** axe-core WCAG 2.0/2.1 A & AA → **0 violations** at 1440px and 390px.
- **Responsive:** no horizontal scroll at 320 / 390 / 768 / 1024 / 1440.
- **Build:** `next build` static export clean (no TS or console errors); dev indicator disabled.

## Allowed without re-approval
- Adding **new** page-specific components that compose the frozen ones.
- Adding new content data files under `src/content`.
- Adding new icons to `Icon.tsx` **in the same outline style**.

## Also frozen (added after the Research page)
| Concern | Location | Notes |
|---|---|---|
| Interior page hero | `src/components/ui/PageHero.tsx` | Compact navy hero for all subpages |
| Research pillar block | `src/components/sections/ResearchPillar.tsx` | Image + eyebrow + title + lead + ≤3 projects + publications link |
| Research page | `src/app/research/page.tsx` | Approved + frozen |
| Research content | `src/content/research.ts` (`RESEARCH_INTRO`, `RESEARCH_PILLARS`) | Verified pillar copy/data |

Reuse `PageHero` as-is for Technologies and every later interior page.

## Also frozen (added after the Technologies page — QA-passed 2026-06-29)
| Concern | Location | Notes |
|---|---|---|
| Technology program block | `src/components/sections/TechnologyDetail.tsx` | 4:3 image (cover/contain) + name + lead + "What it reveals" + ≤3 application chips + linked collaborators + Related Research/Publications links. Optionally renders a looping video (`TechVideo`) in place of the image when `program.video` is set. |
| Looping technique video | `src/components/sections/TechVideo.tsx` (2026-07-01) | Muted autoplay loop with poster + MP4/WebM sources; pauses on the poster when the visitor prefers reduced motion |
| Technologies page | `src/app/technologies/page.tsx` | Approved + frozen; 5 programs, anchor cards (#optical-imaging, #optical-transparency, #3d-molecular-pathology, #spatial-biology, #ai-and-data-science) |
| Technologies content | `src/content/technologies.ts` (`TECHNOLOGY_INTRO`, `TECHNOLOGY_PROGRAMS`) | Approved copy; collaborators link to Stanford Profiles |

Section images on interior pages load `loading="eager"` (static export has no optimizer; lazy-load left tall-page images blank on tablet/mobile).

## Also approved (added after the Publications page — 2026-06-30)
| Concern | Location | Notes |
|---|---|---|
| Featured publication card | `src/components/cards/FeaturedPublicationCard.tsx` | Image-free; subtle border + thin cardinal top accent; fully clickable (stretched title link → PubMed) with DOI raised above; category label + journal·year + links |
| Selected publication card | `src/components/cards/SelectedPublicationCard.tsx` | Compact; fully clickable; category + title + author (first + "et al.") + journal·year + PubMed/DOI links |
| Publications page | `src/app/publications/page.tsx` | Approved curated **Selected Publications** layout; section anchors `#optical-imaging`, `#skin-cancer-genetics`, `#neurofibromatosis`, `#autoimmune-systemic` |

The publication **list** (`SELECTED_PUBLICATIONS` in `src/content/publications.ts`) is intentionally content-managed (NOT frozen) — edit it by hand per `PUBLICATIONS_MAINTENANCE.md`.

## Also approved (added after the Team page — 2026-06-30)
| Concern | Location | Notes |
|---|---|---|
| Team member card | `src/components/cards/PersonCard.tsx` | Uniform card: 4:5 headshot (object-cover + per-person `objectPosition`) or initials fallback; name + credentials, role, concise bio, bottom-aligned email |
| Team grid + filters | `src/components/sections/TeamBrowser.tsx` | One egalitarian grid (1/2/3/4 cols at base/md/lg/2xl); optional filter chips (default All), Alumni filter shows a "coming soon" note; filters never reorder |
| Team page | `src/app/team/page.tsx` | Approved unified-grid layout (no PI spotlight, no stacked sections, no intro heading) |

The member **list** (`PEOPLE` in `src/content/people.ts`) is content-managed (NOT frozen) — edit roles/bios/headshots/`objectPosition` there. Headshot sources: `docs/team-image-sources.md`.

## Also approved (added after the Collaborators page — 2026-06-30)
| Concern | Location | Notes |
|---|---|---|
| Collaborator card | `src/components/cards/CollaboratorCard.tsx` | 4:5 portrait (object-cover + per-person `objectPosition`) or initials; navy name + credentials, cardinal title, gray institution, one expertise sentence, bottom "View Stanford Profile" link; full-card clickable |
| Collaborators page | `src/app/collaborators/page.tsx` | Approved layout: two domain groups, left-aligned 3/2/1 grid (incomplete rows start in column one, not centered) |

The collaborator **list** (`COLLABORATORS` in `src/content/collaborators.ts`) is content-managed (NOT frozen). Portrait sources: `docs/collaborator-image-sources.md`.

## Also approved (added after the Lab Photos page — 2026-06-30)
| Concern | Location | Notes |
|---|---|---|
| Photo gallery | `src/components/sections/PhotoGallery.tsx` | Responsive people-focused masonry (1/2/3 cols, natural proportions, no forced crop, intrinsic dims → no CLS); optional category filter chips (default All); "Load More" (12 at a time, all on one page); accessible lightbox (full image, prev/next, arrow keys, Escape, focus trap, focus-return, touch swipe) |
| Lab Photos page | `src/app/lab-photos/page.tsx` | Approved layout: `PageHero` (no subtitle) + "Life in the Lab" heading + gallery + CTA band |

The photo **list** (`GALLERY` in `src/content/gallery.ts`) is content-managed (NOT frozen) — add/remove/reorder photos and edit captions/categories there. Inventory + rationale: `LAB_PHOTO_INVENTORY.md`. People-focused only; no scientific figures/OCT/histology/publication graphics.

## Also approved (added after the Contact page — 2026-07-01)
| Concern | Location | Notes |
|---|---|---|
| Contact form + cards | `src/components/sections/ContactSection.tsx` | "Ways to Connect" cards (Join / Research Collaborations / Support Our Lab) that preselect a reason + scroll to the form; concise clinical disclaimer; connected form (name/email/affiliation/reason/message) with inline accessible validation, honeypots, Sending/Success/Error states (success only on provider confirmation), centered ~800px |
| Contact page | `src/app/contact/page.tsx` | Approved layout: `PageHero` (no subtitle) + `ContactSection`. (Hero subtitle and the "Get in Touch" details block were removed 2026-07-01; contact details live in the footer.) |

Delivery is via **Web3Forms**; the public key is read from `NEXT_PUBLIC_WEB3FORMS_KEY` (never committed — `.env.local` locally, a build secret in production). End-to-end delivery to `ksarin@stanford.edu` was confirmed. Maintenance: `CONTACT_FORM_MAINTENANCE.md`.
