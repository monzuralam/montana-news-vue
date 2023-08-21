<template>
    <!-- advertisment section start here -->
    <section class="relative overflow-hidden pt-2 pb-7 border-b">
        <div class="container mx-auto">
            <a :href="link" target="_blank" rel="nofollow">
                <img
                    :src="image"
                    class="w-max object-cover md:h-full mx-auto border"
                    alt="ads"
                />
            </a>
        </div>
    </section>
    <!-- advertisment section stop here -->
</template>
<script>
import adsDefaultImage from "../../assets/images/advertisement/ad_970x250.png";
export default {
    name: "Advertisement970",
    props: ["src", "href"],
    data() {
        return {
            image: this.src ? this.src : adsDefaultImage,
            link: this.href ? this.href : "#",
        };
    },
};
</script>
