/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Rubik Vinyl", "sans-serif"],
        Karla: ["Karla", "sans-serif"],
        Teko: ["Teko", "sans-serif"],
      },
      colors:{
        customGreen: "#86AB89",
        customDusra: "#CBE2B5",
        customPalette: "#FFFDEC",
        DarkColor: "#1E201E",
      },
    },
  },
  plugins: [],
}