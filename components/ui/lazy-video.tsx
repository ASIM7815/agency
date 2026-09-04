"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type LazyVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  decorative?: boolean;
  label?: string;
};

export function LazyVideo({
  src,
  poster,
  className = "",
  decorative = false,
  label,
}: LazyVideoProps) {
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

  useEffect(() => {
    if (!near) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const v = videoRef.current;
    if (!v) return;

    v.pause();

    // Completely replace the previous media source.
    v.removeAttribute("src");
    v.load();

    v.src = src;
    v.load();

    v.muted = true;
    v.loop = true;
    v.playsInline = true;

    wantPlay.current = true;

    v.play().catch(() => {
      // Autoplay may be blocked; onCanPlay / pointer interaction retries it.
    });

    return () => {
      v.pause();
      v.removeAttribute("src");
      v.load();
    };
  }, [near, src]);

  const tryPlay = useCallback(() => {
    if (!wantPlay.current) return;

    const v = videoRef.current;
    if (!v) return;

    v.muted = true;

    v.play().catch(() => {});
  }, []);

  useEffect(() => {
    if (!near) return;

    window.addEventListener("pointerdown", tryPlay, {
      once: true,
      passive: true,
    });

    return () => {
      window.removeEventListener("pointerdown", tryPlay);
    };
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
