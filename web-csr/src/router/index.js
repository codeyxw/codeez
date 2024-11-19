import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/components/Layout/Index.vue'
import Home from '@/views/Home/Index.vue'

const routes = [
  { 
    path: '/', 
    component: Layout,
    redirect:'home', 
    children:[
      {
        path:'home',
        component:Home
      },
      {
        path:'message',
        component: ()=> import('@/views/Message/Index.vue')
      },
      {
        path:'account',
        component: ()=> import('@/views/Account/Index.vue')
      },
      {
        path:'collect',
        component:()=> import('@/views/Collect/Index.vue')
      },
      {
        path:'posts',
        component:()=> import('@/views/Bbs/Index.vue')
      },
      {
        path:'creator',
        component:()=> import('@/views/Creator/Index.vue')
      },
      {
        path:'wallet',
        component:()=> import('@/views/Wallet/Index.vue')
      }
    ] 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
    // 我们想要在这里使用 store
    // if (store.isLoggedIn) next()
    // else next('/login')
    next()
})

export default router