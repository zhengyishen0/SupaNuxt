<template>
  <div class="flex flex-col items-center">
    <h3 class="font-semibold mb-2 text-center">Section 1, Module 1: Reading and Writing Questions</h3>
    
    <!-- Navigation Indicators -->
    <div class="flex items-center gap-4 mb-2">
      <div class="flex items-center gap-1">
        <MapPin class="w-4 h-4" /> 
        <p class="text-sm">Current</p>
      </div>
      <div class="flex items-center gap-1">
        <span class="w-3 h-3 border border-dashed border-gray-400"></span> 
        <p class="text-sm">Unanswered</p>
      </div>
      <div class="flex items-center gap-1">
        <Bookmark class="w-6 h-6 text-red-500"/> 
        <p class="text-sm">For Review</p>
      </div>
    </div>

    <!-- Navigation Grid -->
    <div class="grid grid-cols-10">
      <NavigationButton
        v-for="n in sampleData.totalQuestions"
        :key="n"
        :number="n"
        :isBookmarked="isBookmarked(n)"
        :isSelected="isSelected(n)"
        :buttonClass="getButtonClass(n)"
        @selectQuestion="$emit('selectQuestion', n)"
      />
    </div>

    <!-- Go to Review Page -->  
    <Button @click="goToReview" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full">
      Go to Review Page
    </Button>
  </div>
</template>

<script setup>
import { MapPin, Bookmark} from 'lucide-vue-next'
import NavigationButton from './NavigationButton.vue'


const sampleData = {
  currentQuestionIndex: 7,
  totalQuestions: 30,
  questions: {
    1: { questionIndex: 1, questionContext: "Context for Q1", questionText: "Question 1 text", isBookmarked: false, userAnswer: "User's answer for Q1" },
    2: { questionIndex: 2, questionContext: "Context for Q2", questionText: "Question 2 text", isBookmarked: false, userAnswer: "User's answer for Q2" },
    3: { questionIndex: 3, questionContext: "Context for Q3", questionText: "Question 3 text", isBookmarked: false, userAnswer: "User's answer for Q3" },
    4: { questionIndex: 4, questionContext: "Context for Q4", questionText: "Question 4 text", isBookmarked: true, userAnswer: "" },
    5: { questionIndex: 5, questionContext: "Context for Q5", questionText: "Question 5 text", isBookmarked: false, userAnswer: "User's answer for Q5" },
    6: { questionIndex: 6, questionContext: "Context for Q6", questionText: "Question 6 text", isBookmarked: false, userAnswer: "" },
    7: { questionIndex: 7, questionContext: "Context for Q7", questionText: "Question 7 text", isBookmarked: true, userAnswer: "" },
    8: { questionIndex: 8, questionContext: "Context for Q8", questionText: "Question 8 text", isBookmarked: true, userAnswer: "" },
    9: { questionIndex: 9, questionContext: "Context for Q9", questionText: "Question 9 text", isBookmarked: true, userAnswer: "" },
  }
}

const goToReview = () => {
  router.push('/review')
}

// Computed properties


const bookmarkedQuestions = computed(() => 
  Object.values(sampleData.questions)
    .filter(q => q.isBookmarked)
    .map(q => q.questionIndex)
)


const completedQuestions = computed(() => 
  Object.values(sampleData.questions)
    .filter(q => q.userAnswer !== "")
    .map(q => q.questionIndex)
)
const getButtonClass = computed(() => (n) => {
  if (isCompleted(n)) {
    return 'bg-blue-500 text-white'
  } else {
    return 'border border-dashed border-gray-400'
  }
})

// Methods
const isBookmarked = (n) => bookmarkedQuestions.value.includes(n)
const isCompleted = (n) => completedQuestions.value.includes(n)
const isSelected = (n) => sampleData.currentQuestionIndex === n
</script>
