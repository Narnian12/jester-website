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
  history: createWebHistory(),
  routes
})

// Navigation guard for authentication
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('auth') // Check if authenticated

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login') // Redirect to login if not authenticated
  } else {
    next() // Proceed to the route
  }
})

export default router
