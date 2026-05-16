import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { company, coreServices, navItems } from '../data/siteData'

const footerNavItems = navItems.some((item) => item.path === '/contact')
  ? navItems
  : [...navItems, { label: 'Contact', path: '/contact' }]

const Footer = () => (
  <footer className="bg-brand-deeper text-white">
    <div className="container-custom section-padding">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_.8fr_.8fr_1fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="flex h-16 w-20 items-center justify-center rounded-2xl bg-white/95 p-2">
              <img src="/images/logo.png" alt="VortaxStudio" className="h-14 w-auto object-contain" />
            </span>
            <span>
              <span className="block text-2xl font-black">
                Vortax<span className="text-brand-orange">Studio</span>
              </span>
              <span className="block text-xs uppercase tracking-[.28em] text-slate-400">
                {company.tagline}
              </span>
            </span>
          </Link>

          <p className="mt-6 max-w-sm text-sm leading-8 text-slate-400">
            A production-focused software company delivering web development, app development, custom software, business applications, QA, DevOps, cybersecurity, e-commerce, automation, and digital marketing.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[.2em] text-slate-300">
            Company
          </h3>
          <div className="grid gap-3">
            {footerNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm text-slate-400 transition hover:text-brand-orange"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[.2em] text-slate-300">
            Services
          </h3>
          <div className="grid gap-3">
            {coreServices.slice(0, 6).map((item) => (
              <Link
                key={item.title}
                to="/services"
                className="text-sm text-slate-400 transition hover:text-brand-orange"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[.2em] text-slate-300">
            Contact
          </h3>
          <div className="grid gap-4 text-sm text-slate-400">
            <a href={`tel:${company.phone}`} className="flex items-center gap-3 transition hover:text-brand-orange">
              <Phone size={18} /> {company.phoneDisplay}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-3 transition hover:text-brand-orange">
              <Mail size={18} /> {company.email}
            </a>
            <span className="flex items-center gap-3">
              <MapPin size={18} /> {company.location}
            </span>
          </div>

          <Link
            to="/contact"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white bg-white px-5 py-2.5 text-sm font-semibold text-brand-dark transition hover:-translate-y-1 hover:text-brand-orange"
          >
            Start Your Project <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} VortaxStudio. All rights reserved.</p>
        <p>Built for scalable digital products.</p>
      </div>
    </div>
  </footer>
)

export default Footer