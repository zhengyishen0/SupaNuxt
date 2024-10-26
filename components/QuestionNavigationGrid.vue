<template>
  <div>
    <h3 class="font-semibold mb-2">Section 1, Module 1: Reading and Writing Questions</h3>
    <div class="grid grid-cols-10 gap-2">
      <Button
        v-for="n in totalQuestions"
        :key="n"
        :variant="currentQuestion === n ? 'default' : 'outline'"
        class="w-8 h-8 p-0"
        @click="$emit('selectQuestion', n)"
      >
        {{ n }}
      </Button>
    </div>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button'

defineProps({
  currentQuestion: Number,
  totalQuestions: Number,
})

defineEmits(['selectQuestion'])
</script>
