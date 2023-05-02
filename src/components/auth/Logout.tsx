"use client";

import { redirect } from "next/navigation";
import { useSupabase } from "../../app/supabase-provider";
import { TbLogout } from "react-icons/tb";

export default function Logout({
  text,
  isSeen,
}: {
  text: string;
  isSeen: boolean;
}) {
  const { supabase } = useSupabase();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    redirect("http://localhost:3000/");
  };

  return (
    <button
      onClick={handleLogout}
      className="icon-button text-button logout"
      style={{ visibility: isSeen ? "visible" : "hidden" }}
    >
      {text ? <p>{text}</p> : null}
      <TbLogout />
    </button>
  );
}
