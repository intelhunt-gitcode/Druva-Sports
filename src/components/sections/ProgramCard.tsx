import { ArrowRight } from 'lucide-react'
import { Icon } from '@/components/ui/Icon'
import type { Program } from '@/data/academy'
import { IMAGES } from '@/data/images'
import { WHATSAPP_LINKS } from '@/lib/whatsapp'
import { track } from '@/lib/analytics'

export function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="card card--hover program-card">
      <div className="program-card__media">
        <img src={IMAGES.programs[program.image]} alt={program.title} loading="lazy" />
        <span className="program-card__badge">
          <Icon name={program.icon} />
        </span>
      </div>
      <div className="program-card__body">
        <h3>{program.title}</h3>
        <p>{program.text}</p>
        <a
          className="program-card__cta"
          href={WHATSAPP_LINKS.custom(`${program.title.toLowerCase()}`)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track('program_enquiry', { program: program.id })}
        >
          {program.cta} <ArrowRight aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}
