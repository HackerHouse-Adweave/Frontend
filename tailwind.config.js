/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Poppins', 'sans-serif'],
        mont:['Montserrat', 'sans-serif'],
        alternate: ['Montserrat Alternates', 'sans-serif']
      }
    },
  },
  plugins: [],
}

