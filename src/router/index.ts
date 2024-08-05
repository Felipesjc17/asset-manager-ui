import { createRouter, createWebHistory } from 'vue-router'
import CompoundInterest from '@/modules/compound-interest/CompoundInterest.vue'

const router = createRouter({
  history: createWebHistory('asset-manager-ui'),
  routes: [
    {
      path: '/',
      name: '',
      redirect: { name: 'compound-interest' }
    },
    {
      path: '/compound-interest',
      name: 'compound-interest',
      component: CompoundInterest
    }
  ]
})

export default router
