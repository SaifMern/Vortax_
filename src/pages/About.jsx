import { CheckCircle2, Sparkles } from 'lucide-react'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import CTA from '../components/CTA'
import { company, processSteps, seoPages, whyChoose } from '../data/siteData'

const About = () => (
  <>
    <SEO {...seoPages.about} />

    <section className="relative overflow-hidden bg-brand-dark pt-32 text-white sm:pt-40">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#171f2d] to-brand-orange/80" />
      <div className="absolute inset-0 opacity-20 bg-hero-grid bg-[length:48px_48px]" />
      <div className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="container-custom relative pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fadeUp inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[.18em] text-brand-orange backdrop-blur">
            <Sparkles size={16} /> About VortaxStudio
          </div>

            <h1 className="mt-6 max-w-4xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
 About Us
</h1>

          <p
            className="mx-auto mt-5 max-w-3xl animate-fadeUp text-base leading-8 text-slate-200 sm:text-lg"
            style={{ animationDelay: '0.24s' }}
          >
            VortaxStudio helps businesses transform ideas into clean, reliable and production-ready digital products.
          </p>
        </div>
      </div>
    </section>

    <section className="section-padding bg-white">
      <div className="container-custom grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="rounded-[2rem] bg-slate-50 p-6 shadow-soft sm:p-8">
          <img src="/images/logo.png" alt="VortaxStudio" className="mx-auto h-40 w-auto object-contain" />
          <div className="mt-8 grid gap-4">
            {['Software Development', 'Digital Transformation', 'Business Applications', 'Quality Assurance', 'DevOps & Support'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
                <CheckCircle2 className="text-brand-orange" size={20} />
                <span className="font-bold text-brand-dark">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Who We Are"
            title="We turn your vision into practical digital systems"
            text="Our goal is to build software that looks professional, performs smoothly, scales with your business, and remains easy to maintain. We work across websites, mobile apps, SaaS platforms, e-commerce stores, enterprise workflows, QA, DevOps, cybersecurity, automation, and digital marketing."
          />
          <p className="mt-6 leading-8 text-slate-600">
            We focus on clear communication, reusable architecture, responsive UI, secure implementation, and complete delivery from planning to maintenance. Whether you need a public website, internal dashboard, CRM workflow, ERP support, automation app, or a complete software platform, VortaxStudio can support your complete digital journey.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="/contact" className="btn-primary">Work With Us</a>
            <a href="/services" className="btn-secondary">View Services</a>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Our Values"
          title="How we deliver professional software"
          text="Every project follows a simple standard: clean design, reliable code, smooth experience, strong testing and long-term support."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {whyChoose.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="rounded-[1.5rem] bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-card">
                <Icon className="mb-5 text-brand-orange" size={30} />
                <h3 className="font-extrabold text-brand-dark">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>

    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Workflow"
          title="A clear process from idea to launch"
          text="Our development process keeps every project organized, transparent and ready for deployment."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <div key={step.title} className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-card">
              <div className="mb-4 text-sm font-black text-brand-orange">STEP 0{index + 1}</div>
              <h3 className="text-xl font-extrabold text-brand-dark">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTA />
  </>
)

export default About