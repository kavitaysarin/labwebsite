import type { Feature } from "@/lib/types";

/** Homepage intro copy (spec §9). */
export const LAB_INTRO =
  "The Sarin Lab combines dermatology, genetics, molecular biology, imaging, and artificial intelligence to discover signals in the skin and translate them into better approaches for earlier detection, monitoring, and treatment.";

/** "Why Skin?" — four pillars (spec §9). */
export const WHY_SKIN: Feature[] = [
  {
    title: "Visible",
    description: "Skin changes can be observed directly and non-invasively.",
    icon: "eye",
  },
  {
    title: "Accessible",
    description:
      "Skin can be imaged and sampled with relatively low burden to patients.",
    icon: "hand",
  },
  {
    title: "Information-rich",
    description:
      "Skin contains molecular, cellular, neural, vascular, immune, and genetic signals.",
    icon: "molecule",
  },
  {
    title: "Easy to monitor over time",
    description:
      "Repeated measurements can track disease progression and treatment response.",
    icon: "clock",
  },
];

/** "Our Research Approach" — four signal types (spec §9). */
export const RESEARCH_APPROACH: Feature[] = [
  {
    title: "Genetic Signals",
    description:
      "Identify inherited and acquired variants that influence disease risk and severity.",
    icon: "dna",
  },
  {
    title: "Molecular Signals",
    description:
      "Profile RNA, proteins, immune pathways, and other biomarkers that reveal disease biology.",
    icon: "molecule",
  },
  {
    title: "Imaging Signals",
    description:
      "Capture structure and function from the cellular to tissue scale.",
    icon: "scan",
  },
  {
    title: "Digital Signals",
    description:
      "Apply artificial intelligence and data science to detect patterns and measure outcomes.",
    icon: "chip",
  },
];
