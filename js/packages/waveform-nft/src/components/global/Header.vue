<template>
  <nav id="nav" class="container mx-auto">
    <div
      class="z-10 max-w-screen-lg xl:max-w-screen-xl block flex justify-between items-center my-6"
    >
      <div
        class="ml-3 sm:ml-4 mt-5 sm:mt-3 sm:flex justify-center items-center"
      >
        <router-link
          to="/"
          class="nav-link block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  md:mx-2 mb-2 sm:py-2"
          >Home</router-link
        >
        <router-link
          to="/mint"
          class="nav-link block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  md:mx-2 mb-2 sm:py-2"
          >Mint</router-link
        >
      </div>
      <div
        class="flex justify-between items-center flex-row"
      >
        <div>
          <router-link
            to="/mint"
            class="btn-primary"
          >
             Mint Now
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

</script>

<style lang="scss" scoped>
 a.nav-link.router-link-exact-active {
  @apply dark:text-purple-400;
  @apply font-medium;
}
</style>
