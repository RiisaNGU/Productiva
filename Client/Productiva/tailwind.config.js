/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'mainFont': ['"Inter"']
      },
      colors: {
        'bg-dark': '#212026',
        'anti-flash-white': '#E5EBEA',
        'nearly-white': '#D4D4D4',
        'brand-main': '#FF4269',
        'Some-light-grey': '#5D5D61',
      }

    },
  },
  plugins: [],
}

