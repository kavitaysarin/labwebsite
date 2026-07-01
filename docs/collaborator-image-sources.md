# Collaborator headshot — asset inventory & sources

Portraits migrated 2026-06-30. Originals preserved in
`public/images/collaborators/originals/`; display copies (re-encoded JPG) in
`public/images/collaborators/<slug>.jpg`. Each is framed in a 4:5 card via CSS
`object-fit: cover` + a per-person `objectPosition` (in `collaborators.ts`).
**No artificial portraits were generated or substituted.**

Nine portraits are official **Stanford Profiles "CAP"** photos
(`profiles.stanford.edu/proxy/api/cap/profiles/<id>/resources/profilephoto/350x350.…`),
each **350×350** — the largest size the CAP endpoint serves (720/1000 → 404),
acceptable at card size, slightly soft on 2× displays. One (Winetraub) is a
lab-supplied high-resolution photo. Do not hotlink any of these in production —
local copies are committed.

**Reuse permission:** the CAP images are the collaborators' official public
Stanford profile photos; confirm each collaborator is OK with reuse on the lab
site before launch (flagged in CONTENT_REVIEW_NEEDED.md).

| Collaborator | slug | profile page | image source | size |
|---|---|---|---|---|
| Sumaira Z. Aasi | sumaira-aasi | `profiles.stanford.edu/sumaira-aasi` | CAP id 24596 `…/350x350.1624375276627.jpg` | 350×350 |
| David Fiorentino | david-fiorentino | `profiles.stanford.edu/david-fiorentino` | CAP id 4719 `…/350x350.1509502305083.jpg` | 350×350 |
| Kerri E. Rieger | kerri-rieger | `profiles.stanford.edu/kerri-rieger` | CAP id 35511 `…/350x350.1509513581592.jpg` | 350×350 |
| Helen Bronte-Stewart | helen-bronte-stewart | `med.stanford.edu/profiles/helen-bronte-stewart` (photo via `profiles.stanford.edu/helen-bronte-stewart`) | CAP id 4377 `…/350x350.1509505551508.jpg` | 350×350 |
| Lorinda Chung | lorinda-chung | `med.stanford.edu/profiles/lorinda-chung-md-ms` (photo via `profiles.stanford.edu/lorinda-chung-md-ms`) | CAP id 7580 `…/350x350.1533851632044.jpg` | 350×350 |
| Yonatan Winetraub | yonatan-winetraub | `profiles.stanford.edu/yonatan-winetraub` | **lab-supplied** ("Yonatan headshot 1.jpg") | 1880×1880 |
| Guosong Hong | guosong-hong | `profiles.stanford.edu/guosong-hong` | CAP id 57247 `…/350x350.1766104397057.jpg` | 350×350 |
| Jonathan Liu | jonathan-liu | `profiles.stanford.edu/jonliu` | CAP id 9961 `…/350x350.1739683350393.jpg` | 350×350 |
| Adam de la Zerda | adam-de-la-zerda | photo via `profiles.stanford.edu/adam-de-la-zerda` (CAP 31795); **card links to** `med.stanford.edu/delazerda/adam-de-la-zerda.html` | CAP id 31795 `…/350x350.1509496050105.jpg` | 350×350 |
| Olivier Gevaert | olivier-gevaert | `profiles.stanford.edu/olivier-gevaert` | CAP id 15978 `…/350x350.1509531956338.jpg` | 350×350 |
| Christina Curtis | christina-curtis | `profiles.stanford.edu/christina-curtis` | CAP id 61618 `med.stanford.edu/services/api/cap/profiles/photocache.61618.jpg` (added 2026-07-01) | 350×350 |

**Removed 2026-07-01 (may return):** Helen Bronte-Stewart and Lorinda Chung entries were removed from `collaborators.ts`; their `helen-bronte-stewart.jpg` / `lorinda-chung.jpg` files are retained for easy re-add. **Live collaborators: 9.**

**Missing portraits:** none — all live collaborators have a photo.

All portraits were visually checked against the person's profile page and matched
correctly.
