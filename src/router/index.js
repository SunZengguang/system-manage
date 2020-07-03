import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '/video',
        component: () => import('../components/VideoManage.vue')
      },
      {
        path: '/user',
        component: () => import('../components/UserManage.vue')
      },
      {
        path: '/func1',
        component: () => import('../components/Fun1.vue')
      },
      {
        path: '/func2',
        component: () => import('../components/Fun2.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
