/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-black': '#232526',
        'brand-gray': '#686E73',
        'brand-navy-1': '#0B3B59',
        'brand-navy-2': '#164F73',
        'brand-navy-3': '#88AABF'
      },
      height: {
        '30vh': '30vh',
        '20vh': '20vh',
        '25vh': '25vh',
        '10vh': '10vh'
      }
    }
  },
  plugins: []
}
