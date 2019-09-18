import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Query from "@/components/Query";
import Menu from "@/components/Menu";



Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },

    {
      path: '/',
      name: 'Query',
      component: Query
    },

    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    }
  ]
})
