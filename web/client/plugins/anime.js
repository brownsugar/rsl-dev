import Vue from 'vue'
import anime from 'animejs/lib/anime.es'

const handler = (targets, binding) => {
  const options = {
    ...binding.value,
    ...{ targets }
  }
  anime(options)
}
Vue.directive('anime', {
  bind: handler,
  update: handler
})

export default (ctx, inject) => {
  inject('anime', anime)
}
