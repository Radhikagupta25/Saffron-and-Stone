import { Star } from 'lucide-react'
import Reveal from './Reveal'

const reviews = [
    { name: 'Ananya Mehra', note: 'Anniversary dinner', rating: 5, text: 'The dum handi gosht was opened at our table and the whole room smelled incredible. Service was warm without ever being intrusive. We are already planning our next visit.' },
    { name: 'Rohit Sharma', note: 'Family lunch', rating: 5, text: 'Finally a place where the kids and grandparents are equally happy. Biryani was perfectly layered.' },
    { name: 'Priya Nair', note: 'Dinner with friends', rating: 4, text: 'Beautiful room, thoughtful vegetarian options and a dessert I still think about.' },
]

const Stars = ({ n }) => (
    <div className="flex gap-1" role="img" aria-label={`${n} out of 5 stars`}>
        {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} size={16} className={i <= n ? 'fill-saffron text-saffron' : 'text-saffron/30'} aria-hidden="true" />
        ))}
    </div>
)

export default function Testimonials() {
    const [lead, ...others] = reviews
    return (
        <section id="reviews" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
            <Reveal>
                <p className="eyebrow mb-5 text-center">Guest Reviews</p>
                <h2 className="h-display mb-16 text-center text-4xl text-forest sm:text-5xl">Kind words from our <span className="italic">guests.</span></h2>
            </Reveal>

            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                <Reveal className="lg:col-span-7">
                    <figure>
                        <span className="font-serif text-8xl leading-none text-saffron/60" aria-hidden="true">“</span>
                        <blockquote className="-mt-6 font-serif text-3xl leading-snug text-forest sm:text-4xl">{lead.text}</blockquote>
                        <figcaption className="mt-8 flex items-center gap-4">
                            <Stars n={lead.rating} />
                            <span className="text-sm text-charcoal/70"><strong className="font-medium text-forest">{lead.name}</strong> · {lead.note}</span>
                        </figcaption>
                    </figure>
                </Reveal>

                <div className="flex flex-col gap-10 border-t border-forest/15 pt-10 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">
                    {others.map((r, i) => (
                        <Reveal key={r.name} delay={0.1 * (i + 1)}>
                            <figure>
                                <Stars n={r.rating} />
                                <blockquote className="mt-4 text-lg leading-relaxed text-charcoal/80">{r.text}</blockquote>
                                <figcaption className="mt-4 text-sm text-charcoal/60"><strong className="font-medium text-forest">{r.name}</strong> · {r.note}</figcaption>
                            </figure>
                        </Reveal>
                    ))}
                </div>
            </div>
            <p className="mt-14 text-center text-xs text-charcoal/45">Sample testimonials shown for demonstration. Replace with genuine guest reviews.</p>
        </section>
    )
}