import Reveal from './Reveal.jsx'

export default function SectionTitle({ eyebrow, scriptAccent, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-2 ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {scriptAccent && <span className="script-accent -mb-2 text-3xl sm:text-4xl text-bronze-light">{scriptAccent}</span>}
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-bone">
        {title}
      </h2>
      {description && (
        <p className="font-body text-lg sm:text-xl md:text-2xl leading-relaxed text-bone-muted mt-2">{description}</p>
      )}
    </Reveal>
  )
}
