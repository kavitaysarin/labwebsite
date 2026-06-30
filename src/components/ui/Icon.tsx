import type { IconName } from "@/lib/types";
import type { ReactNode } from "react";

/**
 * One consistent outline icon set (spec §6 / §20: a single icon family).
 * 24×24 viewBox, currentColor stroke, rounded joins.
 */
const ICONS: Record<IconName, ReactNode> = {
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  hand: (
    <>
      <path d="M9 11V6.5a1.5 1.5 0 0 1 3 0V11" />
      <path d="M12 11V5.5a1.5 1.5 0 0 1 3 0V11" />
      <path d="M15 11V7.5a1.5 1.5 0 0 1 3 0V13a6 6 0 0 1-6 6h-1.2a5 5 0 0 1-3.6-1.5L4.6 14.3a1.5 1.5 0 0 1 2.1-2.1L9 14" />
    </>
  ),
  layers: (
    <>
      <path d="M12 2 2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  dna: (
    <>
      <path d="M8 3c0 4 8 5 8 9s-8 5-8 9" />
      <path d="M16 3c0 4-8 5-8 9s8 5 8 9" />
      <path d="M9.2 6h5.6M9.2 18h5.6M7.8 9.5h8.4M7.8 14.5h8.4" />
    </>
  ),
  molecule: (
    <>
      <circle cx="6" cy="6" r="2.4" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="10" cy="18" r="2" />
      <path d="M7.6 7.6 9 16.4M8 6.8 16 7.6M11.6 16.8 16.4 9.6" />
    </>
  ),
  scan: (
    <>
      <path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  chip: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
      <path d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2" />
    </>
  ),
  document: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </>
  ),
  stethoscope: (
    <>
      <path d="M12 20s-7-4.3-9.2-8.7A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 9.2 5.3C19 15.7 12 20 12 20z" />
      <path d="M8 10.5h2l1.2 2.2L13 8.5l1 2h2" />
    </>
  ),
  graduation: (
    <>
      <path d="M3 9l9-4 9 4-9 4-9-4z" />
      <path d="M7 11v4c0 1.3 2.2 2.5 5 2.5s5-1.2 5-2.5v-4" />
      <path d="M21 9v4.5" />
    </>
  ),
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
  external: (
    <>
      <path d="M14 5h5v5" />
      <path d="M19 5l-8 8" />
      <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </>
  ),
  phone: (
    <path d="M5 4h3l1.5 5-2 1.5a11 11 0 0 0 6 6l1.5-2 5 1.5V21a1 1 0 0 1-1 1A17 17 0 0 1 4 5a1 1 0 0 1 1-1z" />
  ),
  "map-pin": (
    <>
      <path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
    </>
  ),
  x: <path d="M4 4l7.5 9L4 20h2l6.4-7.2L18 20h2l-7.8-9.4L19.6 4h-2l-5.9 6.7L7 4z" fill="currentColor" stroke="none" />,
  facebook: (
    <path d="M13 21v-7h2.4l.6-3H13V9.2c0-.9.3-1.5 1.6-1.5H16V5.1A22 22 0 0 0 13.7 5C11.5 5 10 6.3 10 8.9V11H7.6v3H10v7z" fill="currentColor" stroke="none" />
  ),
  microscope: (
    <>
      <path d="M7 21h11" />
      <path d="M12 21a6 6 0 0 0 6-6" />
      <path d="M9.4 4.2l3.4 1.8-2.2 4.2-3.4-1.8z" />
      <path d="M7.6 9l2.4 1.3" />
      <path d="M6 17h6" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z" />
      <path d="M5 15l.7 1.7L7.5 17l-1.8.8L5 19.5l-.7-1.7L2.5 17l1.8-.8z" />
    </>
  ),
};

export function Icon({
  name,
  className = "h-6 w-6",
  strokeWidth = 1.6,
  "aria-hidden": ariaHidden = true,
  title,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
  "aria-hidden"?: boolean;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : ariaHidden}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      {ICONS[name]}
    </svg>
  );
}
