import { useState } from 'react'
import { ArrowRight, Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react'
import SEO from '../components/SEO'
import { company } from '../data/siteData'

const CONTACT_API_URL = 'https://vortaxstudio.42web.io/aaa/sendmail.php'

const services = [
  'Web Development',
  'App Development',
  'Custom Software Development',
  'UI/UX Design',
  'E-commerce',
  'SaaS',
  'DevOps',
  'Quality Assurance',
  'Cybersecurity',
  'Digital Marketing',
  'Maintenance & Support',
  'Automation & Apps',
]

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [budget, setBudget] = useState('')
  const [message, setMessage] = useState('')

  const [status, setStatus] = useState({
    loading: false,
    message: '',
    type: '',
  })

  const resetFields = () => {
    setName('')
    setEmail('')
    setPhone('')
    setService('')
    setBudget('')
    setMessage('')
  }

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({
        loading: false,
        message: 'Name, email, and message are required.',
        type: 'error',
      })
      return
    }

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      service: service.trim(),
      budget: budget.trim(),
      message: message.trim(),
    }

    setStatus({
      loading: true,
      message: '',
      type: '',
    })

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        setStatus({
          loading: false,
          message: result.message || 'Something went wrong. Please try again.',
          type: 'error',
        })
        return
      }

      resetFields()

      setStatus({
        loading: false,
        message:
          'Your message has been sent successfully. Our team will contact you soon.',
        type: 'success',
      })
    } catch (error) {
      setStatus({
        loading: false,
        message:
          'Network error. Please check your API URL, CORS headers, or server connection.',
        type: 'error',
      })
    }
  }

  return (
    <>
      <SEO
        title="Contact VortaxStudio | Start Your Software Project"
        description="Contact VortaxStudio for web development, app development, custom software, SaaS, e-commerce, QA, DevOps, cybersecurity, automation and digital transformation services."
        keywords="VortaxStudio contact, software company, web development, app development, custom software, SaaS development"
      />

      <section className="relative overflow-hidden bg-brand-dark pt-32 text-white sm:pt-40">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#171f2d] to-brand-orange/80" />
        <div className="absolute inset-0 opacity-20 bg-hero-grid bg-[length:48px_48px]" />
        <div className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <div className="container-custom relative pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fadeUp inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-brand-orange backdrop-blur">
              <Sparkles size={16} /> Let’s Build Together
            </div>

            <h1 className="mt-6 max-w-4xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              Contact Us
            </h1>

            <p
              className="mx-auto mt-5 max-w-3xl animate-fadeUp text-base font-normal leading-8 text-slate-200 sm:text-lg"
              style={{ animationDelay: '0.24s' }}
            >
              Share your idea, requirements, timeline or business challenge. Our
              team will review it and contact you with the right solution.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] bg-white p-6 shadow-card sm:p-8">
              <h2 className="text-2xl font-semibold text-brand-dark">
                Contact details
              </h2>

              <p className="mt-3 text-sm font-normal leading-7 text-slate-600">
                Need a website, app, custom software, automation, SaaS platform or
                business system? Contact us and we will guide you professionally.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`tel:${company.phone}`}
                  className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition duration-300 hover:-translate-y-1 hover:border-brand-orange hover:bg-white hover:shadow-soft"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange">
                    <Phone size={22} />
                  </span>

                  <span>
                    <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">
                      Phone
                    </span>
                    <span className="block text-sm font-semibold text-brand-dark sm:text-base">
                      {company.phoneDisplay || company.phone}
                    </span>
                  </span>
                </a>

                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition duration-300 hover:-translate-y-1 hover:border-brand-orange hover:bg-white hover:shadow-soft"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange">
                    <Mail size={22} />
                  </span>

                  <span>
                    <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">
                      Email
                    </span>
                    <span className="block break-all text-sm font-semibold text-brand-dark sm:text-base">
                      {company.email}
                    </span>
                  </span>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange">
                    <MapPin size={22} />
                  </span>

                  <span>
                    <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">
                      Location
                    </span>
                    <span className="block text-sm font-semibold text-brand-dark sm:text-base">
                      Pakistan, serving clients worldwide
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-brand-dark p-6 text-white shadow-card sm:p-8">
              <h3 className="text-xl font-semibold">What we can help with</h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {services.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-5 shadow-card sm:p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-brand-dark sm:text-3xl">
                Tell us about your project
              </h2>
              <p className="mt-3 text-sm font-normal leading-7 text-slate-600">
                Fill out the fields below and we will get back to you as soon as
                possible.
              </p>
            </div>

            <div className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-brand-dark">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-normal text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-brand-orange/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-brand-dark">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-normal text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-brand-orange/10"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-brand-dark">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+xx xxx xxxxxxx"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-normal text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-brand-orange/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-brand-dark">
                    Service Needed
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-normal text-slate-700 outline-none transition focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-brand-orange/10"
                  >
                    <option value="">Select service</option>
                    {services.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-brand-dark">
                  Project Budget
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-normal text-slate-700 outline-none transition focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-brand-orange/10"
                >
                  <option value="">Select budget range</option>
                  <option value="$500 - $1,000">$500 - $1,000</option>
                  <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                  <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                  <option value="$5,000+">$5,000+</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-brand-dark">
                  Project Details
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="6"
                  placeholder="Tell us about your project, goals, features, timeline and requirements..."
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-normal text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-brand-orange/10"
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={status.loading}
                className="inline-flex w-fit items-center justify-center gap-2 rounded-full border border-brand-orange bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status.loading ? 'Sending...' : 'Send Message'} <Send size={18} />
              </button>

              {status.message && (
                <p
                  className={`rounded-2xl border px-4 py-3 text-sm font-medium ${
                    status.type === 'success'
                      ? 'border-green-200 bg-green-50 text-green-700'
                      : 'border-red-200 bg-red-50 text-red-700'
                  }`}
                >
                  {status.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="container-custom">
          <div className="rounded-[2rem] bg-gradient-to-r from-brand-dark to-brand-orange p-8 text-white shadow-card sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-semibold sm:text-3xl">
                  Ready to build something scalable?
                </h2>
                <p className="mt-2 max-w-2xl text-sm font-normal leading-7 text-slate-100">
                  Let’s turn your business idea into a professional digital product.
                </p>
              </div>

              <a
                href={`mailto:${company.email}`}
                className="inline-flex w-fit items-center justify-center gap-2 rounded-full border border-white bg-white px-5 py-2.5 text-sm font-semibold text-brand-dark transition duration-300 hover:-translate-y-1 hover:bg-slate-100"
              >
                Get Consultation <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact