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
  expertise: string;
  sharedProject: string;
  collaborationSummary: string;
  url?: string;
  image?: string;
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
  | "sparkles";

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
