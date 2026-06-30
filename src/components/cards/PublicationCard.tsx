import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { Placeholder } from "@/components/ui/Placeholder";
import type { Publication } from "@/lib/types";

/**
 * Recent Work card. The whole card is clickable (the title carries a stretched
 * link to PubMed). Figures are shown on white with object-contain so axes and
 * legends are never cropped (spec §7, §8).
 */
export function PublicationCard({
  pub,
  wide = false,
}: {
  pub: Publication;
  wide?: boolean;
}) {
  const href = pub.pubmedUrl ?? pub.doiUrl ?? "#";
  const spanRow = wide
    ? "min-[640px]:col-span-2 min-[640px]:max-[899px]:flex-row min-[900px]:col-span-1"
    : "";
  const figRow = wide
    ? "min-[640px]:max-[899px]:aspect-auto min-[640px]:max-[899px]:w-[42%] min-[640px]:max-[899px]:self-stretch min-[640px]:max-[899px]:border-b-0 min-[640px]:max-[899px]:border-r"
    : "";

  return (
    <article
      className={`card-surface-strong group relative flex h-full flex-col overflow-hidden transition-[transform,border-color,box-shadow] duration-150 hover:-translate-y-0.5 hover:border-cardinal/40 hover:shadow-card-strong focus-within:border-cardinal/50 ${spanRow}`}
    >
      <div
        className={`relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-white ${figRow}`}
      >
        {pub.image ? (
          <Image
            src={pub.image}
            alt={pub.imageAlt ?? ""}
            fill
            loading="eager"
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 90vw, 33vw"
            className="object-contain p-2.5"
          />
        ) : (
          <Placeholder ratio="aspect-[16/9]" icon="document" />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="flex flex-wrap items-center gap-x-2 text-[12px] font-semibold uppercase tracking-wide">
          <span className="text-cardinal">{pub.researchArea}</span>
          {pub.date ? (
            <>
              <span className="text-gray-light">•</span>
              <span className="text-gray">{pub.date}</span>
            </>
          ) : null}
        </p>
        <h3 className="mt-3 line-clamp-4 min-h-[5.5rem] text-[17px] leading-snug">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${pub.title} — read on PubMed`}
            className="transition-colors after:absolute after:inset-0 hover:text-cardinal focus:outline-none"
          >
            {pub.title}
          </a>
        </h3>
        <p className="mt-2 text-sm italic text-gray-dark">{pub.journal}</p>
        <div className="mt-auto pt-4">
          <span className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-cardinal group-hover:text-cardinal-dark">
            Read on PubMed
            <Icon name="external" className="h-4 w-4" />
          </span>
        </div>
      </div>
    </article>
  );
}
