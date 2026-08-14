/**
 * Lightweight, privacy-friendly analytics abstraction.
 *
 * No tag is loaded and no data is sent unless a real ID is configured in
 * src/config/site.ts (or via .env). Every tracked interaction across the site
 * funnels through `track()`, so wiring GA4 / GTM / Meta Pixel later is a
 * one-line change here.
 */
import { ANALYTICS } from '@/config/site'

export type TrackEvent =
  | 'page_view'
  | 'cta_click'
  | 'phone_click'
  | 'whatsapp_click'
  | 'social_click'
  | 'location_click'
  | 'directions_click'
  | 'trial_form_start'
  | 'trial_form_submit'
  | 'program_enquiry'
  | 'batch_enquiry'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

const hasAnalytics = Boolean(ANALYTICS.ga4Id || ANALYTICS.gtmId || ANALYTICS.metaPixelId)

/** Fire a conversion / interaction event to whichever tags are configured. */
export function track(event: TrackEvent, params: Record<string, unknown> = {}): void {
  if (!hasAnalytics) {
    if (import.meta.env.DEV) console.debug('[analytics]', event, params)
    return
  }
  // Google Analytics 4 / Google Tag Manager
  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push({ event, ...params })
  window.gtag?.('event', event, params)
  // Meta Pixel — map to a standard event where it makes sense
  if (window.fbq) {
    if (event === 'trial_form_submit') window.fbq('track', 'Lead', params)
    else window.fbq('trackCustom', event, params)
  }
}

/** Injects the configured analytics tags once, on app start. Safe no-op if unset. */
export function initAnalytics(): void {
  if (typeof document === 'undefined' || !hasAnalytics) return

  if (ANALYTICS.gtmId) {
    window.dataLayer = window.dataLayer ?? []
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' })
    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.googletagmanager.com/gtm.js?id=${ANALYTICS.gtmId}`
    document.head.appendChild(s)
  }

  if (ANALYTICS.ga4Id) {
    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS.ga4Id}`
    document.head.appendChild(s)
    window.dataLayer = window.dataLayer ?? []
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', ANALYTICS.ga4Id)
  }

  if (ANALYTICS.metaPixelId) {
    // Standard Meta Pixel bootstrap, written type-safely.
    const w = window as unknown as {
      fbq?: ((...a: unknown[]) => void) & { queue?: unknown[]; loaded?: boolean; version?: string }
      _fbq?: unknown
    }
    if (!w.fbq) {
      const n: ((...a: unknown[]) => void) & { queue?: unknown[]; loaded?: boolean; version?: string } =
        (...args: unknown[]) => {
          n.queue!.push(args)
        }
      n.queue = []
      n.loaded = true
      n.version = '2.0'
      w.fbq = n
      w._fbq = n
      const t = document.createElement('script')
      t.async = true
      t.src = 'https://connect.facebook.net/en_US/fbevents.js'
      const s = document.getElementsByTagName('script')[0]
      s.parentNode?.insertBefore(t, s)
    }
    window.fbq?.('init', ANALYTICS.metaPixelId)
    window.fbq?.('track', 'PageView')
  }
}
