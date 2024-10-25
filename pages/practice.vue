<!-- ExamInterface.vue -->
<template>
    <div class="min-h-screen bg-white">
      <!-- Header -->
      <div class="border-b p-2 flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <h1 class="text-lg font-semibold">Section 1: Reading and Writing</h1>
          <Button variant="ghost" @click="showDirections = !showDirections">
            Directions
          </Button>
        </div>
  
        <div class="flex items-center space-x-4">
          <div class="flex items-center">
            <Timer class="h-4 w-4 mr-2" />
            <span>31:51</span>
          </div>
          <Button variant="ghost" size="icon">
            <Pencil class="h-4 w-4" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="ghost" size="icon">
                <MoreHorizontal class="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Help</DropdownMenuItem>
              <DropdownMenuItem>Shortcuts</DropdownMenuItem>
              <DropdownMenuItem>Assistive Technology</DropdownMenuItem>
              <DropdownMenuItem>Line Reader</DropdownMenuItem>
              <DropdownMenuItem>Unscheduled Break</DropdownMenuItem>
              <DropdownMenuItem>Exit the Exam</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
  
      <!-- Main Content -->
      <div class="flex p-4 gap-4">
        <!-- Question Section -->
        <div class="w-1/2">
          <Card>
            <CardContent class="p-6">
              <p class="text-base">
                In recommending Bao Phi's collection Sông I Sing, a librarian noted that pieces by the
                spoken-word poet don't lose their _____ nature when printed: the language has the same
                pleasant musical quality on the page as it does when performed by Phi.
              </p>
            </CardContent>
          </Card>
        </div>
  
        <!-- Answer Section -->
        <div class="w-1/2">
          <Card>
            <CardHeader class="flex flex-row items-center justify-between">
              <div class="flex items-center space-x-2">
                <span class="font-bold">1</span>
                <Bookmark class="h-4 w-4" />
                <span>Mark for Review</span>
              </div>
            </CardHeader>
            <CardContent>
              <p class="mb-4">Which choice completes the text with the most logical and precise word or phrase?</p>
              <div class="space-y-2">
                <Button
                  v-for="option in questionOptions"
                  :key="option.id"
                  variant="outline"
                  class="w-full justify-start text-left h-auto py-3 px-4"
                >
                  <span class="mr-4">{{ option.id }}</span>
                  {{ option.text }}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
  
      <!-- Footer -->
      <div class="fixed bottom-0 left-0 right-0 border-t bg-white p-2 flex justify-between items-center">
        <div>Question {{ currentQuestion }} of {{ totalQuestions }}</div>
        <div class="flex space-x-2">
          <Button
            variant="outline"
            @click="showQuestionNav = true"
          >
            Question Navigator
          </Button>
          <Button>
            Next
          </Button>
        </div>
      </div>
  
      <!-- Question Navigator Dialog -->
      <Dialog :open="showQuestionNav" @update:open="showQuestionNav = $event">
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Section 1, Module 1: Reading and Writing Questions</DialogTitle>
          </DialogHeader>
          <div class="grid grid-cols-10 gap-2 p-4">
            <Button
              v-for="n in totalQuestions"
              :key="n"
              :variant="currentQuestion === n ? 'default' : 'outline'"
              class="w-8 h-8 p-0"
              @click="selectQuestion(n)"
            >
              {{ n }}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  </template>
  
  <script setup>
  import { Timer, Bookmark, HelpCircle, MoreHorizontal, Pencil } from 'lucide-vue-next'
  
  const showDirections = ref(false)
  const showQuestionNav = ref(false)
  const currentQuestion = ref(1)
  const totalQuestions = 27
  
  const questionOptions = [
    { id: 'A', text: 'scholarly' },
    { id: 'B', text: 'melodic' },
    { id: 'C', text: 'jarring' },
    { id: 'D', text: 'personal' }
  ]
  
  const selectQuestion = (number) => {
    currentQuestion.value = number
    showQuestionNav.value = false
  }
  </script>