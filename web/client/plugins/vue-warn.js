import Vue from 'vue'

const ignoreWarnMessage = 'The .native modifier for v-on is only valid on components but it was used on <svg>.'
Vue.config.warnHandler = (msg, vm, trace) => {
  if (msg === ignoreWarnMessage) {
    msg = null
    vm = null
    trace = null
  }
}
