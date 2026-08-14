import { Seo } from '@/lib/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Locations } from '@/components/sections/Locations'
import { ShuttleParkFeature } from '@/components/sections/ShuttleParkFeature'
import { LocationsMap } from '@/components/sections/LocationsMap'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { breadcrumbSchema, sportsActivityLocationSchema } from '@/lib/schema'

export function LocationsPage() {
  return (
    <>
      <Seo
        title="Locations — Madhura Nagar & Shuttle Park, Jubilee Hills | Druva"
        description="Druva Badminton Academy trains at two Hyderabad locations: Madhura Nagar (Sri Krishna Devaraya Colony) and Shuttle Park, Jubilee Hills. Get directions and enquire."
        path="/locations"
        schema={[...sportsActivityLocationSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }])]}
      />
      <PageHero
        eyebrow="Locations"
        title="Train at a Location Near You"
        intro="Two convenient venues across Hyderabad — Madhura Nagar and Shuttle Park in Jubilee Hills."
        crumbs={[{ name: 'Locations' }]}
      />
      <Locations />
      <ShuttleParkFeature />
      <section className="section section--alt">
        <div className="container">
          <SectionHeading eyebrow="Find Us" title="Get Directions" sub="Tap a map to open directions in Google Maps." center />
          <LocationsMap />
        </div>
      </section>
      <FinalCTA />
    </>
  )
}
