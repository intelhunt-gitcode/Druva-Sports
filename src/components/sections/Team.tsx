import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CoachCard } from './CoachCard'
import { TEAM } from '@/data/academy'

export function Team() {
  return (
    <section className="section team" id="coaches">
      <div className="container">
        <SectionHeading
          eyebrow={TEAM.heading}
          title={TEAM.headline}
          sub={TEAM.supporting}
          center
        />
        <div className="grid team__grid">
          {TEAM.coaches.map((coach, i) => (
            <Reveal key={coach.id} delay={(i % 4) * 70}>
              <CoachCard coach={coach} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
