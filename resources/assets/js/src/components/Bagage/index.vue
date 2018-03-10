<script>
  import Vue from 'vue'
  import {mapActions, mapGetters} from 'vuex'
  import BagItem from './Item'
  import Modal from '../UI/Modal'

  export const Bagage = Vue.extend({
    name: "Bagage",
    components: {
      Modal,
      BagItem
    },
    props: {
      travel: {
        type: Object,
        required: true
      }
    },
    data: () => ({
      travelItens: [],
      filteredItens: [],
      addCandidates: ''
    }),
    async mounted() {
      if (!this.hasTravelItem(this.travel.category_id)) {
        await this.getTravelItens(this.travel.category_id)
        this.travelItens = this.getTravelItem(this.travel.category_id)
      }
    },
    computed: {
      ...mapGetters([
        'hasTravelItem',
        'getTravelItem',
      ]),
      itensFromTravel() {
        if (!this.travelItens || !this.travel.bag.hasOwnProperty('itens')) return []
        let vm = this
        return this.travel.bag.itens
          .map(item => {
            return vm.travelItens.find(travelItem => {
              return travelItem._id === item
            })
          })
      }
    },
    watch: {
      travelItens(value) {
        if (value) {
          this.filteredItens = value.filter(item => {
            if (!this.travel.bag.hasOwnProperty('itens')) return true
            return !this.travel.bag.itens.includes(item['_id'])
          })
        }
      },
      travel({item_status}) {
        this.filteredItens = this.travelItens
          .filter(item => {
            if (!this.travel.bag.hasOwnProperty('itens')) return true
            return !this.travel.bag.itens.includes(item['_id'])
          })
      },
    },
    methods: {
      ...mapActions([
        'addTravelItem',
        'setTravelItens',
        'getTravelItens'
      ]),
      async addItens() {
        const {data: {data}} = await axios.post(`bag/itens/${this.travel._id}`, {
          itens: [this.addCandidates._id]
        })

        this.addCandidates = ''
        this.$emit('addedItens', data)
      },
      getStatus(item) {
        return this.travel.bag.item_status.find(i => i.id === item)['status'] === 'complete'
      },
      updateItem(newItem) {
        this.$emit('updatedItem', newItem)
      }
    },
  })

  export default Bagage
</script>

<style scoped>

</style>

<template>
    <div>
        <div class="text-right">
            <button class="btn btn-default" @click="$refs.modal.open()">Bagagem</button>
        </div>

        <modal ref="modal" title="Bagagem da viagem">
            <div style="display: flex" class="select-items">
                <div style="flex: 1; margin-right: 10px;">
                    <v-select label="name"
                              :options="filteredItens"
                              v-model="addCandidates"
                              placeholder="Adicionar itens a bagagem">
                        <span slot="no-options">não há mais itens para adicionar na lista</span>
                    </v-select>
                </div>
                <div>
                    <button class="btn btn-success"
                            @click="addItens">Add
                    </button>
                </div>
            </div>

            <div>
                <template v-if="Boolean(itensFromTravel.length)">
                    <bag-item v-for="(item,i) in itensFromTravel"
                              :key="i"
                              :travel="travel"
                              @updateItem="updateItem"
                              :bag-item="item"
                              :status="() => getStatus"/>
                </template>
                <template v-else>
                    <p class="text-center">você ainda não adicionou nenhum item a sua viagem</p>
                </template>
            </div>

            <div slot="footer">
                <button class="btn btn-primary" @click="$refs.modal.close()">Fechar</button>
            </div>
        </modal>
    </div>
</template>