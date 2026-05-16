import { useState } from 'react'
import { ArrowRight, Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react'
import SEO from '../components/SEO'
import { company } from '../data/siteData'

// IMPORTANT: replace with your real email
const FORM_ENDPOINT = `https://formsubmit.co/${company.email}`

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

    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('service', service)
    formData.append('budget', budget)
    formData.append('message', message)

    // extra FormSubmit settings
    formData.append('_subject', 'New Contact Form Submission')
    formData.append('_captcha', 'false')

    setStatus({
      loading: true,
      message: '',
      type: '',
    })

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      resetFields()

      setStatus({
        loading: false,
        message: 'Your message has been sent successfully 🚀',
        type: 'success',
      })
    } catch (error) {
      setStatus({
        loading: false,
        message:
          'Network error. Please check internet or verify FormSubmit email activation.',
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
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-brand-orange">
              <Sparkles size={16} /> Let’s Build Together
            </div>

            <h1 className="mt-6 text-4xl font-black">Contact Us</h1>

            <p className="mt-5 text-slate-200">
              Share your idea, requirements, or business challenge.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            <div className="rounded-[2rem] bg-white p-6 shadow-card sm:p-8">
              <h2 className="text-2xl font-semibold text-brand-dark">
                Contact details
              </h2>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
                  <Phone />
                  <div>
                    <p className="text-xs text-slate-400">Phone</p>
                    <p>{company.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
                  <Mail />
                  <div>
                    <p className="text-xs text-slate-400">Email</p>
                    <p>{company.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
                  <MapPin />
                  <div>
                    <p className="text-xs text-slate-400">Location</p>
                    <p>Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-[2rem] bg-white p-8 shadow-card">

            <input
              className="w-full rounded-xl border p-3 mt-2"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="w-full rounded-xl border p-3 mt-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="w-full rounded-xl border p-3 mt-3"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <select
              className="w-full rounded-xl border p-3 mt-3"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="">Select Service</option>
              {services.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>

            <select
              className="w-full rounded-xl border p-3 mt-3"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            >
              <option value="">Budget</option>
              <option>$500 - $1000</option>
              <option>$1000 - $3000</option>
              <option>$3000+</option>
            </select>

            <textarea
              className="w-full rounded-xl border p-3 mt-3 h-32"
              placeholder="Project Details"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              onClick={handleSubmit}
              disabled={status.loading}
              className="mt-5 flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-white"
            >
              {status.loading ? 'Sending...' : 'Send Message'}
              <Send size={18} />
            </button>

            {status.message && (
              <p
                className={`mt-4 p-3 rounded-lg text-sm ${
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
      </section>
    </>
  )
}

export default Contact