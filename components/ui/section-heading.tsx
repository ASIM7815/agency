import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/anim";

/** Consistent kicker + heading + blurb for sections. */
export function SectionHeading({
  index,
  label,
  title,
  blurb,
  align = "left",
  className = "",
}: {
  index: string;
  label: string;
  title: ReactNode;
  blurb?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${className} ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}
    >
      <Reveal y={16}>
        <p className={`label-mono flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
          {index ? (
            <>
              <span className="text-faint">{"["}</span>
              <span>{index}</span>
              <span className="text-faint">{"]"}</span>
              <span className="text-faint">{"—"}</span>
            </>
          ) : null}
          <span className="text-bone/60">{label}</span>
        </p>
      </Reveal>
      <Reveal delay={0.08}>{title}</Reveal>
      {blurb ? (
        <Reveal delay={0.16}>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-dim">{blurb}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
