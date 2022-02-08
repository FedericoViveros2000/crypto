import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Exchanges from '../views/Exchanges.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/exchanges',
    name: 'exchanges',
    component: Exchanges
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
