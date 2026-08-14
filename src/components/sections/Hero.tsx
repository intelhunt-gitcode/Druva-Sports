import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Icon } from '@/components/ui/Icon'
import { HERO } from '@/data/academy'
import { IMAGES } from '@/data/images'
import { WHATSAPP_LINKS } from '@/lib/whatsapp'
import { track } from '@/lib/analytics'

export function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero__bg">
        <img src={IMAGES.hero} alt="" aria-hidden="true" fetchPriority="high" className="hero__img" />
        <div className="hero__overlay" />
      </div>

      {/* Decorative animated shuttlecock */}
      <span className="hero__shuttle" aria-hidden="true">
        <Icon name="Wind" />
      </span>

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow reveal is-visible">{HERO.eyebrow}</p>
          <h1 className="hero__headline">
            {HERO.headline.map((word, i) => (
              <span key={word} className="hero__word" style={{ animationDelay: `${0.15 + i * 0.12}s` }}>
                {word}
              </span>
            ))}
          </h1>
          <p className="hero__sub">{HERO.subheadline}</p>
          <h2 className="hero__title">{HERO.title}</h2>
          <p className="hero__supporting">{HERO.supporting}</p>

          <div className="hero__ctas">
            <Link to="/contact" className="btn btn--primary" onClick={() => track('cta_click', { cta: 'book_trial', source: 'hero' })}>
              Meet Your Coach🏸 <ArrowRight aria-hidden="true" />
            </Link>
            <Link to="/programs" className="btn btn--ghost-light" onClick={() => track('cta_click', { cta: 'explore_programs', source: 'hero' })}>
              Explore Programs
            </Link>
            <a
              href={WHATSAPP_LINKS.general()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp hero__wa"
              onClick={() => track('whatsapp_click', { source: 'hero' })}
            >
              <MessageCircle aria-hidden="true" /> WhatsApp Us
            </a>
          </div>

          <ul className="hero__trust">
            {HERO.trustLine.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero__cards" aria-hidden="false">
          {HERO.floatingCards.map((card, i) => (
            <div key={card.label} className="hero__card" style={{ animationDelay: `${0.6 + i * 0.15}s` }}>
              <Icon name={card.icon} />
              <span>{card.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to content">
        <span />
      </a>
    </section>
  )
}
