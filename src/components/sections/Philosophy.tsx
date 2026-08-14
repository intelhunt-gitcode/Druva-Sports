import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { PHILOSOPHY } from '@/data/academy'
import { IMAGES } from '@/data/images'
import { track } from '@/lib/analytics'

export function Philosophy() {
  return (
    <section className="section--dark philosophy" id="philosophy">
      <div className="philosophy__bg" aria-hidden="true">
        <img src={IMAGES.philosophy} alt="" loading="lazy" />
      </div>
      <div className="container philosophy__inner">
        <Reveal className="philosophy__content">
          <span className="eyebrow">Coaching Philosophy</span>
          <h2 className="section-title">{PHILOSOPHY.heading}</h2>
          {PHILOSOPHY.paragraphs.map((p, i) => (
            <p key={i} className="philosophy__text">
              {p}
            </p>
          ))}
          <ul className="philosophy__tags">
            {PHILOSOPHY.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn--primary" onClick={() => track('cta_click', { cta: 'book_trial', source: 'philosophy' })}>
            Book a Free Trial <ArrowRight aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
