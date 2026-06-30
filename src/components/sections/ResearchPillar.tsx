import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { ArrowLink } from "@/components/ui/Button";
import type { ResearchPillar as Pillar } from "@/lib/types";

export function ResearchPillar({
  pillar,
  reversed = false,
}: {
  pillar: Pillar;
  reversed?: boolean;
}) {
  return (
    <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
      {/* Image: 16:9 on mobile, 4:3 on desktop */}
      <div
        className={`relative aspect-[16/9] w-full overflow-hidden rounded-[10px] border border-border bg-navy lg:aspect-[4/3] ${
          reversed ? "lg:order-2" : ""
        }`}
      >
        <Image
          src={pillar.image}
          alt={pillar.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div>
        <p className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-light text-cardinal">
            <Icon name={pillar.icon} className="h-5 w-5" />
          </span>
          <span className="eyebrow">{pillar.signal}</span>
        </p>
        <h2 className="mt-3" style={{ fontSize: "clamp(1.6rem, 4vw, 2.1rem)" }}>
          {pillar.title}
        </h2>
        <p className="mt-3 text-[17px] leading-relaxed text-gray-dark">
          {pillar.lead}
        </p>

        <h3 className="mt-5 text-[15px] font-semibold text-navy">
          Selected projects
        </h3>
        <ul className="mt-3 space-y-2.5 text-[16px] leading-relaxed text-gray-dark">
          {pillar.projects.slice(0, 3).map((p) => (
            <li key={p} className="flex gap-3">
              <span className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full bg-cardinal" aria-hidden="true" />
              <span>{p}</span>
            </li>
          ))}
        </ul>

        {pillar.pubHref ? (
          <div className="mt-5">
            <ArrowLink href={pillar.pubHref}>View related publications</ArrowLink>
          </div>
        ) : null}
      </div>
    </div>
  );
}
