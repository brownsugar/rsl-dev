import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(fas, far, fab)

Vue.component('fa', FontAwesomeIcon)
Vue.component('font-awesome-icon', FontAwesomeIcon)
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
      },
      starEmpty: {
        component: FontAwesomeIcon,
        props: {
          icon: ['far', 'star']
        }
      }
    }
  }
})
