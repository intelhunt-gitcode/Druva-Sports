import { MessageCircle, Navigation } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { Icon } from '@/components/ui/Icon'
import { SHUTTLE_PARK } from '@/data/academy'
import { LOCATIONS } from '@/data/academy'
import { WHATSAPP_LINKS } from '@/lib/whatsapp'
import { track } from '@/lib/analytics'

const shuttlePark = LOCATIONS.find((l) => l.key === 'shuttlePark')!

export function ShuttleParkFeature() {
  return (
    <section className="section--dark shuttle" id="shuttle-park">
      <div className="shuttle__glow" aria-hidden="true" />
      <div className="container shuttle__inner">
        <Reveal className="shuttle__content">
          <span className="eyebrow">Welcome to</span>
          <h2 className="shuttle__name">{SHUTTLE_PARK.name}</h2>
          <p className="shuttle__tagline">
            <Icon name="Wind" /> {SHUTTLE_PARK.tagline}
          </p>
          <p className="shuttle__text">{SHUTTLE_PARK.supporting}</p>
          <div className="shuttle__actions">
            <a
              className="btn btn--primary"
              href={WHATSAPP_LINKS.shuttlePark()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('whatsapp_click', { source: 'shuttle_park', location: 'shuttlePark' })}
            >
              <MessageCircle aria-hidden="true" /> Enquire at Shuttle Park
            </a>
            <a
              className="btn btn--ghost-light"
              href={shuttlePark.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('directions_click', { location: 'shuttlePark' })}
            >
              <Navigation aria-hidden="true" /> Get Directions
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
