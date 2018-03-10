<script>
  import Vue from 'vue'

  export const Item = Vue.extend({
    name: 'BagItem',
    props: {
      BagItem: {
        type: Object,
        required: false,
        default: () => {
        }
      },
      travel: {
        type: Object,
        required: false,
        default: () => {
        }
      },
      status: {
        type: Function,
        required: true,
        default: () => null
      }
    },
    computed: {
      item() {
        return this.$props.BagItem || {}
      },
      itemStatus() {
        if (this.$props.BagItem) {
          return this.$props.status()(this.item._id)
        }
        return 0
      }
    },
    methods: {
      toggleStatus() {
        axios.put(`/itens/${this.BagItem._id}/${this.travel._id}/toggle-status/${this.itemStatus ? 0 : 1}`)
          .then(response => {
            this.$emit('updateItem', response.data.data)
          })
      }
    }
  })

  export default Item
</script>

<style scoped>

</style>

<template>
    <div :class="{'checklist__item': true, 'checked': itemStatus}" @click="toggleStatus">
        <span class="checklist__label" :for="`status-${item._id}`">{{ item.name || ''}}</span>
    </div>
</template>