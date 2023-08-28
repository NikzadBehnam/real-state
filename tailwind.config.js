/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#F25C05',
        'brand-gray': '#8C8C8C',
        'brand-black': '#0D0D0D'
      }
    }
  },
  plugins: []
}
