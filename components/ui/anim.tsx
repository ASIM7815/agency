"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

/** SSR-safe prefers-reduced-motion observer (false until mounted). */
export function usePrefersReducedMotion(): boolean {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);
  return reduce;
}

/**
 * When `hidden` is true the element sits at opacity 0 / translated, but the
 * transition is only applied while *un*hiding, so content above the fold
 * never flickers and no-JS visitors see everything.
 */
function useScrollReveal(y: number) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (reduce) return; // reduced motion: keep content visible
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    // above the fold at mount — no need to hide
    const r = el.getBoundingClientRect();
    if (r.top >= 0 && r.bottom <= window.innerHeight * 1.05) return;

    setHidden(true);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setHidden(false);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -7% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  return { ref, hidden, y };
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** seconds */
  delay?: number;
  /** initial vertical offset in px */
  y?: number;
  duration?: number;
  style?: CSSProperties;
};

/** Scroll-triggered reveal (SSR-safe, reduced-motion aware). */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  duration = 0.8,
  style,
}: RevealProps) {
  const { ref, hidden, y: dy } = useScrollReveal(y);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: hidden ? 0 : 1,
        transform: hidden ? `translate3d(0, ${dy}px, 0)` : "none",
        transition: hidden
          ? "none"
          : `opacity ${duration}s ${EASE} ${delay}s, transform ${duration}s ${EASE} ${delay}s`,
        willChange: hidden ? "opacity, transform" : undefined,
      }}
    >
      {children}
    </div>
  );
}

type LineRevealProps = {
  text: ReactNode;
  className?: string;
  delay?: number;
  /** stagger between words in seconds */
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
};

/** Word-by-word rise reveal for headlines. */
export function LineReveal({
  text,
  className,
  delay = 0,
  stagger = 0.055,
  as: Tag = "span",
}: LineRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();
  const [shown, setShown] = useState(true);
  const words = typeof text === "string" ? text.split(" ") : [text];

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const r = el.getBoundingClientRect();
    if (r.top >= 0 && r.bottom <= window.innerHeight * 1.05) return;

    setShown(false);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  return (
    <Tag className={className} ref={ref as never}>
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom"
        >
          <span
            className="inline-block"
            style={{
              opacity: shown ? 1 : 0,
              transform: shown
                ? "translate3d(0,0,0) rotate(0)"
                : "translate3d(0,0.6em,0) rotate(3deg)",
              transition: shown
                ? `opacity 0.7s ${EASE} ${delay + i * stagger}s, transform 0.7s ${EASE} ${delay + i * stagger}s`
                : "none",
            }}
          >
            {w}
          </span>
          {i < words.length - 1 ? "\u00A0" : null}
        </span>
      ))}
    </Tag>
  );
}
