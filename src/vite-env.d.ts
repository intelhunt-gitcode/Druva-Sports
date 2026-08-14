/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HASH_ROUTER?: string
  readonly VITE_SITE_URL?: string
  readonly VITE_LEAD_API_URL?: string
  readonly VITE_GA4_ID?: string
  readonly VITE_GTM_ID?: string
  readonly VITE_META_PIXEL_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
