<!-- pages/practice-test.vue -->
<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- Scrollable content -->
    <div class="flex-1 overflow-y-auto p-4">
      <h1 class="text-2xl font-semibold text-center mb-4">
        Choose a Full-Length Practice
      </h1>
      <Card class="max-w-2xl mx-auto mb-20">
        <CardContent class="space-y-8 my-6">
          <div class="space-y-6">
            <!-- Test Type Selection -->
            <div class="space-y-2">
              <Label class="block text-sm font-medium">
                Test Type*
                <span class="text-xs text-gray-500 float-right"
                  >* = Required</span
                >
              </Label>
              <Select v-model="testType">
                <SelectTrigger>
                  <SelectValue :placeholder="testType || 'SAT'" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    v-for="type in testTypes"
                    :key="type"
                    :value="type">
                    {{ type }}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <!-- Practice Test Selection -->
            <div class="space-y-2">
              <Label class="block text-sm font-medium">Practice Test*</Label>
              <Select v-model="practiceTest">
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    v-for="test in practiceTests"
                    :key="test"
                    :value="test">
                    {{ test }}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <!-- Accommodations Section -->
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <Label class="text-sm font-medium">
                  Accommodations and Supports
                </Label>
                <Switch v-model:checked="hasAccommodations" />
              </div>
              <p class="text-xs text-gray-500">
                Note: Selecting a testing accommodation here does not mean you
                will receive it on test day.
                <a href="#" class="text-blue-600">
                  Need more info about testing accommodations?
                </a>
              </p>
            </div>

            <!-- Accommodations Options - Only shown when hasAccommodations is true -->
            <template v-if="hasAccommodations">
              <!-- Extended Time Options -->
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <Label class="text-sm font-medium">
                    Reading: Extended Time
                  </Label>
                  <InfoIcon class="h-4 w-4 text-gray-400" />
                </div>
                <Select v-model="readingExtendedTime">
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50">50% Extended Time</SelectItem>
                    <SelectItem value="100">100% Extended Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <!-- Math Extended Time -->
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <Label class="text-sm font-medium">
                    Math: Extended Time
                  </Label>
                  <InfoIcon class="h-4 w-4 text-gray-400" />
                </div>
                <Select v-model="mathExtendedTime">
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50">50% Extended Time</SelectItem>
                    <SelectItem value="100">100% Extended Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <!-- Breaks Section -->
              <div class="space-y-4">
                <h3 class="text-sm font-medium">Breaks</h3>
                <div class="space-y-2">
                  <div
                    v-for="(break_option, index) in breakOptions"
                    :key="index"
                    class="flex items-center gap-2">
                    <Checkbox :id="break_option.id" v-model="selectedBreaks" />
                    <Label :for="break_option.id" class="text-sm">
                      {{ break_option.label }}
                    </Label>
                    <InfoIcon class="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>

              <!-- Other Options -->
              <div class="space-y-2">
                <h3 class="text-sm font-medium">Other</h3>
                <div class="flex items-center gap-2">
                  <Checkbox id="raised" v-model="raisedLineDrawings" />
                  <Label for="raised" class="text-sm">
                    Raised Line Drawings
                  </Label>
                  <InfoIcon class="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </template>
          </div>
        </CardContent>
      </Card>
    </div>

    <!-- Sticky bottom bar -->
    <footer
      class="sticky bottom-0 bg-white border-t border-gray-200 p-4 px-8 sm:px-12 md:px-24 flex justify-end">
      <Button variant="outline" @click="goBack" class="mr-4">Back</Button>
      <Button :disabled="!isFormValid" @click="goNext">Next</Button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { InfoIcon } from "lucide-vue-next";

// State
const testType = ref("");
const practiceTest = ref("");
const hasAccommodations = ref(false);
const readingExtendedTime = ref("");
const mathExtendedTime = ref("");
const raisedLineDrawings = ref(false);
const selectedBreaks = ref({
  extra: false,
  extended: false,
  needed: false,
});

// Constants
const testTypes = ["SAT", "PSAT-Related Assessments"];
const practiceTests = [
  "SAT Practice 1",
  "SAT Practice 2",
  "SAT Practice 3",
  "SAT Practice 4",
  "SAT Practice 5",
  "SAT Practice 6",
  "SAT Essay Practice 1",
  "SAT Essay Practice 2",
  "SAT Essay Practice 3",
];
const breakOptions = [
  { id: "extra", label: "Extra Breaks" },
  { id: "extended", label: "Extended Breaks" },
  { id: "needed", label: "Breaks as Needed" },
];

// Computed property to check if form is valid
const isFormValid = computed(() => {
  return testType.value !== "" && practiceTest.value !== "";
});

const router = useRouter();
const goBack = () => {
  router.push("/");
};
const goNext = () => {
  router.push("/practice");
};
</script>
