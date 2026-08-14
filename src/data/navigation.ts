/** Primary navigation — order matches the design brief. */
export interface NavLink {
  label: string
  /** Route path for dedicated pages, or a homepage hash for on-page sections. */
  to: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Locations', to: '/locations' },
  { label: 'Batches & Fees', to: '/batches-and-fees' },
  { label: 'Coaches', to: '/coaches' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Rules', to: '/rules' },
  { label: 'Contact', to: '/contact' },
]

/** Footer quick links. */
export const FOOTER_LINKS: NavLink[] = [
  { label: 'Programs', to: '/programs' },
  { label: 'Locations', to: '/locations' },
  { label: 'Batches & Fees', to: '/batches-and-fees' },
  { label: 'Rules', to: '/rules' },
  { label: 'Contact', to: '/contact' },
]

/** SEO landing pages (crawlable, linked in the sitemap & footer). */
export const SEO_LANDING_LINKS: NavLink[] = [
  { label: 'Badminton Coaching in Hyderabad', to: '/badminton-coaching-hyderabad' },
  { label: 'Badminton Academy Jubilee Hills', to: '/badminton-academy-jubilee-hills' },
  { label: 'Badminton Coaching Jubilee Hills', to: '/badminton-coaching-jubilee-hills' },
  { label: 'Badminton Coaching Madhura Nagar', to: '/badminton-coaching-madhura-nagar' },
  { label: 'Kids Badminton Coaching Hyderabad', to: '/kids-badminton-coaching-hyderabad' },
  { label: 'Adult Badminton Coaching Hyderabad', to: '/adult-badminton-coaching-hyderabad' },
]
