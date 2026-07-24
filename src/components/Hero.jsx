import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, PlayCircle } from 'lucide-react'

const HERO_IMAGES = [
  '/images/hero-bg.webp',
  '/images/gallery/project-28.jpeg',
  '/images/gallery/project-04.jpeg',
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Sliding Hero Background Images (2-second interval) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={HERO_IMAGES[currentIndex]}
            src={HERO_IMAGES[currentIndex]}
            alt="SS Interiors Luxury Design"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.85, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="h-full w-full object-cover brightness-[1.05]"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/35 to-ink/75" />
      </div>

      <div className="bg-radial-glow pointer-events-none absolute inset-0 z-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-volt/10 blur-[140px]" />

      {/* Centered Hero Content */}
      <div className="container-px relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow inline-flex items-center gap-2 rounded-full border border-surface-border bg-ink/40 px-5 py-2.5 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-volt animate-pulse-slow" />
            Interior Design Studio · Kolkata
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="script-accent mt-4 text-5xl sm:text-6xl lg:text-7xl text-bronze-light drop-shadow-md"
          >
            Get ready
          </motion.span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-3 max-w-3xl font-display text-3xl font-extrabold tracking-wider uppercase leading-[1.15] text-bone sm:text-5xl lg:text-6xl"
        >
          PREMIUM INTERIOR DESIGNER STUDIO IN <span className="text-gradient-bronze">KOLKATA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl font-body text-lg sm:text-xl md:text-2xl leading-relaxed text-bone/90"
        >
          SS Interiors designs and builds modern homes and workspaces across Kolkata —
          from first sketch to final handover, with precision planning and honest craftsmanship.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-5"
        >
          <Link to="/contact" className="btn-primary">
            Book Free Consultation <ArrowRight size={18} />
          </Link>
          <Link to="/gallery" className="btn-secondary">
            <PlayCircle size={19} /> View Our Work
          </Link>
        </motion.div>

        {/* Slide Indicators */}
        <div className="mt-12 flex items-center justify-center gap-2">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ${
                currentIndex === idx ? 'w-8 bg-bronze' : 'w-2 bg-bone/30 hover:bg-bone/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
