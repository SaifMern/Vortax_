import { useState } from 'react'
import { ArrowRight, Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react'
import SEO from '../components/SEO'
import { company } from '../data/siteData'

// FormSubmit endpoint (production)
const CONTACT_API_URL = `https://formsubmit.co/ajax/${company.email}`

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

      // FormSubmit system fields
      _subject: `New Project Inquiry from ${name.trim()}`,
      _captcha: 'false',

      // ✅ AUTO REPLY EMAIL (IMPORTANT)
      _autoresponse: `Hi ${name.trim()},

Thank you for contacting VortaxStudio. We have received your project inquiry successfully.

Our team will review your requirements and contact you soon with the right guidance, timeline, and next steps.

What happens next?
We will check your project details and get back to you shortly.

Regards,
VortaxStudio Team`,
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
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Form submission failed')
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
          'Network error. Please check your internet or FormSubmit configuration.',
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

      {/* ===== HERO SECTION (UNCHANGED) ===== */}
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

            <h1 className="mt-6 text-3xl font-black sm:text-5xl text-white">
              Contact Us
            </h1>

            <p className="mt-5 text-slate-200 text-lg">
              Share your idea, requirements, timeline or business challenge.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FORM SECTION (UNCHANGED STYLING) ===== */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">

          {/* LEFT */}
          <div className="space-y-6">
            <div className="rounded-[2rem] bg-white p-6 shadow-card sm:p-8">
              <h2 className="text-2xl font-semibold text-brand-dark">
                Contact details
              </h2>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <Phone />
                  {company.phone}
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <Mail />
                  {company.email}
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <MapPin />
                  Pakistan, serving clients worldwide
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="rounded-[2rem] bg-white p-8 shadow-card">

            <div className="grid gap-4">
              <input
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
              />

              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
              />

              <input
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input"
              />

              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="input"
              >
                <option value="">Select Service</option>
                {services.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>

              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="input"
              >
                <option value="">Budget</option>
                <option>$500 - $1000</option>
                <option>$1000 - $3000</option>
                <option>$3000+</option>
              </select>

              <textarea
                rows="6"
                placeholder="Project Details"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="input"
              />

              <button
                onClick={handleSubmit}
                disabled={status.loading}
                className="bg-brand-orange text-white py-3 rounded-full"
              >
                {status.loading ? 'Sending...' : 'Send Message'} <Send />
              </button>

              {status.message && (
                <p
                  className={`p-3 rounded-xl ${
                    status.type === 'success'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {status.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact