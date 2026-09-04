import type { ReactNode } from "react";
import { LazyVideo } from "@/components/ui/lazy-video";

const ACCENTS = {
  acid: { bar: "#c8ff3d", text: "#c8ff3d", chipBg: "rgba(200,255,61,.12)", line: "rgba(200,255,61,.5)" },
  violet: { bar: "#8b7cff", text: "#a79dff", chipBg: "rgba(139,124,255,.14)", line: "rgba(139,124,255,.55)" },
  aqua: { bar: "#34e6c8", text: "#5ef0d8", chipBg: "rgba(52,230,200,.12)", line: "rgba(52,230,200,.5)" },
  ember: { bar: "#ff5c38", text: "#ff8a6f", chipBg: "rgba(255,92,56,.13)", line: "rgba(255,92,56,.55)" },
} as const;

type Accent = keyof typeof ACCENTS;

export function accentOf(a: Accent) {
  return ACCENTS[a];
}

/* ------------------------------------------------------------------ */
/*  Code window — terminal-style panel with traffic lights             */
/* ------------------------------------------------------------------ */

export function CodeWindow({
  title,
  children,
  className = "",
  footer,
  hideHeader = false,
}: {
  title: string;
  children: ReactNode;
  className?: string;
  footer?: ReactNode;
  hideHeader?: boolean;
}) {
  return (
    <div className={`code-window ${className}`}>
      {!hideHeader && (
        <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
          <div className="code-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="ml-1 flex min-w-0 items-center gap-2 text-[11px] text-dim">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-acid/80" aria-hidden="true" />
            <span className="truncate font-mono tracking-wide">{title}</span>
          </div>
          {footer}
        </div>
      )}
      <div className="code-scroll overflow-x-auto px-4 py-4 sm:px-5 sm:py-5">{children}</div>
    </div>
  );
}

/** Colored key → value line for code panels. */
export function KV({ k, v, tone = "bone" }: { k: string; v: ReactNode; tone?: "bone" | "fog" | "acid" }) {
  return (
    <p className="text-mono-code text-[13px] leading-7">
      <span className="text-bone/45">{k}</span>
      <span className={tone === "acid" ? "text-acid" : tone === "fog" ? "text-bone/70" : "text-bone/90"}>
        {v}
      </span>
    </p>
  );
}

/* ------------------------------------------------------------------ */
/*  Product screen mock — the NONAME visual language for products      */
/* ------------------------------------------------------------------ */

export function ScreenMock({
  title,
  meta,
  accent,
  body,
  bars,
  className = "",
  active,
  video,
  videoPoster,
  videoLabel,
}: {
  title: string;
  meta: string;
  accent: Accent;
  body: string[];
  bars?: number[];
  className?: string;
  active?: boolean;
  /** optional video src — when set, plays inside the window body instead of the mock UI */
  video?: string;
  /** poster frame shown before the video loads / under reduced motion */
  videoPoster?: string;
  /** accessible label for the video */
  videoLabel?: string;
}) {
  const a = ACCENTS[accent];

  return (
    <div
      className={`relative flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-white/[0.07] bg-[#0a0b0d] text-left shadow-[0_24px_60px_-24px_rgba(0,0,0,.8)] ${className}`}
    >
      {/* chrome */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-3 py-2">
        <span className="code-dots !gap-[4px]" aria-hidden="true"><span /><span /><span /></span>
        <span className="mx-auto flex items-center gap-1.5 rounded-md border border-white/[0.06] bg-white/[0.03] px-3 py-[3px] text-[10px] font-mono text-faint">
          <span className="h-1 w-1 rounded-full" style={{ background: a.text }} />
          {title}
        </span>
        <span className="w-10" />
      </div>

      {/* body */}
      {video ? (
        <div className="relative aspect-[4/3] w-full shrink-0 grow-0 overflow-hidden bg-black sm:aspect-[16/9] lg:aspect-[21/9] lg:max-h-[64vh]">
          <LazyVideo
            src={video}
            poster={videoPoster}
            label={videoLabel ?? title}
            className="absolute inset-0 h-full w-full"
          />
        </div>
      ) : (
      <div className="flex min-h-0 flex-1 gap-3 p-3">
        {/* sidebar */}
        <div className="hidden w-16 shrink-0 flex-col gap-2 sm:flex">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="h-2 rounded-full"
              style={{
                width: 20 + (i % 2 ? 16 : 30) + "px",
                background: i === 0 ? a.text : "rgba(255,255,255,.14)",
                opacity: i === 0 ? 1 : 0.6,
              }}
            />
          ))}
        </div>

        {/* main */}
        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.14em]" style={{ color: a.text }}>
              {meta}
            </span>
            <span className="flex items-center gap-1 text-[9px] font-mono text-faint">
              <span className="h-1 w-1 animate-blink rounded-full bg-acid" />
              live
            </span>
          </div>

          <div className="mt-2 flex flex-1 flex-col justify-center gap-[7px]">
            {body.map((line, i) => {
              const comment = line.trimStart().startsWith("//");
              const isVar = line.startsWith("const ");
              return (
                <span
                  key={i}
                  className="truncate font-mono text-[10px] leading-[1.5] sm:text-[10.5px]"
                  style={{
                    color: comment ? "rgba(255,255,255,.34)" : isVar ? "rgba(255,255,255,.55)" : "rgba(255,255,255,.8)",
                    textIndent: 0,
                  }}
                >
                  {line}
                </span>
              );
            })}
          </div>

          {bars && (
            <div className="mt-2 flex h-10 items-end gap-1">
              {bars.map((b, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-t-[2px]"
                  style={{
                    height: b + "%",
                    background: i === bars.length - 1 ? a.bar : "rgba(255,255,255,.16)",
                    opacity: 0.9,
                  }}
                />
              ))}
            </div>
          )}

          {active !== undefined && (
            <div className="mt-2 flex items-center gap-1.5 text-[9px] font-mono">
              <span
                className="rounded-full px-2 py-[2px]"
                style={{ background: a.chipBg, color: a.text }}
              >
                {active ? "● operational" : "○ standby"}
              </span>
            </div>
          )}
        </div>
      </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Toolbar chip used above code windows                               */
/* ------------------------------------------------------------------ */

export function ToolbarChip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-1 text-[10px] font-mono text-faint">
      {children}
    </span>
  );
}
