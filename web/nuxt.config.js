import CompressionPlugin from 'compression-webpack-plugin'
import config from 'config'
import overallSeasons from './client/data/overall-seasons'

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
 * Assets gzip compression
 * https://github.com/webpack-contrib/compression-webpack-plugin
 */
const compressPlugins = isProd
  ? [
      new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.(js|css|html|svg|png|jpe?g|gif|ico)$/,
        minRatio: 1
      })
    ]
  : []

export default {
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
    middleware: ['redirect'],
    extendRoutes (routes, resolve) {
      // Treat as same component
      overallSeasons.forEach((season) => {
        const code = season.code
        routes.push({
          name: `${code}-news-category`,
          path: `/${code}/news/category/:slug`,
          component: resolve(__dirname, `client/pages/${code}/news/index.vue`)
        })
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
      { property: 'og:locale', content: 'zh_TW' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' }
    ],
    script: []
  },
  loading: { color: '#fff' },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/rsl/theme.scss',
    '~/assets/styles/vendor/fontawesome.scss'
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
    '~/plugins/mobile-detect.js',
    '~/plugins/breakpoint.js',
    '~/plugins/clipboard.js',
    '~/plugins/vue-youtube.js',
    { src: '~/plugins/vue-affix.js', mode: 'client' },
    { src: '~/plugins/vue-scrollspy.js', mode: 'client' },
    { src: '~/plugins/anime.js', mode: 'client' }
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/vuetify',
    '@nuxtjs/google-fonts',
    '@nuxtjs/date-fns',
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
  // Stylelint module configuration: https://github.com/nuxt-community/stylelint-module
  stylelint: {
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/styles/vuetify/variables.scss'],
    optionsPath: '~~vuetify.options.js',
    defaultAssets: false,
    // custom variables only works with tree-shaking.
    treeShake: isProd
  },
  // Google Fonts module configuration: https://github.com/nuxt-community/google-fonts-module
  googleFonts: {
    families: {
      Roboto: true,
      'Noto+Sans+TC': [400, 700, 900]
    },
    download: false
  },
  // date-fns module configuration: https://github.com/nuxt-community/date-fns-module
  dateFns: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW']
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
      'vuetify/lib',
      'wpapi',
      'superagent',
      'vue-fontawesome'
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
