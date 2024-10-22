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