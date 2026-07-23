import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle, Target, Eye, Ruler, Wallet, Clock, Award } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import StatCounter from '../components/StatCounter.jsx'
import organization from '../data/organization.js'

const VALUE_ICONS = [Ruler, Wallet, Clock, Award]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.webp"
            alt=""
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-ink/60" />
        </div>
        <div className="bg-radial-glow pointer-events-none absolute inset-0" />

        {/* Floating decorative glow orbs */}
        <motion.div
          animate={{ y: [0, -24, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -top-32 left-10 h-72 w-72 rounded-full bg-bronze/10 blur-[120px]"
        />
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="pointer-events-none absolute -bottom-24 right-10 h-80 w-80 rounded-full bg-volt/10 blur-[130px]"
        />

        <div className="container-px relative mx-auto grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 14, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="eyebrow inline-flex items-center gap-2 rounded-full border border-surface-border px-4 py-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-volt animate-pulse-slow" />
              About SS Interiors
            </motion.span>

           <h1 className="mt-6 break-words font-display text-3xl font-extrabold leading-[1.08] text-bone sm:text-5xl lg:text-6xl">
              {'Designing spaces that feel'.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-gradient-bronze inline-block"
              >
                unmistakably yours.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-6 max-w-xl font-body text-lg sm:text-xl md:text-2xl leading-relaxed text-bone/90"
            >
              {organization.about.story}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link to="/contact" className="btn-primary">
                Book Free Consultation <ArrowRight size={16} />
              </Link>
              <Link to="/gallery" className="btn-secondary">
                <PlayCircle size={17} /> View Our Work
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="card-glass aspect-[4/5] overflow-hidden">
              <img
                src="/images/gallery/project-01.jpeg"
                alt="SS Interiors studio work"
                className="h-full w-full object-cover"
              />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="card-glass absolute -bottom-6 -left-6 w-52 p-5"
            >
              <p className="font-display text-3xl font-extrabold text-gradient-bronze">12+</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-bone-muted">
                Years crafting Kolkata interiors
              </p>
            </motion.div>
            <span className="absolute -top-4 -right-4 rounded-full border border-surface-border bg-ink px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-bronze-light shadow-lg">
              Design → Build → Deliver
            </span>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section pt-0">
        <div className="container-px mx-auto grid gap-6 md:grid-cols-2">
          <Reveal className="card-glass group p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-bronze/50 hover:shadow-[0_20px_60px_-20px_rgba(192,138,78,0.35)]">
            <motion.div
              whileHover={{ rotate: 8, scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="grid h-14 w-14 place-items-center rounded-2xl border border-bronze/30 bg-bronze/10"
            >
              <Target className="text-bronze" size={26} />
            </motion.div>
            <h3 className="mt-5 font-display text-xl font-bold text-bone">Our Mission</h3>
            <p className="mt-3 text-base sm:text-lg leading-relaxed text-bone-muted">{organization.about.mission}</p>
          </Reveal>
          <Reveal delay={0.1} className="card-glass group p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-volt/50 hover:shadow-[0_20px_60px_-20px_rgba(76,111,255,0.3)]">
            <motion.div
              whileHover={{ rotate: -8, scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="grid h-14 w-14 place-items-center rounded-2xl border border-volt/30 bg-volt/10"
            >
              <Eye className="text-volt-light" size={26} />
            </motion.div>
            <h3 className="mt-5 font-display text-xl font-bold text-bone">Our Vision</h3>
            <p className="mt-3 text-base sm:text-lg leading-relaxed text-bone-muted">{organization.about.vision}</p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-surface-border bg-surface/40">
        <div className="container-px mx-auto grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
          {organization.stats.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container-px mx-auto">
          <SectionTitle
            eyebrow="What Drives Us"
            title="The values behind every project we take on."
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {organization.values.map((v, i) => {
              const Icon = VALUE_ICONS[i % VALUE_ICONS.length]
              return (
                <Reveal
                  key={v.title}
                  delay={i * 0.08}
                  className="card-glass group p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-bronze/50 hover:shadow-[0_20px_60px_-20px_rgba(192,138,78,0.35)]"
                >
                  <div className="flex items-center justify-between">
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                      className="grid h-12 w-12 place-items-center rounded-xl border border-bronze/30 bg-bronze/10"
                    >
                      <Icon className="text-bronze" size={20} />
                    </motion.div>
                    <span className="font-mono text-xs text-bone-faint">0{i + 1}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-bone">{v.title}</h3>
                  <p className="mt-2 text-base sm:text-lg leading-relaxed text-bone-muted">{v.description}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process recap */}
      <section className="section bg-surface/30">
        <div className="container-px mx-auto">
          <SectionTitle eyebrow="Our Process" title="How a project moves from idea to interior." align="center" />
          <div className="relative mt-16 grid gap-10 md:grid-cols-4">
            <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-surface-border to-transparent md:block" />
            {organization.process.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1} className="relative flex flex-col items-center text-center md:items-start md:text-left">
                <span className="font-mono text-base font-semibold text-bronze">{step.step}</span>
                <h3 className="mt-4 font-display text-xl font-bold tracking-wide uppercase text-bone">{step.title}</h3>
                <p className="mt-3 font-body text-base sm:text-lg md:text-xl leading-relaxed text-bone-muted">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container-px mx-auto">
          <SectionTitle eyebrow="Behind The Work" title="The teams that bring each project to life." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {organization.team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1} className="card-glass group flex gap-5 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-bronze/50 hover:shadow-[0_20px_60px_-20px_rgba(192,138,78,0.35)]">
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-bronze/40 bg-bronze/10 font-display text-lg font-bold text-bronze-light"
                >
                  {member.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                </motion.div>
                <div>
                  <h4 className="font-display text-base font-bold text-bone">{member.name}</h4>
                  <p className="font-mono text-xs uppercase tracking-widest text-bronze">{member.role}</p>
                  <p className="mt-2 text-base sm:text-lg leading-relaxed text-bone-muted">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section pt-0">
        <div className="container-px mx-auto">
          <Reveal className="card-glass relative overflow-hidden px-8 py-14 text-center md:px-16">
            <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-30" />
            <h2 className="relative font-display text-2xl font-bold text-bone md:text-3xl">
              Let's talk about your space.
            </h2>
            <Link to="/contact" className="btn-primary relative mt-7 inline-flex">
              Book Free Consultation <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}