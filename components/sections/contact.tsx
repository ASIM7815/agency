"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, CheckCircle2, Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/anim";
import { Magnetic } from "@/components/ui/motion-bits";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/lib/site";

type FormState = { name: string; email: string; company: string; kind: string; message: string };
type Errors = Partial<Record<keyof FormState, string>>;

const initial: FormState = { name: "", email: "", company: "", kind: "", message: "" };

const productKinds = [
  "Website",
  "Web application",
  "SaaS product",
  "Mobile app",
  "AI solution",
  "Internal tool / dashboard",
  "Not sure yet — advise me",
];

function validate(f: FormState): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please tell us your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = "That email doesn't look right.";
  if (f.message.trim().length < 10) e.message = "Give us a sentence or two about the idea.";
  return e;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const subject = encodeURIComponent(`New project — ${form.name}${form.company ? ` (${form.company})` : ""}`);
    const body = encodeURIComponent(
      `Hi NONAME,\n\nI'd like to talk about a project.\n\n` +
        `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || "—"}\n` +
        `What I want to build: ${form.kind || "—"}\n\n${form.message}\n\n— ${form.name}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const errorsCount = useMemo(() => Object.values(errors).filter(Boolean).length, [errors]);

  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="bg-radial-fade absolute inset-x-0 top-0 h-[420px]" />
        <div className="grid-bg mask-fade-y absolute inset-0 opacity-25" />
      </div>

      <div className="container-x relative">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* copy */}
          <div>
            <SectionHeading
              index="08"
              label="contact"
              title={
                <h2 className="display-lg text-metal mt-4">
                  Have an idea?
                  <span className="serif-accent block text-bone">
                    Let’s build something remarkable.
                  </span>
                </h2>
              }
              blurb={
                <>
                  Tell us where you want to go. We’ll reply within one working
                  day with honest thoughts — including when we’re not the right
                  fit.
                </>
              }
            />

            <div className="mt-10 space-y-4">
              <Reveal delay={0.1} y={16}>
                <a
                  href={`mailto:${site.email}`}
                  className="card-line card-hover group flex items-center gap-4 p-5 sm:p-6"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/[0.09] bg-white/[0.03] text-fog transition-colors group-hover:border-acid/40 group-hover:text-acid">
                    <Mail size={19} strokeWidth={1.8} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10.5px] tracking-[0.2em] text-faint">EMAIL</span>
                    <span className="block truncate text-[16px] font-medium text-bone">{site.email}</span>
                  </span>
                  <ArrowUpRight size={18} className="ml-auto shrink-0 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-acid" />
                </a>
              </Reveal>

              <Reveal delay={0.16} y={16}>
                <a href={site.phoneHref} className="card-line card-hover group flex items-center gap-4 p-5 sm:p-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/[0.09] bg-white/[0.03] text-fog transition-colors group-hover:border-acid/40 group-hover:text-acid">
                    <Phone size={19} strokeWidth={1.8} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10.5px] tracking-[0.2em] text-faint">PHONE / WHATSAPP</span>
                    <span className="block text-[16px] font-medium text-bone">{site.phone}</span>
                  </span>
                  <ArrowUpRight size={18} className="ml-auto shrink-0 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-acid" />
                </a>
              </Reveal>
            </div>

            <Reveal delay={0.22} y={14}>
              <p className="mt-8 flex items-center gap-3 font-mono text-[11.5px] tracking-[0.1em] text-faint">
                <span className="status-dot" aria-hidden="true" />
                typically replies within 24 hours — no spam, no pressure, ever
              </p>
            </Reveal>
          </div>

          {/* form */}
          <Reveal delay={0.12} y={34}>
            <div className="card-line relative overflow-hidden p-6 !rounded-[1.5rem] sm:p-9">
              <span
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-acid/50 to-transparent"
                aria-hidden="true"
              />
              <div className="mb-7 flex items-center justify-between">
                <p className="label-mono">project brief</p>
                <p className="font-mono text-[10.5px] tracking-[0.16em] text-faint">takes ~2 minutes</p>
              </div>

              {sent ? (
                <div className="flex flex-col items-start gap-4 py-8" role="status">
                  <CheckCircle2 size={44} strokeWidth={1.4} className="text-acid" />
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-bone">
                    Your mail app should be opening…
                  </h3>
                  <p className="max-w-md text-[15px] leading-relaxed text-dim">
                    If nothing happened, write to us directly at{" "}
                    <a href={`mailto:${site.email}`} className="link-line text-acid">
                      {site.email}
                    </a>{" "}
                    — we read everything ourselves.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setForm(initial);
                      setSent(false);
                    }}
                    className="btn btn-ghost mt-2 !px-5 !py-2.5 !text-[13px]"
                  >
                    Send another brief
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  {errorsCount > 0 && (
                    <p className="mb-5 rounded-xl border border-ember/30 bg-ember/10 px-4 py-3 font-mono text-[12px] text-ember" role="alert">
                      {errorsCount === 1 ? "One field needs attention:" : `${errorsCount} fields need attention:`}{" "}
                      please check below.
                    </p>
                  )}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="f-name" className="field-label">NAME *</label>
                      <input
                        id="f-name"
                        className="field"
                        placeholder="Your name"
                        autoComplete="name"
                        value={form.name}
                        onChange={set("name")}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "err-name" : undefined}
                      />
                      {errors.name && <p id="err-name" className="mt-1.5 font-mono text-[11.5px] text-ember">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="f-email" className="field-label">EMAIL *</label>
                      <input
                        id="f-email"
                        type="email"
                        className="field"
                        placeholder="you@company.com"
                        autoComplete="email"
                        value={form.email}
                        onChange={set("email")}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "err-email" : undefined}
                      />
                      {errors.email && <p id="err-email" className="mt-1.5 font-mono text-[11.5px] text-ember">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="f-company" className="field-label">COMPANY</label>
                    <input
                      id="f-company"
                      className="field"
                      placeholder="Company or organization (optional)"
                      autoComplete="organization"
                      value={form.company}
                      onChange={set("company")}
                    />
                  </div>

                  <div className="mt-5">
                    <label htmlFor="f-kind" className="field-label">WHAT DO YOU WANT TO BUILD?</label>
                    <div className="relative">
                      <select id="f-kind" className="field appearance-none pr-10" value={form.kind} onChange={set("kind")}>
                        <option value="" className="bg-[#0d0e10]">Choose a direction…</option>
                        {productKinds.map((k) => (
                          <option key={k} value={k} className="bg-[#0d0e10]">{k}</option>
                        ))}
                      </select>
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-faint" aria-hidden="true">
                        ▾
                      </span>
                    </div>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="f-message" className="field-label">MESSAGE *</label>
                    <textarea
                      id="f-message"
                      className="field min-h-[130px] resize-y"
                      placeholder="What are you trying to build, and what does success look like?"
                      value={form.message}
                      onChange={set("message")}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "err-message" : undefined}
                    />
                    {errors.message && <p id="err-message" className="mt-1.5 font-mono text-[11.5px] text-ember">{errors.message}</p>}
                  </div>

                  <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                    <p className="max-w-[210px] font-mono text-[10.5px] leading-relaxed tracking-wide text-faint">
                      submitting opens your mail app — nothing is stored on this site.
                    </p>
                    <Magnetic strength={0.14}>
                      <button type="submit" className="btn btn-acid group !px-8 !py-3.5">
                        Let’s Talk
                        <ArrowUpRight size={17} strokeWidth={2.4} className="btn-arrow" />
                      </button>
                    </Magnetic>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
