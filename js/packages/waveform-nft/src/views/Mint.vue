<template>
  <div class="container mx-auto">
        <div class="flex flex-col justify-start items-center my-15">
          <a-button
            class="font-semibold w-full lg:w-1/2 xl:w-1/2"
            size="large"
            type="primary"
            @click="mint()"
          >
            MINT
          </a-button>
        </div>

      <div v-show="isMintingNow" class="minting-active flex flex-col justify-center items-center">
        <div class="minting-active-drop"></div>

        <a-spin size="large"/>
        <div class="mt-5">Minting In Progress...</div>
        <div class="mt-1">Please, wait (up to 2 min)</div>
      </div>

  </div>
</template>

<script>
import { ref } from 'vue'

import { mintWaveNFT } from '../libs/minting'

export default {
  name: 'Mint',

  setup () {
    const isMintingNow = ref(false)

    const mint = () => {
      isMintingNow.value = true

      mintWaveNFT()
        .finally(() => {
          isMintingNow.value = false
        })
    }

    return {
      isMintingNow,
      mint
    }
  }
}
</script>

<style lang="scss" scoped>
  .minting-active-drop {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 9998;
    opacity: .1;
    background: white;
  }

  .minting-active {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 9999;
  }

</style>
