"use client";

import { useSupabase } from "../../supabase-provider";

export default function Login() {
  const { supabase } = useSupabase();

  const handleLogin = async () => {
    await supabase.auth.signInWithPassword({
      email: "merily.viks@gmail.com",
      password: "parool123",
    });

    /*     ShowPlans() */
  };

  return (
    <div>
      <input></input>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
