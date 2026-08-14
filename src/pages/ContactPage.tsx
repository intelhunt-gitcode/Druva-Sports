import { Seo } from '@/lib/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { ContactForm } from '@/components/sections/ContactForm'
import { LocationsMap } from '@/components/sections/LocationsMap'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { breadcrumbSchema, organizationSchema } from '@/lib/schema'

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact & Book a Free Consultation | Druva Badminton Academy"
        description="Book a free badminton trial at Druva Badminton Academy, Hyderabad. Call, WhatsApp or fill the enquiry form for kids, adult, personal coaching or fitness training."
        path="/contact"
        schema={[organizationSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])]}
      />
      <PageHero
        eyebrow="Contact"
        title="Ready to Start Your Badminton Journey?"
        intro="Tell us about the player and your preferred location — we'll help you pick a batch and arrange a free trial."
        crumbs={[{ name: 'Contact' }]}
      />
      <ContactForm />
      <section className="section section--alt">
        <div className="container">
          <SectionHeading eyebrow="Find Us" title="Our Locations" sub="Tap a map to open directions in Google Maps." center />
          <LocationsMap />
        </div>
      </section>
    </>
  )
}
