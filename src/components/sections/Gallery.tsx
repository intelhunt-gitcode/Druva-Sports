import { useMemo, useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { IMAGES } from '@/data/images'

const CATEGORIES = ['All', 'Academy', 'Training', 'Kids', 'Coaching', 'Players', 'Shuttle Park'] as const

export function Gallery() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>('All')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const items = useMemo(
    () => (filter === 'All' ? IMAGES.gallery : IMAGES.gallery.filter((g) => g.category === filter)),
    [filter],
  )

  const close = useCallback(() => setLightbox(null), [])
  const step = useCallback(
    (dir: number) => setLightbox((cur) => (cur === null ? cur : (cur + dir + items.length) % items.length)),
    [items.length],
  )

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, close, step])

  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <SectionHeading
          eyebrow="Gallery"
          title="Life at Druva"
          sub="Training, coaching and match play across our locations."
          center
        />

        <div className="gallery__filters" role="tablist" aria-label="Filter gallery">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={filter === cat}
              className={`gallery__chip ${filter === cat ? 'is-active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery__masonry">
          {items.map((img, i) => (
            <Reveal key={img.src} delay={(i % 6) * 50} className="gallery__item">
              <button type="button" className="gallery__thumb" onClick={() => setLightbox(i)} aria-label={`View image: ${img.alt}`}>
                <img src={img.src} alt={img.alt} loading="lazy" />
                <span className="gallery__cat">{img.category}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={close}>
          <button className="lightbox__close" aria-label="Close" onClick={close}>
            <X aria-hidden="true" />
          </button>
          <button className="lightbox__nav lightbox__nav--prev" aria-label="Previous" onClick={(e) => { e.stopPropagation(); step(-1) }}>
            <ChevronLeft aria-hidden="true" />
          </button>
          <figure className="lightbox__fig" onClick={(e) => e.stopPropagation()}>
            <img src={items[lightbox].src} alt={items[lightbox].alt} />
            <figcaption>{items[lightbox].alt}</figcaption>
          </figure>
          <button className="lightbox__nav lightbox__nav--next" aria-label="Next" onClick={(e) => { e.stopPropagation(); step(1) }}>
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  )
}
