<template>
  <b-modal id="checkout" title="Checkout" @show="resetModal" @hidden="resetModal" @ok="handleOk">
    <b-table :items="items" :fields="fields"></b-table>

    <b-row>
      <b-col cols="6">Price</b-col>
      <b-col class="text-muted text-right" cols="6">{{ amount }}</b-col>
      <b-col cols="6">Discount</b-col>
      <b-col class="text-muted text-right" cols="6">{{ discountAmount }}</b-col>
      <b-col cols="6">Net</b-col>
      <b-col class="text-muted text-right" cols="6">{{ grandTotal }}</b-col>
      <b-col cols="6">Cash</b-col>
      <b-col cols="6">
        <b-form-input
          v-model="cash"
          type="number"
          size="sm"
          :state="cashState"
          aria-describedby="input-cash-feedback"
        ></b-form-input>
        <b-form-invalid-feedback id="input-cash-feedback">
          {{ `This field must be ${grandTotal} or more.` }}
        </b-form-invalid-feedback>
      </b-col>
      <b-col cols="6">Change</b-col>
      <b-col class="text-muted text-right" cols="6">{{ cash - grandTotal }}</b-col>
    </b-row>

    <template #modal-footer="{ ok }">
      <b-button size="sm" variant="primary" @click="ok()">
        Complete order
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ModalCheckout',
  data () {
    return {
      cash: '',
      fields: [
        { key: 'title', label: 'Title' },
        { key: 'price', label: 'Price' },
        { key: 'quantity', label: 'Qty' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      items: 'cart/items',
      amount: 'cart/amount',
      discountAmount: 'cart/discountAmount'
    }),
    grandTotal () {
      return this.amount - this.discountAmount
    },
    cashState () {
      return this.cash >= this.grandTotal
    }
  },
  methods: {
    resetModal () {
      this.cash = ''
    },
    handleOk (e) {
      e.preventDefault()
      this.handleSubmit()
    },
    handleSubmit () {
      if (!this.cashState) {
        return
      }
      const messageVNode = this.createMessageVNode()
      this.$bvModal.msgBoxOk([messageVNode], {
        title: 'Confirmation',
        buttonSize: 'sm',
        okVariant: 'success',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0',
        centered: true
      })
      this.$store.dispatch('cart/checkout')
      this.$nextTick(() => {
        this.$bvModal.hide('checkout')
      })
    },
    createMessageVNode () {
      const h = this.$createElement
      return h('div', [
        h('b-table', { props: { items: this.items, fields: this.fields } }),
        h('b-row', [
          h('b-col', { props: { cols: '6' } }, 'Price'),
          h('b-col', { class: 'text-muted text-right', props: { cols: '6' } }, this.amount),
          h('b-col', { props: { cols: '6' } }, 'Discount'),
          h('b-col', { class: 'text-muted text-right', props: { cols: '6' } }, this.discountAmount),
          h('b-col', { props: { cols: '6' } }, 'Net'),
          h('b-col', { class: 'text-muted text-right', props: { cols: '6' } }, this.grandTotal),
          h('b-col', { props: { cols: '6' } }, 'Cash'),
          h('b-col', { class: 'text-muted text-right', props: { cols: '6' } }, this.cash),
          h('b-col', { props: { cols: '6' } }, 'Change'),
          h('b-col', { class: 'text-muted text-right', props: { cols: '6' } }, this.cash - this.grandTotal)
        ])
      ])
    }
  }
}
</script>
