/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eco-green': '#4aad37',
        'eco-green-pale': '#99DF8A',
        'eco-green-light': '#6DC85A',
        'eco-green-med': '#32931D',
        'eco-green-dark': '#1A7408',
        'transparent-black': 'rgba(0, 0, 0, 0.65)',
        'transparent-white': 'rgba(255, 255, 255, 0.65)',
        'hover-grey': '#6b7280',
        'text-grey': '#3e4857'
      },
      width: {
        'eighty': '80%'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',
        '2-1': '2fr 1fr',
        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      },
      gridTemplateRows: {
        'row-s-1': '0.5fr 1fr',
        'a-1fr': 'auto 1fr',
        'a-5fr': '1fr auto 1fr auto 1fr auto 1fr auto 1fr auto',
        'a-a': 'auto auto'
      }
    },
  },
  plugins: [],
}