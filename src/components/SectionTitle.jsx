import Reveal from './Reveal.jsx'

export default function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="font-display text-3xl font-bold leading-tight text-bone sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="font-body text-base leading-relaxed text-bone-muted md:text-lg">{description}</p>
      )}
    </Reveal>
  )
}
