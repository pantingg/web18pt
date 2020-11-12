import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component:()=>import('./views/Deng.vue')
    },
    {
      path: '/Zhu',
      component:()=>import('./views/Zhu.vue')
    },
    {
      path: '/Deng',
      component:()=>import('./views/Deng.vue')
    },
    {
      path:'/Shou',
      component:()=>import('./components/Shou.vue'),
      children:[
        {
          path:'/',
          component:()=>import('./views/Zu1.vue'),
        },
        {
          path:'/Zu2',
          component:()=>import('./views/Zu2.vue'),
        },
        {
          path:'/Zu3',
          component:()=>import('./views/Zu3.vue'),
        }
      ]
    },
   
  ]
})
