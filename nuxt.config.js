import { sass } from 'sass';
import { fiber } from 'fibers';

export default {
    target: 'static',
    head: {
        title: 'THE 拡散発想',
        htmlAttrs: {
            lang: 'ja',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '「THE 拡散思考」は、あなたのモノづくりを手助けするためのアプリケーションです。気になるワードを入力すると、それに関連するワードが拡散され、新たなる発想をあなたに届けます。' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/scss/elements'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/injectEnvData.ts'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        '@nuxtjs/style-resources',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    styleResources: {
        scss: ['~/assets/scss/variables.scss', '~/assets/scss/mixin.scss'],
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        loaders: {
            scss: {
                implementation: sass,
                sassOptions: {
                    fiber,
                },
            },
        },
    },

    env: {
        version: process.env.npm_package_version,
    },
};
