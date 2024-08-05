import { createRouter, createWebHistory } from 'vue-router'
import CompoundInterest from '@/modules/compound-interest/CompoundInterest.vue'
// import HomeComponent from '@/modules/home/HomeComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      redirect: 'compound-interest'
    },
    {
      path: '/compound-interest',
      name: 'compound-interest',
      component: CompoundInterest
    }
  ]
})

export default router
