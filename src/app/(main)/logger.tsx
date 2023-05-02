"use client";

import { useSupabase } from "../supabase-provider";

export default function Logger() {
  const { supabase } = useSupabase();

  /* const handleSignUp = async () => {
    await supabase.auth.signUp({
      email: "merily.viks@gmail.com",
      password: "parool123",
    });
  }; */

  const handleLogin = async () => {
    await supabase.auth.signInWithPassword({
      email: "merily.viks@gmail.com",
      password: "parool123",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
