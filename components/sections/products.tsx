"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/anim";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScreenMock } from "@/components/ui/code-visuals";
import { getScreen, solutions, type ShowcaseScreen, type Solution } from "@/lib/data";

/** visual variety per product concept */
const SCREEN_BY_INDEX: ShowcaseScreen[] = [
  "fleet", "pharma", "board", "drone", "commerce", "health",
  "wallet", "city", "console", "loom", "watch", "kiosk",
];

function ProductCard({ s, i }: { s: Solution; i: number }) {
  const Icon = s.icon;
  const screen = getScreen(SCREEN_BY_INDEX[i] ?? "console");
  return (
    <article className="group relative w-[320px] shrink-0 snap-start sm:w-[400px]">
      <div className="card-line card-hover flex h-full flex-col overflow-hidden !rounded-[1.2rem] p-4">
        <div className="pointer-events-none relative select-none rounded-xl bg-[#0b0c0e] p-2 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
          <ScreenMock {...screen} active className="!rounded-lg" />
        </div>

        <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/[0.09] bg-white/[0.03] text-acid transition-all duration-300 group-hover:border-acid/40">
              <Icon size={17} strokeWidth={1.8} />
            </span>
            <div className="min-w-0">
              <p className="truncate font-mono text-[10.5px] tracking-[0.16em] text-faint">{s.type}</p>
              <h3 className="truncate font-display text-[19px] font-semibold tracking-tight text-bone">
                {s.title}
              </h3>
            </div>
            <span className="ml-auto font-mono text-[11px] text-faint transition-colors group-hover:text-acid">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>

          <p className="mt-3 text-[14px] leading-relaxed text-dim">{s.blurb}</p>

          <div className="mt-auto flex items-center justify-between gap-3 pt-4">
            <div className="flex min-w-0 flex-wrap gap-1.5">
              {s.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 font-mono text-[10.5px] text-faint"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href="#contact"
              aria-label={`Discuss a ${s.title} project`}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/[0.12] text-fog transition-all duration-300 hover:border-acid/60 hover:bg-acid hover:text-black"
            >
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Products() {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    track.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <section id="solutions" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="animate-aurora absolute -left-40 top-24 h-[420px] w-[520px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(139,124,255,0.07), transparent 70%)" }}
        />
      </div>

      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            index="02"
            label="what we can build for you"
            title={
              <h2 className="display-lg text-metal mt-4">
                Whole products.
                <span className="serif-accent block text-dim">Not just screens.</span>
              </h2>
            }
            blurb={
              <>
                From CRMs to AI platforms — these are the shapes of software we
                ship. Every one of them is a concept exploration, engineered as
                a real product would be: typed, tested, deployed.
              </>
            }
          />
          <Reveal delay={0.15} y={12} className="hidden gap-3 lg:flex">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Scroll product concepts left"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/[0.12] bg-white/[0.02] text-fog transition-all hover:border-acid/50 hover:text-acid"
            >
              <ArrowLeft size={17} />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Scroll product concepts right"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/[0.12] bg-white/[0.02] text-fog transition-all hover:border-acid/50 hover:text-acid"
            >
              <ArrowRight size={17} />
            </button>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.15} y={40} className="mt-12 md:mt-16">
        <div
          ref={track}
          className="mask-fade-x flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-[max(1.25rem,calc((100vw-84rem)/2+2.5rem))] pb-4 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {solutions.map((s, i) => (
            <ProductCard key={s.id} s={s} i={i} />
          ))}
        </div>
      </Reveal>

      <div className="container-x mt-4 flex items-center justify-between lg:hidden">
        <p className="font-mono text-[11px] tracking-[0.18em] text-faint">swipe to explore →</p>
        <p className="font-mono text-[11px] tracking-[0.18em] text-faint">12 concepts</p>
      </div>
    </section>
  );
}
