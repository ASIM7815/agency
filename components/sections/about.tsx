import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/anim";
import { CodeWindow } from "@/components/ui/code-visuals";
import { LazyVideo } from "@/components/ui/lazy-video";
import { SectionHeading } from "@/components/ui/section-heading";

const STUDIO_VIDEO = {
  src: "https://pixabay.com/videos/download/x-19627_medium.mp4",
  poster: "",
  credit: "",
};

const disciplines = [
  "Web",
  "Software",
  "AI",
  "Mobile",
  "Cloud",
  "UI/UX",
  "Automation",
];

export default function About() {
  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="animate-aurora absolute -right-40 top-1/3 h-[440px] w-[560px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(52,230,200,0.06), transparent 70%)" }}
        />
      </div>

      <div className="container-x">
        <div className="grid items-start gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          {/* copy */}
          <div>
            <SectionHeading
              index="04"
              label="about noname"
              title={
                <h2 className="display-lg text-metal mt-4">
                  A software studio,
                  <span className="serif-accent block text-dim">built like a product team.</span>
                </h2>
              }
            />

            <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-fog">
              <p>
                NONAME is a modern software development agency focused on one
                thing: turning ideas into scalable digital products. We work
                across the entire stack — web, software, AI, mobile, cloud,
                UI/UX, and automation — so there is never a hand-off gap
                between design and engineering.
              </p>
              <p>
                The name is the point. We care less about our brand and more
                about yours: your product, your users, your business moving
                forward. That is what we put our name on.
              </p>
              <p>
                You work directly with the people doing the work — strategists,
                designers, and engineers in one room (or one thread). No sales
                theater, no account-manager telephone game, no mystery.
              </p>
            </div>

            <Reveal delay={0.1} y={14}>
              <ul className="mt-8 flex flex-wrap gap-2">
                {disciplines.map((d) => (
                  <li key={d}>
                    <a href="#services" className="chip">
                      {d}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.16} y={14}>
              <p className="mt-8 border-l-2 border-acid/70 pl-4 font-mono text-[13px] leading-relaxed text-fog">
                “we take on a limited number of engagements at a time — because
                every product gets the attention it deserves.”
              </p>
              <p className="mt-3 flex items-center gap-2 pl-4 font-mono text-[11px] tracking-[0.16em] text-faint">
                — the studio
              </p>
            </Reveal>
          </div>

          {/* visuals */}
          <div className="flex flex-col gap-5 lg:sticky lg:top-28">
            <Reveal delay={0.1} y={34}>
              <CodeWindow title="about — noname.studio" className="shadow-deep">
                <div className="space-y-[7px] font-mono text-[13px] leading-[1.55]">
                  {([
                    ["name", "NONAME — software studio"],
                    ["team", "senior engineers · designers · strategists"],
                    ["structure", "small, senior, flat"],
                    ["method", "01 discover → 07 evolve"],
                    ["comms", "weekly demos · direct chat with builders"],
                    ["handoffs", "none — design and code live together"],
                  ] as [string, string][]).map(([k, v]) => (
                    <p key={k} className="flex gap-3">
                      <span className="w-[88px] shrink-0 text-right text-bone/45">{k}</span>
                      <span className="min-w-0 flex-1 truncate text-bone/85">{v}</span>
                    </p>
                  ))}
                  <p className="flex items-center gap-3">
                    <span className="w-[88px] shrink-0 text-right text-bone/45">status</span>
                    <span className="rounded-md bg-acid/15 px-1.5 py-[3px] text-acid">
                      accepting new projects
                    </span>
                  </p>
                </div>
              </CodeWindow>
            </Reveal>

            <Reveal delay={0.2} y={34}>
              <figure className="card-line group relative aspect-[16/9] overflow-hidden bg-[#0a0b0d] !rounded-[1.4rem]">
                <LazyVideo
                  src={STUDIO_VIDEO.src}
                  poster={STUDIO_VIDEO.poster}
                  decorative
                  className="absolute inset-0 opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(5,5,6,0.75), transparent 55%)" }}
                  aria-hidden="true"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                  <span className="font-mono text-[11px] tracking-[0.16em] text-bone/85">
                    the studio — heads-down building
                  </span>
                  <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.1em] text-faint">
                    <span className="h-1.5 w-1.5 rounded-full bg-ember" aria-hidden="true" />
                    REC
                  </span>
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={0.26} y={14}>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 font-mono text-[12.5px] tracking-[0.08em] text-fog transition-colors hover:text-acid"
              >
                want to know how we’d approach your product?
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
