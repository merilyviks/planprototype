"use client";

import { useSupabase } from "@/app/supabase-provider";
import { useRouter } from "next/navigation";

export default function DeleteUserAdded({
  id,
  tableName,
}: {
  id: number;
  tableName: string;
}) {
  const { supabase } = useSupabase();
  const router = useRouter();
  const deleteData = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.defaultPrevented;
    const { data, error } = await supabase
      .from(tableName)
      .delete()
      .eq("id", id);

    if (error) {
      throw new Error(error.message);
    } else {
      router.refresh();
    }
  };

  return (
    <button type="submit" onClick={(e) => deleteData(e)}>
      delete
    </button>
  );
}
