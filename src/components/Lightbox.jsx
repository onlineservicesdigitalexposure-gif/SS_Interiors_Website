import { useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Lightbox({ items, activeIndex, onClose, onNavigate }) {
  const item = activeIndex != null ? items[activeIndex] : null

  const goNext = useCallback(
    () => onNavigate((activeIndex + 1) % items.length),
    [activeIndex, items.length, onNavigate]
  )
  const goPrev = useCallback(
    () => onNavigate((activeIndex - 1 + items.length) % items.length),
    [activeIndex, items.length, onNavigate]
  )

  useEffect(() => {
    if (activeIndex == null) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [activeIndex, onClose, goNext, goPrev])

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="Close lightbox"
            className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full border border-bone/20 text-bone transition-colors hover:border-bronze hover:text-bronze-light"
          >
            <X size={20} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-bone/20 text-bone transition-colors hover:border-bronze hover:text-bronze-light md:left-6"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goNext() }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-bone/20 text-bone transition-colors hover:border-bronze hover:text-bronze-light md:right-6"
          >
            <ChevronRight size={22} />
          </button>

          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[85vh] max-w-4xl flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="max-h-[75vh] w-auto rounded-xl border border-surface-border object-contain"
            />
            <div className="mt-4 text-center">
              <p className="font-display text-lg font-semibold text-bone">{item.title}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-bronze-light">
                {activeIndex + 1} / {items.length}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
