<template>
  <div class="flex items-center gap-2">
    <Button
      variant="outline"
      @click="handleClick"
      class="flex-1 justify-start text-left h-auto py-3 px-4 relative"
      :class="{ 'text-gray-400': showStrikethrough && isStrikethrough }">
      <span
        class="mr-4 inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-100"
        >{{ optionId }}</span
      >
      {{ optionText }}
      <div
        v-if="showStrikethrough && isStrikethrough"
        class="absolute inset-0 flex items-center"
        aria-hidden="true">
        <div class="w-full border-t border-gray-300"></div>
      </div>
    </Button>
    <div v-if="isStrikethrough" class="w-12 flex items-center justify-center">
      <CircleOff
        v-if="!showStrikethrough"
        @click="toggleStrikethrough"
        class="h-5 w-5 flex-shrink-0 cursor-pointer" />
      <button
        v-else
        @click="toggleStrikethrough"
        class="text-sm text-gray-600 underline">
        Undo
      </button>
    </div>
  </div>
</template>

<script setup>
import { CircleOff } from "lucide-vue-next";

const showStrikethrough = ref(false);

defineProps({
  optionId: {
    type: String,
    required: true,
  },
  optionText: {
    type: String,
    required: true,
  },
  isStrikethrough: {
    type: Boolean,
    default: false,
  },
  isSelected: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click", "update:modelValue"]);

const toggleStrikethrough = () => {
  showStrikethrough.value = !showStrikethrough.value;
};

const handleClick = () => {
  showStrikethrough.value = false;
  emit("click");
};
</script>
