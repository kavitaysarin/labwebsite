# Team headshot — asset inventory & sources

Headshots migrated from the live Sarin Lab `/team` page (Squarespace) on 2026-06-30.
Originals preserved in `public/images/team/originals/`. Display images in
`public/images/team/<slug>.jpg` are aspect-preserved (resized to fit, never
upscaled). Each is framed in a 4:5 card via CSS `object-fit: cover` plus a
per-person `objectPosition` (set in `people.ts`) so eyes sit in the upper third
and hair/chins/shoulders are not cut — tune an individual crop by editing that
person's `objectPosition`.

**Matching:** each image was paired to its person by the live page's DOM order,
which is anchored by self-identifying filenames (Louiza, Jeffrey, Srinivasan_Nethra,
Lin_Michelle, ChiangAudris) — so the positional matches are reliable. No images were
generated, invented, or taken from social media.

**Source resolution:** the live site's uploaded images are **low-resolution** (the
CDN returns these even at `?format=original`). They display acceptably at card size but
should be replaced with higher-resolution originals where possible — flagged below.

Base: `https://images.squarespace-cdn.com/content/v1/58df29fb6a4963762c662cf5/`

| Person | slug | source size | flags | source file (under base) |
|---|---|---|---|---|
| Kavita Sarin | kavita-sarin | 300×381 | low-res | `5f39e5fe-a951-43e9-ab8b-70b948d65dde/Kavita.webp` |
| Juniper Aho | juniper-aho | 150×244 | **very low-res** | `35d501e6-8ffe-4f7f-a881-3c76a9e097b8/Juniper.webp` |
| Sharon Loa | sharon-loa | 225×301 | low-res, screenshot-derived | `089ff814-5342-491c-8b18-09edfd17e8b0/Screenshot+2026-06-19+11.37.00+AM.png` |
| Valerie Sarah Ta | valerie-ta | 225×301 | low-res, screenshot-derived | `2a040788-ef74-4914-a99c-77664030e007/Screenshot+2026-06-19+11.41.36+AM.png` |
| Louiza Esther Zughbaba | louiza-zughbaba | 300×321 | low-res | `e6a92753-e4c2-4fdd-9c75-ceac567e4b15/Louiza.headshot.webp` |
| Jeffrey Penular Sagun | jeffrey-sagun | 300×450 | low-res | `a7fb465f-4ec8-483c-a497-6a1db324ae1d/Jeffrey_Sagun.webp` |
| Nethra Srinivasan | nethra-srinivasan | 300×375 | low-res | `632497cf-4f31-4800-b2ab-14687ae2ec0c/Srinivasan_Nethra_headshot.webp` |
| Sahar Caravan | sahar-caravan | 800×800 | ok | `70f93759-726f-4c4c-a664-7927a5516a6c/1758259659460.jpeg` |
| Haniya Shareef | haniya-shareef | 500×375 | low-ish (landscape) | `b34d8fb7-30a3-45dc-826e-12b3aa6fcc87/P1667223+(1).webp` |
| Chenming Zhang | chenming-zhang | 300×451 | low-res | `1cc9fd9e-2dbb-4dc0-bff0-75ea8b180285/IMG_8745.webp` |
| Michelle Lin | michelle-lin | 500×440 | low-ish (landscape) | `f5d209cd-6b2f-43a7-85b5-c17de9bd7657/Lin_Michelle_headshot.webp` |
| Marlayna Harris | marlayna-harris | 800×800 | ok | `9f4a98a5-ebef-4d7a-9ca6-94a59960de59/1724976973710.jpeg` |
| Victoria Harbour | victoria-harbour | 800×800 | ok | `875a38af-c886-43cb-b641-c84333b99383/1727140736461.jpeg` |
| Audris Chang | audris-chang | 500×500 | low-ish | `5a61b7e6-9361-49b9-a438-951ca3225b49/ChiangAudrisPhoto2-min+(2).webp` |

**Lab-supplied photos (2026-07-01):** Sally Glaser (`sallyglaser.jpg`), Margarita
Golod (`margarita.png` — auto-cropped out of a phone screenshot to isolate the
headshot), and Kat Israel (`KatIsrael.png`). All from the redesign package.

**No headshot (initials fallback):** now only **Angelina Chekmareva** (new staff,
no photo supplied).

**Removed 2026-07-01:** Victoria Harbour and Sahar Caravan (entries + images deleted).

Do not hotlink these Squarespace URLs in production — local copies are committed.
