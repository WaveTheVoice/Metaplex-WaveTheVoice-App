<template>
  <div class="container mx-auto">
    <h1>Adjust your wave</h1>

    <div v-if="waveImgUrl">
      <img :src="waveImgUrl">
    </div>
  </div>
</template>

<script>
import { useSteps, loadWave } from '@/libs/useSteps'

export default {
  name: 'Waveform',
  components: {
  },
  setup () {
    const { waveImgUrl } = useSteps()

    loadWave()

    return {
      waveImgUrl
    }
  }
}
</script>
