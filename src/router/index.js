import { createRouter, createWebHashHistory } from "vue-router";
import home from '../components/home.vue'
import other from '../components/other.vue'

const routes = [
    {
      path: '/',
      name: 'index',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/FAQ',
      name: 'other',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: other
    }
]
  
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router