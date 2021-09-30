<template>
  <div class="dark">
    <Header/>

    <router-view/>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/global/Header'
import Footer from '@/components/global/Footer'

import { initWallet } from './libs/useWallet'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  created () {
    initWallet(true)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
