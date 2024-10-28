<!-- components/HeaderComponent.vue -->
<template>
  <div class="border-b flex justify-between items-center p-2 px-8">
    <div class="flex flex-col items-start space-y-2">
      <h1 class="text-lg font-semibold">Section 1: Reading and Writing</h1>
      <Popover>
        <PopoverTrigger class="text-md" @click="isOpen = !isOpen">
          Directions
          <ChevronDown v-if="!isOpen" class="inline-block" />
          <ChevronUp v-else class="inline-block" />
        </PopoverTrigger>
        <PopoverContent>
          <div class="p-4">
            <p>Your text instructions go here.</p>
          </div>
        </PopoverContent>
      </Popover>
    </div>

    <CountdownTimer
      class="absolute left-1/2 transform -translate-x-1/2"
      :totalTime="totalTime" />

    <div class="flex flex-row gap-4">
      <Button variant="ghost" size="icon">
        <div class="flex flex-col items-center">
          <Pencil class="h-4 w-4" />
          <span class="text-xs">Annotate</span>
        </div>
      </Button>
      <ExamMenu @showExitDialog="showExitDialog = true" />
    </div>

    <!-- Exit Confirmation Dialog -->
    <ExamExitDialog v-model:isOpen="showExitDialog" />
  </div>
</template>

<script setup>
import { Pencil, ChevronDown, ChevronUp } from "lucide-vue-next";

const totalTime = ref(1911); // Total time in seconds (31:51)
const showExitDialog = ref(false);
const isOpen = ref(false); // Track popover open state
</script>
