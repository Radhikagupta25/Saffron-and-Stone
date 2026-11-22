import { Sprout, ChefHat, ShieldCheck, Users, HeartHandshake, MapPin } from 'lucide-react'
import Reveal from './Reveal'

const reasons = [
    { icon: Sprout, title: 'Fresh Ingredients', text: 'Produce and proteins delivered each morning, nothing held over.' },
    { icon: ChefHat, title: 'Skilled Chefs', text: 'A brigade trained in regional kitchens across the subcontinent.' },
    { icon: ShieldCheck, title: 'Hygienic Kitchen', text: 'Open, spotless and audited — you can see how we cook.' },
    { icon: Users, title: 'Family-Friendly', text: 'Spacious seating, a children’s menu and an easy, relaxed pace.' },
    { icon: HeartHandshake, title: 'Excellent Hospitality', text: 'Attentive without hovering; we remember how you like things.' },
    { icon: MapPin, title: 'Convenient Location', text: 'Easy access, valet and ample parking close to the entrance.' },
]

export default function WhyChooseUs() {
    return (
        <section className="bg-forest-dark py-24 text-ivory lg:py-32">
            <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:px-10">
                <div className="lg:col-span-4">
                    <div className="lg:sticky lg:top-32">
                        <Reveal><p className="eyebrow mb-5">Why Dine With Us</p></Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="h-display text-4xl sm:text-5xl">Small details, <span className="italic text-saffron-soft">done properly.</span></h2>
                        </Reveal>
                        <Reveal delay={0.2}><p className="mt-6 max-w-sm text-ivory/65">Great restaurants are built on consistency. Here is what we promise every guest, every night.</p></Reveal>
                    </div>
                </div>

                <ol className="grid gap-px bg-ivory/10 sm:grid-cols-2 lg:col-span-8">
                    {reasons.map(({ icon: Icon, title, text }, i) => (
                        <li key={title} className="bg-forest-dark p-8 transition-colors duration-300 hover:bg-forest sm:p-10">
                            <Reveal delay={0.05 * i}>
                                <div className="flex items-start justify-between">
                                    <Icon size={28} strokeWidth={1.4} className="text-saffron" aria-hidden="true" />
                                    <span className="font-serif text-lg text-ivory/25">0{i + 1}</span>
                                </div>
                                <h3 className="mt-8 font-serif text-2xl">{title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-ivory/65">{text}</p>
                            </Reveal>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}