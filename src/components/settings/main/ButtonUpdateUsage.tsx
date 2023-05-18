"use client";
import { useSupabase } from "@/app/supabase-provider";
import { useRouter } from "next/navigation";

export default function ButtonUpdateUsage({
  id,
  dbTable,
  updateTo,
}: {
  id: number;
  dbTable: string;
  updateTo: boolean;
}) {
  const { supabase } = useSupabase();
  const router = useRouter();

  async function removeContent({
    id,
    e,
    dbTable,
    updateTo,
  }: {
    id: number;
    dbTable: string;
    updateTo: boolean;
    e: React.MouseEvent<HTMLButtonElement>;
  }) {
    e.preventDefault();
    console.log(updateTo);
    const { data, error } = await supabase
      .from(`${dbTable}`)
      .update({ is_used: updateTo })
      .eq("id", id);

    if (error) {
      throw new Error(error.message);
    } else {
      router.refresh();
    }
  }
  return (
    <button onClick={(e) => removeContent({ id, e, dbTable, updateTo })}>
      {updateTo ? "lisa" : "eemalda"}
    </button>
  );
}
