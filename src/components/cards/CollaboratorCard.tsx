import { Icon } from "@/components/ui/Icon";
import type { Collaborator } from "@/lib/types";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[12px] font-semibold uppercase tracking-wide text-navy">
        {label}
      </p>
      <p className="mt-0.5 text-[14px] leading-relaxed text-gray-dark">{children}</p>
    </div>
  );
}

/**
 * Collaborator card. Leads with the person and their expertise, then the shared
 * work and why it matters (not a generic faculty bio). Composes the frozen
 * `.card-surface`.
 */
export function CollaboratorCard({ person }: { person: Collaborator }) {
  return (
    <article className="card-surface flex h-full flex-col p-6">
      <h3 className="font-heading text-[19px] font-bold leading-tight text-navy">
        {person.name}
        {person.degree ? (
          <span className="text-[14px] font-semibold text-gray-dark">, {person.degree}</span>
        ) : null}
      </h3>
      <p className="mt-1 text-[13px] font-semibold text-cardinal">
        {person.title ? `${person.title} · ` : ""}
        {person.institution}
      </p>
      {person.labName ? (
        <p className="mt-0.5 text-[13px] text-gray-dark">{person.labName}</p>
      ) : null}

      <div className="mt-4 space-y-3">
        <Field label="Expertise">{person.expertise}</Field>
        <Field label="Shared work">{person.sharedProject}</Field>
        <Field label="Why it matters">{person.collaborationSummary}</Field>
      </div>

      {person.url ? (
        <div className="mt-auto pt-5">
          <a
            href={person.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-cardinal hover:text-cardinal-dark hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cardinal/50"
          >
            View profile
            <Icon name="external" className="h-3.5 w-3.5" />
          </a>
        </div>
      ) : null}
    </article>
  );
}
