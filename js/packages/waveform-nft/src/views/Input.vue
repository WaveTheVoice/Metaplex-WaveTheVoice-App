<template>
  <div class="container mx-auto">

    <h1>Record your voice or upload existing record</h1>

    <select class="btn-primary p-5">
        <option value="">--Please choose an option--</option>
        <option value="record">Record</option>
        <option value="upload">Upload</option>
    </select>

    <div class="flex justify-center items-center text-xl">
      <div>
        <span>Your record: </span>
      </div>
    </div>

    <div class="flex justify-center items-center text-xl mt-2">
      <audio class="audio-container" :src="record.src" controls  v-if="record && record.src" />

      <div class="flex justify-center items-center audio-container italic" v-else>
        <span>......................E.M.P.T.Y........................</span>
      </div>
    </div>

    <div class="mt-10 mb-2 text-base italic">
      <div>-- maximum duration is 10 second</div>
      <div>-- press once to start recording</div>
      <div>-- press a second time to end recording</div>
    </div>
    <VueRecordAudio
      mime-type="audio/webm"
      ref="recorder"
      class="m-5"
      mode="press"
      @start="onRecordStart"
      @result="onRecordResult"
    />

    <CountDown
     :style="{visibility: isRecording ? 'visible' : 'hidden'}"
     class="mt-5 mb-14"
     :seconds="10"
     ref="countDown"
     @finish="onTimeLimitFinish"
    />

    <div class="text-xl sm:text-3xl text-center font-semibold mt-14">
       --- OR ---
    </div>

    <div v-show="$refs.upload && $refs.upload.dropActive" class="drop-active" />

     <VueUploadComponent
        class="mt-10"
        :multiple="false"
        :drop="true"
        :drop-directory="false"
        accept="audio/*"
        @input-file="onFileUpload"
        ref="upload"
     >
      <div class="dropbox flex items-center justify-center">
        <p class="">
          Drag your file here to begin<br> or click to browse
          </p>
      </div>
     </VueUploadComponent>
     </div>

     <button class="btn-primary m-10 next-step">
       Next
     </button>
</template>

<script>
import { VueRecordAudio } from '@/components/recorder'
import CountDown from '@/components/CountDown'
import { useSteps, setRecord } from '@/libs/useSteps'
import VueUploadComponent from 'vue-upload-component'

export default {
  name: 'Input',
  components: {
    VueRecordAudio,
    CountDown,
    VueUploadComponent
  },
  setup () {
    const { record } = useSteps()

    return {
      record
    }
  },
  data () {
    return {
      isRecording: false
    }
  },
  computed: {
  },
  methods: {
    onRecordStart () {
      this.$refs.countDown.play()
      this.isRecording = true
      setRecord(null)
    },
    async onRecordResult (blob) {
      this.isRecording = false
      this.$refs.countDown.stop()

      setRecord(new File([blob], 'record.webm'))
    },

    onTimeLimitFinish () {
      this.$refs.recorder.stop()
    },
    onFileUpload (fileResponse) {
      if (fileResponse) {
        setRecord(fileResponse.file)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .audio-container {
    width: 300px;
    height: 40px;

    @apply mx-5;
  }

  .dropbox {
    outline: 2px dashed white; /* the dash box */
    outline-offset: -10px;
    padding: 10px 10px;
    height: 200px;
    width: 400px;
    position: relative;
    cursor: pointer;
  }

  .drop-active {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 9999;
    opacity: .2;
    background: white;
  }

  .next-step {
    width: 600px;
  }
</style>
