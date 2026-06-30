"use client";

import { useEffect, useMemo, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { PublicationListItem } from "@/components/cards/PublicationListItem";
import {
  ALL_PUBLICATIONS,
  PUBLICATION_FILTER_AREAS,
  PUBLICATION_YEARS,
  areaSlug,
} from "@/content/publications";
import { SITE } from "@/content/site";

/**
 * Client-side Publications browser: text search + research-area filter + year
 * filter over the verified ALL_PUBLICATIONS list. Reads a `?area=` deep link on
 * mount (used by the Research and Technologies "View related publications"
 * links). Static-export safe — no useSearchParams/Suspense needed.
 */
export function PublicationsBrowser() {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState("all");
  const [year, setYear] = useState("all");

  useEffect(() => {
    const a = new URLSearchParams(window.location.search).get("area");
    if (a && PUBLICATION_FILTER_AREAS.some((f) => f.slug === a)) setArea(a);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_PUBLICATIONS.filter((p) => {
      if (area !== "all" && areaSlug(p.researchArea) !== area) return false;
      if (year !== "all" && String(p.year) !== year) return false;
      if (q && !`${p.title} ${p.authors} ${p.journal}`.toLowerCase().includes(q))
        return false;
      return true;
    });
  }, [query, area, year]);

  const hasFilters = query.trim() !== "" || area !== "all" || year !== "all";
  const reset = () => {
    setQuery("");
    setArea("all");
    setYear("all");
  };

  const chipBase =
    "rounded-full border px-4 py-1.5 text-[14px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cardinal/50 focus-visible:ring-offset-1";

  return (
    <div>
      {/* Controls */}
      <div className="card-surface p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          {/* Search */}
          <div className="lg:max-w-md lg:flex-1">
            <label
              htmlFor="pub-search"
              className="mb-1.5 block text-[13px] font-semibold text-navy"
            >
              Search publications
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-dark">
                <Icon name="search" className="h-4 w-4" />
              </span>
              <input
                id="pub-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Title, author, or journal…"
                className="w-full rounded-lg border border-border bg-white py-2 pl-9 pr-3 text-[15px] text-navy placeholder:text-gray focus-visible:border-cardinal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cardinal/40"
              />
            </div>
          </div>

          {/* Year filter */}
          <div>
            <label
              htmlFor="pub-year"
              className="mb-1.5 block text-[13px] font-semibold text-navy"
            >
              Year
            </label>
            <select
              id="pub-year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full rounded-lg border border-border bg-white px-3 py-2 text-[15px] text-navy focus-visible:border-cardinal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cardinal/40 lg:w-auto"
            >
              <option value="all">All years</option>
              {PUBLICATION_YEARS.map((y) => (
                <option key={y} value={String(y)}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Area chips */}
        <div
          role="group"
          aria-label="Filter by research area"
          className="mt-4 flex flex-wrap gap-2"
        >
          <button
            type="button"
            onClick={() => setArea("all")}
            aria-pressed={area === "all"}
            className={`${chipBase} ${
              area === "all"
                ? "border-cardinal bg-cardinal text-white"
                : "border-border bg-white text-navy hover:border-cardinal/40"
            }`}
          >
            All areas
          </button>
          {PUBLICATION_FILTER_AREAS.map((f) => (
            <button
              key={f.slug}
              type="button"
              onClick={() => setArea(f.slug)}
              aria-pressed={area === f.slug}
              className={`${chipBase} ${
                area === f.slug
                  ? "border-cardinal bg-cardinal text-white"
                  : "border-border bg-white text-navy hover:border-cardinal/40"
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>
      </div>

      {/* Result count */}
      <div
        aria-live="polite"
        className="mt-6 flex flex-wrap items-center justify-between gap-2"
      >
        <p className="text-[15px] text-gray-dark">
          Showing <span className="font-semibold text-navy">{filtered.length}</span>{" "}
          of {ALL_PUBLICATIONS.length} publications
        </p>
        {hasFilters ? (
          <button
            type="button"
            onClick={reset}
            className="text-[14px] font-semibold text-cardinal hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cardinal/50"
          >
            Clear filters
          </button>
        ) : null}
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {filtered.map((p) => (
            <PublicationListItem key={p.pmid ?? p.title} pub={p} />
          ))}
        </div>
      ) : (
        <div className="card-surface mt-4 p-10 text-center">
          <p className="font-heading text-[18px] font-bold text-navy">
            No publications match your filters
          </p>
          <p className="mx-auto mt-2 max-w-md text-[15px] text-gray-dark">
            Try a different search term or research area, or clear the filters to
            see all publications.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-cardinal px-4 py-2 text-[14px] font-semibold text-cardinal transition-colors hover:bg-cardinal hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cardinal/50"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Full list pointer */}
      <p className="mt-8 text-[15px] text-gray-dark">
        This list reflects records indexed in PubMed.{" "}
        <a
          href={SITE.pubmedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-cardinal hover:underline"
        >
          View the complete, always-current list on PubMed
          <Icon name="external" className="ml-1 inline h-3.5 w-3.5 align-[-2px]" />
        </a>
      </p>
    </div>
  );
}
