# Content review needed

Items requiring **Dr. Sarin / lab-team verification or approval** before launch. Nothing here is published as fact without confirmation. (Companion to `content-audit.md`.)

## Titles, names & roles
- **Dr. Kavita Sarin's academic title** — using **"Professor of Dermatology"** per the Content Rewrite Addendum; the live site still says "Associate Professor." Confirm current title (appears on Team, her profile, and in structured data).
- **Technologies-page collaborator links** — names verified by web search (June 2026); each links to a **Stanford Profiles** page on the Technologies page. **Approve the link destinations:**
  - **Yonatan Winetraub** → `profiles.stanford.edu/yonatan-winetraub` (Stanford; OCT virtual-biopsy work).
  - **Guosong Hong** → `profiles.stanford.edu/guosong-hong` (Stanford MSE; Hong Lab — in-vivo optical transparency).
  - **Jonathan Liu** → `profiles.stanford.edu/jonliu`. **Note:** the Liu Lab **moved from UW to Stanford (Dept. of Pathology) in Summer 2025** — confirm preferred attribution now that he is at Stanford. Spelling/full name: **Jonathan T.C. Liu**.
  - **David Fiorentino** — spelling confirmed (not "Florentino"); confirm role.
- **"Jon Jiu Lab"** on the live Technologies page is almost certainly a typo for **"Jonathan Liu Lab"** — confirmed correction applied as **"Jonathan Liu and the Liu Lab"**.
- Team roster & alumni status (for the Team page) — confirm who is current vs. alumni.

## Metrics (homepage)
- **"140+ Publications"** — a PubMed author search (`Kavita Y Sarin[Author]`) returns **138**. Confirm the figure (or use an exact/safe number). Review annually.
- **"18+ Years in Patient Care"** and **"40+ Students and Trainees Mentored"** — confirm.

## Research scope
- **Systemic sclerosis** — named in the live Publications intro but no specific Sarin publication was found; **currently dropped per instruction.** Confirm it stays out (or provide a publication).
- **Neurodegeneration** — in the original spec's disease list; no live-site support; **omitted.** Confirm.
- **Skin as an Educational Interface / "Science Simplified"** — no verified program content; **dropped per instruction.** Confirm.
- **Hyperspectral Imaging** — in the redesign spec/mockup but **not** on the live Technologies page; currently **omitted.** Confirm whether it is an active method and, if so, provide a description.
- **Clinical-readiness wording** — NFX-179 / MEK inhibitor (phase 2a), remetinostat (HDAC), virtual biopsy, and KLEAR-OCT are presented as **research / clinical-study stage**, not available treatments. Confirm phrasing.

## Images & reuse rights
- **Official Stanford / Sarin Lab logo** — needed (currently a text lockup).
- **AI & Data Science** card image (homepage Technologies) is a **provisional iStock** neural-network graphic — replace with a real lab AI / skin-analysis visual, or confirm the license covers web use.
- **cNF-Vision image** (Research → Digital Sensor) is a static frame extracted from the lab's `cnfvision.gif`, showing **patient skin photographs** with segmented cutaneous neurofibromas. **Confirm patient consent / de-identification for public display.** Also confirm the full 3×3 montage is the preferred presentation versus a single cleaner segmentation panel.
- **3D Molecular Pathology** image (`molecular-3d.jpg`) is the lab-provided multiplex-fluorescence figure (`3Dmolecularpathology.png`; red nuclei / blue nerve fibers). Confirm it is the lab's own figure and cleared for web use.
- **Spatial Biology & Molecular Discovery** image (`molecular-pathology.jpg`) is the live-site "Spatial Phenotyping" image and **may be a vendor/marketing image — confirm reuse rights.**
- **Optical Clearing with KLEAR** image (`klear.jpg`) is the before/after panel the lab supplied (labeled C/D, 5 mm scale) — the **only KLEAR image available is 528×163 px (28 KB)**. It is displayed `object-contain` (no stretching) but leaves whitespace in the 4:3 frame. **Provide a higher-resolution original if one exists**, and confirm the panel is the lab's own figure (it looks like a publication figure).
- **Optical Imaging** image (`optical-imaging.jpg`) is a cropped OCT scan from a redesign-package asset — confirm acceptable or supply a preferred OCT image.
- **Recent Work thumbnails are representative research-area figures**, NOT the exact 2026-paper figures (see `docs/recent-work-image-map.md`). Confirm acceptable, or provide each paper's own figure. Journal figures from Cancer Cell/Elsevier need reuse confirmation; Science Advances & JCI Insight are CC-BY (attribution advised).
- **Stanford Medicine building photo** (intro band) — confirm approved for use.

## Contact & configuration
- **Formspree form ID** — needed to make the Contact form actually send (placeholder now).
- **Public lab email** `ahoj@stanford.edu` — confirm OK to display (already public on the live site).
- **Social accounts** — only **Instagram (@skinasasensor)** is verified active; LinkedIn / X / Facebook link to bare domains on the live site. Provide real URLs or omit.
- **Production domain** (for metadata / canonical / sitemap) — GitHub Pages URL vs. a custom domain.

## Copy
- Plain-language summaries / "why it matters" for featured publications — add only when supplied or approved.
