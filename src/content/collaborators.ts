import type { Collaborator } from "@/lib/types";

/**
 * Collaborators — grouped by domain. Names, titles, institutions, and Stanford
 * Profiles links verified June 2026 (web + live site). Spelling corrections
 * applied from the live site's typos: "Fiorentino" (not "Florentino"),
 * "Guosong" (not "Guoson").
 *
 * Shared-project notes:
 * - Winetraub / Hong / Liu: collaboration is documented on the (approved)
 *   Technologies page (optical imaging, KLEAR optical clearing, 3D molecular
 *   pathology) — described as verified here.
 * - Aasi / Fiorentino / Rieger: the live site does NOT describe a specific
 *   shared project. Their "sharedProject" below is stated at the research-area
 *   level and is flagged TODO: VERIFY — do not present as a specific funded
 *   project without confirmation (see CONTENT_REVIEW_NEEDED.md).
 */
export const COLLABORATORS: Collaborator[] = [
  // ---------------- Clinical & Translational ----------------
  {
    name: "Sumaira Z. Aasi",
    degree: "MD",
    title: "Professor of Dermatology · Director, Mohs & Dermatologic Surgery",
    institution: "Stanford University",
    category: "Clinical & Translational",
    expertise:
      "Mohs micrographic surgery and the management of high-risk non-melanoma skin cancers.",
    sharedProject:
      "Clinical and surgical skin-cancer expertise that informs the lab's skin-cancer and non-invasive imaging work.", // TODO: VERIFY specific shared project
    collaborationSummary:
      "Grounds the lab's imaging and genetics work in real surgical and clinical skin-cancer care.",
    url: "https://profiles.stanford.edu/sumaira-aasi",
    permissionConfirmed: false,
    lastVerified: "June 2026",
  },
  {
    name: "David Fiorentino",
    degree: "MD, PhD",
    title: "Professor of Dermatology",
    institution: "Stanford University",
    category: "Clinical & Translational",
    expertise:
      "Complex autoimmune and inflammatory skin disease, including dermatomyositis and systemic sclerosis; directs Stanford's multidisciplinary rheumatic skin disease clinic.",
    sharedProject:
      "Connects to the lab's autoimmune and systemic-disease research — reading skin signals of systemic inflammation.", // TODO: VERIFY specific shared project
    collaborationSummary:
      "Brings deep rheumatology–dermatology expertise to the question of how the skin reflects systemic disease.",
    url: "https://profiles.stanford.edu/david-fiorentino",
    permissionConfirmed: false,
    lastVerified: "June 2026",
  },
  {
    name: "Kerri E. Rieger",
    degree: "MD, PhD",
    title: "Clinical Professor of Dermatology & Pathology",
    institution: "Stanford University",
    category: "Clinical & Translational",
    expertise:
      "Dermatopathology — bridging clinical dermatology and tissue diagnosis, including cutaneous lymphoma and autoimmune disease.",
    sharedProject:
      "Pathology expertise that supports the lab's molecular-pathology and imaging–pathology correlation work.", // TODO: VERIFY specific shared project
    collaborationSummary:
      "Links what the lab sees in images and molecules back to the ground truth of tissue diagnosis.",
    url: "https://profiles.stanford.edu/kerri-rieger",
    permissionConfirmed: false,
    lastVerified: "June 2026",
  },

  // ---------------- Imaging & Engineering ----------------
  {
    name: "Yonatan Winetraub",
    degree: "PhD",
    institution: "Stanford University",
    category: "Imaging & Engineering",
    expertise:
      "Optical coherence tomography and machine learning for non-invasive, single-cell-resolution skin imaging.",
    sharedProject:
      "Optical imaging and OCT-based “virtual biopsy” of skin (see Technologies — Optical Imaging).",
    collaborationSummary:
      "Helps the lab see living skin at near-cellular resolution without removing tissue.",
    url: "https://profiles.stanford.edu/yonatan-winetraub",
    permissionConfirmed: false,
    lastVerified: "June 2026",
  },
  {
    name: "Guosong Hong",
    degree: "PhD",
    title: "Assistant Professor of Materials Science & Engineering",
    institution: "Stanford University",
    labName: "Hong Lab",
    category: "Imaging & Engineering",
    expertise:
      "Biophotonics and in-vivo optical transparency — controlling how light travels through living tissue.",
    sharedProject:
      "Optical clearing of skin with KLEAR, to image deeper, non-invasively (see Technologies — Optical Clearing with KLEAR).",
    collaborationSummary:
      "Extends the depth at which the lab's optical methods can read the skin.",
    url: "https://profiles.stanford.edu/guosong-hong",
    permissionConfirmed: false,
    lastVerified: "June 2026",
  },
  {
    name: "Jonathan Liu",
    degree: "PhD",
    title: "Professor of Pathology",
    institution: "Stanford University",
    labName: "Liu Lab (Molecular Biophotonics Laboratory)",
    category: "Imaging & Engineering",
    expertise:
      "Open-top light-sheet microscopy for non-destructive, three-dimensional imaging of intact tissue.",
    sharedProject:
      "3D molecular pathology of skin and tumors (see Technologies — 3D Molecular Pathology).",
    collaborationSummary:
      "Lets the lab study how cells and structures are organized across whole tissue volumes, not just thin sections.",
    url: "https://profiles.stanford.edu/jonliu",
    permissionConfirmed: false,
    lastVerified: "June 2026",
  },
];

/** Domain groupings shown on the Collaborators page (in order). */
export const COLLABORATOR_CATEGORY_ORDER: { category: string; blurb: string }[] = [
  {
    category: "Clinical & Translational",
    blurb:
      "Clinicians and pathologists who connect the lab's science to patient care and tissue diagnosis.",
  },
  {
    category: "Imaging & Engineering",
    blurb:
      "Engineers and imaging scientists who build the tools the lab uses to see and measure the skin.",
  },
];
