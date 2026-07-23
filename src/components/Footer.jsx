import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import organization from '../data/organization.js'
import SocialLinks from './SocialLinks.jsx'

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-surface-border bg-ink-950 bg-ink">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-40" />
      <div className="container-px relative mx-auto grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div>
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt={`${organization.name} logo`} className="h-16 w-auto" />
            <span className="font-display text-xl font-bold tracking-wide text-bone">
              {organization.name}
            </span>
          </div>
          <p className="mt-5 max-w-sm font-body text-base sm:text-lg leading-relaxed text-bone/90">
            {organization.shortDescription}
          </p>
          <div className="mt-6">
            <p className="eyebrow mb-3">Follow Us</p>
            <SocialLinks />
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-bold uppercase tracking-widest text-bone">Quick Links</h4>
          <ul className="mt-5 space-y-3">
            {QUICK_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="font-body text-base sm:text-lg text-bone-muted transition-colors hover:text-bronze-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-bold uppercase tracking-widest text-bone">Get In Touch</h4>
          <ul className="mt-5 space-y-4 font-body text-base sm:text-lg text-bone-muted">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-1 shrink-0 text-bronze" />
              <span>{organization.address.full}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="mt-1 shrink-0 text-bronze" />
              <a href={`tel:${organization.contact.phone}`} className="hover:text-bronze-light">
                {organization.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="mt-1 shrink-0 text-bronze" />
              <a href={`mailto:${organization.contact.email}`} className="hover:text-bronze-light break-all">
                {organization.contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-bold uppercase tracking-widest text-bone">Find Us</h4>
          <div className="mt-5 overflow-hidden rounded-xl border border-surface-border">
            <iframe
              title="SS Interiors location map"
              src={organization.mapEmbedUrl}
              width="100%"
              height="180"
              style={{ border: 0, filter: 'grayscale(0.4) invert(0.92) contrast(0.9)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="relative border-t border-surface-border">
        <div className="container-px mx-auto flex flex-col items-center justify-between gap-3 py-6 font-body text-base sm:text-lg text-bone-faint md:flex-row">
          <p>© {new Date().getFullYear()} {organization.name}.
            Designed &amp; developed by{' '}
            
            <a href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone-faint transition-colors duration-200 hover:text-bronze-light"
            >
              Digital Exposure Online Services
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
