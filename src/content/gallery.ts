import type { GalleryImage } from "@/lib/types";

/**
 * Lab Photos gallery — curated from the live Sarin Lab photo carousel
 * (sarinlab.stanford.edu/lab-photos) on 2026-06-30. People-focused photos only
 * (team, conferences, celebrations, campus); no scientific figures, OCT,
 * histology, or publication graphics. Originals preserved in
 * public/images/lab-photos/originals/; display copies (JPEG, long side ≤1400px,
 * natural aspect) in public/images/lab-photos/. See LAB_PHOTO_INVENTORY.md for
 * the full carousel inventory, source URLs, and selection rationale.
 *
 * NOTE (CONTENT_REVIEW_NEEDED.md): these show identifiable lab members at
 * professional and social events. Captions are generic (no individuals named
 * without evidence). Confirm identification/permission before launch.
 */
export const GALLERY: GalleryImage[] = [
  {
    src: "/images/lab-photos/team-group.jpg",
    width: 1050,
    height: 1400,
    alt: "The Sarin Lab team.",
    caption: "The Sarin Lab team.",
    category: "Team & Community",
  },
  {
    src: "/images/lab-photos/halloween.jpg",
    width: 1400,
    height: 1050,
    alt: "Lab members celebrating Halloween.",
    caption: "Lab members celebrating Halloween.",
    category: "Celebrations & Milestones",
  },
  {
    src: "/images/lab-photos/poster-session-1.jpg",
    width: 1400,
    height: 1050,
    alt: "Sharing research at a scientific poster session.",
    caption: "Sharing research at a scientific poster session.",
    category: "Conferences & Talks",
  },
  {
    src: "/images/lab-photos/lab-space.jpg",
    width: 1050,
    height: 1400,
    alt: "The Sarin Lab's space at Stanford.",
    caption: "The Sarin Lab's space at Stanford.",
    category: "Lab & Campus",
  },
  {
    src: "/images/lab-photos/team-gathering.jpg",
    width: 1400,
    height: 933,
    alt: "A Sarin Lab team gathering.",
    caption: "A Sarin Lab team gathering.",
    category: "Team & Community",
  },
  {
    src: "/images/lab-photos/lab-dinner.jpg",
    width: 1400,
    height: 1050,
    alt: "A Sarin Lab dinner.",
    caption: "A Sarin Lab dinner.",
    category: "Celebrations & Milestones",
  },
  {
    src: "/images/lab-photos/conference-talk.jpg",
    width: 1050,
    height: 1400,
    alt: "Giving a talk at a research conference.",
    caption: "Giving a talk at a research conference.",
    category: "Conferences & Talks",
  },
  {
    src: "/images/lab-photos/members-candid.jpg",
    width: 1050,
    height: 1400,
    alt: "Members of the Sarin Lab.",
    caption: "Members of the Sarin Lab.",
    category: "Team & Community",
  },
  {
    src: "/images/lab-photos/lab-lunch.jpg",
    width: 1280,
    height: 960,
    alt: "A Sarin Lab lunch.",
    caption: "A Sarin Lab lunch.",
    category: "Celebrations & Milestones",
  },
  {
    src: "/images/lab-photos/poster-session-2.jpg",
    width: 1400,
    height: 1050,
    alt: "Presenting a poster at a dermatology meeting.",
    caption: "Presenting a poster at a dermatology meeting.",
    category: "Conferences & Talks",
  },
  {
    src: "/images/lab-photos/team-portrait-bw.jpg",
    width: 1400,
    height: 693,
    alt: "The Sarin Lab team.",
    caption: "The Sarin Lab team.",
    category: "Team & Community",
  },
  {
    src: "/images/lab-photos/sid-2024.jpg",
    width: 800,
    height: 600,
    alt: "The Sarin Lab at the Society for Investigative Dermatology meeting, 2024.",
    caption: "The Sarin Lab at the Society for Investigative Dermatology meeting, 2024.",
    category: "Conferences & Talks",
  },
  {
    src: "/images/lab-photos/lab-celebration.jpg",
    width: 1024,
    height: 768,
    alt: "The lab gathers to celebrate.",
    caption: "The lab gathers to celebrate.",
    category: "Celebrations & Milestones",
  },
  {
    src: "/images/lab-photos/members-event.jpg",
    width: 1400,
    height: 1050,
    alt: "Sarin Lab members at an event.",
    caption: "Sarin Lab members at an event.",
    category: "Team & Community",
  },
  {
    src: "/images/lab-photos/podium-talk.jpg",
    width: 1280,
    height: 960,
    alt: "A lab member presents from the podium.",
    caption: "A lab member presents from the podium.",
    category: "Conferences & Talks",
  },
  {
    src: "/images/lab-photos/lab-2023.jpg",
    width: 960,
    height: 640,
    alt: "The Sarin Lab, 2023.",
    caption: "The Sarin Lab, 2023.",
    category: "Team & Community",
  },
  {
    src: "/images/lab-photos/stanford-campus.jpg",
    width: 1400,
    height: 700,
    alt: "Stanford, where the lab is based.",
    caption: "Stanford, where the lab is based.",
    category: "Lab & Campus",
  },
];

/** Filter categories, in display order (the gallery UI prepends "All"). */
export const GALLERY_CATEGORIES: string[] = [
  "Team & Community",
  "Conferences & Talks",
  "Celebrations & Milestones",
  "Lab & Campus",
];
