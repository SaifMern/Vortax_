import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Mail, Menu, Phone, X } from 'lucide-react'
import { company, navItems } from '../data/siteData'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const menuItems = useMemo(() => {
    const hasContact = navItems?.some((item) => item.path === '/contact')
    return hasContact ? navItems : [...navItems, { label: 'Contact', path: '/contact' }]
  }, [])

  useEffect(() => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ease-out ${
        scrolled
          ? 'border-b border-slate-200/70 bg-white/90 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl'
          : 'border-b border-transparent bg-white/75 backdrop-blur-md'
      }`}
    >
      <div
        className={`overflow-hidden border-b border-white/10 bg-brand-dark text-white transition-all duration-500 ease-out ${
          scrolled ? 'h-9 lg:h-0 lg:opacity-0' : 'h-9 lg:h-10 opacity-100'
        }`}
      >
        <div className="container-custom flex h-full items-center justify-between gap-2 text-[10px] font-medium sm:text-xs">
          <span className="hidden truncate text-slate-200 lg:block">
            {company.tagline}
          </span>

          <div className="flex w-full min-w-0 items-center justify-between gap-2 lg:w-auto lg:justify-end lg:gap-5">
            <a
              className="flex shrink-0 items-center gap-1.5 transition duration-300 hover:text-brand-orange"
              href={`tel:${company.phone}`}
            >
              <Phone size={13} className="shrink-0" />
              <span className="whitespace-nowrap">{company.phoneDisplay || company.phone}</span>
            </a>

            <a
              className="flex min-w-0 items-center gap-1.5 transition duration-300 hover:text-brand-orange"
              href={`mailto:${company.email}`}
            >
              <Mail size={13} className="shrink-0" />
              <span className="min-w-0 truncate whitespace-nowrap">{company.email}</span>
            </a>
          </div>
        </div>
      </div>

      <nav
        className={`container-custom flex items-center justify-between transition-all duration-500 ease-out ${
          scrolled ? 'h-16' : 'h-20'
        }`}
      >
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-3"
          aria-label="VortaxStudio home"
        >
          <span
            className={`flex shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-soft ${
              scrolled ? 'h-12 w-14' : 'h-14 w-16'
            }`}
          >
            <img
              src="/images/logo.png"
              alt="VortaxStudio Logo"
              className={`w-auto object-contain transition-all duration-500 ease-out ${
                scrolled ? 'h-10' : 'h-12'
              }`}
            />
          </span>

          <span className="leading-none">
            <span
              className={`block whitespace-nowrap font-black tracking-tight text-brand-dark transition-all duration-500 ease-out ${
                scrolled ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'
              }`}
            >
              Vortax<span className="text-brand-orange">Studio</span>
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group relative py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:text-brand-orange ${
                  isActive ? 'text-brand-orange' : 'text-slate-700'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-brand-orange transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/contact"
            className={`btn-primary w-fit transition-all duration-500 ease-out ${
              scrolled ? 'py-2.5' : 'py-2.5'
            }`}
          >
            Get Consultation
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-dark shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-orange hover:text-brand-orange hover:shadow-soft lg:hidden"
          aria-label="Open menu"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <div
        className={`fixed inset-0 top-[100px] z-40 bg-brand-dark/40 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpen(false)}
      >
        <div
          className={`absolute right-4 top-4 w-[calc(100%-2rem)] max-w-sm rounded-[2rem] bg-white p-5 shadow-card transition-all duration-500 ease-out ${
            open ? 'translate-y-0 scale-100 opacity-100' : '-translate-y-5 scale-95 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid gap-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-brand-soft text-brand-orange'
                      : 'text-slate-700 hover:translate-x-1 hover:bg-slate-50 hover:text-brand-orange'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="mt-5 grid gap-3 rounded-2xl bg-slate-50 p-4 text-sm">
            <a className="font-medium text-brand-dark transition hover:text-brand-orange" href={`tel:${company.phone}`}>
              {company.phoneDisplay || company.phone}
            </a>
            <a className="break-all font-medium text-brand-orange transition hover:text-brand-dark" href={`mailto:${company.email}`}>
              {company.email}
            </a>
            <Link to="/contact" className="btn-primary mt-2 w-fit justify-center py-2.5">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
