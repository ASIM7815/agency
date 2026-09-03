import { Reveal } from "@/components/ui/anim";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent"
        />
      </div>

      <div className="container-x">
        <SectionHeading
          index="05"
          label="how we work"
          align="center"
          title={
            <h2 className="display-lg text-metal mt-4">
              One loop, <span className="serif-accent text-dim">seven moves.</span>
            </h2>
          }
          blurb={
            <>
              Every engagement runs through the same disciplined arc — from
              first conversation to a product that keeps improving. You always
              know which move we’re on and what comes next.
            </>
          }
        />

        {/* timeline */}
        <div className="relative mx-auto mt-16 max-w-5xl md:mt-24">
          {/* spine */}
          <span
            className="absolute bottom-6 left-[21px] top-2 w-px bg-gradient-to-b from-acid/60 via-white/[0.12] to-white/[0.04] md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <ol className="space-y-8 md:space-y-4">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              const left = i % 2 === 0;
              return (
                <li key={step.n} className="relative md:grid md:grid-cols-2 md:gap-x-20 md:gap-y-0">
                  {/* node */}
                  <span
                    className="absolute left-[21px] top-8 z-10 grid h-[14px] w-[14px] -translate-x-1/2 place-items-center md:left-1/2"
                    aria-hidden="true"
                  >
                    <span className="h-full w-full rounded-full border border-acid/70 bg-ink shadow-[0_0_18px_rgba(200,255,61,0.45)]" />
                  </span>

                  <Reveal
                    y={30}
                    delay={0.05}
                    className={
                      left ? "md:col-start-1 md:pr-2" : "md:col-start-2 md:pl-2"
                    }
                  >
                    <article className="card-line card-hover group relative ml-14 overflow-hidden p-6 sm:p-7 md:ml-0 md:mb-6">
                      <span
                        className="pointer-events-none absolute -top-3 right-4 select-none font-serif text-[88px] italic leading-none text-white/[0.035] transition-colors duration-500 group-hover:text-acid/[0.09]"
                        aria-hidden="true"
                      >
                        {step.n}
                      </span>
                      <span className="relative inline-grid h-10 w-10 place-items-center rounded-xl border border-white/[0.09] bg-white/[0.03] text-acid">
                        <Icon size={18} strokeWidth={1.8} />
                      </span>
                      <div>
                        <h3 className="mt-4 font-display text-[22px] font-semibold tracking-tight text-bone">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-[14.5px] leading-relaxed text-dim">{step.desc}</p>
                        <ul className="mt-4 flex flex-wrap gap-1.5">
                          {step.detail.map((d) => (
                            <li
                              key={d}
                              className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 font-mono text-[10.5px] text-faint"
                            >
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>

        <Reveal delay={0.1} y={16}>
          <p className="mx-auto mt-14 max-w-2xl text-center text-[15px] text-dim">
            The loop never really ends —{" "}
            <span className="text-bone">evolve is where products get their edge.</span>{" "}
            We stay on after launch, watching metrics and improving what ships.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
