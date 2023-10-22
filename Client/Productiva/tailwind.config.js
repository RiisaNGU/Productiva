/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'mainFont': ['"Inter"'],
        sans: [
          'Inter',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      colors: {
        'bg-dark': '#212026',
        'anti-flash-white': '#E5EBEA',
        'nearly-white': '#D4D4D4',
        'brand-main': '#FF4269',
        'Some-light-grey': '#5D5D61',
      },
      borderWidth: {
        '1': '1px',
      }

    },
  },
  plugins: [],
}

