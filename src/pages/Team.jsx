import { ArrowUpRight, Mail, Sparkles, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import CTA from '../components/CTA'
import { seoPages, teamMembers } from '../data/siteData'

const TeamImage = ({ src, alt }) => (
  <div className="relative h-72 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-slate-100 to-orange-50">
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      onError={(e) => {
        e.currentTarget.style.display = 'none'
        e.currentTarget.nextElementSibling.style.display = 'flex'
      }}
    />
    <div className="absolute inset-0 hidden items-center justify-center text-brand-orange">
      <UserRound size={76} />
    </div>
  </div>
)

const Team = () => (
  <>
    <SEO {...seoPages.team} />

    <section className="relative overflow-hidden bg-brand-dark pt-32 text-white sm:pt-40">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#171f2d] to-brand-orange/80" />
      <div className="absolute inset-0 opacity-20 bg-hero-grid bg-[length:48px_48px]" />
      <div className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="container-custom relative pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fadeUp inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-brand-orange backdrop-blur">
            <Sparkles size={16} /> Our Team
          </div>

          <h1
            className="mx-auto mt-6 max-w-3xl animate-fadeUp text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ animationDelay: '0.12s' }}
          >
            Meet Our Team
          </h1>

          <p
            className="mx-auto mt-5 max-w-3xl animate-fadeUp text-base leading-8 text-slate-200 sm:text-lg"
            style={{ animationDelay: '0.24s' }}
          >
            VortaxStudio is built by a compact professional team that can plan,
            design, develop, test, deploy and support digital products.
          </p>
        </div>
      </div>
    </section>

    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Team Members"
          title="Three specialists, one mission"
          text="Click any team member to view their professional profile, responsibilities, skills, and how they support client projects."
        />

        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <article
              key={member.name}
              className="group animate-fadeScale rounded-[2rem] bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-card"
              style={{ animationDelay: `${0.08 * index}s` }}
            >
              <Link to={`/team/${member.slug}`} aria-label={`View ${member.name} profile`}>
                <TeamImage src={member.image} alt={member.name} />

                <div className="p-4">
                  <h3 className="text-xl font-semibold text-brand-dark transition group-hover:text-brand-orange">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-brand-orange">
                    {member.role}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {member.bio}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange">
                    View Profile
                    <ArrowUpRight size={16} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-brand-dark p-6 text-white shadow-card sm:p-8 lg:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="eyebrow">Join the conversation</p>

              <h2 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight sm:text-3xl">
                Have a project for our team?
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                Send your requirements and our team will help you choose the right
                technology, design, workflow and deployment plan.
              </p>
            </div>

            <Link to="/contact" className="btn-primary w-full justify-center md:w-auto">
              <Mail size={18} /> Contact Team
            </Link>
          </div>
        </div>
      </div>
    </section>

    <CTA />
  </>
)

export default Team
