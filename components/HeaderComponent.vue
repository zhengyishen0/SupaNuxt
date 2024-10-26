<!-- components/HeaderComponent.vue -->
<template>
  <div class="border-b p-2 flex justify-between items-center">
    <div class="flex flex-col items-start space-y-2">
      <h1 class="text-lg font-semibold">Section 1: Reading and Writing</h1>
      <Popover>
        <PopoverTrigger>
        Directions
        </PopoverTrigger>
        <PopoverContent>
          <div class="p-4">
            <p>Your text instructions go here.</p>
          </div>
        </PopoverContent>
      </Popover>
    </div>

    <CountdownTimer class="absolute left-1/2 transform -translate-x-1/2" :totalTime="totalTime" />

    <div class="flex flex-row gap-4">
        <Button variant="ghost" size="icon">
            <div class="flex flex-col items-center">
                <Pencil class="h-4 w-4" />
                <span class="text-xs">Annotate</span>
            </div>
      </Button>
      <ExamOptionsMenu @showExitDialog="showExitDialog = true" />
    </div>

    <!-- Exit Confirmation Dialog -->
    <ExitExamDialog 
        v-model:isOpen="showExitDialog"
      />
  </div>
</template>

<script setup>
import { Pencil } from 'lucide-vue-next'

const totalTime = ref(1911) // Total time in seconds (31:51)
const showExitDialog = ref(false)
</script>
