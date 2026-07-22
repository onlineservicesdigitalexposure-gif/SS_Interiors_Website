import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { getServiceById, getDomesticServices } from '../data/services.js'
import organization from '../data/organization.js'

export default function DomesticServiceDetail() {
  const { id } = useParams()
  const service = getServiceById(id)

  if (!service || service.category !== 'Domestic') {
    return <Navigate to="/services/domestic" replace />
  }

  const otherServices = getDomesticServices().filter((s) => s.id !== service.id).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40">
        <div className="absolute inset-0">
          <img src={service.image} alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-ink/70" />
        </div>
        <div className="bg-radial-glow pointer-events-none absolute inset-0" />
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -top-32 right-10 h-72 w-72 rounded-full bg-bronze/10 blur-[120px]"
        />

        <div className="container-px relative mx-auto max-w-3xl text-center">
          <Reveal>
            <Link
              to="/services/domestic"
              className="mb-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-bone-muted transition-colors hover:text-bronze-light"
            >
              <ArrowLeft size={14} /> All Domestic Services
            </Link>
            <span className="eyebrow block">Domestic Interiors</span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-bone sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-6 font-body text-base leading-relaxed text-bone-muted md:text-lg">
              {service.summary}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Image + description */}
      <section className="section pt-0">
        <div className="container-px mx-auto grid items-center gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          <Reveal className="card-glass aspect-[4/3] overflow-hidden">
            <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
          </Reveal>
          <div>
            <SectionTitle eyebrow="Overview" title={`How we approach ${service.title.toLowerCase()}`} />
            <Reveal delay={0.1}>
              <p className="mt-4 font-body text-sm leading-relaxed text-bone-muted md:text-base">
                {service.description}
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" state={{ service: service.title }} className="btn-primary">
                Book Free Consultation <ArrowRight size={16} />
              </Link>
              <Link to="/gallery" className="btn-secondary">
                View Our Work
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features / highlights */}
      <section className="section bg-surface/30">
        <div className="container-px mx-auto">
          <SectionTitle eyebrow="What's Included" title="Everything covered in this service." align="center" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.highlights.map((h, i) => (
              <Reveal
                key={h}
                delay={i * 0.08}
                className="card-glass group p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-bronze/50 hover:shadow-[0_20px_60px_-20px_rgba(192,138,78,0.35)]"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                  className="grid h-12 w-12 place-items-center rounded-xl border border-bronze/30 bg-bronze/10"
                >
                  <Sparkles className="text-bronze" size={20} />
                </motion.div>
                <p className="mt-4 text-sm leading-relaxed text-bone">{h}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container-px mx-auto">
          <SectionTitle eyebrow="How We Work" title="From first sketch to final handover." align="center" />
          <div className="relative mt-16 grid gap-10 md:grid-cols-4">
            <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-surface-border to-transparent md:block" />
            {organization.process.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1} className="relative flex flex-col items-center text-center md:items-start md:text-left">
                <span className="font-mono text-sm text-bronze">{step.step}</span>
                <h3 className="mt-4 font-display text-lg font-bold text-bone">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-muted">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      {otherServices.length > 0 && (
        <section className="section bg-surface/30">
          <div className="container-px mx-auto">
            <SectionTitle eyebrow="Explore More" title="Other domestic services you might need." />
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {otherServices.map((s, i) => (
                <Reveal key={s.id} delay={i * 0.08}>
                  <Link
                    to={`/services/domestic/${s.id}`}
                    className="card-glass group block overflow-hidden transition-shadow duration-300 hover:border-bronze/50 hover:shadow-[0_20px_60px_-20px_rgba(192,138,78,0.35)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="font-display text-base font-bold text-bone">{s.title}</h4>
                      <p className="mt-1 text-xs text-bone-muted">{s.summary}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section pt-0">
        <div className="container-px mx-auto">
          <Reveal className="card-glass relative overflow-hidden px-8 py-14 text-center md:px-16">
            <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-30" />
            <div className="relative">
              <h2 className="font-display text-2xl font-bold text-bone md:text-3xl">
                Ready to start your {service.title.toLowerCase()}?
              </h2>
              <Link to="/contact" state={{ service: service.title }} className="btn-primary mt-7 inline-flex">
                Book Free Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}