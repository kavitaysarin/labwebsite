"use client";

// APPROVED — finalized Lab Photos component (2026-06-30). Reuse as-is; do not
// redesign without re-approval. See docs/DESIGN_SYSTEM_FROZEN.md
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import type { GalleryImage } from "@/lib/types";

const INITIAL = 12; // photos shown before "Load More"

/**
 * Responsive people-focused masonry gallery. Natural landscape/portrait
 * proportions (no forced crop); image dimensions are set to prevent layout
 * shift. Shows the first group and a "Load More Photos" button (all photos stay
 * on the same page). Accessible lightbox: full image + caption, prev/next,
 * arrow-key navigation, Escape to close, focus trap, focus returned to the
 * opening thumbnail, and swipe on touch devices.
 */
export function PhotoGallery({
  images,
  categories,
}: {
  images: GalleryImage[];
  categories: string[];
}) {
  const [cat, setCat] = useState<string>("all");
  const [visible, setVisible] = useState(INITIAL);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const dialogRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);

  const shown = cat === "all" ? images : images.filter((i) => i.category === cat);
  const isOpen = openIdx !== null;
  const current = isOpen ? shown[openIdx] : null;

  const close = useCallback(() => {
    setOpenIdx((idx) => {
      if (idx !== null) requestAnimationFrame(() => triggerRefs.current[idx]?.focus());
      return null;
    });
  }, []);

  const step = useCallback(
    (delta: number) =>
      setOpenIdx((idx) => {
        if (idx === null) return idx;
        const next = (idx + delta + shown.length) % shown.length;
        // keep the target thumbnail rendered so focus-return works
        setVisible((v) => (next >= v ? next + 1 : v));
        return next;
      }),
    [shown.length],
  );

  // Reset when the filter changes.
  useEffect(() => {
    setOpenIdx(null);
    setVisible(INITIAL);
  }, [cat]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        step(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        step(-1);
      } else if (e.key === "Tab") {
        const f = dialogRef.current?.querySelectorAll<HTMLElement>("button");
        if (!f || f.length === 0) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => dialogRef.current?.querySelector<HTMLElement>("button")?.focus());
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, step]);

  const chipBase =
    "rounded-full border px-4 py-1.5 text-[14px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cardinal/50 focus-visible:ring-offset-1";
  const chipClass = (active: boolean) =>
    `${chipBase} ${active ? "border-cardinal bg-cardinal text-white" : "border-border bg-white text-navy hover:border-cardinal/40"}`;

  return (
    <div>
      {/* Filter */}
      <div role="group" aria-label="Filter photos by category" className="flex flex-wrap gap-2">
        <button type="button" onClick={() => setCat("all")} aria-pressed={cat === "all"} className={chipClass(cat === "all")}>
          All
        </button>
        {categories.map((c) => (
          <button key={c} type="button" onClick={() => setCat(c)} aria-pressed={cat === c} className={chipClass(cat === c)}>
            {c}
          </button>
        ))}
      </div>

      {/* Masonry (natural proportions) */}
      <ul className="mt-6 gap-4 columns-1 min-[500px]:columns-2 lg:columns-3">
        {shown.slice(0, visible).map((img, i) => (
          <li key={img.src} className="mb-4 break-inside-avoid">
            <button
              type="button"
              ref={(el) => {
                triggerRefs.current[i] = el;
              }}
              onClick={() => setOpenIdx(i)}
              className="group block w-full overflow-hidden rounded-[10px] border border-border bg-blue-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cardinal focus-visible:ring-offset-2"
              aria-label={`View larger: ${img.caption ?? img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                loading="eager"
                sizes="(max-width: 499px) 100vw, (max-width: 1023px) 50vw, 33vw"
                className="h-auto w-full transition-transform duration-200 group-hover:scale-[1.03]"
              />
            </button>
          </li>
        ))}
      </ul>

      {/* Load more */}
      {visible < shown.length ? (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => Math.min(v + INITIAL, shown.length))}
            className="inline-flex items-center gap-2 rounded-md border border-navy/40 px-5 py-2.5 text-[15px] font-semibold text-navy transition-colors hover:bg-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cardinal/50 focus-visible:ring-offset-2"
          >
            Load More Photos
            <span className="text-[13px] font-normal text-gray-dark group-hover:text-white">
              ({shown.length - visible} more)
            </span>
          </button>
        </div>
      ) : null}

      {/* Lightbox */}
      {isOpen && current ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep/90 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={current.caption ?? current.alt}
            className="relative flex max-h-full w-full max-w-5xl flex-col"
          >
            <div className="flex justify-end">
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="rounded-full p-2 text-white/90 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Icon name="close" className="h-6 w-6" />
              </button>
            </div>

            <div
              className="relative h-[68vh] w-full"
              onTouchStart={(e) => {
                touchX.current = e.changedTouches[0].clientX;
              }}
              onTouchEnd={(e) => {
                if (touchX.current === null) return;
                const dx = e.changedTouches[0].clientX - touchX.current;
                if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
                touchX.current = null;
              }}
            >
              <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
            </div>

            <div className="mt-3 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className="rounded-full border border-white/40 p-2 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Icon name="arrow-right" className="h-5 w-5 rotate-180" />
              </button>

              <p className="flex-1 text-center text-[14px] leading-snug text-white/90">
                {current.caption ?? current.alt}
                <span className="mt-0.5 block text-[12px] text-white/60">
                  {openIdx + 1} of {shown.length}
                </span>
              </p>

              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next photo"
                className="rounded-full border border-white/40 p-2 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Icon name="arrow-right" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
