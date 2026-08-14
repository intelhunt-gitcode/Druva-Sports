import { Navigation, MessageCircle, MapPin } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { LOCATIONS } from '@/data/academy'
import { WHATSAPP_LINKS } from '@/lib/whatsapp'
import { track } from '@/lib/analytics'

/**
 * Google Maps embeds for both locations. Uses the keyless Maps embed endpoint
 * (a query, not invented coordinates). Swap `embedQuery` for a Place ID or a
 * paid Embed API URL in src/config if desired.
 */
export function LocationsMap() {
  return (
    <div className="maps">
      {LOCATIONS.map((loc, i) => {
        const wa = loc.key === 'shuttlePark' ? WHATSAPP_LINKS.shuttlePark() : WHATSAPP_LINKS.madhuraNagar()
        return (
          <Reveal key={loc.key} delay={i * 120} className="maps__item">
            <div className="maps__frame">
              <iframe
                title={`Map — ${loc.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${loc.embedQuery}&output=embed`}
              />
            </div>
            <div className="maps__info">
              <h3><MapPin aria-hidden="true" /> {loc.name}</h3>
              <p>{loc.addressLines.join(', ')}</p>
              <div className="maps__actions">
                <a className="btn btn--purple btn--sm" href={loc.directionsUrl} target="_blank" rel="noopener noreferrer" onClick={() => track('directions_click', { location: loc.key })}>
                  <Navigation aria-hidden="true" /> Directions
                </a>
                <a className="btn btn--ghost btn--sm" href={wa} target="_blank" rel="noopener noreferrer" onClick={() => track('location_click', { location: loc.key })}>
                  <MessageCircle aria-hidden="true" /> Enquire
                </a>
              </div>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}
