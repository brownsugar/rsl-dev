export const state = () => ({
  single: {}
})

export const getters = {
}

export const mutations = {
  addSingle (state, data = {}) {
    state.single = {
      ...state.single,
      ...data
    }
  }
}

export const actions = {
  getPageBySlug ({ state, commit }, slug) {
    if (slug in state.single) {
      return Promise.resolve(state.single[slug])
    } else {
      return this.$axios.$get('wp/v2/pages?slug=' + slug + '&_embed').then((posts) => {
        const post = posts[0]
        commit('addSingle', {
          [slug]: post
        })
        return post
      })
    }
  }
}
