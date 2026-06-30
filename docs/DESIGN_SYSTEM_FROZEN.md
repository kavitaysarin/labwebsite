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
