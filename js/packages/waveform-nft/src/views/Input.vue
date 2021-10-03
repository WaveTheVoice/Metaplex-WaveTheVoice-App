<template>
  <div class="container mx-auto">
    <VueRecordAudio
      mode="hold"
      @result="onRecordResult"
    />

    <div class="audio-container" v-if="record">
      <audio :src="record" controls />
    </div>
  </div>
</template>

<script>
import { VueRecordAudio } from '@/components/recorder'

export default {
  name: 'Input',
  components: {
    VueRecordAudio
  },
  data () {
    return {
      record: ''
    }
  },

  methods: {
    onRecordResult (blob) {
      this.record = window.URL.createObjectURL(blob)
    }
  }
}
</script>
