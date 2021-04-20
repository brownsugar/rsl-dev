const CompressionPlugin = require('compression-webpack-plugin')

const config = require('config')
const colors = require('vuetify/es5/util/colors').default

const isProd = process.env.NODE_ENV === 'production'

/**
 * Map some routes from WordPress
 */
const serverMiddlewares = config.server.proxy.map((path) => {
  return {
    path,
    handler: '~~server/endpoint/proxy'
  }
})
/**
 * Automatic polyfills
 * https://github.com/wessberg/polyfiller
 */
const polyfills = [
  'intersection-observer',
  'scroll-behavior'
].join(',')
/**
 * Server gzip compression
 * https://github.com/webpack-contrib/compression-webpack-plugin
 */
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
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  srcDir: 'client/',
  buildDir: '.nuxt' + (process.argv.includes('--tmp') ? '.tmp' : ''),
  server: {
    host: config.server.host,
    port: config.server.port
  },
  serverMiddleware: [
    ...serverMiddlewares
  ],
  // Router: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-router
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'news-category',
        path: '/news/category/:slug',
        component: resolve(__dirname, 'client/pages/news/index.vue')
      })
    }
  },
  /**
   * Vue Meta configuration
   * https://go.nuxtjs.dev/config-head
   * https://vue-meta.nuxtjs.org/guide/metainfo.html
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
    ],
    script: [
      { src: `https://polyfill.app/api/polyfill?features=${polyfills}`, body: true }
    ]
  },
  loading: { color: '#fff' },
  // Global CSS: https://go.nuxtjs.dev/config-css
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
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-warn.js',
    '~/plugins/breakpoint.js',
    '~/plugins/fontawesome.js',
    '~/plugins/clipboard.js',
    '~/plugins/vue-youtube.js',
    { src: '~/plugins/vue-affix.js', mode: 'client' }
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
    '@nuxtjs/google-analytics'
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-config/module',
    '@nuxtjs/axios',
    'wp-nuxt'
  ],
  // Fix Vue meta & GA integration
  features: {
    transitions: false
  },
  vueMeta: {
    refreshOnceOnNavigation: true
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
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
      },
      options: {
        customProperties: true
      }
    },
    defaultAssets: {
      icons: false
    },
    // custom variables only works with tree-shaking.
    treeShake: true
  },
  // Moment module configuration: https://github.com/nuxt-community/moment-module
  moment: {
    defaultLocale: 'zh-tw',
    locales: ['zh-tw']
  },
  /**
   * Google Analytics module configuration
   * https://github.com/nuxt-community/analytics-module
   * https://matteogabriele.gitbooks.io/vue-analytics/
   */
  googleAnalytics: {
    id: config.rsl.ga,
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
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
  },
  /**
   * wp-nuxt module configuration
   * https://github.com/yashha/wp-nuxt
   * node-wpapi: https://github.com/WP-API/node-wpapi
   * @nuxtjs/sitemap: https://github.com/nuxt-community/sitemap-module
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
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: isProd,
    plugins: [
      ...compressPlugins
    ],
    transpile: [
      'wpapi',
      'superagent'
    ],
    extend (config, { isClient, loaders: { vue } }) {
      config.resolve.alias.vue$ = 'vue/dist/vue.esm.js'
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
  },
  telemetry: false
}
