import Vue from 'vue'
import Router from 'vue-router'
import Info from '@/components/info';
import DataList from '@/components/datalist';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Info
    },
    {
      path: '/info',
      name:'info',
      component:Info
    },
    {
      path:"/datalist",
      name:"datalist",
      component:DataList
    }

  ]
})
