import { Seo } from '@/lib/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Team } from '@/components/sections/Team'
import { Philosophy } from '@/components/sections/Philosophy'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { breadcrumbSchema } from '@/lib/schema'

export function CoachesPage() {
  return (
    <>
      <Seo
        title="Our Coaching Team | Druva Badminton Academy, Hyderabad"
        description="Meet the Druva Badminton Academy team — a dedicated 7-member group creating a positive, disciplined and performance-focused badminton environment in Hyderabad."
        path="/coaches"
        schema={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Coaches', path: '/coaches' }])]}
      />
      <PageHero
        eyebrow="Our Team"
        title="7 Members. One Purpose."
        intro="A dedicated team working together to create a positive, disciplined and performance-focused badminton environment."
        crumbs={[{ name: 'Coaches' }]}
      />
      <Team />
      <Philosophy />
      <FinalCTA />
    </>
  )
}
