import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog')
  },
  {
    path: '/shortcodes',
    name: 'Shortcodes',
    component: () => import('../views/Shortcodes')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery')
  }
]

const router = new VueRouter({
  routes
})

export default router
