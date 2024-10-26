# Nuxt 3 Supabase Shadcn UI Setup

## Start the project
```bash
npx nuxi@latest init <project-name>
npm install -D typescript
```

## Install ESLint & Prettier
```bash
npx nuxi module add eslint
# npx nuxi@latest module add prettier
```

## Install Supabase 
```bash
npx nuxi@latest module add supabase
```

Create `.env`
```js
SUPABASE_URL="https://example.supabase.co"
SUPABASE_KEY="<your_key>"
```

## Install Tailwind & Shadcn
```bash
npx nuxi@latest module add @nuxtjs/tailwindcss
npx nuxi@latest module add shadcn-nuxt
npx shadcn-vue@latest init
```

## Add Shadcn Components
```bash
npx shadcn-vue@latest add button
```


## Add Auto Animation
```bash
npm install @formkit/auto-animate
```

```js
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@formkit/auto-animate/nuxt'],
})
```