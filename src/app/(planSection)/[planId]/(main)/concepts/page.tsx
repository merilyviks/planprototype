import { Self_plans } from "@/lib/general/generalTypes";
import { createServerClient } from "@/utils/supabase-server";

/* async function getPlanInfo({ planId }: { planId: number }) {
  const supabase = createServerClient();
  const { data: SelfPlan, error } = await supabase
    .from("concepts_selected")
    .select(`*`)
    .eq("id", planId)
    .single();

  console.log(SelfPlan);
  // Output: CA
  if (error) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(error.message);
  }
  const SelfPlanData: Self_plans = JSON.parse(JSON.stringify(SelfPlan));
  return SelfPlanData;
} */

export default async function Contents({
  params,
}: {
  params: { planId: number; selfPlan: string };
}) {
  const planId = 1 as number;
  /* const selfPlan = params.selfPlan; */

  /* const data = await getPlanInfo({ planId }); */
  /* console.log("miskit", data); */
  return (
    <>
      <h1>tereeee</h1>
      {/*  <h1>{JSON.stringify(data.company_info.company_name)}</h1> */}
    </>
  );
}
