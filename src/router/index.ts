import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Create from '@/views/Create.vue'
import About from '@/views/About.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/about',
    name: 'About',
    component: About
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
    path: '/guide/',
    name: 'Guide',
    component: () => import('../views/Guide.vue')
  },
  {
    path: '/auth/',
    name: 'Auth',
    component: () => import('../views/Auth.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
