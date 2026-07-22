import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function ServiceCard({ service, onOpen, index = 0 }) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(service)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="card-glass group text-left transition-shadow duration-300 hover:border-bronze/50 hover:shadow-[0_20px_60px_-20px_rgba(192,138,78,0.35)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-bone/20 bg-ink/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-bone-muted backdrop-blur-sm">
          {service.category}
        </span>
      </div>
      <div className="flex items-start justify-between gap-4 p-6">
        <div>
          <h3 className="font-display text-xl font-bold text-bone">{service.title}</h3>
          <p className="mt-2 font-body text-sm leading-relaxed text-bone-muted">{service.summary}</p>
        </div>
        <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-surface-border text-bone-muted transition-all duration-300 group-hover:border-bronze group-hover:bg-bronze/10 group-hover:text-bronze-light">
          <ArrowUpRight size={16} />
        </span>
      </div>
    </motion.button>
  )
}
