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
      return this.$wp.pages()
        .slug(slug)
        .embed()
        .then((posts) => {
          const post = posts[0]
          if (post) {
            commit('addSingle', {
              [slug]: post
            })
          }
          return post
        }).catch((e) => {
          return null
        })
    }
  }
}
