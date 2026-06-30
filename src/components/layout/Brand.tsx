import Link from "next/link";

/**
 * Text lockup standing in for the official Stanford Medicine / Sarin Lab logo.
 * TODO: replace with the approved logo file when supplied (spec §7).
 */
export function Brand({
  onNavigate,
  tone = "light",
}: {
  onNavigate?: () => void;
  tone?: "light" | "dark";
}) {
  const main = tone === "light" ? "text-white" : "text-navy";
  const sub = tone === "light" ? "text-white/75" : "text-gray-dark";
  const rule = tone === "light" ? "bg-white/35" : "bg-navy/25";
  return (
    <Link
      href="/"
      onClick={onNavigate}
      className="group flex items-center gap-3"
      aria-label="Sarin Lab — home"
    >
      <span className="flex flex-col leading-none">
        <span className={`font-heading text-[22px] font-bold tracking-tight ${main}`}>
          Stanford
        </span>
        <span className={`mt-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] ${sub}`}>
          Medicine
        </span>
      </span>
      <span className={`h-9 w-px ${rule}`} aria-hidden="true" />
      <span className={`font-heading text-[22px] font-bold tracking-tight ${main}`}>
        Sarin Lab
      </span>
    </Link>
  );
}
