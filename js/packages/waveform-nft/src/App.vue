<template>
  <div class="dark">
    <Header/>

    <div class="dark:text-primary-light text-lg font-medium">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/global/Header'
import Footer from '@/components/global/Footer'

import { initWallet } from '@/libs/useWallet'
import { setupWF } from '@/libs/useSteps'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  created () {
    initWallet(true)
    setupWF()
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
