/**
 * Global site configuration.
 *
 * NONTECHNICAL EDITORS: this is the safest file to edit. Change the contact
 * details, metrics, or social links here and they update everywhere on the
 * site. Items marked TODO need a real value before launch.
 */

export type SocialLink = {
  label: string;
  href: string;
  icon: "linkedin" | "instagram" | "x" | "facebook";
};

export type Metric = {
  value: string;
  label: string;
  /** Shorter label shown on narrow mobile screens. */
  shortLabel?: string;
};

export const SITE = {
  name: "Sarin Lab",
  parentOrg: "Stanford University School of Medicine",
  department: "Department of Dermatology",

  brand: "Skin as a Sensor",
  subtitle:
    "Using the body’s most accessible organ to detect, understand, and monitor disease.",

  description:
    "The Sarin Lab at Stanford University School of Medicine uses genetics, molecular profiling, advanced imaging, artificial intelligence, and clinical research to study the skin as a sensor for disease.",

  // Used for absolute URLs in metadata (Open Graph, canonical, sitemap).
  // TODO: set to the final production URL (custom domain or GitHub Pages URL).
  url: "https://kavitaysarin.github.io/labwebsite",

  // Public lab contact (already public on the live site).
  email: "ahoj@stanford.edu",
  phone: "(650) 497-8006",
  address: {
    line1: "450 Broadway St, Pavilion C",
    line2: "Stanford Hospital and Clinics",
    city: "Redwood City",
    state: "CA",
    zip: "94063",
  },

  pubmedUrl:
    "https://pubmed.ncbi.nlm.nih.gov/?term=Kavita+Y+Sarin%5BAuthor%5D",

  // Contact form delivery is handled by Web3Forms. The public access key lives
  // in the NEXT_PUBLIC_WEB3FORMS_KEY env var (see .env.example and
  // CONTACT_FORM_MAINTENANCE.md), not here — so it is never committed and the
  // form stays in safe draft mode until the key is configured.

  // Only display verified, active accounts (spec §8: no inactive platforms).
  // Instagram is confirmed from the live site; the others link to bare
  // domains on the current site and are flagged in content-review-needed.md.
  social: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/skinasasensor/",
      icon: "instagram",
    },
  ] as SocialLink[],

  // Homepage metrics — REVIEW ANNUALLY. (spec §9: store in one place + flag)
  metrics: [
    { value: "140+", label: "Publications", shortLabel: "Publications" },
    { value: "18+", label: "Years in Patient Care", shortLabel: "Years in Care" },
    { value: "40+", label: "Trainees Mentored", shortLabel: "Trainees Mentored" },
  ] as Metric[],
} as const;
