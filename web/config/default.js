const defer = require('config/defer').deferConfig

/**
 * Access config by:
 * 1. import { config } from 'nuxt-config'
 * 2. this.$config.api.base
 * 3. ctx.app.$config.api.base
 */

const config = {
  base: {
    url: 'http://localhost:3000',
    api: 'http://rsl.local'
  },
  rsl: {
    facebook: {
      url: 'https://www.facebook.com/RSLeagueTW',
      username: 'RSLeagueTW'
    },
    youtube: {
      url: 'https://www.youtube.com/channel/UCSXjGuAfR7XSVkPo7mvGacQ?sub_confirmation=1',
      // url: 'https://www.youtube.com/user/RSLeague?sub_confirmation=1',
      username: 'RSLeague'
    },
    twitch: {
      url: 'https://www.twitch.tv/RSLeague',
      username: 'RSLeague'
    }
  },
  // Whitelist for client to use
  client: {
    base: defer(self => self.base),
    rsl: defer(self => self.rsl)
  }
}

module.exports = config
