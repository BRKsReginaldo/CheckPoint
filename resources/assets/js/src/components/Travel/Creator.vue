<script>
  import Vue from 'vue'
  import Modal from '../UI/Modal'
  import InputField from '../UI/Input'

  export const TravelCreator = Vue.extend({
    name: "TravelCreator",
    components: {
      Modal,
      InputField
    },
    data: () => ({
      travel: {
        destiny: '',
        date: '',
        category_id: ''
      },
      cachedTravel: {},
      categories: []
    }),
    async mounted() {
      this.cachedTravel = {...this.travel}
      const {data} = await axios.get('/api/categories')

      this.categories = data
    },
    computed: {
      selectCategories() {
        return this.categories.map(category => ({
          label: category.name,
          value: category._id
        }))
      }
    },
    methods: {
      resetForm() {
        this.$set(this, 'travel', {...this.cachedTravel})
      },
      async onSubmit() {
        const travel = this.travel
        if (travel.destiny && travel.date && travel.category_id) {
          await axios.post('/travel', travel)
          this.$emit('created')
          this.$refs.modal.close()
        }
      }
    }
  })

  export default TravelCreator
</script>

<style scoped>

</style>

<template>
    <div>
        <div class="text-right">
            <button class="btn btn-success"
                    @click="$refs.modal.open()">
                Cadastrar Viagem
            </button>
        </div>

        <form @submit.prevent="onSubmit">
            <modal ref="modal"
                   title="Cadastrar Viagem"
                   @hidden="resetForm">
                <input-field
                        label="Destino"
                        name="destiny"
                        placeholder="Digite seu destino"
                        v-model="travel.destiny"/>

                <input-field
                        label="Data"
                        type="date"
                        name="date"
                        placeholder="Data de viagem"
                        v-model="travel.date"/>

                <div>
                    <label>Categoria</label>
                    <v-select
                            :options="selectCategories"
                            placeholder="Escolha uma categoria"
                            v-model="travel.category_id">
                        <span slot="no-options">não foram encontradas categorias</span>
                    </v-select>
                </div>

                <div slot="footer">
                    <button class="btn btn-danger" @click="$refs.modal.close()">Cancelar</button>
                    <button class="btn btn-primary">Cadastrar</button>
                </div>
            </modal>
        </form>
    </div>
</template>