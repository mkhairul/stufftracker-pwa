import Vue from 'vue'
import Router from 'vue-router'
import MainTemplate from '@/components/MainTemplate'
import Main from '@/components/MainPage'
import Camera from '@/components/Camera'
import NewItem from '@/components/NewItem'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainTemplate,
      redirect: '/mainpage',
      children: [
        {
          path: '/mainpage',
          component: Main,
          name: 'MainPage'
        },
        {
          path: '/camera',
          name: 'Camera',
          component: Camera
        },
        {
          path: '/newitem',
          name: 'New Item',
          component: NewItem
        }
      ]
    },
    {
      path: '/login',
      component: Login,
      name: 'Login'
    }
  ]
})
