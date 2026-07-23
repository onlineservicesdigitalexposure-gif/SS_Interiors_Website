import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { getDomesticServices } from '../data/services.js'

export default function DomesticServices() {
  const domesticServices = getDomesticServices()

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40">
        <div className="grid-backdrop absolute inset-0 opacity-50" />
        <div className="container-px relative mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Domestic Spaces</span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-bone sm:text-5xl">
              Every room, <span className="text-gradient-bronze">designed on purpose.</span>
            </h1>
            <p className="mt-6 font-body text-lg sm:text-xl md:text-2xl leading-relaxed text-bone/90">
              Tap any space below for a closer look — layouts, materials and everything included.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-px mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {domesticServices.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
            >
              <Link
                to={`/services/domestic/${service.id}`}
                className="card-glass group block text-left transition-shadow duration-300 hover:border-bronze/50 hover:shadow-[0_20px_60px_-20px_rgba(192,138,78,0.35)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                </div>
                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <h3 className="font-display text-xl font-bold text-bone">{service.title}</h3>
                    <p className="mt-2 font-body text-base sm:text-lg leading-relaxed text-bone-muted">{service.summary}</p>
                  </div>
                  <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-surface-border text-bone-muted transition-all duration-300 group-hover:border-bronze group-hover:bg-bronze/10 group-hover:text-bronze-light">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-px mx-auto">
          <Reveal className="card-glass relative overflow-hidden px-8 py-14 text-center md:px-16">
            <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-30" />
            <div className="relative">
              <h2 className="font-display text-2xl font-bold text-bone md:text-3xl">
                Designing more than one room?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm text-bone-muted">
                Most of our clients combine 3–4 of these services into one project — we'll help you plan it all together.
              </p>
              <Link to="/contact" className="btn-primary mt-7 inline-flex">
                Book Free Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}