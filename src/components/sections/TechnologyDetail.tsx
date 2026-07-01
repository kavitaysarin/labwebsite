// FROZEN — approved Technologies page component (QA-passed 2026-06-29; optional
// looping video added 2026-07-01). Reuse as-is; do not modify without
// re-approval. See docs/DESIGN_SYSTEM_FROZEN.md
import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";
import { TechVideo } from "./TechVideo";
import type { TechnologyProgram } from "@/lib/types";

export function TechnologyDetail({
  program,
  reversed = false,
}: {
  program: TechnologyProgram;
  reversed?: boolean;
}) {
  const contain = program.fit === "contain";
  return (
    <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
      {/* Image: consistent 4:3 on all viewports */}
      <div
        className={`relative aspect-[4/3] w-full overflow-hidden rounded-[10px] border border-border ${
          contain ? "bg-white" : "bg-navy"
        } ${reversed ? "lg:order-2" : ""}`}
      >
        {program.video ? (
          <TechVideo
            mp4={program.video.mp4}
            webm={program.video.webm}
            poster={program.image}
            label={program.imageAlt}
            className={`absolute inset-0 h-full w-full ${contain ? "object-contain p-3" : "object-cover"}`}
          />
        ) : (
          <Image
            src={asset(program.image)}
            alt={program.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            loading="eager"
            className={contain ? "object-contain p-3" : "object-cover"}
          />
        )}
      </div>

      {/* Content */}
      <div>
        <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.1rem)" }}>{program.name}</h2>
        <p className="mt-3 text-[17px] leading-relaxed text-gray-dark">
          {program.lead}
        </p>
        <p className="mt-3 text-[16px] leading-relaxed text-gray-dark">
          <span className="font-semibold text-navy">What it reveals: </span>
          {program.whatItReveals}
        </p>

        <div className="mt-4">
          <p className="text-[14px] font-semibold text-navy">Applications</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {program.appliedTo.slice(0, 3).map((a) => (
              <span
                key={a}
                className="rounded-full border border-border bg-off-white px-3 py-1 text-[13px] font-medium text-navy"
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        {program.collaborators?.length ? (
          <p className="mt-4 text-[14px] text-gray-dark">
            In collaboration with{" "}
            {program.collaborators.map((c, idx, arr) => {
              const sep =
                idx === 0
                  ? ""
                  : idx === arr.length - 1
                    ? arr.length > 2
                      ? ", and "
                      : " and "
                    : ", ";
              return (
                <span key={c.name}>
                  {sep}
                  {c.url ? (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-cardinal hover:underline"
                    >
                      {c.name}
                    </a>
                  ) : (
                    c.name
                  )}
                </span>
              );
            })}
          </p>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
          {program.researchHref ? (
            <Link href={program.researchHref} className="font-semibold text-cardinal hover:underline">
              Related Research →
            </Link>
          ) : null}
          {program.pubHref ? (
            <Link href={program.pubHref} className="font-semibold text-cardinal hover:underline">
              Related Publications →
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
