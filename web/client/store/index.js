export const state = () => ({
  site: {},
  config: {}
})

export const mutations = {
  setData (state, { key, value }) {
    state[key] = value
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('initSite')
    await dispatch('initConfig')
    await dispatch('news/initCategory')
  },
  async initSite ({ commit }) {
    const data = await this.$wp.site()
    commit('setData', {
      key: 'site',
      value: data
    })
  },
  async initConfig ({ commit }) {
    const data = await this.$wp.options().id('rsl-fe-config')
    commit('setData', {
      key: 'config',
      value: data.acf
    })
  }
}
