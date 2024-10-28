<template>
  <Card class="w-full max-w-md">
    <CardHeader>
      <CardTitle class="text-2xl font-bold self-center">Sign In</CardTitle>
    </CardHeader>
    <CardContent>
      <form class="space-y-4" @submit.prevent="onSubmit">
        <FormField v-slot="{ field }" :name="'email'">
          <FormItem>
            <FormLabel>Email Address</FormLabel>
            <FormControl>
              <Input v-bind="field" type="email" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ field }" :name="'password'">
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input v-bind="field" type="password" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <div class="flex justify-between items-center">
          <Button type="submit" class="w-full">Sign In</Button>
        </div>
      </form>
      <div class="mt-4 text-center space-y-2">
        <NuxtLink
          class="text-sm text-blue-600 hover:underline"
          @click.prevent="$emit('switch-to-signup')"
        >
          Create Account
        </NuxtLink>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import * as z from "zod";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";

const formSchema = toTypedSchema(
  z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  }),
);

const { handleSubmit, values } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit((values) => {
  handleEmailSignIn(values.email, values.password);
});
</script>
