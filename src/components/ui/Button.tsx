import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";
import type { IconName } from "@/lib/types";

type Variant = "primary" | "secondary" | "secondary-light";

const VARIANTS: Record<Variant, string> = {
  // Cardinal primary
  primary: "bg-cardinal text-white hover:bg-cardinal-dark",
  // Navy-outline secondary (on light backgrounds)
  secondary: "border border-navy/40 text-navy hover:bg-navy hover:text-white",
  // Light-outline secondary (on dark/navy backgrounds)
  "secondary-light":
    "border border-white/60 text-white hover:bg-white hover:text-navy",
};

const BASE =
  "inline-flex h-12 items-center justify-center gap-2 rounded-md px-5 text-[15px] font-semibold transition-colors duration-150";

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  withArrow = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  withArrow?: boolean;
  className?: string;
}) {
  const cls = `${BASE} ${VARIANTS[variant]} ${className}`;
  const arrow = withArrow ? (
    <Icon name={external ? "external" : "arrow-right"} className="h-4 w-4" />
  ) : null;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        {arrow}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      {arrow}
    </Link>
  );
}

/** Inline "Learn More →" style text link. */
export function ArrowLink({
  href,
  children,
  external = false,
  icon = "arrow-right",
  className = "",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  icon?: IconName;
  className?: string;
}) {
  const cls = `group inline-flex items-center gap-1.5 text-[15px] font-semibold text-cardinal hover:text-cardinal-dark ${className}`;
  const arrow = (
    <Icon
      name={external ? "external" : icon}
      className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
    />
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        {arrow}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      {arrow}
    </Link>
  );
}
