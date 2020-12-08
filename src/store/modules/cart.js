const state = {
  items: []
}

const actions = {
  addToCart (context, book) {
    context.commit('addToCart', book)
  },
  deleteFromCart (context, bookId) {
    context.commit('deleteFromCart', bookId)
  }
}

const mutations = {
  addToCart (state, book) {
    const record = state.items.find(f => f.id === book.id)
    if (!record) {
      state.items.push({
        ...book,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },
  deleteFromCart (state, bookId) {
    const index = state.items.findIndex(f => f.id === bookId)
    if (index > -1) {
      state.items.splice(index, 1)
    }
  }
}

const getters = {
  items (state) {
    return state.items
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
