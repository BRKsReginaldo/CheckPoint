import App from './App'
import router from './router'
import {VueSelect} from 'vue-select'
import store from './store'

window.Vue = require('vue');

window.Vue.component('v-select', VueSelect)

export default new window.Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});