<template>
  <div class="home">
    <v-container>
      <carousels></carousels>
      首页

    </v-container>
  </div>
</template>

<script>
  import Carousels from '../../components/carousels.vue'
  export default {
    name: 'Home',
    components: {
      Carousels
    },
    data() {
      return {}
    },
  }
</script>

<style scoped>
  /* .home-container {
    width: 1220px;
  } */
</style>