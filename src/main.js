import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store.js'

Vue.config.productionTip = false

new Vue({
  devServer: {
    proxy: 'http://localhost:8080'
  },
  store,
  render: h => h(App)
}).$mount('#app')
