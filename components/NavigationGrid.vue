<template>
  <div class="flex flex-col items-center mx-4">
    <h3 class="font-semibold text-center w-96">
      Section 1, Module 1: Reading and Writing Questions
    </h3>

    <!-- Navigation Indicators -->
    <div class="my-2 w-full">
      <Separator class="my-1" />
      <div class="flex items-center justify-center gap-4">
        <div class="flex items-center gap-1">
          <MapPin class="w-4 h-4" />
          <p class="text-sm">Current</p>
        </div>
        <div class="flex items-center gap-1">
          <span class="w-3 h-3 border border-dashed border-gray-400"></span>
          <p class="text-sm">Unanswered</p>
        </div>
        <div class="flex items-center gap-1">
          <Bookmark class="w-6 h-6 text-red-500" />
          <p class="text-sm">For Review</p>
        </div>
      </div>
      <Separator class="my-1" />
    </div>

    <!-- Navigation Grid -->
    <div class="grid grid-cols-10 gap-x-2 gap-y-3">
      <NavigationButton
        v-for="question in sampleData.questions"
        :key="question.questionIndex"
        :number="question.questionIndex"
        :is-bookmarked="question.isBookmarked"
        :is-current="question.questionIndex === sampleData.currentQuestionIndex"
        :is-completed="question.userAnswer !== ''" />
    </div>

    <!-- Go to Review Page -->
    <Button
      @click="goToReview"
      class="my-4 border-2 border-blue-500 text-blue-500 bg-white hover:bg-blue-500 hover:text-white rounded-full transition-colors">
      Go to Review Page
    </Button>
  </div>
</template>

<script setup lang="ts">
import { MapPin, Bookmark } from "lucide-vue-next";

const router = useRouter();

const goToReview = () => {
  router.push("/");
};

const sampleData = {
  currentQuestionIndex: 7,
  totalQuestions: 30,
  questions: {
    1: {
      questionIndex: 1,
      questionContext: "Context for Q1",
      questionText: "Question 1 text",
      isBookmarked: false,
      userAnswer: "User's answer for Q1",
    },
    2: {
      questionIndex: 2,
      questionContext: "Context for Q2",
      questionText: "Question 2 text",
      isBookmarked: false,
      userAnswer: "User's answer for Q2",
    },
    3: {
      questionIndex: 3,
      questionContext: "Context for Q3",
      questionText: "Question 3 text",
      isBookmarked: false,
      userAnswer: "User's answer for Q3",
    },
    4: {
      questionIndex: 4,
      questionContext: "Context for Q4",
      questionText: "Question 4 text",
      isBookmarked: true,
      userAnswer: "",
    },
    5: {
      questionIndex: 5,
      questionContext: "Context for Q5",
      questionText: "Question 5 text",
      isBookmarked: false,
      userAnswer: "User's answer for Q5",
    },
    6: {
      questionIndex: 6,
      questionContext: "Context for Q6",
      questionText: "Question 6 text",
      isBookmarked: false,
      userAnswer: "",
    },
    7: {
      questionIndex: 7,
      questionContext: "Context for Q7",
      questionText: "Question 7 text",
      isBookmarked: true,
      userAnswer: "",
    },
    8: {
      questionIndex: 8,
      questionContext: "Context for Q8",
      questionText: "Question 8 text",
      isBookmarked: true,
      userAnswer: "",
    },
    9: {
      questionIndex: 9,
      questionContext: "Context for Q9",
      questionText: "Question 9 text",
      isBookmarked: true,
      userAnswer: "",
    },
    10: {
      questionIndex: 10,
      questionContext: "Context for Q10",
      questionText: "Question 10 text",
      isBookmarked: false,
      userAnswer: "User's answer for Q10",
    },
    11: {
      questionIndex: 11,
      questionContext: "Context for Q11",
      questionText: "Question 11 text",
      isBookmarked: true,
      userAnswer: "",
    },
    12: {
      questionIndex: 12,
      questionContext: "Context for Q12",
      questionText: "Question 12 text",
      isBookmarked: false,
      userAnswer: "User's answer for Q12",
    },
    13: {
      questionIndex: 13,
      questionContext: "Context for Q13",
      questionText: "Question 13 text",
      isBookmarked: false,
      userAnswer: "",
    },
    14: {
      questionIndex: 14,
      questionContext: "Context for Q14",
      questionText: "Question 14 text",
      isBookmarked: true,
      userAnswer: "",
    },
    15: {
      questionIndex: 15,
      questionContext: "Context for Q15",
      questionText: "Question 15 text",
      isBookmarked: false,
      userAnswer: "User's answer for Q15",
    },
    16: {
      questionIndex: 16,
      questionContext: "Context for Q16",
      questionText: "Question 16 text",
      isBookmarked: false,
      userAnswer: "",
    },
    17: {
      questionIndex: 17,
      questionContext: "Context for Q17",
      questionText: "Question 17 text",
      isBookmarked: true,
      userAnswer: "User's answer for Q17",
    },
    18: {
      questionIndex: 18,
      questionContext: "Context for Q18",
      questionText: "Question 18 text",
      isBookmarked: false,
      userAnswer: "",
    },
    19: {
      questionIndex: 19,
      questionContext: "Context for Q19",
      questionText: "Question 19 text",
      isBookmarked: false,
      userAnswer: "User's answer for Q19",
    },
    20: {
      questionIndex: 20,
      questionContext: "Context for Q20",
      questionText: "Question 20 text",
      isBookmarked: true,
      userAnswer: "",
    },
    21: {
      questionIndex: 21,
      questionContext: "Context for Q21",
      questionText: "Question 21 text",
      isBookmarked: false,
      userAnswer: "User's answer for Q21",
    },
    22: {
      questionIndex: 22,
      questionContext: "Context for Q22",
      questionText: "Question 22 text",
      isBookmarked: true,
      userAnswer: "",
    },
    23: {
      questionIndex: 23,
      questionContext: "Context for Q23",
      questionText: "Question 23 text",
      isBookmarked: false,
      userAnswer: "User's answer for Q23",
    },
    24: {
      questionIndex: 24,
      questionContext: "Context for Q24",
      questionText: "Question 24 text",
      isBookmarked: false,
      userAnswer: "",
    },
    25: {
      questionIndex: 25,
      questionContext: "Context for Q25",
      questionText: "Question 25 text",
      isBookmarked: true,
      userAnswer: "User's answer for Q25",
    },
    26: {
      questionIndex: 26,
      questionContext: "Context for Q26",
      questionText: "Question 26 text",
      isBookmarked: false,
      userAnswer: "",
    },
    27: {
      questionIndex: 27,
      questionContext: "Context for Q27",
      questionText: "Question 27 text",
      isBookmarked: true,
      userAnswer: "",
    },
    28: {
      questionIndex: 28,
      questionContext: "Context for Q28",
      questionText: "Question 28 text",
      isBookmarked: false,
      userAnswer: "User's answer for Q28",
    },
    29: {
      questionIndex: 29,
      questionContext: "Context for Q29",
      questionText: "Question 29 text",
      isBookmarked: true,
      userAnswer: "",
    },
    30: {
      questionIndex: 30,
      questionContext: "Context for Q30",
      questionText: "Question 30 text",
      isBookmarked: false,
      userAnswer: "User's answer for Q30",
    },
  },
};
</script>
