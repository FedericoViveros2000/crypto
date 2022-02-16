import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Exchanges from '../views/Exchanges.vue'
import cryptoAll from '../views/CryptoAll'
import cryptoDetails from '../views/CryptoDetails'

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
  },

  {
    path: '/todas',
    name: 'todas',
    component: cryptoAll
  },

  {
    path: '/detalles',
    name: 'detalles',
    component: cryptoDetails
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
