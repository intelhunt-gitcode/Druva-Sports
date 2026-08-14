/**
 * ============================================================================
 *  DRUVA BADMINTON ACADEMY — CENTRAL SITE CONFIGURATION
 * ============================================================================
 *  This is the single place the academy owner edits to keep the whole website
 *  up to date. Nothing in this file is invented — every value below is either
 *  taken from the material supplied by Druva, or left as a clearly-labelled
 *  editable placeholder to be filled in later.
 *
 *  Change a phone number, a fee, a map link or an analytics ID HERE and it
 *  updates everywhere on the site automatically.
 * ============================================================================
 */

export const SITE = {
  /** Canonical production URL — update once the domain is live. */
  url: import.meta.env.VITE_SITE_URL ?? 'https://druvabadminton.com',
  name: 'Druva Badminton Academy',
  legalName: 'Druva Sports & Entertainment Private Limited',
  shortName: 'Druva',
  tagline: 'Play. Train. Perform.',
  description:
    'Professional badminton coaching in Hyderabad for kids, adults and aspiring players. Structured training, expert coaching and a supportive environment at two locations — Madhura Nagar and Shuttle Park, Jubilee Hills.',
  city: 'Hyderabad',
  state: 'Telangana',
  country: 'India',
} as const

/**
 * Contact details — taken directly from the supplied academy material.
 * Edit a number here and every Call / WhatsApp button updates.
 */
export const CONTACT = {
  office: {
    label: 'Office',
    phone: '+919491618989',
    display: '94916 18989',
  },
  coach: {
    label: 'Coach',
    phone: '+916364654129',
    display: '63646 54129',
  },
  email: 'druva.set@gmail.com',
  /** WhatsApp always uses the office number by default. */
  whatsapp: '919491618989',
} as const

/**
 * Pre-filled WhatsApp messages. Location-specific variants let a visitor
 * enquire about a specific venue in one tap.
 */
export const WHATSAPP_MESSAGES = {
  general:
    'Hi Druva Badminton Academy, I am interested in badminton coaching. Please share the available batches and fees.',
  shuttlePark:
    'Hi Druva Badminton Academy, I am interested in coaching at Shuttle Park, Jubilee Hills.',
  madhuraNagar:
    'Hi Druva Badminton Academy, I am interested in coaching at Madhura Nagar.',
  trial:
    'Hi Druva Badminton Academy, I would like to book a FREE TRIAL. Please help me choose a batch.',
} as const

/**
 * Social profiles. Links stay INACTIVE until a real URL is supplied — no
 * invented handles. Add the URL to activate the icon on the site.
 */
export const SOCIAL = {
  instagram: '', // e.g. 'https://instagram.com/druvabadminton'
  facebook: '',
  youtube: '',
  googleBusiness: '',
} as const

/**
 * Google Maps links for both locations, taken from the shared Google links
 * supplied by the academy. Replace with a Place ID / embed URL if desired.
 * No latitude/longitude is invented here.
 */
export const MAPS = {
  madhuraNagar: {
    /** Shared Google Business Profile link (SriKrishna Devaraya Nagar). */
    share: 'https://share.google/pccg9CkqvvN1JSJ2n',
    /** Directions deep-link built from the full address. */
    directions:
      'https://www.google.com/maps/dir/?api=1&destination=' +
      encodeURIComponent(
        'SriKrishna Devaraya Nagar Badminton Area, 8-3-677-26, Engineers Colony, Sri Nagar Colony, Yella Reddy Guda, Hyderabad, Telangana 500073',
      ),
    /** Embeddable map query (no API key required). */
    embedQuery: encodeURIComponent(
      'SriKrishna Devaraya Nagar Badminton Area, Sri Nagar Colony, Yella Reddy Guda, Hyderabad, Telangana 500073',
    ),
  },
  shuttlePark: {
    share: 'https://share.google/s197BU0Hg3ugXqX8H',
    directions:
      'https://www.google.com/maps/dir/?api=1&destination=' +
      encodeURIComponent(
        'Druva Badminton Academy, Road Number 5, Durga Bhavani Nagar, Jubilee Hills, Hyderabad, Telangana 500033',
      ),
    embedQuery: encodeURIComponent(
      'Druva Badminton Academy, Road Number 5, Durga Bhavani Nagar, Jubilee Hills, Hyderabad, Telangana 500033',
    ),
  },
} as const

/**
 * Lead / enquiry form delivery. The UI is real; the transport is left as a
 * clean, configurable abstraction (see src/lib/leads.ts). Set the endpoint
 * here when a backend / Google Sheet / CRM webhook is ready. If left blank,
 * the form falls back to opening WhatsApp with the enquiry pre-filled so no
 * lead is ever lost.
 */
export const LEADS = {
  apiUrl: import.meta.env.VITE_LEAD_API_URL ?? '',
  /** Where enquiry emails should be directed (used in mailto fallback). */
  email: 'druva.set@gmail.com',
} as const

/**
 * Analytics / conversion tracking. IDs are intentionally blank — the site
 * only loads a tag when a real ID is supplied here or via .env. Nothing is
 * hard-coded.
 */
export const ANALYTICS = {
  ga4Id: import.meta.env.VITE_GA4_ID ?? '',
  gtmId: import.meta.env.VITE_GTM_ID ?? '',
  metaPixelId: import.meta.env.VITE_META_PIXEL_ID ?? '',
} as const
