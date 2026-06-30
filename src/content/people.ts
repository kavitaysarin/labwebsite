import type { Person } from "@/lib/types";

/**
 * Lab members — facts verified against the live site's /team page
 * (names, roles, emails, training background). Bios are rewritten concisely,
 * not copied. No headshots are bundled yet: cards fall back to an initials
 * avatar (real person, photo pending) — see CONTENT_REVIEW_NEEDED.md.
 *
 * Flagged uncertainties (TODO: VERIFY):
 * - Dr. Sarin's title: Addendum says "Professor of Dermatology"; live site says
 *   "Associate Professor". Using the Addendum value.
 * - Marlayna Harris: role/title not stated on the live site; active status TBC.
 * - Haniya Shareef: heading reads "Haniya", bio text reads "Haniyah" on the
 *   live site — confirm spelling.
 * - Chenming Zhang: name is "Zhang" but the listed email is czheng8@ — confirm.
 * - Audris Chang: heading reads "Chang", image filename reads "Chiang" — confirm.
 * - Nethra Srinivasan: enrolled at Case Western — confirm current/active status.
 * - Alumni: the live site lists Medicine / Industry / Research headings but no
 *   names are retrievable — roster pending (no names invented).
 */
export const PEOPLE: Person[] = [
  {
    slug: "kavita-sarin",
    name: "Kavita Sarin",
    role: "Lab Director · Professor of Dermatology", // TODO: VERIFY (live site: Associate Professor)
    category: "Principal Investigator",
    email: "ksarin@stanford.edu",
    bio: "Kavita Sarin directs the lab. She studied computer science before earning an M.D. and a Ph.D. in genetics at Stanford, completed dermatology residency, and applied next-generation sequencing to skin tumors as a postdoctoral fellow. Her work reads the skin as a sensor for disease, with a focus on the genetics of skin cancer and inherited cancer risk.",
    active: true,
  },

  // ----- Staff -----
  {
    slug: "juniper-aho",
    name: "Juniper Aho",
    role: "Administrative Assistant",
    category: "Research Staff",
    email: "ahoj@stanford.edu",
    bio: "Supports the lab's operations and administration. A Bay Area native, she studied strategic communications at California State University, East Bay and joined Stanford in 2022.",
    active: true,
  },
  {
    slug: "marlayna-harris",
    name: "Marlayna Harris",
    role: "Researcher", // TODO: VERIFY exact title (not stated on live site)
    category: "Research Staff",
    email: "marlayna@stanford.edu",
    bio: "Works on computational and systems approaches to biology. Her undergraduate thesis at the College of Wooster modeled the crosstalk between cellular senescence and epithelial–mesenchymal transition.",
    active: true,
  },

  // ----- Trainees (postbac, medical, MD–PhD, resident) -----
  {
    slug: "sharon-loa",
    name: "Sharon Loa",
    role: "M.D.–Ph.D. Student, Biophysics",
    category: "Trainees",
    email: "loa@stanford.edu",
    bio: "Develops physics-driven light therapies and sensors and applies three-dimensional pathology to the skin, including refractive-index–matched photodynamic therapy (KLEAR-PDT). A Knight-Hennessy Scholar and Paul & Daisy Soros Fellow.",
    active: true,
  },
  {
    slug: "jeffrey-sagun",
    name: "Jeffrey Penular Sagun",
    role: "REACH Postbaccalaureate Scholar",
    category: "Trainees",
    email: "sagunjp@stanford.edu",
    bio: "Studies the genetics of rare and complex disease. He earned a B.S. in neuroscience from Trinity College and spent three years at the NIH/NCI studying xeroderma pigmentosum.",
    active: true,
  },
  {
    slug: "sahar-caravan",
    name: "Sahar Caravan",
    role: "Medical Student, Stanford School of Medicine",
    category: "Trainees",
    email: "caravan@stanford.edu",
    bio: "A third-year medical student studying hidradenitis suppurativa, large-scale clinical data, and refugee health. She trained in biochemistry and geography at Hofstra University.",
    active: true,
  },
  {
    slug: "haniya-shareef",
    name: "Haniya Shareef",
    role: "Medical Student, Stanford School of Medicine",
    category: "Trainees",
    email: "haniyash@stanford.edu",
    bio: "Studies the genetics of skin disease. She trained in biological engineering and computer science at MIT, with earlier work on liver tissue regeneration.",
    active: true,
  },
  {
    slug: "chenming-zhang",
    name: "Chenming Zhang",
    role: "Medical Student, Stanford School of Medicine",
    category: "Trainees",
    email: "czheng8@stanford.edu",
    bio: "Known as Angel, she studies genetic and clinical risk factors in patients with multiple melanomas. She studied molecular biology at the University of Pittsburgh.",
    active: true,
  },
  {
    slug: "michelle-lin",
    name: "Michelle Lin",
    role: "Medical Student, Stanford School of Medicine",
    category: "Trainees",
    email: "michjlin@stanford.edu",
    bio: "Studies the genetics of skin disease. She previously built next-generation sequencing tools for viral genomics, including COVID-19 surveillance and vaccine trials.",
    active: true,
  },
  {
    slug: "victoria-harbour",
    name: "Victoria Harbour",
    role: "Medical Student, Stanford School of Medicine",
    category: "Trainees",
    email: "vharbour@stanford.edu",
    bio: "An NSF Graduate Research Fellow studying immunological markers and environmental risk factors for hidradenitis suppurativa flares. A former chemical engineer, she previously worked at Merck. (Goes by Tori.)",
    active: true,
  },
  {
    slug: "audris-chang",
    name: "Audris Chang",
    role: "Dermatology Resident, Stanford (research track)",
    category: "Trainees",
    email: "audrisc@stanford.edu",
    bio: "Works across the Sarin and Curtis labs on the genetics and epidemiology of skin cancers. She studied computer science and economics at UC Berkeley and earned her M.D. at UC Irvine.",
    active: true,
  },

  // ----- Students (undergraduate / pre-doctoral) -----
  {
    slug: "valerie-ta",
    name: "Valerie Sarah Ta",
    role: "Undergraduate Researcher, Human Biology",
    category: "Students",
    email: "vsta@stanford.edu",
    bio: "Studies non-invasive tissue imaging and skin-clearing agents for light-based therapies.",
    active: true,
  },
  {
    slug: "louiza-zughbaba",
    name: "Louiza Esther Zughbaba",
    role: "Undergraduate Researcher, Human Biology",
    category: "Students",
    email: "louizaz@stanford.edu",
    bio: "A Bay Area native interested in the intersection of science and technology to better understand disease and improve patient care.",
    active: true,
  },
  {
    slug: "nethra-srinivasan",
    name: "Nethra Srinivasan",
    role: "Research Student, Neuroscience (Case Western Reserve University)",
    category: "Students",
    email: "nsriniv@stanford.edu",
    bio: "Examines epidemiological patterns in dermatological conditions. A Bay Area native, she founded the youth science nonprofit The NeuroKidz.",
    active: true,
  },

  // ----- Volunteers -----
  {
    slug: "sally-glaser",
    name: "Sally Glaser",
    role: "Volunteer", // TODO: VERIFY (no role/bio stated on live site)
    category: "Volunteers",
    bio: "Volunteer with the lab.",
    active: true,
  },
  {
    slug: "margarita-golod",
    name: "Margarita Golod",
    role: "Volunteer", // TODO: VERIFY (no role/bio stated on live site)
    category: "Volunteers",
    bio: "Volunteer with the lab.",
    active: true,
  },
];

/** Display order + friendly heading for each current-team category. */
export const TEAM_CATEGORY_ORDER: {
  category: Person["category"];
  heading: string;
}[] = [
  { category: "Research Staff", heading: "Staff" },
  { category: "Trainees", heading: "Trainees" },
  { category: "Students", heading: "Students" },
  { category: "Volunteers", heading: "Volunteers" },
];

export const PRINCIPAL_INVESTIGATOR = PEOPLE.find(
  (p) => p.category === "Principal Investigator",
);

/** Current members shown in the filterable team grid (everyone except the PI). */
export const CURRENT_TEAM = PEOPLE.filter(
  (p) => p.active && p.category !== "Principal Investigator",
);

/** Alumni — none retrievable from the live site yet (no names invented). */
export const ALUMNI = PEOPLE.filter((p) => p.category === "Alumni");
