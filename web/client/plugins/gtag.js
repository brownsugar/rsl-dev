import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default function ({ app }) {
  Vue.use(VueGtag, {
    config: {
      id: app.$config.rsl.ga
    },
    pageTrackerTemplate () {
      return {
        page_title: window.document.title
      }
    }
  }, app.router)
}
