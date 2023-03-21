/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Code", "sans-serif"],
      },
      colors: {
        dark: "#3e3e3e",
        light: "#fafafa",
      },
    },
  },
  plugins: [],
};
