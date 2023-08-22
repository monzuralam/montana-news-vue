<template>
    <!-- news stories section start here -->
    <section class="relative py-7 border-b">
        <div class="container mx-auto">
            <div class="grid md:grid-cols-4 grid-cols-1 gap-5">
                <!-- left area start here -->
                <div class=""></div>
                <!-- left area stop here -->
                <!-- center area start here -->
                <div class="col-span-2">
                    <!-- stories item start here -->
                    <a href="#" class="block pt-5 first:pt-0">
                        <div class="flex gap-1 border-b mt-5 first:mt-0 pb-5">
                            <div class="flex-auto md:w-2/3 w-1/2">
                                <h3 class="text-xl leading-6 mb-4">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Distinctio, at!
                                </h3>
                                <p class="text-base font-light">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Voluptatem, enim! Qui
                                    magni autem unde minima! Vero officiis
                                    doloribus fuga at!
                                </p>
                            </div>
                            <div class="flex-auto w-1/3">
                                <img
                                    src="../../assets/images/posts/dengu.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </a>
                    <!-- stories item stop here -->
                    <!-- stories item start here -->
                    <a href="#" class="block pt-5 first:pt-0">
                        <div class="flex gap-1 border-b pb-5">
                            <div class="flex-auto md:w-2/3 w-1/2">
                                <h3 class="text-xl leading-6 mb-4">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Distinctio, at!
                                </h3>
                                <p class="text-base font-light">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Voluptatem, enim! Qui
                                    magni autem unde minima! Vero officiis
                                    doloribus fuga at!
                                </p>
                            </div>
                            <div class="flex-auto w-1/3">
                                <img
                                    src="../../assets/images/posts/dengu.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </a>
                    <!-- stories item stop here -->
                    <!-- stories item start here -->
                    <a href="#" class="block pt-5 first:pt-0">
                        <div class="flex gap-1 border-b pb-5">
                            <div class="flex-auto md:w-2/3 w-1/2">
                                <h3 class="text-xl leading-6 mb-4">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Distinctio, at!
                                </h3>
                                <p class="text-base font-light">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Voluptatem, enim! Qui
                                    magni autem unde minima! Vero officiis
                                    doloribus fuga at!
                                </p>
                            </div>
                            <div class="flex-auto w-1/3">
                                <img
                                    src="../../assets/images/posts/dengu.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </a>
                    <!-- stories item stop here -->
                    <!-- stories item start here -->
                    <a href="#" class="block pt-5 first:pt-0">
                        <div class="flex gap-1 border-b pb-5">
                            <div class="flex-auto md:w-2/3 w-1/2">
                                <h3 class="text-xl leading-6 mb-4">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Distinctio, at!
                                </h3>
                                <p class="text-base font-light">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Voluptatem, enim! Qui
                                    magni autem unde minima! Vero officiis
                                    doloribus fuga at!
                                </p>
                            </div>
                            <div class="flex-auto w-1/3">
                                <img
                                    src="../../assets/images/posts/dengu.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </a>
                    <!-- stories item stop here -->
                    <!-- stories item start here -->
                    <a href="#" class="block pt-5 first:pt-0">
                        <div class="flex gap-1 border-b pb-5">
                            <div class="flex-auto md:w-2/3 w-1/2">
                                <h3 class="text-xl leading-6 mb-4">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Distinctio, at!
                                </h3>
                                <p class="text-base font-light">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Voluptatem, enim! Qui
                                    magni autem unde minima! Vero officiis
                                    doloribus fuga at!
                                </p>
                            </div>
                            <div class="flex-auto w-1/3">
                                <img
                                    src="../../assets/images/posts/dengu.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </a>
                    <!-- stories item stop here -->
                    <!-- mini advertisement start here -->
                    <MiniAdvertisement src="" href="" paddingTop="5" />
                    <!-- mini advertisement stop here -->
                </div>
                <!-- center area stop here -->
                <!-- right area start here -->
                <div class="">
                    <!-- mini advertisement start here -->
                    <div class="mini-advertisement">
                        <a href="#" target="_blank" rel="nofollow">
                            <img
                                src="../../assets/images/advertisement/ads_300x250.png"
                                class="w-full object-cover"
                                alt="ads"
                            />
                        </a>
                    </div>
                    <!-- mini advertisement stop here -->
                </div>
                <!-- right area stop here -->
            </div>
        </div>
    </section>
    <!-- news stories section stop here -->
</template>
<script>
import MiniAdvertisement from "../Advertisement/MiniAdvertisement.Component.vue";
export default {
    name: "NewsStories",
    props: [],
    data() {
        return {};
    },
    methods: {},
    components: { MiniAdvertisement },
};
</script>
