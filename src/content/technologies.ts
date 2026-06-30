import type { Technology } from "@/lib/types";

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
    image: "/images/technologies/klear-oct.png",
    status: "research",
  },
  {
    slug: "high-resolution-optical-imaging",
    name: "High-Resolution Optical Imaging",
    shortDescription:
      "Imaging platforms that visualize the structure of living skin non-invasively, working toward virtual biopsies.",
    longDescription:
      "Beyond KLEAR-OCT, the lab develops a range of high-resolution optical imaging approaches to assess skin structure and function without traditional biopsy, supporting earlier detection and longitudinal monitoring of disease.",
    category: "Optical Imaging",
    image: "/images/technologies/optical-imaging.png",
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
    image: "/images/technologies/molecular-pathology.png",
    status: "research",
  },
  {
    slug: "ai-and-data-science",
    name: "Artificial Intelligence and Data Science",
    shortDescription:
      "AI-based segmentation, quantitative imaging analysis, multimodal integration, and predictive modeling for measuring disease.",
    longDescription:
      "The lab applies AI-based segmentation, quantitative imaging analysis, multimodal integration, and predictive modeling to handle the complexity of skin imaging. The emphasis is on quantitative disease measurement and longitudinal monitoring rather than simple automation.",
    category: "Computational Analysis",
    image: "/images/technologies/ai.png",
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
  TECHNOLOGIES[0], // KLEAR-OCT
  TECHNOLOGIES[2], // 3D Molecular Pathology
  TECHNOLOGIES[3], // AI and Data Science
];
