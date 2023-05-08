import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/',
    component: () => import('@/views/Main.vue'),
    redirect: 'screen',
    children: [
      {
        path: '/screen',
        name: 'screen',
        component: () => import('@/views/screen/index.vue')
      },
      {
        path: '/service1',
        name: 'service1',
        component: () => import('@/views/other/service1.vue')
      },
      {
        path: '/service2',
        name: 'service2',
        component: () => import('@/views/other/service2.vue')
      },
      {
        path: '/collection',
        name: 'collection',
        component: () => import('@/views/collection/index.vue')
      },
      {
        path: '/borrow',
        name: 'borrow',
        component: () => import('@/views/borrow/index.vue')
      },
      {
        path: '/out',
        name: 'out',
        component: () => import('@/views/out/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
