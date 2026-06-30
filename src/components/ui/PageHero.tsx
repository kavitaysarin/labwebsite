import Image from "next/image";

/**
 * Compact navy hero for interior pages (spec §10/§17). Reusable across all
 * subpages. Composes the frozen design tokens; does not modify frozen
 * components.
 */
export function PageHero({
  title,
  subtitle,
  eyebrow,
  image = "/images/hero/hero-secondary.png",
  imageAlt = "",
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(3,19,38,0.94) 0%, rgba(3,19,38,0.78) 55%, rgba(3,19,38,0.55) 100%)",
          }}
        />
      </div>
      <div className="container-wide py-14 sm:py-16 lg:py-[72px]">
        {eyebrow ? (
          <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-blue-light">
            {eyebrow}
          </p>
        ) : null}
        <h1
          className="font-heading font-black text-white"
          style={{ fontSize: "clamp(2.4rem, 5vw, 3.4rem)", letterSpacing: "-0.02em" }}
        >
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-3 max-w-2xl text-lg text-white/85">{subtitle}</p>
        ) : null}
      </div>
    </section>
  );
}
