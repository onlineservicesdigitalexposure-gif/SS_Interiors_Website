import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

export default function StatCounter({ value, suffix = '', label }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.floor(v)),
    })
    return () => controls.stop()
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-1"
    >
      <span className="font-display text-4xl font-extrabold text-gradient-bronze md:text-5xl">
        {display}
        {suffix}
      </span>
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-bone-muted">{label}</span>
    </motion.div>
  )
}
