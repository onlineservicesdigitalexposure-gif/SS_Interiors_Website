import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import ContactForm from '../components/ContactForm.jsx'
import SocialLinks from '../components/SocialLinks.jsx'
import organization from '../data/organization.js'

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40">
        <div className="grid-backdrop absolute inset-0 opacity-50" />
        <div className="container-px relative mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Get In Touch</span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-bone sm:text-5xl">
              Let's design your <span className="text-gradient-bronze">next space.</span>
            </h1>
            <p className="mt-6 font-body text-base leading-relaxed text-bone-muted md:text-lg">
              Book a free consultation or send us your project details — we usually reply within a day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-px mx-auto grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="space-y-6">
            <div className="card-glass p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-bronze/40 bg-bronze/10 text-bronze-light">
                  <MapPin size={18} />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-widest text-bone">Studio Address</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bone-muted">{organization.address.full}</p>
                </div>
              </div>
            </div>

            <div className="card-glass p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-volt/40 bg-volt/10 text-volt-light">
                  <Phone size={18} />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-widest text-bone">Call Us</h3>
                  <a href={`tel:${organization.contact.phone}`} className="mt-2 block text-sm text-bone-muted hover:text-bronze-light">
                    {organization.contact.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            <div className="card-glass p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-bronze/40 bg-bronze/10 text-bronze-light">
                  <Mail size={18} />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-widest text-bone">Email Us</h3>
                  <a href={`mailto:${organization.contact.email}`} className="mt-2 block break-all text-sm text-bone-muted hover:text-bronze-light">
                    {organization.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="card-glass p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-volt/40 bg-volt/10 text-volt-light">
                  <Clock size={18} />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-widest text-bone">Studio Hours</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bone-muted">Mon – Sat: 10:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>

            <div>
              <p className="eyebrow mb-3">Follow Us</p>
              <SocialLinks />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-px mx-auto">
          <Reveal className="overflow-hidden rounded-2xl border border-surface-border">
            <iframe
              title="SS Interiors location map"
              src={organization.mapEmbedUrl}
              width="100%"
              height="380"
              style={{ border: 0, filter: 'grayscale(0.4) invert(0.92) contrast(0.9)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
