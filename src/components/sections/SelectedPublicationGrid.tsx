"use client";

// Approved 2026-07-01 — Publications section grid with a collapse/expand control.
// Shows the first two rows (6 cards on wide desktop); a "Show more" button
// reveals the rest for sections longer than that.
import { useState } from "react";
import { SelectedPublicationCard } from "@/components/cards/SelectedPublicationCard";
import { Icon } from "@/components/ui/Icon";
import type { SelectedPublication } from "@/lib/types";

const INITIAL = 6; // two rows at the widest (3-column) layout

export function SelectedPublicationGrid({
  pubs,
  heading,
}: {
  pubs: SelectedPublication[];
  heading: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = pubs.length > INITIAL;
  const shown = expanded ? pubs : pubs.slice(0, INITIAL);

  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-8 lg:gap-x-6 lg:gap-y-5 xl:grid-cols-3">
        {shown.map((pub) => (
          <SelectedPublicationCard key={pub.pubmedUrl} pub={pub} />
        ))}
      </div>

      {hasMore ? (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-navy/40 px-5 py-2.5 text-[15px] font-semibold text-navy transition-colors hover:bg-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cardinal/50 focus-visible:ring-offset-2"
          >
            {expanded ? (
              <>
                Show fewer
                <Icon name="arrow-right" className="h-4 w-4 -rotate-90" />
              </>
            ) : (
              <>
                Show {pubs.length - INITIAL} more in {heading}
                <Icon name="arrow-right" className="h-4 w-4 rotate-90" />
              </>
            )}
          </button>
        </div>
      ) : null}
    </>
  );
}
