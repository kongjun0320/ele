import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./views/Index'),
      children: [
        {
          path: '',
          redirect: '/home'
        },
        {
          path: '/home',
          name: 'home',
          component: () => import('./views/Home')
        },
        {
          path: 'order',
          name: 'order',
          component: () => import('./views/Order')
        },
        {
          path: 'me',
          name: 'me',
          component: () => import('./views/Me')
        },
        {
          path: 'addre',
          name: 'addre',
          component: () => import('./views/Addre')
        },
        {
          path: 'city',
          name: 'city',
          component: () => import('./views/City')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search')
    }
  ]
})