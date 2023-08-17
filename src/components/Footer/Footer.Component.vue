<template>
  <footer class="footer-section bg-gray-50 p-4">
    <div class="container mx-auto">
      <div class="md:flex sm:flex-none">
        <div class="flex-1">
          <p class="text-base md:text-left text-center">
            Copyright &copy; {{ year }} | Made with ❤️ in Bangladesh.
          </p>
        </div>
        <div
          class="flex flex-1 md:justify-end justify-center align-middle gap-x-4"
        >
          <a href="https://facebook.com/#" target="_blank" rel="nofollow"
            ><font-awesome-icon icon="fa-brands fa-facebook"
          /></a>
          <a href="https://twitter.com/#" target="_blank" rel="nofollow"
            ><font-awesome-icon icon="fa-brands fa-x-twitter"
          /></a>
          <a href="https://linkedin.com/#" target="_blank" rel="nofollow"
            ><font-awesome-icon icon="fa-brands fa-linkedin"
          /></a>
          <a href="https://youtube.com/#" target="_blank" rel="nofollow"
            ><font-awesome-icon icon="fa-brands fa-youtube"
          /></a>
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
