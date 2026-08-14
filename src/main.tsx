import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App'
import { initAnalytics } from '@/lib/analytics'
import './index.css'
import './styles/sections.css'

initAnalytics()

// Use hash-based routing for the single-file preview build (works inside a
// sandboxed iframe with no server); path-based BrowserRouter for real hosting.
const useHash = Boolean(import.meta.env.VITE_HASH_ROUTER)
const Router = useHash ? HashRouter : BrowserRouter

// When served under a sub-path (e.g. /druva-sports/), the router needs the
// matching basename. Vite injects BASE_URL from the build `base` option.
const basename = useHash ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router basename={basename}>
      <App />
    </Router>
  </StrictMode>,
)
