import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Article from '../components/Article.vue'
import About from '../components/About.vue'
import Like from '../components/Like.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Home,
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
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
    
  ],
})

export default router
