import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { LineReveal, Reveal } from "@/components/ui/anim";
import { Magnetic } from "@/components/ui/motion-bits";
import { ScreenMock } from "@/components/ui/code-visuals";
import { getScreen } from "@/lib/data";

const heroScreen = getScreen("board");

const HERO_VIDEO = {
  src: "https://cdn.pixabay.com/video/2025-03-18/265638_large.mp4",
  poster: "https://cdn.pixabay.com/video/2025-03-18/265638_tiny.jpg",
  label: "Cyberpunk workstation — ambient product footage",
  credit: "footage — SYG_Anime · Pixabay",
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-10 pt-32 sm:pt-36 md:pb-16 lg:pt-44">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="grid-bg mask-fade-y absolute inset-0 opacity-60" />
        <div
          className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(200,255,61,0.09), transparent 70%)" }}
        />
        <div
          className="animate-aurora absolute -right-32 top-40 h-[420px] w-[560px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(139,124,255,0.13), transparent 70%)" }}
        />
        <div
          className="animate-aurora absolute -left-40 top-[480px] h-[380px] w-[520px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(200,255,61,0.06), transparent 70%)", animationDelay: "-8s" }}
        />
      </div>

      <div className="container-x relative">
        {/* copy */}
        <div className="max-w-3xl">
          <h1 className="display-xl">
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

        {/* product footage — full-width band */}
        <Reveal delay={0.3} y={40} duration={1} className="relative mt-14 lg:mt-20">
          <div className="relative">
            {/* ambient glow behind panel */}
            <div
              className="absolute -inset-8 rounded-[2rem] opacity-80 blur-2xl"
              style={{ background: "radial-gradient(60% 45% at 50% 30%, rgba(200,255,61,0.08), transparent 70%)" }}
              aria-hidden="true"
            />

            <div className="relative shadow-deep">
              <ScreenMock
                {...heroScreen}
                className="!rounded-2xl"
                video={HERO_VIDEO.src}
                videoPoster={HERO_VIDEO.poster}
                videoLabel={HERO_VIDEO.label}
              />
              <span className="pointer-events-none absolute -top-3 right-6 hidden rounded-lg border border-white/[0.12] bg-[#0c0d10]/95 px-2.5 py-1.5 font-mono text-[10px] tracking-wide text-fog shadow-deep xl:block">
                concept · live footage
              </span>
              <span className="pointer-events-none absolute bottom-3 left-3 rounded-md border border-white/[0.08] bg-[#0c0d10]/70 px-2 py-1 font-mono text-[10px] tracking-[0.12em] text-faint backdrop-blur-sm sm:left-4">
                {HERO_VIDEO.credit}
              </span>
            </div>

            {/* floating chip */}
            <div className="animate-float-late absolute -bottom-4 right-6 hidden items-center gap-2 rounded-xl border border-white/[0.1] bg-[#0c0d10]/90 px-3.5 py-2.5 font-mono text-[11px] text-fog shadow-[0_16px_40px_-12px_rgba(0,0,0,.7)] backdrop-blur-md md:flex">
              <span className="text-acid" aria-hidden="true">●</span>
              product concept · sample data
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
