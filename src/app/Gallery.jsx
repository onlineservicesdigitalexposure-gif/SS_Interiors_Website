import Reveal from '../components/Reveal.jsx'
import GalleryGrid from '../components/GalleryGrid.jsx'

export default function Gallery() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40">
        <div className="grid-backdrop absolute inset-0 opacity-50" />
        <div className="container-px relative mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Our Work</span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-bone sm:text-5xl">
              A closer look at <span className="text-gradient-bronze">finished spaces.</span>
            </h1>
            <p className="mt-6 font-body text-base leading-relaxed text-bone-muted md:text-lg">
              A look at recently completed projects — click any image for a full-screen view.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-px mx-auto">
          <GalleryGrid />
        </div>
      </section>
    </>
  )
}
