import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/nuestrasnoticias', //Las rutas les asigno el nombre que yo quiero
    name:'Noticias',
    component: () => import('../views/Noticias.vue') // Le muestro de donde debe importar la vista, y qué vista
  },
  {
    path: '/publicaciones',
    name:'Publicacion',
    component: () => import('../views/Publicacion.vue')
  },
  {
    path: '/leydeohm',
    name:'LeyOHM',
    component: () => import('../views/LeyOHM.vue')
  },
  {
    path: '/pitagoras',
    name: 'pitagoras',
    component: () => import('../views/Pitagoras.vue')
  },
  {
    path: '/cliente',
    name: 'Cliente',
    component: () => import('../views/Cliente.vue')
  },
  {
    path: '/producto',
    name: 'Producto',
    component: () => import('../views/Producto.vue')
  },
  {
    path: '/socket',
    name: 'Socket',
    component: () => import('../views/Socket.vue')
  },
  {
    path: '/inicio',
    name : 'Inicio',
    component: () => import('../views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
