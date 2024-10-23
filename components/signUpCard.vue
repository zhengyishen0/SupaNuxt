<template>
    <Card class="w-full max-w-md">
        <CardHeader>
            <div class="flex justify-between items-center">
            <Button variant="ghost" @click="$emit('switch-to-signin')" class="text-sm text-gray-600 flex items-center">
                Back
            </Button>
            </div>
            <CardTitle class="text-2xl font-bold self-center">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
            <form @submit.prevent="onSubmit" class="space-y-4">
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
                <Button type="submit" class="w-full">Sign Up</Button>
            </div>
            </form>
        </CardContent>
    </Card>
  </template>
  
  <script setup lang="ts">
  import * as z from "zod";
  import { useForm } from "vee-validate";
  import { toTypedSchema } from "@vee-validate/zod";

  const emit = defineEmits(['switch-to-signin']);

  const formSchema = toTypedSchema(
    z.object({
      email: z.string().email("Invalid email address"),
      password: z.string().min(6, "Password must be at least 6 characters"),
    })
  );
  
  const { handleSubmit, values } = useForm({
    validationSchema: formSchema,
  });
  
  const onSubmit = handleSubmit((values) => {
    handleEmailSignUp(values.email, values.password);
    emit('switch-to-signin');
  });
  </script>
