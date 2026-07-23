import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero.jsx'
import Carousel from '../components/Carousel.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import StatCounter from '../components/StatCounter.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import ServiceModal from '../components/ServiceModal.jsx'
import { services } from '../data/services.js'
import { galleryItems } from '../data/gallery.js'
import Lightbox from '../components/Lightbox.jsx'
import organization from '../data/organization.js'

export default function Home() {
  const [activeService, setActiveService] = useState(null)
  const [activeImg, setActiveImg] = useState(null)
  const featured = services.slice(0, 8)
  const previewImages = galleryItems.slice(0, 20)

  return (
    <>
      <Hero />

      {/* Stats strip */}
      <section className="border-y border-surface-border bg-surface/40">
        <div className="container-px mx-auto grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
          {organization.stats.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="section">
        <div className="container-px mx-auto grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="card-glass aspect-[4/3] overflow-hidden">
              <img src="/images/gallery/project-28.jpeg" alt="SS Interiors featured project" className="h-full w-full object-cover" />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="card-glass absolute -bottom-6 -right-6 w-52 p-5"
            >
              <p className="font-display text-3xl font-extrabold text-gradient-bronze">12+</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-bone-muted">
                Years crafting Kolkata interiors
              </p>
            </motion.div>
          </Reveal>

          <div>
            <SectionTitle
              eyebrow="About SS Interiors"
              scriptAccent="Crafted with Passion"
              title="Interiors designed around how you actually live."
              description={organization.about.story}
            />
            <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-4">
              <Link to="/about" className="btn-secondary">
                More About Us <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-primary">
                Book Free Consultation
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="section bg-surface/30">
        <div className="container-px mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle
              eyebrow="Our Services"
              scriptAccent="Tailored Elegance"
              title="Domestic and corporate interiors, done end to end."
              description="From modular kitchens to full office fit-outs — every service is designed, planned and executed by our in-house team."
            />
            <Reveal delay={0.1}>
              <Link to="/services" className="btn-secondary shrink-0">
                View All Services <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <Carousel
            items={featured}
            className="mt-12"
            renderItem={(service, i) => (
              <div className="w-[280px] sm:w-[320px] md:w-[340px]">
                <ServiceCard service={service} index={i} onOpen={setActiveService} />
              </div>
            )}
          />
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container-px mx-auto">
          <SectionTitle
            eyebrow="How We Work"
            scriptAccent="Our Seamless Flow"
            title="From concept to handover, in four clear stages."
            align="center"
          />
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

      {/* Gallery preview */}
      <section className="section bg-surface/30">
        <div className="container-px mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle
              eyebrow="Our Work"
              scriptAccent="Bespoke Portfolios"
              title="A glimpse into recently completed spaces."
            />
            <Reveal delay={0.1}>
              <Link to="/gallery" className="btn-secondary shrink-0">
                View Full Gallery <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <Carousel
            items={previewImages}
            className="mt-12"
            renderItem={(item) => {
              const globalIndex = galleryItems.findIndex((g) => g.id === item.id)
              return (
                <div className="group relative w-[220px] overflow-hidden rounded-2xl border border-surface-border sm:w-[260px] md:w-[300px]">
                  <button type="button" onClick={() => setActiveImg(globalIndex)} className="block w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </button>
                </div>
              )
            }}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container-px mx-auto">
          <Reveal className="card-glass relative overflow-hidden px-8 py-16 text-center md:px-16">
            <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-30" />
            <div className="pointer-events-none absolute left-1/2 top-0 h-full w-full -translate-x-1/2 bg-radial-glow" />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold text-bone md:text-4xl">
                Ready to design a space you'll love coming home to?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-bone-muted">
                Book a free consultation with SS Interiors — no obligation, just a conversation about your space.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary">
                  Book Free Consultation <ArrowRight size={16} />
                </Link>
                <a href={`tel:${organization.contact.phone}`} className="btn-secondary">
                  Call {organization.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
      <Lightbox items={galleryItems} activeIndex={activeImg} onClose={() => setActiveImg(null)} onNavigate={setActiveImg} />
    </>
  )
}
