<template>
  <Button
    @click="$emit('click')"
    class="w-16 h-8 rounded-full bg-blue-500 text-white hover:bg-blue-600 font-semibold">
    {{ text }}
  </Button>
</template>

<script setup>
defineEmits(["click"]);
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>
