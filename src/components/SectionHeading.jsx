const SectionHeading = ({ eyebrow, title, text, align = 'center', className = '' }) => {
  const isCenter = align === 'center'
  return (
    <div className={`${isCenter ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{text}</p>}
    </div>
  )
}
export default SectionHeading
