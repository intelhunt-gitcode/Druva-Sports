import { Routes, Route } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileStickyBar } from '@/components/layout/MobileStickyBar'
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ProgramsPage } from '@/pages/ProgramsPage'
import { LocationsPage } from '@/pages/LocationsPage'
import { BatchesFeesPage } from '@/pages/BatchesFeesPage'
import { CoachesPage } from '@/pages/CoachesPage'
import { GalleryPage } from '@/pages/GalleryPage'
import { RulesPage } from '@/pages/RulesPage'
import { ContactPage } from '@/pages/ContactPage'
import { LandingPage } from '@/pages/LandingPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { LANDING_SLUGS } from '@/data/landingPages'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/batches-and-fees" element={<BatchesFeesPage />} />
          <Route path="/coaches" element={<CoachesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* SEO landing pages share one component, driven by :slug */}
          {LANDING_SLUGS.map((slug) => (
            <Route key={slug} path={`/${slug}`} element={<LandingPage />} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <MobileStickyBar />
      <FloatingWhatsApp />
    </>
  )
}
