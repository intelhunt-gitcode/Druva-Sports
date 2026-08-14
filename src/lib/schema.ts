/**
 * JSON-LD structured data builders. Uses only real, supplied academy data —
 * no invented ratings, counts, or coordinates.
 */
import { SITE, CONTACT, SOCIAL } from '@/config/site'
import { LOCATIONS } from '@/data/academy'
import { FAQ } from '@/data/academy'
import { SCHEDULES } from '@/config/pricing'

const sameAs = Object.values(SOCIAL).filter(Boolean)

/** LocalBusiness + SportsActivityLocation for each physical venue. */
export function sportsActivityLocationSchema() {
  return LOCATIONS.map((loc) => ({
    '@context': 'https://schema.org',
    '@type': ['SportsActivityLocation', 'LocalBusiness'],
    name: `${SITE.name} — ${loc.name}`,
    description: loc.description,
    url: `${SITE.url}/locations`,
    telephone: CONTACT.office.phone,
    email: CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: loc.addressLines[0],
      addressLocality: loc.area,
      addressRegion: SITE.state,
      addressCountry: 'IN',
    },
    sport: 'Badminton',
    parentOrganization: {
      '@type': 'Organization',
      name: SITE.legalName,
    },
    ...(sameAs.length ? { sameAs } : {}),
    hasMap: loc.mapsShareUrl,
    openingHours: 'Mo-Fr',
  }))
}

/** Top-level Organization / SportsOrganization for the brand. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['SportsOrganization', 'LocalBusiness'],
    name: SITE.name,
    legalName: SITE.legalName,
    description: SITE.description,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    email: CONTACT.email,
    telephone: CONTACT.office.phone,
    sport: 'Badminton',
    areaServed: { '@type': 'City', name: SITE.city },
    ...(sameAs.length ? { sameAs } : {}),
    location: LOCATIONS.map((loc) => ({
      '@type': 'Place',
      name: loc.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: loc.area,
        addressRegion: SITE.state,
        addressCountry: 'IN',
      },
    })),
    makesOffer: SCHEDULES.shuttlePark.plans.map((p) => ({
      '@type': 'Offer',
      name: `Badminton Coaching — ${p.duration} (Shuttle Park)`,
      price: p.price,
      priceCurrency: 'INR',
      category: 'Badminton Coaching',
    })),
  }
}

/** FAQPage schema (eligible because Q&A content is on the page). */
export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

/** BreadcrumbList for a page path. */
export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE.url}${c.path}`,
    })),
  }
}
