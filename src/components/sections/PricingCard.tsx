import { Check } from 'lucide-react'
import { WHATSAPP_LINKS } from '@/lib/whatsapp'
import { track } from '@/lib/analytics'
import type { PricingPlan } from '@/config/pricing'

const PERKS = ['Structured coaching', 'Monday to Friday', 'Kids & adults welcome']

export function PricingCard({ plan, locationName }: { plan: PricingPlan; locationName: string }) {
  return (
    <article className={`card pricing-card ${plan.highlight ? 'pricing-card--featured' : ''}`}>
      {plan.badge && <span className="pricing-card__badge">{plan.badge}</span>}
      <h3 className="pricing-card__duration">{plan.duration}</h3>
      <p className="pricing-card__price">
        {plan.display}
        <span>/ plan</span>
      </p>
      <ul className="pricing-card__perks">
        {PERKS.map((perk) => (
          <li key={perk}>
            <Check aria-hidden="true" /> {perk}
          </li>
        ))}
      </ul>
      <a
        className={`btn ${plan.highlight ? 'btn--primary' : 'btn--ghost'} btn--block`}
        href={WHATSAPP_LINKS.custom(`the ${plan.duration} coaching plan at ${locationName}`)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track('cta_click', { cta: 'enquire_plan', plan: plan.id })}
      >
        Enquire &amp; Enroll
      </a>
    </article>
  )
}
