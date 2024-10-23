<template>
  <NuxtLink :to="route" class="block">
    <Card class="p-6 hover:shadow-lg transition-shadow h-44">
      <div class="flex flex-col items-center text-center">
        <div class="mb-4">
          <component :is="icon" class="w-12 h-12 text-blue-600" />
        </div>
        <h3 class="font-semibold mb-2">{{ title }}</h3>
      </div>
    </Card>
  </NuxtLink>
</template>

<script setup>
defineProps({
  icon: {
    type: Object,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  route: {
    type: String,
    required: true
  }
})
</script>
