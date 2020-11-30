import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import { adminRouter } from './admin'
import {rootRouter}  from './root'
Vue.use(VueRouter)

const root:any = rootRouter
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/root/Base.vue'),
    children: rootRouter
  },
  {
    path: "/admin/",
    component: () => import('@/views/admin/Base.vue'),
    children: adminRouter
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
