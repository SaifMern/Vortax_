import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { company } from '../data/siteData'

const ContactSection = () => (
  <section className="section-padding bg-slate-50">
    <div className="container-custom grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
      <div>
        <div className="max-w-2xl">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 text-[2rem] font-bold leading-tight tracking-tight text-brand-dark">
            Let’s talk about your project
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Contact us for websites, apps, custom software, business applications, QA, DevOps, automation, support, and digital marketing.
          </p>
        </div>

        <div className="mt-8 grid gap-4">
          <a
            href={`tel:${company.phone}`}
            className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand-orange">
              <Phone />
            </span>
            <span>
              <span className="block text-sm text-slate-500">Phone</span>
              <span className="font-bold text-brand-dark group-hover:text-brand-orange">
                {company.phoneDisplay}
              </span>
            </span>
          </a>

          <a
            href={`mailto:${company.email}`}
            className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand-orange">
              <Mail />
            </span>
            <span>
              <span className="block text-sm text-slate-500">Email</span>
              <span className="font-bold text-brand-dark group-hover:text-brand-orange">
                {company.email}
              </span>
            </span>
          </a>

          <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand-orange">
              <MapPin />
            </span>
            <span>
              <span className="block text-sm text-slate-500">Location</span>
              <span className="font-bold text-brand-dark">{company.location}</span>
            </span>
          </div>
        </div>
      </div>

      <form
        className="rounded-[2rem] bg-white p-6 shadow-card sm:p-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold text-brand-dark">
            Name
            <input
              className="rounded-2xl border border-slate-200 px-4 py-3 font-medium outline-none transition focus:border-brand-orange focus:ring-4 focus:ring-orange-100"
              placeholder="Your name"
            />
          </label>

          <label className="grid gap-2 text-sm font-bold text-brand-dark">
            Email
            <input
              className="rounded-2xl border border-slate-200 px-4 py-3 font-medium outline-none transition focus:border-brand-orange focus:ring-4 focus:ring-orange-100"
              placeholder="your@email.com"
              type="email"
            />
          </label>

          <label className="grid gap-2 text-sm font-bold text-brand-dark sm:col-span-2">
            Service Needed
            <input
              className="rounded-2xl border border-slate-200 px-4 py-3 font-medium outline-none transition focus:border-brand-orange focus:ring-4 focus:ring-orange-100"
              placeholder="Web development, app, custom software, QA..."
            />
          </label>

          <label className="grid gap-2 text-sm font-bold text-brand-dark sm:col-span-2">
            Message
            <textarea
              rows="5"
              className="resize-none rounded-2xl border border-slate-200 px-4 py-3 font-medium outline-none transition focus:border-brand-orange focus:ring-4 focus:ring-orange-100"
              placeholder="Tell us about your project"
            />
          </label>
        </div>

        <a
          href={`mailto:${company.email}?subject=Project Inquiry from VortaxStudio Website`}
          className="btn-primary mt-6 w-fit"
        >
          Send Inquiry <Send size={18} />
        </a>

        <p className="mt-4 text-xs leading-6 text-slate-500">
          Note: This demo form is frontend-ready. Connect it with your backend/API when you deploy.
        </p>
      </form>
    </div>
  </section>
)

export default ContactSection