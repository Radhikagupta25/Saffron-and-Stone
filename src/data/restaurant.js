export const restaurant = {
    name: 'Saffron & Stone',
    tagline: 'Contemporary Indian Dining',
    description:
        'Heritage recipes, seasonal produce and slow fire — served in a room built for long, unhurried evenings.',
    phone: '+91 98765 43210',          
    phoneHref: 'tel:+919876543210',
    whatsapp: '919876543210',          
    email: 'reservations@saffronandstone.example', 
    address: ['12, Heritage Lane, Civil Lines', 'Your City, State 000000'],
    mapQuery: 'Connaught Place, New Delhi',      
    hours: [
        { days: 'Monday – Friday', time: '12:00 pm – 3:30 pm · 6:30 pm – 11:00 pm' },
        { days: 'Saturday – Sunday', time: '12:00 pm – 11:30 pm' },
    ],
    social: { instagram: '#', facebook: '#', youtube: '#' },
    nav: [
        { label: 'Home', href: '#home' },
        { label: 'Our Story', href: '#story' },
        { label: 'Menu', href: '#menu' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'Reviews', href: '#reviews' },
        { label: 'Contact', href: '#contact' },
    ],
}

export const unsplash = (id, w = 1200) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
    hero: unsplash('photo-1514933651103-005eec06c04b', 2000),
    chef: unsplash('photo-1577219491135-ce391730fb2c', 1000),
    dining: unsplash('photo-1559339352-11d035aa65de', 800),
    banner: unsplash('photo-1552566626-52f8b828add9', 2000),
}

export const gallery = [
    { id: 'photo-1414235077428-338989a2e8c0', alt: 'Plated tasting course', span: 'md:col-span-2 md:row-span-2' },
    { id: 'photo-1555939594-58d7cb561ad1', alt: 'Tandoor-grilled skewers', span: '' },
    { id: 'photo-1466978913421-dad2ebd01d17', alt: 'Dining room at dusk', span: '' },
    { id: 'photo-1504674900247-0877df9cc836', alt: 'Seasonal dish being finished', span: 'md:row-span-2' },
    { id: 'photo-1424847651672-bf20a4b0982b', alt: 'Chef at the pass', span: '' },
    { id: 'photo-1476224203421-9ac39bcb3327', alt: 'Fresh produce and spices', span: 'md:col-span-2' },
    { id: 'photo-1600891964092-4316c288032e', alt: 'Chargrilled signature main', span: '' },
]