import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import organization from '../data/organization.js'

const WhatsappIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.47 14.38c-.29-.15-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.15-.2.29-.75.93-.92 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.48.1-.2.05-.36-.02-.51-.08-.15-.65-1.58-.9-2.16-.24-.58-.48-.5-.65-.51-.17-.01-.36-.01-.56-.01-.2 0-.51.07-.78.36-.26.29-1.02 1-1.02 2.43 0 1.43 1.05 2.82 1.2 3.01.15.2 2.06 3.15 5 4.42.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.38-.07-.13-.26-.2-.55-.35z"/>
    <path d="M12.02 2C6.5 2 2.04 6.46 2.04 12c0 1.77.46 3.45 1.27 4.9L2 22l5.24-1.28A9.9 9.9 0 0 0 12.02 22C17.55 22 22 17.54 22 12S17.55 2 12.02 2zm0 18.06c-1.6 0-3.1-.43-4.4-1.19l-.32-.18-3.11.76.83-3.03-.2-.31A7.98 7.98 0 0 1 4 12c0-4.42 3.6-8.02 8.02-8.02 4.42 0 8.02 3.6 8.02 8.02 0 4.42-3.6 8.06-8.02 8.06z"/>
  </svg>
)

export default function FloatingActions() {
  const whatsappNumber = `91${organization.contact.phone}`
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hi SS Interiors, I would like to know more about your interior design services.'
  )}`

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-4 md:bottom-8 md:right-8">
      <motion.a
        href={`tel:${organization.contact.phone}`}
        aria-label="Call SS Interiors"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative grid h-14 w-14 place-items-center rounded-full bg-volt text-ink shadow-[0_8px_30px_rgba(76,111,255,0.45)]"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-volt/60" />
        <Phone size={24} fill="currentColor" />
      </motion.a>

      <motion.a
        href={'https://wa.me/919038444874'}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SS Interiors on WhatsApp"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)]"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/60" />
        <WhatsappIcon />
      </motion.a>
    </div>
  )
}