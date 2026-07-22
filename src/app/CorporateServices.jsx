import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft, Briefcase, Users, Presentation, Coffee, Check, Building2 } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import StatCounter from '../components/StatCounter.jsx'
import { getCorporateService } from '../data/services.js'
import organization from '../data/organization.js'

const SPACES = [
  { icon: Briefcase, title: 'Boss Cabins', description: 'Private, brand-forward cabins built for focus and first impressions.' },
  { icon: Users, title: 'Workstations', description: 'Open-plan layouts that balance density with comfort and acoustics.' },
  { icon: Presentation, title: 'Conference Rooms', description: 'AV-ready meeting rooms with cabling-friendly, glare-free lighting.' },
  { icon: Coffee, title: 'Lounge & Breakout', description: 'Informal zones for downtime, casual meetings and team energy.' },
]

export default function CorporateServices() {
  const service = getCorporateService()

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
          animate={{ y: [0, -22, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -top-32 left-10 h-72 w-72 rounded-full bg-volt/10 blur-[120px]"
        />

        <div className="container-px relative mx-auto grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <Link
                to="/services"
                className="mb-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-bone-muted transition-colors hover:text-bronze-light"
              >
                <ArrowLeft size={14} /> All Services
              </Link>
              <span className="eyebrow inline-flex items-center gap-2">
                <Building2 size={14} /> Corporate Interiors
              </span>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-bone sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-6 font-body text-base leading-relaxed text-bone-muted md:text-lg">
                {service.description}
              </p>
            </Reveal>
            <Reveal delay={0.15} className="mt-9 flex flex-wrap gap-4">
              <Link to="/contact" state={{ service: service.title }} className="btn-primary">
                Book Free Consultation <ArrowRight size={16} />
              </Link>
              <Link to="/gallery" className="btn-secondary">
                View Our Work
              </Link>
            </Reveal>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="card-glass aspect-[4/5] overflow-hidden">
              <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="card-glass absolute -bottom-6 -left-6 w-52 p-5"
            >
              <p className="font-display text-3xl font-extrabold text-gradient-bronze">240+</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-bone-muted">
                Projects delivered across Kolkata
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-surface-border bg-surface/40">
        <div className="container-px mx-auto grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
          {organization.stats.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      {/* Spaces we design */}
      <section className="section">
        <div className="container-px mx-auto">
          <SectionTitle eyebrow="Spaces We Design" title="Every part of your office, covered." align="center" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SPACES.map((space, i) => (
              <Reveal
                key={space.title}
                delay={i * 0.08}
                className="card-glass group p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-volt/50 hover:shadow-[0_20px_60px_-20px_rgba(76,111,255,0.3)]"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                  className="grid h-12 w-12 place-items-center rounded-xl border border-volt/30 bg-volt/10"
                >
                  <space.icon className="text-volt-light" size={20} />
                </motion.div>
                <h3 className="mt-4 font-display text-base font-bold text-bone">{space.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-muted">{space.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section bg-surface/30">
        <div className="container-px mx-auto grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="What's Included" title="Every detail planned before we build." />
            <Reveal delay={0.1}>
              <ul className="mt-6 space-y-3">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-bone/85 md:text-base">
                    <Check size={18} className="mt-0.5 shrink-0 text-volt-light" />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="card-glass aspect-[4/3] overflow-hidden">
            <img src='/images/gallery/project-18.jpeg' className="h-full w-full object-cover" />
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container-px mx-auto">
          <SectionTitle eyebrow="How We Work" title="From brief to move-in day." align="center" />
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

      {/* CTA */}
      <section className="section pt-0">
        <div className="container-px mx-auto">
          <Reveal className="card-glass relative overflow-hidden px-8 py-14 text-center md:px-16">
            <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-30" />
            <div className="relative">
              <h2 className="font-display text-2xl font-bold text-bone md:text-3xl">
                Planning a new office or a workspace refresh?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm text-bone-muted">
                Book a free consultation and we'll walk you through layout options, timelines and costs.
              </p>
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