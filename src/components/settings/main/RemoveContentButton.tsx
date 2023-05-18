"use client";
import { useSupabase } from "@/app/supabase-provider";
import { useRouter } from "next/navigation";

export default function RemoveContentButton({ id }: { id: number }) {
  const { supabase } = useSupabase();
  const router = useRouter();

  async function removeContent({
    id,
    e,
  }: {
    id: number;
    e: React.MouseEvent<HTMLButtonElement>;
  }) {
    e.preventDefault();
    const { data, error } = await supabase
      .from("contents_selected")
      .update({ is_used: false })
      .eq("id", id);

    if (error) {
      throw new Error(error.message);
    } else {
      router.refresh();
    }
  }
  return <button onClick={(e) => removeContent({ id, e })}>eemalda</button>;
}
