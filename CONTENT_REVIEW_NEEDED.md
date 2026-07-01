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
- **Logo** — the header/footer now use the **official Stanford Medicine emblem**, reversed to white for the cardinal background (from the supplied `stanfordmedicinelogo.png`). "Sarin Lab" remains a text wordmark beside it — provide a dedicated Sarin Lab logo if one exists. Confirm the reversed treatment is acceptable for Stanford brand use.
- **AI & Data Science** card image (homepage Technologies) is a **provisional iStock** neural-network graphic — replace with a real lab AI / skin-analysis visual, or confirm the license covers web use.
- **cNF-Vision image** (Research → Digital Sensor) is a static frame extracted from the lab's `cnfvision.gif`, showing **patient skin photographs** with segmented cutaneous neurofibromas. **Confirm patient consent / de-identification for public display.** Also confirm the full 3×3 montage is the preferred presentation versus a single cleaner segmentation panel.
- **3D Molecular Pathology** image (`molecular-3d.jpg`) is the lab-provided multiplex-fluorescence figure (`3Dmolecularpathology.png`; red nuclei / blue nerve fibers). Confirm it is the lab's own figure and cleared for web use.
- **Spatial Biology & Molecular Discovery** image (`molecular-pathology.jpg`) is the live-site "Spatial Phenotyping" image and **may be a vendor/marketing image — confirm reuse rights.**
- **Optical Clearing with KLEAR** image (`klear.jpg`) is the before/after panel the lab supplied (labeled C/D, 5 mm scale) — the **only KLEAR image available is 528×163 px (28 KB)**. It is displayed `object-contain` (no stretching) but leaves whitespace in the 4:3 frame. **Provide a higher-resolution original if one exists**, and confirm the panel is the lab's own figure (it looks like a publication figure).
- **Optical Imaging** image (`optical-imaging.jpg`) is a cropped OCT scan from a redesign-package asset — confirm acceptable or supply a preferred OCT image.
- **Recent Work thumbnails are representative research-area figures**, NOT the exact 2026-paper figures (see `docs/recent-work-image-map.md`). Confirm acceptable, or provide each paper's own figure. Journal figures from Cancer Cell/Elsevier need reuse confirmation; Science Advances & JCI Insight are CC-BY (attribution advised).
- **Homepage "Recent Work" — 3rd featured paper thumbnail is a CLINICAL PATIENT PHOTO.** The featured set now ends with *"Phenotypic characterization of neurofibromatosis type 1 in a large Chinese cohort"* (JAAD International, PMID 41399671); per request (2026-07-01) its card uses a lab-supplied clinical photograph (`chinesenf.jpg`) of a patient's back covered in cutaneous neurofibromas (face not shown, but the body/condition is identifiable). **Confirm patient consent / de-identification for public web display, and reuse rights** (it looks like a figure from the paper). It replaced the Nef-ASI paper (still listed, unfeatured).
- **Research "Skin as an Imaging Sensor" OCT image** (`/images/research/oct-scan.jpg`, 2026-07-01) is the left (OCT) panel cropped from the lab-supplied `octimage.png` OCT-vs-histology figure. Confirm it is the lab's own figure and cleared for web use.
- **Stanford Medicine building photo** (intro band) — confirm approved for use.

## Contact & configuration
- **Formspree form ID** — needed to make the Contact form actually send (placeholder now).
- **Public lab email** `ahoj@stanford.edu` — confirm OK to display (already public on the live site).
- **Social accounts** — only **Instagram (@skinasasensor)** is verified active; LinkedIn / X / Facebook link to bare domains on the live site. Provide real URLs or omit.
- **Production domain** (for metadata / canonical / sitemap) — GitHub Pages URL vs. a custom domain.

## Copy
- Plain-language summaries / "why it matters" for featured publications — add only when supplied or approved.

---

## Overnight draft pages (built 2026-06-29 on `feature/remaining-pages-draft` — NOT approved)

### Publications — APPROVED (curated Selected Publications model)
- **No remaining citation uncertainty.** All **20** selected publications are curated from the live Sarin Lab site and verified against PubMed; every PMID and DOI resolves (checked 2026-06-30). Authors shown as first author + "et al."; journal names normalized to standard display form. Featured 3 are image-free (no figure-permission items on this page).
- **Curated subset (by design):** the page is a highlight (~20 papers), not the full archive; the complete list is the PubMed author link. The selection can be edited at any time via `PUBLICATIONS_MAINTENANCE.md`.
- **Minor, optional:** review annually and when major papers publish; the "molecular-digital" section remains unused (no live-site grouping) and can be added later if desired.
- Deferred (post-launch, not launch blockers): full database/archive, search/filters/pagination, and the automated PubMed sync system (see `PROJECT_STATUS.md`).

### Team (redesigned 2026-06-30 — unified egalitarian grid)
- **Headshots migrated** from the live site for all 14 members (matched by page order; full inventory in `docs/team-image-sources.md`). **All source images are low-resolution** (Squarespace originals; e.g. Kavita 300×381, **Juniper 150×244 very low-res**) — request higher-res originals where available. **Sharon Loa & Valerie Ta are screenshot-derived** images — confirm or replace.
- **No headshot (initials fallback):** Sally Glaser, Margarita Golod (volunteers; live site used a placeholder).
- **Uncertain image→person matches:** none flagged — positional matches are anchored by self-identifying filenames; still, a human should confirm faces match names before launch.
- **Alumni roster:** live site shows Medicine / Industry / Research headings but **no retrievable names** — supply the alumni list (the Alumni filter shows an honest "coming soon" note).
- **Title/role flags:** Dr. Sarin (now **Principal Investigator · Professor of Dermatology**, MD, PhD; live site said Associate Professor / Lab Director); Marlayna Harris (set to **Clinical Research Coordinator** per request — not stated on live site, confirm); Haniya vs "Haniyah" spelling; Chenming Zhang vs email `czheng8@`; Audris Chang vs "Chiang" (image filename); Nethra Srinivasan (set to **Medical Student** per request — live site said B.S. candidate at Case Western; confirm current program).
- **Filter labels** to review: "Faculty" maps to the PI; confirm wording (All / Faculty / Staff / Trainees / Students / Volunteers / Alumni).

### Collaborators (revised 2026-06-30 — 10 collaborators, 2 groups, official photos)
- **All 10 now have portraits.** Nine are official Stanford CAP profile photos (**350×350** — CAP's max; slightly soft on 2× displays); **Yonatan Winetraub** uses a **lab-supplied** high-res photo (1880×1880). No missing portraits. Sources in `docs/collaborator-image-sources.md`.
- **Reuse permission:** confirm each collaborator is OK with their official Stanford profile photo being reused on the lab site (Winetraub's is lab-supplied — confirm it's cleared).
- **Two collaborators added to Clinical & Translational per request:** **Helen Bronte-Stewart, MD, MS** (Professor of Neurology and Neurological Sciences) and **Lorinda Chung, MD, MS** (Professor of Medicine, Immunology & Rheumatology, and by courtesy of Dermatology) — titles verified against med.stanford.edu.
- **Collaboration needing verification:** **Helen Bronte-Stewart** — she is a movement-disorders neurologist; the specific collaboration with the Sarin Lab is not independently confirmed. Current card sentence is domain-level ("quantitative, sensor-based methods for measuring disease and clinical-trial outcomes") — please confirm or supply the real project.
- **All titles verified** against official Stanford pages (2026-06-30): Aasi = "Clinical Professor of Dermatology; Director of Mohs and Dermatologic Surgery"; Fiorentino = "Professor of Dermatology"; Rieger = "Clinical Professor of Dermatology and Pathology"; Winetraub = "Instructor, Structural Biology"; Chung & Bronte-Stewart per med.stanford.edu; Hong/Liu per Stanford Profiles; de la Zerda & Gevaert per supplied titles.
- **Collaboration sentences** rewritten to be direct (no repeated "Works with / Collaborates with the Sarin Lab"). Approve the wording for each.
- **Profile links:** Stanford Profiles for most; de la Zerda, Bronte-Stewart, and Chung link to their `med.stanford.edu` profiles (per request / verified). Confirm destinations.

### Lab Photos — page APPROVED & FINALIZED 2026-06-30 (layout/design frozen; the content items below remain pre-launch confirmations)
- **36 photos** total (31 carousel + 5 lab-supplied). Removed after review: **2 near-duplicates** (lp-18 ≈ lp-17 standing group; lp-21 ≈ lp-20 kitchen event) and **1 non-photo** (lp-08, a decorative map illustration). Then, **per lab request (2026-06-30), 4 more removed:** the Kavita-Sarin banner photo (lp-06), the green-apron cooking-class dinner (lp-20), and the two individual poster photos of Michelle Lin (lp-new-03) and Nethra Srinivasan (lp-new-06). Full inventory in `LAB_PHOTO_INVENTORY.md`. No scientific figures/OCT/histology/publication graphics. Masonry (natural proportions), four categories, "Load More", accessible lightbox with swipe.
- **Identification & consent:** every people photo shows identifiable lab members; no individuals named. **Confirm consent to display publicly.**
- **Uncertain captions to review** (generic placeholders): lp-03, lp-14, lp-15, lp-16, lp-26, lp-27 ("Sarin Lab members / gathering"). **Filename-derived captions to confirm:** lp-22 ("The Sarin Lab, 2023."), lp-35 ("…Society for Investigative Dermatology meeting, 2024."), lp-11 (Halloween), lp-24 (lunch), lp-25 (drinks).
- **Low-resolution to replace if better versions exist:** lp-12, lp-14, lp-15, lp-16, lp-27, lp-35 (see inventory).
- **5 lab-supplied photos remain** (2026-06-30), shown first: bowling outing, a milkshake-bar outing, a group at a Stanford mural, a restaurant dinner, and a main-stage conference talk. (The two individual poster photos of **Michelle Lin** and **Nethra Srinivasan** were removed per lab request, along with the Kavita-Sarin banner photo and the green-apron cooking-class dinner.) Captions are generic (people not named).

### Contact — APPROVED & FINALIZED 2026-07-01 (Web3Forms; end-to-end delivery confirmed)
- **Provider = Web3Forms**, delivery inbox = **`ksarin@stanford.edu`**. A real end-to-end test message was **confirmed delivered by the lab (2026-07-01)** — the form is live in local/preview builds. Full guide: `CONTACT_FORM_MAINTENANCE.md`.
- **REMAINING for deployment only:** the key lives in local `.env.local`; set `NEXT_PUBLIC_WEB3FORMS_KEY` as a **production build secret** (GitHub Actions) so the deployed site carries it. Without it, the deployed form safely falls back to its "not connected — email us" draft notice (never a broken/faked send).
- **No secrets committed.** The key is public-by-design but still kept out of git (`.env*` gitignored except `.env.example`).
- **Displayed public email** stays `ahoj@stanford.edu` (Juniper Aho / lab inbox) — separate from the delivery inbox. Confirm OK as the public contact. **Phone `(650) 497-8006` and the address** are used in `tel:`/map links — verify before launch.
- **MISSING: Stanford giving / donation page URL.** The **"Support Our Lab"** card (which replaced the Patient & Clinical card, 2026-06-30) currently **scrolls to the form and preselects "Supporting the Lab"** because no approved giving page exists. **Provide the verified Stanford giving URL** and the card will link directly to it instead (no donation URL was invented). Reason options are now: Joining the Lab / Research Collaboration / Supporting the Lab / General Inquiry.
- **Clinical questions are no longer a form option or a card.** A concise clinical disclaimer remains near the cards: "The Sarin Lab cannot provide medical advice or schedule appointments through this website. For clinical care, contact Stanford Health Care Dermatology. In an emergency, call 911." — **Stanford Health Care Dermatology** links to `stanfordhealthcare.org/medical-clinics/dermatology-clinic.html` (resolves 200); confirm this is the preferred clinical path.
- **Confirmation auto-reply** to the sender (spec §7) needs a **Web3Forms paid plan** (dashboard setting, suggested copy in the maintenance doc) — currently not enabled.
- **"Follow us" row removed** from the Contact page (Instagram is already in the footer, per spec §13). Only Instagram is shown site-wide; provide real LinkedIn/X/Facebook URLs to add them.
