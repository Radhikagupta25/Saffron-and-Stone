import Reveal from './Reveal'
import SmartImage from './SmartImage'
import { images } from '../data/restaurant'

export default function ExperienceBanner() {
    return (
        <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-forest-dark">
            <SmartImage src={images.banner} alt="The Saffron & Stone dining room" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-forest-dark/70" aria-hidden="true" />
            <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
                <Reveal><p className="eyebrow mb-6">The Experience</p></Reveal>
                <Reveal delay={0.1}>
                    <h2 className="h-display text-4xl text-ivory sm:text-5xl lg:text-6xl">
                        An evening that begins at the table and <span className="italic text-saffron-soft">stays with you.</span>
                    </h2>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="mx-auto mt-6 max-w-xl text-ivory/80">Birthdays, anniversaries, quiet dinners or a long family lunch — we will take care of the rest.</p>
                    <a href="#reserve" className="btn btn-saffron mt-10">Reserve Your Evening</a>
                </Reveal>
            </div>
        </section>
    )
}