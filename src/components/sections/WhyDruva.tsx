import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { WHY_DRUVA } from '@/data/academy'

export function WhyDruva() {
  return (
    <section className="section section--alt why" id="why">
      <div className="container">
        <SectionHeading eyebrow="Why Druva" title="Why Train With Druva?" sub={WHY_DRUVA.subheading} center />
        <div className="grid grid--3 why__grid">
          {WHY_DRUVA.cards.map((card, i) => (
            <Reveal key={card.title} delay={(i % 3) * 90}>
              <article className="card card--hover why__card">
                <div className="why__icon">
                  <Icon name={card.icon} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
