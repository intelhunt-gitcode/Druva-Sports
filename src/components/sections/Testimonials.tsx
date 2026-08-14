import { Star, Quote } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TESTIMONIALS } from '@/data/academy'

export function Testimonials() {
  return (
    <section className="section section--alt testimonials" id="testimonials">
      <div className="container">
        <SectionHeading eyebrow="Testimonials" title="What Our Players Say" sub={TESTIMONIALS.subheading} center />
        <div className="grid grid--4 testimonials__grid">
          {TESTIMONIALS.items.map((t, i) => (
            <Reveal key={t.id} delay={(i % 4) * 80}>
              <article className={`card testimonial-card ${t.placeholder ? 'testimonial-card--ph' : ''}`}>
                <Quote className="testimonial-card__mark" aria-hidden="true" />
                <div className="testimonial-card__stars" aria-label={`${t.rating} out of 5`}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} aria-hidden="true" className={s < t.rating ? 'is-filled' : ''} />
                  ))}
                </div>
                <p className="testimonial-card__quote">{t.quote}</p>
                <div className="testimonial-card__author">
                  <span className="testimonial-card__avatar" aria-hidden="true" />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.type} · {t.location}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="testimonials__note">
          <p>Testimonials shown are placeholders. Genuine reviews from Druva players and parents will be published here.</p>
        </Reveal>
      </div>
    </section>
  )
}
