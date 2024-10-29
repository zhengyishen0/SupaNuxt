<template>
  <div class="flex flex-col items-center">
    <div class="h-3">
      <MapPin v-if="isCurrent" class="w-3 h-3" />
    </div>
    <button
      @click="handleClick(number)"
      :class="['w-8 h-8 p-0 relative text-center font-semibold', buttonClass]">
      {{ number }}
      <Bookmark
        fill="red"
        v-if="isBookmarked"
        class="w-3 h-3 absolute top-0 right-0 text-red-500" />
    </button>
  </div>
</template>

<script setup>
import { Bookmark, MapPin } from "lucide-vue-next";

const props = defineProps({
  number: {
    type: Number,
    required: true,
  },
  isBookmarked: {
    type: Boolean,
    default: false,
  },
  isCurrent: {
    type: Boolean,
    default: false,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

const handleClick = (number) => {
  console.log("clicked", number);
};

const buttonClass = computed(() => {
  if (props.isCompleted) {
    return "bg-blue-500 text-white";
  } else {
    return "border border-dashed border-gray-400 text-blue-500";
  }
});
</script>
