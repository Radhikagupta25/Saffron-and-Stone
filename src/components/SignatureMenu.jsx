import Reveal from './Reveal'
import SmartImage from './SmartImage'
import { signatureDishes, formatINR } from '../data/menu'

export default function SignatureMenu() {
    const [feature, ...rest] = signatureDishes

    return (
        <section id="menu" className="bg-ivory-deep py-24 lg:py-36">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <Reveal><p className="eyebrow mb-5">Signature Menu</p></Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="h-display text-4xl text-forest sm:text-5xl lg:text-6xl">Dishes we are<br /><span className="italic">known for.</span></h2>
                        </Reveal>
                    </div>
                    <Reveal delay={0.2}>
                        <p className="max-w-sm text-charcoal/70">A short selection from our kitchen — each one a recipe we refuse to rush.</p>
                    </Reveal>
                </div>

                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                    <Reveal className="lg:col-span-5">
                        <article className="group">
                            <div className="relative overflow-hidden">
                                <SmartImage src={feature.image} alt={feature.name} className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                                <span className="absolute left-0 top-6 bg-saffron px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-forest-dark">{feature.tag}</span>
                            </div>
                            <div className="mt-6 flex items-baseline justify-between gap-4">
                                <h3 className="font-serif text-3xl text-forest">{feature.name}</h3>
                                <span className="font-serif text-2xl text-saffron">{formatINR(feature.price)}</span>
                            </div>
                            <p className="mt-2 max-w-md text-charcoal/70">{feature.description}</p>
                        </article>
                    </Reveal>

                    <ul className="flex flex-col divide-y divide-forest/15 lg:col-span-7">
                        {rest.map((d, i) => (
                            <Reveal key={d.id} delay={0.08 * i}>
                                <li className="group flex items-center gap-5 py-6 first:pt-0 sm:gap-8">
                                    <div className="h-24 w-24 shrink-0 overflow-hidden sm:h-32 sm:w-32">
                                        <SmartImage src={d.image} alt={d.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-saffron">{d.tag}</p>
                                        <div className="mt-1 flex items-baseline gap-3">
                                            <h3 className="font-serif text-2xl text-forest sm:text-[1.7rem]">{d.name}</h3>
                                            <span className="hidden flex-1 border-b border-dotted border-forest/30 sm:block" aria-hidden="true" />
                                            <span className="font-serif text-xl text-forest">{formatINR(d.price)}</span>
                                        </div>
                                        <p className="mt-1.5 text-sm leading-relaxed text-charcoal/65">{d.description}</p>
                                    </div>
                                </li>
                            </Reveal>
                        ))}
                    </ul>
                </div>

                <Reveal className="mt-16 text-center">
                    <a href="#reserve" className="btn btn-outline-dark">View Full Menu</a>
                    <p className="mt-3 text-xs text-charcoal/50">Link this button to your PDF menu or a dedicated menu page.</p>
                </Reveal>
            </div>
        </section>
    )
}