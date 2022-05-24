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
  loading: false,
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
  plugins: [{ src: '~/plugins/vue-carousel', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    { path: '~/components', prefix: '' },
    { path: '~/components/Home', prefix: 'Home' },
    { path: '~/components/Header', prefix: 'Header' },
    { path: '~/components/Cards', prefix: 'Cards' },
    { path: '~/components/Blocks', prefix: 'Blocks' },
    { path: '~/components/TheAgency', prefix: 'TheAgency' },
  ],

  sitemap: false,
  target: 'server',
  ssr: true,
  wp: {
    sitemap: false,
  },
  server: {
    port: process.env.VUE_NUXT_SERVER_PORT || 8080,
    host: '0.0.0.0',
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/components',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-fonts',
    'nuxt-lazysizes',
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
        endpoint: process.env.NUXT_ENV_API_URL,
        extensions: true,
        username: process.env.NUXT_ENV_USERNAME,
        password: process.env.NUXT_ENV_PASSWORD,
      },
    ],
    'nuxt-ssr-cache',
  ],

  bootstrapVue: {
    icons: false,
  },
  lazySizes: {
    plugins: {
      blurUp: true,
    },
    blurUpClass: 'ls-blur-up-img',
    blurUpLoadingClass: 'ls-blur-up-is-loading',
    blurUpInviewClass: 'ls-inview',
    blurUpLoadedClass: 'ls-blur-up-loaded',
    blurUpLoadedOriginalClass: 'ls-original-loaded',
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL,
  },
  cache: {
    // if you're serving multiple host names (with differing
    // results) from the same server, set this option to true.
    // (cache keys will be prefixed by your host name)
    // if your server is behind a reverse-proxy, please use
    // express or whatever else that uses 'X-Forwarded-Host'
    // header field to provide req.hostname (actual host name)
    useHostPrefix: false,
    pages: [
      // these are prefixes of pages that need to be cached
      // if you want to cache all pages, just include '/'
      '/agency',
      '/projects',

      // you can also pass a regular expression to test a path
      /^\/page3\/\d+$/,

      // to cache only root route, use a regular expression
      /^\/$/,
    ],

    store: {
      type: 'memory',

      // maximum number of pages to store in memory
      // if limit is reached, least recently used page
      // is removed.
      max: 100,

      // number of seconds to store this page in cache
      ttl: 60,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    collapseBooleanAttributes: true,
    decodeEntities: true,
    minifyCSS: true,
    minifyJS: true,
    processConditionalComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    trimCustomFragments: true,
    useShortDoctype: true,
    optimizeCSS: true,
    minimize: true,
    extractCSS: true,
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
  },
  transpile: ['bootstrap-vue'],
}
