"use client";

// Approved 2026-07-01 — looping technique video for the Technologies page.
// The clips are short, muted, informative loops, so they autoplay for every
// visitor. A visible pause/play control gives visitors — including those who
// prefer reduced motion — a way to stop the motion (WCAG 2.2.2), rather than
// forcing the video to freeze on its poster for reduced-motion users. The
// poster (a video frame) remains the no-JS / still fallback.
import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";

export function TechVideo({
  mp4,
  webm,
  poster,
  label,
  className,
}: {
  mp4: string;
  webm?: string;
  poster: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  // Kick off muted autoplay. React does not reliably reflect the `muted` prop
  // to the DOM property, so set it explicitly before play() or the browser's
  // autoplay policy can block an "unmuted" play() and leave the poster frozen.
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    void v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.muted = true;
      void v.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <video
        ref={ref}
        className={className}
        poster={asset(poster)}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
      >
        {webm ? <source src={asset(webm)} type="video/webm" /> : null}
        <source src={asset(mp4)} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause video" : "Play video"}
        className="absolute bottom-2.5 right-2.5 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy-deep/65 text-white backdrop-blur-sm transition-colors hover:bg-navy-deep/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
      >
        {playing ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] translate-x-[1px]" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </>
  );
}
