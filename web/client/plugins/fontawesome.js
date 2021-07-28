import Vue from 'vue'
// import Vuetify from 'vuetify/lib'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fas as fasPro } from '@fortawesome/pro-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { far as farPro } from '@fortawesome/pro-regular-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { fad } from '@fortawesome/pro-duotone-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// config.autoAddCss = process.env.NODE_ENV === 'production'

library.add(fas, fasPro, far, farPro, fal, fad, fab)

Vue.component('Fa', FontAwesomeIcon) // For myself
Vue.component('FontAwesomeIcon', FontAwesomeIcon) // For Vuetify
// Vue.use(Vuetify)

export default {
  iconfont: 'faSvg',
  values: {
    angleLeft: {
      component: FontAwesomeIcon,
      props: {
        icon: 'fas fa-angle-left'
      }
    },
    angleRight: {
      component: FontAwesomeIcon,
      props: {
        icon: 'fas fa-angle-right'
      }
    },
    random: {
      component: FontAwesomeIcon,
      props: {
        icon: 'fad fa-random'
      }
    },
    notes: {
      component: FontAwesomeIcon,
      props: {
        icon: 'fa-duotone fa-notes'
      }
    },
    // Following options override Vuetify default variables
    prev: {
      component: FontAwesomeIcon,
      props: {
        icon: 'far fa-angle-left'
      }
    },
    next: {
      component: FontAwesomeIcon,
      props: {
        icon: 'far fa-angle-right'
      }
    },
    expand: {
      component: FontAwesomeIcon,
      props: {
        icon: 'far fa-angle-down'
      }
    }
  }
}
