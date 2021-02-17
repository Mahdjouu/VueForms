/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import VueFormGenerator from "vue-form-generator";
import "vue-form-generator/dist/vfg-core.css";
import 'vue-form-generator/dist/vfg.css'

import "axios"
const axios = require('axios').default;


Vue.use(VueFormGenerator)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
