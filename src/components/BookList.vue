<template>
  <b-card>
    <b-row class="align-items-stretch">
      <b-col v-for="book in bookList" :key="book.id" class="mb-3" sm="6" lg="4">
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
import axios from 'axios'

export default {
  name: 'BookList',
  data () {
    return {
      bookList: []
    }
  },
  created () {
    this.fetchBookList()
  },
  methods: {
    fetchBookList () {
      axios.get('https://api.jsonbin.io/b/5f3154b06f8e4e3faf2f99de').then(({ data }) => {
        this.bookList = data.books
      })
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
