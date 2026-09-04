import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { LineReveal, Reveal } from "@/components/ui/anim";
import { Magnetic } from "@/components/ui/motion-bits";
import { CodeWindow, ScreenMock, KV } from "@/components/ui/code-visuals";
import { getScreen } from "@/lib/data";

const terminalLines = [
  <KV key="1" k="$ " v="noname deploy --production" tone="fog" />,
  <KV key="2" k="→ " v="build            13.8s ✓ (next 16 · edge)" />,
  <KV key="3" k="→ " v="migrations       3 applied ✓" />,
  <KV key="4" k="→ " v="tests            186 passed ✓" />,
  <KV key="5" k="→ " v="static audit     100 / 100 ✓" />,
  <KV key="6" k="→ " v="cdn              warmed · 32 regions" />,
  <KV key="7" k="→ " v="monitoring       online · alerts armed" />,
];

const heroScreen = getScreen("board");

const HERO_VIDEO = {
  src: "https://media.istockphoto.com/id/687157064/video/computer-screen-with-hacking-warning-message-cybercrime-concept-computer-system-under-attack.mp4?s=mp4-640x640-is&k=20&c=RtSZTnakRO61mb6wUh05ELhgzfKNfIVhbmfDnmh0k08=",
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
        <div className="grid items-start gap-14 lg:grid-cols-[1.06fr_0.94fr] lg:gap-10 xl:gap-16">
          {/* copy */}
          <div>
            

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

          {/* product composition */}
          <Reveal delay={0.45} y={40} duration={1} className="relative">
            <div className="relative">
              {/* ambient glow behind panel */}
              <div
                className="absolute -inset-8 rounded-[2rem] opacity-80 blur-2xl"
                style={{ background: "radial-gradient(60% 60% at 70% 20%, rgba(200,255,61,0.08), transparent 70%)" }}
                aria-hidden="true"
              />

              <div className="relative grid gap-4">
                <div className="relative shadow-deep">
                  <ScreenMock
                    {...heroScreen}
                    className="!rounded-2xl"
                    video={HERO_VIDEO.src}
                    videoLabel="Growth Board — product demo"
                  />
                  <span className="pointer-events-none absolute -top-3 -right-2 hidden rounded-lg border border-white/[0.12] bg-[#0c0d10]/95 px-2.5 py-1.5 font-mono text-[10px] tracking-wide text-fog shadow-deep xl:block">
                    concept · analytics
                  </span>
                </div>
                <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                  <CodeWindow title="deploy — production" hideHeader className="shadow-deep">
                    <div className="space-y-1">{terminalLines}</div>
                    <p className="mt-2 flex items-center gap-2 font-mono text-[13px]">
                      <span className="grid h-4 w-4 place-items-center rounded-full bg-acid/15 text-acid">
                        <Check size={11} strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span className="text-acid">all systems operational</span>
                    </p>
                  </CodeWindow>
                  <div className="card-line h-full p-4">
                    <p className="font-mono text-[11px] tracking-[0.14em] text-faint">HOW WE ENGAGE</p>
                    <ul className="mt-3 space-y-2">
                      {[
                        ["kickoff", "within 72 hours"],
                        ["reports", "clear weekly demos"],
                        ["ownership", "one accountable team"],
                      ].map(([k, v]) => (
                        <li key={k} className="flex items-baseline justify-between gap-4 font-mono text-[12px]">
                          <span className="text-faint">{k}</span>
                          <span className="text-right text-fog">{v}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* floating chips */}
              
              <div className="animate-float-late absolute -bottom-4 right-6 hidden items-center gap-2 rounded-xl border border-white/[0.1] bg-[#0c0d10]/90 px-3.5 py-2.5 font-mono text-[11px] text-fog shadow-[0_16px_40px_-12px_rgba(0,0,0,.7)] backdrop-blur-md md:flex">
                <span className="text-acid" aria-hidden="true">●</span>
                product concept · sample data
              </div>
            </div>

          </Reveal>
        </div>
      </div>
    </section>
  );
}
