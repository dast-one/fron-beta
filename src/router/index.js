import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ScanRequest from '../views/ScanRequest.vue'
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
      path: '/scanreq',
      name: 'scanreq',
      component: ScanRequest
    },
    {
      // path: '/product/:product_id',
      path: '/product',
      name: 'product',
      component: ProductView,
      props: route => ({ product_id: route.query.product_id })
    },
    {
      // path: '/product/:product_id/report/:report_id',
      // path: '/report/:report_id',
      path: '/report',
      name: 'report',
      component: ReportView,
      props: route => ({ report_id: route.query.report_id })
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
