const defaultTheme = require('tailwindcss/defaultTheme')

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
            xxl: { max: '1429px' },
            xl: { max: '1229px' },
            lg: { max: '1019px' },
            md: { max: '789px' },
            sm: { max: '575px' },
        },
        fontFamily: {
            sans: ['Source Sans Pro', 'Arial', ...defaultTheme.fontFamily.sans],
        },
        extend: {
            colors: {
                gray: '#f0f0f0',
            },
        },
    },
    variants: {
        extend: {},
    },
    corePlugins: {
        container: false,
    },
    plugins: [
        ({ addComponents, theme }) => {
            addComponents({
                '.container': {
                    margin: '0 auto',
                    padding: '0 15px',
                    maxWidth: '1430px',
                    '@screen xxl': {
                        maxWidth: '1230px',
                    },
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
    ],
}
