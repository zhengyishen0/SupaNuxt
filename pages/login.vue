<template>
  <div class="min-h-screen bg-blue-600 flex items-center justify-center">
    <SignInCard v-if="showSignIn" @switch-to-signup="toggleCard" />
    <SignUpCard v-if="!showSignIn" @switch-to-signin="toggleCard" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSignIn: true,
    };
  },
  methods: {
    toggleCard() {
      this.showSignIn = !this.showSignIn;
    },
  },
};
</script>
