import { Icon } from "@/components/ui/Icon";
import type { Publication } from "@/lib/types";

/**
 * Compact publication row for the filterable Publications list. Composes the
 * frozen `.card-surface` system (does not modify the frozen PublicationCard,
 * which is reserved for figure-bearing "Recent Work" cards). Two explicit
 * links — PubMed and DOI — so both are independently accessible (no stretched
 * link), which is the right pattern for a dense reference list.
 */
export function PublicationListItem({ pub }: { pub: Publication }) {
  const primary = pub.pubmedUrl ?? pub.doiUrl ?? "#";
  return (
    <article className="card-surface flex flex-col p-5 transition-[border-color,box-shadow] duration-150 hover:border-cardinal/40 hover:shadow-card-strong focus-within:border-cardinal/50">
      <p className="flex flex-wrap items-center gap-x-2 text-[12px] font-semibold uppercase tracking-wide">
        <span className="text-cardinal">{pub.researchArea}</span>
        {pub.date || pub.year ? (
          <>
            <span className="text-gray" aria-hidden="true">
              •
            </span>
            <span className="text-gray-dark">{pub.date || pub.year}</span>
          </>
        ) : null}
      </p>

      <h3 className="mt-2 text-[17px] font-bold leading-snug text-navy">
        <a
          href={primary}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-cardinal focus-visible:underline"
        >
          {pub.title}
        </a>
      </h3>

      {pub.authors ? (
        <p className="mt-1.5 text-[14px] leading-snug text-gray-dark">{pub.authors}</p>
      ) : null}
      <p className="mt-0.5 text-[14px] italic text-gray-dark">{pub.journal}</p>

      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-[14px] font-semibold">
        {pub.pubmedUrl ? (
          <a
            href={pub.pubmedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-cardinal hover:text-cardinal-dark hover:underline"
          >
            PubMed
            <Icon name="external" className="h-3.5 w-3.5" />
          </a>
        ) : null}
        {pub.doiUrl ? (
          <a
            href={pub.doiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-cardinal hover:text-cardinal-dark hover:underline"
          >
            DOI
            <Icon name="external" className="h-3.5 w-3.5" />
          </a>
        ) : null}
      </div>
    </article>
  );
}
