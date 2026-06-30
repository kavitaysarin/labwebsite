import { Icon } from "@/components/ui/Icon";
import { CATEGORY_LABELS } from "@/content/publications";
import type { SelectedPublication } from "@/lib/types";

/**
 * Featured publication card. Consistent image-free treatment for all featured
 * cards (a cardinal top accent + category label) — we only have a rights-cleared
 * figure for some papers, so we use no images rather than a mismatched mix.
 *
 * Fully clickable: the title carries a stretched link to PubMed, so the whole
 * card is the PubMed target; the DOI link is raised above that overlay so it
 * stays independently clickable. Composes the frozen `.card-surface-strong`.
 */
export function FeaturedPublicationCard({ pub }: { pub: SelectedPublication }) {
  const label = CATEGORY_LABELS[pub.category] ?? pub.category;
  return (
    <article className="card-surface-strong group relative flex h-full flex-col border-t-[3px] border-t-cardinal p-5 transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:shadow-card-strong focus-within:ring-2 focus-within:ring-cardinal/50 focus-within:ring-offset-2">
      <p className="text-[12px] font-semibold uppercase tracking-wide text-cardinal">
        {label}
      </p>
      <h3 className="mt-1.5 text-[18px] font-bold leading-snug text-navy">
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
      <p className="mt-1 text-[15px] italic text-gray-dark">
        {pub.journal} · {pub.year}
      </p>
      {pub.summary ? (
        <p className="mt-2 text-[15px] leading-relaxed text-gray-dark">{pub.summary}</p>
      ) : null}
      <div className="mt-auto flex flex-wrap items-center gap-x-5 pt-3 text-[15px] font-semibold">
        <span
          aria-hidden="true"
          className="inline-flex min-h-[44px] items-center gap-1.5 text-cardinal group-hover:text-cardinal-dark"
        >
          Read on PubMed
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
