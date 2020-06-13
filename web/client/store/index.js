export const state = () => ({
  site: {}
})

export const mutations = {
  setSite (state, data) {
    state.site = data
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('initSite')
    await dispatch('news/initCategory')
  },
  async initSite ({ commit }) {
    const data = await this.$axios.$get('rsl/v1/site')
    commit('setSite', data)
  }
}
