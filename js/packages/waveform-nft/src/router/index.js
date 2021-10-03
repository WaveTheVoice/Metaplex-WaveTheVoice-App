import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Input from '@/views/Input.vue'
import Mint from '@/views/Mint.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/input',
    name: 'Input',
    component: Input
  },
  {
    path: '/mint',
    name: 'Mint',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Mint.vue')
    component: Mint
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
