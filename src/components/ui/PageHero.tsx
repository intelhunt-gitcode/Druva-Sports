import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import type { ReactNode } from 'react'

interface Crumb {
  name: string
  path?: string
}

interface PageHeroProps {
  eyebrow?: string
  title: string
  intro?: string
  crumbs?: Crumb[]
  children?: ReactNode
}

export function PageHero({ eyebrow, title, intro, crumbs = [], children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__glow" aria-hidden="true" />
      <div className="container page-hero__inner">
        <nav className="page-hero__crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.name} className="page-hero__crumb">
              <ChevronRight aria-hidden="true" />
              {c.path ? <Link to={c.path}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}
            </span>
          ))}
        </nav>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="page-hero__title">{title}</h1>
        {intro && <p className="page-hero__intro">{intro}</p>}
        {children && <div className="page-hero__actions">{children}</div>}
      </div>
    </section>
  )
}
