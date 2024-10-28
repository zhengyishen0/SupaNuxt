<template>
  <button
    @click="handleClick(number)"
    :class="['w-8 h-8 p-0 relative text-center', buttonClass]">
    {{ number }}
    <span v-if="isBookmarked">
      <Bookmark class="w-3 h-3 absolute top-0 right-0 text-red-500" />
    </span>
    <span v-if="isSelected">
      <MapPin class="w-3 h-3 absolute top-0 self-center" />
    </span>
  </button>
</template>

<script setup>
import { Bookmark, MapPin } from "lucide-vue-next";
// console.log(number, isCompleted);

const props = defineProps({
  number: {
    type: Number,
    required: true,
  },
  isBookmarked: {
    type: Boolean,
    default: false,
  },
  isSelected: {
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
    return "border border-dashed border-gray-400";
  }
});
</script>
