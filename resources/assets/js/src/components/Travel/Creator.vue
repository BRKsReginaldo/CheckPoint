<script>
  import Vue from 'vue'
  import Modal from '../UI/Modal'

  export const TravelCreator = Vue.extend({
    name: "TravelCreator",
    components: {
      Modal
    },
    mounted() {
      setTimeout(() => {
        this.$refs.modal.open()
      }, 2000)
    }
  })

  export default TravelCreator
</script>

<style scoped>

</style>

<template>
    <div class="text-right">
        <button class="btn btn-success" @click="$refs.modal.open()">Cadastrar Viagem</button>

        <modal ref="modal" title="Cadastrar Viagem">
            The content
        </modal>
    </div>
</template>