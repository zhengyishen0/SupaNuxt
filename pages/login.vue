<template>
  <div class="login-container">
    <h1>Welcome to Anno</h1>
    <button @click="handleAnonymousLogin" class="login-button">
      Login Anonymously
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useSupabaseClient } from '@nuxtjs/supabase'

const router = useRouter()
const supabase = useSupabaseClient()

const handleAnonymousLogin = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithSSO({
      provider: 'anonymous'
    })
    if (error) throw error
    
    // Redirect to home page or dashboard after successful login
    router.push('/')
  } catch (error) {
    console.error('Error:', error.message)
    // Handle error (e.g., show error message to user)
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.login-button {
  padding: 12px 24px;
  font-size: 18px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #0056b3;
}
</style>
