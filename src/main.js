// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuex from 'vuex'
import faker from 'faker'

Object.defineProperty(Vue.prototype, '$faker', { value: faker })

Vue.use(Vuex)
Vue.use(Vuetify)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    main_speeddial: true
  },
  mutations: {
    disable_speeddial (state) {
      state.main_speeddial = false
    },
    enable_speeddial (state) {
      state.main_speeddial = true
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
