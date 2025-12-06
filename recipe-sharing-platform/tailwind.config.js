/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src//*.{js,jsx,ts,tsx}"], // fix the path
  darkMode: false, // or 'media' or 'class' if you plan to use dark mode
  theme: {
    extend: {},
  },
  plugins: [],
};