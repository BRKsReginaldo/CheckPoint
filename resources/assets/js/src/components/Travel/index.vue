<script>
  import Vue from 'vue'
  import Creator from './Creator'
  import List from './List'

  export const Travel = Vue.extend({
    name: "Travel",
    components: {
      Creator,
      List
    },
    data: () => ({
      travels: []
    }),
    mounted() {
      this.getList()
    },
    methods: {
      async getList() {
        const {data: {data}} = await axios.get('/travel')

        this.travels = data
      }
    }
  })


  export default Travel
</script>

<style scoped>

</style>

<template>
    <div>
        <creator class="mb-4" @created="getList"/>
        <list :travels="travels"/>
    </div>
</template>