import { motion } from 'framer-motion'

// The site's signature element: an architectural floor plan that draws
// itself in, line by line, like a blueprint resolving into a finished room.
export default function AnimatedBlueprint({ className = '' }) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i = 1) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.2, duration: 1.6, ease: [0.65, 0, 0.35, 1] },
        opacity: { delay: i * 0.2, duration: 0.3 },
      },
    }),
  }

  return (
    <motion.svg
      viewBox="0 0 560 520"
      className={className}
      initial="hidden"
      animate="visible"
      fill="none"
    >
      {/* outer walls */}
      <motion.rect
        x="40" y="40" width="480" height="440" rx="4"
        stroke="#C08A4E" strokeWidth="2" custom={0} variants={draw}
      />
      {/* internal wall - kitchen divide */}
      <motion.path
        d="M40 220 H220 M220 220 V40" stroke="#4C6FFF" strokeOpacity="0.6" strokeWidth="1.5"
        custom={1} variants={draw}
      />
      {/* internal wall - bedroom divide */}
      <motion.path
        d="M320 480 V300 H520" stroke="#4C6FFF" strokeOpacity="0.6" strokeWidth="1.5"
        custom={1.3} variants={draw}
      />
      {/* door swing arcs */}
      <motion.path
        d="M220 300 v70 M220 370 A70 70 0 0 0 290 300"
        stroke="#E9E6E0" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="4 4"
        custom={2} variants={draw}
      />
      <motion.path
        d="M320 220 h60 M380 220 A60 60 0 0 1 320 280"
        stroke="#E9E6E0" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="4 4"
        custom={2.2} variants={draw}
      />
      {/* window ticks */}
      {[90, 130, 170].map((x, i) => (
        <motion.line
          key={x}
          x1={x} y1="40" x2={x + 24} y2="40"
          stroke="#7C93FF" strokeWidth="4"
          custom={2.6 + i * 0.1} variants={draw}
        />
      ))}
      {/* furniture markers */}
      <motion.circle cx="130" cy="130" r="4" fill="#C08A4E" custom={3.2} variants={draw} />
      <motion.circle cx="420" cy="390" r="4" fill="#4C6FFF" custom={3.4} variants={draw} />
      <motion.rect x="380" y="80" width="90" height="50" rx="4" stroke="#E9E6E0" strokeOpacity="0.3" custom={3} variants={draw} />
      <motion.rect x="80" y="300" width="100" height="140" rx="4" stroke="#E9E6E0" strokeOpacity="0.3" custom={3.1} variants={draw} />

      {/* room labels */}
      <motion.text x="60" y="120" fill="#9B9791" fontSize="11" fontFamily="'Space Mono', monospace" letterSpacing="1"
        initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 1.6, duration: 0.6 }}>
        LIVING
      </motion.text>
      <motion.text x="240" y="90" fill="#9B9791" fontSize="11" fontFamily="'Space Mono', monospace" letterSpacing="1"
        initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 1.8, duration: 0.6 }}>
        KITCHEN
      </motion.text>
      <motion.text x="340" y="460" fill="#9B9791" fontSize="11" fontFamily="'Space Mono', monospace" letterSpacing="1"
        initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 2, duration: 0.6 }}>
        BEDROOM
      </motion.text>
    </motion.svg>
  )
}
