import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'main' },
    component: HomeView
  },
  {
    path: '/about',
    meta: { layout: 'main' },
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/document',
    meta: { layout: 'main' },
    name: 'document',
    component: () => import('../views/DocumentsView.vue')
  },
  {
    path: '/team',
    meta: { layout: 'main' },
    name: 'team',
    component: () => import('../views/TeamView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
