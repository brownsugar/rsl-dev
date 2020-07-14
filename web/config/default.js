const defer = require('config/defer').deferConfig

/**
 * Access config by:
 * 1. import { config } from 'nuxt-config'
 * 2. this.$config.api.url
 * 3. ctx.app.$config.api.url
 */

const config = {
  server: {
    host: '0.0.0.0',
    port: 3000,
    // Map some frontend paths to WP
    proxy: [
      '/feed'
    ]
  },
  wp: {
    customRoutes: [
      {
        extension: 'rsl/v1',
        route: '/site',
        name: 'site'
      },
      {
        extension: 'acf/v3',
        route: '/options/(?P<id>[\\w\\-\\_]+)',
        name: 'options'
      }
    ]
  },
  api: {
    url: 'http://rsl.local',
    path: '/api'
  },
  rsl: {
    name: 'RSL 賽事聯盟',
    url: 'http://localhost:3000',
    cover: defer(self => self.rsl.url + '/RSL_cover_v1.png'),
    facebook: {
      url: 'https://www.facebook.com/RSLeagueTW',
      username: 'RSLeagueTW'
    },
    youtube: {
      url: 'https://www.youtube.com/RSLeague?sub_confirmation=1',
      username: 'RSLeague'
    },
    twitch: {
      url: 'https://www.twitch.tv/RSLeague',
      username: 'RSLeague'
    },
    discord: {
      url: 'https://dc.rsl.tw'
    }
  },
  // Whitelist for client to use
  client: {
    api: defer(self => self.api),
    rsl: defer(self => self.rsl)
  }
}

module.exports = config
