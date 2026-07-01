// FROZEN — homepage-approved component (TechnologyCard). Reuse as-is; do not
// modify without re-approval. See docs/DESIGN_SYSTEM_FROZEN.md
import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { Icon } from "@/components/ui/Icon";
import { Placeholder } from "@/components/ui/Placeholder";
import type { Technology, IconName } from "@/lib/types";

const TECH_ICON: Record<string, IconName> = {
  "optical-imaging": "eye",
  "klear-oct": "scan",
  "3d-molecular-pathology": "microscope",
  "ai-and-data-science": "chip",
  "spatial-biology": "molecule",
};

/**
 * Technology card. The whole card is clickable (the title carries a stretched
 * link to the Technologies section). Hover/focus states match PublicationCard.
 * `wide` makes the 3rd card span both columns at the narrow-tablet breakpoint
 * (640–899px) so a 3-card row never leaves a narrow orphan (spec §11).
 */
export function TechCard({
  tech,
  wide = false,
}: {
  tech: Technology;
  wide?: boolean;
}) {
  const href = `/technologies#${tech.slug}`;
  const spanRow = wide
    ? "min-[640px]:col-span-2 min-[640px]:max-[899px]:flex-row min-[900px]:col-span-1"
    : "";
  const imgRow = wide
    ? "min-[640px]:max-[899px]:aspect-auto min-[640px]:max-[899px]:w-[42%] min-[640px]:max-[899px]:self-stretch"
    : "";

  return (
    <article
      className={`card-surface-strong group relative flex h-full flex-col overflow-hidden transition-[transform,border-color,box-shadow] duration-150 hover:-translate-y-0.5 hover:border-cardinal/40 hover:shadow-card-strong focus-within:border-cardinal/50 ${spanRow}`}
    >
      {tech.image ? (
        <div
          className={`relative aspect-[16/9] w-full overflow-hidden bg-gray-light ${imgRow}`}
        >
          <Image
            src={asset(tech.image)}
            alt={tech.imageAlt ?? ""}
            fill
            loading="eager"
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 90vw, 33vw"
            className="object-cover"
          />
        </div>
      ) : (
        <Placeholder ratio="aspect-[16/9]" icon={TECH_ICON[tech.slug] ?? "microscope"} />
      )}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="min-h-[3.4rem] text-xl">
          <Link
            href={href}
            aria-label={`${tech.name} — learn more`}
            className="transition-colors after:absolute after:inset-0 hover:text-cardinal focus:outline-none"
          >
            {tech.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-gray-dark">
          {tech.shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-semibold text-cardinal group-hover:text-cardinal-dark">
          Learn More
          <Icon name="arrow-right" className="h-4 w-4" />
        </span>
      </div>
    </article>
  );
}
