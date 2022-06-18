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
            xl: { max: '1211px' },
            lg: { max: '1023px' },
            md: { max: '767px' },
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
                    padding: '0 16px',
                    maxWidth: '1212px',
                    '@screen xl': {
                        maxWidth: '1024px',
                    },
                    '@screen lg': {
                        maxWidth: '768px',
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
