const items = [
  "Web development",
  "Custom software",
  "AI solutions",
  "UI/UX design",
  "Mobile apps",
  "Cloud & DevOps",
  "Product design",
  "Automation",
];

export default function Marquee() {
  return (
    <div
      className="relative border-y border-white/[0.06] bg-white/[0.012] py-5"
      aria-hidden="true"
    >
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap will-change-transform">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-10">
              {items.map((it) => (
                <span key={`${dup}-${it}`} className="flex items-center gap-10">
                  <span className="font-display text-[15px] font-medium tracking-[0.14em] text-faint uppercase">
                    {it}
                  </span>
                  <span className="h-[5px] w-[5px] rotate-45 bg-acid/60" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="sr-only">
        Capabilities: web development, custom software, AI solutions, UI/UX
        design, mobile apps, cloud and DevOps, product design, automation.
      </p>
    </div>
  );
}
