import { Info } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PricingCard } from './PricingCard'
import { SCHEDULES, type LocationKey } from '@/config/pricing'

interface FeesProps {
  location?: LocationKey
  locationName?: string
}

export function Fees({ location = 'shuttlePark', locationName = 'Shuttle Park' }: FeesProps) {
  const schedule = SCHEDULES[location]

  return (
    <section className="section section--alt fees" id="fees">
      <div className="container">
        <SectionHeading
          eyebrow="Fee Structure"
          title="Simple, Transparent Fees"
          sub={`Coaching plans for ${locationName}. Longer plans offer better value.`}
          center
        />

        {schedule.plans.length > 0 ? (
          <div className="grid grid--3 fees__grid">
            {schedule.plans.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 100}>
                <PricingCard plan={plan} locationName={locationName} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="fees__empty">
            <p>Fees for {locationName} will be confirmed by the academy — please contact us for current pricing.</p>
          </Reveal>
        )}

        <Reveal className="fees__note">
          <Info aria-hidden="true" />
          <p>{schedule.note}</p>
        </Reveal>
      </div>
    </section>
  )
}
