import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    travelItens: {}
  },

  mutations: {
    ADD_TRAVEL_ITEM(state, payload) {
      state.travelItens[payload['category_id']] = Object.keys(payload)
        .map(key => payload[key])

      let arr = state.travelItens[payload['category_id']];
      arr.splice(arr.indexOf(payload.category_id), 1)
    },
    SET_TRAVEL_ITENS(state, payload) {
      Object.keys(payload)
        .forEach(key => {
          state.travelItens[payload[key]['category_id']] = payload[key]
          let arr = state.travelItens[payload[key]['category_id']];
          arr.splice(arr.indexOf(payload[key].category_id))
        })
    }
  },

  actions: {
    addTravelItem({commit}, payload) {
      commit('ADD_TRAVEL_ITEM', payload)
    },
    setTravelItens({commit}, payload) {
      commit('SET_TRAVEL_ITENS', payload)
    },
    async getTravelItens({commit}, payload) {
      const {data: {data}} = await axios.get(`/itens/${payload}`)

      commit('ADD_TRAVEL_ITEM', {category_id: payload, ...data})
    }
  },

  getters: {
    travelItens: state => state.travelItens,
    hasTravelItem: state => key => state.travelItens.hasOwnProperty(key),
    getTravelItem: state => key => state.travelItens[key] || []
  }
})