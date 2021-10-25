import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './assets/router/router.js'
import $ from 'jquery'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGoogle,faInstagram,faLine} from '@fortawesome/free-brands-svg-icons'
import { faAnglesLeft,faAngleLeft,faAnglesRight,faAngleRight,fa5,fa4,fa3,fa2,fa1,faXmark} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faGoogle,faInstagram,faLine,faAnglesLeft,faAngleLeft,faAnglesRight,faAngleRight,fa5,fa4,fa3,fa2,fa1,faXmark)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

new Vue({
  router,
}).$mount('#app')
