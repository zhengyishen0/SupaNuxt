<template>
  <div class="flex items-center gap-2">
    <Button
      variant="outline"
      @click="handleClick"
      class="flex-1 justify-start text-left h-auto py-3 px-4 relative"
      :class="{ 'text-gray-400': showStrikethrough }">
      <span
        class="mr-4 inline-flex items-center justify-center h-6 w-6 rounded-full"
        :class="{
          'bg-gray-200': !showStrikethrough,
          'bg-gray-100': showStrikethrough,
        }"
        >{{ optionId }}</span
      >
      {{ optionText }}
      <div
        v-if="showStrikethrough"
        class="absolute inset-0 flex items-center"
        aria-hidden="true">
        <div class="w-full border-t border-gray-300"></div>
      </div>
    </Button>
    <template v-if="isStrikethrough">
      <CircleOff
        v-if="!showStrikethrough"
        @click="toggleStrikethrough"
        class="h-5 w-5 flex-shrink-0" />
      <button
        v-else
        @click="toggleStrikethrough"
        class="text-sm text-gray-600 underline">
        Undo
      </button>
    </template>
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

const emit = defineEmits(["update:modelValue"]);

const toggleStrikethrough = () => {
  showStrikethrough.value = !showStrikethrough.value;
};

const handleClick = () => {
  toggleStrikethrough();
  emit("click");
};
</script>
