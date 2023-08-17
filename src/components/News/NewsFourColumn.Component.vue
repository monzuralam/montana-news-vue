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
        >
          <router-link to="#">
            <div class="news-image">
              <img
                src="https://images.prothomalo.com/prothomalo-bangla%2F2023-08%2F9c1073ec-192b-4066-bae9-6a0a9c4bbb53%2FKBRH8042.JPG?rect=0%2C0%2C8192%2C5461&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.0"
                alt="image"
                class="max-w-full"
              />
            </div>
            <h3 class="text-2xl font-light leading-6 my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              dolor.
            </h3>
            <p class="text-base font-light leading-6 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              officia fugit exercitationem modi alias impedit, dolorem est
              incidunt voluptatum quasi?
            </p>
            <p class="text-sm font-light leading-6 mb-3">1 Hour Ago</p>
          </router-link>
        </div>
        <!-- single news item stop here -->
        <!-- single news item start here -->
        <div
          class="relative news-item md:border-r sm:border-r-0 last:border-r-0"
        >
          <router-link to="#">
            <div class="news-image">
              <img
                src="https://images.prothomalo.com/prothomalo-bangla%2F2023-08%2F9c1073ec-192b-4066-bae9-6a0a9c4bbb53%2FKBRH8042.JPG?rect=0%2C0%2C8192%2C5461&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.0"
                alt="image"
                class="max-w-full"
              />
            </div>
            <h3 class="text-2xl font-light leading-6 my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              dolor.
            </h3>
            <p class="text-base font-light leading-6 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              officia fugit exercitationem modi alias impedit, dolorem est
              incidunt voluptatum quasi?
            </p>
            <p class="text-sm font-light leading-6 mb-3">1 Hour Ago</p>
          </router-link>
        </div>
        <!-- single news item stop here -->
        <!-- single news item start here -->
        <div
          class="relative news-item md:border-r sm:border-r-0last:border-r-0"
        >
          <router-link to="#">
            <div class="news-image">
              <img
                src="https://images.prothomalo.com/prothomalo-bangla%2F2023-08%2F9c1073ec-192b-4066-bae9-6a0a9c4bbb53%2FKBRH8042.JPG?rect=0%2C0%2C8192%2C5461&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.0"
                alt="image"
                class="max-w-full"
              />
            </div>
            <h3 class="text-2xl font-light leading-6 my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              dolor.
            </h3>
            <p class="text-base font-light leading-6 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              officia fugit exercitationem modi alias impedit, dolorem est
              incidunt voluptatum quasi?
            </p>
            <p class="text-sm font-light leading-6 mb-3">1 Hour Ago</p>
          </router-link>
        </div>
        <!-- single news item stop here -->
        <!-- single news item start here -->
        <div
          class="relative news-item md:border-r sm:border-r-0 last:border-r-0"
        >
          <router-link to="#">
            <div class="news-image">
              <img
                src="https://images.prothomalo.com/prothomalo-bangla%2F2023-08%2F9c1073ec-192b-4066-bae9-6a0a9c4bbb53%2FKBRH8042.JPG?rect=0%2C0%2C8192%2C5461&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.0"
                alt="image"
                class="max-w-full"
              />
            </div>
            <h3 class="text-2xl font-light leading-6 my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              dolor.
            </h3>
            <p class="text-base font-light leading-6 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              officia fugit exercitationem modi alias impedit, dolorem est
              incidunt voluptatum quasi?
            </p>
            <p class="text-sm font-light leading-6 mb-3">1 Hour Ago</p>
          </router-link>
        </div>
        <!-- single news item stop here -->
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      cat: "lifestyle",
    };
  },
  methods: {},
};
</script>
