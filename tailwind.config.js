const plugin = require('tailwindcss/plugin');
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        dark: '#111117',
        primary: '#D00EEF',
        secondary: '#4C6176',
      },
      fontFamily: {
        kumbhSans: ['Kumbh Sans'],
        bebasNeue: ['Bebas Neue'],
      },
      fontSize: {
        '12xl': '12rem',
        '24xl': '24rem',
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'text-stroke-color': (value) => {
            return { WebkitTextStrokeColor: value };
          },
        },
        { values: flattenColorPalette(theme('colors')) }
      );
    }),
  ],
};
