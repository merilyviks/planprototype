/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { useSupabase } from "../../app/supabase-provider";
import { redirect } from "next/dist/server/api-utils";

export default function Login() {
  const [email, setEmail] = useState("test@test.ee");
  const [password, setPassword] = useState("parool");
  const { supabase } = useSupabase();

  const handleLogin = async () => {
    const email = await process.env.NEXT_PUBLIC_SUPA_EMAIL!;
    const pass = await process.env.NEXT_PUBLIC_SUPA_PASS!;
    await supabase.auth.signInWithPassword({
      email: email,
      password: pass,
    });
  };

  return (
    <div className="login">
      <div className="login-container">
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} disabled />
          <br />

          <label htmlFor="password">Parool</label>
          <input type="password" id="password" value={password} disabled />
        </form>
        <p>
          Emaili ja parooli pole vaja muuta, vajutage nupule "logi sisse".{" "}
          <br />
          Hetkel on veebilehele sisenemine ette antud kasutaja alt, kus on
          võimalik sisuga tutvuda, kuid tehtud tõid kustutada ei saa. Alates 10.
          juunist saab veebilehega tutvuda kirjutades töö autorile.
        </p>
        <button onClick={handleLogin} className="big-text-button">
          Logi sisse
        </button>
      </div>
    </div>
  );
}
