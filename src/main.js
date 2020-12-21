import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import less from 'less';
import axios from 'axios'

Vue.prototype.$axios = axios
axios.defaults.baseURL = "/api";
axios.defaults.timeout = 2000;
Vue.use(less)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')