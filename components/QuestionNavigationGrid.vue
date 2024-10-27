<template>
  <div class="question-navigation-grid">
    <h3 class="font-semibold mb-2">Section 1, Module 1: Reading and Writing Questions</h3>
    <div class="flex items-center gap-4 mb-2">
      <div class="flex items-center gap-1">
        <span class="w-3 h-3 rounded-full border border-gray-400"></span> Current
      </div>
      <div class="flex items-center gap-1">
        <span class="w-3 h-3 border border-dashed border-gray-400"></span> Unanswered
      </div>
      <div class="flex items-center gap-1">
        <span class="w-3 h-3 bg-blue-500"></span> For Review
      </div>
    </div>
    <div class="grid grid-cols-10 gap-2">
      <button
        v-for="n in sampleData.totalQuestions"
        :key="n"
        :class="[
          'w-8 h-8 p-0 relative text-center',
          getButtonClass(n)
        ]"
        @click="$emit('selectQuestion', n)"
      >
        {{ n }}
        <span 
          v-if="sampleData.currentQuestionIndex === n" 
          class="absolute -top-1 -left-1 w-2 h-2 bg-blue-500 rounded-full"
        ></span>
        <span 
          v-if="isBookmarked(n)" 
          class="absolute top-0 right-0 text-red-500 text-xs"
        >
          ★
        </span>
      </button>
    </div>
    <button 
      class="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      @click="$emit('goToReview')"
    >
      Go to Review Page
    </button>
  </div>
</template>

<script setup>
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

// Computed properties
const completedQuestions = computed(() => 
  Object.values(sampleData.questions)
    .filter(q => q.userAnswer !== "")
    .map(q => q.questionIndex)
)

const bookmarkedQuestions = computed(() => 
  Object.values(sampleData.questions)
    .filter(q => q.isBookmarked)
    .map(q => q.questionIndex)
)

const getButtonClass = computed(() => (n) => {
  if (completedQuestions.value.includes(n)) {
    return 'bg-blue-500 text-white'
  } else if (sampleData.currentQuestionIndex === n) {
    return 'border-2 border-blue-500'
  } else {
    return 'border border-dashed border-gray-400'
  }
})

// Methods
const isBookmarked = (n) => bookmarkedQuestions.value.includes(n)
</script>

<style scoped>
.question-navigation-grid button {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
</style>
