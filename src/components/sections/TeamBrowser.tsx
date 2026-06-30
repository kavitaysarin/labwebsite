"use client";

// APPROVED — finalized Team-page component (2026-06-30). Reuse as-is; do not
// redesign without re-approval. See docs/DESIGN_SYSTEM_FROZEN.md
import { useState } from "react";
import { PersonCard } from "@/components/cards/PersonCard";
import type { Person } from "@/lib/types";

/**
 * Unified, egalitarian team grid. All current members appear together in one
 * grid (PI first, then alphabetical). Optional filter chips narrow the SAME
 * grid without creating stacked sections. Default = "all". "Alumni" is a filter
 * category (kept out of the default current-team view); with no verified alumni
 * yet it shows a concise "coming soon" note.
 */
export function TeamBrowser({
  people,
  filters,
  alumni,
}: {
  people: Person[];
  filters: { key: string; label: string }[];
  alumni: Person[];
}) {
  const [filter, setFilter] = useState<string>("all");
  const isAlumni = filter === "Alumni";
  const shown = isAlumni
    ? alumni
    : filter === "all"
      ? people
      : people.filter((p) => p.category === filter);

  const chipBase =
    "rounded-full border px-4 py-1.5 text-[14px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cardinal/50 focus-visible:ring-offset-1";
  const chipClass = (active: boolean) =>
    `${chipBase} ${
      active
        ? "border-cardinal bg-cardinal text-white"
        : "border-border bg-white text-navy hover:border-cardinal/40"
    }`;

  return (
    <div>
      {/* Optional filter controls */}
      <div role="group" aria-label="Filter team by role" className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            aria-pressed={filter === f.key}
            className={chipClass(filter === f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {!isAlumni ? (
        <p aria-live="polite" className="mt-4 text-[14px] text-gray-dark">
          {filter === "all" ? "All current members" : `${shown.length} member${shown.length === 1 ? "" : "s"}`}
        </p>
      ) : null}

      {/* One cohesive grid */}
      {isAlumni && alumni.length === 0 ? (
        <div className="mt-6 max-w-3xl">
          <p className="text-[15px] leading-relaxed text-gray-dark">
            Our alumni have gone on to careers across medicine, industry, and
            research. A full alumni roster is being compiled and will appear here
            soon.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {shown.map((p) => (
            <PersonCard key={p.slug} person={p} />
          ))}
        </div>
      )}
    </div>
  );
}
