import { useRef, useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Carousel({ items, renderItem, autoplay = true, interval = 3500, className = '' }) {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = useCallback((index, behavior = 'smooth') => {
    const track = trackRef.current
    if (!track) return
    const slide = track.children[index]
    if (!slide) return
    const maxScroll = track.scrollWidth - track.clientWidth
    const target = Math.min(Math.max(slide.offsetLeft - track.offsetLeft, 0), maxScroll)
    track.scrollTo({ left: target, behavior })
  }, [])

  const scrollByDir = useCallback((dir, behavior = 'smooth') => {
    const track = trackRef.current
    if (!track) return
    const slideWidth = track.children[0]?.offsetWidth || 300
    track.scrollBy({ left: dir * (slideWidth + 24), behavior })
  }, [])

  useEffect(() => {
    if (!autoplay || items.length <= 1) return
    const id = setInterval(() => {
      const track = trackRef.current
      if (!track) return
      const maxScroll = track.scrollWidth - track.clientWidth
      const atEnd = track.scrollLeft >= maxScroll - 4
      if (atEnd) {
        // Jump back instantly instead of animating the whole way — avoids the "stuck then lurch" look
        track.scrollTo({ left: 0, behavior: 'auto' })
      } else {
        scrollByDir(1)
      }
    }, interval)
    return () => clearInterval(id)
  }, [autoplay, interval, items.length, scrollByDir])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onScroll = () => {
      const slideWidth = track.children[0]?.offsetWidth || 1
      const index = Math.round(track.scrollLeft / (slideWidth + 24))
      setActiveIndex(Math.max(0, Math.min(index, items.length - 1)))
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [items.length])

  return (
    <div className={`relative ${className}`}>
      <div
        ref={trackRef}
        className="hide-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
      >
        {items.map((item, i) => (
          <motion.div
            key={item.id ?? i}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0 snap-start"
          >
            {renderItem(item, i)}
          </motion.div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-6">
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'w-6 bg-bronze' : 'w-1.5 bg-surface-border'
              }`}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => scrollByDir(-1)}
            aria-label="Previous"
            className="grid h-10 w-10 place-items-center rounded-full border border-surface-border text-bone-muted transition-colors hover:border-bronze hover:text-bronze-light"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scrollByDir(1)}
            aria-label="Next"
            className="grid h-10 w-10 place-items-center rounded-full border border-surface-border text-bone-muted transition-colors hover:border-bronze hover:text-bronze-light"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}