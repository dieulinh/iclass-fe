export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Bikiin",
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    css: [
      // Load a Node.js module directly (here it's a Sass file)
      'bulma',
      // CSS file in the project
      // SCSS file in the project
      // '~/assets/css/main.scss'
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/quill-editor', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv'
  ],
  proxy: {
    '/api': {
      target: 'https://myclassr00m.herokuapp.com',
      pathRewrite: {
        '^/api': '/api'
      }
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/axios', '@nuxtjs/proxy']
  ],
  axios: {
    baseURL: 'https://myclassr00m.herokuapp.com', // Used as fallback if no runtime config is provided
    retry: { retries: 3 }
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
