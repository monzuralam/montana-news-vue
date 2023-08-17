<template>
  <footer class="footer-section bg-gray-50 p-4">
    <div class="container mx-auto">
      <div class="flex">
        <div class="flex-1">
          <p class="text-base">
            Copyright &copy; {{ year }} | Made with ❤️ in Bangladesh.
          </p>
        </div>
        <div
          class="flex flex-1 md:justify-end sm:justify-between align-middle gap-x-4"
        >
          <a href="">Facebook</a>
          <a href="">Twiiter</a>
          <a href="">Linkedin</a>
          <a href="">Youtube</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  methods: {},
};
</script>
