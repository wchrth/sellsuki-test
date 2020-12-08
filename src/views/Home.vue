<template>
  <b-container fluid class="py-3">
    <b-row>
      <b-col md="8">
        <book-list></book-list>
      </b-col>
      <b-col md="4">
        <cart></cart>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import BookList from '@/components/BookList.vue'
import Cart from '../components/Cart.vue'

export default {
  name: 'Home',
  components: {
    BookList,
    Cart
  }
}
</script>
