import Image from "next/image";
import { ArrowLink } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import type { Publication } from "@/lib/types";

export function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white">
      {pub.image ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-navy">
          <Image
            src={pub.image}
            alt={pub.imageAlt ?? ""}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      ) : (
        <Placeholder ratio="aspect-[16/9]" icon="document" />
      )}
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
        {/* Reserve ~4 lines so the journal + link align across cards */}
        <h3 className="mt-3 line-clamp-4 min-h-[5.5rem] text-[17px] leading-snug">
          {pub.title}
        </h3>
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
