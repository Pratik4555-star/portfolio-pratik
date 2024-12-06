/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'Abs': ["Afacad", "sans-serif"],
      'inner':["Inria Serif", "serif"]
    }
  },
  plugins: [],
}

