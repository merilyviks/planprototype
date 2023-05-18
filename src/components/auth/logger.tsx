"use client";

import { useSupabase } from "../../app/supabase-provider";

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
      <form>
        {/* <input placeholder="email@email.ee" type="email">
          dsa
          </input>
          <label
          label
          placeholder="password"
          type="password"
          value={none}
        ></label> */}
        <label htmlFor="emailAddress">Email</label>
        <input
          id="emailAddress"
          placeholder="email address"
          type="text"
        ></input>

        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}
