import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/Services',
      name: 'Services',
      component: () => import('@/views/ServicesView.vue')
    },
    {
      path: '/Team',
      name: 'team',
      component: () => import('@/views/TeamView.vue')
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: () => import('@/views/ContactUsView.vue')
    }
  ]
})



export default router
