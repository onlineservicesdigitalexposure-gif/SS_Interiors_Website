import organization from '../data/organization.js'

// Lightweight inline brand icons (lucide-react no longer ships brand marks).
const iconProps = { width: 17, height: 17, viewBox: '0 0 24 24', fill: 'currentColor' }

const FacebookIcon = () => (
  <svg {...iconProps}>
    <path d="M13.5 21v-7.4h2.5l.4-2.9h-2.9v-1.9c0-.85.24-1.43 1.46-1.43h1.55V4.8c-.27-.04-1.2-.12-2.27-.12-2.25 0-3.79 1.37-3.79 3.89v2.17H8v2.9h2.45V21h3.05z" />
  </svg>
)
const InstagramIcon = () => (
  <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
)
// const YoutubeIcon = () => (
//   <svg {...iconProps}>
//     <path d="M21.6 7.6a2.7 2.7 0 0 0-1.9-1.9C18 5.2 12 5.2 12 5.2s-6 0-7.7.5A2.7 2.7 0 0 0 2.4 7.6 28 28 0 0 0 2 12a28 28 0 0 0 .4 4.4 2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.4zM10 15V9l5.2 3-5.2 3z" />
//   </svg>
// )

// Drop your profile URLs into src/data/organization.js -> socials.
// Any social left blank simply renders a disabled, dimmed icon so the
// layout stays consistent until you're ready to add the link.
const PLATFORMS = [
  { key: 'facebook', label: 'Facebook', Icon: FacebookIcon },
  { key: 'instagram', label: 'Instagram', Icon: InstagramIcon },
  // { key: 'youtube', label: 'YouTube', Icon: YoutubeIcon },
]

export default function SocialLinks({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {PLATFORMS.map(({ key, label, Icon }) => {
        const href = organization.socials?.[key]
        const active = Boolean(href)
        const Tag = active ? 'a' : 'span'
        return (
          <Tag
            key={key}
            {...(active ? { href, target: '_blank', rel: 'noopener noreferrer' } : {})}
            aria-label={label}
            title={active ? label : `${label} (link coming soon)`}
            className={`grid h-10 w-10 place-items-center rounded-full border transition-all duration-300 ${
              active
                ? 'border-surface-border text-bone-muted hover:border-bronze hover:text-bronze-light hover:shadow-[0_0_20px_rgba(192,138,78,0.3)]'
                : 'cursor-default border-surface-border/50 text-bone-faint/40'
            }`}
          >
            <Icon size={17} />
          </Tag>
        )
      })}
    </div>
  )
}
