import { ArrowLink } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import type { Publication } from "@/lib/types";

export function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-white">
      <Placeholder ratio="aspect-[16/9]" icon="document" />
      <div className="flex flex-1 flex-col p-5">
        <p className="flex flex-wrap items-center gap-x-2 text-[11px] font-semibold uppercase tracking-wide">
          <span className="text-cardinal">{pub.researchArea}</span>
          {pub.date ? (
            <>
              <span className="text-gray-light">•</span>
              <span className="text-gray">{pub.date}</span>
            </>
          ) : null}
        </p>
        <h3 className="mt-2.5 line-clamp-4 text-[17px] leading-snug">{pub.title}</h3>
        <p className="mt-2 text-sm italic text-gray-dark">{pub.journal}</p>
        <div className="mt-auto pt-4">
          <ArrowLink href={pub.pubmedUrl ?? pub.doiUrl ?? "#"} external>
            Read on PubMed
          </ArrowLink>
        </div>
      </div>
    </article>
  );
}
