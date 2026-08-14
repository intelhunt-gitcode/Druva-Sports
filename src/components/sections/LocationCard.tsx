import { Link } from 'react-router-dom'
import { Navigation, MapPin, MessageCircle, CalendarClock } from 'lucide-react'
import type { AcademyLocation } from '@/data/academy'
import { IMAGES } from '@/data/images'
import { WHATSAPP_LINKS } from '@/lib/whatsapp'
import { track } from '@/lib/analytics'

export function LocationCard({ location }: { location: AcademyLocation }) {
  const isShuttlePark = location.key === 'shuttlePark'
  const waLink = isShuttlePark ? WHATSAPP_LINKS.shuttlePark() : WHATSAPP_LINKS.madhuraNagar()

  return (
    <article className="card location-card">
      <div className="location-card__media">
        <img src={IMAGES.locations[location.key]} alt={`${location.name} — Druva Badminton Academy`} loading="lazy" />
        <span className="location-card__index">{location.index}</span>
        {isShuttlePark && <span className="location-card__flag">Shuttle Park</span>}
      </div>
      <div className="location-card__body">
        <h3 className="location-card__name">{location.name}</h3>
        <address className="location-card__addr">
          <MapPin aria-hidden="true" />
          <span>{location.addressLines.join(', ')}</span>
        </address>
        <p className="location-card__desc">{location.description}</p>
        <div className="location-card__actions">
          <a
            className="btn btn--purple btn--sm"
            href={location.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('directions_click', { location: location.key })}
          >
            <Navigation aria-hidden="true" /> Get Directions
          </a>
          {isShuttlePark ? (
            <Link
              className="btn btn--ghost btn--sm"
              to="/batches-and-fees"
              onClick={() => track('batch_enquiry', { location: location.key, source: 'location_card' })}
            >
              <CalendarClock aria-hidden="true" /> View Batches
            </Link>
          ) : (
            <a
              className="btn btn--ghost btn--sm"
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('location_click', { location: location.key })}
            >
              <MessageCircle aria-hidden="true" /> Enquire Now
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
