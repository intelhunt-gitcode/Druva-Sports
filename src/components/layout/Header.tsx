import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { MobileMenu } from './MobileMenu'
import { NAV_LINKS } from '@/data/navigation'
import { track } from '@/lib/analytics'
import './Header.css'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="header header--solid">
        <div className="container container--wide header__inner">
          <Link to="/" className="header__brand" aria-label="Druva Badminton Academy — Home">
            <Logo variant="default" />
          </Link>

          <nav className="header__nav" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `header__link ${isActive ? 'is-active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="header__actions">
            <Link
              to="/contact"
              className="btn btn--primary btn--sm header__cta"
              onClick={() => track('cta_click', { cta: 'book_trial', source: 'header' })}
            >
              Book a Free Trial
            </Link>
            <button
              type="button"
              className="header__burger"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <Menu aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
