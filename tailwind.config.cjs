/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: () => ({
        "gradient-blue": "linear-gradient(to right, #00d2ff, #928dab)",
        "gradient-purple": "linear-gradient(to right, #41295a, #2f0743)",
        "gradient-green": "linear-gradient(to right, #00b09b, #96c93d)",
        "gradient-orange": "linear-gradient(to right, #659999, #f4791f)",
      }),
      fontFamily: {
        fira: ["Fira Code", "sans-serif"],
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        dark: "#3e3e3e",
        light: "#f9f7f7",
        primary: "#DBE2EF",
        secondary: "#3F72AF",
        fontPrimary: "#112D4E",
      },
    },
  },
  plugins: [
    // Or with a custom prefix:
    require("@headlessui/tailwindcss")({ prefix: "ui" }),
  ],
};
