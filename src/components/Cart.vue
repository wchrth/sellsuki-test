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

    <b-row v-if="items.length > 0">
      <b-col cols="8">Price</b-col>
      <b-col class="text-muted text-right" cols="4">{{ amount }}</b-col>
      <b-col cols="8">Discount</b-col>
      <b-col class="text-muted text-right" cols="4">{{ discountAmount }}</b-col>
      <b-col cols="8">Net</b-col>
      <b-col class="text-muted text-right" cols="4">{{ amount - discountAmount }}</b-col>
    </b-row>

    <modal-checkout></modal-checkout>

    <template v-if="items.length > 0" #footer>
      <b-button v-b-modal.checkout block variant="primary">Checkout</b-button>
    </template>
  </b-card>
</template>

<script>
import { mapGetters } from 'vuex'
import ModalCheckout from '@/components/ModalCheckout.vue'

export default {
  name: 'Cart',
  components: {
    ModalCheckout
  },
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
      items: 'cart/items',
      amount: 'cart/amount',
      discountAmount: 'cart/discountAmount'
    })
  },
  methods: {
    deleteFromCart (bookId) {
      this.$store.dispatch('cart/deleteFromCart', bookId)
    }
  }
}
</script>
