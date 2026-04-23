
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        'brand-green': '#006B3F',
        'brand-green-dark': '#004D2C',
        'brand-green-light': '#E6F5EE',
        'brand-gold': '#D4A017',
        'brand-gold-light': '#FDF6E3',
        'brand-dark': '#0F1923',
        'brand-dark-light': '#1A2A3A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in-up-delay-1': 'fade-in-up 0.6s ease-out 0.2s forwards',
        'fade-in-up-delay-2': 'fade-in-up 0.6s ease-out 0.4s forwards',
        'fade-in-up-delay-3': 'fade-in-up 0.6s ease-out 0.6s forwards',
      }
    },
  },
  plugins: [],
}
