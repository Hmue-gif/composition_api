import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Reactive from '../views/Reactive.vue'
import Computed from '../views/Computed.vue'
import Props from '../views/Props.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reactive',
    name: 'Reactive',
    component: Reactive
  },
  {
    path: '/computed',
    name: 'Computed',
    component: Computed
  },
  {
    path: '/props',
    name: 'Props',
    component: Props
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
