import { Leaf, ChefHat, ScrollText, HeartHandshake } from 'lucide-react'
import Reveal from './Reveal'
import SmartImage from './SmartImage'
import { images } from '../data/restaurant'

const features = [
    { icon: Leaf, title: 'Fresh Ingredients', text: 'Sourced daily from trusted local growers.' },
    { icon: ChefHat, title: 'Experienced Chefs', text: 'Two decades of regional Indian craft.' },
    { icon: ScrollText, title: 'Authentic Recipes', text: 'Family methods, never shortcuts.' },
    { icon: HeartHandshake, title: 'Warm Hospitality', text: 'Every guest treated as family.' },
]

export default function About() {
    return (
        <section id="story" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
            <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
                <Reveal className="relative lg:col-span-6">
                    <SmartImage src={images.chef} alt="Our head chef finishing a dish" className="aspect-[4/5] w-full object-cover" />
                    <SmartImage src={images.dining} alt="Our dining room" className="absolute -bottom-10 -right-4 hidden aspect-square w-2/5 border-8 border-ivory object-cover shadow-xl sm:block lg:-right-10" />
                </Reveal>

                <div className="lg:col-span-6 lg:pl-6">
                    <Reveal><p className="eyebrow mb-5">Our Story</p></Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="h-display text-4xl text-forest sm:text-5xl lg:text-6xl">
                            Where the <span className="italic">hearth</span> meets the table.
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="mt-8 text-lg leading-relaxed text-charcoal/80">
                            Saffron &amp; Stone began with a simple belief: the best Indian food is patient. Spices are toasted whole and ground by hand, gravies are built over hours, and breads meet the tandoor only when you are ready for them.
                        </p>
                        <p className="mt-5 leading-relaxed text-charcoal/70">
                            We cook the dishes we grew up with, with the precision of a modern kitchen — in a room designed to make you linger.
                        </p>
                        <blockquote className="mt-8 border-l-2 border-saffron pl-5 font-serif text-2xl italic text-forest">
                            Crafted with passion, served with warmth.
                        </blockquote>
                    </Reveal>

                    <dl className="mt-12 grid gap-x-8 gap-y-7 sm:grid-cols-2">
                        {features.map(({ icon: Icon, title, text }, i) => (
                            <Reveal key={title} delay={0.1 * i}>
                                <div className="flex gap-4">
                                    <Icon className="mt-1 shrink-0 text-saffron" size={22} strokeWidth={1.5} aria-hidden="true" />
                                    <div>
                                        <dt className="font-medium text-forest">{title}</dt>
                                        <dd className="mt-1 text-sm text-charcoal/65">{text}</dd>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    )
}