import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RULES } from '@/data/academy'

export function Rules() {
  return (
    <section className="section rules" id="rules">
      <div className="container">
        <SectionHeading
          eyebrow="Rules & Discipline"
          title="Batch Rules & Instructions"
          sub="A disciplined, safe and respectful environment helps every player improve. Please read our guidelines."
          center
        />
        <div className="rules__grid">
          {RULES.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 80}>
              <article className="card rules__card">
                <header className="rules__card-head">
                  <span className="rules__icon">
                    <Icon name={group.icon} />
                  </span>
                  <h3>{group.title}</h3>
                </header>
                <ul className="rules__list">
                  {group.rules.map((rule) => (
                    <li key={rule}>
                      <Icon name="Check" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
