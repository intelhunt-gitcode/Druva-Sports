import { Link } from 'react-router-dom'
import { Seo } from '@/lib/Seo'

export function NotFoundPage() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you are looking for could not be found." path="/404" noindex />
      <section className="section notfound">
        <div className="container notfound__inner">
          <p className="notfound__code">404</p>
          <h1>Page not found</h1>
          <p>The page you're looking for doesn't exist or has moved.</p>
          <Link to="/" className="btn btn--primary">Back to Home</Link>
        </div>
      </section>
    </>
  )
}
