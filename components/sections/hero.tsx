import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { LineReveal, Reveal } from "@/components/ui/anim";
import { Magnetic } from "@/components/ui/motion-bits";
import { ScreenMock } from "@/components/ui/code-visuals";
import { getScreen } from "@/lib/data";

const heroScreen = getScreen("board");

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-32 sm:pt-36 md:pb-24 lg:pt-40">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="grid-bg mask-fade-y absolute inset-0 opacity-60" />
        <div
          className="absolute -top-40 left-1/4 h-[520px] w-[760px] rounded-full opacity-70 blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(200,255,61,0.09), transparent 70%)" }}
        />
        <div
          className="animate-aurora absolute -right-32 top-24 h-[440px] w-[560px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(139,124,255,0.13), transparent 70%)" }}
        />
        <div
          className="animate-aurora absolute -left-40 bottom-0 h-[380px] w-[520px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(200,255,61,0.06), transparent 70%)", animationDelay: "-8s" }}
        />
      </div>

      <div className="container-x relative">
        {/* copy left · footage right */}
        <div className="grid items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
          {/* copy */}
          <div className="relative">
            <h1 className="display-hero">
              <LineReveal text="We build digital" className="block text-bone" />
              <LineReveal
                as="span"
                className="serif-accent block !text-[1.04em] text-bone/70"
                text="products that move"
                delay={0.18}
                stagger={0.05}
              />
              <LineReveal text="businesses forward." delay={0.34} stagger={0.05} className="block text-bone" />
            </h1>

            <Reveal delay={0.5} y={20}>
              <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-fog">
                NONAME designs and develops websites, web applications, software
                products, AI-powered solutions, and digital experiences — end to
                end, from first sketch to production.
              </p>
            </Reveal>

            <Reveal delay={0.62} y={20}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Magnetic strength={0.16}>
                  <a href="#contact" className="btn btn-acid group">
                    Start a Project
                    <ArrowUpRight size={17} strokeWidth={2.4} className="btn-arrow" />
                  </a>
                </Magnetic>
                <a href="#work" className="btn btn-ghost group">
                  Explore Our Work
                  <ArrowRight size={16} className="btn-arrow" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.72} y={14}>
              <p className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11.5px] tracking-[0.06em] text-faint">
                <span className="flex items-center gap-1.5">
                  <Check size={12} className="text-acid" aria-hidden="true" /> websites
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={12} className="text-acid" aria-hidden="true" /> software
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={12} className="text-acid" aria-hidden="true" /> AI
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={12} className="text-acid" aria-hidden="true" /> mobile
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={12} className="text-acid" aria-hidden="true" /> cloud
                </span>
              </p>
            </Reveal>
          </div>

          {/* product footage — beside the copy */}
          <Reveal delay={0.3} y={40} duration={1} className="relative">
            <div className="relative">
              {/* ambient glow behind panel */}
              <div
                className="absolute -inset-6 rounded-[2rem] opacity-80 blur-2xl lg:-inset-8"
                style={{ background: "radial-gradient(60% 45% at 50% 30%, rgba(200,255,61,0.08), transparent 70%)" }}
                aria-hidden="true"
              />

              <div className="relative shadow-deep">
                <ScreenMock
                  {...heroScreen}
                  className="!rounded-2xl"
                  video="/hero-video.mp4"
                  videoLabel="Cyberpunk hacker at work — ambient product footage"
                  videoAspect="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3]"
                />
                <span className="pointer-events-none absolute -top-3 right-6 hidden rounded-lg border border-white/[0.12] bg-[#0c0d10]/95 px-2.5 py-1.5 font-mono text-[10px] tracking-wide text-fog shadow-deep xl:block">
                  concept · live footage
                </span>
                <span className="pointer-events-none absolute bottom-3 left-3 rounded-md border border-white/[0.08] bg-[#0c0d10]/70 px-2 py-1 font-mono text-[10px] tracking-[0.12em] text-faint backdrop-blur-sm sm:left-4">
                  footage — SYG_Anime · Pixabay
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
