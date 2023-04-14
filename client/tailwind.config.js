/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-colour': '#4AAD37',
        'nav-colour': '#4AAD37',
        'footer-colour': '#1F2937',
        'colour-pale': '#99DF8A',
        'colour-light': '#6DC85A',
        'colour-med': '#32931D',
        'colour-dark': '#1A7408',
        'transparent-black': 'rgba(0, 0, 0, 0.65)',
        'transparent-white': 'rgba(255, 255, 255, 0.65)',
        'main-text': '#000000',
        'dark-text': '#FFFFFF',
        'alt-text': '#000000',
        'dark-alt-text': '#FFFFFF',
        'hover-text': '#94A3B8',
        'dark-hover-text': '#94A3B8',
        'active-text': '#6B7280',
        'dark-active-text': '#6B7280',
        'placeholder-text': 'rgb(55 65 81)',
        'dark-placeholder-text': 'rgb(55 65 81)',
        'main-border': '#000000',
        'dark-border': '#FFFFFF',
        'error-red': '#',
        'success-green': '#',
        'hyperlink-blue': '#2563EB',
        selected: '#2563EB',
        'dark-selected': '#2563EB',
      },
      width: {
        eighty: '80%',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: 'repeat(16, minmax(0, 1fr))',
        '2-1': '2fr 1fr',
        // Complex site-specific column configuration
        footer: '200px minmax(900px, 1fr) 100px',
      },
      gridTemplateRows: {
        'row-s-1': '0.5fr 1fr',
        'a-1fr': 'auto 1fr',
        'a-5fr': '1fr auto 1fr auto 1fr auto 1fr auto 1fr auto',
        'a-a': 'auto auto',
      },
    },
  },
  plugins: [],
};
