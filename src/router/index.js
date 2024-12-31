import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Work from '../views/Work.vue'
import About from '../views/About.vue'
import Writing from '../views/Writing.vue'
import ProjectDetail from '../views/ProjectDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/work',
    name: 'Work',
    component: Work
  },
  {
    path: '/work/:id',
    name: 'ProjectDetail',
    component: ProjectDetail
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/writing',
    name: 'Writing',
    component: Writing
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router