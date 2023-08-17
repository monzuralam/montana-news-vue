<script setup>
import Header from "./components/Header/Header.Component.vue";
import Footer from "./components/Footer/Footer.Component.vue";
</script>

<template>
  <Header />
  <div class="container mx-auto">
    <router-view></router-view>
  </div>
  <Footer />
</template>

<style scoped></style>
