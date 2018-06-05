import Vue from 'vue'
import Router from 'vue-router'
import AppBase from '@/components/app-base'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'base',
      component: AppBase
    }
  ]
})
