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
    const data = await this.$axios.$get('wp/v2/categories')
    commit('setCategory', data)
  },
  load ({ commit }, { page = 1, perPage = 6 } = {}) {
    commit('setLoading', true)
    return this.$axios.get('wp/v2/posts' + '?_embed', {
      params: {
        page,
        per_page: perPage
      }
    }).then(({ data, headers }) => {
      commit('setTotalPage', Number(headers['x-wp-totalpages'] || 1))
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
    })
  },
  getNewsById ({ state, commit }, id) {
    if (id in state.single) {
      return Promise.resolve(state.single[id])
    } else {
      return this.$axios.$get('wp/v2/posts/' + id + '?_embed').then((post) => {
        commit('addSingle', {
          [post.id]: post
        })
        return post
      })
    }
  }
}
