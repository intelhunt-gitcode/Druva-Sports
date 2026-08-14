import { Link } from 'react-router-dom'
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react'
import { CONTACT } from '@/config/site'
import { WHATSAPP_LINKS, telUrl } from '@/lib/whatsapp'
import { track } from '@/lib/analytics'
import './MobileStickyBar.css'

/** Thumb-friendly CALL | WHATSAPP | FREE TRIAL bar, mobile only. */
export function MobileStickyBar() {
  return (
    <nav className="msticky" aria-label="Quick contact">
      <a
        className="msticky__item"
        href={telUrl(CONTACT.office.phone)}
        onClick={() => track('phone_click', { source: 'sticky_bar' })}
      >
        <Phone aria-hidden="true" />
        <span>Call</span>
      </a>
      <a
        className="msticky__item msticky__item--wa"
        href={WHATSAPP_LINKS.general()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track('whatsapp_click', { source: 'sticky_bar' })}
      >
        <MessageCircle aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
      <Link
        className="msticky__item msticky__item--trial"
        to="/contact"
        onClick={() => track('cta_click', { cta: 'book_trial', source: 'sticky_bar' })}
      >
        <CalendarCheck aria-hidden="true" />
        <span>Meet Your Coach🏸</span>
      </Link>
    </nav>
  )
}
