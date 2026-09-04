"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type LazyVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  /** aria-hidden decorative ambient video */
  decorative?: boolean;
  label?: string;
};

/**
 * Video that only starts loading when it approaches the viewport.
 * Muted + plays-inline only; fully static (poster) under reduced motion.
 * Playback is defensive: it retries once data arrives (`canplay`) and once
 * more on the first user gesture, in case autoplay was blocked.
 */
export function LazyVideo({ src, poster, className = "", decorative = false, label }: LazyVideoProps) {
  const wrap = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(false);
  const wantPlay = useRef(false);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // near the viewport → attach the source and start playing
  useEffect(() => {
    if (!near) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const v = videoRef.current;
    if (!v) return;

    v.muted = true; // set imperatively too — guards SSR not serializing `muted`
    if (v.src !== src) {
      v.src = src;
      v.load();
    }
    wantPlay.current = true;
    v.play().catch(() => {
      /* autoplay blocked — retried on canplay / first interaction */
    });
  }, [near, src]);

  const tryPlay = useCallback(() => {
    if (!wantPlay.current) return;
    videoRef.current?.play().catch(() => {
      /* keep the poster visible */
    });
  }, []);

  // if autoplay was refused, retry on the visitor's first interaction
  useEffect(() => {
    if (!near) return;
    window.addEventListener("pointerdown", tryPlay, { once: true, passive: true });
    return () => window.removeEventListener("pointerdown", tryPlay);
  }, [near, tryPlay]);

  return (
    <div ref={wrap} className={`relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
        onCanPlay={tryPlay}
        aria-label={decorative ? undefined : label}
        aria-hidden={decorative || undefined}
        tabIndex={-1}
      />
    </div>
  );
}
