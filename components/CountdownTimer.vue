<template>
  <div class="flex items-center flex-col">
    <span v-if="isTimerVisible">{{ formattedTime }}</span>
    <Timer v-else class="h-4 w-4 mr-2" />
    <Button variant="outline" @click="toggleTimerVisibility">{{ isTimerVisible ? 'Hide' : 'Show' }}</Button>
  </div>
</template>

<script setup>
import { Timer } from 'lucide-vue-next'

const props = defineProps({
  totalTime: {
    type: Number,
    required: true
  }
})

const isTimerVisible = ref(true)
const remainingTime = ref(props.totalTime)

const formattedTime = computed(() => {
    const minutes = Math.floor(remainingTime.value / 60)
    const seconds = remainingTime.value % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
})

const toggleTimerVisibility = () => {
    isTimerVisible.value = !isTimerVisible.value
}

onMounted(() => {
    const timerInterval = setInterval(() => {
        if (remainingTime.value > 0) {
            remainingTime.value--
        } else {
            clearInterval(timerInterval)
        }
    }, 1000)
})
</script>

