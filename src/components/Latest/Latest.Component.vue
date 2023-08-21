<template>
    <TopAdvertisement />
    <NewsTop cat="Latest" />
    <Advertisement970 src="" href="#" />
    <NewsStories cat="Latest" />
</template>
<script>
import TopAdvertisement from "../Advertisement/TopAdvertisement.Component.vue";
import NewsTop from "../News/NewsTop.Component.vue";
import Advertisement970 from "../Advertisement/Advertisement-970x250.Component.vue";
import NewsStories from "../News/NewsStories.Component.vue";
export default {
    name: "Latest",
    components: { TopAdvertisement, NewsTop, Advertisement970, NewsStories },
};
</script>
