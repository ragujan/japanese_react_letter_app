/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainDark: "#253350",
        secondaryDark: "#1C273E",
        thirdDark: "#727DA3",
        buttonColor: "#A5645E",
      },
    }

  },
  plugins: [],
}
