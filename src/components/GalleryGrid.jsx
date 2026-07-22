import { useState } from 'react'
import { motion } from 'framer-motion'
import { Expand } from 'lucide-react'
import { galleryItems } from '../data/gallery.js'
import Lightbox from './Lightbox.jsx'

export default function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <div>
      <motion.div layout className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {galleryItems.map((item, i) => (
          <motion.button
            layout
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(i)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
            className="group relative mb-5 block w-full overflow-hidden rounded-2xl border border-surface-border text-left"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/10 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="mb-2 grid h-9 w-9 place-items-center self-end rounded-full border border-bone/30 text-bone">
                <Expand size={15} />
              </span>
              <p className="font-display text-sm font-semibold text-bone">{item.title}</p>
            </div>
          </motion.button>
        ))}
      </motion.div>

      <Lightbox
        items={galleryItems}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </div>
  )
}