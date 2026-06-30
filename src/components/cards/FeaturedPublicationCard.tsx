import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { CATEGORY_LABELS } from "@/content/publications";
import type { SelectedPublication } from "@/lib/types";

/**
 * Featured publication card for the top of the Publications page. Shows the
 * paper's figure when one is supplied (and rights-cleared); otherwise a tidy
 * navy header band with the research-area label — so a missing image never
 * looks broken and we never imply an image we don't have. Composes the frozen
 * `.card-surface-strong`.
 */
export function FeaturedPublicationCard({ pub }: { pub: SelectedPublication }) {
  const label = CATEGORY_LABELS[pub.category] ?? pub.category;
  const link =
    "inline-flex min-h-[44px] items-center gap-1.5 text-[14px] font-semibold text-cardinal hover:text-cardinal-dark hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cardinal/50";
  return (
    <article className="card-surface-strong flex h-full flex-col overflow-hidden transition-[transform,border-color,box-shadow] duration-150 hover:-translate-y-0.5 hover:border-cardinal/40 hover:shadow-card-strong focus-within:border-cardinal/50">
      {pub.image ? (
        <div className="relative aspect-[16/9] w-full border-b border-border bg-white">
          <Image
            src={pub.image}
            alt={pub.imageAlt ?? ""}
            fill
            loading="eager"
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-contain p-2.5"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/9] w-full items-center justify-center border-b border-border bg-navy px-5 text-center">
          <span className="font-heading text-[15px] font-bold uppercase tracking-wide text-white/90">
            {label}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[12px] font-semibold uppercase tracking-wide text-cardinal">
          {label}
        </p>
        <h3 className="mt-1.5 text-[17px] font-bold leading-snug text-navy">
          <a
            href={pub.pubmedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-cardinal focus-visible:underline"
          >
            {pub.title}
          </a>
        </h3>
        <p className="mt-1.5 text-[14px] italic text-gray-dark">
          {pub.journal} · {pub.year}
        </p>
        {pub.summary ? (
          <p className="mt-2 text-[14px] leading-relaxed text-gray-dark">{pub.summary}</p>
        ) : null}
        <div className="mt-auto flex flex-wrap gap-x-5 pt-3">
          <a href={pub.pubmedUrl} target="_blank" rel="noopener noreferrer" className={link}>
            PubMed
            <Icon name="external" className="h-3.5 w-3.5" />
          </a>
          {pub.doiUrl ? (
            <a href={pub.doiUrl} target="_blank" rel="noopener noreferrer" className={link}>
              DOI
              <Icon name="external" className="h-3.5 w-3.5" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
