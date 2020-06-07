import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(fas, fab)

Vue.component('fa', FontAwesomeIcon)
Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'faSvg',
    values: {
      fire: {
        component: FontAwesomeIcon,
        props: {
          icon: ['fas', 'fire']
        }
      }
    }
  }
})
