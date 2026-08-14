import { useState } from 'react'
import { IMAGES } from '@/data/images'
import './Logo.css'

interface LogoProps {
  /** 'dark' variant is used over dark backgrounds (uses white text fallback). */
  variant?: 'default' | 'light'
  className?: string
}

/**
 * Renders the OFFICIAL Druva logo image (public/logo.png). The artwork itself
 * is never redesigned or distorted. If the image file is not present yet, a
 * clean text wordmark in the brand colours is shown as a graceful fallback so
 * nothing looks broken — replace it by dropping the real logo at public/logo.png.
 */
export function Logo({ variant = 'default', className = '' }: LogoProps) {
  const [imgFailed, setImgFailed] = useState(false)
  const src = variant === 'light' ? IMAGES.logoLight : IMAGES.logo

  if (imgFailed) {
    return (
      <span className={`logo-text logo-text--${variant} ${className}`.trim()} aria-label="Druva Badminton Academy">
        <span className="logo-text__brand">DRUVA</span>
        <span className="logo-text__sub">Badminton Academy</span>
      </span>
    )
  }

  return (
    <img
      src={src}
      alt="Druva Badminton Academy"
      className={`logo-img ${className}`.trim()}
      width={200}
      height={60}
      decoding="async"
      onError={() => {
        // For the light variant, fall back to the default logo before text.
        if (variant === 'light' && src !== IMAGES.logo) {
          setImgFailed(false)
        }
        setImgFailed(true)
      }}
    />
  )
}
