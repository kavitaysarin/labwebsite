import { Icon } from "@/components/ui/Icon";
import { CATEGORY_LABELS } from "@/content/publications";
import type { SelectedPublication } from "@/lib/types";

/**
 * Compact, readable card for a selected publication (no figure). Title links to
 * PubMed; PubMed and DOI are separate links sized for comfortable tapping
 * (>=44px tall). Composes the frozen `.card-surface`.
 */
export function SelectedPublicationCard({ pub }: { pub: SelectedPublication }) {
  const link =
    "inline-flex min-h-[44px] items-center gap-1.5 text-[14px] font-semibold text-cardinal hover:text-cardinal-dark hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cardinal/50";
  return (
    <article className="card-surface flex h-full flex-col p-5 transition-[border-color,box-shadow] duration-150 hover:border-cardinal/40 hover:shadow-card-strong focus-within:border-cardinal/50">
      <p className="text-[12px] font-semibold uppercase tracking-wide text-cardinal">
        {CATEGORY_LABELS[pub.category] ?? pub.category}
      </p>
      <h3 className="mt-1.5 text-[16px] font-bold leading-snug text-navy">
        <a
          href={pub.pubmedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-cardinal focus-visible:underline"
        >
          {pub.title}
        </a>
      </h3>
      <p className="mt-1.5 text-[14px] leading-snug text-gray-dark">{pub.authors}</p>
      <p className="mt-0.5 text-[14px] italic text-gray-dark">
        {pub.journal} · {pub.year}
      </p>
      <div className="mt-auto flex flex-wrap gap-x-5 pt-2">
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
    </article>
  );
}
