import type { Collaborator } from "@/lib/types";

/**
 * Collaborators — grouped by domain. Names, titles, institutions, and profile
 * links verified against official Stanford pages (June 2026). Official Stanford
 * profile photos migrated to public/images/collaborators/<slug>.jpg (originals
 * in /originals; sources in docs/collaborator-image-sources.md). Winetraub has
 * no official profile photo — initials fallback. Each card carries one
 * expertise sentence and one collaboration sentence (no biographies).
 *
 * TODO: VERIFY before launch — exact current titles (especially Winetraub,
 * who has no listed faculty title) and the collaboration wording.
 */
export const COLLABORATORS: Collaborator[] = [
  // ---------------- Clinical & Translational ----------------
  {
    name: "Sumaira Z. Aasi",
    degree: "MD",
    title: "Professor of Dermatology; Director of Mohs and Dermatologic Surgery",
    institution: "Stanford University",
    category: "Clinical & Translational",
    expertise:
      "Mohs micrographic surgery and the medical and surgical treatment of high-risk skin cancers.",
    collaboration:
      "Works with the Sarin Lab on skin cancer, connecting clinical and surgical care with the lab's imaging and genetics research.",
    url: "https://profiles.stanford.edu/sumaira-aasi",
    image: "/images/collaborators/sumaira-aasi.jpg",
    objectPosition: "50% 28%",
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
      "Complex autoimmune and inflammatory skin diseases, including dermatomyositis and systemic sclerosis.",
    collaboration:
      "Works with the Sarin Lab on how the skin reflects autoimmune and systemic disease activity.",
    url: "https://profiles.stanford.edu/david-fiorentino",
    image: "/images/collaborators/david-fiorentino.jpg",
    objectPosition: "50% 30%",
    permissionConfirmed: false,
    lastVerified: "June 2026",
  },
  {
    name: "Kerri E. Rieger",
    degree: "MD, PhD",
    title: "Clinical Professor of Dermatology and Pathology",
    institution: "Stanford University",
    category: "Clinical & Translational",
    expertise:
      "Dermatopathology and the tissue diagnosis of cutaneous disease, including cutaneous lymphoma and autoimmune disease.",
    collaboration:
      "Works with the Sarin Lab to connect imaging and molecular findings to tissue diagnosis.",
    url: "https://profiles.stanford.edu/kerri-rieger",
    image: "/images/collaborators/kerri-rieger.jpg",
    objectPosition: "50% 28%",
    permissionConfirmed: false,
    lastVerified: "June 2026",
  },

  // ---------------- Imaging, Engineering & Data Science ----------------
  {
    name: "Yonatan Winetraub",
    degree: "PhD",
    institution: "Stanford University",
    category: "Imaging, Engineering & Data Science",
    expertise:
      "Optical coherence tomography and machine learning for imaging skin at high resolution without a biopsy.",
    collaboration:
      "Works with the Sarin Lab on optical imaging and virtual-biopsy methods for skin.",
    url: "https://profiles.stanford.edu/yonatan-winetraub",
    objectPosition: "50% 30%",
    permissionConfirmed: false,
    lastVerified: "June 2026",
  },
  {
    name: "Guosong Hong",
    degree: "PhD",
    title: "Assistant Professor of Materials Science and Engineering",
    institution: "Stanford University",
    category: "Imaging, Engineering & Data Science",
    expertise:
      "Biophotonics and materials methods that make living tissue temporarily transparent to light.",
    collaboration:
      "Works with the Sarin Lab on optical clearing (KLEAR) to image deeper into skin.",
    url: "https://profiles.stanford.edu/guosong-hong",
    image: "/images/collaborators/guosong-hong.jpg",
    objectPosition: "50% 30%",
    permissionConfirmed: false,
    lastVerified: "June 2026",
  },
  {
    name: "Jonathan Liu",
    degree: "PhD",
    title: "Professor of Pathology",
    institution: "Stanford University",
    category: "Imaging, Engineering & Data Science",
    expertise:
      "Open-top light-sheet microscopy for non-destructive, three-dimensional imaging of intact tissue.",
    collaboration:
      "Works with the Sarin Lab on 3D molecular pathology of skin and tumors.",
    url: "https://profiles.stanford.edu/jonliu",
    image: "/images/collaborators/jonathan-liu.jpg",
    objectPosition: "50% 30%",
    permissionConfirmed: false,
    lastVerified: "June 2026",
  },
  {
    name: "Adam de la Zerda",
    degree: "PhD",
    title:
      "Associate Professor of Structural Biology and of Electrical Engineering (by courtesy)",
    institution: "Stanford University",
    category: "Imaging, Engineering & Data Science",
    expertise:
      "Molecular and optical imaging technologies for studying biological structure and function.",
    collaboration:
      "Collaborates with the Sarin Lab on advanced optical imaging approaches for visualizing skin structure and disease.",
    url: "https://med.stanford.edu/delazerda/adam-de-la-zerda.html",
    image: "/images/collaborators/adam-de-la-zerda.jpg",
    objectPosition: "50% 30%",
    permissionConfirmed: false,
    lastVerified: "June 2026",
  },
  {
    name: "Olivier Gevaert",
    degree: "PhD",
    title:
      "Associate Professor of Medicine (Computational Medicine) and of Biomedical Data Science",
    institution: "Stanford University",
    category: "Imaging, Engineering & Data Science",
    expertise:
      "Machine learning and biomedical data fusion across imaging, pathology, and molecular data.",
    collaboration:
      "Collaborates with the Sarin Lab on AI-based image analysis and multimodal approaches for measuring skin disease.",
    url: "https://profiles.stanford.edu/olivier-gevaert",
    image: "/images/collaborators/olivier-gevaert.jpg",
    objectPosition: "50% 30%",
    permissionConfirmed: false,
    lastVerified: "June 2026",
  },
];

/** Domain category headings shown on the Collaborators page (in order). */
export const COLLABORATOR_CATEGORY_ORDER: string[] = [
  "Clinical & Translational",
  "Imaging, Engineering & Data Science",
];
