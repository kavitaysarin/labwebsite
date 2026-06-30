import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import type { Person } from "@/lib/types";

function initials(name: string): string {
  const words = name.replace(/["']/g, "").trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

/**
 * Profile card for a lab member. Uses the person's headshot when one is
 * supplied; otherwise shows a neutral initials avatar (a placeholder for a real
 * person — NOT an invented headshot). Composes the frozen `.card-surface`.
 */
export function PersonCard({ person, featured = false }: { person: Person; featured?: boolean }) {
  return (
    <article
      className={`card-surface flex h-full flex-col p-5 ${
        featured ? "sm:flex-row sm:items-start sm:gap-6 sm:p-6" : ""
      }`}
    >
      <div className={`flex items-center gap-4 ${featured ? "sm:block sm:flex-none" : ""}`}>
        <div
          className={`relative flex flex-none items-center justify-center overflow-hidden rounded-full bg-blue-light font-heading font-bold text-cardinal ${
            featured ? "h-20 w-20 text-2xl" : "h-14 w-14 text-lg"
          }`}
          aria-hidden={person.image ? undefined : true}
        >
          {person.image ? (
            <Image
              src={person.image}
              alt={`${person.name} headshot`}
              fill
              sizes="80px"
              className="object-cover"
            />
          ) : (
            <span>{initials(person.name)}</span>
          )}
        </div>

        <div className={featured ? "sm:hidden" : ""}>
          <h3 className="font-heading text-[17px] font-bold leading-tight text-navy">
            {person.name}
          </h3>
          <p className="mt-0.5 text-[13px] font-semibold text-cardinal">{person.role}</p>
        </div>
      </div>

      <div className={featured ? "mt-4 sm:mt-0 sm:flex-1" : "mt-3"}>
        {featured ? (
          <div className="hidden sm:block">
            <h3 className="font-heading text-[22px] font-bold leading-tight text-navy">
              {person.name}
            </h3>
            <p className="mt-1 text-[14px] font-semibold text-cardinal">{person.role}</p>
          </div>
        ) : null}

        <p
          className={`text-[14px] leading-relaxed text-gray-dark ${
            featured ? "sm:mt-3 sm:text-[15px]" : ""
          }`}
        >
          {person.bio}
        </p>

        {person.email ? (
          <a
            href={`mailto:${person.email}`}
            className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-semibold text-cardinal hover:text-cardinal-dark hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cardinal/50"
          >
            <Icon name="mail" className="h-4 w-4" />
            {person.email}
          </a>
        ) : null}
      </div>
    </article>
  );
}
