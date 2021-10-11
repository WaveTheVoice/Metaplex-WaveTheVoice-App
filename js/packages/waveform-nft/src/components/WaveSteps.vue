<template>
  <a-steps :current="step">
    <a-step title="Input the voice"/>
    <a-step title="Adjust the wave" />
    <a-step title="Name the wave" />
    <a-step title="Mint" />
  </a-steps>
</template>

<script>
export default {
  name: 'WaveSteps',
  props: {
    step: Number
  }
}
</script>
