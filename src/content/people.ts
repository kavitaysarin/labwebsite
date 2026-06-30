import type { Person } from "@/lib/types";

/**
 * Lab members — facts verified against the live site's /team page
 * (names, roles, emails, training background). Bios are rewritten concisely
 * (1–2 sentences), not copied. Headshots were migrated from the live site to
 * public/images/team/<slug>.jpg (originals preserved in /originals); the live
 * source images are low-resolution — see CONTENT_REVIEW_NEEDED.md.
 *
 * Flagged uncertainties (TODO: VERIFY):
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
    credentials: "MD, PhD",
    role: "Principal Investigator · Professor of Dermatology", // TODO: VERIFY (live site: Associate Professor)
    category: "Principal Investigator",
    email: "ksarin@stanford.edu",
    image: "/images/team/kavita-sarin.jpg",
    bio: "Trained in computer science before earning an M.D. and a Ph.D. in genetics at Stanford. Her work reads the skin as a sensor for disease, with a focus on the genetics of skin cancer and inherited cancer risk.",
    active: true,
  },

  // ----- Staff -----
  {
    slug: "juniper-aho",
    name: "Juniper Aho",
    role: "Administrative Assistant",
    category: "Research Staff",
    email: "ahoj@stanford.edu",
    image: "/images/team/juniper-aho.jpg",
    bio: "Supports the lab's operations and administration. A Bay Area native, she joined Stanford in 2022.",
    active: true,
  },
  {
    slug: "marlayna-harris",
    name: "Marlayna Harris",
    role: "Researcher", // TODO: VERIFY exact title (not stated on live site)
    category: "Research Staff",
    email: "marlayna@stanford.edu",
    image: "/images/team/marlayna-harris.jpg",
    bio: "Works on computational and systems approaches to biology, building on undergraduate research modeling cellular senescence and epithelial–mesenchymal transition.",
    active: true,
  },

  // ----- Trainees -----
  {
    slug: "sharon-loa",
    name: "Sharon Loa",
    role: "M.D.–Ph.D. Student, Biophysics",
    category: "Trainees",
    email: "loa@stanford.edu",
    image: "/images/team/sharon-loa.jpg",
    bio: "Develops physics-driven light therapies and sensors and applies three-dimensional pathology to the skin. A Knight-Hennessy Scholar and Paul & Daisy Soros Fellow.",
    active: true,
  },
  {
    slug: "jeffrey-sagun",
    name: "Jeffrey Penular Sagun",
    role: "REACH Postbaccalaureate Scholar",
    category: "Trainees",
    email: "sagunjp@stanford.edu",
    image: "/images/team/jeffrey-sagun.jpg",
    bio: "Studies the genetics of rare and complex disease. He previously spent three years at the NIH/NCI studying xeroderma pigmentosum.",
    active: true,
  },
  {
    slug: "sahar-caravan",
    name: "Sahar Caravan",
    role: "Medical Student, Stanford School of Medicine",
    category: "Trainees",
    email: "caravan@stanford.edu",
    image: "/images/team/sahar-caravan.jpg",
    bio: "A medical student studying hidradenitis suppurativa, large-scale clinical data, and refugee health.",
    active: true,
  },
  {
    slug: "haniya-shareef",
    name: "Haniya Shareef",
    role: "Medical Student, Stanford School of Medicine",
    category: "Trainees",
    email: "haniyash@stanford.edu",
    image: "/images/team/haniya-shareef.jpg",
    bio: "Studies the genetics of skin disease. She trained in biological engineering and computer science at MIT.",
    active: true,
  },
  {
    slug: "chenming-zhang",
    name: "Chenming Zhang",
    role: "Medical Student, Stanford School of Medicine",
    category: "Trainees",
    email: "czheng8@stanford.edu",
    image: "/images/team/chenming-zhang.jpg",
    bio: "Known as Angel, she studies genetic and clinical risk factors in patients with multiple melanomas.",
    active: true,
  },
  {
    slug: "michelle-lin",
    name: "Michelle Lin",
    role: "Medical Student, Stanford School of Medicine",
    category: "Trainees",
    email: "michjlin@stanford.edu",
    image: "/images/team/michelle-lin.jpg",
    bio: "Studies the genetics of skin disease. She previously built next-generation sequencing tools for viral genomics.",
    active: true,
  },
  {
    slug: "victoria-harbour",
    name: "Victoria Harbour",
    role: "Medical Student, Stanford School of Medicine",
    category: "Trainees",
    email: "vharbour@stanford.edu",
    image: "/images/team/victoria-harbour.jpg",
    bio: "An NSF Graduate Research Fellow studying immunological markers and environmental risk factors for hidradenitis suppurativa flares. (Goes by Tori.)",
    active: true,
  },
  {
    slug: "audris-chang",
    name: "Audris Chang",
    role: "Dermatology Resident, Stanford (research track)",
    category: "Trainees",
    email: "audrisc@stanford.edu",
    image: "/images/team/audris-chang.jpg",
    bio: "Works across the Sarin and Curtis labs on the genetics and epidemiology of skin cancers.",
    active: true,
  },

  // ----- Students -----
  {
    slug: "valerie-ta",
    name: "Valerie Sarah Ta",
    role: "Undergraduate Researcher, Human Biology",
    category: "Students",
    email: "vsta@stanford.edu",
    image: "/images/team/valerie-ta.jpg",
    bio: "Studies non-invasive tissue imaging and skin-clearing agents for light-based therapies.",
    active: true,
  },
  {
    slug: "louiza-zughbaba",
    name: "Louiza Esther Zughbaba",
    role: "Undergraduate Researcher, Human Biology",
    category: "Students",
    email: "louizaz@stanford.edu",
    image: "/images/team/louiza-zughbaba.jpg",
    bio: "Interested in the intersection of science and technology to better understand disease and improve patient care.",
    active: true,
  },
  {
    slug: "nethra-srinivasan",
    name: "Nethra Srinivasan",
    role: "Research Student, Neuroscience (Case Western Reserve University)",
    category: "Students",
    email: "nsriniv@stanford.edu",
    image: "/images/team/nethra-srinivasan.jpg",
    bio: "Examines epidemiological patterns in dermatological conditions and founded the youth science nonprofit The NeuroKidz.",
    active: true,
  },

  // ----- Volunteers (no approved headshot on the live site — initials fallback) -----
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

/**
 * Optional filter controls for the unified team grid. `key` matches a Person
 * `category` (or "all"). The grid is one cohesive grid; filters narrow it
 * without creating separate stacked sections. Default = "all".
 */
export const TEAM_FILTERS: { key: string; label: string }[] = [
  { key: "all", label: "All" },
  { key: "Principal Investigator", label: "Faculty" },
  { key: "Research Staff", label: "Staff" },
  { key: "Trainees", label: "Trainees" },
  { key: "Students", label: "Students" },
  { key: "Volunteers", label: "Volunteers" },
  { key: "Alumni", label: "Alumni" },
];

/**
 * Current members for the unified grid: the PI first (easy to find), then
 * everyone else alphabetically — roles intentionally mixed, not stacked.
 */
export const CURRENT_TEAM: Person[] = (() => {
  const current = PEOPLE.filter((p) => p.active && p.category !== "Alumni");
  const pi = current.filter((p) => p.category === "Principal Investigator");
  const rest = current
    .filter((p) => p.category !== "Principal Investigator")
    .sort((a, b) => a.name.localeCompare(b.name));
  return [...pi, ...rest];
})();

/** Alumni — none retrievable from the live site yet (no names invented). */
export const ALUMNI = PEOPLE.filter((p) => p.category === "Alumni");
