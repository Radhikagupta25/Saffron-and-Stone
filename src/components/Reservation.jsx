import { useState } from 'react'
import { CheckCircle2, MessageCircle } from 'lucide-react'
import Reveal from './Reveal'
import { restaurant } from '../data/restaurant'

const TIMES = ['12:00 pm', '12:30 pm', '1:00 pm', '1:30 pm', '2:00 pm', '2:30 pm', '3:00 pm', '6:30 pm', '7:00 pm', '7:30 pm', '8:00 pm', '8:30 pm', '9:00 pm', '9:30 pm', '10:00 pm']
const initial = { name: '', phone: '', date: '', time: '', guests: '2', message: '' }
const today = () => new Date().toISOString().split('T')[0]

function validate(v) {
    const e = {}
    if (v.name.trim().length < 2) e.name = 'Please enter your name.'
    if (!/^(\+91)?[6-9]\d{9}$/.test(v.phone.replace(/[\s-]/g, ''))) e.phone = 'Enter a valid 10-digit Indian mobile number.'
    if (!v.date) e.date = 'Please choose a date.'
    else if (v.date < today()) e.date = 'Date cannot be in the past.'
    if (!v.time) e.time = 'Please choose a time.'
    return e
}

async function submitReservation(data) {
    return { ok: true, data }
}

const whatsappLink = (v) =>
    `https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(
        `Hello ${restaurant.name}, I'd like to book a table.\nName: ${v.name}\nDate: ${v.date}\nTime: ${v.time}\nGuests: ${v.guests}${v.message ? `\nNote: ${v.message}` : ''}`
    )}`

function Field({ id, label, error, children }) {
    return (
        <div>
            <label htmlFor={id} className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-ivory/70">{label}</label>
            {children}
            {error && <p id={`${id}-err`} role="alert" className="mt-1.5 text-sm text-saffron-soft">{error}</p>}
        </div>
    )
}

const inputCls = 'w-full border border-ivory/25 bg-transparent px-4 py-3 text-ivory placeholder:text-ivory/35 focus:border-saffron focus:outline-none [color-scheme:dark]'

export default function Reservation() {
    const [values, setValues] = useState(initial)
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(null)
    const [busy, setBusy] = useState(false)

    const set = (k) => (e) => {
        setValues((v) => ({ ...v, [k]: e.target.value }))
        if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
    }
    const aria = (k) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${k}-err` : undefined })

    const onSubmit = async (e) => {
        e.preventDefault()
        const found = validate(values)
        setErrors(found)
        if (Object.keys(found).length) return
        setBusy(true)
        await submitReservation(values)
        setBusy(false)
        setSubmitted(values)
    }

    return (
        <section id="reserve" className="bg-forest py-24 text-ivory lg:py-32">
            <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
                <div className="lg:col-span-5">
                    <Reveal><p className="eyebrow mb-5">Reservations</p></Reveal>
                    <Reveal delay={0.1}><h2 className="h-display text-4xl sm:text-5xl lg:text-6xl">Reserve <span className="italic text-saffron-soft">your table.</span></h2></Reveal>
                    <Reveal delay={0.2}>
                        <p className="mt-6 max-w-md text-ivory/70">Tell us when you would like to join us. For parties of more than 12 or private events, please call us directly.</p>
                        <a href={restaurant.phoneHref} className="mt-8 inline-block font-serif text-3xl text-saffron-soft hover:text-saffron">{restaurant.phone}</a>
                    </Reveal>
                </div>

                <div className="lg:col-span-7">
                    {submitted ? (
                        <div className="border border-saffron/50 p-8 sm:p-12" role="status">
                            <CheckCircle2 className="text-saffron" size={40} aria-hidden="true" />
                            <h3 className="mt-5 font-serif text-3xl">Thank you, {submitted.name.split(' ')[0]}.</h3>
                            <p className="mt-3 text-ivory/75">Your request for {submitted.guests} guest{submitted.guests > 1 ? 's' : ''} on {submitted.date} at {submitted.time} has been noted.</p>
                            <p className="mt-3 text-sm text-ivory/55">Demo notice: this form does not yet send anything to a restaurant. Connect a backend in <code>submitReservation()</code>, or confirm instantly on WhatsApp below.</p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <a href={whatsappLink(submitted)} target="_blank" rel="noopener noreferrer" className="btn btn-saffron"><MessageCircle size={16} /> Confirm on WhatsApp</a>
                                <button className="btn btn-outline-light" onClick={() => { setSubmitted(null); setValues(initial) }}>New Request</button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={onSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
                            <Field id="name" label="Full name" error={errors.name}>
                                <input id="name" autoComplete="name" value={values.name} onChange={set('name')} className={inputCls} placeholder="Your name" {...aria('name')} />
                            </Field>
                            <Field id="phone" label="Phone number" error={errors.phone}>
                                <input id="phone" type="tel" autoComplete="tel" value={values.phone} onChange={set('phone')} className={inputCls} placeholder="98765 43210" {...aria('phone')} />
                            </Field>
                            <Field id="date" label="Date" error={errors.date}>
                                <input id="date" type="date" min={today()} value={values.date} onChange={set('date')} className={inputCls} {...aria('date')} />
                            </Field>
                            <Field id="time" label="Time" error={errors.time}>
                                <select id="time" value={values.time} onChange={set('time')} className={inputCls} {...aria('time')}>
                                    <option value="" className="text-charcoal">Select a time</option>
                                    {TIMES.map((t) => <option key={t} value={t} className="text-charcoal">{t}</option>)}
                                </select>
                            </Field>
                            <div className="sm:col-span-2">
                                <Field id="guests" label="Number of guests">
                                    <select id="guests" value={values.guests} onChange={set('guests')} className={inputCls}>
                                        {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => <option key={n} value={n} className="text-charcoal">{n} {n === 1 ? 'guest' : 'guests'}</option>)}
                                    </select>
                                </Field>
                            </div>
                            <div className="sm:col-span-2">
                                <Field id="message" label="Message (optional)">
                                    <textarea id="message" rows={3} value={values.message} onChange={set('message')} className={inputCls} placeholder="Occasion, dietary needs, seating preference…" />
                                </Field>
                            </div>
                            <div className="sm:col-span-2">
                                <button type="submit" disabled={busy} className="btn btn-saffron w-full disabled:opacity-60 sm:w-auto">{busy ? 'Sending…' : 'Request Reservation'}</button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    )
}