<template>
  <b-container fluid class="py-3">
    <b-row>
      <b-col md="8">
        <book-list/>
      </b-col>
      <b-col md="4"></b-col>
    </b-row>
  </b-container>
</template>

<script>
import BookList from '@/components/BookList.vue'

export default {
  name: 'Home',
  components: {
    BookList
  }
}
</script>
