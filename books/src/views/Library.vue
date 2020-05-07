<template>
  <section class="library">
<div>
  <h1>Book Library</h1>
    <!-- {{this.$root.bookData}} -->
   <!-- <div class="bookLink" v-bind:key="item.id" v-for="item in bookData"> -->
   <div class="bookLink" v-bind:key="item.id" v-for="item in this.$root.bookData">
      <h3>
        {{item.title}}</h3>
      <router-link to="{ name: 'book', params: {placeName: detail.name } }">{{item.title}}</router-link>
    </div>
</div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Sondell book App"/>
  </section>
</template>

<script>
// @ is an alias to /src
 import HelloWorld from '@/components/HelloWorld.vue'




export default {
  name: 'Library',
  components: {
    HelloWorld
  }
}
</script>
