# Druva Badminton Academy — Website

A modern, premium, mobile-first website for **Druva Badminton Academy**, Hyderabad
(managed by *Druva Sports & Entertainment Private Limited*). Built to generate
badminton coaching enquiries — making it easy for a parent, student or adult
player to understand the academy, pick a location, view batches & fees, and
contact the academy or book a free trial.

Built with **React + Vite + TypeScript** and clean modular CSS (a design system
driven by the Druva logo colours). No heavy UI frameworks. Icons via
`lucide-react`.

---

## ✨ Highlights

- **Conversion-first**: sticky mobile `CALL · WHATSAPP · FREE TRIAL` bar,
  floating WhatsApp button, "Book a Free Trial" CTAs throughout, and a
  high-conversion enquiry form.
- **Content fully separated from UI** — the academy owner edits data files, not
  components (see [Editing content](#-editing-content-no-coding)).
- **No invented facts** — coach names, testimonials and the minimum joining age
  are clearly-labelled editable placeholders. Only supplied data (locations,
  Shuttle Park timings & fees, phone numbers, rules) is presented as fact.
- **Local SEO**: per-page titles/descriptions, Open Graph, JSON-LD
  (LocalBusiness / SportsActivityLocation / FAQPage / Breadcrumb),
  `robots.txt`, `sitemap.xml`, and 6 location/audience landing pages.
- **Accessible & fast**: semantic HTML, keyboard navigation, focus states,
  reduced-motion support, lazy-loaded imagery, code-split bundles.
- **Configurable integrations**: WhatsApp numbers, Google Maps links, lead
  delivery endpoint and analytics IDs are all set in one place — nothing is
  hard-coded.

---

## 🚀 Getting started

Requirements: **Node.js 18+**.

```bash
cd Druva
npm install
npm run dev          # start local dev server (http://localhost:5173)
npm run build        # type-check + production build → dist/
npm run preview      # preview the production build locally
```

Deploy the contents of `dist/` to any static host (Netlify, Vercel, Cloudflare
Pages, GitHub Pages, S3, Nginx, …).

> **SPA routing note:** this is a single-page app with client-side routes.
> Configure your host to rewrite unknown paths to `/index.html`
> (Netlify: `/* /index.html 200`; Vercel: framework preset "Vite"; Nginx:
> `try_files $uri /index.html;`). Otherwise deep links like `/contact` 404 on
> refresh.

---

## 🖊️ Editing content (no coding)

Everything the owner will realistically change lives in a few well-commented
files:

| What you want to change | Edit this file |
| --- | --- |
| Phone numbers, WhatsApp, email, social links, maps, analytics IDs | `src/config/site.ts` |
| Batch timings & fees (per location) | `src/config/pricing.ts` |
| About / programs / why-us / philosophy / team / testimonials / FAQ / rules text | `src/data/academy.ts` |
| Every image URL (logo, hero, programs, gallery…) | `src/data/images.ts` |
| Navigation labels & order | `src/data/navigation.ts` |
| SEO landing-page content | `src/data/landingPages.ts` |

### The logo

Drop the **official Druva logo** at `public/logo.png` (and, optionally, a
white/transparent version at `public/logo-white.png` for the dark footer). The
logo artwork is never redesigned or distorted by this project. Until you add the
file, the site shows a clean text wordmark in the brand colours as a graceful
fallback. See `public/logo-README.txt`.

### Images

The site ships with on-brand SVG placeholders in `public/placeholders/` so it
renders perfectly with no broken images. Replace them with **Druva's own
photographs** (or properly licensed stock) by editing `src/data/images.ts` —
point each value at a file you drop in `public/images/…`. Druva's own photos
should always take priority. Use WebP/AVIF where possible and keep the `alt`
text meaningful.

### Coaches & testimonials

- **Coaches** (`TEAM.coaches` in `academy.ts`): 7 editable placeholders. Add real
  `name`, `role`, `photo` and — only if verified — a `credential`
  (e.g. `"L. Rajesh — NSNIS Certified Coach"`). Do **not** invent qualifications.
- **Testimonials** (`TESTIMONIALS.items`): placeholders only. Add genuine
  quotes and set `placeholder: false`. Never publish fabricated reviews.

---

## 🔌 Configuration & integrations

All optional — the site works out of the box. Copy `.env.example` to `.env` to
set any of these:

```
VITE_SITE_URL         # canonical/OG base URL
VITE_LEAD_API_URL     # where the enquiry form POSTs leads (see below)
VITE_GA4_ID           # Google Analytics 4
VITE_GTM_ID           # Google Tag Manager
VITE_META_PIXEL_ID    # Meta Pixel
```

### Lead / enquiry form

The contact form UI is real; delivery is a clean, pluggable seam
(`src/lib/leads.ts`):

- **With `VITE_LEAD_API_URL` set** → each lead is `POST`ed as JSON. Point it at a
  backend API, CRM webhook, or a Google Apps Script bound to a Google Sheet.
- **Without it** → the form gracefully opens WhatsApp with the enquiry
  pre-filled, so no lead is ever lost.

No fake backend is included.

### Analytics & conversion tracking

No tag loads and no data is sent unless you set an ID above. Tracked events
(all funnel through `src/lib/analytics.ts`): `page_view`, `cta_click`,
`phone_click`, `whatsapp_click`, `location_click`, `directions_click`,
`trial_form_start`, `trial_form_submit`, `program_enquiry`, `batch_enquiry`.

### Google Maps

Map embeds and "Get Directions" links are built from the supplied Google share
links / addresses in `src/config/site.ts` and `src/data/academy.ts` — no
latitude/longitude is invented. Swap in a Place ID or paid Embed API URL if
preferred.

---

## 🗂️ Project structure

```
src/
  config/         site.ts (contacts, maps, analytics), pricing.ts (fees/batches)
  data/           academy.ts, images.ts, navigation.ts, landingPages.ts
  lib/            analytics.ts, whatsapp.ts, leads.ts, schema.ts, Seo.tsx
  components/
    layout/       Header, MobileMenu, MobileStickyBar, Footer
    ui/           Logo, Icon, Reveal, SectionHeading, PageHero, FloatingWhatsApp
    sections/     Hero, TrustStrip, About, WhyDruva, Programs, Locations,
                  ShuttleParkFeature, BatchSchedule, Fees, HowItWorks,
                  Philosophy, Team, Gallery, Testimonials, FAQ, FinalCTA,
                  ContactForm, Rules, LocationsMap
  pages/          Home, About, Programs, Locations, BatchesFees, Coaches,
                  Gallery, Rules, Contact, LandingPage, NotFound
  styles/         tokens.css (design tokens), base.css, sections.css
public/           robots.txt, sitemap.xml, favicon.svg, placeholders/
```

## 🎨 Design system

- **Colours** (from the logo): deep royal purple `#32127A` / `#4B1FA3`
  (structure & premium sections), orange `#F36A21` (primary CTAs), blue
  `#087AC1` (secondary accents), red→orange `#F04424→#F36A21` (energy), on white
  / light grey. Tokens in `src/styles/tokens.css`.
- **Type**: Poppins (headings, athletic uppercase) + Inter (body).

## ♿ Accessibility & performance

Semantic landmarks, skip link, keyboard-navigable menus and lightbox, visible
focus states, ARIA where needed, `prefers-reduced-motion` support, lazy-loaded
gallery images, and manual chunking for smaller initial JS.

---

© Druva Sports & Entertainment Private Limited. All Rights Reserved.
