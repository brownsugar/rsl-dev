const defer = require('config/defer').deferConfig

/**
 * Access config by:
 * 1. import { config } from 'nuxt-config'
 * 2. this.$config.api
 * 3. ctx.app.$config.api
 */

const config = {
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  api: 'http://rsl.local/api',
  rsl: {
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
