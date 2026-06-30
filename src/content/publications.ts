import type { Publication, ResearchArea } from "@/lib/types";
import { ALL_PUBLICATIONS } from "./publications-all";

export { ALL_PUBLICATIONS };

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
    featured: true,
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
  },
];

export const FEATURED_PUBLICATIONS = RECENT_PUBLICATIONS.filter(
  (p) => p.featured,
);

/* ---- Publications page helpers (derived from ALL_PUBLICATIONS) ---- */

/** Map a research-area display name to its filter slug (matches the `?area=`
 * deep links used by Research and Technologies). Falls back to a kebab slug
 * (e.g. "Other" -> "other"). */
export function areaSlug(name: string): string {
  const a = RESEARCH_AREAS.find((r) => r.name === name);
  return a
    ? a.slug
    : name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/** Filter chips for the Publications page: the canonical areas that actually
 * have publications, in spec order, then "Other" if present. */
export const PUBLICATION_FILTER_AREAS: { slug: string; name: string }[] = (() => {
  const present = new Set(ALL_PUBLICATIONS.map((p) => p.researchArea));
  const ordered = RESEARCH_AREAS.filter((a) => present.has(a.name)).map((a) => ({
    slug: a.slug,
    name: a.name,
  }));
  if (present.has("Other")) ordered.push({ slug: "other", name: "Other" });
  return ordered;
})();

/** Distinct publication years, newest first (for the year filter). */
export const PUBLICATION_YEARS: number[] = Array.from(
  new Set(ALL_PUBLICATIONS.map((p) => p.year).filter(Boolean)),
).sort((a, b) => b - a);

/** Featured publications drawn from the full list (with figures). */
export const FEATURED_FROM_ALL = ALL_PUBLICATIONS.filter((p) => p.featured);
