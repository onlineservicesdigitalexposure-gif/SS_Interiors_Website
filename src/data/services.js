// Each service can be clicked to open a detail modal with a "Book Now" CTA to /contact.
// image paths point to /public/images/services/ — replace with real photos any time.

export const serviceCategories = [
  {
    id: 'domestic',
    title: 'Domestic Spaces',
    tagline: 'Homes designed around how you actually live.',
    image: '/images/gallery/project-08.jpeg',
    summary:
      'From modular kitchens to balconies — every domestic interior service, designed and executed end to end.',
  },
  {
    id: 'corporate',
    title: 'Corporate Spaces',
    tagline: 'Workspaces built for focus, brand and comfort.',
    image: '/images/gallery/project-31.jpeg',
    summary:
      'Boss cabins, workstations, lounges and full office fit-outs — designed to reflect your brand at scale.',
  },
]

export const services = [
  {
    id: 'modular-kitchen',
    title: 'Modular Kitchen',
    category: 'Domestic',
    image: '/images/gallery/project-46.jpeg',
    summary: 'Smart, spill-proof kitchens designed around how you actually cook.',
    description:
      'We design modular kitchens that maximise every inch — from corner carousels to pull-out pantries — using moisture-resistant boards and soft-close hardware built for Indian cooking.',
    highlights: [
      'Layout options: L-shape, U-shape, parallel & island',
      'Moisture & termite resistant carcass materials',
      'Soft-close hinges, drawers & tall units',
      'Granite, quartz or solid-surface countertops',
    ],
  },
  {
    id: 'living-dining',
    title: 'Living & Dining',
    category: 'Domestic',
    image: '/images/gallery/project-07.jpeg',
    summary: 'Open, elegant living spaces designed for how your family gathers.',
    description:
      'Your living and dining area sets the tone for the whole home. We plan seating, TV units, dining layouts and lighting together, so the space feels open, warm and effortless to entertain in.',
    highlights: [
      'Custom TV & entertainment units',
      'False ceiling with cove & accent lighting',
      'Dining layouts for 4 to 10 seaters',
      'Curated furniture & soft furnishing plans',
    ],
  },
  {
    id: 'bedroom',
    title: 'Bedroom Interiors',
    category: 'Domestic',
    image: '/images/gallery/project-08.jpeg',
    summary: 'Calm, personal bedrooms built around rest and storage.',
    description:
      'From bed-back panels to walk-in wardrobes, we design bedrooms that feel like a retreat — with layered lighting, hidden storage and finishes chosen to help you unwind.',
    highlights: [
      'Custom bed-back & headboard panelling',
      'Walk-in or sliding-door wardrobes',
      'Layered ambient + task lighting',
      'Kids\', master & guest bedroom formats',
    ],
  },
  {
    id: 'wardrobe',
    title: 'Wardrobe & Storage',
    category: 'Domestic',
    image: '/images/gallery/project-25.jpeg',
    summary: 'Storage that is organised, not just built-in.',
    description:
      'We design wardrobes and storage units around your actual belongings — dedicated zones for clothes, accessories, luggage and linen — finished in laminate, veneer or lacquer.',
    highlights: [
      'Sliding, hinged & walk-in configurations',
      'Internal organisers: trouser racks, jewellery trays, shoe racks',
      'Laminate, veneer, acrylic & lacquer finishes',
      'Loft and overhead storage optimisation',
    ],
  },
  {
    id: 'false-ceiling',
    title: 'False Ceiling & Lighting',
    category: 'Domestic',
    image: '/images/gallery/project-39.jpeg',
    summary: 'Ceilings and light layers that reshape how a room feels.',
    description:
      'A well-designed ceiling changes the entire character of a room. We design gypsum and POP false ceilings with cove lighting, spotlights and profile lights layered for mood and function.',
    highlights: [
      'Gypsum, POP & PVC false ceiling options',
      'Cove, profile & spot lighting design',
      'Acoustic & moisture-resistant options',
      'Ceiling design synced with HVAC & fire safety',
    ],
  },
  {
    id: 'rest-room',
    title: 'Bathroom Interiors',
    category: 'Domestic',
    image: '/images/gallery/project-36.jpeg',
    summary: 'Waterproof, spa-like bathrooms with premium fittings.',
    description:
      'We combine waterproofing expertise with clean, modern design — anti-skid tiles, vanity units, concealed plumbing and fittings from trusted brands, all planned to last.',
    highlights: [
      'Full waterproofing & concealed plumbing',
      'Anti-skid & designer tile options',
      'Custom vanity units & mirror lighting',
      'Premium sanitaryware & fitting brands',
    ],
  },
  {
    id: 'balcony',
    title: 'Balcony & Outdoor',
    category: 'Domestic',
    image: '/images/gallery/project-22.jpeg',
    summary: 'Small outdoor corners turned into everyday retreats.',
    description:
      'Balconies and terraces are often the most under-used space in a home. We design weather-resistant seating, planters and lighting to turn them into a space you actually use.',
    highlights: [
      'Weather-resistant decking & seating',
      'Vertical gardens & planter design',
      'Outdoor-rated lighting & fans',
      'Privacy screens & pergola options',
    ],
  },
  {
    id: 'corporate',
    title: 'Corporate & Office',
    category: 'Corporate',
    image: '/images/gallery/project-31.jpeg',
    summary: 'Workspaces designed for focus, brand and comfort.',
    description:
      'From boss cabins to open-plan workstations and lounges, we design offices that reflect your brand while staying practical to build, wire and maintain at scale.',
    highlights: [
      'Boss cabins, executive rooms & workstations',
      'Reception, lounge & breakout area design',
      'Acoustic panelling & cabling-friendly layouts',
      'Branding integration in materials & signage',
    ],
  },
]

export const getServiceById = (id) => services.find((s) => s.id === id)
export const getDomesticServices = () => services.filter((s) => s.category === 'Domestic')
export const getCorporateService = () => services.find((s) => s.category === 'Corporate')

export default services