<template>
    <section class="relative overflow-hidden py-5 border-b">
        <div class="container mx-auto">
            <a :href="topAdvertisementUrl" target="_blank" rel="nofollow">
                <img
                    src="../../assets/images/advertisement/ad_970x90.png"
                    alt="Top Ad"
                    class="w-max object-cover md:h-full mx-auto border"
                />
            </a>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            topAdvertisementUrl: "#",
        };
    },
    methods: {},
};
</script>
