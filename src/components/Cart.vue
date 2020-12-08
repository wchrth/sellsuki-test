<template>
  <b-card>
    <div v-if="items.length === 0" class="text-center text-muted">No items</div>
    <b-table v-else :items="items" :fields="fields">
      <template #cell(action)="row">
        <b-button size="sm" variant="danger" @click="deleteFromCart(row.item.id)">
          <b-icon icon="trash" aria-hidden="true"></b-icon>
        </b-button>
      </template>
    </b-table>
  </b-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  data () {
    return {
      fields: [
        { key: 'title', label: 'Title' },
        { key: 'price', label: 'Price' },
        { key: 'quantity', label: 'Qty' },
        { key: 'action', label: '' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      items: 'cart/items'
    })
  },
  methods: {
    deleteFromCart (bookId) {
      this.$store.dispatch('cart/deleteFromCart', bookId)
    }
  }
}
</script>
