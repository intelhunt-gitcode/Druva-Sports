import { Award } from 'lucide-react'
import type { Coach } from '@/data/academy'

/** Builds initials for the placeholder avatar (e.g. "Coach 01" → "C1"). */
function initials(name: string) {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export function CoachCard({ coach }: { coach: Coach }) {
  return (
    <article className="card card--hover coach-card">
      <div className="coach-card__photo">
        {coach.photo ? (
          <img src={coach.photo} alt={coach.placeholder ? 'Coach photo placeholder' : coach.name} loading="lazy" />
        ) : (
          <span className="coach-card__avatar" aria-hidden="true">
            {initials(coach.name)}
          </span>
        )}
        {coach.placeholder && <span className="coach-card__ph">Photo coming soon</span>}
      </div>
      <div className="coach-card__body">
        <h3>{coach.name}</h3>
        <p className="coach-card__role">{coach.role}</p>
        {coach.credential && (
          <p className="coach-card__cred">
            <Award aria-hidden="true" /> {coach.credential}
          </p>
        )}
        {coach.specialty && <p className="coach-card__spec">{coach.specialty}</p>}
      </div>
    </article>
  )
}
