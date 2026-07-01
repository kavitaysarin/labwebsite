import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import type { Collaborator } from "@/lib/types";

function initials(name: string): string {
  const words = name.replace(/["']/g, "").trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

/**
 * Collaborator card: 4:5 official portrait (object-cover + per-person
 * object-position) or initials fallback; name + credentials; title +
 * institution; one expertise sentence; one collaboration sentence; and a
 * "View Stanford Profile" link that stretches over the whole card (fully
 * clickable) while remaining the accessible link label. Composes `.card-surface`.
 */
export function CollaboratorCard({ person }: { person: Collaborator }) {
  return (
    <article className="card-surface group relative flex h-full flex-col overflow-hidden transition-[border-color,box-shadow,transform] duration-150 hover:-translate-y-0.5 hover:border-cardinal/30 hover:shadow-card-strong focus-within:border-cardinal/50">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-blue-light">
        {person.image ? (
          <Image
            src={person.image}
            alt={person.name}
            fill
            loading="eager"
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
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

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-[17px] font-bold leading-tight text-navy">
          {person.name}
          {person.degree ? (
            <span className="font-semibold text-gray-dark">, {person.degree}</span>
          ) : null}
        </h3>
        {person.title ? (
          <p className="mt-1 text-[13px] font-semibold leading-snug text-cardinal">
            {person.title}
          </p>
        ) : null}
        <p className="mt-0.5 text-[13px] leading-snug text-gray-dark">{person.institution}</p>

        <p className="mt-3 text-[14px] leading-relaxed text-gray-dark">{person.expertise}</p>
        <p className="mt-2 text-[14px] leading-relaxed text-gray-dark">{person.collaboration}</p>

        {person.url ? (
          <div className="mt-auto pt-4">
            <a
              href={person.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-cardinal after:absolute after:inset-0 hover:text-cardinal-dark hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cardinal/50"
            >
              View Stanford Profile
              <Icon name="external" className="h-4 w-4" />
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
}
