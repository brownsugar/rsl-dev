import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faAngleLeft as fasAngleLeft,
  faAngleRight as fasAngleRight,
  faBars as fasBars,
  faBell as fasBell,
  faCaretDown as fasCaretDown,
  faCircleCheck as fasCircleCheck,
  faCheck as fasCheck,
  faChevronLeft as fasChevronLeft,
  faChevronRight as fasChevronRight,
  faCircleInfo as fasCircleInfo,
  faExclamationTriangle as fasExclamationTriangle,
  faHeart as fasHeart,
  faLink as fasLink,
  faMinus as fasMinus,
  faPlus as fasPlus,
  faRight as fasRight,
  faRightLong as fasRightLong,
  faStar as fasStar,
  faUpRightFromSquare as fasUpRightFromSquare,
  faXmark as fasXmark
} from '@fortawesome/pro-solid-svg-icons'
import {
  faAngleDown as farAngleDown,
  faAngleLeft as farAngleLeft,
  faAngleRight as farAngleRight,
  faBars as farBars,
  faCircleExclamation as farCircleExclamation,
  faMagnifyingGlass as farMagnifyingGlass,
  faMessageLines as farMessageLines,
  faStopwatch as farStopwatch,
  faUpRightFromSquare as farUpRightFromSquare,
  faUserCrown as farUserCrown
} from '@fortawesome/pro-regular-svg-icons'
import {
  faChevronDown as falChevronDown
} from '@fortawesome/pro-light-svg-icons'
import {
  faAnglesDown as fadAnglesDown,
  faAnglesRight as fadAnglesRight,
  faChevronRight as fadChevronRight,
  faChevronsRight as fadChevronsRight,
  faNotes as fadNotes,
  faQuoteLeft as fadQuoteLeft,
  faQuoteRight as fadQuoteRight,
  faShuffle as fadShuffle
} from '@fortawesome/pro-duotone-svg-icons'
import {
  faDiscord as fabDiscord,
  faFacebook as fabFacebook,
  faGithub as fabGithub,
  faTwitch as fabTwitch,
  faYoutube as fabYoutube
} from '@fortawesome/free-brands-svg-icons'

library.add(
  // Solid, fa-solid
  fasAngleLeft,
  fasAngleRight,
  fasBars,
  fasBell,
  fasCaretDown,
  fasCircleCheck,
  fasCheck,
  fasChevronLeft,
  fasChevronRight,
  fasCircleInfo,
  fasExclamationTriangle,
  fasHeart,
  fasLink,
  fasMinus,
  fasPlus,
  fasRight,
  fasRightLong,
  fasStar,
  fasUpRightFromSquare,
  fasXmark,
  // Regular, fa-regular (bug) > far-regular
  farAngleDown,
  farAngleLeft,
  farAngleRight,
  farBars,
  farCircleExclamation,
  farMagnifyingGlass,
  farMessageLines,
  farStopwatch,
  farUpRightFromSquare,
  farUserCrown,
  // Light, fa-light
  falChevronDown,
  // Duotone, fa-duotone
  fadAnglesDown,
  fadAnglesRight,
  fadChevronRight,
  fadChevronsRight,
  fadNotes,
  fadQuoteLeft,
  fadQuoteRight,
  fadShuffle,
  // Brands, fa-brands
  fabDiscord,
  fabFacebook,
  fabGithub,
  fabTwitch,
  fabYoutube
)

Vue.component('Fa', FontAwesomeIcon) // For myself
Vue.component('FontAwesomeIcon', FontAwesomeIcon) // For Vuetify

export default {
  iconfont: 'faSvg',
  values: {
    angleLeft: {
      component: FontAwesomeIcon,
      props: {
        icon: 'fa-solid fa-angle-left'
      }
    },
    angleRight: {
      component: FontAwesomeIcon,
      props: {
        icon: 'fa-solid fa-angle-right'
      }
    },
    random: {
      component: FontAwesomeIcon,
      props: {
        icon: 'fa-duotone fa-shuffle'
      }
    },
    notes: {
      component: FontAwesomeIcon,
      props: {
        icon: 'fa-duotone fa-notes'
      }
    },
    // Following options override Vuetify default variables
    // Defaults: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/services/icons/presets/fa.ts
    prev: {
      component: FontAwesomeIcon,
      props: {
        icon: 'far-regular fa-angle-left'
      }
    },
    next: {
      component: FontAwesomeIcon,
      props: {
        icon: 'far-regular fa-angle-right'
      }
    },
    expand: {
      component: FontAwesomeIcon,
      props: {
        icon: 'far-regular fa-angle-down'
      }
    }
  }
}
