import type { Collaborator } from "@/lib/types";

/**
 * Collaborators — grouped by domain. Names, credentials, titles, institutions,
 * lab names, and profile links verified against official Stanford pages
 * (June 2026). Official Stanford profile photos in
 * public/images/collaborators/<slug>.jpg (originals in /originals; sources in
 * docs/collaborator-image-sources.md). Yonatan Winetraub's photo was supplied
 * by the lab. Each card carries one expertise sentence and one collaboration
 * sentence (no biographies).
 *
 * TODO: VERIFY before launch — the collaboration description for
 * Helen Bronte-Stewart (movement-disorders neurologist; the specific project
 * with the Sarin Lab is not independently confirmed).
 */
export const COLLABORATORS: Collaborator[] = [
  // ---------------- Clinical & Translational ----------------
  {
    name: "Sumaira Z. Aasi",
    degree: "MD",
    title: "Clinical Professor of Dermatology; Director of Mohs and Dermatologic Surgery",
    institution: "Stanford University",
    category: "Clinical & Translational",
    expertise:
      "Mohs micrographic surgery and the medical and surgical treatment of high-risk skin cancers.",
    collaboration:
      "Advises on skin-cancer diagnosis and surgical treatment for the lab's imaging and genetics studies.",
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
      "Guides the lab's work on how the skin reflects autoimmune and systemic disease activity.",
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
      "Provides the dermatopathology that ties imaging and molecular findings to tissue diagnosis.",
    url: "https://profiles.stanford.edu/kerri-rieger",
    image: "/images/collaborators/kerri-rieger.jpg",
    objectPosition: "50% 28%",
    permissionConfirmed: false,
    lastVerified: "June 2026",
  },
  {
    name: "Helen Bronte-Stewart",
    degree: "MD, MS",
    title: "Professor of Neurology and Neurological Sciences",
    institution: "Stanford University",
    labName: "Human Motor Control and Neuromodulation Laboratory",
    category: "Clinical & Translational",
    expertise:
      "Movement disorders and neuromodulation, with quantitative, sensor-based measurement of the motor signs of disease.",
    collaboration:
      "Contributes quantitative, sensor-based methods for measuring disease and clinical-trial outcomes.", // TODO: VERIFY specific collaboration
    url: "https://med.stanford.edu/profiles/helen-bronte-stewart",
    image: "/images/collaborators/helen-bronte-stewart.jpg",
    objectPosition: "50% 28%",
    permissionConfirmed: false,
    lastVerified: "June 2026",
  },
  {
    name: "Lorinda Chung",
    degree: "MD, MS",
    title:
      "Professor of Medicine (Immunology and Rheumatology) and, by courtesy, of Dermatology",
    institution: "Stanford University",
    labName: "Stanford Scleroderma Program",
    category: "Clinical & Translational",
    expertise:
      "Rheumatology and systemic sclerosis (scleroderma), including its skin and vascular manifestations.",
    collaboration:
      "Partners on systemic sclerosis and how the skin reflects rheumatologic disease.",
    url: "https://med.stanford.edu/profiles/lorinda-chung-md-ms",
    image: "/images/collaborators/lorinda-chung.jpg",
    objectPosition: "50% 28%",
    permissionConfirmed: false,
    lastVerified: "June 2026",
  },

  // ---------------- Imaging, Engineering & Data Science ----------------
  {
    name: "Yonatan Winetraub",
    degree: "PhD",
    title: "Instructor, Structural Biology",
    institution: "Stanford University",
    category: "Imaging, Engineering & Data Science",
    expertise:
      "Optical coherence tomography and machine learning for imaging skin at high resolution without a biopsy.",
    collaboration:
      "Develops the optical imaging and virtual-biopsy methods the lab uses to image skin.",
    url: "https://profiles.stanford.edu/yonatan-winetraub",
    image: "/images/collaborators/yonatan-winetraub.jpg",
    objectPosition: "50% 30%",
    permissionConfirmed: false,
    lastVerified: "June 2026",
  },
  {
    name: "Guosong Hong",
    degree: "PhD",
    title: "Assistant Professor of Materials Science and Engineering",
    institution: "Stanford University",
    labName: "Hong Lab",
    category: "Imaging, Engineering & Data Science",
    expertise:
      "Biophotonics and materials methods that make living tissue temporarily transparent to light.",
    collaboration:
      "Develops the optical clearing (KLEAR) that lets the lab image deeper into skin.",
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
    labName: "Molecular Biophotonics Laboratory",
    category: "Imaging, Engineering & Data Science",
    expertise:
      "Open-top light-sheet microscopy for non-destructive, three-dimensional imaging of intact tissue.",
    collaboration:
      "Provides the open-top light-sheet microscopy behind the lab's 3D molecular pathology.",
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
      "Develops advanced optical imaging approaches for visualizing skin structure and disease.",
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
      "Develops AI-based image analysis and multimodal methods for measuring skin disease.",
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
