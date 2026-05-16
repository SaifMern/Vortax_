import { ArrowRight, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company } from '../data/siteData'

const CTA = () => (
  <section className="bg-white py-8">
    <div className="container-custom">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-brand-dark p-6 text-white shadow-card sm:p-8 lg:p-10">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="min-w-0">
            <h3 className="max-w-3xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              Ready to build a professional digital product?
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Share your idea, website, app, business workflow, or automation need. We will help you plan and build it professionally.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link to="/contact" className="btn-primary w-fit bg-brand-orange px-5 py-2.5">
              Email Us <Mail size={17} />
            </Link>
            <a
              href={`tel:${company.phone}`}
              className="inline-flex w-fit items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-brand-dark"
            >
              Call Now <Phone size={17} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default CTA
