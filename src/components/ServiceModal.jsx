import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X, Check, ArrowRight } from 'lucide-react'

export default function ServiceModal({ service, onClose }) {
  return (
    <AnimatePresence>
      {service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/80 backdrop-blur-sm p-0 md:items-center md:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-surface-border bg-surface md:rounded-3xl"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-bone/20 bg-ink/70 text-bone backdrop-blur-sm transition-colors hover:border-bronze hover:text-bronze-light"
            >
              <X size={18} />
            </button>

            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              <span className="absolute left-5 top-5 rounded-full border border-bone/20 bg-ink/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-bone-muted backdrop-blur-sm">
                {service.category} Interiors
              </span>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="font-display text-2xl font-bold text-bone md:text-3xl">{service.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-bone-muted md:text-base">
                {service.description}
              </p>

              <div className="mt-6">
                <p className="eyebrow mb-3">What's Included</p>
                <ul className="space-y-2.5">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-bone/85">
                      <Check size={16} className="mt-0.5 shrink-0 text-volt-light" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  state={{ service: service.title }}
                  onClick={onClose}
                  className="btn-primary flex-1 justify-center"
                >
                  Book Now <ArrowRight size={16} />
                </Link>
                <button onClick={onClose} className="btn-secondary flex-1 justify-center">
                  Keep Browsing
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
