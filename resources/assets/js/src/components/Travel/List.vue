<script>
  import Vue from 'vue'
  import {chunk} from 'lodash'
  import moment from 'moment'
  import Bagage from '../Bagage'


  export const List = Vue.extend({
    name: "List",
    components: {
      Bagage
    },
    props: {
      travels: {
        type: Array,
        required: true
      }
    },
    filters: {
      dateify(value) {
        return moment(value).format('DD/MM/YYYY')
      }
    },
    computed: {
      travelsChunk() {
        return chunk(this.travels, 3)
      }
    },
    methods: {
      addItens(travel, index) {
        this.$set(this.travels, index, {...travel})
      },
      updateItem(item, newItem) {
        console.log('Checkpoint 3', item, newItem)
        // this.travels.splice(item, 1)
        this.$set(this.travels, item, {...newItem})
      }
    }
  })

  export default List
</script>

<style scoped>

</style>

<template>
    <div class="container-fluid">
        <!--<div class="row" v-for="(chunk,i) in travelsChunk" :key="i">-->
            <!---->
        <!--</div>-->
        <div class="row">
            <div class="col-md-4 col-sm-6 mb-4" v-for="(travel, index) in travels" :key="index">
                <div class="card">
                    <div class="card-header">{{travel.destiny}}</div>

                    <div class="card-body">
                        <ul>
                            <li>Data: <b>{{ travel.date | dateify }}</b></li>
                            <li>Tipo: <b>{{travel.category.name}}</b></li>
                        </ul>
                        <bagage @addedItens="(itens) => addItens(itens, index)"
                                @updatedItem="(item) => updateItem(index, item)"
                                :travel="travel"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>