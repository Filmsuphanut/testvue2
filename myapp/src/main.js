import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import router from './router'

import VueAxios from "vue-axios";
import axios from "axios";

Vue.config.productionTip = false

//Vue.use(VueAxios, axios);

new Vue({
  vuetify,
  router,
  VueAxios,
  axios,
  render: h => h(App)
}).$mount('#app')
