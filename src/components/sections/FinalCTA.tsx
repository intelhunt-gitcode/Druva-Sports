import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, Phone } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { IMAGES } from '@/data/images'
import { CONTACT } from '@/config/site'
import { WHATSAPP_LINKS, telUrl } from '@/lib/whatsapp'
import { track } from '@/lib/analytics'

export function FinalCTA() {
  return (
    <section className="final-cta" id="book">
      <div className="final-cta__bg" aria-hidden="true">
        <img src={IMAGES.finalCta} alt="" loading="lazy" />
        <div className="final-cta__overlay" />
      </div>
      <div className="container final-cta__inner">
        <Reveal>
          <span className="eyebrow">Book a Free Trial</span>
          <h2 className="final-cta__title">Ready to Take Your Game to the Next Level?</h2>
          <p className="final-cta__text">
            Choose your location, find your batch and start your badminton journey with Druva.
          </p>
          <div className="final-cta__actions">
            <Link to="/contact" className="btn btn--primary" onClick={() => track('cta_click', { cta: 'book_trial', source: 'final_cta' })}>
              Book a Free Trial <ArrowRight aria-hidden="true" />
            </Link>
            <a
              href={WHATSAPP_LINKS.trial()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp"
              onClick={() => track('whatsapp_click', { source: 'final_cta' })}
            >
              <MessageCircle aria-hidden="true" /> WhatsApp Us
            </a>
            <a
              href={telUrl(CONTACT.office.phone)}
              className="btn btn--ghost-light"
              onClick={() => track('phone_click', { source: 'final_cta' })}
            >
              <Phone aria-hidden="true" /> Call Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
