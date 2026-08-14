import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { MobileMenu } from './MobileMenu'
import { NAV_LINKS } from '@/data/navigation'
import { track } from '@/lib/analytics'
import './Header.css'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Only the homepage has a hero the header can sit transparently over.
  const overHero = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || !overHero

  return (
    <>
      <header className={`header ${solid ? 'header--solid' : 'header--transparent'}`}>
        <div className="container container--wide header__inner">
          <Link to="/" className="header__brand" aria-label="Druva Badminton Academy — Home">
            <Logo variant={solid ? 'default' : 'light'} />
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
