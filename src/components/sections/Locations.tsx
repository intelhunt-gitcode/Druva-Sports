import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { LocationCard } from './LocationCard'
import { LOCATIONS } from '@/data/academy'

export function Locations() {
  return (
    <section className="section section--alt locations" id="locations">
      <div className="container">
        <SectionHeading
          eyebrow="Locations"
          title="Train at a Location Near You"
          sub="Two convenient venues across Hyderabad — pick the one closest to you."
          center
        />
        <div className="grid grid--2 locations__grid">
          {LOCATIONS.map((loc, i) => (
            <Reveal key={loc.key} delay={i * 120}>
              <LocationCard location={loc} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
