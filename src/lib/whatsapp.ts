import { CONTACT, WHATSAPP_MESSAGES } from '@/config/site'

/** Build a wa.me URL with a pre-filled message. */
export function whatsappUrl(message: string, phone: string = CONTACT.whatsapp): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

/** Ready-made links for the common enquiry contexts. */
export const WHATSAPP_LINKS = {
  general: () => whatsappUrl(WHATSAPP_MESSAGES.general),
  trial: () => whatsappUrl(WHATSAPP_MESSAGES.trial),
  shuttlePark: () => whatsappUrl(WHATSAPP_MESSAGES.shuttlePark),
  madhuraNagar: () => whatsappUrl(WHATSAPP_MESSAGES.madhuraNagar),
  /** A custom enquiry, e.g. from a specific program card. */
  custom: (topic: string) =>
    whatsappUrl(
      `Hi Druva Badminton Academy, I am interested in ${topic}. Please share the available batches and fees.`,
    ),
}

/** tel: link for the office / coach numbers. */
export const telUrl = (phone: string) => `tel:${phone}`
