<template>
  <section class="book-item-list">
      <h1>8 Classic Childrens books</h1>
      <div class="book-item-list-container">
        <BookItemCover 
        v-for="bookItem in getBooks" 
        v-bind:key="bookItem.id" 
        v-bind:bookItem="bookItem" />
    </div>
  </section>
</template>

<script>
import BookItemCover from "../components/BookItemCover.vue";

export default {
 
 
 name: "BookItemList",
   components: {
        BookItemCover: BookItemCover
    },
  computed: {
    getBooks() {
      return this.$root.bookArray;
    }
  },
  book() {
    return this.getBooks.find(bookItem => bookItem.id == this.bookItemId);
  }
};
</script>
<style  scoped>
.book-item-list {
  max-width: 1000px;
  margin: 0 auto;
}
.book-item-list-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

article {
  flex: 4 1 20%;
  margin: 5px;
  width: 150px;
  height: 225px;
  margin: 10px;
}
</style>

