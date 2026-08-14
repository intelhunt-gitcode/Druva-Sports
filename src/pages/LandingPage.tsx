import { Navigate, useLocation } from 'react-router-dom'
import { Seo } from '@/lib/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { Programs } from '@/components/sections/Programs'
import { BatchSchedule } from '@/components/sections/BatchSchedule'
import { Fees } from '@/components/sections/Fees'
import { LocationsMap } from '@/components/sections/LocationsMap'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { LANDING_PAGES } from '@/data/landingPages'
import { LOCATIONS } from '@/data/academy'
import { breadcrumbSchema, faqSchema, sportsActivityLocationSchema } from '@/lib/schema'

export function LandingPage() {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\/+|\/+$/g, '')
  const page = LANDING_PAGES[slug]
  if (!page) return <Navigate to="/404" replace />

  const location = page.focusLocation ? LOCATIONS.find((l) => l.key === page.focusLocation) : undefined
  const locationName = location?.name ?? 'Shuttle Park'

  return (
    <>
      <Seo
        title={page.seoTitle}
        description={page.seoDescription}
        path={`/${page.slug}`}
        schema={[
          ...sportsActivityLocationSchema(),
          faqSchema(),
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: page.h1, path: `/${page.slug}` }]),
        ]}
      />
      <PageHero eyebrow={page.eyebrow} title={page.h1} crumbs={[{ name: page.h1 }]} />

      <section className="section landing">
        <div className="container landing__intro">
          {page.intro.map((p, i) => (
            <Reveal key={i} delay={i * 70}>
              <p className="landing__lead">{p}</p>
            </Reveal>
          ))}

          <div className="grid grid--4 landing__highlights">
            {page.highlights.map((h, i) => (
              <Reveal key={h.title} delay={(i % 4) * 70}>
                <article className="card card--hover landing__hl">
                  <span className="landing__hl-ic"><Icon name={h.icon} /></span>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          {page.sections.map((s, i) => (
            <Reveal key={s.heading} delay={i * 60} className="landing__block">
              <h2>{s.heading}</h2>
              {s.body.map((b, j) => (
                <p key={j}>{b}</p>
              ))}
            </Reveal>
          ))}
        </div>
      </section>

      {location && (
        <>
          <BatchSchedule location={location.key} locationName={location.name} />
          <Fees location={location.key} locationName={locationName} />
          <section className="section section--alt">
            <div className="container">
              <SectionHeading eyebrow="Find Us" title={`Get Directions — ${location.name}`} center />
              <LocationsMap />
            </div>
          </section>
        </>
      )}

      <Programs />
      <FinalCTA />
    </>
  )
}
