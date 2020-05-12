<template>
  <section class="book-item">
    <div class="single-book-container">
      <nav>
        <router-link to="/" tag="button" class="home">
         <img class="go-back-image" src="../assets/arrow-back-outline.svg" alt="Go back to previous page"/> -->
        </router-link>
      </nav>
      <BookItemCover
        v-bind:bookItem="bookItem"
        v-bind:class="{viewsingle: BookItemCoverSingleView}"
        v-bind:routerLinkDisabled="true"
      />
      <div class="book-item-details">
        <h1>{{bookItem.title}}</h1>
        <h3>By {{bookItem.author}}</h3>
        <p class="plot">{{bookItem.plot}}</p>
        <div class="book-data">
          <p>
            <span class="data-header">Audience:</span>
            {{bookItem.audience}}
          </p>
          <p>
            <span class="data-header">First published:</span>
            {{bookItem.year}}
          </p>
          <p>
            <span class="data-header">Pages:</span>
            {{bookItem.pages}}
          </p>
          <p>
            <span class="data-header">Publisher:</span>
            {{bookItem.publisher}}
          </p>
        </div>
        <button class="CTA">Oh, I want to read it!</button>
      </div>
    </div>
  </section>
</template>


<script>
import BookItemCover from "../components/BookItemCover.vue";
export default {
  name: "BookItem",
  data() {
    return {
      BookItemCoverSingleView: true
    };
  },
    components: {
        BookItemCover: BookItemCover
    },
  computed: {
    bookItem() {
      return this.$root.getBook(this.$route.params.bookItemId);
    }
  }
};
</script>

<style>
.go-back-image{
  background-color: grey;
}
.book-item {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  background: black;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}
.book-item nav {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 10px;
}
button.home {
  background: none;
  border: 0;
}
button.home img {
  width: 40px;
}
.book-item h1,
.book-item h3,
.book-item p {
  color: white;
  text-align: left;
}
.book-item h1 {
  margin: 0;
  font-size: 2rem;
}
.book-item h3 {
  color: lightgray;
  font-weight: 100;
  margin: 0;
}
.book-item p {
  color: lightgray;
}
.book-item .plot {
  margin-top: 3rem;
}
.single-book-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  justify-content: center;
  margin: 0 auto;
}
.book-cover.viewsingle {
  width: 50%;
  min-width: 300px;
  height: auto;
  min-height: 650px;
  margin: 0;
}
.book-item .book-item-title {
  color: black;
  font-size: 2.8rem;
}
.book-item .book-item-author {
  color: black;
  font-size: 1.3rem;
}
.book-item-details {
  width: 50%;
  min-width: 300px;
  padding: 0 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.book-item-data {
  display: flex;
  flex-wrap: wrap;
  background: rgb(29, 29, 29);
  margin: 10px 0 10px 0;
  border: 0 solid white;
  border-radius: 5px;
  padding: 10px;
}
.book-item-data p {
  display: flex;
  width: 50%;
  min-width: min-content;
  white-space: nowrap;
  padding: 0 2px 0 2px;
  box-sizing: border-box;
  margin: 3px 0 3px 0;
}
.book-item-data .data-header {
  color: white;
  font-weight: 400;
  margin-right: 2px;
}
.book-item .CTA {
  margin-top: auto;
  align-self: flex-start;
  padding: 15px 30px;
  border: 0 solid white;
  border-radius: 5px;
  font-size: 1rem;
  background: white;
}
@media screen and (max-width: 1100px) and (min-width: 641px) {
  .book-item-cover.viewsingle {
    min-height: 400px;
  }
  .book-item .book-item-title {
    font-size: 2.4rem;
  }
  .book-item .book-item-author {
    font-size: 1.2rem;
  }
}
@media screen and (max-width: 640px) {
  .book-item-cover.viewsingle {
    min-height: 370px;
  }
  .book-item .book-item-title {
    font-size: 1.6rem;
  }
  .book-item .book-item-author {
    font-size: 1rem;
  }
  .book-item-details {
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    margin-top: 20px;
  }
  section.book-item {
    padding: 3px;
  }
}
</style>