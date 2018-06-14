// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuex from 'vuex'
import faker from 'faker'
import VueFirestore from 'vue-firestore'
import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
  projectId: 'stufftracker-86f5c',
  databaseURL: 'https://stufftracker-86f5c.firebaseio.com'
})

export const db = firebase.firestore()
const settings = { timestampsInSnapshots: true }
db.settings(settings)

Object.defineProperty(Vue.prototype, '$faker', { value: faker })
Object.defineProperty(Vue.prototype, '$db', { value: db })

Vue.use(VueFirestore)
Vue.use(Vuex)
Vue.use(Vuetify)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    main_speeddial: true,
    item: {},
    image: ''
  },
  mutations: {
    disable_speeddial (state) {
      state.main_speeddial = false
    },
    enable_speeddial (state) {
      state.main_speeddial = true
    },
    saveNewItem (state, itemObj) {
      state.item = itemObj
    },
    newImage (state, image) {
      console.log('storing image')
      console.log(image)
      state.image = image
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
