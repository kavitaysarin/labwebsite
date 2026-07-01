/** Shared content types for the Sarin Lab site. */

export type NavItem = {
  label: string;
  href: string;
};

/** Homepage / Research feature items (Why Skin, Research Approach). */
export type Feature = {
  title: string;
  description: string;
  icon: IconName;
};

export type Publication = {
  /** PubMed identifier (stable key); present on PubMed-sourced records. */
  pmid?: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  date?: string;
  researchArea: string;
  abstractUrl?: string;
  pubmedUrl?: string;
  doiUrl?: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
  plainLanguageSummary?: string;
  whyItMatters?: string;
};

export type ResearchArea = {
  slug: string;
  name: string;
  description: string;
  /** Path on the current live site this maps to (for redirects). */
  legacyPath?: string;
  image?: string;
};

export type RecognitionItem = {
  title: string;
  organization: string;
  year?: string;
  description?: string;
  category: "award" | "grant" | "talk" | "press";
  person?: string;
  url?: string;
  image?: string;
};

export type Person = {
  slug: string;
  name: string;
  /** Post-nominal credentials shown after the name (e.g. "MD, PhD"). */
  credentials?: string;
  role: string;
  category:
    | "Principal Investigator"
    | "Research Staff"
    | "Trainees"
    | "Students"
    | "Volunteers"
    | "Alumni";
  email?: string;
  profileUrl?: string;
  image?: string;
  /** CSS object-position for the headshot crop (e.g. "50% 25%"); per-person so
   * each face can be framed individually. Defaults to "50% 30%". */
  objectPosition?: string;
  currentProject?: string;
  bio: string;
  interests?: string;
  active: boolean;
};

export type Collaborator = {
  name: string;
  degree?: string;
  title?: string;
  institution: string;
  labName?: string;
  category: string;
  /** One short sentence on relevant expertise. */
  expertise: string;
  /** One short sentence on the collaboration with the Sarin Lab. */
  collaboration: string;
  url?: string;
  image?: string;
  /** CSS object-position for the 4:5 portrait crop (default "50% 30%"). */
  objectPosition?: string;
  permissionConfirmed?: boolean;
  lastVerified?: string;
};

export type Technology = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription?: string;
  category: string;
  image?: string;
  imageAlt?: string;
  relatedResearch?: string[];
  status?: "research" | "validated" | "clinical study" | "educational";
};

export type GalleryImage = {
  src: string;
  /** Intrinsic dimensions of the display image (for natural-aspect layout). */
  width: number;
  height: number;
  alt: string;
  caption?: string;
  year?: string;
  category: string;
  featured?: boolean;
};

/** Names of icons available in the shared <Icon> component. */
export type IconName =
  | "eye"
  | "hand"
  | "layers"
  | "clock"
  | "dna"
  | "molecule"
  | "scan"
  | "chip"
  | "document"
  | "stethoscope"
  | "graduation"
  | "arrow-right"
  | "external"
  | "mail"
  | "phone"
  | "map-pin"
  | "menu"
  | "close"
  | "instagram"
  | "linkedin"
  | "x"
  | "facebook"
  | "microscope"
  | "sparkles"
  | "search"
  | "users"
  | "link"
  | "alert"
  | "check";

/** Research-area buckets for the curated Selected Publications page. */
export type PublicationCategory =
  | "optical-imaging"
  | "skin-cancer-genetics"
  | "neurofibromatosis"
  | "autoimmune-systemic"
  | "molecular-digital";

/**
 * A curated "selected" publication shown on the Publications page. Sourced from
 * the live Sarin Lab site and verified against PubMed. See
 * PUBLICATIONS_MAINTENANCE.md for how to add/edit these.
 */
export type SelectedPublication = {
  title: string;
  authors: string;
  journal: string;
  year: number;
  category: PublicationCategory;
  pubmedUrl: string;
  doiUrl?: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
  /** Lower numbers sort first within a section (optional). */
  displayOrder?: number;
  /** Optional, approval-gated "why it matters" sentence. */
  summary?: string;
};

/** A minimal, verified publication reference (links to PubMed). */
export type PubRef = {
  title: string;
  journal: string;
  year: number;
  pmid: string;
};

/** A research "signal" pillar on the Research page. */
export type ResearchPillar = {
  slug: string;
  signal: string; // eyebrow, e.g. "Genetic Signals"
  title: string; // e.g. "Skin as a Genetic Sensor"
  icon: IconName;
  image: string;
  imageAlt: string;
  lead: string;
  /** Link to the Publications page with this pillar's research-area filter. */
  pubHref?: string;
  projects: string[];
  applications: string[];
  technologies: { label: string; href: string }[];
  publications: PubRef[];
  collaborators: { label: string; href: string };
  established: string;
  exploring: string;
};

/** A technology program shown on the Technologies page. */
export type TechnologyProgram = {
  slug: string;
  name: string;
  shortName: string;
  icon: IconName;
  image: string;
  imageAlt: string;
  fit?: "cover" | "contain";
  lead: string;
  whatItReveals: string;
  appliedTo: string[];
  /** Collaborators credited on the "In collaboration with …" line. A missing
   * `url` renders as plain text (e.g. "the Liu Lab"). */
  collaborators?: { name: string; url?: string }[];
  researchHref?: string;
  pubHref?: string;
};
