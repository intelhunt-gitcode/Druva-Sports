/**
 * ============================================================================
 *  CENTRALISED IMAGE CONFIGURATION
 * ============================================================================
 *  Every image on the website resolves through this file so URLs can be
 *  swapped in ONE place. PRIORITY ORDER for production:
 *    1. Druva's OWN photographs (drop files in /public/images and point here)
 *    2. Properly licensed / commercial-use stock photography
 *
 *  DEFAULTS: the site ships with clean, on-brand SVG placeholders in
 *  /public/placeholders so it renders perfectly on any machine with no broken
 *  images and no external dependencies. Replace each value below with a real
 *  photo path (e.g. '/images/kids-batch.jpg') — the academy's own images
 *  should always take priority.
 *
 *  Prefer WebP/AVIF for photos, use descriptive filenames, and keep the alt
 *  text meaningful for SEO + accessibility.
 *
 *  Tip: royalty-free badminton photos (e.g. Unsplash / Pexels) make good
 *  interim stock. Example licensed sources to consider while you gather
 *  Druva's own photos:
 *    https://unsplash.com/s/photos/badminton
 *    https://www.pexels.com/search/badminton/
 * ============================================================================
 */

// All public asset paths are prefixed with the build base URL so they resolve
// correctly when the app is served under a sub-path (e.g. /druva-sports/).
// Vite replaces import.meta.env.BASE_URL at build time (defaults to '/').
const B = import.meta.env.BASE_URL // always ends with '/'
const P = `${B}placeholders`

export const IMAGES = {
  /** Brand logo. Place the OFFICIAL Druva logo PNG at /public/logo.png. */
  logo: `${B}logo.png`,
  /** Optional white/knockout logo for dark sections. Falls back to text. */
  logoLight: `${B}logo-white.png`,
  /** Social share / Open Graph preview image (1200×630 recommended). */
  ogImage: `${B}og-image.jpg`,

  hero: `${P}/hero.svg`,
  /** Promotional hero banners (index1 page carousel) — designed graphics supplied by Druva. */
  heroBanners: [`${B}hero-banner-1.webp`, `${B}hero-banner-2.webp`, `${B}hero-banner-3.webp`],
  about: `${P}/about.svg`,
  philosophy: `${P}/philosophy.svg`,
  finalCta: `${P}/final-cta.svg`,

  programs: {
    kids: `${P}/prog-kids.svg`,
    adult: `${P}/prog-adult.svg`,
    personal: `${P}/prog-personal.svg`,
    fitness: `${P}/prog-fitness.svg`,
  },

  locations: {
    madhuraNagar: `${P}/loc-madhura.svg`,
    shuttlePark: `${P}/loc-shuttle.svg`,
  },

  /**
   * Gallery images. `src` can be a local Druva photo ('/images/…') or a
   * temporary placeholder. `category` powers the filter chips.
   */
  gallery: [
    { src: `${P}/g-training.svg`, category: 'Training', alt: 'Badminton training session on an indoor court' },
    { src: `${P}/g-kids.svg`, category: 'Kids', alt: 'Young player practising badminton footwork' },
    { src: `${P}/g-players.svg`, category: 'Players', alt: 'Player mid-smash during a badminton rally' },
    { src: `${P}/g-coaching.svg`, category: 'Coaching', alt: 'Coach guiding a player through a drill' },
    { src: `${P}/g-shuttlepark.svg`, category: 'Shuttle Park', alt: 'Indoor badminton court at Shuttle Park' },
    { src: `${P}/g-academy.svg`, category: 'Academy', alt: 'Druva Badminton Academy' },
    { src: `${P}/g-agility.svg`, category: 'Training', alt: 'Agility and footwork training on court' },
    { src: `${P}/g-match.svg`, category: 'Players', alt: 'Competitive badminton match play' },
  ],
} as const

export type GalleryImage = (typeof IMAGES.gallery)[number]
