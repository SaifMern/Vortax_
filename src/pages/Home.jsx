import { ArrowRight, Code2, Globe2, ShieldCheck, Sparkles } from 'lucide-react'
import SEO from '../components/SEO'
import ServiceCard from '../components/ServiceCard'
import SectionHeading from '../components/SectionHeading'
import CTA from '../components/CTA'
import ContactSection from '../components/ContactSection'
import {
  capabilities,
  company,
  coreServices,
  industries,
  processSteps,
  seoPages,
  stats,
  whyChoose,
} from '../data/siteData'

const Home = () => (
  <>
    <SEO {...seoPages.home} />

    <section className="relative overflow-hidden bg-brand-dark pt-28 sm:pt-32 lg:pt-36">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-[#192332] to-brand-orange/80" />
      <div className="absolute inset-0 opacity-20 bg-hero-grid bg-[length:48px_48px]" />
      <div className="absolute -left-28 top-10 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl" />
      <div className="absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="container-custom relative grid min-h-[720px] gap-12 pb-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div className="animate-fadeUp">
          

          <h1 className="mt-6 max-w-4xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
  We Create Digital
Experiences
</h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            VortaxStudio builds scalable websites, apps, SaaS platforms,
            e-commerce systems, business applications, automation workflows,
            QA processes, DevOps pipelines, cybersecurity and digital growth
            solutions.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="btn-primary">
              Start Your Project <ArrowRight size={18} />
            </a>

            <a
              href="/services"
              className="inline-flex w-fit items-center justify-center rounded-full border border-white/30 bg-white px-5 py-2.5 text-sm font-semibold text-brand-dark shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-slate-100"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/10 p-5 text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                <div className="text-3xl font-black text-brand-orange">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-semibold text-slate-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fadeUp lg:h-[640px]">
          <div className="absolute -right-10 top-10 hidden h-[520px] w-[520px] rounded-full bg-brand-orange/20 blur-3xl lg:block" />

          <div className="relative mx-auto flex h-full max-w-[620px] items-center justify-center">
            <div className="absolute inset-y-8 right-0 w-[85%] rounded-[3rem] bg-gradient-to-br from-white/10 to-brand-orange/20 backdrop-blur" />

            <img
              src="/images/hero.png"
              alt="VortaxStudio software development services"
              className="relative z-10 max-h-[520px] w-full object-contain drop-shadow-2xl"
            />
<div className="absolute bottom-8 left-0 z-20 w-[420px] max-w-[92vw] rounded-3xl border border-white/10 bg-white/95 p-5 shadow-card backdrop-blur">
  <p className="text-sm font-black text-brand-dark">
    Full-cycle digital delivery
  </p>
  <p className="mt-1 whitespace-nowrap text-xs font-medium text-slate-500">
    Strategy → Design → Development → QA → Launch → Support
  </p>
</div>

            <div className="absolute right-0 top-16 z-20 hidden rounded-2xl border border-white/10 bg-white/10 p-4 text-white backdrop-blur sm:block">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-brand-orange" size={24} />
                <span className="text-sm font-bold">Secure & Scalable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Core Services"
          title="Technology services built for scale"
          text="Everything your business needs to plan, design, develop, test, launch, maintain, and grow professional digital products."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreServices.slice(0, 6).map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-slate-50">
      <div className="container-custom grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Capabilities"
            title="From strategy to launch, one studio handles the complete workflow"
            text="We combine engineering, design, business automation, quality assurance, cloud delivery, cybersecurity, maintenance, and digital growth services."
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <Icon size={20} className="mt-1 text-brand-orange" />
                  <div>
                    <h3 className="text-sm font-bold text-brand-dark">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-6 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="rounded-[2rem] bg-brand-dark p-6 text-white shadow-card sm:p-8">
          <h3 className="mb-6 text-2xl font-black">Our delivery process</h3>

          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl bg-white/10 p-5 transition hover:-translate-y-1 hover:bg-white/15"
              >
                <div className="mb-2 text-sm font-black text-brand-orange">
                  0{index + 1}
                </div>
                <h4 className="text-lg font-bold">{step.title}</h4>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Professional, smooth, responsive and scalable"
          text="Built with clean components, polished UI, reusable layouts, strong page structure, smooth transitions, and deployment-ready standards."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {whyChoose.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="card-hover rounded-[1.5rem] bg-slate-50 p-6"
              >
                <Icon className="mb-5 text-brand-orange" size={32} />
                <h3 className="mb-2 font-extrabold text-brand-dark">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>

    <section className="section-padding bg-brand-dark text-white">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Industries"
          title="Flexible solutions for multiple business types"
          text="We create systems for startups, teams, brands, agencies, service providers, and growing businesses."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {industries.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-bold text-slate-200 transition hover:-translate-y-1 hover:border-brand-orange hover:text-brand-orange"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>

    <CTA />
    <ContactSection />
  </>
)

export default Home