"use client";

// Approved 2026-07-01 — looping technique video for the Technologies page.
// Muted autoplay loop; pauses on the poster frame when the visitor prefers
// reduced motion. The poster (a video frame) is also the no-JS fallback.
import { useEffect, useRef } from "react";
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

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (mq.matches) {
        v.pause();
        v.currentTime = 0;
      } else {
        void v.play().catch(() => {});
      }
    };
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  return (
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
  );
}
