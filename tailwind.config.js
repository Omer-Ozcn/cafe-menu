// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#FDFBF7',
          beige: '#F3EFEA',
          gold: '#C5A065',
          rust: '#BC5A45',
          coffee: '#6F4E37',
          dark: '#2A2422',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],  // 🔹 logo için
      },
    },
  },
  plugins: [],
}
