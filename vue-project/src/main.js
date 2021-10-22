import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './assets/router/router.js'
import $ from 'jquery'

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

new Vue({
  router,
}).$mount('#app')
