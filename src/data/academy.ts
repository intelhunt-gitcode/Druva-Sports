/**
 * ============================================================================
 *  DRUVA BADMINTON ACADEMY — CONTENT DATA
 * ============================================================================
 *  All human-readable content lives here, separated from the UI. Edit the
 *  words below to update the site — no component changes required.
 *
 *  CONTENT POLICY: nothing here is invented. Locations, timings, fees, phone
 *  numbers and rules come from the supplied Druva material. Anything not yet
 *  supplied (coach names, testimonials, minimum age) is a clearly-labelled
 *  editable placeholder.
 * ============================================================================
 */

import type { IconName } from '@/components/ui/Icon'
import type { LocationKey } from '@/config/pricing'

/* -------------------------------------------------------------------------- */
/*  LOCATIONS                                                                  */
/* -------------------------------------------------------------------------- */

export interface AcademyLocation {
  key: LocationKey
  index: string
  name: string
  addressLines: string[]
  area: string
  description: string
  mapsShareUrl: string
  directionsUrl: string
  embedQuery: string
}

/* Addresses use the exact information supplied by the academy. */
export const LOCATIONS: AcademyLocation[] = [
  {
    key: 'madhuraNagar',
    index: '01',
    name: 'Madhura Nagar',
    addressLines: [
      'Sri Krishna Devaraya Colony',
      'Madhura Nagar, Hyderabad',
      'Telangana',
    ],
    area: 'Madhura Nagar',
    description:
      'Convenient badminton coaching for players and families around Madhura Nagar and nearby Hyderabad neighbourhoods.',
    mapsShareUrl: 'https://share.google/pccg9CkqvvN1JSJ2n',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=' +
      encodeURIComponent(
        'SriKrishna Devaraya Nagar Badminton Area, Sri Nagar Colony, Yella Reddy Guda, Hyderabad, Telangana 500073',
      ),
    embedQuery: encodeURIComponent(
      'SriKrishna Devaraya Nagar Badminton Area, Sri Nagar Colony, Yella Reddy Guda, Hyderabad, Telangana 500073',
    ),
  },
  {
    key: 'shuttlePark',
    index: '02',
    name: 'Shuttle Park',
    addressLines: [
      'Road Number 5, Durga Bhavani Nagar',
      'Metro Pillar # C1573',
      'Jubilee Hills, Hyderabad – 500033',
    ],
    area: 'Jubilee Hills',
    description:
      'Our Shuttle Park location brings structured badminton coaching to players in and around Jubilee Hills and surrounding areas.',
    mapsShareUrl: 'https://share.google/s197BU0Hg3ugXqX8H',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=' +
      encodeURIComponent(
        'Druva Badminton Academy, Road Number 5, Durga Bhavani Nagar, Jubilee Hills, Hyderabad, Telangana 500033',
      ),
    embedQuery: encodeURIComponent(
      'Druva Badminton Academy, Road Number 5, Durga Bhavani Nagar, Jubilee Hills, Hyderabad, Telangana 500033',
    ),
  },
]

/* -------------------------------------------------------------------------- */
/*  HERO / TRUST                                                               */
/* -------------------------------------------------------------------------- */

export const HERO = {
  eyebrow: 'Druva Badminton Academy',
  headline: ['PLAY.', 'TRAIN.', 'PERFORM.'],
  subheadline: 'Build Your Game. Build Your Confidence.',
  title: 'Professional Badminton Coaching in Hyderabad',
  supporting:
    'Structured badminton training for kids, adults and aspiring players — with expert coaching, disciplined practice and a supportive training environment.',
  trustLine: [
    '2 Training Locations',
    'Kids & Adults',
    'Personal Coaching',
    'Fitness Training',
  ],
  floatingCards: [
    { icon: 'MapPin' as IconName, label: '2 Locations' },
    { icon: 'Users' as IconName, label: 'Kids & Adults' },
    { icon: 'Target' as IconName, label: 'Personal Coaching' },
    { icon: 'Activity' as IconName, label: 'Fitness Training' },
  ],
}

/* -------------------------------------------------------------------------- */
/*  ABOUT / INTRO                                                              */
/* -------------------------------------------------------------------------- */

export const ABOUT = {
  heading: 'More Than Just Badminton',
  paragraphs: [
    'At Druva Badminton Academy, we believe badminton is more than a game. It is a combination of discipline, fitness, focus, confidence and continuous improvement.',
    'Our structured coaching environment is designed to help players learn the fundamentals, improve technique, build physical fitness and develop the mindset required to perform on court.',
    "Whether you're introducing your child to badminton, returning to the sport or looking to improve your game, Druva provides a focused environment to train, learn and grow.",
  ],
  pillars: [
    { icon: 'Zap' as IconName, title: 'Skill', text: 'Build strong badminton fundamentals.' },
    { icon: 'Activity' as IconName, title: 'Fitness', text: 'Improve speed, agility, stamina and coordination.' },
    { icon: 'ShieldCheck' as IconName, title: 'Discipline', text: 'Develop consistency, confidence and sportsmanship.' },
  ],
}

/* -------------------------------------------------------------------------- */
/*  WHY DRUVA                                                                  */
/* -------------------------------------------------------------------------- */

export const WHY_DRUVA = {
  heading: 'Why Train With Druva?',
  subheading:
    'A focused, disciplined environment built around real coaching and steady player development.',
  cards: [
    { icon: 'ClipboardList' as IconName, title: 'Structured Coaching', text: 'Training sessions designed around skill development and progression.' },
    { icon: 'Baby' as IconName, title: 'Kids Coaching', text: 'Age-appropriate badminton training focused on fundamentals, movement and confidence.' },
    { icon: 'User' as IconName, title: 'Adult Coaching', text: 'Improve your technique, fitness and game awareness in a supportive environment.' },
    { icon: 'Target' as IconName, title: 'Personal Coaching', text: 'Individual attention for players who want focused training.' },
    { icon: 'Activity' as IconName, title: 'Fitness Training', text: 'Develop agility, speed, stamina, coordination and court movement.' },
    { icon: 'TrendingUp' as IconName, title: 'Player Development', text: 'Build the technical, physical and mental aspects of the game progressively.' },
  ],
}

/* -------------------------------------------------------------------------- */
/*  PROGRAMS                                                                   */
/* -------------------------------------------------------------------------- */

export interface Program {
  id: string
  icon: IconName
  title: string
  text: string
  cta: string
  image: keyof typeof import('@/data/images').IMAGES.programs
}

export const PROGRAMS = {
  heading: 'Training For Every Player',
  subheading: 'Structured coaching paths for kids, adults and dedicated players.',
  items: [
    {
      id: 'kids',
      icon: 'Baby' as IconName,
      title: 'Kids Badminton Coaching',
      text: 'Introduce children to badminton through structured training, movement drills, technique development and match practice.',
      cta: 'Enquire for Kids Batch',
      image: 'kids',
    },
    {
      id: 'adult',
      icon: 'User' as IconName,
      title: 'Adult Badminton Coaching',
      text: 'Improve your badminton skills, fitness and confidence with structured coaching.',
      cta: 'Join Adult Coaching',
      image: 'adult',
    },
    {
      id: 'personal',
      icon: 'Target' as IconName,
      title: 'Personal Coaching',
      text: 'One-to-one attention focused on your individual strengths, weaknesses and goals.',
      cta: 'Enquire for Personal Coaching',
      image: 'personal',
    },
    {
      id: 'fitness',
      icon: 'Activity' as IconName,
      title: 'Fitness Training',
      text: 'Improve agility, endurance, speed, coordination and physical conditioning required for badminton.',
      cta: 'Enquire Now',
      image: 'fitness',
    },
  ] satisfies Program[],
}

/* -------------------------------------------------------------------------- */
/*  SHUTTLE PARK FEATURE                                                       */
/* -------------------------------------------------------------------------- */

export const SHUTTLE_PARK = {
  name: 'Shuttle Park',
  tagline: 'Play. Smash. Repeat.',
  heading: 'Welcome to Shuttle Park',
  supporting:
    'A dedicated badminton environment where players can train, improve and enjoy the game.',
}

/* -------------------------------------------------------------------------- */
/*  HOW IT WORKS                                                               */
/* -------------------------------------------------------------------------- */

export const HOW_IT_WORKS = {
  heading: 'How It Works',
  subheading: 'From your first enquiry to your first smash — four simple steps.',
  steps: [
    { num: '01', icon: 'MessageCircle' as IconName, title: 'Enquire', text: 'Tell us about the player and preferred location.' },
    { num: '02', icon: 'CalendarClock' as IconName, title: 'Select Your Batch', text: 'Choose a suitable coaching schedule.' },
    { num: '03', icon: 'Dumbbell' as IconName, title: 'Start Training', text: 'Begin structured badminton coaching.' },
    { num: '04', icon: 'Trophy' as IconName, title: 'Improve & Perform', text: 'Develop your skills, fitness and confidence.' },
  ],
}

/* -------------------------------------------------------------------------- */
/*  COACHING PHILOSOPHY                                                        */
/* -------------------------------------------------------------------------- */

export const PHILOSOPHY = {
  heading: 'Build the Player. Not Just the Game.',
  paragraphs: [
    'Badminton requires more than powerful shots. It demands movement, balance, timing, decision-making, fitness and mental focus.',
    'At Druva, training is designed to help players develop these qualities step by step through disciplined practice and consistent coaching.',
  ],
  highlights: ['Technique', 'Footwork', 'Fitness', 'Match Practice', 'Discipline', 'Confidence'],
}

/* -------------------------------------------------------------------------- */
/*  TEAM / COACHES                                                             */
/* -------------------------------------------------------------------------- */

export interface Coach {
  id: string
  /** Editable placeholder — replace with the real coach name when supplied. */
  name: string
  /** e.g. 'Head Coach', 'Coach'. Editable. */
  role: string
  /** Only fill in a credential that is actually verified/supplied. */
  credential?: string
  specialty?: string
  /** Local photo path when supplied, otherwise empty for initials avatar. */
  photo?: string
  placeholder: boolean
}

export const TEAM = {
  heading: 'Our Team',
  headline: '7 Members. One Purpose.',
  supporting:
    'A dedicated team working together to create a positive, disciplined and performance-focused badminton environment.',
  /*
   * NOTE: Names, photos, qualifications and specialties are editable
   * placeholders. Only a verified credential should be filled in — for
   * example, if the academy confirms "L. Rajesh — NSNIS Certified Coach",
   * set name + credential below. Do NOT invent qualifications for others.
   */
  coaches: [
    { id: 'coach-01', name: 'Coach 01', role: 'Coach', placeholder: true },
    { id: 'coach-02', name: 'Coach 02', role: 'Coach', placeholder: true },
    { id: 'coach-03', name: 'Coach 03', role: 'Coach', placeholder: true },
    { id: 'coach-04', name: 'Coach 04', role: 'Coach', placeholder: true },
    { id: 'coach-05', name: 'Coach 05', role: 'Coach', placeholder: true },
    { id: 'coach-06', name: 'Coach 06', role: 'Coach', placeholder: true },
    { id: 'coach-07', name: 'Coach 07', role: 'Coach', placeholder: true },
  ] satisfies Coach[],
}

/* -------------------------------------------------------------------------- */
/*  TESTIMONIALS                                                               */
/* -------------------------------------------------------------------------- */

export interface Testimonial {
  id: string
  quote: string
  name: string
  type: string
  location: string
  rating: number
  placeholder: boolean
}

export const TESTIMONIALS = {
  heading: 'What Our Players Say',
  subheading: 'Real experiences from the Druva community.',
  /*
   * Placeholders only — DO NOT publish fake reviews. Replace `quote`, `name`,
   * `type` and `location` with genuine, supplied testimonials and set
   * placeholder:false to show them as verified.
   */
  items: [
    { id: 't1', quote: 'Add genuine parent/player testimonial here.', name: 'Player / Parent Name', type: 'Kids Coaching', location: 'Shuttle Park', rating: 5, placeholder: true },
    { id: 't2', quote: 'Add genuine parent/player testimonial here.', name: 'Player / Parent Name', type: 'Adult Coaching', location: 'Madhura Nagar', rating: 5, placeholder: true },
    { id: 't3', quote: 'Add genuine parent/player testimonial here.', name: 'Player / Parent Name', type: 'Personal Coaching', location: 'Jubilee Hills', rating: 5, placeholder: true },
    { id: 't4', quote: 'Add genuine parent/player testimonial here.', name: 'Player / Parent Name', type: 'Fitness Training', location: 'Hyderabad', rating: 5, placeholder: true },
  ] satisfies Testimonial[],
}

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                        */
/* -------------------------------------------------------------------------- */

export interface FaqItem {
  q: string
  a: string
}

export const FAQ = {
  heading: 'Frequently Asked Questions',
  subheading: 'Everything you need to know before you book a trial.',
  items: [
    {
      q: 'What age can children start badminton coaching?',
      // Editable — the academy has not yet specified a minimum age.
      a: 'We welcome young players into our kids batches. The minimum starting age is confirmed by our coaching team — please contact the academy and we will advise the right batch for your child.',
    },
    {
      q: 'Do you provide adult badminton coaching?',
      a: 'Yes. We offer structured adult badminton coaching to improve technique, fitness and game awareness in a supportive environment.',
    },
    {
      q: 'Do you offer personal coaching?',
      a: 'Yes. Personal (one-to-one) coaching is available for players who want individual attention focused on their strengths, weaknesses and goals.',
    },
    {
      q: 'Where are Druva Badminton Academy locations?',
      a: 'We currently coach at two locations in Hyderabad — Madhura Nagar (Sri Krishna Devaraya Colony) and Shuttle Park, Jubilee Hills.',
    },
    {
      q: 'What are the Shuttle Park batch timings?',
      a: 'Shuttle Park runs Monday to Friday with four batches: 5:45 AM – 7:00 AM, 3:45 PM – 5:00 PM, 4:45 PM – 6:00 PM and 5:45 PM – 7:00 PM. Batch availability may change — please confirm your preferred batch before enrollment.',
    },
    {
      q: 'What are the coaching fees?',
      a: 'The Shuttle Park coaching plan is ₹3,000 for 1 month, ₹5,500 for 2 months and ₹7,500 for 3 months (best value). Please confirm current fees and availability with the academy before enrollment.',
    },
    {
      q: 'Are weekend classes available?',
      a: 'According to our coaching schedule, regular coaching is conducted Monday to Friday. Saturdays, Sundays, festivals and public holidays generally remain closed unless otherwise notified.',
    },
    {
      q: 'Can I visit the academy before joining?',
      a: 'Absolutely. Contact the academy to confirm availability and we will help you plan a visit or a free trial at your preferred location.',
    },
    {
      q: 'How can I book a trial?',
      a: 'Use the “Book a Free Trial” form on this website, or message us on WhatsApp / call us directly. We will help you choose a suitable batch and location.',
    },
  ] satisfies FaqItem[],
}

/* -------------------------------------------------------------------------- */
/*  RULES & INSTRUCTIONS (from supplied "Batch Rules & Instructions")         */
/* -------------------------------------------------------------------------- */

export interface RuleGroup {
  icon: IconName
  title: string
  rules: string[]
}

export const RULES: RuleGroup[] = [
  {
    icon: 'CalendarDays',
    title: 'Batch Schedules',
    rules: [
      'Coaching classes are conducted 5 days a week, Monday to Friday.',
      'Saturdays, Sundays, festivals and public holidays generally remain closed unless otherwise notified.',
      'Students are expected to attend classes regularly according to their allotted batch timings.',
      'No compensation is provided for sessions missed by students.',
    ],
  },
  {
    icon: 'ListChecks',
    title: 'General Rules',
    rules: [
      'Players are responsible for their personal belongings.',
      'Proper badminton shoes are mandatory inside the court.',
      'Players must wear comfortable sports attire.',
      'Maintain discipline and respect coaches, staff and fellow players.',
      'Mobile phones should be kept on silent during coaching sessions.',
      'Food and chewing gum are not allowed in the playing area.',
      'Drinking water is allowed only in designated areas.',
    ],
  },
  {
    icon: 'Dumbbell',
    title: 'Coaching Rules',
    rules: [
      "Follow the coach's instructions.",
      'Regular attendance is essential for improvement.',
      'Inform the coach in advance about absence.',
      'Participate actively in warm-up and cool-down exercises.',
      'Practice matches should be played in a sportsmanlike manner.',
      'Misbehavior, abusive language or disrespect will not be tolerated.',
    ],
  },
  {
    icon: 'LayoutGrid',
    title: 'Court Usage',
    rules: [
      'Court timings must be followed strictly.',
      'Vacate the court immediately after the batch ends.',
      'Do not drag racks, chairs or equipment on the court.',
      'Return shuttles and training equipment after use.',
      'Intentional damage to academy property may result in disciplinary action.',
    ],
  },
  {
    icon: 'CreditCard',
    title: 'Fees & Membership',
    rules: [
      'Coaching fees must be paid in advance according to the selected plan.',
      'Fees once paid are non-refundable and non-transferable.',
      'Missed classes are not adjusted or refunded.',
      'Batch timings and fee structures may be revised by management when necessary.',
      'Membership may be suspended for repeated violations.',
    ],
  },
  {
    icon: 'ShieldCheck',
    title: 'Safety',
    rules: [
      'Inform the coach immediately about any injury or health concern.',
      'Warm-up and cool-down are compulsory.',
      'Do not enter a court while another game is in progress.',
      'Maintain a safe distance during training drills.',
      'Parents are requested not to interfere with coaching sessions.',
    ],
  },
  {
    icon: 'Users',
    title: 'For Parents',
    rules: [
      'Drop off and pick up children on time.',
      'Encourage discipline and regular attendance.',
      'Coaching decisions and player development plans are handled by coaching staff.',
      'Discuss concerns with the coach during suitable non-training hours.',
    ],
  },
]
