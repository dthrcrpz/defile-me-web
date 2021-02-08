export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'defile-web-me',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/sass/app.sass',
  ],

  loading: {
    color: '#64fafa',
    throttle: 0,
    height: '4px'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-scrollto', ssr: false },
    { src: '~/plugins/v-click-outside', ssr: false },
    { src: '~/plugins/filters' },
    { src: '~/plugins/mixins' },
    { src: '~/plugins/vee-validate' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL
  },

  router: {
    middleware: ['auth']
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: { url: `${process.env.API_URL}users/login`, method: 'post' },
          logout: { url: `${process.env.API_URL}user/logout`, method: 'post' },
          user: { url: `${process.env.API_URL}user`, method: 'get' }
        },
      }
    },
  },

  env: {
    API_URL: process.env.API_URL
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
