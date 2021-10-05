
import { ref } from 'vue'

const storage = {
  record: ref(null)
}

export const useSteps = () => storage

export async function setRecord (file) {
  if (!file) {
    storage.record.value = null
    return
  }

  const src = window.URL.createObjectURL(file)
  const arrayBuffer = await file.arrayBuffer()

  const audioContext = new AudioContext()

  const audio = await audioContext.decodeAudioData(arrayBuffer)

  audioContext.close()

  const duration = audio.duration

  storage.record.value = {
    src,
    arrayBuffer,
    duration
  }
}
