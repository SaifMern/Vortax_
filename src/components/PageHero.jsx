const PageHero = ({ eyebrow, title, text }) => (
  <section className="relative overflow-hidden bg-slate-50 pt-32 sm:pt-40">
    <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl" />
    <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-brand-dark/10 blur-3xl" />
    <div className="container-custom relative pb-16 pt-10 text-center sm:pb-20">
      <p className="reveal eyebrow">{eyebrow}</p>
      <h1 className="reveal delay-100 mx-auto max-w-5xl text-4xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">{title}</h1>
      <p className="reveal delay-200 mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">{text}</p>
    </div>
  </section>
)
export default PageHero
