import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import SEO from '../components/SEO'
import CTA from '../components/CTA'
import { company, coreServices } from '../data/siteData'

const ServiceVisual = ({ service }) => {
  const Icon = service.icon

  return (
    <div className="relative animate-fadeScale overflow-hidden rounded-[2rem] border border-white/70 bg-white p-5 shadow-card">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-brand-dark/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-brand-dark via-[#182333] to-brand-orange p-8 text-white sm:p-10">
        <div className="absolute inset-0 bg-hero-grid bg-[length:46px_46px] opacity-15" />

        <div className="relative flex min-h-[380px] flex-col justify-between">
          <div>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-brand-orange backdrop-blur">
              <Icon size={34} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[.24em] text-brand-orange">
              VortaxStudio Service
            </p>
            <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight sm:text-4xl">
              {service.title}
            </h2>
          </div>

          <div className="mt-10 grid gap-3">
            {service.outcomes.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <CheckCircle2 size={18} className="shrink-0 text-brand-orange" />
                <span className="text-sm font-medium text-slate-100">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const ServiceDetail = () => {
  const { slug } = useParams()
  const service = coreServices.find((item) => item.slug === slug)

  if (!service) {
    return (
      <>
        <SEO title="Service Not Found | VortaxStudio" description="The requested VortaxStudio service page was not found." />
        <section className="flex min-h-[70vh] items-center bg-slate-50 pt-36">
          <div className="container-custom text-center">
            <p className="text-sm font-semibold uppercase tracking-[.24em] text-brand-orange">Service Not Found</p>
            <h1 className="mt-4 text-3xl font-semibold text-brand-dark sm:text-4xl">This service page is not available.</h1>
            <Link to="/services" className="btn-primary mt-8 w-fit">
              Back to Services
            </Link>
          </div>
        </section>
      </>
    )
  }

  const Icon = service.icon

  return (
    <>
      <SEO
        title={service.seoTitle}
        description={service.seoDescription}
        keywords={`${service.title}, ${service.deliverables.join(', ')}, VortaxStudio`}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.seoDescription,
          provider: {
            '@type': 'Organization',
            name: company.name,
            email: company.email,
            telephone: company.phone,
          },
          areaServed: 'Worldwide',
        }}
      />

      <section className="relative overflow-hidden bg-brand-dark pt-36 text-white sm:pt-40">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#171f2d] to-brand-orange/80" />
        <div className="absolute inset-0 bg-hero-grid bg-[length:48px_48px] opacity-20" />
        <div className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <div className="container-custom relative pb-20">
          <div className="max-w-4xl">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition hover:text-brand-orange">
              <ArrowLeft size={17} /> Back to Services
            </Link>

            <div className="mt-8 animate-fadeUp inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-brand-orange backdrop-blur">
              <Sparkles size={16} /> Service Detail
            </div>

            <h1 className="mt-6 max-w-4xl animate-fadeUp text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl" style={{ animationDelay: '0.12s' }}>
              {service.title}
            </h1>

            <p className="mt-5 max-w-3xl animate-fadeUp text-base leading-8 text-slate-200 sm:text-lg" style={{ animationDelay: '0.24s' }}>
              {service.overview}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <ServiceVisual service={service} />

          <div className="animate-fadeScale rounded-[2rem] bg-white p-6 shadow-card sm:p-8" style={{ animationDelay: '0.12s' }}>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand-orange">
              <Icon size={28} />
            </div>
            <h2 className="text-2xl font-semibold leading-tight text-brand-dark sm:text-3xl">
              Professional {service.title.toLowerCase()} for scalable delivery
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              {service.text}
            </p>

            <div className="mt-7 grid gap-4">
              {service.details.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-brand-orange" />
                  <p className="text-sm leading-7 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid gap-8 lg:grid-cols-3">
          <div className="animate-fadeScale rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-brand-dark">What you get</h3>
            <div className="mt-5 grid gap-3">
              {service.deliverables.map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <CheckCircle2 size={16} className="shrink-0 text-brand-orange" /> {item}
                </span>
              ))}
            </div>
          </div>

          <div className="animate-fadeScale rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm" style={{ animationDelay: '0.08s' }}>
            <h3 className="text-xl font-semibold text-brand-dark">Technology focus</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {service.technologies.map((item) => (
                <span key={item} className="rounded-full border border-brand-orange/20 bg-brand-soft px-4 py-2 text-xs font-medium text-brand-dark">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="animate-fadeScale rounded-[2rem] border border-slate-100 bg-brand-dark p-6 text-white shadow-card" style={{ animationDelay: '0.16s' }}>
            <h3 className="text-xl font-semibold">Ready to discuss?</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Tell us about your project and we will guide you with the right plan, structure, timeline, and delivery approach.
            </p>
            <Link to="/contact" className="btn-primary mt-6 w-fit px-5 py-2.5">
              Start Project <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}

export default ServiceDetail
