import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const NotFound = () => (
  <>
    <SEO title="Page Not Found | VortaxStudio" description="The page you are looking for does not exist." />
    <section className="flex min-h-[70vh] items-center bg-slate-50 pt-32">
      <div className="container-custom text-center">
        <p className="text-8xl font-black text-brand-orange">404</p>
        <h1 className="mt-5 text-4xl font-black text-brand-dark">Page not found</h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-600">The page you are trying to open is not available.</p>
        <Link to="/" className="btn-primary mt-8">Back to Home</Link>
      </div>
    </section>
  </>
)
export default NotFound
