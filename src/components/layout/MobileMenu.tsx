import { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { X, Phone, MessageCircle } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { NAV_LINKS } from '@/data/navigation'
import { CONTACT } from '@/config/site'
import { WHATSAPP_LINKS, telUrl } from '@/lib/whatsapp'
import { track } from '@/lib/analytics'
import './MobileMenu.css'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  // Lock body scroll and close on Escape while open.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <div className={`mmenu ${open ? 'is-open' : ''}`} role="dialog" aria-modal="true" aria-label="Menu" aria-hidden={!open}>
      <div className="mmenu__backdrop" onClick={onClose} />
      <div className="mmenu__panel">
        <div className="mmenu__top">
          <Logo />
          <button type="button" className="mmenu__close" aria-label="Close menu" onClick={onClose}>
            <X aria-hidden="true" />
          </button>
        </div>

        <nav className="mmenu__nav" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `mmenu__link ${isActive ? 'is-active' : ''}`}
              onClick={onClose}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="mmenu__cta">
          <Link
            to="/contact"
            className="btn btn--primary btn--block"
            onClick={() => {
              track('cta_click', { cta: 'book_trial', source: 'mobile_menu' })
              onClose()
            }}
          >
            Book a Free Trial
          </Link>
          <div className="mmenu__contact">
            <a href={telUrl(CONTACT.office.phone)} className="btn btn--ghost btn--block" onClick={() => track('phone_click', { source: 'mobile_menu' })}>
              <Phone aria-hidden="true" /> Call {CONTACT.office.display}
            </a>
            <a href={WHATSAPP_LINKS.general()} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--block" onClick={() => track('whatsapp_click', { source: 'mobile_menu' })}>
              <MessageCircle aria-hidden="true" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
