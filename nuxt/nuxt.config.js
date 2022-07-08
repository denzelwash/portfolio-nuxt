export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    // ssr: false,
    head: {
        title: 'Денис Оболевич ★ Портфолио',
        htmlAttrs: {
            lang: 'ru',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Frontend разработчик, Денис Оболевич. Портфолио. Разработка сайтов, SPA, дизайн, верстка, программирование.',
            },
            {
                hid: 'keywords',
                name: 'keywords',
                content:
                    'HTML5, CSS3, PHP, JavaScript, Jquery, Vue, Nuxt, Git, LESS/SASS/SCSS, Flexbox, Grid, Adaptive.',
            },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/scss/main'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        // baseURL: '/',
        proxy: true,
    },
    proxy: {
        // Simple proxy
        '/api': 'http://denisobolevich/api/',
    },

    router: {
        linkActiveClass: 'active',
        linkExactActiveClass: 'exact-active',
        middleware: ['routerBeforeEach'],
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    env: {
        test: 'test',
    },
}
