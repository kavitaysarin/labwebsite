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

/** Research page framing intro (≈90 words). */
export const RESEARCH_INTRO =
  "The Sarin Lab reads the skin as a sensor for disease. Because skin is visible, accessible, and information-rich, it lets us detect, understand, and monitor disease through four complementary kinds of signal — genetic, molecular, imaging, and digital. We develop these approaches together and apply them across conditions from skin cancer and neurofibromatosis type 1 to autoimmune and inflammatory disease, translating discoveries into earlier detection, better monitoring, and new treatments. The diseases below are applications of one shared toolkit — not separate programs.";

const PUBMED = (pmid: string) => `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`;
export { PUBMED };

/**
 * Research pillars (spec §17 / Addendum). Every project, disease, technology,
 * and publication below is verified against the live site and PubMed.
 * Excluded by decision: "Skin as an Educational Interface", systemic sclerosis,
 * neurodegeneration (see CONTENT_REVIEW_NEEDED.md).
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
    lead: "The skin records inherited and acquired DNA changes that shape who develops disease and how it behaves. Because skin lesions are easy to sample and observe, they let us connect specific variants to visible, measurable outcomes — clarifying cancer risk and why some tumors grow or resist treatment.",
    projects: [
      "Inherited skin-cancer risk: genome-wide and candidate-gene studies of basal and squamous cell carcinoma.",
      "Tumor-suppressor variants — including loss-of-function PTPN14 — that raise cancer risk.",
      "Neurofibromatosis type 1 (NF1) as a single-gene model of how one mutation drives skin tumors.",
      "Translating genetic risk into prevention and surveillance strategies.",
    ],
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
    lead: "Molecular and immune signatures in the skin act as a readout of what is happening throughout the body. Profiling RNA, proteins, and immune pathways reveals disease activity, treatment response, and new therapeutic targets.",
    projects: [
      "Interferon and immune signatures that track disease activity in dermatomyositis and lupus.",
      "Transcriptomic profiling to repurpose existing drugs (for example, mTOR inhibition in epidermolysis bullosa simplex).",
      "Comorbidity and biomarker studies in hidradenitis suppurativa.",
      "Target discovery that feeds early-phase clinical trials.",
    ],
    applications: [
      "Dermatomyositis",
      "Lupus",
      "Hidradenitis suppurativa",
      "Epidermolysis bullosa simplex",
      "Skin cancer",
      "NF1",
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
    lead: "High-resolution optical imaging lets us see the living skin's structure and function without removing tissue — capturing detail from the cellular to the tissue scale and working toward non-invasive “virtual biopsies.”",
    projects: [
      "Micro-registered optical coherence tomography (OCT) aligned with pathology to enable virtual biopsy.",
      "Cellular-resolution OCT using engineered optics (metasurfaces and needle-shaped beams).",
      "KLEAR optical clearing and 3D molecular pathology for volumetric views of tissue.",
      "Image-quality methods and teledermatology to widen access to skin assessment.",
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
      "Validating OCT-based “virtual biopsy” as a non-invasive alternative to tissue biopsy — a research goal, not yet a clinical replacement.",
  },
  {
    slug: "digital",
    signal: "Digital Signals",
    title: "Skin as a Digital Sensor",
    icon: "chip",
    image: "/images/technologies/ai-data-science.jpg",
    imageAlt:
      "Abstract neural-network diagram representing artificial intelligence and data analysis.",
    lead: "Artificial intelligence and quantitative analysis turn skin images and patient data into objective, repeatable measures of disease severity and change over time — supporting better monitoring and clinical-trial endpoints.",
    projects: [
      "Quantitative measurement and severity scoring of cutaneous neurofibromas (the Nef-ASI).",
      "Patient-reported measurement of stigma and burden (the cNF-PUSH-D).",
      "AI-assisted image analysis and comparison of automated versus expert assessment.",
      "Longitudinal monitoring and endpoints for clinical trials.",
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
