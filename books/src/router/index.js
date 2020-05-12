import Vue from 'vue'
import VueRouter from 'vue-router'
import BookItemList from '../views/BookItemList.vue'
import BookItem from '../views/BookItem.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'BookItemList',
    component: BookItemList
  },
  {
    path: '/bookItem/id=:bookItemId',
    name: 'BookItem',
    component: BookItem
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
