import type { Feature, ResearchPillar } from "@/lib/types";

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

/** Research page framing intro (two short paragraphs). */
export const RESEARCH_INTRO: string[] = [
  "Skin is visible, accessible, and easy to study over time. We use genetic, molecular, imaging, and digital tools to find disease signals in the skin and measure how they change.",
  "These approaches guide our work in skin cancer, neurofibromatosis, autoimmune disease, and other conditions where the skin reveals important information about health.",
];

const PUBMED = (pmid: string) => `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`;
export { PUBMED };

/**
 * Research pillars (spec §17 / Addendum).
 *
 * The Research PAGE renders only: image, eyebrow, title, lead, up to three
 * projects, and a "View related publications" link (`pubHref`). The additional
 * verified fields (applications, technologies, publications, collaborators,
 * established/exploring) are PRESERVED here for the future Publications,
 * Technologies, and Collaborators pages — not rendered on the Research page.
 *
 * Excluded by decision: "Skin as an Educational Interface", neurodegeneration.
 */
export const RESEARCH_PILLARS: ResearchPillar[] = [
  {
    slug: "genetic",
    signal: "Genetic Signals",
    title: "Skin as a Genetic Sensor",
    icon: "dna",
    image: "/images/research/genetic.jpg",
    imageAlt:
      "Stylized DNA double helix representing genetic analysis of the skin.",
    lead: "Genetic changes shape a person's risk of skin disease and how tumors behave. We study patients, tumors, and skin findings to identify inherited and acquired variants linked to skin cancer, neurofibromatosis type 1, and treatment response.",
    pubHref: "/publications?area=skin-cancer",
    projects: [
      "Identifying genetic factors associated with basal and squamous cell carcinoma risk",
      "Studying genes that influence tumor development and treatment response",
      "Defining genetic factors associated with cutaneous neurofibroma burden in NF1",
    ],
    // Preserved for future pages (not rendered on the Research page):
    applications: ["Skin cancer", "Neurofibromatosis type 1"],
    technologies: [
      { label: "AI & Data Science", href: "/technologies#ai-and-data-science" },
      { label: "Spatial Biology & Molecular Discovery", href: "/technologies#spatial-biology" },
    ],
    publications: [
      {
        title:
          "Loss-of-function variants in the tumor-suppressor gene PTPN14 confer increased cancer risk",
        journal: "Cancer Research",
        year: 2021,
        pmid: "33602785",
      },
      {
        title:
          "Association study of genetic variation in DNA repair pathway genes and risk of basal cell carcinoma",
        journal: "International Journal of Cancer",
        year: 2017,
        pmid: "28510302",
      },
    ],
    collaborators: {
      label: "Genetics, Genomics & Cancer Biology collaborators",
      href: "/collaborators",
    },
    established:
      "Specific inherited variants and risk loci are linked to basal cell carcinoma risk.",
    exploring:
      "Whether genetic risk scores can guide earlier screening and prevention.",
  },
  {
    slug: "molecular",
    signal: "Molecular Signals",
    title: "Skin as a Molecular Sensor",
    icon: "molecule",
    image: "/images/technologies/molecular-pathology.jpg",
    imageAlt:
      "Multiplex fluorescence image of skin tissue revealing molecular and cellular organization.",
    lead: "Skin contains molecular and immune signals that can reflect disease activity and response to treatment. We analyze RNA, proteins, immune pathways, and tissue structure to identify biomarkers in autoimmune and inflammatory skin disease.",
    pubHref: "/publications?area=autoimmune-and-systemic-disease",
    projects: [
      "Measuring molecular signatures in dermatomyositis, lupus, and systemic sclerosis",
      "Studying inflammatory pathways in hidradenitis suppurativa and related disorders",
      "Identifying tissue biomarkers associated with disease activity and treatment response",
    ],
    applications: [
      "Dermatomyositis",
      "Lupus",
      "Systemic sclerosis",
      "Hidradenitis suppurativa",
      "Epidermolysis bullosa simplex",
    ],
    technologies: [
      { label: "3D Molecular Pathology", href: "/technologies#3d-molecular-pathology" },
      { label: "Spatial Biology & Molecular Discovery", href: "/technologies#spatial-biology" },
    ],
    publications: [
      {
        title:
          "The type I interferon signature reflects multiple phenotypic and activity measures in dermatomyositis",
        journal: "Arthritis & Rheumatology",
        year: 2023,
        pmid: "37096447",
      },
      {
        title:
          "The P2X7-NLRP3 inflammasome inhibitor AZD9056 in hidradenitis suppurativa: results of a phase 2 trial",
        journal: "Journal of the American Academy of Dermatology",
        year: 2026,
        pmid: "41022330",
      },
    ],
    collaborators: {
      label: "Molecular Profiling, Immunology & Pathology collaborators",
      href: "/collaborators",
    },
    established:
      "Molecular signatures correlate with disease activity in inflammatory and systemic disease.",
    exploring:
      "Using those signatures to guide treatment, with candidate targets advancing into early-phase trials.",
  },
  {
    slug: "imaging",
    signal: "Imaging Signals",
    title: "Skin as an Imaging Sensor",
    icon: "scan",
    image: "/images/technologies/optical-imaging.jpg",
    imageAlt:
      "Optical coherence tomography cross-sectional scan showing the layered structure of skin.",
    lead: "Non-invasive imaging allows us to examine skin structure and function without relying only on biopsy. We develop and apply optical imaging methods, including optical coherence tomography and KLEAR optical clearing, to visualize disease at cellular and tissue scales.",
    pubHref: "/publications?area=non-invasive-imaging",
    projects: [
      "Using OCT to detect and monitor skin cancer",
      "Increasing optical imaging depth with KLEAR",
      "Comparing non-invasive imaging with histology and 3D tissue pathology",
    ],
    applications: ["Skin cancer", "Neurofibromatosis type 1"],
    technologies: [
      { label: "Optical Imaging (OCT, KLEAR-OCT)", href: "/technologies#optical-imaging" },
      { label: "3D Molecular Pathology", href: "/technologies#3d-molecular-pathology" },
    ],
    publications: [
      {
        title:
          "Noninvasive virtual biopsy using micro-registered optical coherence tomography (OCT) in human subjects",
        journal: "Science Advances",
        year: 2024,
        pmid: "38598626",
      },
      {
        title:
          "Rapid cellular-resolution skin imaging with optical coherence tomography using all-glass multifocal metasurfaces",
        journal: "ACS Nano",
        year: 2023,
        pmid: "36745734",
      },
    ],
    collaborators: {
      label: "Imaging, Optics & Engineering collaborators",
      href: "/collaborators",
    },
    established:
      "OCT can image skin microstructure at near-cellular resolution.",
    exploring:
      "Validating OCT-based virtual biopsy to complement tissue biopsy (a research goal, not a clinical replacement).",
  },
  {
    slug: "digital",
    signal: "Digital Signals",
    title: "Skin as a Digital Sensor",
    icon: "chip",
    image: "/images/research/digital.jpg",
    imageAlt:
      "Optical coherence tomography scan of skin annotated with measurement markers and regions of interest.",
    lead: "Digital tools can turn photographs and imaging data into quantitative measures of disease. We use artificial intelligence and image analysis to count lesions, measure disease burden, and develop more reliable outcomes for clinical research.",
    pubHref: "/publications?area=neurofibromatosis",
    projects: [
      "Developing cNF-Vision to measure cutaneous neurofibroma burden",
      "Using longitudinal and whole-body imaging to track disease over time",
      "Automating the measurement of skin lesions and treatment response",
    ],
    applications: ["Neurofibromatosis type 1", "Skin cancer"],
    technologies: [
      { label: "AI & Data Science", href: "/technologies#ai-and-data-science" },
      { label: "Optical Imaging", href: "/technologies#optical-imaging" },
    ],
    publications: [
      {
        title:
          "Measurement of the severity related to cutaneous neurofibromas in NF1: development and validation of the Nef-ASI",
        journal: "Journal of the American Academy of Dermatology",
        year: 2026,
        pmid: "41061983",
      },
      {
        title:
          "Stigmatization related to cutaneous neurofibromas in NF1: development, validation and severity strata of the cNF-PUSH-D",
        journal: "British Journal of Dermatology",
        year: 2026,
        pmid: "41290043",
      },
    ],
    collaborators: {
      label: "AI & Digital Phenotyping collaborators",
      href: "/collaborators",
    },
    established:
      "Validated instruments now quantify cutaneous neurofibroma severity and patient-reported burden.",
    exploring:
      "Automating measurement with AI and predicting outcomes from multimodal data.",
  },
];
