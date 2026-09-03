import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/anim";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="section relative">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/[0.14] to-transparent"
        />
      </div>

      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            index="01"
            label="what we build"
            title={
              <h2 className="display-lg text-metal mt-4">
                Services, end to end.
                <span className="serif-accent block text-dim">Six disciplines. One accountable team.</span>
              </h2>
            }
          />
          <Reveal delay={0.2} y={14} className="hidden md:block">
            <p className="max-w-[260px] font-mono text-[12px] leading-relaxed tracking-wide text-faint">
              every engagement is designed around your product — not a menu of
              hourly work.
            </p>
          </Reveal>
        </div>

        {/* index */}
        <Reveal delay={0.12} y={34} className="mt-14 md:mt-20">
          <div className="overflow-hidden rounded-[1.4rem] border border-white/[0.08] bg-white/[0.014]">
            <p className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-6 py-3 font-mono text-[10.5px] tracking-[0.2em] text-faint md:px-10">
              <span>capability index</span>
              <span className="hidden sm:block">01 — 06</span>
            </p>
            <ul className="divide-y divide-white/[0.05]">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <li key={s.id} className="group relative">
                    <a
                      href="#contact"
                      aria-label={`${s.title} — start a project`}
                      className="relative grid items-center gap-x-8 gap-y-4 px-6 py-8 transition-colors duration-300 hover:bg-white/[0.025] md:grid-cols-[64px_minmax(0,1fr)_minmax(0,1.05fr)_40px] md:px-10 md:py-9"
                    >
                      {/* hover accent line */}
                      <span
                        className="absolute inset-y-4 left-0 w-[2px] origin-top scale-y-0 rounded-full bg-acid transition-transform duration-500 ease-out group-hover:scale-y-100"
                        aria-hidden="true"
                      />

                      <span className="flex items-center gap-5 md:block">
                        <span
                          className="grid h-13 w-13 place-items-center rounded-2xl border border-white/[0.09] bg-gradient-to-b from-white/[0.06] to-transparent text-bone/80 transition-all duration-400 group-hover:border-acid/40 group-hover:text-acid group-hover:shadow-[0_0_28px_rgba(200,255,61,0.18)] md:h-14 md:w-14"
                        >
                          <Icon size={24} strokeWidth={1.7} />
                        </span>
                      </span>

                      <span>
                        <span className="flex items-baseline gap-3">
                          <span className="font-display text-[1.4rem] font-semibold tracking-tight text-bone md:text-[1.7rem]">
                            {s.title}
                          </span>
                          <span className="font-mono text-[11px] text-faint">0{i + 1}</span>
                        </span>
                        <span className="mt-2 block max-w-md text-[15px] leading-relaxed text-dim">
                          {s.blurb}
                        </span>
                      </span>

                      <span className="flex flex-wrap gap-x-2 gap-y-1.5 md:justify-end">
                        {s.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-md border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 font-mono text-[11px] tracking-wide text-faint transition-colors duration-300 group-hover:border-white/[0.12] group-hover:text-fog"
                          >
                            {item}
                          </span>
                        ))}
                      </span>

                      <span
                        className="absolute right-6 top-8 grid h-10 w-10 place-items-center rounded-full border border-white/[0.09] text-faint opacity-0 transition-all duration-300 group-hover:border-acid/50 group-hover:text-acid group-hover:opacity-100 md:static md:opacity-100"
                        aria-hidden="true"
                      >
                        <ArrowDownRight size={17} className="transition-transform duration-300 group-hover:rotate-[-45deg]" />
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1} y={16} className="mt-8">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[15px] text-dim">
            <span className="font-mono text-[12px] text-faint">not sure what you need?</span>
            <a
              href="#contact"
              className="link-line group inline-flex items-center gap-1.5 font-medium text-bone"
            >
              Tell us what you’re building — we’ll point you in the right direction
              <ArrowUpRight size={15} className="text-acid transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
