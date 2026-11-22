import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react'
import Reveal from './Reveal'
import { restaurant } from '../data/restaurant'

export default function Contact() {
    const q = encodeURIComponent(restaurant.mapQuery)
    return (
        <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
            <div className="grid gap-14 lg:grid-cols-12">
                <div className="lg:col-span-5">
                    <Reveal><p className="eyebrow mb-5">Visit Us</p></Reveal>
                    <Reveal delay={0.1}><h2 className="h-display text-4xl text-forest sm:text-5xl">Find your way <span className="italic">to us.</span></h2></Reveal>

                    <Reveal delay={0.2}>
                        <ul className="mt-10 space-y-6 text-charcoal/80">
                            <li className="flex gap-4"><MapPin className="mt-1 shrink-0 text-saffron" size={20} aria-hidden="true" /><address className="not-italic">{restaurant.address.map((l) => <span key={l} className="block">{l}</span>)}</address></li>
                            <li className="flex gap-4"><Phone className="mt-1 shrink-0 text-saffron" size={20} aria-hidden="true" /><a href={restaurant.phoneHref} className="hover:text-saffron">{restaurant.phone}</a></li>
                            <li className="flex gap-4"><Mail className="mt-1 shrink-0 text-saffron" size={20} aria-hidden="true" /><a href={`mailto:${restaurant.email}`} className="break-all hover:text-saffron">{restaurant.email}</a></li>
                            <li className="flex gap-4">
                                <Clock className="mt-1 shrink-0 text-saffron" size={20} aria-hidden="true" />
                                <div>{restaurant.hours.map((h) => <p key={h.days}><span className="font-medium text-forest">{h.days}</span><br /><span className="text-sm">{h.time}</span></p>)}</div>
                            </li>
                        </ul>
                        <div className="mt-10 flex flex-wrap gap-4">
                            <a href={`https://www.google.com/maps/dir/?api=1&destination=${q}`} target="_blank" rel="noopener noreferrer" className="btn btn-forest"><Navigation size={16} /> Get Directions</a>
                            <a href={restaurant.phoneHref} className="btn btn-outline-dark"><Phone size={16} /> Call Now</a>
                        </div>
                    </Reveal>
                </div>

                <Reveal className="lg:col-span-7">
                    <div className="h-full min-h-[380px] border border-forest/15 bg-ivory-deep">
                        <iframe
                            title="Map showing restaurant location (placeholder)"
                            src={`https://www.google.com/maps?q=${q}&output=embed`}
                            className="h-full min-h-[380px] w-full grayscale-[40%]"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    )
}