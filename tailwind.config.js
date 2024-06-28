/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [   "./src/**/*.{html,ts}",],
  theme: {

    screens: {
      'ms': '60px',
      'mm':'321px',
      'ml':'376px',
      'sm':'430px',
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

