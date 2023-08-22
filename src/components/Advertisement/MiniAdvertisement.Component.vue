<template>
    <!-- sidebar advertisement start here -->
    <div class="sidebar-ads pb-5 border-b mx-auto" :class="padding">
        <a :href="link" class="block" rel="nofollow" target="_blank">
            <img :src="imgLink" class="max-w-full mx-auto" alt="ads" />
        </a>
    </div>
    <!-- sidebar advertisement stop here -->
</template>
<script>
import adsDefaultImage from "../../assets/images/advertisement/ads_300x250.png";
export default {
    name: "MiniAdvertisement",
    props: ["href", "src", "paddingTop"],
    data() {
        return {
            link: this.href,
            imgLink: this.src ? this.src : adsDefaultImage,
            padding: this.paddingTop ? "pt-" + this.paddingTop : "pt-0",
        };
    },
    methods: {},
};
</script>
