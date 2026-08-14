import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { SITE, CONTACT, SOCIAL } from '@/config/site'
import { FOOTER_LINKS, SEO_LANDING_LINKS } from '@/data/navigation'
import { LOCATIONS } from '@/data/academy'
import { WHATSAPP_LINKS, telUrl } from '@/lib/whatsapp'
import { track } from '@/lib/analytics'
import './Footer.css'

const SOCIAL_ICONS = [
  { key: 'instagram', url: SOCIAL.instagram, Icon: Instagram, label: 'Instagram' },
  { key: 'facebook', url: SOCIAL.facebook, Icon: Facebook, label: 'Facebook' },
  { key: 'youtube', url: SOCIAL.youtube, Icon: Youtube, label: 'YouTube' },
] as const

export function Footer() {
  const activeSocials = SOCIAL_ICONS.filter((s) => s.url)

  return (
    <footer className="footer">
      <div className="container container--wide footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <Logo variant="light" />
          </div>
          <p className="footer__desc">
            Professional badminton coaching in Hyderabad for kids, adults and aspiring players —
            structured training, expert coaching and a supportive environment.
          </p>
          <p className="footer__managed">Managed by {SITE.legalName}</p>

          {activeSocials.length > 0 && (
            <div className="footer__social">
              {activeSocials.map(({ key, url, Icon, label }) => (
                <a key={key} href={url} target="_blank" rel="noopener noreferrer" aria-label={label} className="footer__social-btn">
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__links">
            {FOOTER_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
            <li>
              <a href={WHATSAPP_LINKS.general()} target="_blank" rel="noopener noreferrer" onClick={() => track('whatsapp_click', { source: 'footer' })}>
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Locations</h3>
          <ul className="footer__locations">
            {LOCATIONS.map((loc) => (
              <li key={loc.key}>
                <MapPin aria-hidden="true" />
                <div>
                  <strong>{loc.name}</strong>
                  <span>{loc.area}, Hyderabad</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Contact</h3>
          <ul className="footer__contact">
            <li>
              <a href={telUrl(CONTACT.office.phone)} onClick={() => track('phone_click', { source: 'footer' })}>
                <Phone aria-hidden="true" /> Office: {CONTACT.office.display}
              </a>
            </li>
            <li>
              <a href={telUrl(CONTACT.coach.phone)} onClick={() => track('phone_click', { source: 'footer_coach' })}>
                <Phone aria-hidden="true" /> Coach: {CONTACT.coach.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`}>
                <Mail aria-hidden="true" /> {CONTACT.email}
              </a>
            </li>
            <li>
              <a href={WHATSAPP_LINKS.general()} target="_blank" rel="noopener noreferrer" onClick={() => track('whatsapp_click', { source: 'footer' })}>
                <MessageCircle aria-hidden="true" /> Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container container--wide footer__seo">
        {SEO_LANDING_LINKS.map((l) => (
          <Link key={l.to} to={l.to} className="footer__seo-link">
            {l.label}
          </Link>
        ))}
      </div>

      <div className="footer__bar">
        <div className="container container--wide footer__bar-inner">
          <p>© {new Date().getFullYear()} {SITE.legalName}. All Rights Reserved.</p>
          <p className="footer__bar-note">Druva Badminton Academy · Hyderabad, Telangana</p>
        </div>
      </div>
    </footer>
  )
}
