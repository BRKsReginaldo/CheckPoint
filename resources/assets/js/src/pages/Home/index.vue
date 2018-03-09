<script>
  import Vue from 'vue'
  import Travel from '../../components/Travel'

  export const Home = Vue.extend({
    name: "Home",
    components: {
      Travel
    }
  })

  export default Home
</script>

<style scoped>

</style>

<template>
    <travel/>
</template>