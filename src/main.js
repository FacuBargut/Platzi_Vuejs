import Vue from 'vue'
import App from './App.vue'
import EventBus from '../src/plugins/event-bus'
import VueRouter from 'vue-router'

import routes from '../src/routes.js'

Vue.use(VueRouter)
Vue.use(EventBus)

const router = new VueRouter({ routes })

new Vue({
  el: '#app',
  render: h => h(App),
  router
})


