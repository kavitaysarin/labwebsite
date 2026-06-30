import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { TechnologyProgram } from "@/lib/types";

export function TechnologyDetail({
  program,
  reversed = false,
}: {
  program: TechnologyProgram;
  reversed?: boolean;
}) {
  return (
    <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
      {/* Image: 16:9 mobile, 4:3 desktop */}
      <div
        className={`relative aspect-[16/9] w-full overflow-hidden rounded-[10px] border border-border bg-navy lg:aspect-[4/3] ${
          reversed ? "lg:order-2" : ""
        }`}
      >
        <Image
          src={program.image}
          alt={program.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div>
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-light text-cardinal">
            <Icon name={program.icon} className="h-5 w-5" />
          </span>
          <span className="rounded-full border border-border bg-off-white px-2.5 py-0.5 text-[12px] font-semibold uppercase tracking-wide text-cardinal">
            {program.status}
          </span>
        </div>

        <h2 className="mt-3" style={{ fontSize: "clamp(1.6rem, 4vw, 2.1rem)" }}>
          {program.name}
        </h2>
        <p className="mt-3 text-[17px] leading-relaxed text-gray-dark">
          {program.whatItIs}
        </p>

        <dl className="mt-4 space-y-2 text-[16px] leading-relaxed">
          <div className="flex flex-wrap gap-x-2">
            <dt className="font-semibold text-navy">Signal:</dt>
            <dd className="text-gray-dark">{program.signal}</dd>
          </div>
          <div className="flex flex-wrap gap-x-2">
            <dt className="font-semibold text-navy">In the skin:</dt>
            <dd className="text-gray-dark">{program.connection}</dd>
          </div>
        </dl>

        <div className="mt-4">
          <p className="text-[14px] font-semibold text-navy">Applied to</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {program.appliedTo.map((a) => (
              <span
                key={a}
                className="rounded-full border border-border bg-off-white px-3 py-1 text-[13px] font-medium text-navy"
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        {program.collaboration ? (
          <p className="mt-4 text-[14px] text-gray-dark">{program.collaboration}</p>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
          {program.researchHref ? (
            <Link href={program.researchHref} className="font-semibold text-cardinal hover:underline">
              Related research →
            </Link>
          ) : null}
          {program.pubHref ? (
            <Link href={program.pubHref} className="font-semibold text-cardinal hover:underline">
              Related publications →
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
