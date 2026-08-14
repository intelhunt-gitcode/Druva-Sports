import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FAQ as FAQ_DATA } from '@/data/academy'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section faq" id="faq">
      <div className="container faq__container">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" sub={FAQ_DATA.subheading} center />
        <div className="faq__list">
          {FAQ_DATA.items.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={(i % 5) * 50}>
                <div className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="faq__q"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <ChevronDown aria-hidden="true" className="faq__chevron" />
                  </button>
                  <div className="faq__a" hidden={!isOpen}>
                    <p>{item.a}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
