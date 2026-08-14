import { useEffect } from 'react'
import { SITE } from '@/config/site'

interface SeoProps {
  title: string
  description: string
  /** Path only, e.g. "/programs" — canonical is built from SITE.url. */
  path: string
  image?: string
  /** JSON-LD objects to inject for this page. */
  schema?: object[]
  noindex?: boolean
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

const SCHEMA_ID = 'druva-jsonld'

/**
 * Client-side head manager for this SPA. Sets title, meta description, canonical,
 * Open Graph / Twitter tags and injects page-specific JSON-LD. The homepage's
 * core tags are also present statically in index.html for first-paint crawlers.
 */
export function Seo({ title, description, path, image, schema, noindex }: SeoProps) {
  const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`
  const canonical = `${SITE.url}${path === '/' ? '' : path}`
  const ogImage = `${SITE.url}${image ?? '/og-image.jpg'}`

  useEffect(() => {
    document.title = fullTitle
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', noindex ? 'noindex,nofollow' : 'index,follow')
    upsertLink('canonical', canonical)

    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', SITE.name)
    upsertMeta('property', 'og:image', ogImage)
    upsertMeta('property', 'og:locale', 'en_IN')

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', ogImage)

    // Inject / replace JSON-LD
    const existing = document.getElementById(SCHEMA_ID)
    if (existing) existing.remove()
    if (schema && schema.length) {
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      s.id = SCHEMA_ID
      s.textContent = JSON.stringify(schema.length === 1 ? schema[0] : schema)
      document.head.appendChild(s)
    }

    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [fullTitle, description, canonical, ogImage, noindex, schema])

  return null
}
