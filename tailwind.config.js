// const colors = require('tailwindcss/colors')
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "360px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    // colors: {},
    extend: {},
  },
  variants: {
    extend: {
      zIndex: ["hover", "active"],
    },
  },
  plugins: [],
};
