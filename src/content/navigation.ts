import type { NavItem } from "@/lib/types";

/**
 * Primary header navigation.
 * Order + page names per the Content Rewrite Addendum ("Footer and Navigation
 * Changes"), which supersedes the original build spec §7 nav per the agreed
 * source-of-truth order.
 */
export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Technologies", href: "/technologies" },
  { label: "Publications", href: "/publications" },
  { label: "Recognition", href: "/recognition" },
  { label: "Team", href: "/team" },
  { label: "Collaborators", href: "/collaborators" },
  { label: "Lab Photos", href: "/lab-photos" },
  { label: "Contact", href: "/contact" },
];

/** Compact footer links (spec §8 / Addendum: short footer, essential links). */
export const FOOTER_NAV: NavItem[] = [
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Team", href: "/team" },
  { label: "Technologies", href: "/technologies" },
  { label: "Contact", href: "/contact" },
];
