<template>
  <div class="container mx-auto">

        <pre>{{ wallet }}</pre>
        <input class="my-2 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10" type="text" v-model="walletProvider">
        {{ walletProvider }}

        <div class="flex flex-col">
          <button class="btn-primary my-2" type="button" v-if="connected" @click="disconnect">Disconnect</button>
          <button class="btn-primary my-2" type="button" v-else @click="connect">Connect</button>
          <div v-if="connected">
              {{ publicKey }}
          </div>
          <button class="btn-primary my-2" @click="test()">test</button>
        </div>
  </div>
</template>

<script>

import { useWallet, useWalletReactive } from '../libs/useWallet'
import { testMint } from '../libs/minting'

export default {
  name: 'Home',

  setup () {
    const { wallet, walletProvider, connect, disconnect, connected, publicKey } = useWalletReactive()

    const test = () => {
      const walletSigner = useWallet()

      testMint(walletSigner)
    }

    return {
      walletProvider,
      wallet,
      connect,
      disconnect,
      connected,
      publicKey,
      test
    }
  }
}
</script>
