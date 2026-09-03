import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/anim";
import { SectionHeading } from "@/components/ui/section-heading";
import { features } from "@/lib/data";

export default function Why() {
  return (
    <section id="why" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="animate-aurora absolute -left-40 bottom-0 h-[420px] w-[520px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(200,255,61,0.06), transparent 70%)" }}
        />
      </div>

      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              index="07"
              label="why noname"
              title={
                <h2 className="display-lg text-metal mt-4">
                  What working with us
                  <span className="serif-accent block text-dim">actually means.</span>
                </h2>
              }
            />
            <Reveal delay={0.15} y={14}>
              <p className="mt-6 max-w-md text-[16px] leading-relaxed text-dim">
                No superlatives, no “world-class” anything. Just the operating
                principles we hold ourselves to on every build — and the ones
                you can hold us to as well.
              </p>
            </Reveal>
            <Reveal delay={0.22} y={14}>
              <a href="#contact" className="btn btn-ghost group mt-9">
                Put these to the test
                <ArrowUpRight size={16} className="btn-arrow" />
              </a>
            </Reveal>
          </div>

          <div>
            <ul className="space-y-4">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <Reveal key={f.title} y={24} delay={(i % 3) * 0.06}>
                    <li className="card-line card-hover group relative flex gap-5 overflow-hidden p-6 sm:p-7">
                      <span
                        className="pointer-events-none absolute inset-y-0 left-0 w-[2px] origin-top scale-y-0 bg-acid transition-transform duration-500 ease-out group-hover:scale-y-100"
                        aria-hidden="true"
                      />
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/[0.09] bg-gradient-to-b from-white/[0.06] to-transparent text-fog transition-all duration-300 group-hover:border-acid/40 group-hover:text-acid">
                        <Icon size={21} strokeWidth={1.7} />
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display text-[19px] font-semibold tracking-tight text-bone">
                          {f.title}
                        </h3>
                        <p className="mt-1.5 text-[14.5px] leading-relaxed text-dim">{f.text}</p>
                      </div>
                      <span className="ml-auto hidden shrink-0 font-mono text-[11px] text-faint/70 sm:block">
                        0{i + 1}
                      </span>
                    </li>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
