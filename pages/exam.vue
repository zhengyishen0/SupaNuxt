<!-- ExamInterface.vue -->
<template>
  <div class="bg-white h-screen">
    <ExamHeader />

    <div class="flex py-4 h-full mx-auto">
      <!-- Question Section -->
      <div class="w-1/2 mx-8">
        <p class="text-base">
          {{ questionContext }}
        </p>
      </div>

      <Separator orientation="vertical" class="h-auto mx-2" />

      <!-- Answer Section -->
      <div class="w-1/2 mx-8">
        <!-- Question Header -->
        <div
          class="flex items-center text-sm gap-1 bg-gray-100 justify-between">
          <div class="flex items-center space-x-2 mr-auto">
            <Badge
              class="rounded-none w-6 h-6 flex items-center justify-center">
              {{ questionNumber }}</Badge
            >
            <Bookmark
              :fill="isBookmarked ? 'red' : 'none'"
              :stroke="isBookmarked ? 'red' : 'black'"
              class="h-5 w-5 cursor-pointer"
              @click="toggleBookmark" />
            Mark for Review
          </div>
          <div
            class="p-1 rounded border border-black cursor-pointer mr-2"
            :class="[isStrikethrough ? 'bg-blue-500' : bg - white]"
            @click="toggleStrikethrough">
            <KeyboardOff
              :stroke="isStrikethrough ? 'white' : 'black'"
              class="h-4 w-4" />
          </div>
        </div>

        <p class="mb-4">
          {{ questionText }}
        </p>

        <!-- Options Section -->
        <div
          v-for="option in questionOptions"
          :key="option.id"
          class="space-y-2">
          <OptionButton
            :optionId="option.id"
            :optionText="option.text"
            :isStrikethrough="isStrikethrough" />
        </div>
      </div>
    </div>

    <ExamFooter
      :currentQuestion="currentQuestion"
      :totalQuestions="totalQuestions"
      :selectQuestion="selectQuestion"
      @onBack="handleBack"
      @onNext="handleNext" />
  </div>
</template>

<script setup>
import { Bookmark, KeyboardOff } from "lucide-vue-next";
import OptionButton from "~/components/OptionButton.vue";

const currentQuestion = ref(1);
const totalQuestions = 27;
const questionNumber = ref(1);
const questionText = ref(
  "Which choice completes the text with the most logical and precise word or phrase?"
);

const questionOptions = [
  { id: "A", text: "scholarly" },
  { id: "B", text: "melodic" },
  { id: "C", text: "jarring" },
  { id: "D", text: "personal" },
];

const selectQuestion = (questionNumber) => {
  currentQuestion.value = questionNumber;
  // Add any additional logic for selecting a question
};

const handleBack = () => {
  // Implement the logic for handling the back button
};

const handleNext = () => {
  // Implement the logic for handling the next button
};

const isBookmarked = ref(false);

const toggleBookmark = () => {
  isBookmarked.value = !isBookmarked.value;
  // Add any additional logic here when bookmark is toggled
  // e.g., save to store, make API call, etc.
};

const isStrikethrough = ref(false);

const toggleStrikethrough = () => {
  isStrikethrough.value = !isStrikethrough.value;
  // Add any additional logic here when strikethrough is toggled
  // e.g., save to store, make API call, etc.
};

const questionContext = ref(
  "In recommending Bao Phi's collection Sông I Sing, a librarian noted " +
    "that pieces by the spoken-word poet don't lose their _____ nature when " +
    "printed: the language has the same pleasant musical quality on the " +
    "page as it does when performed by Phi."
);
</script>
