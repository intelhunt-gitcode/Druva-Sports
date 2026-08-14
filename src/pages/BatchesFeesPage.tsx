import { Seo } from '@/lib/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { BatchSchedule } from '@/components/sections/BatchSchedule'
import { Fees } from '@/components/sections/Fees'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'

export function BatchesFeesPage() {
  return (
    <>
      <Seo
        title="Batch Timings & Fees — Shuttle Park | Druva Badminton Academy"
        description="Shuttle Park badminton batches run Monday to Friday (5:45 AM–7:00 PM). Fees: ₹3,000 / 1 month, ₹5,500 / 2 months, ₹7,500 / 3 months. Confirm before enrollment."
        path="/batches-and-fees"
        schema={[faqSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Batches & Fees', path: '/batches-and-fees' }])]}
      />
      <PageHero
        eyebrow="Batches & Fees"
        title="Choose Your Batch"
        intro="Shuttle Park runs four batches Monday to Friday. Timings and fees are shown below — please confirm current availability before enrollment."
        crumbs={[{ name: 'Batches & Fees' }]}
      />
      <BatchSchedule location="shuttlePark" locationName="Shuttle Park" />
      <Fees location="shuttlePark" locationName="Shuttle Park" />
      <FAQ />
      <FinalCTA />
    </>
  )
}
