<template>
  <section class="relative overflow-hidden my-6 block">
    <div class="container mx-auto">
      <router-link to="#" class="">
        <h2 class="text-3xl leading-6 capitalize">{{ cat }} ></h2>
      </router-link>
      <div
        class="grid md:grid-cols-4 sm:grid-cols-1 gap-4 mt-5 md:border-b sm:border-b-0"
      >
        <!-- single news item start here -->
        <div
          class="relative news-item md:border-r sm:border-r-0 last:border-r-0"
          v-for="post in articles"
        >
          <a :href="post.url" rel="nofollow">
            <div class="news-image">
              <img
                :src="post.urlToImage"
                alt="image"
                class="max-w-full"
              />
            </div>
            <h3 class="text-2xl font-light leading-6 my-4">
              {{ titleLimit(post.title) }}
            </h3>
            <p class="text-base font-light leading-6 mb-4">
              {{ post.description }}
            </p>
            <p class="text-sm font-light leading-6 mb-3">{{ post.author }}</p>
          </a>
        </div>
        <!-- single news item stop here -->
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "NewsFourColumn",
  props: ["cat", "limit"],
  setup(props) {},
  data() {
    return {
      limit: this.limit,
      category: this.cat,
      articles: [],
    };
  },
  mounted() {
    console.log("mounted");
  },
  methods: {
    fetchdata(category, date, limit="4") {
      return fetch(
        `https://newsapi.org/v2/everything?q=${category}&to=${date}&pageSize=${limit}&sortBy=popularity&apiKey=c9006872cc8a4c9c923fc99a3d4d4a7c`
      )
        .then((response) => response.json())
        .then((data) => (this.articles = data.articles));
    },

    currentDate: () => {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const today = `${year}-${month}-${day}`;
      return today;
    },
    titleLimit: (title) => {
      if( title.length >= 50 ){
        return title.substring(0, 50)+'...';
      }
      return title;
    }
  },
  async created() {
    this.fetchdata(this.category, this.currentDate(), this.limit);
  },
};
</script>
