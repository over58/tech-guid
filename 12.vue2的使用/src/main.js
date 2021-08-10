import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './directives/Lazyload'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
