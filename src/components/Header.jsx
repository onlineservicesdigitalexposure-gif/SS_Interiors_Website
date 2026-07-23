import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import organization from '../data/organization.js'

const SERVICE_LINKS = [
  // { to: '/services', label: 'All Services' },
  { to: '/services/domestic', label: 'Domestic Interiors' },
  { to: '/services/corporate', label: 'Corporate Interiors' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const closeTimer = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [location.pathname])

  const openServicesMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }

  const closeServicesMenu = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150)
  }

  const isServicesActive = location.pathname.startsWith('/services')

 const linkClass = ({ isActive }) =>
    `relative font-sans text-base md:text-lg font-medium tracking-wide transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-bronze after:transition-all after:duration-300 ${
      isActive
        ? 'text-bone after:w-full'
        : 'text-bone/70 after:w-0 hover:text-bone hover:after:w-full'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-surface-border bg-ink/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-px mx-auto flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/images/logo.png"
            alt={`${organization.name} logo`}
            className="h-20 w-auto md:h-20"
          />
        </Link>

        <nav className="hidden items-center  gap-8 lg:flex">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>

          {/* Services dropdown */}
          <div className="relative" onMouseEnter={openServicesMenu} onMouseLeave={closeServicesMenu}>
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              className={`relative flex items-center gap-1.5 font-body text-lg md:text-xl font-medium tracking-wide transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-bronze after:transition-all after:duration-300 ${
                isServicesActive
                  ? 'text-bone after:w-full'
                  : 'text-bone/70 after:w-0 hover:text-bone hover:after:w-full'
              }`}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown
                size={15}
                className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 top-full mt-3 w-56 overflow-hidden rounded-2xl border border-surface-border bg-ink/95 p-2 shadow-2xl backdrop-blur-md"
                >
                  {SERVICE_LINKS.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      end={link.to === '/services'}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-2.5 font-body text-sm transition-colors ${
                          isActive ? 'bg-surface text-bronze-light' : 'text-bone/80 hover:bg-surface/60 hover:text-bone'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/gallery" className={linkClass}>
            Gallery
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>

        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-surface-border text-bone lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-surface-border bg-ink/97 backdrop-blur-md lg:hidden"
          >
            <nav className="flex flex-col gap-2 p-4">
              <NavLink
                to="/"
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3.5 font-display text-lg font-semibold transition-colors ${
                    isActive ? 'bg-surface text-bronze-light' : 'text-bone/80 hover:bg-surface/60'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3.5 font-display text-lg font-semibold transition-colors ${
                    isActive ? 'bg-surface text-bronze-light' : 'text-bone/80 hover:bg-surface/60'
                  }`
                }
              >
                About
              </NavLink>

              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 font-display text-lg font-semibold transition-colors ${
                    isServicesActive ? 'bg-surface text-bronze-light' : 'text-bone/80 hover:bg-surface/60'
                  }`}
                  aria-expanded={mobileServicesOpen}
                >
                  Services
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden pl-4"
                    >
                      {SERVICE_LINKS.map((link) => (
                        <NavLink
                          key={link.to}
                          to={link.to}
                          end={link.to === '/services'}
                          onClick={() => setOpen(false)}
                          className={({ isActive }) =>
                            `block rounded-xl px-4 py-3 font-body text-base transition-colors ${
                              isActive ? 'text-bronze-light' : 'text-bone/70 hover:text-bone'
                            }`
                          }
                        >
                          {link.label}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink
                to="/gallery"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3.5 font-display text-lg font-semibold transition-colors ${
                    isActive ? 'bg-surface text-bronze-light' : 'text-bone/80 hover:bg-surface/60'
                  }`
                }
              >
                Gallery
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3.5 font-display text-lg font-semibold transition-colors ${
                    isActive ? 'bg-surface text-bronze-light' : 'text-bone/80 hover:bg-surface/60'
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}