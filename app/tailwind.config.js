/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ligth theme
        light: {
          primary: "#a4dad2",
          secondary: "#152C36",
          tertiary: "#FBBF24",
          hot: "#37392e",
          light: "#EAEEF3",

         
          "content-text": "#37392e",
        },

        dark: {
          primary: "#37392e",
          secondary: "#EAEEF3",
          tertiary: "#FBBF24",
          hot: "#f6d809",
          dark: "#37392e",

         
          "content-text": "#a4dad2",

        },
      },
    },
  },
  plugins: [require("daisyui")],
};