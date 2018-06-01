import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

