import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Reactive from '../views/Reactive.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
