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
import WFPlayer from 'wfplayerAdjusted'

import { initWallet } from './libs/useWallet'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  created () {
    initWallet(true)

    // const wf = new WFPlayer({
    //   container: null,
    //   width: 1500,
    //   height: 500,
    //   shadowCanvas: true,
    //   scrollable: false,
    //   ruler: false,
    //   cursor: false,
    //   progress: false,
    //   grid: false,
    //   padding: 0,
    //   backgroundColor: 'rgba(0,0,20,255)',
    //   waveColor: {
    //     startColor: '#793aab',
    //     endColor: '#7ac4bf'
    //   },
    //   waveScale: 1,
    //   duration: 3
    // })

    console.log(WFPlayer)
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
