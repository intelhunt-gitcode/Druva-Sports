import { MessageCircle } from 'lucide-react'
import { WHATSAPP_LINKS } from '@/lib/whatsapp'
import { track } from '@/lib/analytics'
import './FloatingWhatsApp.css'

/** Persistent WhatsApp bubble (hidden on mobile where the sticky bar covers it). */
export function FloatingWhatsApp() {
  return (
    <a
      className="fab-whatsapp"
      href={WHATSAPP_LINKS.general()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Druva Badminton Academy on WhatsApp"
      onClick={() => track('whatsapp_click', { source: 'floating' })}
    >
      <MessageCircle aria-hidden="true" />
      <span className="fab-whatsapp__pulse" aria-hidden="true" />
    </a>
  )
}
