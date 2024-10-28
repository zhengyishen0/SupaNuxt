export const handleSignOut = async () => {
  const supabase = useSupabaseClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Sign out error:", error.message);
    return;
  }
  navigateTo("/login");
};

export const handleAnonymousLogin = async () => {
  const supabase = useSupabaseClient();
  const { data, error } = await supabase.auth.signInAnonymously();
  if (error) {
    console.error("Anonymous login error:", error.message);
    return;
  }
  console.log(data);
  navigateTo("/");
};

export const handleEmailSignUp = async (email: string, password: string) => {
  const supabase = useSupabaseClient();
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    // options: {
    //   emailRedirectTo: 'www.google.com',
    // },
  });
  if (error) {
    console.error("Email sign up error:", error.message);
    return;
  }
  // You might want to add a success message or redirect here
};

export const handleEmailSignIn = async (email: string, password: string) => {
  const supabase = useSupabaseClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    console.error("Email sign in error:", error.message);
    return;
  }
  navigateTo("/");
};
