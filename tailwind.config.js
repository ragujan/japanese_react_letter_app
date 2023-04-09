/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainDark: "#A5D7E8",
        secondaryDark: "#537FE7",
        input:"#19376D",
        thirdDark: "#181823",
        lightBlude: "#A5D7E8",
        topBarBg: "#19376D"
      },
    }

  },
  plugins: [],
}
