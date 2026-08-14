import { MapPin, Users, Target, Activity } from 'lucide-react'

const ITEMS = [
  { Icon: MapPin, label: '2 Training Locations' },
  { Icon: Users, label: 'Kids & Adults' },
  { Icon: Target, label: 'Personal Coaching' },
  { Icon: Activity, label: 'Fitness Training' },
]

export function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="At a glance">
      <div className="container container--wide trust-strip__inner">
        {ITEMS.map(({ Icon, label }) => (
          <div key={label} className="trust-strip__item">
            <Icon aria-hidden="true" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
