<template>
  <TopAdvertisement />
  <h1>{{ title }}</h1>
</template>
<script>
import TopAdvertisement from "../Advertisement/TopAdvertisement.Component.vue";
export default {
  data() {
    return {
      title: "Home",
    };
  },
  methods: {},
  components: { TopAdvertisement },
};
</script>
