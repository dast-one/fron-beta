import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import ReportView from '../views/ReportView.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product/:product_id',
      name: 'product',
      component: ProductView
    },
    {
      // path: '/product/:product_id/report/:report_id',
      path: '/report/:report_id',
      name: 'report',
      component: ReportView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      // will match everything and put it under `$route.params.pathMatch`
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: NotFound
    },
  ]
})

export default router
