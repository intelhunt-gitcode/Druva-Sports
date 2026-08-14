/**
 * Lead / enquiry submission abstraction.
 *
 * The contact form UI is fully real. The transport is deliberately pluggable:
 *   - If LEADS.apiUrl is set, the lead is POSTed there as JSON (connect a
 *     backend API, CRM webhook, Google Apps Script / Sheet, or email service).
 *   - If not, the lead gracefully falls back to opening WhatsApp with the
 *     enquiry pre-filled, so a lead is never lost.
 *
 * No fake backend is implemented — this is a clean seam to wire real delivery.
 */
import { LEADS } from '@/config/site'
import { whatsappUrl } from '@/lib/whatsapp'

export interface Lead {
  name: string
  phone: string
  playerAge: string
  playerType: string
  location: string
  batch: string
  message: string
}

export interface LeadResult {
  ok: boolean
  /** 'api' when delivered to the backend, 'whatsapp' when using the fallback. */
  via: 'api' | 'whatsapp'
}

function leadToWhatsAppMessage(lead: Lead): string {
  return [
    'Hi Druva Badminton Academy, I would like to book a FREE TRIAL.',
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    lead.playerAge && `Player Age: ${lead.playerAge}`,
    lead.playerType && `Player Type: ${lead.playerType}`,
    lead.location && `Preferred Location: ${lead.location}`,
    lead.batch && `Preferred Batch: ${lead.batch}`,
    lead.message && `Message: ${lead.message}`,
  ]
    .filter(Boolean)
    .join('\n')
}

export async function submitLead(lead: Lead): Promise<LeadResult> {
  if (LEADS.apiUrl) {
    try {
      const res = await fetch(LEADS.apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...lead, source: 'website', ts: new Date().toISOString() }),
      })
      if (res.ok) return { ok: true, via: 'api' }
    } catch {
      /* fall through to WhatsApp fallback */
    }
  }

  // Fallback: open WhatsApp with the enquiry pre-filled.
  const url = whatsappUrl(leadToWhatsAppMessage(lead))
  window.open(url, '_blank', 'noopener,noreferrer')
  return { ok: true, via: 'whatsapp' }
}
