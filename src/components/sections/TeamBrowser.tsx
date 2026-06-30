"use client";

import { useState } from "react";
import { PersonCard } from "@/components/cards/PersonCard";
import type { Person } from "@/lib/types";

/**
 * Filterable current-team grid. "All" shows every category grouped with
 * subheadings; selecting a category narrows to that group.
 */
export function TeamBrowser({
  people,
  categoryOrder,
}: {
  people: Person[];
  categoryOrder: { category: Person["category"]; heading: string }[];
}) {
  const present = categoryOrder.filter((c) =>
    people.some((p) => p.category === c.category),
  );
  const [cat, setCat] = useState<string>("all");
  const shown = cat === "all" ? present : present.filter((c) => c.category === cat);

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
      <div
        role="group"
        aria-label="Filter team by category"
        className="flex flex-wrap gap-2"
      >
        <button
          type="button"
          onClick={() => setCat("all")}
          aria-pressed={cat === "all"}
          className={chipClass(cat === "all")}
        >
          All
        </button>
        {present.map((c) => (
          <button
            key={c.category}
            type="button"
            onClick={() => setCat(c.category)}
            aria-pressed={cat === c.category}
            className={chipClass(cat === c.category)}
          >
            {c.heading}
          </button>
        ))}
      </div>

      {shown.map((c) => {
        const members = people.filter((p) => p.category === c.category);
        return (
          <section key={c.category} className="mt-10" aria-label={c.heading}>
            <h3 className="font-heading text-[20px] font-bold text-navy">
              {c.heading}
              <span className="ml-2 text-[15px] font-semibold text-gray-dark">
                ({members.length})
              </span>
            </h3>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {members.map((m) => (
                <PersonCard key={m.slug} person={m} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
