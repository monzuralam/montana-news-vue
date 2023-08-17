<template>
  <header class="header-section p-4 bg-gray-50">
    <div class="container mx-auto">
      <nav class="">
        <div class="relative flex items-center justify-between">
          <div class="logo flex flex-1 items-center justify-start">
            <router-link to="/" class="text-3xl font-light"
              >Montana News</router-link
            >
          </div>
          <div
            class="navigation-menu flex flex-1 items-center justify-end space-x-8"
          >
            <router-link
              to="/"
              class="text-base font-medium not-italic leading-6"
              >Home</router-link
            >
            <router-link
              to="/about/"
              class="text-base font-medium not-italic leading-6"
              >About</router-link
            >
            <router-link
              to="/blog/"
              class="text-base font-medium not-italic leading-6"
              >Blog</router-link
            >
            <router-link
              to="/contact/"
              class="text-base font-medium not-italic leading-6"
              >Contact</router-link
            >
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
