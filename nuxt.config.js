export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'PAVILLON NOIR | CROSS MEDIA PRODUCTION',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/css/main.css'],

  styleResources: {
    scss: ['~assets/scss/main.scss'],
  },
  // Google Fonts

  googleFonts: {
    families: {
      'IBM Plex Mono': ['400'],
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    { path: '~/components', prefix: '' },
    { path: '~/components/Home', prefix: 'Home' },
    { path: '~/components/Header', prefix: 'Header' },
    { path: '~/components/Cards', prefix: 'Cards' },
    { path: '~/components/Blocks', prefix: 'Blocks' },
    { path: '~/components/TheAgency', prefix: 'TheAgency' },
  ],

  sitemap:false,
  target: 'server',
  ssr: true,
  wp: {
    sitemap: false
  },
  server: {
    port: process.env.VUE_NUXT_SERVER_PORT || 8080,
    host: "0.0.0.0",
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/components',

    '@nuxtjs/eslint-module',

    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-fonts',
    
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'wp-nuxt',
      {
        endpoint: 'https://pavillon-noir-site.kinshasadigital.com/wp-json/',
        extensions: true, // For additional functions of wpapi-extensions
        /* other options of WP-API */
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  transpile: ["bootstrap-vue"],
}
