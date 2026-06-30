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
      "High-resolution, non-invasive optical imaging technologies—including OCT and KLEAR optical clearing—to reveal skin structure and disease at cellular and tissue scales.",
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

/** Technologies page intro. */
export const TECHNOLOGY_INTRO =
  "We build and apply tools that let us see, measure, and interpret signals in the skin. Our methods span high-resolution optical imaging, optical clearing, three-dimensional molecular pathology, spatial biology, and artificial intelligence. Most are research tools used in our studies, not clinical tests.";

/**
 * Technologies page programs (spec §14 / Addendum). Each states what it is,
 * the signal it measures, how it connects to skin, where it is applied, and
 * its status. Verified against the live site. Hyperspectral imaging and
 * "Science Simplified" are intentionally excluded (not part of the live work).
 * Kept separate from TECHNOLOGIES/HOMEPAGE_TECH so the frozen homepage is
 * unaffected.
 */
export const TECHNOLOGY_PROGRAMS: TechnologyProgram[] = [
  {
    slug: "optical-imaging",
    name: "Optical Imaging",
    shortName: "Optical Imaging",
    icon: "scan",
    image: "/images/technologies/optical-imaging.jpg",
    imageAlt: "Optical coherence tomography cross-sectional scan of skin.",
    whatItIs:
      "High-resolution optical imaging of living skin, including high-definition optical coherence tomography (OCT).",
    signal: "Tissue microstructure and light scattering, at near-cellular resolution.",
    connection: "Images living skin directly, without removing tissue.",
    appliedTo: ["Skin cancer", "Neurofibromatosis type 1"],
    status: "Research",
    collaboration: "High-definition OCT developed with Yonatan Winetraub.",
    researchHref: "/research#imaging",
    pubHref: "/publications?area=non-invasive-imaging",
  },
  {
    slug: "optical-transparency",
    name: "Optical Transparency of Skin (KLEAR)",
    shortName: "Optical Transparency",
    icon: "sparkles",
    image: "/images/technologies/klear.jpg",
    imageAlt:
      "Three-dimensional optical coherence tomography volume of skin imaged in depth.",
    whatItIs:
      "KLEAR, an optical clearing approach that makes skin tissue more transparent so light can travel deeper.",
    signal: "Improved light penetration and reduced scattering for deeper optical imaging.",
    connection: "Lets optical methods see further into the skin than they otherwise could.",
    appliedTo: ["Deeper non-invasive imaging", "Virtual biopsy"],
    status: "Research",
    collaboration: "Developed with Guosong Hong.",
    researchHref: "/research#imaging",
    pubHref: "/publications?area=non-invasive-imaging",
  },
  {
    slug: "3d-molecular-pathology",
    name: "3D Molecular Pathology",
    shortName: "3D Molecular Pathology",
    icon: "microscope",
    image: "/images/technologies/molecular-3d.jpg",
    imageAlt: "Three-dimensional reconstruction of skin tissue architecture.",
    whatItIs:
      "Volumetric tissue imaging that combines staining, three-dimensional imaging, and computational reconstruction.",
    signal: "Tissue architecture with molecular and cellular detail, in three dimensions.",
    connection:
      "Reconstructs intact skin and tumor tissue beyond two-dimensional histopathology.",
    appliedTo: ["Skin tumors", "Neurofibromas"],
    status: "Research",
    collaboration: "Developed with the Jonathan Liu Lab.",
    researchHref: "/research#molecular",
    pubHref: "/publications?area=skin-cancer",
  },
  {
    slug: "spatial-biology",
    name: "Spatial Biology & Molecular Discovery",
    shortName: "Spatial Biology",
    icon: "molecule",
    image: "/images/technologies/molecular-pathology.jpg",
    imageAlt:
      "Multiplex fluorescence image mapping molecular signals within skin tissue.",
    whatItIs:
      "Spatial transcriptomics, single-cell analysis, multiplex imaging, and molecular profiling of skin tissue.",
    signal: "Molecular signals mapped to their location within tissue.",
    connection: "Reveals disease-associated biomarkers inside the skin.",
    appliedTo: ["Autoimmune and inflammatory disease", "Skin cancer"],
    status: "Research",
    researchHref: "/research#molecular",
    pubHref: "/publications?area=autoimmune-and-systemic-disease",
  },
  {
    slug: "ai-and-data-science",
    name: "Artificial Intelligence & Computational Analysis",
    shortName: "AI & Computation",
    icon: "chip",
    image: "/images/research/digital.jpg",
    imageAlt:
      "cNF-Vision output: cutaneous neurofibromas segmented on skin photographs, with depth maps and three-dimensional reconstructions.",
    whatItIs:
      "AI-based image segmentation, quantitative analysis, multimodal integration, and predictive modeling, including cNF-Vision for measuring cutaneous neurofibromas.",
    signal: "Quantitative, repeatable measures derived from images and clinical data.",
    connection: "Turns skin photographs and scans into objective measurements.",
    appliedTo: ["Neurofibromatosis type 1", "Skin cancer", "Clinical-trial endpoints"],
    status: "Research",
    researchHref: "/research#digital",
    pubHref: "/publications?area=neurofibromatosis",
  },
];
