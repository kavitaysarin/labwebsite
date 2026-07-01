import type { Publication, ResearchArea, SelectedPublication } from "@/lib/types";

/**
 * Research areas — verbatim descriptions from the live Publications page.
 * `legacyPath` is the current live-site drill-down used for redirects
 * (spec §24). Each area links to its own publications listing.
 */
export const RESEARCH_AREAS: ResearchArea[] = [
  {
    slug: "non-invasive-imaging",
    name: "Non-Invasive Imaging",
    description:
      "Developing advanced imaging tools, including optical coherence tomography and virtual biopsy approaches, to visualize and monitor skin without traditional invasive biopsy.",
    legacyPath: "/noninvasive-1",
    image: "/images/hero/hero-secondary.png",
  },
  {
    slug: "skin-cancer",
    name: "Skin Cancer",
    description:
      "Exploring skin cancer genetics, inherited risk, tumor evolution, treatment resistance, chemoprevention, and non-surgical therapeutic strategies.",
    legacyPath: "/new-page-2",
    image: "/images/hero/science-collage.png",
  },
  {
    slug: "neurofibromatosis",
    name: "Neurofibromatosis",
    description:
      "Studying neurofibromatosis type 1 as a rare disease model to understand cutaneous neurofibromas, quality of life, stigma, disease progression, and clinical trial outcomes.",
    legacyPath: "/noninvasive-1-1",
    image: "/images/hero/hero-home.png",
  },
  {
    slug: "autoimmune-and-systemic-disease",
    name: "Autoimmune and Systemic Disease",
    description:
      "Investigating how skin and immune signatures can reveal systemic inflammation, disease activity, and treatment response in conditions such as dermatomyositis, lupus, and systemic sclerosis.",
    legacyPath: "/new-page",
    image: "/images/hero/science-collage.png",
  },
];

/**
 * Recent publications — pulled from the lab's PubMed profile
 * (term: "Kavita Y Sarin[Author]") and verified. NOT fabricated.
 * `featured: true` items appear in the homepage "Latest from the Lab".
 * The complete list lives on PubMed (see SITE.pubmedUrl).
 */
export const RECENT_PUBLICATIONS: Publication[] = [
  {
    title:
      "Stigmatization related to cutaneous neurofibromas in neurofibromatosis 1: development, validation and severity strata of the cNF-PUSH-D",
    authors: "Fertitta L, Sarin KY, Romo CG, Bergqvist C, et al.",
    journal: "British Journal of Dermatology",
    year: 2026,
    date: "March 2026",
    researchArea: "Neurofibromatosis",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/41290043/",
    doiUrl: "https://doi.org/10.1093/bjd/ljaf479",
    image: "/images/recent-work/cnf-push-d.jpg",
    imageAlt:
      "Correlation matrix of clinical features in neurofibromatosis type 1.",
    featured: true,
  },
  {
    title:
      "Dissection of Gαs and Hedgehog signaling cross-talk reveals therapeutic opportunities to target Hedgehog-dependent tumors",
    authors: "Krantz S, Bell BA, Lund K, Salinas Parra N, et al.",
    journal: "Cancer Research",
    year: 2026,
    date: "February 2026",
    researchArea: "Skin Cancer",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/41460725/",
    doiUrl: "https://doi.org/10.1158/0008-5472.CAN-25-1109",
    image: "/images/recent-work/hedgehog.jpg",
    imageAlt:
      "Schematic showing how Hedgehog pathway signaling drives tumor growth and response to an SMO inhibitor.",
    featured: true,
  },
  {
    title:
      "Measurement of the severity related to cutaneous neurofibromas in neurofibromatosis type 1: development and validation of the Nef-ASI",
    authors: "Fertitta L, Jannic A, Bergqvist C, Delique V, et al.",
    journal: "Journal of the American Academy of Dermatology",
    year: 2026,
    date: "February 2026",
    researchArea: "Neurofibromatosis",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/41061983/",
    doiUrl: "https://doi.org/10.1016/j.jaad.2025.10.025",
    image: "/images/recent-work/nef-asi.jpg",
    imageAlt:
      "Bland–Altman plot comparing cutaneous neurofibroma measurements across raters.",
  },
  {
    title:
      "Limited insurance coverage for wigs: a cross-sectional analysis of wig providers in the Bay Area",
    authors: "Caravan S, Akras D, Shareef H, Abdusamad R, et al.",
    journal: "Journal of the American Academy of Dermatology",
    year: 2026,
    date: "June 2026",
    researchArea: "Autoimmune and Systemic Disease",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/41621664/",
    doiUrl: "https://doi.org/10.1016/j.jaad.2026.01.056",
  },
  {
    title:
      "The P2X7-NLRP3 inflammasome inhibitor AZD9056 has no significant effect on hidradenitis suppurativa clinical disease activity but restores cytokine production in peripheral blood mononuclear cells: results of a phase 2 trial",
    authors: "Kilgour JM, Landy H, Kimball AB, Resnik BI, et al.",
    journal: "Journal of the American Academy of Dermatology",
    year: 2026,
    date: "January 2026",
    researchArea: "Autoimmune and Systemic Disease",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/41022330/",
    doiUrl: "https://doi.org/10.1016/j.jaad.2025.09.079",
  },
  {
    title:
      "Phenotypic characterization of neurofibromatosis type 1 in a large Chinese cohort: a cross-sectional study",
    authors: "Wang Z, Hu X, Mo H, Shen M, et al.",
    journal: "JAAD International",
    year: 2026,
    date: "February 2026",
    researchArea: "Neurofibromatosis",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/41399671/",
    doiUrl: "https://doi.org/10.1016/j.jdin.2025.09.020",
    image: "/images/recent-work/chinesenf.jpg",
    imageAlt:
      "Clinical photograph showing numerous cutaneous neurofibromas across the back in neurofibromatosis type 1.",
    featured: true,
  },
];

export const FEATURED_PUBLICATIONS = RECENT_PUBLICATIONS.filter(
  (p) => p.featured,
);

/* ===================================================================
 * SELECTED PUBLICATIONS  (the curated Publications page — launch model)
 * -------------------------------------------------------------------
 * Curated from the publications listed on the live Sarin Lab site
 * (sarinlab.stanford.edu research-area pages) and VERIFIED against PubMed
 * (title / authors / journal / year / PMID / DOI). Authors are abbreviated
 * to the first author + "et al." (the live site shows no authors). Journal
 * names are normalized to their standard display form. Nothing here is invented.
 *
 * This is a CURATED highlight (~48 papers; the Skin Cancer and Genetics,
 * Neurofibromatosis, and Autoimmune sections were expanded 2026-07-01), NOT the
 * full archive. To add /
 * remove / recategorize / feature / reorder entries, see
 * PUBLICATIONS_MAINTENANCE.md. The complete list lives on PubMed
 * (SITE.pubmedUrl).
 * =================================================================== */

/** The five-section ordering for the page (the "molecular-digital" section is
 * deferred for launch — the live site has no such grouping yet). */
export const PUBLICATION_SECTIONS: { slug: string; heading: string }[] = [
  { slug: "optical-imaging", heading: "Optical Imaging" },
  { slug: "skin-cancer-genetics", heading: "Skin Cancer and Genetics" },
  { slug: "neurofibromatosis", heading: "Neurofibromatosis" },
  {
    slug: "autoimmune-systemic",
    heading: "Autoimmune, Inflammatory, and Systemic Disease",
  },
];

export const SELECTED_PUBLICATIONS: SelectedPublication[] = [
  // ---- optical-imaging ----
  {
    title:
      "Noninvasive virtual biopsy using micro-registered optical coherence tomography (OCT) in human subjects",
    authors: "Winetraub Y, et al.",
    journal: "Science Advances",
    year: 2024,
    category: "optical-imaging",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/38598626/",
    doiUrl: "https://doi.org/10.1126/sciadv.adi5794",
    featured: true,
    displayOrder: 1,
  },
  {
    title:
      "Rapid Cellular-Resolution Skin Imaging with Optical Coherence Tomography Using All-Glass Multifocal Metasurfaces",
    authors: "Zhao J, et al.",
    journal: "ACS Nano",
    year: 2023,
    category: "optical-imaging",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/36745734/",
    doiUrl: "https://doi.org/10.1021/acsnano.2c09542",
    displayOrder: 2,
  },
  {
    title:
      "Flexible method for generating needle-shaped beams and its application in optical coherence tomography",
    authors: "Zhao J, et al.",
    journal: "Optica",
    year: 2022,
    category: "optical-imaging",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/37283722/",
    doiUrl: "https://doi.org/10.1364/optica.456894",
    displayOrder: 3,
  },
  {
    title:
      "Angular compounding for speckle reduction in optical coherence tomography using geometric image registration algorithm and digital focusing",
    authors: "Zhao J, et al.",
    journal: "Scientific Reports",
    year: 2020,
    category: "optical-imaging",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/32024946/",
    doiUrl: "https://doi.org/10.1038/s41598-020-58454-0",
    displayOrder: 4,
  },

  // ---- skin-cancer-genetics ----
  {
    title:
      "Development of a MEK inhibitor, NFX-179, as a chemoprevention agent for squamous cell carcinoma",
    authors: "Sarin KY, et al.",
    journal: "Science Translational Medicine",
    year: 2023,
    category: "skin-cancer-genetics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/37820007/",
    doiUrl: "https://doi.org/10.1126/scitranslmed.ade1844",
    featured: true,
    displayOrder: 1,
  },
  {
    title: "Age-dependent cytokine surge in blood precedes cancer diagnosis",
    authors: "Chen G, et al.",
    journal: "Proceedings of the National Academy of Sciences",
    year: 2025,
    category: "skin-cancer-genetics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/40117305/",
    doiUrl: "https://doi.org/10.1073/pnas.2420502122",
    displayOrder: 2,
  },
  {
    title:
      "Single-cell analysis of human basal cell carcinoma reveals novel regulators of tumor growth and the tumor microenvironment",
    authors: "Guerrero-Juarez CF, et al.",
    journal: "Science Advances",
    year: 2022,
    category: "skin-cancer-genetics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/35687691/",
    doiUrl: "https://doi.org/10.1126/sciadv.abm7981",
    displayOrder: 3,
  },
  {
    title: "Advances in cutaneous squamous cell carcinoma",
    authors: "Winge MCG, et al.",
    journal: "Nature Reviews Cancer",
    year: 2023,
    category: "skin-cancer-genetics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/37286893/",
    doiUrl: "https://doi.org/10.1038/s41568-023-00583-5",
    displayOrder: 4,
  },
  {
    title:
      "Treatment of Cutaneous Squamous Cell Carcinoma With the Topical Histone Deacetylase Inhibitor Remetinostat",
    authors: "Kilgour JM, et al.",
    journal: "JAMA Dermatology",
    year: 2022,
    category: "skin-cancer-genetics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/34787644/",
    doiUrl: "https://doi.org/10.1001/jamadermatol.2021.4549",
    displayOrder: 5,
  },
  {
    title:
      "Genome-wide meta-analysis identifies eight new susceptibility loci for cutaneous squamous cell carcinoma",
    authors: "Sarin KY, et al.",
    journal: "Nature Communications",
    year: 2020,
    category: "skin-cancer-genetics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/32041948/",
    doiUrl: "https://doi.org/10.1038/s41467-020-14594-5",
    displayOrder: 6,
  },
  {
    title:
      "Genome-wide association study identifies 14 novel risk alleles associated with basal cell carcinoma",
    authors: "Chahal HS, et al.",
    journal: "Nature Communications",
    year: 2016,
    category: "skin-cancer-genetics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/27539887/",
    doiUrl: "https://doi.org/10.1038/ncomms12510",
    displayOrder: 7,
  },
  {
    title:
      "Genome-wide association study identifies novel susceptibility loci for cutaneous squamous cell carcinoma",
    authors: "Chahal HS, et al.",
    journal: "Nature Communications",
    year: 2016,
    category: "skin-cancer-genetics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/27424798/",
    doiUrl: "https://doi.org/10.1038/ncomms12048",
    displayOrder: 8,
  },
  {
    title:
      "LY6D marks pre-existing resistant basosquamous tumor subpopulations",
    authors: "Haensel D, et al.",
    journal: "Nature Communications",
    year: 2022,
    category: "skin-cancer-genetics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/36473848/",
    doiUrl: "https://doi.org/10.1038/s41467-022-35020-y",
    displayOrder: 9,
  },
  {
    title:
      "AP-1 and TGFβ cooperativity drives non-canonical Hedgehog signaling in resistant basal cell carcinoma",
    authors: "Yao CD, et al.",
    journal: "Nature Communications",
    year: 2020,
    category: "skin-cancer-genetics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/33033234/",
    doiUrl: "https://doi.org/10.1038/s41467-020-18762-5",
    displayOrder: 10,
  },
  {
    title:
      "Clinical and Pathologic Phenotyping of Mesotheliomas Developing in Carriers of Germline BAP1 Mutations",
    authors: "Carbone M, et al.",
    journal: "Journal of Thoracic Oncology",
    year: 2025,
    category: "skin-cancer-genetics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/40582407/",
    doiUrl: "https://doi.org/10.1016/j.jtho.2025.06.020",
    displayOrder: 11,
  },
  {
    title:
      "Multiomics Profiling Distinguishes Sebaceous Carcinoma from Benign Sebaceous Neoplasms and Provides Insight into the Genetic Evolution of Sebaceous Carcinogenesis",
    authors: "Starrett GJ, et al.",
    journal: "Clinical Cancer Research",
    year: 2024,
    category: "skin-cancer-genetics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/39287419/",
    doiUrl: "https://doi.org/10.1158/1078-0432.CCR-24-1327",
    displayOrder: 12,
  },
  {
    title:
      "Germline BARD1 variants predispose to mesothelioma by impairing DNA repair and calcium signaling",
    authors: "Novelli F, et al.",
    journal: "Proceedings of the National Academy of Sciences",
    year: 2024,
    category: "skin-cancer-genetics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/38990952/",
    doiUrl: "https://doi.org/10.1073/pnas.2405231121",
    displayOrder: 13,
  },
  {
    title:
      "Clonal replacement of tumor-specific T cells following PD-1 blockade",
    authors: "Yost KE, et al.",
    journal: "Nature Medicine",
    year: 2019,
    category: "skin-cancer-genetics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/31359002/",
    doiUrl: "https://doi.org/10.1038/s41591-019-0522-3",
    displayOrder: 14,
  },
  {
    title:
      "Genetic Mutations Underlying Phenotypic Plasticity in Basosquamous Carcinoma",
    authors: "Chiang A, et al.",
    journal: "Journal of Investigative Dermatology",
    year: 2019,
    category: "skin-cancer-genetics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/31207229/",
    doiUrl: "https://doi.org/10.1016/j.jid.2019.03.1163",
    displayOrder: 15,
  },
  {
    title:
      "Loss of Primary Cilia Drives Switching from Hedgehog to Ras/MAPK Pathway in Resistant Basal Cell Carcinoma",
    authors: "Kuonen F, et al.",
    journal: "Journal of Investigative Dermatology",
    year: 2019,
    category: "skin-cancer-genetics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/30707899/",
    doiUrl: "https://doi.org/10.1016/j.jid.2018.11.035",
    displayOrder: 16,
  },
  {
    title:
      "Pembrolizumab for advanced basal cell carcinoma: An investigator-initiated, proof-of-concept study",
    authors: "Chang ALS, et al.",
    journal: "Journal of the American Academy of Dermatology",
    year: 2019,
    category: "skin-cancer-genetics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/30145186/",
    doiUrl: "https://doi.org/10.1016/j.jaad.2018.08.017",
    displayOrder: 17,
  },
  {
    title:
      "Frequent basal cell cancer development is a clinical marker for inherited cancer susceptibility",
    authors: "Cho HG, et al.",
    journal: "JCI Insight",
    year: 2018,
    category: "skin-cancer-genetics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/30089731/",
    doiUrl: "https://doi.org/10.1172/jci.insight.122744",
    displayOrder: 18,
  },
  {
    title:
      "TGFβ, Fibronectin and Integrin α5β1 Promote Invasion in Basal Cell Carcinoma",
    authors: "Kuonen F, et al.",
    journal: "Journal of Investigative Dermatology",
    year: 2018,
    category: "skin-cancer-genetics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/29758283/",
    doiUrl: "https://doi.org/10.1016/j.jid.2018.04.029",
    displayOrder: 19,
  },
  {
    title:
      "Noncanonical hedgehog pathway activation through SRF-MKL1 promotes drug resistance in basal cell carcinomas",
    authors: "Whitson RJ, et al.",
    journal: "Nature Medicine",
    year: 2018,
    category: "skin-cancer-genetics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/29400712/",
    doiUrl: "https://doi.org/10.1038/nm.4476",
    displayOrder: 20,
  },
  {
    title:
      "Genomic Stability in Syndromic Basal Cell Carcinoma",
    authors: "Chiang A, et al.",
    journal: "Journal of Investigative Dermatology",
    year: 2018,
    category: "skin-cancer-genetics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/29111235/",
    doiUrl: "https://doi.org/10.1016/j.jid.2017.09.048",
    displayOrder: 21,
  },
  {
    title:
      "Combined inhibition of atypical PKC and histone deacetylase 1 is cooperative in basal cell carcinoma treatment",
    authors: "Mirza AN, et al.",
    journal: "JCI Insight",
    year: 2017,
    category: "skin-cancer-genetics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/29093271/",
    doiUrl: "https://doi.org/10.1172/jci.insight.97071",
    displayOrder: 22,
  },
  {
    title:
      "Mutations in the Kinetochore Gene KNSTRN in Basal Cell Carcinoma",
    authors: "Jaju PD, et al.",
    journal: "Journal of Investigative Dermatology",
    year: 2015,
    category: "skin-cancer-genetics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/26348826/",
    doiUrl: "https://doi.org/10.1038/jid.2015.339",
    displayOrder: 23,
  },
  {
    title:
      "Squamous Change in Basal-Cell Carcinoma with Drug Resistance",
    authors: "Ransohoff KJ, et al.",
    journal: "New England Journal of Medicine",
    year: 2015,
    category: "skin-cancer-genetics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/26352826/",
    doiUrl: "https://doi.org/10.1056/NEJMc1504261",
    displayOrder: 24,
  },
  {
    title:
      "Smoothened variants explain the majority of drug resistance in basal cell carcinoma",
    authors: "Atwood SX, et al.",
    journal: "Cancer Cell",
    year: 2015,
    category: "skin-cancer-genetics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/25759020/",
    doiUrl: "https://doi.org/10.1016/j.ccell.2015.02.002",
    displayOrder: 25,
  },
  {
    title:
      "Genomic analysis of smoothened inhibitor resistance in basal cell carcinoma",
    authors: "Sharpe HJ, et al.",
    journal: "Cancer Cell",
    year: 2015,
    category: "skin-cancer-genetics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/25759019/",
    doiUrl: "https://doi.org/10.1016/j.ccell.2015.02.001",
    displayOrder: 26,
  },

  // ---- neurofibromatosis ----
  {
    title:
      "Stigmatization related to cutaneous neurofibromas in neurofibromatosis 1: development, validation and severity strata of the cNF-PUSH-D",
    authors: "Fertitta L, et al.",
    journal: "British Journal of Dermatology",
    year: 2026,
    category: "neurofibromatosis",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/41290043/",
    doiUrl: "https://doi.org/10.1093/bjd/ljaf479",
    featured: true,
    displayOrder: 1,
  },
  {
    title:
      "Measurement of the severity related to cutaneous neurofibromas in neurofibromatosis type 1: Development and validation of the Nef-ASI",
    authors: "Fertitta L, et al.",
    journal: "Journal of the American Academy of Dermatology",
    year: 2026,
    category: "neurofibromatosis",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/41061983/",
    doiUrl: "https://doi.org/10.1016/j.jaad.2025.10.025",
    displayOrder: 2,
  },
  {
    title:
      "Cutaneous Neurofibromas and Quality of Life in Adults With Neurofibromatosis Type 1",
    authors: "Lin MJ, et al.",
    journal: "JAMA Dermatology",
    year: 2024,
    category: "neurofibromatosis",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/39196570/",
    doiUrl: "https://doi.org/10.1001/jamadermatol.2024.2912",
    displayOrder: 3,
  },
  {
    title:
      "A core outcome domain set to assess cutaneous neurofibromas related to neurofibromatosis type 1 in clinical trials",
    authors: "Fertitta L, et al.",
    journal: "British Journal of Dermatology",
    year: 2024,
    category: "neurofibromatosis",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/37877514/",
    doiUrl: "https://doi.org/10.1093/bjd/ljad397",
    displayOrder: 4,
  },
  {
    title:
      "Phenotypic heterogeneity of neurofibromatosis type 1 in a large international registry",
    authors: "Tabata MM, et al.",
    journal: "JCI Insight",
    year: 2020,
    category: "neurofibromatosis",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/32814709/",
    doiUrl: "https://doi.org/10.1172/jci.insight.136262",
    displayOrder: 5,
  },
  {
    title:
      "Phenotypic characterization of neurofibromatosis type 1 in a large Chinese cohort: A cross-sectional study",
    authors: "Wang Z, et al.",
    journal: "JAAD International",
    year: 2026,
    category: "neurofibromatosis",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/41399671/",
    doiUrl: "https://doi.org/10.1016/j.jdin.2025.09.020",
    displayOrder: 6,
  },
  {
    title:
      "Effect of NFX-179 MEK inhibitor on cutaneous neurofibromas in persons with neurofibromatosis type 1",
    authors: "Sarin KY, et al.",
    journal: "Science Advances",
    year: 2024,
    category: "neurofibromatosis",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/38691597/",
    doiUrl: "https://doi.org/10.1126/sciadv.adk4946",
    displayOrder: 7,
  },
  {
    title:
      "Perspectives of adolescents with neurofibromatosis 1 and cutaneous neurofibromas: Implications for clinical trials",
    authors: "Cannon A, et al.",
    journal: "Clinical Trials",
    year: 2024,
    category: "neurofibromatosis",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/37269078/",
    doiUrl: "https://doi.org/10.1177/17407745231178839",
    displayOrder: 8,
  },
  {
    title:
      "cNF-Skindex in Adults Living with Neurofibromatosis 1: Severity Strata in France and Validation in United States Adults",
    authors: "Fertitta L, et al.",
    journal: "Journal of Investigative Dermatology",
    year: 2023,
    category: "neurofibromatosis",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/37149083/",
    doiUrl: "https://doi.org/10.1016/j.jid.2023.04.014",
    displayOrder: 9,
  },
  {
    title:
      "Status and Recommendations for Incorporating Biomarkers for Cutaneous Neurofibromas Into Clinical Research",
    authors: "Wallis D, et al.",
    journal: "Neurology",
    year: 2021,
    category: "neurofibromatosis",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/34230199/",
    doiUrl: "https://doi.org/10.1212/WNL.0000000000012426",
    displayOrder: 10,
  },

  // ---- autoimmune-systemic ----
  {
    title:
      "The Type I Interferon Signature Reflects Multiple Phenotypic and Activity Measures in Dermatomyositis",
    authors: "Tabata MM, et al.",
    journal: "Arthritis & Rheumatology",
    year: 2023,
    category: "autoimmune-systemic",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/37096447/",
    doiUrl: "https://doi.org/10.1002/art.42526",
    displayOrder: 1,
  },
  {
    title:
      "Impaired innate and adaptive immune responses to BNT162b2 SARS-CoV-2 vaccination in systemic lupus erythematosus",
    authors: "Sarin KY, et al.",
    journal: "JCI Insight",
    year: 2024,
    category: "autoimmune-systemic",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/38456511/",
    doiUrl: "https://doi.org/10.1172/jci.insight.176556",
    displayOrder: 2,
  },
  {
    title:
      "Characterization of comorbidity heterogeneity among 13,667 patients with hidradenitis suppurativa",
    authors: "Hua VJ, et al.",
    journal: "JCI Insight",
    year: 2021,
    category: "autoimmune-systemic",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/34546979/",
    doiUrl: "https://doi.org/10.1172/jci.insight.151872",
    displayOrder: 3,
  },
  {
    title:
      "A phase 2, double-blinded, placebo-controlled trial of toll-like receptor 7/8/9 antagonist, IMO-8400, in dermatomyositis",
    authors: "Kim YJ, et al.",
    journal: "Journal of the American Academy of Dermatology",
    year: 2021,
    category: "autoimmune-systemic",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/32781178/",
    doiUrl: "https://doi.org/10.1016/j.jaad.2020.07.122",
    displayOrder: 4,
  },
  {
    title:
      "Transcriptomic Repositioning Analysis Identifies mTOR Inhibitor as Potential Therapy for Epidermolysis Bullosa Simplex",
    authors: "Lee GH, et al.",
    journal: "Journal of Investigative Dermatology",
    year: 2022,
    category: "autoimmune-systemic",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/34536484/",
    doiUrl: "https://doi.org/10.1016/j.jid.2021.07.170",
    displayOrder: 5,
  },
  {
    title:
      "TLR7/8 Activation in Immune Cells and Muscle by RNA-Containing Immune Complexes: Role in Inflammation and the Pathogenesis of Myositis",
    authors: "Wu Y, et al.",
    journal: "Arthritis & Rheumatology",
    year: 2025,
    category: "autoimmune-systemic",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/39279150/",
    doiUrl: "https://doi.org/10.1002/art.42989",
    displayOrder: 6,
  },
  {
    title:
      "Identification of Alpha-Adrenergic Agonists as Potential Therapeutic Agents for Dermatomyositis through Drug-Repurposing Using Public Expression Datasets",
    authors: "Cho HG, et al.",
    journal: "Journal of Investigative Dermatology",
    year: 2016,
    category: "autoimmune-systemic",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/26975725/",
    doiUrl: "https://doi.org/10.1016/j.jid.2016.03.001",
    displayOrder: 7,
  },
  {
    title:
      "The P2X7-NLRP3 inflammasome inhibitor AZD9056 has no significant effect on hidradenitis suppurativa clinical disease activity but restores cytokine production in peripheral blood mononuclear cells: Results of a phase 2 trial",
    authors: "Kilgour JM, et al.",
    journal: "Journal of the American Academy of Dermatology",
    year: 2026,
    category: "autoimmune-systemic",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/41022330/",
    doiUrl: "https://doi.org/10.1016/j.jaad.2025.09.079",
    displayOrder: 8,
  },
];

/** Short research-area label shown on each publication card. */
export const CATEGORY_LABELS: Record<string, string> = {
  "optical-imaging": "Optical Imaging",
  "skin-cancer-genetics": "Skin Cancer & Genetics",
  neurofibromatosis: "Neurofibromatosis",
  "autoimmune-systemic": "Autoimmune & Systemic",
  "molecular-digital": "Molecular & Digital",
};

/** The three featured publications (representing different research areas). */
export const FEATURED_SELECTED = SELECTED_PUBLICATIONS.filter((p) => p.featured);

/** Selected publications in a section, sorted by displayOrder then file order. */
export function selectedByCategory(category: string): SelectedPublication[] {
  return SELECTED_PUBLICATIONS.filter((p) => p.category === category).sort(
    (a, b) => (a.displayOrder ?? 999) - (b.displayOrder ?? 999),
  );
}
