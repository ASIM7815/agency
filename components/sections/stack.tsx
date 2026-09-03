import { Reveal } from "@/components/ui/anim";
import { SectionHeading } from "@/components/ui/section-heading";
import { techTiers } from "@/lib/data";
import { BrandIcon } from "@/lib/brand-icons";

export default function Stack() {
  return (
    <section id="stack" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="grid-bg mask-fade-y absolute inset-0 opacity-30" />
      </div>

      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* intro */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              index="06"
              label="technology"
              title={
                <h2 className="display-lg text-metal mt-4">
                  Tools we <span className="serif-accent text-dim">trust.</span>
                </h2>
              }
              blurb={
                <>
                  We stay deliberately close to the modern mainstream — proven
                  frameworks, real infrastructure, AI where it earns its
                  place. Not the stack we like: the stack your product
                  deserves.
                </>
              }
            />
            <Reveal delay={0.15} y={14}>
              <div className="card-line mt-9 inline-block p-5">
                <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-faint">
                  <span className="status-dot" aria-hidden="true" />
                  decisions are made per project
                </p>
                <p className="mt-2.5 max-w-xs font-mono text-[12px] leading-relaxed text-dim">
                  legacy is a trap — we only adopt technology we’d bet a
                  product on.
                </p>
              </div>
            </Reveal>
          </div>

          {/* tiers */}
          <div className="space-y-4">
            {techTiers.map((tier, ti) => (
              <Reveal key={tier.group} y={26} delay={ti * 0.06}>
                <div className="card-line overflow-hidden transition-colors duration-300 hover:border-white/[0.14]">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/[0.05] px-6 py-4">
                    <h3 className="font-display text-[15px] font-semibold tracking-[0.12em] text-bone">
                      {tier.group}
                    </h3>
                    <p className="font-mono text-[11px] tracking-wide text-faint">{tier.note}</p>
                  </div>
                  <ul className="flex flex-wrap gap-2.5 px-6 py-5">
                    {tier.items.map((t) => (
                      <li key={t.name}>
                        <span className="group inline-flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.02] px-3.5 py-2 font-mono text-[12.5px] text-fog transition-all duration-300 hover:-translate-y-0.5 hover:border-acid/40 hover:bg-acid-dim hover:text-bone">
                          {t.icon ? (
                            <BrandIcon name={t.icon} className="h-[15px] w-[15px] opacity-70 transition-opacity group-hover:opacity-100" />
                          ) : (
                            <span className="h-[7px] w-[7px] rounded-full bg-acid/70" aria-hidden="true" />
                          )}
                          {t.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
