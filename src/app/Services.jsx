import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Home as HomeIcon, Building2 } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { serviceCategories } from '../data/services.js'

const CATEGORY_ICONS = { domestic: HomeIcon, corporate: Building2 }
const CATEGORY_LINKS = { domestic: '/services/domestic', corporate: '/services/corporate' }

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40">
        <div className="grid-backdrop absolute inset-0 opacity-50" />
        <div className="container-px relative mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">What We Do</span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-bone sm:text-5xl">
              Interior design services, <span className="text-gradient-bronze">built end to end.</span>
            </h1>
            <p className="mt-6 font-body text-base leading-relaxed text-bone-muted md:text-lg">
              Choose the kind of space you're designing — every service inside is planned, built and handed over by our in-house team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-px mx-auto grid gap-8 md:grid-cols-2">
          {serviceCategories.map((cat, i) => {
            const Icon = CATEGORY_ICONS[cat.id]
            return (
              <Reveal key={cat.id} delay={i * 0.1}>
                <Link to={CATEGORY_LINKS[cat.id]} className="card-glass group relative block overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 6 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="absolute left-6 top-6 grid h-14 w-14 place-items-center rounded-2xl border border-bronze/30 bg-ink/70 backdrop-blur-sm"
                    >
                      <Icon className="text-bronze-light" size={26} />
                    </motion.div>
                  </div>
                  <div className="p-8">
                    <h2 className="font-display text-2xl font-bold text-bone md:text-3xl">{cat.title}</h2>
                    <p className="mt-2 font-mono text-xs uppercase tracking-widest text-bronze">{cat.tagline}</p>
                    <p className="mt-4 text-sm leading-relaxed text-bone-muted md:text-base">{cat.summary}</p>
                    <span className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-bone transition-colors duration-300 group-hover:text-bronze-light">
                      Explore {cat.title}{' '}
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-px mx-auto">
          <Reveal className="card-glass relative overflow-hidden px-8 py-14 text-center md:px-16">
            <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-30" />
            <div className="relative">
              <h2 className="font-display text-2xl font-bold text-bone md:text-3xl">
                Not sure which service fits your space?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm text-bone-muted">
                Tell us about your project and we'll recommend the right approach — free of charge.
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