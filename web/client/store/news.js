export const state = () => ({
  categories: [],
  current: [],
  single: {},
  totalPage: 1,
  loading: false
})

export const getters = {
  getCategoryById: state => (catId) => {
    const category = state.categories.find(cat => cat.id === catId)
    return category || {}
  }
}

export const mutations = {
  setCategory (state, data = []) {
    state.categories = data
  },
  addSingle (state, data = {}) {
    state.single = {
      ...state.single,
      ...data
    }
  },
  setCurrent (state, data = []) {
    state.current = data
  },
  setTotalPage (state, value) {
    state.totalPage = value
  },
  setLoading (state, value) {
    state.loading = value
  }
}

export const actions = {
  async initCategory ({ commit }) {
    const data = await this.$wp.categories()
    commit('setCategory', data)
  },
  load ({ state, commit }, { catSlug, page = 1, perPage = 6 } = {}) {
    commit('setLoading', true)
    const category = state.categories.find(cat => cat.slug === catSlug) || {}
    if (catSlug && !category.id) {
      commit('setLoading', false)
      return null
    }
    return this.$wp.posts()
      .categories(category.id)
      .perPage(perPage)
      .page(page)
      .embed()
      .then((data) => {
        commit('setTotalPage', data._paging ? data._paging.totalPages : 1)
        commit('setCurrent', data)
        if (data.length) {
          const single = data.reduce((result, post) => {
            result[post.id] = post
            return result
          }, {})
          commit('addSingle', single)
        }
        commit('setLoading', false)
        return data
      }).catch((e) => {
        return null
      })
  },
  getNewsById ({ state, commit }, id) {
    if (id in state.single) {
      return Promise.resolve(state.single[id])
    } else {
      if (!id || isNaN(Number(id))) {
        return null
      }
      let request = this.$wp.posts()
      const { ck, cv, nonce } = this.$router.history.current.query
      if (ck && cv && nonce) {
        request = request
          .setHeaders('Cookie', ck + '=' + cv)
          .auth({
            nonce
          })
      }
      return request
        .id(id)
        .embed()
        .then((post) => {
          if (post) {
            commit('addSingle', {
              [post.id]: post
            })
          }
          return post
        }).catch((e) => {
          return null
        })
    }
  }
}
