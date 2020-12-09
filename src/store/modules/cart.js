const state = {
  items: [],
  hpBookIds: [
    '9781408855652',
    '9781408855669',
    '9781408855676',
    '9781408855683',
    '9781408855690',
    '9781408855706',
    '9781408855713'
  ]
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
  },
  amount (state) {
    return state.items.reduce((total, item) => {
      return total + (Number(item.price) * item.quantity)
    }, 0)
  },
  discountAmount (state) {
    const hpBooks = state.items.filter(f => state.hpBookIds.indexOf(f.id) > -1)
    const maxQuantity = hpBooks.reduce((total, item) => {
      return item.quantity > total ? item.quantity : total
    }, 0)
    let discountAmount = 0
    for (let i = 1; i <= maxQuantity; i++) {
      const uniqueSeries = hpBooks.filter(f => f.quantity >= i)
      const total = uniqueSeries.reduce((total, item) => {
        return total + Number(item.price)
      }, 0)
      switch (uniqueSeries.length) {
        case 2:
          discountAmount += total * 10 / 100
          break
        case 3:
          discountAmount += total * 11 / 100
          break
        case 4:
          discountAmount += total * 12 / 100
          break
        case 5:
          discountAmount += total * 13 / 100
          break
        case 6:
          discountAmount += total * 14 / 100
          break
        case 7:
          discountAmount += total * 15 / 100
          break
      }
    }
    return discountAmount
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
