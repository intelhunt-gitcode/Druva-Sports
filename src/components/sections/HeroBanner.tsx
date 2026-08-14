import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { IMAGES } from '@/data/images'

const AUTOPLAY_MS = 6000

/**
 * Rotating hero carousel for the /index1 preview page. Each slide is a
 * fully-designed promotional banner (logo, copy, CTA already baked in by
 * the academy's design team) — the carousel just presents them full-bleed,
 * it doesn't overlay any of its own text on top.
 */
export function HeroBanner() {
  const slides = IMAGES.heroBanners
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback((i: number) => setIndex((i + slides.length) % slides.length), [slides.length])
  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % slides.length), AUTOPLAY_MS)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [paused, slides.length])

  return (
    <section
      className="hero-banner"
      aria-label="Druva Sports & Entertainment highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero-banner__track">
        {slides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Druva Sports & Entertainment promotional banner ${i + 1}`}
            className={`hero-banner__slide ${i === index ? 'is-active' : ''}`}
            fetchPriority={i === 0 ? 'high' : 'low'}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>

      <button type="button" className="hero-banner__nav hero-banner__nav--prev" aria-label="Previous slide" onClick={prev}>
        <ChevronLeft aria-hidden="true" />
      </button>
      <button type="button" className="hero-banner__nav hero-banner__nav--next" aria-label="Next slide" onClick={next}>
        <ChevronRight aria-hidden="true" />
      </button>

      <div className="hero-banner__dots" role="tablist" aria-label="Choose slide">
        {slides.map((src, i) => (
          <button
            key={src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show slide ${i + 1}`}
            className={`hero-banner__dot ${i === index ? 'is-active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      <a href="#about" className="hero-banner__scroll" aria-label="Scroll to content">
        <span />
      </a>
    </section>
  )
}
