import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VueAxios from './plugins/axios'

Vue.config.productionTip = false
Vue.use(VueAxios)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
