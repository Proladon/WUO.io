import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('../views/Create.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/search/',
    name: 'Search',
    props: true,
    component: () => import('../views/Search.vue'),
    children: [
      {
        path: ':refKey',
        props: true,
        component: () => import('../views/Search.vue'),
      }
    ]
  },
  {
    path: '/guide/:id',
    name: 'Guide',
    props: true,
    component: () => import('../views/Guide.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
