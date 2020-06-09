const colors = require('vuetify/es5/util/colors').default
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    // Font awesome integration
    '@fortawesome/fontawesome-svg-core/styles.css',
    { src: '~/assets/styles/rsl/theme.scss', lang: 'scss' }
  ],
  styleResources: {
    scss: [
      '~/assets/styles/rsl/_variables.scss',
      '~/assets/styles/rsl/_mixins.scss',
      '~/assets/styles/rsl/_functions.scss'
    ]
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-warn.js',
    '~/plugins/fontawesome.js',
    '~/plugins/vue-youtube.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/styles/vuetify/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#D86A60',
          secondary: colors.lightBlue.accent4,
          facebook: '#1877F2',
          youtube: '#FF0200',
          twitch: '#9147FF'
        },
        dark: {
        }
      }
    },
    defaultAssets: {
      icons: false
    },
    treeShake: true
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: isProd,
    /*
    ** You can extend webpack config here
    */
    extend (config, { isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls = {
          ...vue.transformAssetUrls,
          'v-img': 'src'
        }
      }
    }
  }
}
