/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      bgColor: {
        DEFAULT: "rgb(var(--color-bg) / <alpha-value>)",
        dark: "rgb(var(--color-bg-dark) / <alpha-value>)",  // Add dark theme color
      },
      primary: {
        DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
        dark: "rgb(var(--color-primary-dark) / <alpha-value>)",  // Add dark theme color
      },
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      blue: "rgb(var(--color-blue) / <alpha-value>)",
      white: "rgb(var(--color-white) / <alpha-value>)",
      ascent: {
        1: "rgb(var(--color-ascent1) / <alpha-value>)",
        2: "rgb(var(--color-ascent2) / <alpha-value>)",
      },
    },
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
};