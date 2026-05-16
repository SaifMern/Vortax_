import { Sparkles } from 'lucide-react'
import SEO from '../components/SEO'
import ServiceCard from '../components/ServiceCard'
import SectionHeading from '../components/SectionHeading'
import ContactSection from '../components/ContactSection'
import CTA from '../components/CTA'
import { capabilities, coreServices, seoPages } from '../data/siteData'

const Services = () => (
  <>
    <SEO {...seoPages.services} />

    <section className="relative overflow-hidden bg-brand-dark pt-32 text-white sm:pt-40">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#171f2d] to-brand-orange/80" />
      <div className="absolute inset-0 opacity-20 bg-hero-grid bg-[length:48px_48px]" />
      <div className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="container-custom relative pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fadeUp inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[.18em] text-brand-orange backdrop-blur">
            <Sparkles size={16} /> Services
          </div>

          <h1 className="mt-6 max-w-4xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
 Our Services
</h1>

          <p
            className="mx-auto mt-5 max-w-3xl animate-fadeUp text-base leading-8 text-slate-200 sm:text-lg"
            style={{ animationDelay: '0.24s' }}
          >
            VortaxStudio provides end-to-end services for web, mobile, custom software, QA, DevOps, cybersecurity, business apps, automation, e-commerce, support and digital marketing.
          </p>
        </div>
      </div>
    </section>

    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          eyebrow="What We Do"
          title="Services designed for production delivery"
          text="Choose a single service or combine multiple capabilities into one complete digital delivery plan."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              featured={index === 0 || index === 8}
              animationDelay={`${0.05 * index}s`}
            />
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Capabilities"
          title="Business-focused technology capabilities"
          text="We support business teams with practical systems, automation, dashboards, integrations and support workflows."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="rounded-[1.5rem] bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-card"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand-orange">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-extrabold text-brand-dark">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>

    <CTA />
    <ContactSection />
  </>
)

export default Services