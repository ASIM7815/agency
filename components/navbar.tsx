"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { nav } from "@/lib/site";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="#home"
      aria-label="NONAME — home"
      className="group flex items-center gap-2.5 text-bone"
    >
      <span
        className={`relative grid place-items-center overflow-hidden rounded-[9px] border border-white/[0.12] bg-gradient-to-br from-white/[0.09] to-white/[0.02] font-display font-bold text-acid transition-all duration-300 group-hover:border-acid/50 ${
          compact ? "h-7 w-7 text-[13px]" : "h-8 w-8 text-[15px]"
        }`}
      >
        <span className="drop-shadow-[0_0_10px_rgba(200,255,61,0.55)]">N</span>
        <span className="pointer-events-none absolute inset-0 bg-acid/0 transition-colors duration-300 group-hover:bg-acid/[0.07]" />
      </span>
      <span
        className={`font-display font-semibold tracking-[0.08em] text-bone transition-all duration-300 ${
          compact ? "text-[15px]" : "text-[16px]"
        }`}
      >
        NONAME
        <span className="ml-[3px] inline-block h-[0.85em] w-[7px] translate-y-[2px] animate-caret bg-acid align-baseline" />
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 28));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-acid focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>
      <header className="anim-nav-in fixed inset-x-0 top-0 z-50">
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? "glass border-b border-white/[0.07] shadow-[0_10px_40px_-16px_rgba(0,0,0,0.6)]"
              : "border-b border-transparent bg-transparent"
          }`}
        >
          <div className="container-x flex h-[72px] items-center justify-between transition-[height] duration-500 md:h-[84px]">
            <Logo compact={scrolled} />

            {/* desktop nav */}
            <nav aria-label="Primary" className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
              <ul className="flex items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.03] px-2 py-1.5 backdrop-blur-md">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="relative rounded-full px-3.5 py-1.5 text-[13.5px] font-medium text-fog transition-colors duration-200 hover:bg-white/[0.06] hover:text-bone"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a href="#contact" className="btn btn-acid !px-5 !py-2.5 !text-[13.5px]">
                Start a Project
                <ArrowUpRight size={15} strokeWidth={2.2} className="btn-arrow" />
              </a>
            </div>

            {/* mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative z-[70] flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-full border border-white/[0.1] bg-white/[0.03] transition-colors hover:bg-white/[0.07] lg:hidden"
            >
              <span
                className={`block h-[1.5px] w-[18px] rounded-full bg-bone transition-transform duration-300 ${
                  open ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-[18px] rounded-full bg-bone transition-transform duration-300 ${
                  open ? "-translate-y-[3.5px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* mobile menu */}
      <div
        id="mobile-menu"
        className="fixed inset-0 z-[60] flex flex-col bg-[#07080a]/[0.98] backdrop-blur-2xl lg:hidden"
        aria-hidden={!open}
        inert={!open}
        style={{
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          transition: open
            ? "opacity 0.3s ease"
            : "opacity 0.25s ease, visibility 0s linear 0.25s",
        }}
      >
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
        <nav aria-label="Mobile" className="container-x relative mt-28 flex flex-1 flex-col">
          <ul className="flex flex-col gap-1">
            {nav.map((item, i) => (
              <li
                key={item.href}
                className="border-b border-white/[0.05]"
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateY(14px)",
                  transition: `opacity 0.45s ease ${open ? 0.05 + i * 0.05 : 0}s, transform 0.45s cubic-bezier(0.16,1,0.3,1) ${
                    open ? 0.05 + i * 0.05 : 0
                  }s`,
                }}
              >
                <button
                  type="button"
                  onClick={() => go(item.href)}
                  className="group flex w-full items-baseline justify-between py-4 text-left"
                >
                  <span className="font-display text-3xl font-medium tracking-tight text-bone/85 transition-colors group-hover:text-bone sm:text-4xl">
                    {item.label}
                  </span>
                  <span className="label-mono !text-[11px] opacity-40">0{i + 1}</span>
                </button>
              </li>
            ))}
          </ul>

          <div
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "none" : "translateY(14px)",
              transition: "opacity 0.45s ease 0.4s, transform 0.45s cubic-bezier(0.16,1,0.3,1) 0.4s",
            }}
            className="mt-8 pb-10"
          >
            <a href="#contact" className="btn btn-acid w-full !py-4 !text-base" onClick={() => setOpen(false)}>
              Start a Project
              <ArrowUpRight size={17} />
            </a>
            <p className="mt-6 text-center font-mono text-xs text-faint">
              new business · mohammadasimsaad@gmail.com
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}
