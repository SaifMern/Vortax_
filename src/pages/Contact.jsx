import { useState } from 'react'
import { ArrowRight, Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react'
import SEO from '../components/SEO'
import { company } from '../data/siteData'

const ACCESS_KEY = "6cf55ecd-a4f0-4524-900c-b7b1657624e6" // 👈 yahan paste karo

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
    if (!name || !email || !message) {
      setStatus({
        loading: false,
        message: 'Name, email and message are required',
        type: 'error',
      })
      return
    }

    setStatus({ loading: true, message: '', type: '' })

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name,
          email,
          phone,
          service,
          budget,
          message,
          subject: 'New Contact Form - VortaxStudio',
        }),
      })

      const result = await response.json()

      if (result.success) {
        resetFields()
        setStatus({
          loading: false,
          message: 'Message sent successfully 🚀 We will contact you soon.',
          type: 'success',
        })
      } else {
        setStatus({
          loading: false,
          message: result.message || 'Something went wrong',
          type: 'error',
        })
      }
    } catch (error) {
      setStatus({
        loading: false,
        message: 'Network error. Try again later.',
        type: 'error',
      })
    }
  }

  return (
    <>
      <SEO
        title="Contact VortaxStudio | Start Your Software Project"
        description="Contact VortaxStudio for web development, app development, custom software, SaaS, e-commerce, QA, DevOps, cybersecurity, automation and digital transformation services."
      />

      <section className="relative overflow-hidden bg-brand-dark pt-32 text-white sm:pt-40">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#171f2d] to-brand-orange/80" />
        <div className="absolute inset-0 opacity-20 bg-hero-grid bg-[length:48px_48px]" />
        <div className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <div className="container-custom relative pb-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs text-brand-orange">
            <Sparkles size={16} /> Let’s Build Together
          </div>

          <h1 className="mt-6 text-4xl font-black">Contact Us</h1>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">

          {/* LEFT */}
          <div className="space-y-6">
            <div className="rounded-[2rem] bg-white p-6 shadow-card">
              <h2 className="text-2xl font-semibold">Contact details</h2>

              <div className="mt-6 space-y-4">
                <div className="flex gap-3">
                  <Phone /> {company.phone}
                </div>
                <div className="flex gap-3">
                  <Mail /> {company.email}
                </div>
                <div className="flex gap-3">
                  <MapPin /> Pakistan
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-[2rem] bg-white p-8 shadow-card">

            <input
              className="input"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="input mt-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="input mt-3"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <select
              className="input mt-3"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="">Service</option>
              {services.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>

            <select
              className="input mt-3"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            >
              <option value="">Budget</option>
              <option>$500 - $1000</option>
              <option>$1000 - $3000</option>
              <option>$3000+</option>
            </select>

            <textarea
              className="input mt-3 h-32"
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