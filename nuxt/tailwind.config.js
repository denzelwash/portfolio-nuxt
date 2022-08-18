const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
  // purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xl: { max: '1199px' },
      lg: { max: '1019px' },
      md: { max: '789px' },
      sm: { max: '575px' },
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Arial', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        footer:
          '0 -1px 3px 0 rgb(0 0 0 / 0.1), 0 -1px 2px -1px rgb(0 0 0 / 0.1)',
      },
      colors: {
        amber: colors.amber,
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
    aspectRatio: false,
  },
  plugins: [
    ({ addComponents, theme }) => {
      addComponents({
        '.container': {
          margin: '0 auto',
          padding: '0 15px',
          maxWidth: '1200px',
          '@screen xl': {
            maxWidth: '1020px',
          },
          '@screen lg': {
            maxWidth: '790px',
          },
          '@screen md': {
            maxWidth: '576px',
          },
          '@screen sm': {
            maxWidth: '100%',
          },
        },
      })
    },
    require('@tailwindcss/aspect-ratio'),
  ],
}
