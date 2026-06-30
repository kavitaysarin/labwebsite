import type { GalleryImage } from "@/lib/types";

/**
 * Lab Photos gallery.
 *
 * IMPORTANT (see CONTENT_REVIEW_NEEDED.md): the live site's photo gallery is a
 * set of ~34–37 UNCAPTIONED, low-resolution / screenshot team & event snapshots
 * of IDENTIFIABLE people with no consent information. Those are intentionally
 * NOT bundled here — identity/consent is unclear. This starter gallery uses only
 * the lab's own rights-cleared scientific imagery (already shown on the approved
 * Home/Research/Technologies pages), with accurate captions. A curated,
 * consent-cleared set of team/event photos must be supplied before launch.
 *
 * TODO: VERIFY captions and confirm reuse rights for any figure that originated
 * in a journal publication (e.g. the virtual-biopsy pipeline).
 */
export const GALLERY: GalleryImage[] = [
  {
    src: "/images/technologies/klear.jpg",
    alt: "Two photographs of a skin sample side by side; the right one is translucent after KLEAR optical clearing, with a 5 mm scale bar.",
    caption: "Optical clearing with KLEAR — a skin sample before and after becoming transparent (5 mm scale).",
    category: "Imaging & Microscopy",
    featured: true,
  },
  {
    src: "/images/technologies/optical-imaging.jpg",
    alt: "Grayscale optical coherence tomography scan showing the layered cross-section of skin.",
    caption: "Optical coherence tomography reveals the layered structure of living skin, without a biopsy.",
    category: "Imaging & Microscopy",
  },
  {
    src: "/images/technologies/molecular-3d.jpg",
    alt: "Multiplex fluorescence image of skin tissue with cell nuclei in red and nerve fibers in blue on a dark background.",
    caption: "Multiplex fluorescence of skin — cell nuclei (red) and nerve fibers (blue).",
    category: "Imaging & Microscopy",
  },
  {
    src: "/images/technologies/molecular-pathology.jpg",
    alt: "Multiplex fluorescence image mapping molecular signals within skin tissue.",
    caption: "Spatial molecular imaging maps where different signals sit within skin tissue.",
    category: "Imaging & Microscopy",
  },
  {
    src: "/images/technologies/klear-oct.jpg",
    alt: "Multi-panel diagram of a virtual-biopsy pipeline: tissue excision, embedding, OCT volume scan, and matched fluorescence and histology sections.",
    caption: "The virtual-biopsy imaging pipeline, from an OCT volume scan to matched histology.",
    category: "Imaging & Microscopy",
  },
  {
    src: "/images/intro/stanford-building.jpg",
    alt: "Exterior of a Stanford Medicine building.",
    caption: "The lab is based at Stanford University School of Medicine.",
    category: "Lab & Campus",
  },
];

/** Distinct categories, in first-seen order (for the gallery filter). */
export const GALLERY_CATEGORIES: string[] = Array.from(
  new Set(GALLERY.map((g) => g.category)),
);
