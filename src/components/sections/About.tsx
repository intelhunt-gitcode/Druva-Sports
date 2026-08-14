import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { ABOUT } from '@/data/academy'
import { IMAGES } from '@/data/images'

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <Reveal className="about__media">
          <img src={IMAGES.about} alt="Players training at Druva Badminton Academy" loading="lazy" />
          <div className="about__media-badge">
            <strong>Druva</strong>
            <span>Badminton Academy</span>
          </div>
        </Reveal>

        <div className="about__body">
          <Reveal>
            <span className="eyebrow">More Than Just Badminton</span>
            <h2 className="section-title">
              Discipline, fitness &amp; focus — <span className="text-gradient">on and off the court</span>
            </h2>
          </Reveal>
          {ABOUT.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <p className="about__text">{p}</p>
            </Reveal>
          ))}

          <div className="about__pillars">
            {ABOUT.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 90} className="about__pillar">
                <div className="about__pillar-icon">
                  <Icon name={pillar.icon} />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
