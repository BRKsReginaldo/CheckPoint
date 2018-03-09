import App from './App'
import router from './router'

window.Vue = require('vue');

export default new Vue({
  el: '#app',
  router,
  render: h => h(App)
});