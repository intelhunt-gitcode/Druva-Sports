import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { HOW_IT_WORKS } from '@/data/academy'

export function HowItWorks() {
  return (
    <section className="section how" id="how-it-works">
      <div className="container">
        <SectionHeading eyebrow="Getting Started" title="How It Works" sub={HOW_IT_WORKS.subheading} center />
        <ol className="how__timeline">
          {HOW_IT_WORKS.steps.map((step, i) => (
            <Reveal key={step.num} as="li" delay={i * 110} className="how__step">
              <div className="how__step-top">
                <span className="how__num">{step.num}</span>
                <span className="how__step-icon">
                  <Icon name={step.icon} />
                </span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
