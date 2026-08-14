import { Seo } from '@/lib/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { About } from '@/components/sections/About'
import { WhyDruva } from '@/components/sections/WhyDruva'
import { Philosophy } from '@/components/sections/Philosophy'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { breadcrumbSchema, organizationSchema } from '@/lib/schema'

export function AboutPage() {
  return (
    <>
      <Seo
        title="About Druva Badminton Academy | Hyderabad"
        description="Druva Badminton Academy, managed by Druva Sports & Entertainment Pvt Ltd, provides structured badminton coaching in Hyderabad built on discipline, fitness and player development."
        path="/about"
        schema={[organizationSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])]}
      />
      <PageHero
        eyebrow="About Us"
        title="More Than Just Badminton"
        intro="Druva Badminton Academy is built on discipline, fitness, focus and continuous improvement — a focused environment where kids and adults train, learn and grow."
        crumbs={[{ name: 'About' }]}
      />
      <About />
      <WhyDruva />
      <Philosophy />
      <HowItWorks />
      <FinalCTA />
    </>
  )
}
