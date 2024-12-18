/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Founders_Grotesk_X: ['Founders_Grotesk_X', 'sans-serif'],
        Neue_Montreal: ['Neue_Montreal', 'sans-serif'],
      },
    },
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
};
