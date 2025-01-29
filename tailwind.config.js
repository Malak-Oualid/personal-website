/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
        'oswald': ['"Oswald"', 'sans-serif'],
      },
      colors: {
        midnight:'#1F0037', 
        lilac: '#D1C3F6'
      }
    },
  },
  plugins: [],
}

