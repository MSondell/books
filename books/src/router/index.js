import Vue from 'vue'
import VueRouter from 'vue-router'
import Library from '../views/Library.vue'
import Book from '../views/Book.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Library',
    component: Library
  },
  {
    path: '/',
    name: 'Book',
    component: Book
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
