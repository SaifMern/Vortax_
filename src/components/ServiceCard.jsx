import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const ServiceCard = ({ service, featured = false, animationDelay = '0s' }) => {
  const Icon = service.icon

  return (
    <article
      style={{ animationDelay }}
      className={`group relative flex h-full animate-fadeScale flex-col overflow-hidden rounded-[1.75rem] border p-6 card-hover ${
        featured
          ? 'border-brand-orange bg-brand-dark text-white shadow-card'
          : 'border-slate-100 bg-white text-brand-dark shadow-sm'
      }`}
    >
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-orange/10 transition duration-500 group-hover:scale-125" />

      <div
        className={`relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${
          featured ? 'bg-white/10 text-brand-orange' : 'bg-brand-soft text-brand-orange'
        }`}
      >
        <Icon size={28} />
      </div>

      <h3 className="relative text-xl font-extrabold">{service.title}</h3>

      <p
        className={`relative mt-3 text-sm leading-7 ${
          featured ? 'text-slate-300' : 'text-slate-600'
        }`}
      >
        {service.text}
      </p>

      {service.bullets && (
        <div className="relative mt-5 grid gap-2">
          {service.bullets.map((item) => (
            <span
              key={item}
              className={`flex items-center gap-2 text-sm font-semibold ${
                featured ? 'text-slate-200' : 'text-slate-700'
              }`}
            >
              <CheckCircle2 size={16} className="shrink-0 text-brand-orange" /> {item}
            </span>
          ))}
        </div>
      )}

      <Link
        to={`/services/${service.slug}`}
        className="btn-secondary relative mt-6 w-fit px-4 py-2.5 text-xs"
        aria-label={`Learn more about ${service.title}`}
      >
        Learn more
        <ArrowUpRight
          size={15}
          className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </Link>
    </article>
  )
}

export default ServiceCard
