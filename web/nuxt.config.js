const CompressionPlugin = require('compression-webpack-plugin')

const config = require('config')
const colors = require('vuetify/es5/util/colors').default
const isProd = process.env.NODE_ENV === 'production'

const compressPlugins = isProd
  ? [
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg|png|jpe?g|gif|ico)$/,
      minRatio: 1
    })
  ]
  : []

module.exports = {
  mode: 'universal',
  srcDir: 'client/',
  server: {
    port: config.server.port
  },
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#272727' },
      { name: 'apple-mobile-web-app-status-bar-style', content: '#272727' },
      { property: 'og:locale', content: 'zh_TW' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
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
    '~/plugins/axios.js',
    '~/plugins/moment.js',
    '~/plugins/fontawesome.js',
    '~/plugins/clipboard.js',
    '~/plugins/vue-youtube.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-config/module'
  ],
  features: {
    transitions: false
  },
  vueMeta: {
    refreshOnceOnNavigation: true
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
  ** Google Analytics module configuration
  ** https://github.com/nuxt-community/analytics-module
  ** https://matteogabriele.gitbooks.io/vue-analytics/
  */
  googleAnalytics: {
    id: 'UA-106820667-3',
    debug: {
      enabled: true
      // trace: true
      // sendHitTask: true
    },
    autoTracking: {
      pageviewTemplate: (route) => {
        return {
          page: route.path,
          title: window.document.title,
          location: window.location.href
        }
      }
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: config.api
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: isProd,
    plugins: [
      ...compressPlugins
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, { isClient, loaders: { vue } }) {
      if (isClient) {
        // This dependency was not found: * fs in ./node_modules/config/lib/config.js
        config.node = {
          fs: 'empty'
        }
        // Support native src usage for <v-img>
        vue.transformAssetUrls = {
          ...vue.transformAssetUrls,
          'v-img': 'src'
        }
      }
    }
  }
}
