import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  sub?: string
  center?: boolean
  id?: string
}

export function SectionHeading({ eyebrow, title, sub, center, id }: SectionHeadingProps) {
  return (
    <Reveal className={`section-head ${center ? 'section-head--center' : ''}`.trim()}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title" id={id}>
        {title}
      </h2>
      {sub && <p className="section-sub">{sub}</p>}
    </Reveal>
  )
}
