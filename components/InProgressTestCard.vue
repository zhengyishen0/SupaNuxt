<template>
  <Card class="p-6 hover:shadow-lg transition-shadow h-44">
    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <h3 class="font-semibold">{{ test.name }}</h3>
        <Trash2 class="w-5 h-5 text-gray-400" />
      </div>
      <div class="flex items-center gap-2 text-gray-600">
        <Clock class="w-4 h-4" />
        <span>In Progress</span>
      </div>
      <Button>Resume</Button>
    </div>
  </Card>
</template>

<script setup>
import { Clock, Trash2 } from 'lucide-vue-next'

defineProps({
  test: {
    type: Object,
    required: true
  }
})
</script>
