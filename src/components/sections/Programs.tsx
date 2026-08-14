import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProgramCard } from './ProgramCard'
import { PROGRAMS } from '@/data/academy'

export function Programs() {
  return (
    <section className="section programs" id="programs">
      <div className="container">
        <SectionHeading eyebrow="Programs" title="Training For Every Player" sub={PROGRAMS.subheading} center />
        <div className="grid grid--4 programs__grid">
          {PROGRAMS.items.map((program, i) => (
            <Reveal key={program.id} delay={(i % 4) * 80}>
              <ProgramCard program={program} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
