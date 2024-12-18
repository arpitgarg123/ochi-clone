/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.font-stretch-100': {
          'font-stretch': '100%',
        },
        '.font-stretch-125': {
          'font-stretch': '125%',
        },
        '.font-stretch-75': {
          'font-stretch': '75%',
        },
        '.font-stretch-85': {
          'font-stretch': '85%',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

