import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/MainPage'
import Camera from '@/components/Camera'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: Main
    },
    {
      path: '/camera',
      name: 'Camera',
      component: Camera
    }
  ]
})
