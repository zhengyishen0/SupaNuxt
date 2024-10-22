export const handleSignOut = async () => {
  const supabase = useSupabaseClient()
  await supabase.auth.signOut()
  navigateTo('/login')
  
}

export const handleAnonymousLogin = async () => {
  const supabase = useSupabaseClient()
  const { data, error } = await supabase.auth.signInAnonymously()
  console.log(data)
  navigateTo('/')
}

export const handleEmailSignUp = async (email: string, password: string) => {
  const supabase = useSupabaseClient()
  const { data, error } = await supabase.auth.signUp({
  email: email,
  password: password,
})
  navigateTo('/')
}

export const handleEmailSignIn = async (email: string, password: string) => {
  const supabase = useSupabaseClient()
  const { data, error } = await supabase.auth.signInWithPassword({
  email: email,
  password: password,
})
  navigateTo('/')
}