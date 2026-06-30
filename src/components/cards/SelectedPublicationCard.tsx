// APPROVED — finalized Publications-page component (2026-06-30). Reuse as-is;
// do not redesign without re-approval. See docs/DESIGN_SYSTEM_FROZEN.md
import { Icon } from "@/components/ui/Icon";
import { CATEGORY_LABELS } from "@/content/publications";
import type { SelectedPublication } from "@/lib/types";

/**
 * Compact, readable card for a selected publication (no figure). Fully
 * clickable: the title carries a stretched link to PubMed (whole card is the
 * PubMed target); the DOI link is raised above the overlay so it stays
 * independently clickable. Cardinal is used only for the category label and
 * links; the author list is the quietest element. Composes `.card-surface`.
 */
export function SelectedPublicationCard({ pub }: { pub: SelectedPublication }) {
  return (
    <article className="card-surface group relative flex h-full flex-col p-5 transition-[transform,border-color,box-shadow] duration-150 hover:-translate-y-0.5 hover:border-cardinal/40 hover:shadow-card-strong focus-within:ring-2 focus-within:ring-cardinal/50 focus-within:ring-offset-2">
      <p className="text-[12px] font-semibold uppercase tracking-wide text-cardinal">
        {CATEGORY_LABELS[pub.category] ?? pub.category}
      </p>
      <h3 className="mt-1.5 text-[17px] font-bold leading-snug text-navy">
        <a
          href={pub.pubmedUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${pub.title} — read on PubMed`}
          className="transition-colors after:absolute after:inset-0 hover:text-cardinal focus:outline-none"
        >
          {pub.title}
        </a>
      </h3>
      <p className="mt-1.5 text-[15px] font-normal leading-snug text-gray-dark">
        {pub.authors}
      </p>
      <p className="mt-1 text-[15px] italic text-gray-dark">
        {pub.journal} · {pub.year}
      </p>
      <div className="mt-auto flex flex-wrap items-center gap-x-5 pt-3 text-[15px] font-semibold">
        <span
          aria-hidden="true"
          className="inline-flex min-h-[44px] items-center gap-1.5 text-cardinal group-hover:text-cardinal-dark"
        >
          PubMed
          <Icon name="external" className="h-4 w-4" />
        </span>
        {pub.doiUrl ? (
          <a
            href={pub.doiUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`DOI for ${pub.title}`}
            className="relative z-10 inline-flex min-h-[44px] items-center gap-1.5 text-cardinal hover:text-cardinal-dark hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cardinal/50"
          >
            DOI
            <Icon name="external" className="h-4 w-4" />
          </a>
        ) : null}
      </div>
    </article>
  );
}
