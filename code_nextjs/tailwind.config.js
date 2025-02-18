/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bilanis: {
          blue: '#2B87B6',    // Bleu principal
          green: '#4AB795',   // Vert principal
          darkBlue: '#1B5171', // Bleu foncé
          lightBlue: '#BCDAF2', // Bleu clair
          lime: '#B0C934',     // Vert vif
          gray: '#F5F5F5'     // Gris clair
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif']
      },
      backgroundImage: {
        'gradient-bilanis': 'linear-gradient(to right, #2B87B6, #4AB795)',
      }
    },
  },
  plugins: [],
}