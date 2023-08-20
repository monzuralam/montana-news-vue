<template>
    <TopAdvertisement />
    <NewsTop cat="Latest" />
</template>
<script>
import TopAdvertisement from "../Advertisement/TopAdvertisement.Component.vue";
import NewsTop from "../News/NewsTop.Component.vue";
export default {
    name: "Latest",
    components: { TopAdvertisement, NewsTop },
};
</script>
