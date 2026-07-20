import type { Person } from "@/lib/types";

/**
 * Lab members — facts verified against the live site's /team page
 * (names, roles, emails, training background). Bios are rewritten concisely
 * (~25–45 words, "Studying …" summaries), not copied. Headshots were migrated
 * from the live site to public/images/team/<slug>.jpg (aspect-preserved;
 * originals in /originals); the live source images are low-resolution and each
 * crop is framed with a per-person `objectPosition` — see
 * docs/team-image-sources.md and CONTENT_REVIEW_NEEDED.md.
 *
 * Flagged uncertainties (TODO: VERIFY):
 * - Nethra Srinivasan: role set to "Medical Student" per request (live site
 *   said B.S. candidate, Case Western) — confirm current program.
 * - Marlayna Harris: role set to "Clinical Research Coordinator" per request
 *   (not stated on the live site) — confirm.
 * - Haniya vs "Haniyah" spelling; Chenming Zhang vs email czheng8@; Dr. Sarin
 *   title (live: Associate Prof).
 * - Audris Chiang: surname set to "Chiang" per request (2026-07-01; matches the
 *   image filename) — was "Chang"; slug/image kept as audris-chang. Confirm.
 * - Margarita Golod email set to margarita.golod@gmail.com (supplied as
 *   "maragarita.golod@…", a likely typo) — confirm.
 * - Alumni: live site lists Medicine/Industry/Research headings but no names.
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
    objectPosition: "50% 25%",
    bio: "Leads the lab, studying the genetics of skin cancer and inherited cancer risk and reading the skin as a sensor for disease. She trained in computer science before earning an M.D. and a Ph.D. in genetics at Stanford.",
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
    objectPosition: "50% 22%",
    bio: "Keeps the lab running day to day, supporting its operations and administration. A Bay Area native, she studied strategic communications and joined Stanford in 2022.",
    active: true,
  },
  {
    slug: "marlayna-harris",
    name: "Marlayna Harris",
    role: "Clinical Research Coordinator",
    category: "Research Staff",
    email: "marlayna@stanford.edu",
    image: "/images/team/marlayna-harris.jpg",
    objectPosition: "50% 35%",
    bio: "Coordinates the lab's clinical research while studying computational, systems-level approaches to biology, building on undergraduate work that modeled cellular senescence and epithelial change in disease.",
    active: true,
  },
  {
    slug: "angelina-chekmareva",
    name: "Angelina Chekmareva",
    role: "Research Administrator",
    category: "Research Staff",
    email: "achek@stanford.edu",
    image: "/images/team/angelina-chekmareva.jpg",
    objectPosition: "50% 30%",
    bio: "Supports lab operations through research administrative coordination, research project management, financial tracking, documentation, and cross-functional communication with faculty, staff, and external partners.",
    active: true,
  },
  {
    slug: "kat-israel",
    name: "Kat Israel",
    role: "Senior Associate Director, Major Gifts",
    category: "Research Staff",
    email: "katharynisrael@stanford.edu",
    image: "/images/team/kat-israel.jpg",
    objectPosition: "50% 25%",
    bio: "Provides strategic leadership and fundraising development to elevate the Sarin Lab's research programs.",
    active: true,
  },
  {
    slug: "chris-sadee",
    name: "Chris Sadee",
    role: "AI Data Scientist",
    category: "Research Staff",
    email: "sadee@stanford.edu",
    image: "/images/team/chris-sadee.jpg",
    objectPosition: "50% 22%",
    bio: "Data scientist in the Gevaert lab and Sarin lab working on neurofibromatosis and AI imaging projects.",
    active: true,
  },
  {
    slug: "akash-dhawan",
    name: "Akash Dhawan",
    credentials: "PhD",
    role: "Visiting Researcher",
    category: "Research Staff",
    email: "akash.s.dhawan@gmail.com",
    image: "/images/team/akash-dhawan.jpg",
    objectPosition: "50% 20%",
    bio: "Studying novel techniques in skin diagnostic imaging to read the skin as a sensor for deeper pathologies. He trained in bioengineering at Rice before earning his Ph.D. in medical engineering as part of the University of Southern California–Caltech M.D./Ph.D. program.",
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
    objectPosition: "50% 28%",
    bio: "Studying physics-driven light therapies and sensors and applying three-dimensional pathology to the skin. A Knight-Hennessy Scholar and Paul & Daisy Soros Fellow with a background in biochemistry.",
    active: true,
  },
  {
    slug: "jeffrey-sagun",
    name: "Jeffrey Penular Sagun",
    role: "Medical Student",
    category: "Trainees",
    email: "sagunjp@stanford.edu",
    image: "/images/team/jeffrey-sagun.jpg",
    objectPosition: "50% 30%",
    bio: "Studying the genetics of rare and complex disease as a postbaccalaureate scholar. He earned a degree in neuroscience and spent three years at the NIH studying xeroderma pigmentosum.",
    active: true,
  },
  {
    slug: "haniya-shareef",
    name: "Haniya Shareef",
    role: "Medical Student",
    category: "Trainees",
    email: "haniyash@stanford.edu",
    image: "/images/team/haniya-shareef.jpg",
    objectPosition: "50% 30%",
    bio: "Studying the genetics of skin disease as a medical student. She trained in biological engineering and computer science at MIT, with earlier research on liver tissue regeneration.",
    active: true,
  },
  {
    slug: "chenming-zhang",
    name: "Chenming Zhang",
    role: "Medical Student",
    category: "Trainees",
    email: "czheng8@stanford.edu",
    image: "/images/team/chenming-zhang.jpg",
    objectPosition: "50% 16%",
    bio: "Studying genetic and clinical risk factors in patients who develop multiple melanomas. Known as Angel, she studied molecular biology at the University of Pittsburgh before medical school.",
    active: true,
  },
  {
    slug: "michelle-lin",
    name: "Michelle Lin",
    role: "Medical Student",
    category: "Trainees",
    email: "michjlin@stanford.edu",
    image: "/images/team/michelle-lin.jpg",
    objectPosition: "50% 40%",
    bio: "Studying the genetics of skin disease as a medical student. She previously built next-generation sequencing tools for viral genomics, including COVID-19 surveillance and vaccine trials.",
    active: true,
  },
  {
    slug: "audris-chang",
    name: "Audris Chiang",
    credentials: "MD",
    role: "Postdoctoral Fellow",
    category: "Trainees",
    email: "audrisc@stanford.edu",
    image: "/images/team/audris-chang.jpg",
    objectPosition: "50% 40%",
    bio: "Studying the genetics and epidemiology of skin cancers across the Sarin and Curtis labs. She trained in computer science and economics before earning her medical degree.",
    active: true,
  },
  {
    slug: "nethra-srinivasan",
    name: "Nethra Srinivasan",
    role: "Medical Student", // TODO: VERIFY (live site: B.S. candidate, Case Western)
    category: "Trainees",
    email: "nsriniv@stanford.edu",
    image: "/images/team/nethra-srinivasan.jpg",
    objectPosition: "50% 30%",
    bio: "Studying epidemiological patterns in dermatological conditions to understand how skin diseases affect different populations. A Bay Area native, she founded the youth science nonprofit The NeuroKidz.",
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
    objectPosition: "50% 25%",
    bio: "Studying non-invasive tissue imaging and skin-clearing agents for light-based therapies, contributing to the lab's effort to see deeper into living skin without a biopsy.",
    active: true,
  },
  {
    slug: "louiza-zughbaba",
    name: "Louiza Esther Zughbaba",
    role: "Undergraduate Researcher, Human Biology",
    category: "Students",
    email: "louizaz@stanford.edu",
    image: "/images/team/louiza-zughbaba.jpg",
    objectPosition: "50% 32%",
    bio: "Studying how science and technology can come together to better understand disease and improve patient care. A Bay Area native working in the lab as an undergraduate researcher in human biology.",
    active: true,
  },

  // ----- Volunteers (no approved headshot on the live site — initials fallback) -----
  {
    slug: "sally-glaser",
    name: "Sally Glaser",
    credentials: "PhD",
    role: "Volunteer, Scientific Editor",
    category: "Volunteers",
    image: "/images/team/sally-glaser.jpg",
    objectPosition: "50% 22%",
    bio: "A renowned epidemiologist and former CEO of the Cancer Prevention Institute of California (CPIC). She reviews select grants and publications to improve the rigor and quality of the lab's work.",
    active: true,
  },
  {
    slug: "margarita-golod",
    name: "Margarita Golod",
    credentials: "MBA",
    role: "Volunteer, Outreach and Engagement",
    category: "Volunteers",
    email: "margarita.golod@gmail.com", // TODO: VERIFY — supplied as "maragarita.golod@..." (likely typo)
    image: "/images/team/margarita-golod.jpg",
    objectPosition: "50% 25%",
    bio: "Marketing advisor with an MBA from Harvard Business School and two decades of marketing experience spanning startups and established companies. She now lends her expertise to help share our research with the world.",
    active: true,
  },
];

/**
 * Optional filter controls for the unified team grid. `key` matches a Person
 * `category` (or "all"). The grid is one cohesive grid; filters narrow it
 * without creating separate stacked sections and without reordering members.
 * Default = "all".
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
 * everyone else alphabetically — roles intentionally mixed, not stacked. This
 * fixed order is preserved under filtering (filters hide, never reorder).
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
