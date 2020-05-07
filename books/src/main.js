import Vue from 'vue'
import App from './App.vue'
import router from './router'
import childrensbooks from './assets/childrensbooks.json'

Vue.config.productionTip = false

new Vue({
data() {return{
 bookData:childrensbooks.books
 
}
},
  
  router,
  render: h => h(App)
}).$mount('#app')
