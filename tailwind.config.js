/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                forest: { DEFAULT: '#1F3A2E', dark: '#142720', light: '#2C5040' },
                ivory: { DEFAULT: '#F8F3E8', deep: '#EFE6D2' },
                saffron: { DEFAULT: '#C8922E', soft: '#E3B866' },
                charcoal: '#1E1E1C',
            },
            fontFamily: {
                serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            letterSpacing: { widest2: '0.28em' },
        },
    },
    plugins: [],
}