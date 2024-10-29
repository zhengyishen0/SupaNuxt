// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    // '@nuxtjs/supabase',
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "nuxt-lucide-icons", // '@formkit/auto-animate/nuxt'
    "@nuxt/eslint",
  ],
});
