import Home from '../views/Home.vue'
import Password from '../views/Password.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Define routes
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Password
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true, layout: 'Home' } // This route requires authentication
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/login' // Redirect all unknown routes to /login
  }
]

// Create router instance
const router = createRouter({
  // Base path needs to be the same as config path
  // https://github.com/vuejs/router/issues/1550
  history: createWebHistory(),
  routes
})

// Navigation guard for authentication
router.beforeEach((to, _, next) => {
  const isAuthenticated = JSON.parse(localStorage.getItem('auth') ?? 'false') // Check if authenticated

  if (to.meta.requiresAuth && isAuthenticated === false) {
    next('/login') // Redirect to login if not authenticated
  } else {
    next() // Proceed to the route
  }
})

export default router
