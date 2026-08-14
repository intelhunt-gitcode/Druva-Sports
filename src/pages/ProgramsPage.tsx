import { Seo } from '@/lib/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Programs } from '@/components/sections/Programs'
import { WhyDruva } from '@/components/sections/WhyDruva'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { breadcrumbSchema } from '@/lib/schema'

export function ProgramsPage() {
  return (
    <>
      <Seo
        title="Badminton Programs — Kids, Adult, Personal & Fitness | Druva"
        description="Explore Druva Badminton Academy programs in Hyderabad: kids coaching, adult coaching, personal one-to-one coaching and badminton fitness training. Book a free trial."
        path="/programs"
        schema={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Programs', path: '/programs' }])]}
      />
      <PageHero
        eyebrow="Programs"
        title="Training For Every Player"
        intro="Structured coaching paths for kids, adults, dedicated players and fitness — pick the one that fits your goals."
        crumbs={[{ name: 'Programs' }]}
      />
      <Programs />
      <WhyDruva />
      <FinalCTA />
    </>
  )
}
