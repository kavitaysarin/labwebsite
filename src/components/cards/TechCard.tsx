import Image from "next/image";
import { ArrowLink } from "@/components/ui/Button";
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
 * `wide` makes the card span both columns on the narrow-tablet breakpoint
 * (640–899px) with a horizontal image/text layout, so a 3-card row never
 * leaves a narrow orphan (spec §11).
 */
export function TechCard({
  tech,
  wide = false,
}: {
  tech: Technology;
  wide?: boolean;
}) {
  const spanRow = wide
    ? "min-[640px]:col-span-2 min-[640px]:max-[899px]:flex-row min-[900px]:col-span-1"
    : "";
  const imgRow = wide
    ? "min-[640px]:max-[899px]:aspect-auto min-[640px]:max-[899px]:w-[42%] min-[640px]:max-[899px]:self-stretch"
    : "";

  return (
    <article
      className={`card-surface-strong group flex h-full flex-col overflow-hidden transition-colors duration-150 hover:border-cardinal/30 ${spanRow}`}
    >
      {tech.image ? (
        <div
          className={`relative aspect-[16/9] w-full overflow-hidden bg-gray-light ${imgRow}`}
        >
          <Image
            src={tech.image}
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
        <h3 className="text-xl">{tech.name}</h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-gray-dark">
          {tech.shortDescription}
        </p>
        <ArrowLink href={`/technologies#${tech.slug}`} className="mt-4">
          Learn More
        </ArrowLink>
      </div>
    </article>
  );
}
