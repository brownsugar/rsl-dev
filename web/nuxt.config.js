const CompressionPlugin = require('compression-webpack-plugin')

const config = require('config')
const colors = require('vuetify/es5/util/colors').default

const isProd = process.env.NODE_ENV === 'production'

const serverMiddlewares = config.server.proxy.map((path) => {
  return {
    path,
    handler: '~~server/endpoint/proxy'
  }
})
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
    host: config.server.host,
    port: config.server.port
  },
  serverMiddleware: [
    ...serverMiddlewares
  ],
  /*
  ** Vue Meta configuration
  ** https://nuxtjs.org/api/configuration-head
  ** https://vue-meta.nuxtjs.org/guide/metainfo.html
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
  loading: { color: '#fff' },
  css: [
    // Font Awesome integration
    // https://github.com/FortAwesome/vue-fontawesome#nuxtjs
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
  plugins: [
    '~/plugins/vue-warn.js',
    { src: '~/plugins/polyfills', mode: 'client' },
    '~/plugins/breakpoint.js',
    '~/plugins/moment.js',
    '~/plugins/fontawesome.js',
    '~/plugins/clipboard.js',
    '~/plugins/vue-youtube.js',
    { src: '~/plugins/vue-affix.js', mode: 'client' }
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics'
  ],
  modules: [
    'nuxt-config/module',
    '@nuxtjs/axios',
    'wp-nuxt'
  ],
  features: {
    transitions: false
  },
  vueMeta: {
    refreshOnceOnNavigation: true
  },
  /*
  ** Vuetify module configuration
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
          twitch: '#9147FF',
          discord: '#7289DA'
        },
        dark: {
        }
      }
    },
    defaultAssets: {
      icons: false
    },
    // custom variables only works with tree-shaking.
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
      enabled: !isProd
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
  ** https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** wp-nuxt module configuration
  ** https://github.com/yashha/wp-nuxt
  ** node-wpapi: https://github.com/WP-API/node-wpapi
  ** @nuxtjs/sitemap: https://github.com/nuxt-community/sitemap-module
  */
  wp: {
    endpoint: config.api.url + config.api.path,
    customRoutes: config.wp.customRoutes,
    sitemap: {
      hostname: config.rsl.url,
      path: 'sitemap-static.xml',
      // use default static path
      routes: [],
      gzip: true
    }
  },
  build: {
    extractCSS: isProd,
    plugins: [
      ...compressPlugins
    ],
    extend (config, { isClient, loaders: { vue } }) {
      if (isClient) {
        // Fix: This dependency was not found: * fs in ./node_modules/config/lib/config.js
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
