/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**"],
  darkMode: "class",
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1270px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1026px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },

    extend: {
      fontFamily: {
        catamaran: ["Catamaran", "sans-serif"],
      },
      colors: {
        nightlight: "#2D3748",
        night: "#1A202C",
      },
      spacing: {
        344: "22rem",
      },
    },
  },

  plugins: [],
};
