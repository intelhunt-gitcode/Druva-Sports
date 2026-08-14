import { Seo } from '@/lib/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Rules } from '@/components/sections/Rules'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { breadcrumbSchema } from '@/lib/schema'

export function RulesPage() {
  return (
    <>
      <Seo
        title="Batch Rules & Instructions | Druva Badminton Academy"
        description="Read Druva Badminton Academy's batch schedules, general rules, coaching rules, court usage, fees, safety and parent guidelines for a disciplined, safe training environment."
        path="/rules"
        schema={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Rules', path: '/rules' }])]}
      />
      <PageHero
        eyebrow="Rules & Discipline"
        title="Batch Rules & Instructions"
        intro="A disciplined, safe and respectful environment helps every player improve. Please review our guidelines before joining."
        crumbs={[{ name: 'Rules' }]}
      />
      <Rules />
      <FinalCTA />
    </>
  )
}
