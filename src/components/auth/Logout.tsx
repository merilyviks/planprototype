"use client";

import { redirect } from "next/navigation";
import { useSupabase } from "../../app/supabase-provider";
import { TbLogout } from "react-icons/tb";
import { useRouter } from "next/navigation";

export default function Logout({
  text,
  isSeen,
}: {
  text: string;
  isSeen: boolean;
}) {
  const { supabase } = useSupabase();
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error.message);
    } else {
      router.push("/");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="logout icon-button text-button "
      style={{ visibility: isSeen ? "visible" : "hidden" }}
    >
      {text ? <p>{text}</p> : null}
      <TbLogout />
    </button>
  );
}
