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
    component: () => import('../views/Create.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
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
  },
  {
    path: '/manage/',
    name: 'Manage',
    component: () => import('../views/Manage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
