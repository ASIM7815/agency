import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";
import { BrandIcon, type BrandName } from "@/lib/brand-icons";
import { Logo } from "@/components/navbar";

const socials: { name: BrandName; label: string; href: string }[] = [
  { name: "github", label: "GitHub", href: site.socials.github },
  { name: "x", label: "X (Twitter)", href: site.socials.x },
  { name: "linkedin", label: "LinkedIn", href: site.socials.linkedin },
  { name: "instagram", label: "Instagram", href: site.socials.instagram },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-acid/40 to-transparent" aria-hidden="true" />

      <div className="container-x pb-10 pt-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr_1fr_1.15fr]">
          {/* brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-dim">
              A software development agency building modern websites, digital
              products, and AI-powered solutions for businesses that move fast.
            </p>
            <ul className="mt-7 flex items-center gap-2.5">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`NONAME on ${s.label}`}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/[0.09] bg-white/[0.02] text-fog transition-all duration-300 hover:-translate-y-0.5 hover:border-acid/50 hover:text-acid"
                  >
                    <BrandIcon name={s.name} className="h-[17px] w-[17px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* nav */}
          <nav aria-label="Footer">
            <h3 className="label-mono">Navigate</h3>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="group inline-flex items-center gap-1.5 text-[15px] text-fog transition-colors hover:text-bone"
                  >
                    <span className="h-px w-0 bg-acid transition-all duration-300 group-hover:w-3" />
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* capabilities */}
          <div>
            <h3 className="label-mono">Capabilities</h3>
            <ul className="mt-5 space-y-3 text-[15px] text-dim">
              {[
                "Web development",
                "Software engineering",
                "AI solutions",
                "Product & UI/UX design",
                "Mobile applications",
                "Cloud & deployment",
              ].map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h3 className="label-mono">Start a conversation</h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex items-center gap-2 text-[15px] text-fog transition-colors hover:text-acid"
                >
                  <Mail size={15} className="text-faint transition-colors group-hover:text-acid" />
                  {site.email}
                  <ArrowUpRight size={14} className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="group inline-flex items-center gap-2 text-[15px] text-fog transition-colors hover:text-acid"
                >
                  <Phone size={15} className="text-faint transition-colors group-hover:text-acid" />
                  {site.phone}
                </a>
              </li>
            </ul>
            <a href="#contact" className="btn btn-ghost mt-7 !px-5 !py-2.5 !text-[13.5px]">
              Start a Project
              <ArrowUpRight size={15} className="btn-arrow" />
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.05] pt-7 sm:flex-row">
          <p className="font-mono text-[12px] tracking-wide text-faint">
            © {year} {site.name}. Independent software studio.
          </p>
          <p className="flex items-center gap-2 font-mono text-[12px] tracking-wide text-faint">
            <span className="status-dot" aria-hidden="true" />
            currently accepting new projects
          </p>
        </div>
      </div>
    </footer>
  );
}
