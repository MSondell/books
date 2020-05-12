import Vue from 'vue'
import App from './App.vue'
import router from './router'
import childrensbooks from './assets/childrensbooks.json'

Vue.config.productionTip = false

new Vue({
  data() {
    return {
      bookArray: childrensbooks.books
    }
  },
  methods:{
    getBook(id){
     return this.bookArray.find(book => book.id==id);
      
    }
  },

  router,
  render: h => h(App)
}).$mount('#app')
