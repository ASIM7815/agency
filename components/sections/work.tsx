import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/anim";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScreenMock } from "@/components/ui/code-visuals";
import { getScreen, projects } from "@/lib/data";

function ProjectCard({
  p,
  i,
  featured = false,
}: {
  p: (typeof projects)[number];
  i: number;
  featured?: boolean;
}) {
  const screen = getScreen(p.screen);
  return (
    <Reveal
      y={36}
      delay={featured ? 0 : (i % 2) * 0.1}
      className={featured ? "lg:col-span-2" : ""}
    >
      <article
        className={`group card-line card-hover flex flex-col overflow-hidden !rounded-[1.4rem] ${
          featured ? "lg:grid lg:grid-cols-[0.9fr_1.1fr]" : ""
        }`}
      >
        {/* visual */}
        <div className="pointer-events-none relative overflow-hidden bg-[#0a0b0d]">
          <div className="relative p-5 transition-transform duration-700 ease-out group-hover:scale-[1.025] sm:p-7">
            <ScreenMock {...screen} className="!rounded-xl" />
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: "linear-gradient(to top, rgba(200,255,61,0.05), transparent 45%)" }}
            />
          </div>
          {/* scan shimmer */}
          <span
            className="pointer-events-none absolute inset-x-0 top-0 h-16 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)" }}
            aria-hidden="true"
          />
        </div>

        {/* copy */}
        <div className="flex flex-col p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="chip-acid chip !px-3 !py-1 !text-[10px] !tracking-[0.14em]">
              concept project
            </span>
            <span className="font-mono text-[11.5px] tracking-[0.18em] text-faint">{p.category}</span>
            <span className="ml-auto font-mono text-[11px] text-faint">0{i + 1}</span>
          </div>

          <h3 className={`mt-4 font-display font-semibold tracking-tight text-bone ${featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
            {p.title}
          </h3>
          <p className="mt-2.5 max-w-xl text-[15px] leading-relaxed text-dim">{p.blurb}</p>

          <div className="mt-5 flex flex-wrap items-center gap-1.5">
            {p.stack.map((t) => (
              <span key={t} className="rounded-md border border-white/[0.07] bg-white/[0.025] px-2 py-0.5 font-mono text-[11px] text-faint">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-7 flex items-center justify-between border-t border-white/[0.06] pt-5">
            <span className="font-mono text-[11.5px] tracking-[0.16em] text-faint">{p.tag}</span>
            <a
              href="#contact"
              className="btn btn-ghost !px-4 !py-2 !text-[12.5px]"
              aria-label={`Discuss a project like ${p.title}`}
            >
              Build something like this
              <ArrowUpRight size={14} className="btn-arrow" />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="work" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="grid-bg mask-fade-y absolute inset-0 opacity-40" />
      </div>

      <div className="container-x">
        <SectionHeading
          index="03"
          label="selected explorations"
          title={
            <h2 className="display-lg text-metal mt-4">
              Work in the <span className="serif-accent">concept</span> stage.
            </h2>
          }
          blurb={
            <>
              Product concepts designed and built by the studio, shown here so
              you can see how we think — interfaces, systems, and interactions
              we would ship for you. Client work is shared privately.
            </>
          }
        />

        <div className="mt-14 grid gap-6 md:mt-20 lg:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} i={i} featured={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
