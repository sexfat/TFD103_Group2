import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router.js'
import App from './App'
import $ from 'jquery'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGoogle,faInstagram,faLine} from '@fortawesome/free-brands-svg-icons'
import { faAnglesLeft,faAngleLeft,faAnglesRight,faAngleRight,fa5,fa4,fa3,fa2,fa1,faXmark,faSortDown,faSortUp, faCircle, faMagnifyingGlass, faAnglesDown, faPlus, faMinus, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faGoogle,faInstagram,faLine,faAnglesLeft,faAngleLeft,faAnglesRight,faAngleRight,fa5,fa4,fa3,fa2,fa1,faXmark,faSortDown,faSortUp, faCircle, faMagnifyingGlass, faAnglesDown, faPlus, faMinus, faTrashCan)
Vue.component('font-awesome-icon', FontAwesomeIcon)
// Vue.config.productionTip = true
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode:"history",
})
// console.log(router)
new Vue({
  router,
  render: h => h(App),
  
}).$mount('#app')

