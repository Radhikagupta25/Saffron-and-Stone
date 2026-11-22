import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import SmartImage from './SmartImage'
import { images, restaurant } from '../data/restaurant'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
    return (
        <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden bg-forest-dark">
            <motion.div className="absolute inset-0" initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 2.2, ease }}>
                <SmartImage src={images.hero} alt="Candlelit table at Saffron & Stone" className="h-full w-full object-cover" loading="eager" fetchpriority="high" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/55 to-forest-dark/10" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-forest-dark/80 to-transparent" aria-hidden="true" />

            <div className="relative mx-auto w-full max-w-7xl px-6 pb-28 pt-40 lg:px-10 lg:pb-32">
                <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease }} className="eyebrow mb-6 flex items-center gap-4">
                    <span className="h-px w-10 bg-saffron" aria-hidden="true" /> An Experience Worth Savouring
                </motion.p>
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.45, ease }} className="h-display max-w-3xl text-5xl text-ivory sm:text-6xl lg:text-[5.5rem]">
                    A Celebration of Flavour, <span className="italic text-saffron-soft">Rooted in Tradition.</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.7, ease }} className="mt-7 max-w-lg text-base leading-relaxed text-ivory/80 sm:text-lg">
                    {restaurant.description}
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.9, ease }} className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <a href="#menu" className="btn btn-saffron">Explore Our Menu</a>
                    <a href="#reserve" className="btn btn-outline-light">Reserve a Table</a>
                </motion.div>
            </div>

            <a href="#story" aria-label="Scroll to our story" className="absolute bottom-8 right-6 hidden items-center gap-3 text-xs uppercase tracking-widest2 text-ivory/70 transition-colors hover:text-saffron lg:flex lg:right-10">
                Scroll <ArrowDown size={16} />
            </a>
        </section>
    )
}