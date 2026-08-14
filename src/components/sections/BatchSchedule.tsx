import { Clock, Info } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SCHEDULES, type LocationKey } from '@/config/pricing'

interface BatchScheduleProps {
  /** Which location's schedule to show. Defaults to the confirmed Shuttle Park. */
  location?: LocationKey
  locationName?: string
}

export function BatchSchedule({ location = 'shuttlePark', locationName = 'Shuttle Park' }: BatchScheduleProps) {
  const schedule = SCHEDULES[location]

  return (
    <section className="section batches" id="batches">
      <div className="container">
        <SectionHeading
          eyebrow="Batch Timings"
          title="Choose Your Batch"
          sub={`Coaching runs ${schedule.days} at ${locationName}. Pick the slot that fits your routine.`}
          center
        />

        {schedule.batches.length > 0 ? (
          <div className="grid grid--4 batches__grid">
            {schedule.batches.map((batch, i) => (
              <Reveal key={batch.id} delay={(i % 4) * 80}>
                <article className="card card--hover batch-card">
                  <span className="batch-card__tag">{batch.name}</span>
                  <span className="batch-card__icon">
                    <Clock aria-hidden="true" />
                  </span>
                  <p className="batch-card__time">{batch.time}</p>
                  <p className="batch-card__days">{schedule.days}</p>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="batches__empty">
            <p>Batch timings for {locationName} will be confirmed by the academy — please contact us for the latest schedule.</p>
          </Reveal>
        )}

        <Reveal className="batches__note">
          <Info aria-hidden="true" />
          <p>{schedule.note}</p>
        </Reveal>
      </div>
    </section>
  )
}
