import { ArrowLeft, ArrowRight, CheckCircle2, Mail, Sparkles, UserRound } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import SEO from '../components/SEO'
import CTA from '../components/CTA'
import { company, teamMembers } from '../data/siteData'

const TeamVisual = ({ member }) => (
  <div className="relative animate-fadeScale overflow-hidden rounded-[2rem] border border-white/70 bg-white p-5 shadow-card">
    <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl" />
    <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-brand-dark/10 blur-3xl" />

    <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-100 to-orange-50">
      <img
        src={member.image}
        alt={member.name}
        loading="lazy"
        className="h-[430px] w-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
          e.currentTarget.nextElementSibling.style.display = 'flex'
        }}
      />
      <div className="hidden h-[430px] items-center justify-center text-brand-orange">
        <UserRound size={120} />
      </div>
    </div>

    <div className="relative mt-5 rounded-2xl bg-brand-dark p-5 text-white">
      <p className="text-xs font-semibold uppercase tracking-[.2em] text-brand-orange">Team Profile</p>
      <h2 className="mt-2 text-2xl font-semibold">{member.name}</h2>
      <p className="mt-1 text-sm text-slate-300">{member.role}</p>
    </div>
  </div>
)

const TeamMemberDetail = () => {
  const { slug } = useParams()
  const member = teamMembers.find((item) => item.slug === slug)

  if (!member) {
    return (
      <>
        <SEO title="Team Member Not Found | VortaxStudio" description="The requested VortaxStudio team profile was not found." />
        <section className="flex min-h-[70vh] items-center bg-slate-50 pt-36">
          <div className="container-custom text-center">
            <p className="text-sm font-semibold uppercase tracking-[.24em] text-brand-orange">Profile Not Found</p>
            <h1 className="mt-4 text-3xl font-semibold text-brand-dark sm:text-4xl">This team profile is not available.</h1>
            <Link to="/team" className="btn-primary mt-8 w-fit">
              Back to Team
            </Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <SEO
        title={member.seoTitle}
        description={member.seoDescription}
        keywords={`${member.name}, ${member.role}, VortaxStudio team, software company team, ${member.skills.join(', ')}`}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: member.name,
          jobTitle: member.role,
          description: member.seoDescription,
          worksFor: {
            '@type': 'Organization',
            name: company.name,
            email: company.email,
            telephone: company.phone,
          },
        }}
      />

      <section className="relative overflow-hidden bg-brand-dark pt-36 text-white sm:pt-40">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#171f2d] to-brand-orange/80" />
        <div className="absolute inset-0 bg-hero-grid bg-[length:48px_48px] opacity-20" />
        <div className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <div className="container-custom relative pb-20">
          <div className="max-w-4xl">
            <Link to="/team" className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition hover:text-brand-orange">
              <ArrowLeft size={17} /> Back to Team
            </Link>

            <div className="mt-8 animate-fadeUp inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-brand-orange backdrop-blur">
              <Sparkles size={16} /> Team Member Detail
            </div>

            <h1 className="mt-6 max-w-4xl animate-fadeUp text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl" style={{ animationDelay: '0.12s' }}>
              {member.name}
            </h1>

            <p className="mt-4 animate-fadeUp text-base font-semibold text-brand-orange sm:text-lg" style={{ animationDelay: '0.18s' }}>
              {member.role}
            </p>

            <p className="mt-5 max-w-3xl animate-fadeUp text-base leading-8 text-slate-200 sm:text-lg" style={{ animationDelay: '0.24s' }}>
              {member.summary}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <TeamVisual member={member} />

          <div className="animate-fadeScale rounded-[2rem] bg-white p-6 shadow-card sm:p-8" style={{ animationDelay: '0.12s' }}>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-brand-orange">Professional Profile</p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-brand-dark sm:text-3xl">
              How {member.name} supports client success
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              {member.detail}
            </p>

            <div className="mt-7 grid gap-4">
              {member.responsibilities.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-brand-orange" />
                  <p className="text-sm leading-7 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid gap-8 lg:grid-cols-3">
          <div className="animate-fadeScale rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-brand-dark">Core Skills</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {member.skills.map((item) => (
                <span key={item} className="rounded-full border border-brand-orange/20 bg-brand-soft px-4 py-2 text-xs font-medium text-brand-dark">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="animate-fadeScale rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm" style={{ animationDelay: '0.08s' }}>
            <h3 className="text-xl font-semibold text-brand-dark">Project Focus</h3>
            <div className="mt-5 grid gap-3">
              {member.focus.map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <CheckCircle2 size={16} className="shrink-0 text-brand-orange" /> {item}
                </span>
              ))}
            </div>
          </div>

          <div className="animate-fadeScale rounded-[2rem] border border-slate-100 bg-brand-dark p-6 text-white shadow-card" style={{ animationDelay: '0.16s' }}>
            <h3 className="text-xl font-semibold">Work with our team</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Share your requirements and our team will help you plan the right design, development, testing, deployment, and support approach.
            </p>
            <Link to="/contact" className="btn-primary mt-6 w-fit px-5 py-2.5">
              Start Project <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 pb-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-6 text-center shadow-soft sm:p-8">
            <Mail className="mx-auto text-brand-orange" size={30} />
            <h2 className="mt-4 text-2xl font-semibold text-brand-dark">Need guidance from VortaxStudio?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Contact us for websites, apps, SaaS platforms, automation, QA, DevOps, maintenance, and digital growth support.
            </p>
            <Link to="/contact" className="btn-secondary mt-6">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}

export default TeamMemberDetail
