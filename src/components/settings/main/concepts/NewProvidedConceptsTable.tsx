"use client";
import { Concepts_provided } from "@/lib/general/generalTypes";
import OneTableRow from "./OneTableRow";
import { useSupabase } from "@/app/supabase-provider";
import { useRouter } from "next/navigation";

export default function NewProvidedConceptsTable({
  obj,
  planId,
}: {
  obj: Concepts_provided[];
  planId: number;
}) {
  const router = useRouter();
  const { supabase } = useSupabase();
  async function addToConceptsSelected({
    id,
    e,
    planId,
  }: {
    id: number;
    planId: number;
    e: React.MouseEvent<HTMLButtonElement>;
  }) {
    e.preventDefault();
    const { data, error } = await supabase
      .from("concepts_selected")
      .insert([{ provided_concepts: id, plan_id: planId, is_used: true }]);

    if (error) {
      throw new Error(error.message);
    } else {
      router.refresh();
    }
  }

  return (
    <table className="unused settings-table">
      <thead>
        <OneTableRow name={"Uued ametlikud mõisted, mis on plaani lisamata"} />
      </thead>
      <tbody>
        {obj.map((concept, index) => {
          const conceptName = concept.concept_name;
          const conceptDescription = concept.concept_description;
          const id = concept.id;
          return (
            <tr key={index}>
              <td>{conceptName}</td>
              <td>{conceptDescription}</td>
              <td>
                <button
                  onClick={(e) => addToConceptsSelected({ id, e, planId })}
                >
                  Lisa
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
