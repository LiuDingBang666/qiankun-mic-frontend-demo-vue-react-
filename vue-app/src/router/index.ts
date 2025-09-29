import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// Route components - lazy loaded examples
const Home = () => import('../pages/Home.vue')
const About = () => import('../pages/About.vue')
const NotFound = () => import('../pages/NotFound.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: 'About' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { title: '404 Not Found' }
  }
]

// 当作为 qiankun 子应用运行时，url 实际上形如 /app-vue/...，需要把 /app-vue 作为 history base
const router = createRouter({
  history: createWebHistory('/app-vue'),
  routes
})

router.afterEach((to) => {
  if (to.meta?.title) {
    document.title = String(to.meta.title)
  }
})

export default router
