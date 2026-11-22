import { Instagram, Facebook, Youtube } from 'lucide-react'
import { Wordmark } from './Navbar'
import { restaurant } from '../data/restaurant'

const socials = [
    { label: 'Instagram', icon: Instagram, href: restaurant.social.instagram },
    { label: 'Facebook', icon: Facebook, href: restaurant.social.facebook },
    { label: 'YouTube', icon: Youtube, href: restaurant.social.youtube },
]

export default function Footer() {
    return (
        <footer className="bg-forest-dark text-ivory/70">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-12 lg:px-10">
                <div className="md:col-span-5">
                    <Wordmark />
                    <p className="mt-5 max-w-sm text-sm leading-relaxed">{restaurant.description}</p>
                    <div className="mt-6 flex gap-3">
                        {socials.map(({ label, icon: Icon, href }) => (
                            <a key={label} href={href} aria-label={label} className="flex h-10 w-10 items-center justify-center border border-ivory/25 transition-colors hover:border-saffron hover:text-saffron"><Icon size={18} /></a>
                        ))}
                    </div>
                </div>
                <nav className="md:col-span-3" aria-label="Footer">
                    <h3 className="eyebrow mb-5">Explore</h3>
                    <ul className="space-y-3 text-sm">{restaurant.nav.map((l) => <li key={l.href}><a href={l.href} className="hover:text-saffron">{l.label}</a></li>)}</ul>
                </nav>
                <div className="md:col-span-4">
                    <h3 className="eyebrow mb-5">Contact</h3>
                    <ul className="space-y-3 text-sm">
                        <li>{restaurant.address.join(', ')}</li>
                        <li><a href={restaurant.phoneHref} className="hover:text-saffron">{restaurant.phone}</a></li>
                        <li><a href={`mailto:${restaurant.email}`} className="break-all hover:text-saffron">{restaurant.email}</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-ivory/10 py-6 text-center text-xs text-ivory/45">
                © {new Date().getFullYear()} {restaurant.name}. All rights reserved. Demo website — sample content.
            </div>
        </footer>
    )
}