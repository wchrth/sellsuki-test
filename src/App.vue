<template>
  <div id="app">
    <b-navbar variant="light">
      <b-navbar-brand to="/">
        <b-img v-bind="logoProps"/> Shiba Book Shop
      </b-navbar-brand>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      logoProps: {
        src: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        class: 'd-inline-block align-top',
        alt: 'Shiba Book Shop',
        width: 30,
        height: 30
      }
    }
  }
}
</script>
