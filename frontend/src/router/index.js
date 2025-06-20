import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Produit from '../components/Produit.vue'
import About from '../components/About.vue'
import Like from '../components/Like.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Home,
    },
    {
      path: '/produit',
      name: 'Produit',
      component: Produit
    },
    {
      path: '/likes',
      name: 'Like',
      component: Like
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
    
  ],
})

export default router
