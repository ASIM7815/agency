"use client";

import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { usePrefersReducedMotion } from "@/components/ui/anim";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  /** 0..1 — how strongly the element follows the cursor */
  strength?: number;
};

/** Subtle magnetic hover for CTAs (pointer-fine devices only). */
export function Magnetic({ children, className, strength = 0.2 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();

  const onMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate3d(0,0,0)";
  };

  return (
    <div
      ref={ref}
      className={className}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)", willChange: "transform" }}
    >
      {children}
    </div>
  );
}

type StatProps = {
  to: number;
  suffix?: string;
  label: string;
};

/**
 * Animated counter that counts up once when scrolled into view.
 * Reduced-motion users get the final value with no animation.
 */
export function StatCounter({ to, suffix = "", label }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();
  const [val, setVal] = useState(0);
  const ran = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || ran.current || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        ran.current = true;
        const duration = reduce ? 1 : 1600;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 4);
          setVal(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, reduce]);

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <span className="display-md text-metal">
        {val.toLocaleString("en-US")}
        {suffix}
      </span>
      <span className="text-faint text-sm tracking-wide">{label}</span>
    </div>
  );
}
