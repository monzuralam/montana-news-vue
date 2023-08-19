<template>
  <TopAdvertisement />
  <NewsFourColumn cat="lifestyle" limit="4" />
</template>
<script>
import TopAdvertisement from "../Advertisement/TopAdvertisement.Component.vue";
import NewsFourColumn from "../News/NewsFourColumn.Component.vue";
export default {
  data() {
    return {
      title: "Home",
    };
  },
  methods: {},
  components: { TopAdvertisement, NewsFourColumn },
};
</script>
