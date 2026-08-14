import { Seo } from '@/lib/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Gallery } from '@/components/sections/Gallery'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { breadcrumbSchema } from '@/lib/schema'

export function GalleryPage() {
  return (
    <>
      <Seo
        title="Gallery | Druva Badminton Academy, Hyderabad"
        description="See training, coaching and match play at Druva Badminton Academy across our Madhura Nagar and Shuttle Park (Jubilee Hills) locations in Hyderabad."
        path="/gallery"
        schema={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Gallery', path: '/gallery' }])]}
      />
      <PageHero
        eyebrow="Gallery"
        title="Life at Druva"
        intro="Training, coaching and match play across our locations. Real academy photographs will be featured here."
        crumbs={[{ name: 'Gallery' }]}
      />
      <Gallery />
      <FinalCTA />
    </>
  )
}
