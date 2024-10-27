<!-- ExamInterface.vue -->
<template>
    <div class="min-h-screen bg-white">
      <ExamHeader />
  
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
  
      <ExamFooter
        :currentQuestion="currentQuestion" 
        :totalQuestions="totalQuestions" 
        :selectQuestion="selectQuestion" 
        @onBack="handleBack" 
        @onNext="handleNext" 
      />

    </div>
  </template>
  
  <script setup>
  import { Bookmark} from 'lucide-vue-next'

  const currentQuestion = ref(1)
  const totalQuestions = 27
  
  const questionOptions = [
    { id: 'A', text: 'scholarly' },
    { id: 'B', text: 'melodic' },
    { id: 'C', text: 'jarring' },
    { id: 'D', text: 'personal' }
  ]
  

  const selectQuestion = (questionNumber) => {
    currentQuestion.value = questionNumber
    // Add any additional logic for selecting a question
  }

  const handleBack = () => {
    // Implement the logic for handling the back button
  }

  const handleNext = () => {
    // Implement the logic for handling the next button
  }
  </script>

