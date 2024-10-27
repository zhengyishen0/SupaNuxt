<template>
  <button
    @click="$emit('selectQuestion', number)"
    :class="['w-8 h-8 p-0 relative text-center', buttonClass]"
  >
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
import { Bookmark, MapPin } from 'lucide-vue-next';

defineProps({
  number: {
    type: Number,
    required: true
  },
  isBookmarked: {
    type: Boolean,
    default: false
  },
  isSelected: {
    type: Boolean,
    default: false
  },
  buttonClass: {
    type: String,
    required: true
  }
});
</script>