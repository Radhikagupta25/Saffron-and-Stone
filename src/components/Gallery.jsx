import { useEffect, useRef, useState, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import Reveal from './Reveal'
import SmartImage from './SmartImage'
import { gallery, unsplash } from '../data/restaurant'

export default function Gallery() {
    const [active, setActive] = useState(null)
    const closeRef = useRef(null)
    const triggerRef = useRef(null)

    const close = useCallback(() => {
        setActive(null)
        triggerRef.current?.focus()
    }, [])
    const step = useCallback((d) => setActive((a) => (a === null ? a : (a + d + gallery.length) % gallery.length)), [])

    useEffect(() => {
        if (active === null) return
        closeRef.current?.focus()
        const onKey = (e) => {
            if (e.key === 'Escape') close()
            if (e.key === 'ArrowRight') step(1)
            if (e.key === 'ArrowLeft') step(-1)
        }
        document.addEventListener('keydown', onKey)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', onKey)
            document.body.style.overflow = ''
        }
    }, [active, close, step])

    return (
        <section id="gallery" className="bg-ivory-deep py-24 lg:py-36">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <Reveal>
                    <p className="eyebrow mb-5">Gallery</p>
                    <h2 className="h-display mb-14 text-4xl text-forest sm:text-5xl lg:text-6xl">A glimpse <span className="italic">inside.</span></h2>
                </Reveal>

                <div className="grid auto-rows-[200px] grid-cols-2 gap-3 md:auto-rows-[240px] md:grid-cols-4">
                    {gallery.map((g, i) => (
                        <button
                            key={g.id}
                            type="button"
                            onClick={(e) => { triggerRef.current = e.currentTarget; setActive(i) }}
                            className={`group relative overflow-hidden ${g.span}`}
                            aria-label={`Open image: ${g.alt}`}
                        >
                            <SmartImage src={unsplash(g.id, 900)} alt={g.alt} className="h-full w-full object-cover transition-transform duration-[1000ms] group-hover:scale-105" />
                            <span className="absolute inset-0 flex items-center justify-center bg-forest-dark/0 text-ivory opacity-0 transition-all duration-500 group-hover:bg-forest-dark/45 group-hover:opacity-100 group-focus-visible:bg-forest-dark/45 group-focus-visible:opacity-100">
                                <ZoomIn size={28} aria-hidden="true" />
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {active !== null && (
                <div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-4" onClick={close}>
                    <button ref={closeRef} onClick={close} aria-label="Close image" className="absolute right-5 top-5 p-2 text-ivory hover:text-saffron"><X size={30} /></button>
                    <button onClick={(e) => { e.stopPropagation(); step(-1) }} aria-label="Previous image" className="absolute left-3 p-2 text-ivory hover:text-saffron sm:left-8"><ChevronLeft size={38} /></button>
                    <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
                        <SmartImage src={unsplash(gallery[active].id, 1800)} alt={gallery[active].alt} className="max-h-[80vh] w-auto max-w-full object-contain" />
                        <figcaption className="mt-4 text-center text-sm text-ivory/70">{gallery[active].alt} · {active + 1} / {gallery.length}</figcaption>
                    </figure>
                    <button onClick={(e) => { e.stopPropagation(); step(1) }} aria-label="Next image" className="absolute right-3 p-2 text-ivory hover:text-saffron sm:right-8"><ChevronRight size={38} /></button>
                </div>
            )}
        </section>
    )
}