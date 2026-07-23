import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, PlayCircle } from 'lucide-react'
import AnimatedBlueprint from './AnimatedBlueprint.jsx'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40">
      {/* Hero background image — drop your file at /public/images/hero-bg.jpg */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.webp"
          alt=""
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-ink/60" />
      </div>

      <div className="bg-radial-glow pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-volt/10 blur-[140px]" />

      <div className="container-px relative mx-auto grid items-center gap-16 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:pb-32">
        <div>
          <div className="flex flex-col gap-2">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow inline-flex w-fit items-center gap-2 rounded-full border border-surface-border px-4 py-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-volt animate-pulse-slow" />
              Interior Design Studio · Kolkata
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="script-accent mt-4 text-4xl sm:text-5xl lg:text-6xl text-bronze-light"
            >
              Get ready
            </motion.span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-2 break-words font-display text-3xl font-bold tracking-wider uppercase leading-[1.15] text-bone sm:text-4xl lg:text-5xl"
          >
            BEST INTERIOR DESIGNER STUDIO IN <span className="text-gradient-bronze">KOLKATA</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl font-body text-lg sm:text-xl md:text-2xl leading-relaxed text-bone/90"
          >
            SS Interiors designs and builds modern homes and workspaces across Kolkata —
            from first sketch to final handover, with precision planning and honest craftsmanship.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
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
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md animate-float"
        >
          <div className="card-glass p-6 md:p-8">
            <AnimatedBlueprint className="w-full" />
          </div>
          <span className="absolute -bottom-4 -right-4 rounded-full border border-surface-border bg-ink px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-bronze-light shadow-lg">
            Plan → Render → Build
          </span>
        </motion.div>
      </div>
    </section>
  )
}
