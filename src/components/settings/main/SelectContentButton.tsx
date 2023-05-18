"use client";
import { useSupabase } from "@/app/supabase-provider";
import { useRouter } from "next/navigation";

export default function SelectContentButton({
  contentsNamed,
  contentsChosen,
  planId,
}: {
  contentsNamed: string;
  contentsChosen: number;
  planId: number;
}) {
  const { supabase } = useSupabase();
  const router = useRouter();

  async function removeContent({
    e,
  }: {
    e: React.MouseEvent<HTMLButtonElement>;
  }) {
    e.preventDefault();
    const { data, error } = await supabase
      .from("contents_selected")
      .insert([
        {
          contents_named: `${contentsNamed}`,
          contents_chosen: contentsChosen,
          is_used: true,
          plan_id: planId,
          uses_purpose: true,
          uses_supervisors: true,
          uses_manegment: true,
          uses_control: true,
          uses_docs: true,
        },
      ])

    if (error) {
      throw new Error(error.message);
    } else {
      router.refresh();
    }
  }
  return <button onClick={(e) => removeContent({ e })}>lisa</button>;
}
