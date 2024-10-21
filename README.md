# Nuxt 3 Supabase Shadcn UI Setup

## Start the project
```bash
bunx nuxi@latest init <project-name>
bun install -D typescript
```

## Install Supabase
```bash
bunx nuxi@latest module add supabase
```

Create `.env`
```js
SUPABASE_URL="https://example.supabase.co"
SUPABASE_KEY="<your_key>"
```

## Install Tailwind & Shadcn
```
bunx nuxi@latest module add @nuxtjs/tailwindcss
bunx nuxi@latest module add shadcn-nuxt
bunx shadcn-vue@latest init
```
