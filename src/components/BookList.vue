<template>
  <b-card>
    <div v-if="loading" class="text-center">
      <b-spinner label="Loading..."></b-spinner>
    </div>
    <b-row v-else class="align-items-stretch">
      <b-col v-for="book in books" :key="book.id" class="mb-3" sm="6" lg="4">
        <b-card
          class="h-100"
          :img-src="book.cover"
          :img-alt="book.title"
          img-top
          :title="book.title"
          :sub-title="`${book.price} Baht`"
        />
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BookList',
  computed: {
    ...mapGetters({
      loading: 'books/loading',
      books: 'books/books'
    })
  },
  created () {
    this.fetchBooks()
  },
  methods: {
    fetchBooks () {
      this.$store.dispatch('books/fetchBooks')
    }
  }
}
</script>

<style lang="scss" scoped>
.card-img-top {
  max-height: 200px;
  min-height: 150px;
  object-fit: contain;
}
</style>
