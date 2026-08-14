/**
 * Local-SEO landing pages. Each has genuinely useful, location/audience
 * specific content — NOT thin duplicates. All facts trace back to the supplied
 * academy material.
 */
import type { IconName } from '@/components/ui/Icon'
import type { LocationKey } from '@/config/pricing'

export interface LandingPage {
  slug: string
  eyebrow: string
  h1: string
  seoTitle: string
  seoDescription: string
  intro: string[]
  /** Which venue this page emphasises (drives batch/fee/map blocks). */
  focusLocation?: LocationKey
  highlights: { icon: IconName; title: string; text: string }[]
  /** Extra location/audience-specific prose blocks (H2 + paragraphs). */
  sections: { heading: string; body: string[] }[]
}

export const LANDING_PAGES: Record<string, LandingPage> = {
  'badminton-coaching-hyderabad': {
    slug: 'badminton-coaching-hyderabad',
    eyebrow: 'Badminton Coaching · Hyderabad',
    h1: 'Badminton Coaching in Hyderabad',
    seoTitle: 'Badminton Coaching in Hyderabad | Druva Badminton Academy',
    seoDescription:
      'Structured badminton coaching in Hyderabad for kids, adults and aspiring players. Expert coaching at Madhura Nagar and Shuttle Park, Jubilee Hills. Book a free trial.',
    intro: [
      'Druva Badminton Academy offers structured, professional badminton coaching in Hyderabad for kids, adults and players who want to improve. Training is built around fundamentals, technique, fitness and consistent practice.',
      'We coach at two convenient locations — Madhura Nagar (Sri Krishna Devaraya Colony) and Shuttle Park in Jubilee Hills — so you can train close to home.',
    ],
    highlights: [
      { icon: 'ClipboardList', title: 'Structured Coaching', text: 'Sessions designed around skill development and progression.' },
      { icon: 'Users', title: 'Kids & Adults', text: 'Age-appropriate batches for children and adult players.' },
      { icon: 'Target', title: 'Personal Coaching', text: 'One-to-one attention for focused improvement.' },
      { icon: 'Activity', title: 'Fitness Training', text: 'Agility, speed, stamina and court movement.' },
    ],
    sections: [
      {
        heading: 'Coaching for every level',
        body: [
          'Whether your child is picking up a racket for the first time, you are returning to the sport, or you want to sharpen a competitive game, our coaching adapts to your level.',
          'Kids batches focus on movement, coordination and fundamentals in a fun, disciplined setting. Adult batches build technique, fitness and game awareness. Personal coaching gives dedicated one-to-one attention.',
        ],
      },
      {
        heading: 'Two locations across Hyderabad',
        body: [
          'Our Madhura Nagar centre serves players around Sri Krishna Devaraya Colony and nearby neighbourhoods. Shuttle Park in Jubilee Hills brings structured coaching to players across west Hyderabad.',
        ],
      },
    ],
  },

  'badminton-academy-jubilee-hills': {
    slug: 'badminton-academy-jubilee-hills',
    eyebrow: 'Badminton Academy · Jubilee Hills',
    h1: 'Badminton Academy in Jubilee Hills',
    seoTitle: 'Badminton Academy in Jubilee Hills | Druva — Shuttle Park',
    seoDescription:
      'Druva Badminton Academy at Shuttle Park, Jubilee Hills. Structured coaching for kids and adults, Monday to Friday. View batch timings, fees and book a free trial.',
    focusLocation: 'shuttlePark',
    intro: [
      'Druva Badminton Academy runs its Shuttle Park centre on Road Number 5, Durga Bhavani Nagar, Jubilee Hills — a dedicated badminton environment where players can train, improve and enjoy the game.',
      'With batches morning and evening, Monday to Friday, it is an easy fit for students, working professionals and families in and around Jubilee Hills.',
    ],
    highlights: [
      { icon: 'MapPin', title: 'Jubilee Hills', text: 'Road No. 5, Durga Bhavani Nagar (Metro Pillar C1573).' },
      { icon: 'CalendarClock', title: 'Morning & Evening', text: 'Four batches from 5:45 AM to 7:00 PM.' },
      { icon: 'Baby', title: 'Kids Coaching', text: 'Fundamentals, movement and confidence for children.' },
      { icon: 'User', title: 'Adult Coaching', text: 'Technique, fitness and game awareness for adults.' },
    ],
    sections: [
      {
        heading: 'Welcome to Shuttle Park',
        body: [
          'Shuttle Park — “Play. Smash. Repeat.” — is our Jubilee Hills badminton home. Coaching is structured around skill progression, footwork, fitness and match practice.',
          'Please confirm current batch availability and fees with the academy before enrollment.',
        ],
      },
    ],
  },

  'badminton-coaching-jubilee-hills': {
    slug: 'badminton-coaching-jubilee-hills',
    eyebrow: 'Badminton Coaching · Jubilee Hills',
    h1: 'Badminton Coaching in Jubilee Hills',
    seoTitle: 'Badminton Coaching in Jubilee Hills | Druva at Shuttle Park',
    seoDescription:
      'Professional badminton coaching in Jubilee Hills at Druva’s Shuttle Park centre. Kids and adult batches, personal coaching and fitness training. Book a free trial.',
    focusLocation: 'shuttlePark',
    intro: [
      'Looking for badminton coaching in Jubilee Hills? Druva’s Shuttle Park centre offers structured training for kids and adults, plus personal coaching and fitness sessions.',
      'Coaching runs Monday to Friday with four batches across the morning and evening.',
    ],
    highlights: [
      { icon: 'ClipboardList', title: 'Structured Sessions', text: 'Technique, footwork and match practice.' },
      { icon: 'Target', title: 'Personal Coaching', text: 'Individual attention for dedicated players.' },
      { icon: 'Activity', title: 'Fitness Training', text: 'Agility, stamina and court conditioning.' },
      { icon: 'Trophy', title: 'Player Development', text: 'Progressive technical, physical and mental growth.' },
    ],
    sections: [
      {
        heading: 'Coaching that fits your schedule',
        body: [
          'Early risers can train in the 5:45 AM batch before school or work; evening batches run from the afternoon to 7:00 PM. Choose the slot that suits your routine.',
        ],
      },
    ],
  },

  'badminton-coaching-madhura-nagar': {
    slug: 'badminton-coaching-madhura-nagar',
    eyebrow: 'Badminton Coaching · Madhura Nagar',
    h1: 'Badminton Coaching in Madhura Nagar',
    seoTitle: 'Badminton Coaching in Madhura Nagar, Hyderabad | Druva',
    seoDescription:
      'Badminton coaching in Madhura Nagar, Hyderabad with Druva Badminton Academy. Convenient training for players and families around Sri Krishna Devaraya Colony.',
    focusLocation: 'madhuraNagar',
    intro: [
      'Druva Badminton Academy offers convenient badminton coaching for players and families around Madhura Nagar and nearby Hyderabad neighbourhoods, at Sri Krishna Devaraya Colony.',
      'It is a welcoming place for children to learn the fundamentals and for adults to improve their game.',
    ],
    highlights: [
      { icon: 'MapPin', title: 'Madhura Nagar', text: 'Sri Krishna Devaraya Colony, Hyderabad.' },
      { icon: 'Baby', title: 'Kids Coaching', text: 'Movement, coordination and fundamentals.' },
      { icon: 'User', title: 'Adult Coaching', text: 'Technique, fitness and game awareness.' },
      { icon: 'Target', title: 'Personal Coaching', text: 'Focused one-to-one training.' },
    ],
    sections: [
      {
        heading: 'Train close to home',
        body: [
          'Our Madhura Nagar location makes it easy for families in the area to start badminton without a long commute.',
          'Batch timings and fees for Madhura Nagar are confirmed directly by the academy — please contact us for the current schedule and pricing at this location.',
        ],
      },
    ],
  },

  'kids-badminton-coaching-hyderabad': {
    slug: 'kids-badminton-coaching-hyderabad',
    eyebrow: 'Kids Coaching · Hyderabad',
    h1: 'Kids Badminton Coaching in Hyderabad',
    seoTitle: 'Kids Badminton Coaching in Hyderabad | Druva Badminton Academy',
    seoDescription:
      'Kids badminton coaching in Hyderabad at Druva Badminton Academy. Age-appropriate training focused on fundamentals, movement, fitness and confidence. Book a free trial.',
    intro: [
      'Introduce your child to badminton the right way. Druva’s kids coaching in Hyderabad focuses on fundamentals, movement drills, technique development and match practice — in a disciplined, encouraging environment.',
      'We coach children at both our Madhura Nagar and Shuttle Park (Jubilee Hills) locations.',
    ],
    highlights: [
      { icon: 'Baby', title: 'Fundamentals First', text: 'Grip, footwork and basic strokes done right.' },
      { icon: 'Activity', title: 'Fitness & Coordination', text: 'Speed, agility and balance for young players.' },
      { icon: 'ShieldCheck', title: 'Discipline', text: 'Consistency, confidence and sportsmanship.' },
      { icon: 'Users', title: 'Supportive Coaches', text: 'A positive, performance-focused team.' },
    ],
    sections: [
      {
        heading: 'A strong start for young players',
        body: [
          'Children develop coordination, focus and confidence through structured, age-appropriate sessions. Warm-up and cool-down are part of every class for safe, healthy training.',
          'The right starting age is confirmed by our coaching team — contact us and we’ll advise the best batch for your child.',
        ],
      },
      {
        heading: 'For parents',
        body: [
          'We ask parents to drop off and pick up children on time, encourage regular attendance, and let the coaching staff lead player development. You’re always welcome to discuss your child’s progress with the coach during suitable non-training hours.',
        ],
      },
    ],
  },

  'adult-badminton-coaching-hyderabad': {
    slug: 'adult-badminton-coaching-hyderabad',
    eyebrow: 'Adult Coaching · Hyderabad',
    h1: 'Adult Badminton Coaching in Hyderabad',
    seoTitle: 'Adult Badminton Coaching in Hyderabad | Druva Badminton Academy',
    seoDescription:
      'Adult badminton coaching in Hyderabad. Improve your technique, fitness and game awareness with structured coaching at Druva — Madhura Nagar and Jubilee Hills.',
    intro: [
      'Whether you’re a beginner or returning to the sport, Druva’s adult badminton coaching in Hyderabad helps you improve your skills, fitness and confidence with structured sessions.',
      'Morning and evening batches make it easy to fit training around work.',
    ],
    highlights: [
      { icon: 'User', title: 'All Levels', text: 'Beginner, intermediate and advanced players.' },
      { icon: 'Activity', title: 'Fitness Training', text: 'Endurance, agility and court movement.' },
      { icon: 'Target', title: 'Personal Coaching', text: 'One-to-one options for focused goals.' },
      { icon: 'CalendarClock', title: 'Flexible Timings', text: 'Early morning and evening batches.' },
    ],
    sections: [
      {
        heading: 'Get fitter while you play',
        body: [
          'Badminton is one of the best full-body workouts. Our adult sessions combine technique work with the fitness and movement that make you a stronger, sharper player.',
          'Book a free trial and see how our coaching fits your routine.',
        ],
      },
    ],
  },
}

export const LANDING_SLUGS = Object.keys(LANDING_PAGES)
