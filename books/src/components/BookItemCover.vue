<template>
  
  <article class="book-item-cover"
    v-on:click="routeToBookItem"
    v-bind:style="{'background-image': bookItemColor}"
  >
  <div class="cover-back"></div>
    <h3 class="book-item-title">{{bookItem.title}}</h3>
    <h5 class="book-item-author">{{bookItem.author}}</h5>
  </article>
</template>

<script>
export default {

 name: "BookItemCover",
  data() {
    return {
 disablerRouterLink:this.routerLinkDisabled
    };
  },
  props: {
    bookItem: Object,
    linkDisabled: Boolean
  },
    methods: {
    routeToBookItem() {
        if(!this.disableRouterLink){this.$router.push("/bookItem/id=" + this.bookItem.id);}
    }
  },
  computed: {
    bookItemColor() {
      return `linear-gradient(to bottom left, ${this.bookItem.color}8C, ${this.bookItem.color})`;
    }
  }

};
</script>
<style>
article.book-item-cover {
  display: flex;
  flex-wrap: nowrap;
  width: 300px;
  height: 400px;
  margin: 10px;
}
.cover-back {
  border-width: 0 3px 0 0;
  border-color: rgba(98, 98, 98, 0.459);
  border-style: solid;
  min-width: 20px;
}
.book-item-data-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
  padding: 10px;
}
.book-item-title,
.book-item-author {
  color: blue;
  margin: 0;
  text-align: left;
}
</style>