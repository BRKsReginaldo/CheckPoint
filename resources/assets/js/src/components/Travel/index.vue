<script>
  import Vue from 'vue'
  import Creator from './Creator'

  export const Travel = Vue.extend({
    name: "Travel",
    components: {
      Creator
    }
  })


  export default Travel
</script>

<style scoped>

</style>

<template>
    <div>
        <creator/>
    </div>
</template>