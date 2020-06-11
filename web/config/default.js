const defer = require('config/defer').deferConfig

/**
 * Access config by:
 * 1. import { config } from 'nuxt-config'
 * 2. this.$config.api
 * 3. ctx.app.$config.api
 */

const config = {
  api: 'http://rsl.local/api',
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
    api: defer(self => self.api),
    rsl: defer(self => self.rsl)
  }
}

module.exports = config
