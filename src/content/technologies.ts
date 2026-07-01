import type { Technology, TechnologyProgram } from "@/lib/types";

/**
 * Technologies — descriptions adapted (lightly edited for clarity) from the
 * live Technologies page. Only methods genuinely described by the lab are
 * included (spec §14: do not include tech that only appeared in a mockup).
 *
 * `featured: true` would surface a card on the homepage; the homepage set is
 * defined in HOMEPAGE_TECH below.
 *
 * NOTE: "Hyperspectral Imaging" appears in the redesign spec/mockup but is not
 * described on the current live Technologies page — it is flagged in
 * content-review-needed.md pending confirmation, and is intentionally omitted
 * here rather than fabricated.
 */
export const TECHNOLOGIES: Technology[] = [
  {
    slug: "klear-oct",
    name: "KLEAR-OCT",
    shortDescription:
      "High-definition optical coherence tomography combined with KLEAR optical clearing to image living skin at near-cellular resolution.",
    longDescription:
      "A major focus of the lab is developing imaging platforms that visualize living skin at near-cellular resolution. KLEAR-OCT pairs high-definition optical coherence tomography with KLEAR, an optical clearing technology, to create “virtual biopsies” — non-invasive assessments of tissue that can be repeated over time without removing skin.",
    category: "Optical Imaging",
    image: "/images/technologies/klear-oct.jpg",
    imageAlt:
      "Optical coherence tomography, fluorescence, and histology panels from a virtual-biopsy imaging pipeline.",
    status: "research",
  },
  {
    slug: "optical-imaging",
    name: "Optical Imaging",
    shortDescription:
      "High-resolution, non-invasive optical imaging technologies, including OCT and optical clearing, to reveal skin structure and disease at cellular and tissue scales.",
    longDescription:
      "The lab develops high-resolution optical imaging to assess living skin without traditional biopsy. This program spans optical coherence tomography (OCT), high-definition OCT, KLEAR-OCT, optical clearing, and imaging–pathology correlation, working toward non-invasive “virtual biopsies” for earlier detection and longitudinal monitoring.",
    category: "Optical Imaging",
    image: "/images/technologies/optical-imaging.jpg",
    imageAlt:
      "Optical coherence tomography cross-sectional scan showing the layered structure of skin.",
    status: "research",
  },
  {
    slug: "3d-molecular-pathology",
    name: "3D Molecular Pathology",
    shortDescription:
      "Studying intact tissue architecture alongside molecular and cellular data to see how skin structures are organized in three dimensions.",
    longDescription:
      "Developed in collaboration with the Jonathan Liu Lab, 3D molecular pathology studies intact tissue architecture alongside molecular and cellular data. Unlike traditional two-dimensional histopathology, it reveals how nerves, immune cells, blood vessels, tumors, and other structures are organized across larger tissue volumes.",
    category: "Molecular Pathology",
    image: "/images/technologies/molecular-pathology.jpg",
    imageAlt:
      "Multiplex fluorescence image of tissue revealing cellular and molecular organization.",
    status: "research",
  },
  {
    slug: "ai-and-data-science",
    name: "Artificial Intelligence & Data Science",
    shortDescription:
      "AI-based image analysis, quantitative phenotyping, multimodal integration, and predictive modeling for measuring disease.",
    longDescription:
      "The lab applies AI-based segmentation, quantitative imaging analysis, multimodal integration, and predictive modeling to handle the complexity of skin imaging. The emphasis is on quantitative disease measurement and longitudinal monitoring rather than simple automation.",
    category: "Computational Analysis",
    // PLACEHOLDER IMAGE (spec §11): licensed iStock neural-network graphic
    // reused from the live site. Replace with a real lab AI / skin-analysis
    // visual (e.g. segmentation overlay, digital-pathology feature map) when available.
    image: "/images/technologies/ai-data-science.jpg",
    imageAlt:
      "Abstract neural-network diagram representing artificial intelligence and data analysis.",
    status: "research",
  },
  {
    slug: "spatial-biology",
    name: "Spatial Biology and Molecular Discovery",
    shortDescription:
      "Spatial transcriptomics, single-cell analysis, multiplex imaging, and molecular profiling to find disease biomarkers in skin.",
    longDescription:
      "This approach combines spatial transcriptomics, single-cell analysis, multiplex imaging, quantitative histopathology, and molecular profiling to identify disease biomarkers within skin tissue and to understand immune, neural, stromal, and vascular changes.",
    category: "Molecular Discovery",
    image: "/images/technologies/spatial-biology.png",
    status: "research",
  },
];

/** Three cards featured on the homepage "Tools & Technologies" section. */
export const HOMEPAGE_TECH: Technology[] = [
  TECHNOLOGIES[1], // Optical Imaging (broader program; features KLEAR-OCT)
  TECHNOLOGIES[2], // 3D Molecular Pathology
  TECHNOLOGIES[3], // AI and Data Science
];

/**
 * FROZEN (QA-passed 2026-06-29) — Technologies page content below
 * (TECHNOLOGY_INTRO + TECHNOLOGY_PROGRAMS). Approved copy; do not edit without
 * re-approval. See docs/DESIGN_SYSTEM_FROZEN.md.
 */
/** Technologies page intro (two short paragraphs). */
export const TECHNOLOGY_INTRO: string[] = [
  "We develop and apply technologies that allow us to see, measure, and interpret signals in the skin. Our work spans big data analysis, optical imaging, optical clearing, three-dimensional tissue analysis, spatial biology, and artificial intelligence.",
];

/**
 * Technologies page programs (spec §14 / Addendum). Each has a short
 * description, a single "what it reveals" line, up to three application tags,
 * and an optional "In collaboration with …" line. Verified against the live
 * site. Hyperspectral imaging and "Science Simplified" are intentionally
 * excluded (not part of the live work). Kept separate from
 * TECHNOLOGIES/HOMEPAGE_TECH so the frozen homepage is unaffected.
 */
export const TECHNOLOGY_PROGRAMS: TechnologyProgram[] = [
  {
    slug: "optical-imaging",
    name: "Optical Imaging",
    shortName: "Optical Imaging",
    icon: "scan",
    image: "/images/technologies/damae.jpg",
    imageAlt:
      "A DAMAE Medical deepLive optical imaging system used to examine skin non-invasively.",
    lead: "We use high-resolution optical imaging, including optical coherence tomography, to examine living skin without removing tissue.",
    whatItReveals: "Skin structure and light scattering at near-cellular resolution.",
    appliedTo: ["Skin cancer", "Neurofibromatosis type 1"],
    collaborators: [
      { name: "Yonatan Winetraub", url: "https://profiles.stanford.edu/yonatan-winetraub" },
    ],
    researchHref: "/research#imaging",
    pubHref: "/publications#optical-imaging",
  },
  {
    slug: "optical-transparency",
    name: "Optical Clearing",
    shortName: "Optical Clearing",
    icon: "sparkles",
    image: "/images/technologies/klear.jpg",
    imageAlt:
      "Before-and-after photographs of a skin sample made optically transparent by optical clearing (5 mm scale).",
    fit: "contain",
    lead: "Optical clearing technologies use refractive index manipulation to reduce light scattering in skin, allowing visualization of deeper tissue structures.",
    whatItReveals: "Structures below the usual imaging depth of standard optical methods.",
    appliedTo: [
      "Deeper non-invasive imaging",
      "Optical imaging research",
      "Light-based therapy research",
    ],
    collaborators: [
      { name: "Guosong Hong", url: "https://profiles.stanford.edu/guosong-hong" },
    ],
    researchHref: "/research#imaging",
    pubHref: "/publications#optical-imaging",
  },
  {
    slug: "3d-molecular-pathology",
    name: "3D Molecular Pathology",
    shortName: "3D Molecular Pathology",
    icon: "microscope",
    image: "/images/technologies/molecular-3d.jpg",
    imageAlt:
      "Multiplex fluorescence image of skin tissue, with cell nuclei in red and nerve fibers in blue.",
    lead: "We combine tissue staining, three-dimensional imaging, and computational reconstruction to study intact skin and tumor architecture.",
    whatItReveals:
      "The spatial organization of cells, structures, and molecular signals within tissue.",
    appliedTo: ["Skin tumors", "Neurofibromas", "Imaging-pathology comparison"],
    collaborators: [
      { name: "Jonathan Liu", url: "https://profiles.stanford.edu/jonliu" },
    ],
    researchHref: "/research#molecular",
    pubHref: "/publications#skin-cancer-genetics",
  },
  {
    slug: "spatial-biology",
    name: "Spatial Biology & Molecular Discovery",
    shortName: "Spatial Biology",
    icon: "molecule",
    image: "/images/technologies/molecular-pathology.jpg",
    imageAlt:
      "Multiplex fluorescence image mapping molecular signals within skin tissue.",
    lead: "We use spatial transcriptomics, single-cell analysis, multiplex imaging, and molecular profiling to study how cells and biomarkers are organized within skin tissue.",
    whatItReveals:
      "The location and relationships of molecular and cellular signals within tissue.",
    appliedTo: [
      "Autoimmune and inflammatory disease",
      "Skin cancer",
      "Biomarker discovery",
    ],
    researchHref: "/research#molecular",
    pubHref: "/publications#autoimmune-systemic",
  },
  {
    slug: "ai-and-data-science",
    name: "AI & Computational Analysis",
    shortName: "AI & Computation",
    icon: "chip",
    image: "/images/research/digital.jpg",
    imageAlt:
      "cNF-Vision output: cutaneous neurofibromas segmented on skin photographs, with depth maps and three-dimensional reconstructions.",
    lead: "We use artificial intelligence and quantitative image analysis to measure disease from clinical photographs, optical images, and pathology data.",
    whatItReveals:
      "Reproducible measurements of lesion number, disease burden, and treatment response.",
    appliedTo: ["Neurofibromatosis type 1", "Skin cancer", "Clinical-trial endpoints"],
    collaborators: [
      { name: "Olivier Gevaert", url: "https://profiles.stanford.edu/olivier-gevaert" },
    ],
    researchHref: "/research#digital",
    pubHref: "/publications#neurofibromatosis",
  },
];
