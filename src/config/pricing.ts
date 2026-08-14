/**
 * ============================================================================
 *  CENTRALISED PRICING & BATCH CONFIGURATION
 * ============================================================================
 *  Fees and batch timings are stored PER LOCATION so they can differ.
 *  Only the Shuttle Park plan is confirmed from the supplied poster; Madhura
 *  Nagar is left as an editable placeholder (do not assume the same values).
 *
 *  Add or edit a plan here and the Fees + Batches sections update everywhere.
 * ============================================================================
 */

export type LocationKey = 'shuttlePark' | 'madhuraNagar'

export interface PricingPlan {
  id: string
  /** Duration label, e.g. "1 Month". */
  duration: string
  /** Numeric price in INR (used for schema + formatting). */
  price: number
  /** Human display, e.g. "₹3,000". */
  display: string
  /** Optional badge, e.g. "Best Value". */
  badge?: string
  highlight?: boolean
}

export interface Batch {
  id: string
  name: string
  time: string
  note?: string
}

export interface LocationSchedule {
  /** Whether confirmed data is available for this location yet. */
  confirmed: boolean
  days: string
  batches: Batch[]
  plans: PricingPlan[]
  /** Disclaimer shown under the fees / batches for this location. */
  note: string
}

export const CURRENCY = 'INR'

export const SCHEDULES: Record<LocationKey, LocationSchedule> = {
  /* ------------------------------------------------------------------ */
  /*  SHUTTLE PARK — confirmed from the supplied Shuttle Park poster      */
  /* ------------------------------------------------------------------ */
  shuttlePark: {
    confirmed: true,
    days: 'Monday to Friday',
    batches: [
      { id: 'sp-b1', name: 'Batch 1', time: '5:45 AM – 7:00 AM' },
      { id: 'sp-b2', name: 'Batch 2', time: '3:45 PM – 5:00 PM' },
      { id: 'sp-b3', name: 'Batch 3', time: '4:45 PM – 6:00 PM' },
      { id: 'sp-b4', name: 'Batch 4', time: '5:45 PM – 7:00 PM' },
    ],
    plans: [
      { id: 'sp-1m', duration: '1 Month', price: 3000, display: '₹3,000' },
      { id: 'sp-2m', duration: '2 Months', price: 5500, display: '₹5,500' },
      {
        id: 'sp-3m',
        duration: '3 Months',
        price: 7500,
        display: '₹7,500',
        badge: 'Best Value',
        highlight: true,
      },
    ],
    note: 'Fees and timings shown are for the displayed Shuttle Park coaching plan. Batch availability may change — please confirm the current fees, timings and availability with the academy before enrollment.',
  },

  /* ------------------------------------------------------------------ */
  /*  MADHURA NAGAR — placeholder. Do NOT assume Shuttle Park values.     */
  /*  Fill in once the academy confirms this location's schedule & fees.  */
  /* ------------------------------------------------------------------ */
  madhuraNagar: {
    confirmed: false,
    days: 'Monday to Friday',
    batches: [],
    plans: [],
    note: 'Batch timings and fees for Madhura Nagar will be confirmed by the academy. Please contact us for the latest schedule and pricing at this location.',
  },
}
