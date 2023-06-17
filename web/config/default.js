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
        extension: 'rsl/v1',
        route: '/vote/(?P<action>[\\w\\-\\_]+)',
        name: 'vote'
      },
      {
        extension: 'acf/v3',
        route: '/options/(?P<id>[\\w-_]+)',
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
    cover: {
      season1: defer(self => self.rsl.url + '/RSL_cover_s1.png'),
      season2: defer(self => self.rsl.url + '/RSL_cover_s2.png'),
      kart15th: defer(self => self.rsl.url + '/RSL_cover_kart15th.png'),
      season3: defer(self => self.rsl.url + '/RSL_cover_s3.png')
    },
    ga: 'G-PL45T2HMK3',
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
