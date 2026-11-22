import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { restaurant } from '../data/restaurant'

export function Wordmark({ light = true }) {
    return (
        <a href="#home" className={`font-serif text-2xl tracking-tight ${light ? 'text-ivory' : 'text-forest'}`} aria-label={`${restaurant.name} home`}>
            Saffron <span className="italic text-saffron">&</span> Stone
        </a>
    )
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && setOpen(false)
        document.addEventListener('keydown', onKey)
        document.body.style.overflow = open ? 'hidden' : ''
        return () => {
            document.removeEventListener('keydown', onKey)
            document.body.style.overflow = ''
        }
    }, [open])

    return (
        <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? 'bg-forest-dark/95 py-3 shadow-lg shadow-black/10 backdrop-blur-sm' : 'bg-transparent py-5'}`}>
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10" aria-label="Primary">
                <Wordmark />
                <ul className="hidden items-center gap-9 lg:flex">
                    {restaurant.nav.map((l) => (
                        <li key={l.href}>
                            <a href={l.href} className="text-sm tracking-wide text-ivory/80 transition-colors hover:text-saffron">{l.label}</a>
                        </li>
                    ))}
                </ul>
                <a href="#reserve" className="btn btn-saffron hidden !py-3 lg:inline-flex">Reserve a Table</a>
                <button
                    className="text-ivory lg:hidden"
                    onClick={() => setOpen((o) => !o)}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                >
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'calc(100vh - 64px)' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden bg-forest-dark lg:hidden"
                    >
                        <ul className="flex flex-col gap-1 px-6 pt-8">
                            {restaurant.nav.map((l) => (
                                <li key={l.href} className="border-b border-ivory/10">
                                    <a href={l.href} onClick={() => setOpen(false)} className="block py-4 font-serif text-3xl text-ivory">{l.label}</a>
                                </li>
                            ))}
                            <li className="pt-8">
                                <a href="#reserve" onClick={() => setOpen(false)} className="btn btn-saffron w-full">Reserve a Table</a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}