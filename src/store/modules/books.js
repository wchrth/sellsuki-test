import axios from 'axios'

const state = {
  loading: false,
  books: []
}

const actions = {
  async fetchBooks (context) {
    context.commit('setLoading', true)
    try {
      const { data } = await axios.get('https://api.jsonbin.io/b/5f3154b06f8e4e3faf2f99de')
      context.commit('setBooks', data.books)
    } catch (e) {
      context.commit('setBooks', [])
    } finally {
      context.commit('setLoading', false)
    }
  }
}

const mutations = {
  setLoading (state, loading) {
    state.loading = loading
  },
  setBooks (state, books) {
    state.books = books
  }
}

const getters = {
  loading (state) {
    return state.loading
  },
  books (state) {
    return state.books
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
