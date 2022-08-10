import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views'
import E404 from '../views/errors/E404.vue'

import Cv from '../views/cv.view.vue'

const routes = [
  {
    path: '',
    name: 'index',
    component: Home
  },
  {
    path: '/cv',
    name: 'cv',
    component: Cv
  },
  {
    name: 'E404',
    path: "/:NotFound(.*)*",
    //path: "/:catchAll(.*)",
    //path: '/:pathMatch(.*)',
    component: E404,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
