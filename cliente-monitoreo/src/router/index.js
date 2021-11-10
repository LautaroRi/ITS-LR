import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path:'/clientes',
    name:'Clientes',
    component: () => import('../views/Cliente.vue')
  },
  {
    path: '/cpu',
    name:'CPU',
    component: () => import('../views/Cpu.vue')
  },
  {
    path: '/drive',
    name:'Drive',
    component: () => import('../views/Drive.vue')
  },
  {
    path: '/memoria',
    name: 'Memoria',
    component: () => import('../views/Memoria.vue')
  },
  {
    path: '/os',
    name: 'OS',
    component: () => import('../views/Os.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('../views/Contacto.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
