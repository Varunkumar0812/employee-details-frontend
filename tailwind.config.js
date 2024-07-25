/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode : false,
  content: [],
  theme: {
    extend: {
      fontFamily : {
        poppins : ["Poppins", "sans-serif"]
      }
    },
  },
  variants : {
    extend : {}
  },
  plugins: [],
}

