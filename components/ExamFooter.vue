<!-- components/FooterComponent.vue -->
<template>
  <div
    class="fixed bottom-0 left-0 right-0 border-t bg-white p-2 px-8 flex justify-between items-center">
    <div>Zhengyi Shen</div>
    <div class="absolute left-1/2 transform -translate-x-1/2">
      <Popover>
        <PopoverTrigger>
          <Button
            variant="outline"
            @click="isOpen = !isOpen"
            class="flex items-center space-x-2">
            <span>Question {{ currentQuestion }} of {{ totalQuestions }}</span>
            <ChevronUp v-if="!isOpen" class="h-4 w-4" />
            <ChevronDown v-else class="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent class="w-auto">
          <NavigationGrid
            :current-question="currentQuestion"
            :total-questions="totalQuestions"
            @select-question="selectQuestion" />
        </PopoverContent>
      </Popover>
    </div>
    <div class="space-x-2">
      <Button @click="onBack">Back</Button>
      <Button @click="onNext">Next</Button>
    </div>
  </div>
</template>

<script setup>
import { ChevronUp, ChevronDown } from "lucide-vue-next";

const isOpen = ref(false); // Track popover open state

defineProps({
  currentQuestion: Number,
  totalQuestions: Number,
  selectQuestion: Function,
  onBack: Function,
  onNext: Function,
});
</script>
