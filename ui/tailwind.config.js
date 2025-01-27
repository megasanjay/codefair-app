/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['"Inter"', ...defaultTheme.fontFamily.sans],
        primary: ["Inter", ...fontFamily.sans],
      },
      keyframes: {
        float: {
          '0%': {
            transform: 'translatey(0px)'
          },
          '50%': {
            transform: 'translatey(-20px)'
          },
          '100%': {
            transform: 'translatey(0px)'
          },
        },
        'float-diff': {
          '0%': {
            transform: 'translatey(0px)'
          },
          '50%': {
            transform: 'translatey(-17px)'
          },
          '100%': {
            transform: 'translatey(0px)'
          },
        },
      },
      animation: {
        'float-item': 'float 5s ease-in-out infinite',
        'float-opposite': 'float-diff 4s ease-in-out infinite'
      }
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    require("@tailwindcss/typography"),
  ],
}

