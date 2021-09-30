<template>
  <div class="home">
        <pre>{{ wallet }}</pre>
        <input type="text" v-model="walletProvider">
        {{ walletProvider }}
        <button v-if="connected" @click="disconnect">Disconnect</button>
        <button v-else @click="connect">Connect</button>

        <div v-if="connected">
            {{ publicKey }}
        </div>

        <button @click="test()">test</button>
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

      // testMint(walletSigner)
      console.log(walletSigner.publicKey.toBase58())
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
