# Collaborator headshot — asset inventory & sources

Official Stanford profile photos migrated 2026-06-30. Originals preserved in
`public/images/collaborators/originals/`; display copies (re-encoded JPG) in
`public/images/collaborators/<slug>.jpg`. Each is framed in a 4:5 card via CSS
`object-fit: cover` + a per-person `objectPosition` (in `collaborators.ts`).

**Source:** Stanford Profiles "CAP" profile photos (`profiles.stanford.edu/proxy/api/cap/profiles/<id>/resources/profilephoto/…`).
**Resolution:** all are **350×350** — that is the largest size the CAP endpoint
serves (720/1000 return 404). Acceptable at card size; slightly soft on 2× displays.
Do not hotlink these in production — local copies are committed. No artificial
portraits were generated or substituted.

| Collaborator | slug | profile page | image (CAP id) | size |
|---|---|---|---|---|
| Sumaira Z. Aasi | sumaira-aasi | `profiles.stanford.edu/sumaira-aasi` | id 24596 `…/profilephoto/350x350.1624375276627.jpg` | 350×350 |
| David Fiorentino | david-fiorentino | `profiles.stanford.edu/david-fiorentino` | id 4719 `…/350x350.1509502305083.jpg` | 350×350 |
| Kerri E. Rieger | kerri-rieger | `profiles.stanford.edu/kerri-rieger` | id 35511 `…/350x350.1509513581592.jpg` | 350×350 |
| Guosong Hong | guosong-hong | `profiles.stanford.edu/guosong-hong` | id 57247 `…/350x350.1766104397057.jpg` | 350×350 |
| Jonathan Liu | jonathan-liu | `profiles.stanford.edu/jonliu` | id 9961 `…/350x350.1739683350393.jpg` | 350×350 |
| Olivier Gevaert | olivier-gevaert | `profiles.stanford.edu/olivier-gevaert` | id 15978 `…/350x350.1509531956338.jpg` | 350×350 |
| Adam de la Zerda | adam-de-la-zerda | photo: `profiles.stanford.edu/adam-de-la-zerda` (CAP id 31795); **card links to** `med.stanford.edu/delazerda/adam-de-la-zerda.html` per request | id 31795 `…/350x350.1509496050105.jpg` | 350×350 |

**No official photo (initials fallback):** **Yonatan Winetraub** — his Stanford
Profiles page has no profile photo. Added to the missing-headshots list.

All seven photos were visually checked against the person's profile page and
matched correctly.
