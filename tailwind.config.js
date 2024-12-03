/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gamer': "url('https://i.ibb.co.com/Fm4Fg9h/games.png')",
      }
    },
  },
  plugins: [require('daisyui'),],
}