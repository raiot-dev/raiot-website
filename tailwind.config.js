/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        dark: '#111117',
        primary: '#2DEF0E',
        secondary: '#4C6176',
      },
      fontFamily: {
        poppins: ['Poppins'],
        bebasNeue: ['Bebas Neue'],
      },
      fontSize: {
        '12xl': '12rem',
        '24xl': '24rem',
      },
    },
  },
  plugins: [],
};
