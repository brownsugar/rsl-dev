export const state = () => ({
  site: {}
})

export const mutations = {
  initSite (state, data) {
    state.site = data
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('init')
  },
  async init ({ commit }) {
    const data = await this.$axios.$get('rsl/v1/site')
    commit('initSite', data)
  }
}
