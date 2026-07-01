// APPROVED — finalized Team-page component (2026-06-30). Reuse as-is; do not
// redesign without re-approval. See docs/DESIGN_SYSTEM_FROZEN.md
import Image from "next/image";
import { asset } from "@/lib/asset";
import { Icon } from "@/components/ui/Icon";
import type { Person } from "@/lib/types";

function initials(name: string): string {
  const words = name.replace(/["']/g, "").trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

/**
 * Uniform team-grid card — identical styling for every member. A 4:5 headshot
 * (object-cover, per-person object-position) or a neutral initials avatar for a
 * real person with no photo yet (never an invented headshot). Name + optional
 * credentials, role, a concise bio, and an email link aligned to the bottom.
 * Composes the frozen `.card-surface`.
 */
export function PersonCard({ person }: { person: Person }) {
  return (
    <article className="card-surface group flex h-full flex-col overflow-hidden transition-[border-color,box-shadow] duration-150 hover:border-cardinal/30 hover:shadow-card-strong focus-within:border-cardinal/50">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-blue-light">
        {person.image ? (
          <Image
            src={asset(person.image)}
            alt={`${person.name}, ${person.role}`}
            fill
            loading="eager"
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1535px) 33vw, 25vw"
            className="object-cover"
            style={{ objectPosition: person.objectPosition ?? "50% 30%" }}
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center font-heading text-4xl font-bold text-cardinal"
          >
            {initials(person.name)}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-heading text-[16px] font-bold leading-tight text-navy">
          {person.name}
          {person.credentials ? (
            <span className="font-semibold text-gray-dark">, {person.credentials}</span>
          ) : null}
        </h3>
        <p className="mt-1 text-[13px] font-semibold leading-snug text-cardinal">
          {person.role}
        </p>
        <p className="mt-2 text-[14px] leading-relaxed text-gray-dark">{person.bio}</p>
        {person.email ? (
          <a
            href={`mailto:${person.email}`}
            className="mt-auto inline-flex w-fit items-center gap-1.5 pt-3 text-[14px] font-semibold text-cardinal hover:text-cardinal-dark hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cardinal/50"
          >
            <Icon name="mail" className="h-4 w-4" />
            Email
          </a>
        ) : null}
      </div>
    </article>
  );
}
