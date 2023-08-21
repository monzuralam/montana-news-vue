<template>
    <TopAdvertisement />
    <NewsTop cat="Latest" />
    <Advertisement970 src="" href="#" />
</template>
<script>
import TopAdvertisement from "../Advertisement/TopAdvertisement.Component.vue";
import NewsTop from "../News/NewsTop.Component.vue";
import Advertisement970 from "../Advertisement/Advertisement-970x250.Component.vue";
export default {
    name: "Latest",
    components: { TopAdvertisement, NewsTop, Advertisement970 },
};
</script>
