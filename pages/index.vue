<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="max-w-5xl mx-auto">
      <!-- Header -->
      <div class="flex items-center justify-between mb-8">
        <img src="/public/fasttrack-logo.png" alt="fasttrack" class="h-8" />
        <div class="flex items-center gap-2">
          <span>{{ userFullName }}</span>
          <Avatar>
            <AvatarFallback>{{ initials }}</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <!-- Welcome Message -->
      <h1 class="text-2xl text-blue-600 mb-8">Welcome, {{ firstName }}! Good luck on test day!</h1>

      <!-- Your Tests Section -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-bold">Your Tests</h2>
          <div class="flex items-center gap-2 w-96">
            <Tabs v-model="activeTestsTab" class="space-x-2">
              <TabsList>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="past">Past</TabsTrigger>
              </TabsList>
            </Tabs>
            <NuxtLink to="#" class="text-blue-600 text-sm">Don't see your test here?</NuxtLink>
          </div>
        </div>
        
        <Card class="p-6 w-96 hover:shadow-lg transition-shadow">
          <p class="font-semibold mb-2">You Have No Upcoming Tests</p>
          <p class="text-gray-600">
            Tests appear here a few weeks before test day. If you got a paper ticket from your school, 
            <button @click="handleSignOut" class="text-blue-600">sign out</button>
            and sign in with it.
          </p>
        </Card>
      </div>

      <!-- Practice and Prepare Section -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-bold">Practice and Prepare</h2>
          <div class="flex items-center gap-2 w-96">
            <Tabs v-model="activePracticeTab" class="space-x-2">
              <TabsList>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="past">Past</TabsTrigger>
              </TabsList>
            </Tabs>
            <NuxtLink to="#" class="text-blue-600 text-sm">Learn more about Bluebook practice</NuxtLink>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Active Tab Content -->
          <template v-if="activePracticeTab === 'active'">
            <PracticeCard
              :icon="Calculator"
              title="Test Preview"
              route="/test-preview"
            />
            
            <PracticeCard
              :icon="FileText"
              title="Full-Length Practice"
              route="/practice-selection"
            />

            <InProgressTestCard 
              v-for="test in practiceTests.filter(t => t.status === 'in_progress')" 
              :key="test.id" 
              :test="test"
            />
          </template>

          <!-- Past Tab Content -->
          <template v-if="activePracticeTab === 'past'">
            <CompletedTestCard 
              v-for="test in practiceTests.filter(t => t.status === 'completed')" 
              :key="test.id" 
              :test="test"
            />
          </template>
        </div>
      </div>

      <!-- Explore BigFuture Section -->
      <div>
        <h2 class="text-xl font-bold mb-4">Explore BigFuture</h2>
        <Card class="p-6 hover:shadow-lg transition-shadow">
          <div class="flex gap-6">
            <img 
              src="/public/graduates.jpeg" 
              alt="Graduates" 
              class="rounded-lg object-cover h-44"
            />
            <div class="space-y-4">
              <h3 class="text-xl font-semibold">Plan for Life After High School</h3>
              <p class="text-gray-600">
                Whether you're interested in a four-year university, community college, or career
                training, BigFuture has what you need to start planning your future, your way.
              </p>
              <Button>Go to BigFuture</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Calculator, FileText } from 'lucide-vue-next'

const activeTestsTab = ref('active')
const activePracticeTab = ref('active')

// Add this: Global variable for user's full name
const userFullName = ref('Keke Xie')

// Computed properties to process the user's name
const firstName = computed(() => userFullName.value.split(' ')[0])
const initials = computed(() => userFullName.value.split(' ').map(name => name[0]).join(''))

const practiceTests = ref([
  { id: 1, name: 'SAT Practice 1', status: 'in_progress', type: 'sat' },
  { id: 2, name: 'SAT Practice 2', status: 'in_progress', type: 'sat' },
  { id: 3, name: 'SAT Essay Practice 1', status: 'completed', type: 'essay' },
  { id: 4, name: 'SAT Practice 3', status: 'completed', type: 'sat' },
  { id: 5, name: 'SAT Essay Practice 2', status: 'in_progress', type: 'essay' },
])
</script> 
