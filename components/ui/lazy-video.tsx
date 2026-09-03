"use client";

import { useEffect, useRef, useState } from "react";

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
 */
export function LazyVideo({ src, poster, className = "", decorative = false, label }: LazyVideoProps) {
  const wrap = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(false);

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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const v = videoRef.current;
    if (!v) return;
    v.src = src;
    v.load();
    const p = v.play();
    p?.catch(() => {
      /* autoplay blocked — poster stays visible */
    });
  }, [near, src]);

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
        aria-label={decorative ? undefined : label}
        aria-hidden={decorative || undefined}
        tabIndex={-1}
      />
    </div>
  );
}
