/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      yellow: {
        700: "#C47F17",
        500: "#DBAC2C",
        400: "#F1E9C9",
      },
      purple: {
        700: "#4B2995",
        500: "#8047F8",
        400: "#EBE5F9",
      },
      gray: {
        900: "#272221",
        500: "#D7D5D5",
        400: "#E6E5E5",
        300: "#EDEDED",
        200: "#F3F2F2",
        100: "#FAFAFA",
      },
      stone: {
        600: "#403937",
        500: "#574F4D",
        400: "#8D8686",
      },
      white: "#FFFFFF",
    },
    fontFamily: {
      cursive: ["Baloo 2", "cursive"],
      sans: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
}
