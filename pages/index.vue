// pages/index.vue
<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
      <img src="/public/logo.svg" alt="Bluebook" class="h-8" />
      <div class="flex items-center gap-2">
        <span>Zhengyi Shen</span>
        <Avatar>
          <AvatarFallback>ZS</AvatarFallback>
        </Avatar>
      </div>
    </div>

    <!-- Welcome Message -->
    <h1 class="text-2xl text-blue-600 mb-8">Welcome, Zhengyi! Good luck on test day!</h1>

    <!-- Your Tests Section -->
    <div class="mb-8">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-bold">Your Tests</h2>
        <div class="flex items-center gap-2">
          <Tabs v-model="activeTestsTab" class="space-x-2">
            <TabsList>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
            </TabsList>
          </Tabs>
          <NuxtLink to="#" class="text-blue-600 text-sm">Don't see your test here?</NuxtLink>
        </div>
      </div>
      
      <Card class="p-6">
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
        <div class="flex items-center gap-2">
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
          <Card class="p-6 hover:shadow-lg transition-shadow">
            <div class="flex flex-col items-center text-center">
              <div class="mb-4">
                <Calculator class="w-12 h-12 text-blue-600" />
              </div>
              <h3 class="font-semibold mb-2">Test Preview</h3>
            </div>
          </Card>
          
          <Card class="p-6 hover:shadow-lg transition-shadow">
            <div class="flex flex-col items-center text-center">
              <div class="mb-4">
                <FileText class="w-12 h-12 text-blue-600" />
              </div>
              <h3 class="font-semibold mb-2">Full-Length Practice</h3>
            </div>
          </Card>

          <Card class="p-6">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <h3 class="font-semibold">SAT Practice 1</h3>
                <Trash2 class="w-5 h-5 text-gray-400" />
              </div>
              <div class="flex items-center gap-2 text-gray-600">
                <Clock class="w-4 h-4" />
                <span>In Progress</span>
              </div>
              <Button>Resume</Button>
            </div>
          </Card>
        </template>

        <!-- Past Tab Content -->
        <template v-if="activePracticeTab === 'past'">
          <Card class="p-6">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <h3 class="font-semibold">SAT Practice 1</h3>
                <Trash2 class="w-5 h-5 text-gray-400" />
              </div>
              <div class="flex items-center gap-2 text-green-600">
                <Check class="w-4 h-4" />
                <span>Completed</span>
              </div>
              <Button variant="outline">View My Responses</Button>
            </div>
          </Card>

          <Card class="p-6">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <h3 class="font-semibold">SAT Essay Practice 1</h3>
                <Trash2 class="w-5 h-5 text-gray-400" />
              </div>
              <div class="flex items-center gap-2 text-green-600">
                <Check class="w-4 h-4" />
                <span>Completed</span>
              </div>
              <Button variant="outline">View My Responses</Button>
            </div>
          </Card>
        </template>
      </div>
    </div>

    <!-- Explore BigFuture Section -->
    <div>
      <h2 class="text-xl font-bold mb-4">Explore BigFuture</h2>
      <Card class="p-6">
        <div class="flex gap-6">
          <img 
            src="/" 
            alt="Graduates" 
            class="rounded-lg"
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
</template>

<script setup>
import { ref } from 'vue'
import { Calculator, FileText, Clock, Check, Trash2 } from 'lucide-vue-next'

const activeTestsTab = ref('active')
const activePracticeTab = ref('active')

const handleSignOut = () => {
  // Handle sign out logic
}
</script> 
