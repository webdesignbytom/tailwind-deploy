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
    },
  },
  plugins: [],
}