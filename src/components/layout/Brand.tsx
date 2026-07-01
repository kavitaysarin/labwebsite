import Link from "next/link";
import Image from "next/image";

/**
 * Brand lockup: the official Stanford Medicine emblem — reversed to white for
 * the cardinal header & footer — followed by a divider and "Sarin Lab".
 * The white logo is generated from the supplied Stanford Medicine PNG
 * (public/images/logo/stanford-medicine-white.png). It suits the cardinal
 * background (tone="light"); if the Brand is ever placed on a light surface a
 * colored variant would be needed.
 */
export function Brand({
  onNavigate,
  tone = "light",
}: {
  onNavigate?: () => void;
  tone?: "light" | "dark";
}) {
  const main = tone === "light" ? "text-white" : "text-navy";
  const rule = tone === "light" ? "bg-white/35" : "bg-navy/25";
  return (
    <Link
      href="/"
      onClick={onNavigate}
      className="group flex items-center gap-3"
      aria-label="Sarin Lab at Stanford Medicine — home"
    >
      <Image
        src="/images/logo/stanford-medicine-white.png"
        alt="Stanford Medicine"
        width={447}
        height={124}
        priority
        className="h-[34px] w-auto"
      />
      <span className={`h-8 w-px ${rule}`} aria-hidden="true" />
      <span className={`font-heading text-[22px] font-bold tracking-tight ${main}`}>
        Sarin Lab
      </span>
    </Link>
  );
}
