import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { ResearchPillar as Pillar } from "@/lib/types";

export function ResearchPillar({
  pillar,
  reversed = false,
}: {
  pillar: Pillar;
  reversed?: boolean;
}) {
  return (
    <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
      {/* Image */}
      <div
        className={`relative aspect-[4/3] w-full overflow-hidden rounded-[10px] border border-border bg-navy lg:sticky lg:top-[calc(var(--header-h)+24px)] ${
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
        <h2 className="mt-3" style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)" }}>
          {pillar.title}
        </h2>
        <p className="mt-3 text-[17px] leading-relaxed text-gray-dark">
          {pillar.lead}
        </p>

        <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-navy">
          Current projects
        </h3>
        <ul className="mt-2 space-y-2 text-[15px] text-gray-dark">
          {pillar.projects.map((p) => (
            <li key={p} className="flex gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cardinal" aria-hidden="true" />
              <span>{p}</span>
            </li>
          ))}
        </ul>

        <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-navy">
          Where we apply it
        </h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {pillar.applications.map((a) => (
            <span
              key={a}
              className="rounded-full border border-border bg-off-white px-3 py-1 text-[13px] font-medium text-navy"
            >
              {a}
            </span>
          ))}
        </div>

        <dl className="mt-5 grid gap-x-6 gap-y-2 rounded-[10px] border border-border bg-cream/70 p-4 text-[14px] sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-navy">Established</dt>
            <dd className="mt-0.5 text-gray-dark">{pillar.established}</dd>
          </div>
          <div>
            <dt className="font-semibold text-navy">Exploring</dt>
            <dd className="mt-0.5 text-gray-dark">{pillar.exploring}</dd>
          </div>
        </dl>

        <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-navy">
          Selected publications
        </h3>
        <ul className="mt-2 space-y-2">
          {pillar.publications.map((pub) => (
            <li key={pub.pmid} className="text-[14px] leading-snug">
              <a
                href={`https://pubmed.ncbi.nlm.nih.gov/${pub.pmid}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-navy hover:text-cardinal hover:underline"
              >
                {pub.title}
              </a>
              <span className="text-gray-dark"> — {pub.journal}, {pub.year}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 border-t border-border pt-4 text-[14px] text-gray-dark">
          <p>
            <span className="font-semibold text-navy">Technologies: </span>
            {pillar.technologies.map((t, i) => (
              <span key={t.href}>
                {i > 0 ? " · " : ""}
                <Link href={t.href} className="text-cardinal hover:underline">
                  {t.label}
                </Link>
              </span>
            ))}
          </p>
          <p className="mt-2">
            <span className="font-semibold text-navy">Collaborators: </span>
            <Link href={pillar.collaborators.href} className="text-cardinal hover:underline">
              {pillar.collaborators.label}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
