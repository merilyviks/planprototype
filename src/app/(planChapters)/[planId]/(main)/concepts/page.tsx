import { Concepts_selected } from "@/lib/general/generalTypes";
import { createServerClient } from "@/utils/supabase-server";

/* export const revalidate = 0; */

async function getInfo({ planId }: { planId: number }) {
  const supabase = createServerClient();
  const { data: ConceptsData, error } = await supabase
    .from("concepts_selected")
    .select(`*, concepts_provided(*), concepts_added(*)`)
    .eq("plan_id", planId)
    .is("is_used", true)
    .order("position", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }
  const Concepts: Concepts_selected[] = JSON.parse(
    JSON.stringify(ConceptsData)
  );

  return Concepts;
}

export default async function Concepts({
  params: { planId },
}: {
  params: { planId: number };
}) {
  const data = await getInfo({ planId });
  return (
    <div className="concepts">
      <h1>Mõisted</h1>
      {data.map((concept, index) => {
        return (
          <div key={index}>
            <p>
              {concept.concepts_provided?.concept_name ??
                concept.concepts_added?.concept_name}
            </p>
            <p>
              {concept.concepts_provided?.concept_description ??
                concept.concepts_added?.concept_description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
