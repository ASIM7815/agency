# NONAME — Software Development & Digital Products

A premium, production-ready marketing website for **NONAME**, a software
development agency. Built with Next.js (App Router), React, TypeScript, and
Tailwind CSS.

## Stack

- **Next.js 16** (App Router, RSC-first, static prerender)
- **React 19 + TypeScript** (strict)
- **Tailwind CSS v4** (custom design tokens, no UI kit)
- Self-hosted fonts (Inter Variable, Space Grotesk Variable, JetBrains Mono
  Variable, Instrument Serif) — zero external font requests
- Zero animation/icon runtime dependencies: scroll reveals and micro
  interactions are hand-rolled CSS + IntersectionObserver; brand glyphs are
  inlined SVGs (CC0 simple-icons)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint
```

## Project structure

```
app/            layout, page, metadata, sitemap, robots, opengraph image
components/     navbar, footer, reusable UI primitives
components/sections/   hero · services · products · work · about · process ·
                       stack · why · contact (+ marquee & statement strips)
components/ui/  anim (scroll reveal), motion-bits (magnetic/counter),
                code-visuals (terminal & product-screen mocks), lazy-video
lib/            site config, data (services/solutions/process/projects/tech),
                brand-icon glyphs
public/         icon.svg
```

## Notes

- **No pricing anywhere**, no invented clients/stats/testimonials. Showcase
  work is clearly labelled as studio **concept projects** with sample data.
- Videos stream from Pexels and Pixabay (CC0-style licences, credited
  on-page), are lazy loaded near the viewport, use poster frames, and are
  disabled under `prefers-reduced-motion`.
- The contact form validates client-side and composes a `mailto:` brief —
  no backend, nothing stored.
- SEO: metadata + OpenGraph/Twitter, JSON-LD organization schema,
  `sitemap.xml`, `robots.txt`, semantic landmarks, generated OG image.
