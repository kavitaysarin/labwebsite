# Maintaining the Publications page

The Publications page shows a **curated set of selected publications**, not the full
archive. Everything it displays comes from one file:

```
src/content/publications.ts   →  the SELECTED_PUBLICATIONS list
```

You edit that list by hand. No build scripts, PubMed sync, or database are involved
for launch. After any change, rebuild the site (`npm run build`) to see it.

Each publication is one entry that looks like this:

```ts
{
  title: "Noninvasive virtual biopsy using micro-registered OCT in human subjects",
  authors: "Winetraub Y, et al.",   // first author + "et al."
  journal: "Science Advances",
  year: 2024,
  category: "optical-imaging",          // which section it appears in
  pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/XXXXXXXX/",
  doiUrl: "https://doi.org/10.1126/sciadv.adi5794",   // optional
  image: "/images/technologies/klear-oct.jpg",        // optional (featured only)
  imageAlt: "Virtual-biopsy imaging pipeline.",        // required if image is set
  featured: true,                        // optional — shows it in the top 3
  displayOrder: 1,                       // optional — lower = higher in its section
  summary: "First demonstration in patients.",         // optional, approval-gated
}
```

## The five sections (the `category` value)

| `category` value        | Section heading on the page                          |
|-------------------------|------------------------------------------------------|
| `"optical-imaging"`     | Optical Imaging                                      |
| `"skin-cancer-genetics"`| Skin Cancer and Genetics                             |
| `"neurofibromatosis"`   | Neurofibromatosis                                    |
| `"autoimmune-systemic"` | Autoimmune, Inflammatory, and Systemic Disease       |
| `"molecular-digital"`   | Molecular, Spatial, and Digital Methods              |

The `category` must be **exactly** one of those five strings (TypeScript will error
if it isn't). A paper appears in only one section.

## Common tasks

**Add a new selected publication**
1. Find the paper on PubMed and copy its real title, authors, journal, year, the
   PubMed URL (`https://pubmed.ncbi.nlm.nih.gov/<PMID>/`) and, if available, the DOI
   URL (`https://doi.org/...`).
2. Add a new `{ ... }` entry to `SELECTED_PUBLICATIONS` with a `category`.
3. Save and rebuild. **Only add papers that are real and verified — never invent one.**

**Remove a publication** — delete its `{ ... }` entry.

**Change a paper's section** — change its `category` value to one of the five above.

**Mark / unmark a paper as featured** — add `featured: true` (or remove it). Keep the
featured set to **three** strong, visually representative papers from different areas.

**Add or replace a publication image**
- Put the image file in `public/images/` (e.g. `public/images/publications/`).
- Set `image: "/images/publications/your-file.jpg"` and a short, accurate `imageAlt`.
- Use images **only** from the exact paper or an approved lab source, only when reuse
  is permitted, and document the source. Images are mainly for the three featured
  cards; other entries are fine as text-only.

**Update a PubMed or DOI link** — edit `pubmedUrl` / `doiUrl`. Verify the link opens
the correct paper before saving.

**Reorder publications within a section** — set `displayOrder` (1, 2, 3, …); lower
numbers appear first. Entries without `displayOrder` keep their file order after the
ordered ones.

**Change the "View All Publications on PubMed" button** — it points to the lab's
PubMed profile URL stored as `SITE.pubmedUrl` in `src/content/site.ts`.

## What NOT to do (for launch)
- Do **not** paste the full PubMed export or a long bibliography here — this page is a
  curated highlight, ~16–24 papers total.
- Do **not** invent citations, summaries, links, images, or dates.
- Do **not** add a plain-language `summary` unless it has been reviewed/approved.

## Deferred to after launch
Search, year/topic filters, pagination, "load more", the complete publication
database, and automated PubMed synchronization are intentionally **not** built yet.
See `PROJECT_STATUS.md` → "Post-launch enhancements".
