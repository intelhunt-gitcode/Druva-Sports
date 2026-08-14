import { Seo } from '@/lib/Seo'
import { Hero } from '@/components/sections/Hero'
import { TrustStrip } from '@/components/sections/TrustStrip'
import { About } from '@/components/sections/About'
import { WhyDruva } from '@/components/sections/WhyDruva'
import { Programs } from '@/components/sections/Programs'
import { Locations } from '@/components/sections/Locations'
import { ShuttleParkFeature } from '@/components/sections/ShuttleParkFeature'
import { BatchSchedule } from '@/components/sections/BatchSchedule'
import { Fees } from '@/components/sections/Fees'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Philosophy } from '@/components/sections/Philosophy'
import { Team } from '@/components/sections/Team'
import { Gallery } from '@/components/sections/Gallery'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { SITE } from '@/config/site'
import { organizationSchema, sportsActivityLocationSchema, faqSchema } from '@/lib/schema'

export function HomePage() {
  return (
    <>
      <Seo
        title={`${SITE.name} — Professional Badminton Coaching in Hyderabad`}
        description={SITE.description}
        path="/"
        schema={[organizationSchema(), ...sportsActivityLocationSchema(), faqSchema()]}
      />
      <Hero />
      <TrustStrip />
      <About />
      <WhyDruva />
      <Programs />
      <Locations />
      <ShuttleParkFeature />
      <BatchSchedule />
      <Fees />
      <HowItWorks />
      <Philosophy />
      <Team />
      <Gallery />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  )
}
