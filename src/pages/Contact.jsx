import { useState } from 'react'
import { ArrowRight, Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react'
import SEO from '../components/SEO'
import { company } from '../data/siteData'

const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY_HERE'

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

    setStatus({ loading: true, message: '', type: '' })

    const formData = {
      access_key: WEB3FORMS_ACCESS_KEY,

      name,
      email,
      phone,
      service,
      budget,
      message,

      subject: `New Contact Form Lead - ${name}`,

      // 🔥 AUTO REPLY MESSAGE (THIS IS WHAT YOU WANTED)
      from_name: 'VortaxStudio',
      replyto: email,

      auto_reply: `Hi ${name},

Thank you for contacting VortaxStudio. We have received your project inquiry successfully.

Our team will review your requirements and contact you soon with the right guidance, timeline, and next steps.

What happens next?
We will check your project details and get back to you shortly.

Regards,
VortaxStudio Team`,
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await res.json()

      if (result.success) {
        resetFields()
        setStatus({
          loading: false,
          message: 'Your message has been sent successfully.',
          type: 'success',
        })
      } else {
        setStatus({
          loading: false,
          message: result.message || 'Submission failed. Try again.',
          type: 'error',
        })
      }
    } catch (error) {
      setStatus({
        loading: false,
        message: 'Network error. Please try again later.',
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

      {/* HERO SECTION (UNCHANGED UI) */}
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

            <h1 className="mt-6 text-4xl font-black text-white sm:text-5xl">
              Contact Us
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-slate-200">
              Share your idea, requirements, timeline or business challenge.
            </p>
          </div>
        </div>
      </section>

      {/* FORM SECTION (UNCHANGED UI) */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            <div className="rounded-[2rem] bg-white p-6 shadow-card sm:p-8">
              <h2 className="text-2xl font-semibold text-brand-dark">
                Contact details
              </h2>

              <div className="mt-8 space-y-4">
                <a className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
                  <Phone />
                  <span>{company.phoneDisplay}</span>
                </a>

                <a className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
                  <Mail />
                  <span>{company.email}</span>
                </a>

                <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
                  <MapPin />
                  <span>Pakistan, serving clients worldwide</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="rounded-[2rem] bg-white p-5 shadow-card sm:p-8">

            <div className="grid gap-5">

              <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Full Name" className="input"/>

              <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="input"/>

              <input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Phone" className="input"/>

              <select value={service} onChange={(e)=>setService(e.target.value)} className="input">
                <option>Select Service</option>
                {services.map(s => <option key={s}>{s}</option>)}
              </select>

              <select value={budget} onChange={(e)=>setBudget(e.target.value)} className="input">
                <option>Select Budget</option>
                <option>$500-$1000</option>
                <option>$1000-$3000</option>
                <option>$3000+</option>
              </select>

              <textarea value={message} onChange={(e)=>setMessage(e.target.value)} rows="5" placeholder="Message" className="input"/>

              <button
                onClick={handleSubmit}
                disabled={status.loading}
                className="bg-brand-orange text-white rounded-full py-3"
              >
                {status.loading ? 'Sending...' : 'Send Message'} <Send />
              </button>

              {status.message && (
                <p className={status.type === 'success' ? 'text-green-600' : 'text-red-600'}>
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