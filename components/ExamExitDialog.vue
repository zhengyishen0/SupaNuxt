<template>
  <Dialog :open="isOpen" @update:open="$emit('update:isOpen', $event)">
    <DialogContent class="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Are You Sure You Want to Exit the Preview?</DialogTitle>
      </DialogHeader>
      <DialogDescription>
        Test previews are not timed or scored, and your progress isn't saved. If you exit and come back, you'll start over.
      </DialogDescription>
      <DialogFooter class="sm:justify-end">
        <Button variant="ghost" @click="$emit('update:isOpen', false)">
          Continue Test Preview
        </Button>
        <Button variant="default" class="bg-yellow-400 hover:bg-yellow-500 text-black " @click="exitExam">
          Exit
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup>
const router = useRouter()
const exitExam = () => {
  router.push('/')
}

defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})
</script>
